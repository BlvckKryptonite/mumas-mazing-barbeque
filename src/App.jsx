import React from "react";
import HeroBanner from "./components/HeroBanner";
import Invitation from "./components/Invitation";
import Chefs from "./components/Chefs";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";

function App() {
  return (
    <main className="bg-black text-white font-body overflow-x-hidden">

      <HeroBanner />
      <div className="w-full h-4 bg-gradient-to-r from-red-500 to-yellow-400 my-8" />
      <Invitation />
      <div className="w-full h-4 bg-gradient-to-r from-yellow-400 to-orange-500 my-8" />
      <Chefs />
      <div className="w-full h-4 bg-gradient-to-r from-orange-500 to-pink-500 my-8" />
      <EventDetails />
      <div className="w-full h-4 bg-gradient-to-r from-pink-500 to-purple-600 my-8" />
      <Gallery />
      <div className="w-full h-4 bg-gradient-to-r from-purple-600 to-red-500 my-8" />
      <FAQ />
    </main>
  );
}

export default App;
// Redeploy trigger
