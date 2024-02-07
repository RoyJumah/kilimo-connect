export async function getAllCheckoutSessions() {
  const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
  const sessions = await stripe.checkout.sessions.list({
    limit: 3,
  });

  return sessions.data;
}
