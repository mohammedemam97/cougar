const corsHeaders = {
  "Access-Control-Allow-Origin": "https://cougar-319.pages.dev",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const PRODUCTS: Record<string, { name: string; price: number }> = {
  "1": { name: "iPhone 16 Pro Max 256GB", price: 4699 },
  "2": { name: "iPhone 16 Pro 256GB", price: 4299 },
  "3": { name: "iPhone 16 Plus 128GB", price: 3399 },
  "4": { name: "iPhone 16 128GB", price: 2999 },
  "5": { name: "iPhone 15 Pro Max 256GB", price: 3799 },
  "6": { name: "iPhone 15 Pro 128GB", price: 3199 },
  "7": { name: "iPhone 15 Plus 128GB", price: 2849 },
  "8": { name: "iPhone 15 128GB", price: 2499 },
  "9": { name: "iPhone 14 Pro Max 256GB", price: 2899 },
  "10": { name: "iPhone 14 Pro 128GB", price: 2449 },
  "11": { name: "iPhone 14 Plus 128GB", price: 1949 },
  "12": { name: "iPhone 14 128GB", price: 1749 },
  "13": { name: "iPhone 13 Pro Max 256GB", price: 2099 },
  "14": { name: "iPhone 13 Pro 128GB", price: 1799 },
  "15": { name: "iPhone 13 128GB", price: 1399 },
  "16": { name: "iPhone 13 Mini 128GB", price: 1199 },
  "17": { name: "iPhone 12 Pro Max 256GB", price: 1649 },
  "18": { name: "iPhone 12 Pro 128GB", price: 1399 },
  "19": { name: "iPhone 12 128GB", price: 1049 },
  "20": { name: "iPhone 12 Mini 64GB", price: 899 },
  "21": { name: "iPhone 11 Pro Max 256GB", price: 1199 },
  "22": { name: "iPhone 11 Pro 64GB", price: 999 },
  "23": { name: "iPhone 11 128GB", price: 849 },
  "24": { name: "iPhone XS Max 256GB", price: 749 },
  "25": { name: "iPhone XS 64GB", price: 649 },
  "26": { name: "iPhone XR 128GB", price: 599 },
  "27": { name: "iPhone X 64GB", price: 499 },
  "28": { name: "iPhone SE 2022 64GB", price: 649 },
  "29": { name: "iPhone 8 64GB", price: 299 },
  "30": { name: "iPhone 8 Plus 64GB", price: 349 },
};

type CartItem = { id: string | number; quantity: number; color?: string; storage?: string };

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
  }

  try {
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    const currency = Deno.env.get("STRIPE_CURRENCY") || "aed";
    const siteUrl = Deno.env.get("SITE_URL") || "https://cougar-319.pages.dev";
    const maxQty = Number(Deno.env.get("MAX_QTY_PER_ITEM") || "10");

    if (!stripeSecretKey) {
      return Response.json({ error: "Missing STRIPE_SECRET_KEY" }, { status: 500, headers: corsHeaders });
    }

    const body = await req.json();
    const cart = Array.isArray(body.cart) ? body.cart as CartItem[] : Array.isArray(body.items) ? body.items as CartItem[] : [];

    if (!cart.length) {
      return Response.json({ error: "Cart is empty" }, { status: 400, headers: corsHeaders });
    }

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("success_url", `${siteUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`);
    params.append("cancel_url", `${siteUrl}/cancel.html`);
    params.append("phone_number_collection[enabled]", "true");
    params.append("billing_address_collection", "required");

    cart.forEach((item, index) => {
      const product = PRODUCTS[String(item.id)];
      if (!product) throw new Error(`Unknown product id: ${item.id}`);
      const quantity = Math.max(1, Math.min(Number(item.quantity || 1), maxQty));
      const labelParts = [product.name, item.color, item.storage].filter(Boolean);
      params.append(`line_items[${index}][price_data][currency]`, currency);
      params.append(`line_items[${index}][price_data][product_data][name]`, labelParts.join(" - "));
      params.append(`line_items[${index}][price_data][unit_amount]`, String(Math.round(product.price * 100)));
      params.append(`line_items[${index}][quantity]`, String(quantity));
    });

    const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const stripeData = await stripeRes.json();

    if (!stripeRes.ok) {
      return Response.json({ error: "Stripe checkout failed", message: stripeData?.error?.message || "Unknown Stripe error" }, { status: 500, headers: corsHeaders });
    }

    return Response.json({ url: stripeData.url }, { headers: corsHeaders });
  } catch (error) {
    return Response.json({ error: "Checkout backend error", message: error instanceof Error ? error.message : String(error) }, { status: 500, headers: corsHeaders });
  }
});
