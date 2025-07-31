import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import SplitWords from "../components/animations/SplitWords";
import FAQ from "../components/FAQ";
import chefsBg from '../assets/images/chefs-background.png';

const pricingTiers = [
  {
    title: "GENERAL ADMISSION",
    price: "$25",
    features: [
      "Entry to the BBQ Arena",
      "Access to all mouth watering delights",
      "One BBQ hero plate",
      "Live music & games",
    ],
  },
  {
    title: "VIP PASS",
    price: "$50",
    features: [
      "Everything in General Admission",
      "Priority seating",
      "Muma’s legendary wing platter",
    ],
  },
  {
    title: "ULTIMATE BBQ EXPERIENCE",
    price: "$75",
    features: [
      "All VIP Pass perks",
      "Backstage grill tour",
      "Access to BBQverse buffet",
      "Limited-edition BBQverse apron",
      
    ],
  },
];

const Tickets = () => {
  return (
    <motion.section
      style={{ backgroundImage: `url(${chefsBg})` }}
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-24 px-6 font-body relative overflow-hidden"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Return Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="bg-yellow-400 text-black p-3 rounded-full shadow-lg border-2 border-white"
          >
            <FaArrowLeft className="text-lg" />
          </motion.button>
        </Link>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-heading text-orange-500 uppercase drop-shadow-lg mb-4 tracking-wider">
          GET TICKETS
        </h1>

        <p className="text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto">
          Choose your tier — every ticket comes with legendary flavors, fierce vibes, and enough smoke to summon the BBQ gods.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-yellow-400 rounded-lg p-6 shadow-lg animate-flame bg-black bg-opacity-80"
            >
              <h3 className="text-2xl font-heading text-yellow-300 mb-2">
                {tier.title}
              </h3>
              <p className="text-3xl font-bold text-[#D2042D] mb-4">
                {tier.price}
              </p>
              <ul className="text-left text-white space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i}>✔️ {feature}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 font-heading border-2 border-white transition hover:scale-105">
                Get This Ticket
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          className="text-white text-xl font-heading bg-red-600 hover:bg-red-700 px-10 py-4 border-2 border-white shadow-lg uppercase tracking-wide"
        >
          Purchase Now
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Tickets;
