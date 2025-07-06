import React from "react";
import { motion } from "framer-motion";

const images = [
  "assets/images/food 1.png",
  "https://via.placeholder.com/400x300?text=Smoky+Goodness",
  "https://via.placeholder.com/400x300?text=BBQ+Squad",
  "https://via.placeholder.com/400x300?text=Flame+Show",
  "https://via.placeholder.com/400x300?text=Juicy+Ribs",
  "https://via.placeholder.com/400x300?text=Comic+BBQ+Moment"
];

const Gallery = () => {
  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative text-white py-20 px-6 md:px-12 font-body gallery-bg bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('assets/images/chefs-background.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-heading text-red-600 text-center mb-6 uppercase drop-shadow-lg tracking-widest" style={{ fontFamily: "'Bangers', cursive" }}>
          📸 The Grillery
        </h2>

        <p className="text-center text-xl md:text-2xl text-yellow-400 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide" style={{ fontFamily: "'Bangers', cursive" }}>
          Get a peek behind the smoke — where grills blaze, meat sizzles, and heroes pose with ribs like they’re trophies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {images.map((src, index) => (
    <div
      key={index}
      className="bg-[#f4e3c1] border-[6px] border-[#f4e3c1] shadow-xl rounded-none overflow-hidden transform hover:scale-105 transition duration-300"
    >
      <img
        src={src}
        alt={`Gallery ${index + 1}`}
        className="w-full h-64 object-cover"
      />
    </div>
  ))}
</div>


        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-16 mx-auto block px-10 py-4 bg-red-600 hover:bg-yellow-400 text-white hover:text-black font-heading text-xl uppercase tracking-wider border-[3px] border-white drop-shadow-lg"
          style={{ fontFamily: "'Bangers', cursive" }}
        >
          🎟️ Get Tickets
        </motion.button>
      </div>

      {/* Mobile background override */}
      <style>
        {`
          @media (max-width: 768px) {
            section.gallery-bg {
              background-image: url('assets/images/chefs-background.png') !important;
              background-position: center top !important;
              background-repeat: no-repeat !important;
              background-size: cover !important;
            }
          }
        `}
      </style>

      {/* Font Import */}
      <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
    </motion.section>
  );
};

export default Gallery;
