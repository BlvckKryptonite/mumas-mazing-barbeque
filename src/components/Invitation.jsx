import React from 'react';

const Invitation = () => {
  return (
    <section className="bg-yellow-100 text-gray-900 py-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">🎟️ You’re Invited to Muma’s ‘Mazing Barbeque!</h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        Step into the <strong>BBQverse</strong> — a world of sizzling ribs, juicy steaks, succulent strips, and legendary grilled goodness.
        Behold the <em>Brisket of Justice</em>, the <em>Sausage of Truth</em>, and wings so mighty they’ve been banned in four galaxies.
        <br /><br />
        All set in a backyard so epic, even Thor RSVP’d (he’s bringing the lightning 🔥).
      </p>

      <button className="mt-10 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-md shadow-lg transition duration-300 transform hover:scale-105">
        Get Tickets
      </button>
    </section>
  );
};

export default Invitation;