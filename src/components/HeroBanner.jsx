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
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">🔥 Muma’s ‘Mazing BBQ 🔥</h1>
      <p className="text-xl md:text-2xl italic">
        "Where the grill meets greatness — and the steak saves the day!"
      </p>
    </motion.section>
  );
};

export default HeroBanner;
