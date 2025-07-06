import React from 'react';
import { motion } from 'framer-motion';
import GraphemeSplitter from 'grapheme-splitter';
import heroBanner from '/assets/images/herobanner.png';
import heroBannerVertical from '/assets/images/herobannervertical.png';

const splitter = new GraphemeSplitter();
const headlineChars = splitter.splitGraphemes("🔥 Muma’s ‘Mazing BBQ 🔥");

const HeroBanner = () => {
  return (
    <motion.section
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 10 }}
      className="relative w-full min-h-[80vh] md:h-screen bg-cover bg-no-repeat bg-center flex items-center px-4 sm:px-6 md:px-20"
      style={{
        backgroundImage: `url(${heroBanner})`,
      }}
    >
      {/* Mobile background override */}
      <style>
        {`
          @media (max-width: 768px) {
            section {
              background-image: url(${heroBannerVertical}) !important;
              background-position: center top !important;
            }
          }
        `}
      </style>

      {/* Background picture overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>

      <div className="z-10 w-full max-w-[900px] text-center md:text-right md:ml-auto md:mr-12 lg:mr-24">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-[4rem] font-heading text-white mb-4 leading-tight tracking-wider"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.04,
              },
            },
          }}
        >
          {headlineChars.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`inline-block animate-glow ${
                char === ' ' ? 'mx-[4px]' : 'mx-[1px]'
              }`}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-2xl font-body italic text-white px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          "Where the grill meets greatness & steak saves the day!"
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↓
      </motion.div>
    </motion.section>
  );
};

export default HeroBanner;
