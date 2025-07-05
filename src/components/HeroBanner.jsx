import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 10 }}
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-end px-6 md:px-20"
      style={{ backgroundImage: "url('assets/images/herobanner.png')" }} // Banner image
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-xl max-w-xl text-right">
        <h1 className="text-4xl md:text-6xl font-heading text-white mb-4 leading-tight">
          🔥 Muma’s ‘Mazing BBQ 🔥
        </h1>
        <p className="text-lg md:text-2xl font-body italic text-red-300">
          "Where the grill meets greatness — and the steak saves the day!"
        </p>
      </div>
    </motion.section>
  );
};

export default HeroBanner;