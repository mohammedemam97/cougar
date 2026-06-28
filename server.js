'use strict';

require('dotenv').config();

const path = require('path');
const express = require('express');
const Stripe = require('stripe');
const { getProductById } = require('./server/products');

const app = express();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const siteUrl = (process.env.SITE_URL || 'http://localhost:4242').replace(/\/$/, '');
const currency = (process.env.STRIPE_CURRENCY || 'aed').toLowerCase();
const maxQtyPerItem = Number(process.env.MAX_QTY_PER_ITEM || 10);

if (!stripeSecretKey) {
  console.warn('Missing STRIPE_SECRET_KEY. Add it to .env before creating real checkout sessions.');
}

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

app.post('/stripe-webhook', express.raw({ type: 'application/json' }), (request, response) => {
  if (!stripe || !stripeWebhookSecret) {
    return response.status(400).send('Stripe webhook is not configured.');
  }

  let event;
  try {
    const signature = request.headers['stripe-signature'];
    event = stripe.webhooks.constructEvent(request.body, signature, stripeWebhookSecret);
  } catch (error) {
    console.error('Webhook signature verification failed:', error.message);
    return response.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('Paid Stripe Checkout session:', session.id, session.metadata || {});
    // TODO: Save the paid order in your database or send your fulfillment email here.
  }

  return response.json({ received: true });
});

app.use(express.json({ limit: '100kb' }));
app.use(express.static(path.join(__dirname), { extensions: ['html'] }));

app.get('/api/health', (_request, response) => {
  response.json({ ok: true });
});

app.post('/api/create-checkout-session', async (request, response) => {
  try {
    if (!stripe) {
      return response.status(500).json({ error: 'Stripe secret key is not configured on the server.' });
    }

    const items = Array.isArray(request.body?.items) ? request.body.items : [];
    if (!items.length) {
      return response.status(400).json({ error: 'Cart is empty.' });
    }

    const lineItems = [];
    const orderSummary = [];

    for (const item of items) {
      const product = getProductById(item.id);
      if (!product) {
        return response.status(400).json({ error: `Invalid product id: ${item.id}` });
      }

      const quantity = Math.max(1, Math.min(maxQtyPerItem, parseInt(item.quantity, 10) || 1));
      const selectedColor = String(item.color || product.color).slice(0, 60);
      const selectedStorage = String(product.storage).slice(0, 30);

      const productData = {
        name: `${product.name} ${selectedStorage}`,
        description: `${product.status} - ${selectedColor} - ${product.battery}`
      };

      // Stripe can reject local/non-public image URLs in Checkout Sessions.
      // Only send product images when the site is live on HTTPS.
      if (siteUrl.startsWith('https://')) {
        productData.images = [`${siteUrl}/${product.image.replace(/^\.\//, '')}`];
      }

      lineItems.push({
        price_data: {
          currency,
          unit_amount: Math.round(product.priceAed * 100),
          product_data: productData
        },
        quantity
      });

      orderSummary.push(`${product.name} ${selectedStorage} ${selectedColor} x${quantity}`);
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      success_url: `${siteUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel.html`,
      metadata: {
        store: 'Cougar Electronics',
        order_summary: orderSummary.join(' | ').slice(0, 500)
      }
    });

    return response.json({ url: session.url });
  } catch (error) {
    console.error('Stripe Checkout error:', error.message || error);
    if (error.raw) {
      console.error('Stripe raw error:', JSON.stringify({
        type: error.raw.type,
        code: error.raw.code,
        param: error.raw.param,
        message: error.raw.message,
        requestId: error.raw.requestId,
        statusCode: error.statusCode
      }, null, 2));
    }
    return response.status(500).json({
      error: 'Unable to create Stripe Checkout session.',
      details: error.message || 'Unknown Stripe error'
    });
  }
});

const port = Number(process.env.PORT || 4242);
app.listen(port, () => {
  console.log(`Cougar Electronics app running on ${siteUrl} / port ${port}`);
});
