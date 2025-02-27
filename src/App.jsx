import React from "react";
import Footer from "./components/Footer";
// import MissionObjectives from "./components/MissionObjectives";

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {


  return (
    <>
      <Hero />

      <About />

      {/* <MissionObjectives /> */}

      <Projects />

      <Contact />
      
      <Footer />
    </>
  )
}

export default App