import React from "react";
import HeroBanner from "./components/HeroBanner";
import Invitation from "./components/Invitation";
import Chefs from "./components/Chefs";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Separator from "./components/Separator";

function App() {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-red-100 to-pink-100 text-gray-800 font-sans">
      <HeroBanner />
      <Separator />
      <Invitation />
      <Separator />
      <Chefs />
      <Separator />
      <EventDetails />
      <Separator />
      <Gallery />
      <Separator />
      <FAQ />
    </div>
  );
}

export default App;