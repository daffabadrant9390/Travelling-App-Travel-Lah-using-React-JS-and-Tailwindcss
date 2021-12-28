import React from "react";
import Navbar from "../Parts/Navbar";
import Hero from "../Parts/Hero";
import About from "../Parts/About";
import Advantages from "../Parts/Advantages";
import Tours from "../Parts/Tours";
import Review from "../Parts/Review";
import Footer from "../Parts/Footer";
import useSmoothScrollAnchor from "../../Helpers/Hooks/useSmoothScrollAnchor";
import useAnimation from "../../Helpers/Hooks/useAnimation";

const HomePage = () => {
  useSmoothScrollAnchor();
  useAnimation();
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <About />
        <Advantages />
        <Tours />
        <Review />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
