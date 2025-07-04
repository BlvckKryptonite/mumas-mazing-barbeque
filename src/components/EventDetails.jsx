import React from 'react';

const EventDetails = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">📍 Event Details</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
        Join us at the flame-soaked grounds of **BBQtopia Park**, where the smoke dances and the sizzle sings.
        From 3PM till the stars appear — feast, laugh, and make memories worth marinating.
      </p>

      <div className="w-full h-96 max-w-5xl mx-auto mb-8 shadow-lg border-4 border-red-400 rounded-xl overflow-hidden">
        <iframe
          title="BBQ Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7962648492353!2d101.68719281528725!3d13.756330490350085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed5c9999999%3A0x1122334455667788!2sBBQtopia%20Park!5e0!3m2!1sen!2sus!4v123456789"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-md shadow-lg transition duration-300 transform hover:scale-105">
        Get Tickets
      </button>
    </section>
  );
};

export default EventDetails;
