import React from 'react';

const galleryImages = [
  "https://via.placeholder.com/300x200?text=Sizzling+Ribs",
  "https://via.placeholder.com/300x200?text=Grill+Masters",
  "https://via.placeholder.com/300x200?text=Juicy+Steaks",
  "https://via.placeholder.com/300x200?text=BBQ+Crowd",
  "https://via.placeholder.com/300x200?text=Flaming+Fun",
  "https://via.placeholder.com/300x200?text=Saucy+Goodness",
];

const Gallery = () => {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">🎞️ BBQ Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition duration-300"
          >
            <img
              src={src}
              alt={`BBQ photo ${idx + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
