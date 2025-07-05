import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://via.placeholder.com/400x300?text=Grill+Masterpiece",
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
      className="bg-black text-white py-20 px-4"
    >
      <h2 className="text-4xl md:text-5xl font-heading text-red-500 text-center mb-10 uppercase drop-shadow-md">
        📸 The Grillery
      </h2>

      <p className="text-center text-lg text-gray-300 mb-10 font-body">
        Witness the sizzle, the spectacle, and the sheer comic book chaos of Muma’s ‘Mazing BBQ.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border-4 border-white shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      <button className="mt-16 mx-auto block px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-heading text-lg rounded-none border-2 border-white shadow-md transition-transform hover:scale-110">
        🎟️ Get Tickets
      </button>
    </motion.section>
  );
};

export default Gallery;
