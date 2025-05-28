import { useState } from "react";

import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/Hero";
import About from "./components/About/About";
import Track from "./components/Track/Track";
import Program from "./components/Program/Program";
import PersonalPath from "./components/PersonalPath/PersonalPath";
import Premium from "./components/Premium/Premium";
import FAQ from "./components/FAQ/FAQ";
import Advantages from "./components/Advantages/Advantages";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Footer from "./components/Footer/Footer";
import scrollAnnimate from "./utils/ScrollAnimation";

function App() {
  scrollAnnimate();
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Track />
      <Program />
      <PersonalPath />
      <Premium />
      <FAQ />
      <Advantages />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default App;
