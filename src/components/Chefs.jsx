import React from 'react';
import { motion } from 'framer-motion';

const chefs = [
  {
    name: "Muma the Grillmaster",
    role: "Head Chef & Firebender",
    img: "assets/images/headchef.png",
    desc: "Wields tongs like Thor wields Mjölnir. His brisket once caused a standing ovation at a silent retreat."
  },
  {
    name: "Flamebeard Frank",
    role: "Smoker Supreme",
    img: "https://via.placeholder.com/400x250?text=Frank",
    desc: "Can smoke a whole rack of ribs with just a glance and a hint of hickory."
  },
  {
    name: "Saucy Sandra",
    role: "Condiment Conjurer",
    img: "https://via.placeholder.com/400x250?text=Sandra",
    desc: "Invented 37 secret sauces. All of them perfect. All of them mysterious."
  },
  {
    name: "Charcoal Charlie",
    role: "Pit Magician",
    img: "https://via.placeholder.com/400x250?text=Charlie",
    desc: "Once grilled in a snowstorm and turned it into summer. No one knows how."
  }
];

const Chefs = () => {
  const headChef = chefs[0];
  const otherChefs = chefs.slice(1);

  return (
    <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative chefs-bg text-white py-20 px-4 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('assets/images/chefs-background.png')",
  }}
>
  {/* Mobile override for background on small screens */}
  <style>
    {`
      @media (max-width: 768px) {
        section.chefs-bg {
          background-image: url('assets/images/chefs-background.png') !important;
          background-position: center top !important;
          background-size: cover !important;
        }
      }
    `}
  </style>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading text-red-500 mb-12 drop-shadow-md uppercase">
          Meet Our Chefs
        </h2>

        {/* Head Chef */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-black border-4 border-white p-6 rounded-lg shadow-lg transform transition hover:scale-105 min-h-[400px]">
            <img
              src={headChef.img}
              alt={headChef.name}
              className="w-full max-h-[400px] object-contain mb-4 rounded-md"
            />
            <h3 className="text-2xl font-heading text-yellow-300">{headChef.name}</h3>
            <p className="text-sm italic">{headChef.role}</p>
            <p className="mt-2 font-body">{headChef.desc}</p>
          </div>
        </div>

        {/* Other Chefs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {otherChefs.map((chef, index) => (
            <div
              key={index}
              className="bg-black border-2 border-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition hover:scale-105 min-h-[360px]"
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-48 object-cover mb-4 rounded-sm"
              />
              <h3 className="text-xl font-heading text-yellow-300">{chef.name}</h3>
              <p className="text-sm italic">{chef.role}</p>
              <p className="mt-2 font-body">{chef.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.button
          whileHover={{ scale: 1.07, rotate: [-1, 1, 0] }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-14 px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-heading text-lg rounded-none border-2 border-white shadow-md transition-transform hover:scale-110"
        >
          Get Tickets
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Chefs;
