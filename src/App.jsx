import { useState } from "react";

import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/Hero";
import About from "./components/About/About";
import Track from "./components/Track/Track";
import Program from "./components/Program/Program";
import PersonalPath from "./components/PersonalPath/PersonalPath";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Track />
      <Program />
      <PersonalPath />
    </>
  );
}

export default App;
