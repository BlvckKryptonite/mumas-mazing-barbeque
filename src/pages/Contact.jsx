
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import fireIcon from '../assets/images/fire_icon.png';

const Contact = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Muma's 'Mazing BBQ — Booking/Inquiry");
    const body = encodeURIComponent("Hi Muma, I saw your demo and I'd like to…");
    window.location.href = `mailto:mumathedeveloper@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-black text-white p-6"
    >
      {/* Home Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="bg-yellow-400 text-black p-3 rounded-full shadow-lg border-2 border-white"
          >
            <FaHome className="text-lg" />
          </motion.button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-heading text-yellow-400 mb-4">
            Ready to Cook? 🔥
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thanks for checking out this demo! While the BBQ here is virtual, my real specialty is grilling up sizzling dev solutions and mouth‑watering digital experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-black border-4 border-yellow-400 rounded-lg p-8 text-center head-chef-glow hover:head-chef-glow-hover transition-all duration-300"
        >
          <img src={fireIcon} alt="Fire Icon" className="w-16 h-16 mx-auto mb-6" />
          
          <h2 className="text-3xl font-heading text-yellow-300 mb-6">
            Let's Make It Happen!
          </h2>
          
          <div className="space-y-4 mb-8">
            <div className="text-left max-w-2xl mx-auto space-y-3">
              <p className="flex items-start text-gray-300">
                <span className="text-yellow-400 mr-3 mt-1">🍖</span>
                <span><strong>Custom Web App Development</strong> – From landing pages to full‑stack apps, cooked to perfection.</span>
              </p>
              <p className="flex items-start text-gray-300">
                <span className="text-yellow-400 mr-3 mt-1">🔥</span>
                <span><strong>Interactive & Animated UIs</strong> – Parallax, comic‑style effects, and scroll‑triggered magic that pops.</span>
              </p>
              <p className="flex items-start text-gray-300">
                <span className="text-yellow-400 mr-3 mt-1">🎨</span>
                <span><strong>Creative Web Design</strong> – I turn ordinary concepts into 'Mazing digital experiences.</span>
              </p>
              <p className="flex items-start text-gray-300">
                <span className="text-yellow-400 mr-3 mt-1">🚀</span>
                <span><strong>Demo → Live Deployment</strong> – I can take your idea from sketch to production on Replit, GitHub Pages, or your platform of choice.</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-semibold">
            <strong>Drop me a line and let's spice up your next big project —</strong> no grill required. 😎
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEmailClick}
            className="bg-red-600 hover:bg-red-700 text-white font-heading text-xl px-12 py-4 border-2 border-white rounded-lg shadow-lg uppercase tracking-wide flex items-center mx-auto gap-3"
          >
            <FaEnvelope />
            Message Me
          </motion.button>

          <p className="text-sm text-gray-400 mt-4">
            I typically respond within 24 hours!
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <Link
            to="/"
            className="text-yellow-400 hover:text-yellow-300 underline font-heading"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
