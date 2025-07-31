
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Create checkout session endpoint
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceId, tierName, price, quantity = 1 } = req.body;

    // Convert price string to cents (remove $ and convert to number)
    const priceInCents = Math.round(parseFloat(price.replace('$', '')) * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${tierName} - Muma's Mazing BBQ Event`,
              description: 'BBQ Event Ticket - Saturday, August 9, 1:00PM CDT',
              images: [`${process.env.VITE_APP_URL || 'https://mumas-mazing-barbeque.replit.app'}/muma-logo.png`],
            },
            unit_amount: priceInCents,
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.VITE_APP_URL || 'https://mumas-mazing-barbeque.replit.app'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VITE_APP_URL || 'https://mumas-mazing-barbeque.replit.app'}/tickets`,
      metadata: {
        tier: tierName,
        event: 'Mumas Mazing BBQ',
        date: 'August 9, 2025',
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get checkout session endpoint
app.get('/api/checkout-session', async (req, res) => {
  try {
    const { session_id } = req.query;

    if (!session_id) {
      return res.status(400).json({ error: 'Session ID is required' });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    res.status(200).json({
      id: session.id,
      customer_email: session.customer_email,
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      metadata: session.metadata,
    });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
