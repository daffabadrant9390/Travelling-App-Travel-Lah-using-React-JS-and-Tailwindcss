import React, { useState } from "react";

const About = () => {
  const [pState, setPState] = useState(false);

  const hiddenP = (
    <p className="mb-4 leading-relaxed text-justify">
      Our goal is to introduce the best tourism destinations in Indonesia to all
      of the traveller over the world. So that they will be interested to have a
      tour in Indonesia with their friends or family. So what are you guys
      waiting for? come and join us!
    </p>
  );

  const updatePState = () => {
    setPState(!pState);
  };

  return (
    <div id="about" className="about-section bg-gray-100 p-20">
      <div className="flex md:flex-row flex-col">
        <div className="anim anim-left md:w-1/2 w-full">
          <p className="text-sm text-gray-500">Who we are?</p>
          <h2 className="text-xl md:text-2xl text-black">About us</h2>
        </div>
        <div className="anim anim-right md:w-1/2 w-full mt-4 md:mt-0">
          <p className="mb-4 text-justify leading-relaxed">
            Travel.Lah is the most popular travelling website in Indonesia,
            which providing access for users to discover beautiful destinations
            in Indonesia
          </p>
          <p className="mb-4 text-justify leading-relaxed">
            We also provide the users booking the transport services such as
            flight tickets, bus, trains, and car rental. Not only transport
            services, but we also providing the users to book the accomodations,
            such as hotels, homestays, apartments, resorts, and villas This
            makes us as a travel website with the widest selections of
            accomodations and packages
          </p>
          {pState ? hiddenP : null}
          <a
            onClick={updatePState}
            className="px-6 py-1 mt-4 bg-transparent border-2 border-gray-800 text-sm md:text-base hover:shadow-md transition-all duration-200 uppercase inline-block cursor-pointer"
          >
            {pState ? <p>Read Less</p> : <p>Read More</p>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
