import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroBanner from "./components/HeroBanner";
import Invitation from "./components/Invitation";
import Chefs from "./components/Chefs";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Tickets from "./pages/Tickets";
import { motion } from "framer-motion";

const Home = () => (
  <main className="bg-black text-white font-body overflow-x-hidden w-full max-w-full">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <HeroBanner />
    </motion.div>

    <div className="w-full h-4 bg-gradient-to-r from-red-500 to-yellow-400" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Invitation />
    </motion.div>

    <div className="w-full h-4 bg-gradient-to-r from-yellow-400 to-orange-500" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Chefs />
    </motion.div>

    <div className="w-full h-4 bg-gradient-to-r from-orange-500 to-pink-500" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <EventDetails />
    </motion.div>

    <div className="w-full h-4 bg-gradient-to-r from-pink-500 to-purple-600" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Gallery />
    </motion.div>

    <div className="w-full h-4 bg-gradient-to-r from-purple-600 to-red-500" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <FAQ />
    </motion.div>
  </main>
);

function App() {
  return (
    <Router basename="/mumas-mazing-barbeque">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </Router>
  );
}

export default App;
