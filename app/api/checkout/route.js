import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { items } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: items.map(item => ({
      price_data: {
        currency: "eur",
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    })),
    success_url: process.env.NEXT_PUBLIC_BASE_URL + "/success",
    cancel_url: process.env.NEXT_PUBLIC_BASE_URL + "/cart",
  });

  return new Response(JSON.stringify({ url: session.url }));
}