import React, { useState } from "react";

const Advantages = () => {
  return (
    <div id="about" className="about  p-20">
      <div className="flex md:flex-row flex-col gap-10">
        {/* START: ADVANTAGES LEFT SIDE */}
        <div className="anim anim-left md:w-1/2 w-full">
          <p className="text-sm text-gray-500">Why us?</p>
          <h2 className="text-xl md:text-2xl text-black">Our advantages</h2>
          <p className="mt-8 leading-relaxed">
            We are welcome for you! for <strong>more than 5 years</strong>, we
            have improved our safety and innovation for the convenience of our
            users At the time,
          </p>
          <p className="mt-4 leading-relaxed">
            we aslo established connections with more than 100 partners, and
            <strong> more than 1000 hotels</strong> in Indonesia.
          </p>
        </div>
        {/* END: ADVANTAGES LEFT SIDE */}

        {/* START: ADVANTAGES RIGHT SIDE */}
        <div className="anim anim-right md:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* START: FIRST ADVANTAGES */}
          <div className="p-8 bg-gray-900 text-gray-300 shadow-lg">
            <img src="./images/icons/safety.svg" alt="Safety" />
            <h5 className="my-3 font-semibold text-lg">Safety</h5>
            <p className="text-sm text-gray-500">
              Experiences specialist will always accompany you wherever you go
            </p>
          </div>
          {/* END: FIRST ADVANTAGES */}
          {/* START: FIRST ADVANTAGES */}
          <div className="p-8 bg-gray-900 text-gray-300 shadow-lg">
            <h3 className="text-4xl">5+</h3>
            <h5 className="my-3 font-semibold text-lg">
              5 Years of experiences
            </h5>
            <p className="text-sm text-gray-500">
              Don't worry, we have been doing our job well for more than 5
              years.
            </p>
          </div>
          {/* END: FIRST ADVANTAGES */}
          {/* START: FIRST ADVANTAGES */}
          <div className="p-8 bg-gray-900 text-gray-300 shadow-lg">
            <img src="./images/icons/people.svg" alt="Partners" />
            <h5 className="my-3 font-semibold text-lg">100+ Partners</h5>
            <p className="text-sm text-gray-500">
              We have more than 100 partners all over Indonesia
            </p>
          </div>
          {/* END: FIRST ADVANTAGES */}
          {/* START: FIRST ADVANTAGES */}
          <div className="p-8 bg-gray-900 text-gray-300 shadow-lg">
            <img src="./images/icons/hotel.svg" alt="Hotels" />
            <h5 className="my-3 font-semibold text-lg">1000+ Hotels</h5>
            <p className="text-sm text-gray-500">
              We have connections with over 100 hotels in Indonesia
            </p>
          </div>
          {/* END: FIRST ADVANTAGES */}
        </div>
        {/* END: ADVANTAGES RIGHT SIDE */}
      </div>
    </div>
  );
};

export default Advantages;
