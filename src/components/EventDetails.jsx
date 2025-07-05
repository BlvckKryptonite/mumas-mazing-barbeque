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
      className="relative bg-black text-white py-20 px-6 md:px-12 font-body event-bg"
      style={{
        backgroundImage: "url('assets/images/chefs-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to enhance contrast */}
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none"></div>

      {/* Background override for mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            section.event-bg {
              background-image: url('assets/images/chefs-background.png') !important;
              background-position: center top !important;
              background-repeat: no-repeat !important;
              background-size: cover !important;
            }
          }
        `}
      </style>

      {/* Event content layer */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-heading text-red-500 uppercase drop-shadow-md">
            Event Details
          </h2>

          <p className="text-2xl font-bold text-yellow-300 leading-tight">
            🔥 Saturday, August 9<br />
            🍖 1:00PM CDT
          </p>

          <div className="text-lg leading-relaxed text-gray-200 space-y-2">
            <p className="font-bold text-white">
              📍 The Grill Grounds — Dow Academic Center
            </p>
            <p>
              Brazosport College<br />
              500 College Blvd<br />
              Lake Jackson, TX 77566
            </p>
            <p className="italic text-sm text-gray-400 pt-2">
              Brought to you by The League of Flame-Wielding Foodies™
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button className="mt-6 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-heading text-lg rounded-md border-2 border-white shadow-md transition-transform hover:scale-105">
              Reserve Your Spot Now
            </button>
          </div>
        </div>

        {/* Google Map */}
        <div className="border-4 border-red-600 rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="BBQ Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.781539061957!2d24.93837961597506!3d60.16985598202464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc9f98df03b%3A0xb66137fd98434de1!2sKamppi%20Chapel!5e0!3m2!1sen!2sfi!4v1624284573593!5m2!1sen!2sfi"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px]"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default EventDetails;
