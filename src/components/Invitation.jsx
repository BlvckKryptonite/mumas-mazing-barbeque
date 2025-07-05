import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as Flames } from '../assets/flames.svg'; // <- Make sure you have an SVG flame asset

const Invitation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative bg-black text-red-100 py-24 px-6 text-center overflow-hidden"
    >
      {/* 🔥 Background flames SVG */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Flames className="w-full h-full object-cover" />
      </div>

      {/* You can add a bg-[url('path/to/bg.png')] or keep it solid */}
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>

      {/* Heading with glow animation */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6, type: 'spring' }}
        className="relative z-10 text-4xl md:text-5xl font-heading uppercase mb-10 tracking-widest text-red-500 drop-shadow-lg animate-glow"
      >
        You’re Invited to Muma’s ‘Mazing Barbeque
      </motion.h2>

      {/* Description */}
      <motion.p
        className="relative z-10 max-w-3xl mx-auto text-lg md:text-xl font-body leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        🔥 <strong className="text-yellow-400">Enter the BBQverse</strong>… a world of sizzling ribs, juicy steaks, 
        succulent strips and all-around grilled goodness. Behold the <span className="text-orange-400 font-semibold">Legendary Brisket of Justice</span>,
        forged over flame and seasoned with destiny!
      </motion.p>

      {/* 🌴 Backyard Battle Arena */}
      <motion.p
        className="relative z-10 max-w-3xl mx-auto text-lg md:text-xl font-body mt-6 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        🌴 <span className="text-green-400 font-semibold">Set in the fiery heart of the neighborhood</span>, where smoke swirls like battle cries and tongs clash
        like swords — Muma's backyard transforms into a grill-powered arena of flavor!
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.07, rotate: [-1, 1, 0], transition: { yoyo: Infinity, duration: 0.3 } }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="relative z-10 mt-12 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold font-heading text-xl rounded-none border-2 border-white shadow-lg transition-transform"
      >
        Get Tickets
      </motion.button>
    </motion.section>
  );
};

export default Invitation;
