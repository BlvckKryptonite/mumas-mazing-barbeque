
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2000);
      }}
    >
      <div className="text-center">
        <motion.div
          className="text-6xl font-heading text-red-500 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          🔥
        </motion.div>
        <motion.h1
          className="text-4xl font-heading text-white mb-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          MUMA'S 'MAZING
        </motion.h1>
        <motion.h2
          className="text-2xl font-heading text-yellow-400"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          BARBEQUE
        </motion.h2>
        <motion.div
          className="mt-8 w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
