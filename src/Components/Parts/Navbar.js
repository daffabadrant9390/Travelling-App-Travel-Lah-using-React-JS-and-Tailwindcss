import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 fixed top-0 right-0 left-0 z-20">
      <div className="px-24 flex justify-between items-center h-20">
        {/* START: LOGO */}
        <h2 className="text-2xl w-1/2 text-gray-200">Travel.Lah</h2>
        {/* END: LOGO */}

        {/* START: ICON HAMBURGER */}
        <div className="w-auto">
          <ul className="flex items-center">
            <li className="ml-6 block md:hidden">
              <button
                id="menu-toggler"
                className="
                    w-8
                    h-8
                    relative
                    flex
                    items-center
                    justify-center
                    text-gray-300
                    hover:text-gray-100
                    transition-all
                    duration-200
                    focus:outline-none
                  "
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="19"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z" />
                  <path d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z" />
                  <path d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        {/* END: ICON HAMBURGER */}

        {/* START: NAVBAR LIST */}
        <div className="md:block hidden w-1/2">
          <ul className="flex  justify-between">
            <li>
              <a
                href="#hero"
                className="text-gray-300 hover:text-gray-100 transition-all duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-gray-100 transition-all duration-200"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#tour"
                className="text-gray-300 hover:text-gray-100 transition-all duration-200"
              >
                Tours
              </a>
            </li>
            <li>
              <a
                href="#review"
                className="text-gray-300 hover:text-gray-100 transition-all duration-200"
              >
                Review
              </a>
            </li>
          </ul>
        </div>
        {/* START: NAVBAR LIST */}
      </div>
    </nav>
  );
};

export default Navbar;
