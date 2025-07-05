import React from 'react';
import { motion } from 'framer-motion';

const Invitation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-black text-red-100 py-20 px-6 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6 tracking-wide text-red-500 drop-shadow-md">
        You’re Invited to Muma’s ‘Mazing Barbeque
      </h2>

      <p className="max-w-3xl mx-auto text-lg md:text-xl font-body leading-relaxed">
        🔥 <strong className="text-yellow-400">Enter the BBQverse</strong>… a world of sizzling ribs, juicy steaks, 
        succulent strips and all-around grilled goodness. Behold the <span className="text-orange-400 font-semibold">Legendary Brisket of Justice</span>,
        forged over flame and seasoned with destiny!
      </p>

      <p className="max-w-3xl mx-auto text-lg md:text-xl font-body mt-6 leading-relaxed">
        🌴 <span className="text-green-400 font-semibold">Set in the fiery heart of the neighborhood</span>, where smoke swirls like battle cries and tongs clash
        like swords — Muma's backyard transforms into a grill-powered arena of flavor!
      </p>

      <button className="mt-10 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold font-heading text-xl rounded-none border-2 border-white shadow-lg transition-transform transform hover:scale-105">
        🎟️ Get Tickets
      </button>
    </motion.section>
  );
};

export default Invitation;
