import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="hero px-24 py-56">
      <h1 className="text-3xl md:text-5xl mb-2 md:mb-4 text-gray-100 w-full md:w-1/2 leading-normal">
        Discover the wonderful world of Indonesia
      </h1>
      <p className="mb-4 md:mb-8 text-gray-300">
        It's time to take you to the most memorable journey that you have ever
        had
      </p>
      <a
        className="py-2 px-4  md:px-6 bg-gray-300 text-gray-800 uppercase hover:bg-gray-400 transition-all duration-200 inline-block text-sm md:text-base"
        href="#about"
      >
        Get Started
      </a>
    </div>
  );
};

export default Hero;
