import React from "react";
import { motion } from "framer-motion";

const Invitation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="invitation-bg relative bg-black text-red-100 py-24 px-6 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/assets/images/invitation-background.png')]"
    >
      {/* Mobile override to force correct background on small screens */}
      <style>
        {`
          @media (max-width: 768px) {
            section.invitation-bg {
              background-image: url('/assets/images/invitation-background.png') !important;
              background-position: center top !important;
            }
          }
        `}
      </style>

      {/* Background image overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6 tracking-wide text-red-500 drop-shadow-md">
          You’re Invited!
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl font-body leading-relaxed">
          🍖 <strong className="text-yellow-400">Enter the mouth-watering BBQverse...</strong><br></br> A world of sizzling ribs, juicy steaks,
          succulent strips and all-around grilled goodness. <br></br>
        </p>

        <p className="max-w-3xl mx-auto text-lg md:text-xl font-body mt-6 leading-relaxed">
          🌴{" "}
          <span className="text-green-400 font-semibold">Set in the fiery heart of the neighborhood</span>, where smoke
          swirls like battle cries and tongs clash like swords — Muma's backyard transforms into a grill-powered arena
          of flavor!
        </p>

        <motion.button
          whileHover={{
            scale: 1.07,
            rotate: [-1, 1, 0],
            transition: { yoyo: Infinity, duration: 0.3 },
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold font-heading text-xl rounded-none border-2 border-white shadow-lg transition-transform"
        >
          Get Tickets
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Invitation;
