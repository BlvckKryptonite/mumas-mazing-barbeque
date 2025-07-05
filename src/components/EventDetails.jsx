import React from "react";
import { motion } from "framer-motion";

const EventDetails = () => {
  return (
    <motion.section
      id="event-details"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white py-20 px-4 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-heading text-red-500 mb-10 uppercase drop-shadow-md">
        Event Details
      </h2>

      <p className="text-lg max-w-2xl mx-auto font-body text-gray-200 mb-8">
        Join us for a grilling adventure unlike any other! Expect epic eats, fiery flavors, and an atmosphere that crackles with comic-book charm.
      </p>

      {/* Google Map Embed */}
      <div className="max-w-4xl mx-auto border-4 border-red-600 rounded-xl overflow-hidden shadow-xl">
        <iframe
          title="BBQ Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.781539061957!2d24.93837961597506!3d60.16985598202464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc9f98df03b%3A0xb66137fd98434de1!2sKamppi%20Chapel!5e0!3m2!1sen!2sfi!4v1624284573593!5m2!1sen!2sfi"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px]"
        ></iframe>
      </div>

      <button className="mt-12 px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-heading text-lg rounded-none border-2 border-white shadow-md transition-transform hover:scale-110">
        🎟️ Get Tickets
      </button>
    </motion.section>
  );
};

export default EventDetails;
