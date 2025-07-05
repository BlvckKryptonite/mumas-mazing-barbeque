import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-br from-black via-red-800 to-yellow-500 text-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="text-5xl md:text-6xl font-heading mb-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
        >
          🔥 Muma’s ‘Mazing BBQ 🔥
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl italic font-body mb-8"
        >
          “Where the grill meets greatness — and the steak saves the day!”
        </motion.p>

        {/* Hero Image Placeholder */}
        <motion.img
          src="/images/muma-hero.png" // Image placeholder
          alt="Muma the Grillmaster"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 12 }}
          className="mt-8 mx-auto max-w-md sm:max-w-lg rounded-xl shadow-2xl border-4 border-white"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
