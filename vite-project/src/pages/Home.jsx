import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../components/Hero";

const Home = () => {
  const message = "Hello Words";
  return (
    <div>
      <Navbar />

      <Hero message={message} />

      <Footer />
    </div>
  );
};

export default Home;
