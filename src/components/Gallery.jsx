import React from "react";
import { motion } from "framer-motion";

const images = [
  "assets/images/food 1.png",
  "assets/images/food 5.png",
  "assets/images/food 4.png",
  "https://via.placeholder.com/400x300?text=Flame+Show",
  "https://via.placeholder.com/400x300?text=Juicy+Ribs",
  "https://via.placeholder.com/400x300?text=Comic+BBQ+Moment",
  "https://via.placeholder.com/400x300?text=Flame+Show",
  "https://via.placeholder.com/400x300?text=Juicy+Ribs",
  "https://via.placeholder.com/400x300?text=Comic+BBQ+Moment",
  "https://via.placeholder.com/400x300?text=Comic+BBQ+Moment",
  "https://via.placeholder.com/400x300?text=Comic+BBQ+Moment",
  "https://via.placeholder.com/400x300?text=Comic+BBQ+Moment",
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
        <h2 className="text-4xl md:text-5xl font-heading text-red-500 text-center mb-6 uppercase drop-shadow-md">
          📸 The Grillery
        </h2>

        <p className="text-center text-lg md:text-xl text-yellow-400 mb-12 font-heading font-bold">
          Get a peek behind the smoke — where grills blaze, meat sizzles, and
          heroes pose with ribs like they’re trophies.
        </p>

        {/* Desktop grid layout */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-[#f4e3c1] border-[6px] border-[#f4e3c1] shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[22rem] sm:h-[28rem] object-contain bg-black"
              />
            </div>
          ))}
        </div>

        {/* Mobile horizontal scroll layout */}
        <div className="sm:hidden flex space-x-6 overflow-x-auto snap-x snap-mandatory px-2 py-4 -mx-2">
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-[80%] bg-[#f4e3c1] border-[6px] border-[#f4e3c1] shadow-xl snap-start flex-shrink-0 transform hover:scale-105 transition duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[22rem] sm:h-[28rem] object-contain bg-black"
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

      {/* Momentum scroll hiding scrollbar */}
      <style>
        {`
          .snap-x::-webkit-scrollbar {
            display: none;
          }
          .snap-x {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

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
