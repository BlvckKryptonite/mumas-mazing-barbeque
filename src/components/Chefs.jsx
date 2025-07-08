import React from 'react';
import { motion } from 'framer-motion';
import headChefImg from '../assets/images/headchef.png';
import flamebeardImg from '../assets/images/flamebeard-frank.png';
import sandraImg from '../assets/images/saucy-sandra.png';
import charlieImg from '../assets/images/charcoal-charlie.png';
import chefsBg from '../assets/images/chefs-background.png';
import SplitWords from "./animations/SplitWords";

const chefs = [
  {
    name: "Muma the Grillmaster",
    role: "Head Chef & Chief Firebender",
    img: headChefImg,
    desc: "Wields tongs like Thor wields Mjölnir. His legendary flame grilled buffalo wings once caused a standing ovation at a silent retreat."
  },
  {
    name: "Flamebeard Frank",
    role: "Smoker Supreme",
    img: flamebeardImg,
    desc: "Can smoke a whole rack of ribs with just a glance. Rubbed ribs so perfectly, even vegetarians shed a tear."
  },
  {
    name: "Saucy Sandra",
    role: "Condiment Conjurer",
    img: sandraImg,
    desc: "Invented 37 secret sauces. All of them perfect. They say her chili is so hot, it once grilled the bun."
  },
  {
    name: "Charcoal Charlie",
    role: "Pit Magician",
    img: charlieImg,
    desc: "Charcoal lights itself when he enters. Once grilled in a snowstorm — turned it into summer. No one knows how."
  }
];

const Chefs = () => {
  const headChef = chefs[0];
  const otherChefs = chefs.slice(1);

  return (
    <motion.section
      className="relative chefs-bg text-white py-20 px-4 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${chefsBg})`, // For desktop
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Mobile-only absolute <img> fallback */}
      <img
        src={chefsBg}
        alt="Chefs Background"
        className="md:hidden absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <SplitWords
          text="Meet Our Chefs"
          className="text-4xl md:text-5xl font-heading uppercase mb-6 tracking-wide text-[#b91c1c] drop-shadow-md"
        />

        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-black border-4 border-white p-6 rounded-lg shadow-lg min-h-[400px]">
            <img src={headChef.img} alt={headChef.name} className="w-full object-contain mb-4 rounded-md max-h-[400px]" />
            <h3 className="text-2xl font-heading text-yellow-300">{headChef.name}</h3>
            <p className="italic text-sm">{headChef.role}</p>
            <p className="mt-2 font-body">{headChef.desc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {otherChefs.map((chef, idx) => (
            <div key={idx} className="bg-black border-2 border-white p-6 rounded-lg shadow-md min-h-[360px]">
              <img src={chef.img} alt={chef.name} className="w-full object-contain mb-4 rounded-md max-h-[400px]" />
              <h3 className="text-xl font-heading text-yellow-300">{chef.name}</h3>
              <p className="italic text-sm">{chef.role}</p>
              <p className="mt-2 font-body">{chef.desc}</p>
            </div>
          ))}
        </div>

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
