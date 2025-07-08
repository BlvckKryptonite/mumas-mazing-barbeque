import React from "react";
import { motion } from "framer-motion";
import SplitWords from "../components/animations/SplitWords";
import FAQ from "../components/FAQ";

const pricingTiers = [
  {
    title: "General Admission",
    price: "$25",
    features: [
      "Entry to the BBQ Arena",
      "One BBQ hero plate",
      "Access to live music & games",
    ],
    bg: "bg-[#111]",
  },
  {
    title: "VIP Pitmaster Pass",
    price: "$55",
    features: [
      "Everything in General Admission",
      "Backstage grill tour",
      "2 extra hero plates + drinks",
      "Limited-edition BBQverse apron",
    ],
    bg: "bg-[#1f1f1f]",
  },
  {
    title: "Family Feast Pack",
    price: "$85",
    features: [
      "Entry for 2 adults + 2 kids",
      "4 full meals & drinks",
      "Access to BBQ hero play zone",
      "Free BBQ family photo session",
    ],
    bg: "bg-[#222]",
  },
];

const Tickets = () => {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 font-body">
      <div className="max-w-6xl mx-auto text-center">
        <SplitWords
          text="Claim Your Spot at the Grillery"
          className="text-4xl md:text-5xl font-heading uppercase text-[#db2626] drop-shadow-md mb-6"
        />
        <SplitWords
          text="Choose your tier — every ticket comes with legendary flavors, fierce vibes, and enough smoke to summon the BBQ gods."
          className="text-xl md:text-2xl text-yellow-400 mb-12 max-w-3xl mx-auto"
        />

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
              className={`${tier.bg} border-2 border-yellow-400 rounded-lg p-6 shadow-lg`}
            >
              <h3 className="text-2xl font-heading text-yellow-300 mb-2">
                {tier.title}
              </h3>
              <p className="text-3xl font-bold text-red-500 mb-4">
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
      </div>

      {/* FAQ Section */}
      <FAQ />
    </section>
  );
};

export default Tickets;
