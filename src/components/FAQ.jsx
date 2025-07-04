import React, { useState } from "react";

const faqs = [
  {
    question: "Is this a family-friendly event?",
    answer: "Absolutely! We welcome grill-lovers of all ages. There’s even a mini BBQ hero play zone for the kiddos!"
  },
  {
    question: "Do I need to bring anything?",
    answer: "Just your appetite and your BBQ spirit! We provide the rest — food, drinks, music, and fun."
  },
  {
    question: "Are vegetarian options available?",
    answer: "Yes! We’ve got grilled veggie skewers, Beyond Burgers, and smoked tofu. Even plant-based fans can join the BBQverse."
  },
  {
    question: "Where can I park?",
    answer: "We’ve got plenty of on-site parking and superhero valet support. Capes optional."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">❓ Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-800 transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
