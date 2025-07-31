
import React from 'react';
import { motion } from 'framer-motion';

const FireTransition = () => {
  return (
    <motion.div
      className="w-full h-8 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    />
  );
};

export default FireTransition;
