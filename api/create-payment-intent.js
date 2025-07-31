// /api/create-payment-intent.js (Node serverless function on Vercel)
import Stripe from 'stripe';

// Optional: compute price on the server (recommended)
const PRICE_TABLE = {
  standard: 1500,   // $15.00 (amounts are in the smallest currency unit)
  vip: 3500,        // $35.00
  family: 5000      // $50.00
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const { currency = 'usd', ticketType = 'standard', quantity = 1, customerInfo = {} } = req.body || {};

    // ✅ SECURITY: Determine the amount on the server, not from the client
    const unitAmount = PRICE_TABLE[ticketType] ?? PRICE_TABLE.standard;
    const amount = unitAmount * Number(quantity || 1);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata: {
        ticketType,
        quantity: String(quantity),
        customerEmail: customerInfo.email || '',
        customerName: customerInfo.name || '',
        customerPhone: customerInfo.phone || 'Not provided'
      },
      receipt_email: customerInfo.email || undefined,
      automatic_payment_methods: { enabled: true }
    });

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return res.status(400).json({ error: { message: error.message } });
  }
}