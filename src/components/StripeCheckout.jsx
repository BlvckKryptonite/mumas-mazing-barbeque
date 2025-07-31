
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const StripeCheckout = ({ ticketType, price, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [stripe, setStripe] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    quantity: 1
  });

  useEffect(() => {
    const initializeStripe = async () => {
      const stripeInstance = await stripePromise;
      setStripe(stripeInstance);
    };
    initializeStripe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe) {
      alert('Stripe has not loaded yet. Please try again.');
      return;
    }

    setIsProcessing(true);
    
    try {
      const totalAmount = parseInt(price.replace('$', '')) * formData.quantity;
      
      // Create payment intent on your backend (you'll need to implement this endpoint)
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount * 100, // Stripe expects cents
          currency: 'usd',
          ticketType,
          quantity: formData.quantity,
          customerInfo: {
            email: formData.email,
            name: formData.name,
            phone: formData.phone
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Confirm payment with Stripe
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            // For demo purposes, we'll use a test card
            // In production, you'd use Stripe Elements for card input
          },
          billing_details: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          },
        },
      });

      if (error) {
        throw error;
      }

      if (paymentIntent.status === 'succeeded') {
        alert(`🎉 Success! Your ${ticketType} ticket(s) have been reserved! Check your email for confirmation.`);
        onClose();
      }
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert(`❌ Payment failed: ${error.message || 'Please try again.'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // For demo purposes, we'll show a simplified form
  // In production, you'd integrate Stripe Elements for secure card input
  const handleDemoPayment = async () => {
    setIsProcessing(true);
    
    try {
      // Simulate successful payment for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert(`🎉 Demo Payment Success! Your ${ticketType} ticket(s) have been reserved! 
      
Note: This is a demo. In production, real payment processing would occur here.`);
      onClose();
    } catch (error) {
      alert('❌ Demo payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-gray-900 border-4 border-yellow-400 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading text-yellow-400">
            {ticketType}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-red-400 text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="mb-6 p-4 bg-red-600 rounded border-2 border-white">
          <p className="text-white text-lg font-bold">
            Total: {price} × {formData.quantity} = ${parseInt(price.replace('$', '')) * formData.quantity}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-2">Email *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-white border-2 border-gray-600 rounded focus:border-yellow-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-white border-2 border-gray-600 rounded focus:border-yellow-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-white border-2 border-gray-600 rounded focus:border-yellow-400"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Quantity</label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 text-white border-2 border-gray-600 rounded focus:border-yellow-400"
            >
              {[1,2,3,4,5,6,7,8].map(num => (
                <option key={num} value={num}>{num} ticket{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          {/* Demo Payment Button */}
          <motion.button
            type="button"
            onClick={handleDemoPayment}
            disabled={isProcessing}
            whileHover={!isProcessing ? { scale: 1.05 } : {}}
            className={`w-full py-4 font-heading text-lg border-2 border-white transition ${
              isProcessing 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              `Demo Purchase - $${parseInt(price.replace('$', '')) * formData.quantity}`
            )}
          </motion.button>
        </form>

        <div className="mt-4 p-3 bg-yellow-900 border border-yellow-400 rounded">
          <p className="text-yellow-200 text-sm">
            🚧 <strong>Demo Mode:</strong> This is using demo payment processing. 
            For production, integrate with your backend API and Stripe Elements for secure card processing.
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          🔒 Secure payment powered by Stripe
        </p>
      </motion.div>
    </motion.div>
  );
};

export default StripeCheckout;
