import React from "react";
import "../../styles/custom.css";

const Tours = () => {
  return (
    <div id="tour" className="tour-section p-20 bg-gray-100">
      {/* START: TOURS HEADING AND SUBHEADING */}
      <p className="text-sm text-gray-500">Discover</p>
      <h2 className="text-2xl md:text-3xl text-black">Our tours</h2>
      {/* END: TOURS HEADING AND SUBHEADING */}

      {/* START: FIRST TOUR */}
      <div className="flex mt-8 flex-wrap justify-between">
        <div className="anim anim-left w-full md:w-1/2 order-2 md:order-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-6">
            Nusa Penida, Bali
          </h3>
          <p className="leading-relaxed text-gray-800 text-justify mb-3">
            <strong>Nusa Penida</strong> is an island at southeast of
            Indonesia's island Bali and a district of Klungkung Regency that
            includes the neighbouring small island of Nusa Lembongan and twelve
            even smaller islands.
          </p>
          <p className="font-bold">The program include :</p>
          <ul className="px-8 mt-2">
            <li>Hotel Accomodations</li>
            <li>Adventure for 14 days</li>
            <li>Free 3-day meals</li>
          </ul>
          <a
            href="#"
            className="mt-4 md:mt-8 py-1 px-6 md:py-2 md:px-8 bg-gray-800 text-white inline-block hover:bg-gray-900 focus:outline-none transition-all duration-200 shadow-lg uppercase"
          >
            Check Details
          </a>
        </div>
        <div className="anim anim-fade w-full md:w-1/2 order-1 md:order-2 mb-4 md:mb-0 pl-0 md:pl-8">
          <img
            className="object-cover object-center w-full h-96 shadow-xl rounded-lg"
            src="./images/nusapenida.png"
            alt="Nusa Penida"
          />
        </div>
      </div>
      {/* END: FIRST TOUR */}

      {/* START: SECOND TOUR */}
      <div className="flex mt-12 md:mt-24 flex-wrap justify-between">
        <div className="anim anim-right w-full md:w-1/2 order-2">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-6">
            Mount Bromo, West Java
          </h3>
          <p className="leading-relaxed text-gray-800 text-justify mb-3">
            <strong>Mount Bromo</strong> is an active somma volcano and part of
            the Tengger Mountains, in East Java, Indonesia.
          </p>
          <p className="font-bold">The program include :</p>
          <ul className="px-8 mt-2">
            <li>Hotel Accomodations</li>
            <li>Adventure for 14 days</li>
            <li>Free 3-day meals</li>
          </ul>
          <a
            href="#"
            className="mt-4 md:mt-8 py-1 px-6 md:py-2 md:px-8 bg-gray-800 text-white inline-block hover:bg-gray-900 focus:outline-none transition-all duration-200 shadow-lg uppercase"
          >
            Check Details
          </a>
        </div>
        <div className="anim anim-fade w-full md:w-1/2 order-1 mb-4 md:mb-0 pr-0 md:pr-8">
          <img
            className="object-cover object-center w-full h-96 shadow-xl rounded-lg"
            src="./images/bromo.png"
            alt="Nusa Penida"
          />
        </div>
      </div>
      {/* END: SECOND TOUR */}

      {/* START: THIRD TOUR */}
      <div className="flex mt-12 md:mt-24 flex-wrap justify-between">
        <div className="anim anim-left w-full md:w-1/2 order-2 md:order-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-6">
            Malioboro Street, Yogyakarta
          </h3>
          <p className="leading-relaxed text-gray-800 text-justify mb-3">
            <strong> Malioboro Street</strong> is a major shopping street in
            Yogyakarta, Indonesia. The name is also used more generally for the
            neighbourhood around the street. It lies north-south axis in the
            line between Yogyakarta Kraton and Mount Merapi.
          </p>
          <p className="font-bold">The program include :</p>
          <ul className="px-8 mt-2">
            <li>Hotel Accomodations</li>
            <li>Adventure for 14 days</li>
            <li>Free 3-day meals</li>
          </ul>
          <a
            href="#"
            className="mt-4 md:mt-8 py-1 px-6 md:py-2 md:px-8 bg-gray-800 text-white inline-block hover:bg-gray-900 focus:outline-none transition-all duration-200 shadow-lg uppercase"
          >
            Check Details
          </a>
        </div>
        <div className="anim anim-fade w-full md:w-1/2 order-1 md:order-2 mb-4 md:mb-0 pl-0 md:pl-8">
          <img
            className="object-cover object-center w-full h-96 shadow-xl rounded-lg"
            src="./images/yogya.png"
            alt="Nusa Penida"
          />
        </div>
      </div>
      {/* END: THIRD TOUR */}
    </div>
  );
};

export default Tours;
