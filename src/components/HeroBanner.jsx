import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 10 }}
      className="bg-gradient-to-br from-red-600 to-yellow-400 text-white py-20 text-center"
    >
      <h1 className="text-6xl md:text-7xl font-heading mb-6 drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)] tracking-wider uppercase">🔥 Muma’s ‘Mazing BBQ 🔥</h1>
      <p className="text-xl md:text-2xl italic font-body">
        "Where the grill meets greatness — and the steak saves the day!"
      </p>
    </motion.section>
  );
};

export default HeroBanner;
