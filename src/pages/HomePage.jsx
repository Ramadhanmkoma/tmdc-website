import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import JoinUs from "../components/JoinUs";
import Contact from "../components/Contact";
import AppShowcase from "../components/AppShowcase";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <AppShowcase />
      <JoinUs />
      <Contact />
    </>
  );
};

export default HomePage;
