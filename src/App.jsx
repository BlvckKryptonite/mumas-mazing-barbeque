import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroBanner from "./components/HeroBanner";
import Invitation from "./components/Invitation";
import Chefs from "./components/Chefs";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Tickets from "./pages/Tickets";
import LoadingScreen from "./components/LoadingScreen";
import FireTransition from "./components/animations/FireTransition";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <main className="bg-black text-white font-body overflow-x-hidden w-full max-w-full">
          <FireTransition>
            <HeroBanner />
          </FireTransition>

          <div className="w-full h-4 bg-gradient-to-r from-red-500 to-yellow-400" />

          <FireTransition delay={0.2}>
            <Invitation />
          </FireTransition>

          <div className="w-full h-4 bg-gradient-to-r from-yellow-400 to-orange-500" />

          <FireTransition delay={0.3}>
            <Chefs />
          </FireTransition>

          <div className="w-full h-4 bg-gradient-to-r from-orange-500 to-pink-500" />

          <FireTransition delay={0.4}>
            <EventDetails />
          </FireTransition>

          <div className="w-full h-4 bg-gradient-to-r from-pink-500 to-purple-600" />

          <FireTransition delay={0.5}>
            <Gallery />
          </FireTransition>

          <div className="w-full h-4 bg-gradient-to-r from-purple-600 to-red-500" />

          <FireTransition delay={0.6}>
            <FAQ />
          </FireTransition>
        </main>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </Router>
  );
}

export default App;
