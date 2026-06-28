Cougar Electronics - Stripe Checkout cart integration

What changed:
- Cart checkout no longer goes to WhatsApp.
- Checkout Now now sends the full cart to a Node.js backend endpoint.
- The backend creates one Stripe Checkout Session for the total cart order.
- Product prices are validated on the backend using server/products.js, not from browser prices.
- Added success.html and cancel.html.
- Added webhook endpoint: /stripe-webhook.
- Added .env.example and package.json.

Local test:
1. Install Node.js 18 or newer.
2. Open this folder in terminal.
3. Run: npm install
4. Copy .env.example to .env
5. Put your Stripe secret key in .env:
   STRIPE_SECRET_KEY=sk_test_xxx
6. Set SITE_URL=http://localhost:4242
7. Run: npm start
8. Open: http://localhost:4242
9. Add products to cart and press Checkout Now.

Live hosting:
- Add these environment variables to your Node hosting provider:
  STRIPE_SECRET_KEY=sk_live_xxx
  STRIPE_WEBHOOK_SECRET=whsec_xxx
  STRIPE_CURRENCY=aed
  MAX_QTY_PER_ITEM=10
  SITE_URL=https://your-domain.com
- Never put sk_test or sk_live inside HTML, CSS, or browser JS.

Stripe webhook:
- Webhook URL:
  https://your-domain.com/stripe-webhook
- Event to listen for:
  checkout.session.completed

Important:
- Update product prices in server/products.js when you change prices on the website.
- The frontend uses product IDs and quantities only; the backend decides the real price.
