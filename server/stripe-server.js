
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency, ticketType, quantity, customerInfo } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata: {
        ticketType,
        quantity: quantity.toString(),
        customerEmail: customerInfo.email,
        customerName: customerInfo.name,
        customerPhone: customerInfo.phone || 'Not provided'
      },
      receipt_email: customerInfo.email,
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(400).send({
      error: {
        message: error.message,
      },
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Stripe server running on port ${PORT}`);
});
