import React from "react";
import { motion } from "framer-motion";

const images = [
  "assets/images/food 1.png",
  "assets/images/food 5.png",
  "assets/images/food 7.png",
  "assets/images/food 11.png",
  "assets/images/food 10.png",
  "assets/images/food 4.png",
  "assets/images/food 3.png",
  "assets/images/food 2.png",
  "assets/images/food 6.png",
  "assets/images/food 12.png",
  "assets/images/food 13.png",
  "assets/images/food 14.png"
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
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-red-500 text-center mb-6 uppercase drop-shadow-md">
          📸 The Grillery
        </h2>

        <p className="text-center text-lg md:text-xl text-yellow-400 mb-10 font-bold max-w-3xl mx-auto leading-relaxed">
          Get a peek behind the smoke — where grills blaze, meat sizzles, and heroes pose with ribs like they’re trophies.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border-[3px] border-[#F4E0B9] shadow-lg transform hover:scale-105 transition duration-300 bg-black max-w-[95%] mx-auto aspect-[3/4] flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex space-x-4 overflow-x-auto snap-x snap-mandatory px-2">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80%] snap-center rounded-lg border-[3px] border-[#F4E0B9] shadow-md bg-black aspect-[3/4] overflow-hidden"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
          className="mt-16 mx-auto block px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-heading text-lg rounded-none border-2 border-white shadow-md transition-transform hover:scale-110"
        >
          Get Tickets
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
    </motion.section>
  );
};

export default Gallery;
