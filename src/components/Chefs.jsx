import React from 'react';

const chefs = [
  {
    name: "Muma the Grillmaster",
    role: "Head Chef & Firebender",
    img: "https://via.placeholder.com/200x200?text=Muma",
    desc: "Wields tongs like Thor wields Mjölnir. His brisket once caused a standing ovation at a silent retreat."
  },
  {
    name: "Flamebeard Frank",
    role: "Smoker Supreme",
    img: "https://via.placeholder.com/200x200?text=Frank",
    desc: "Can smoke a whole rack of ribs with just a glance and a hint of hickory."
  },
  {
    name: "Saucy Sandra",
    role: "Condiment Conjurer",
    img: "https://via.placeholder.com/200x200?text=Sandra",
    desc: "Invented 37 secret sauces. All of them perfect. All of them mysterious."
  },
  {
    name: "Charcoal Charlie",
    role: "Pit Magician",
    img: "https://via.placeholder.com/200x200?text=Charlie",
    desc: "Once grilled in a snowstorm and turned it into summer. No one knows how."
  }
];

const Chefs = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">🔥 Meet Our Chefs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-yellow-50 rounded-xl p-6 shadow-md hover:shadow-xl transform transition hover:scale-105"
          >
            <img
              src={chef.img}
              alt={chef.name}
              className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-red-500"
            />
            <h3 className="text-xl font-bold text-gray-800">{chef.name}</h3>
            <p className="text-sm text-red-600 mb-2">{chef.role}</p>
            <p className="text-gray-700 text-sm">{chef.desc}</p>
          </div>
        ))}
      </div>

      <button className="mt-12 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-md shadow-lg transition duration-300 transform hover:scale-105">
        Get Tickets
      </button>
    </section>
  );
};

export default Chefs;
