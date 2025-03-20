import React, { useState } from "react";
import "../app.css";

function Header() {
  const [hover, setHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header
        className="sticky top-0 bg-white shadow-md z-50"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="flex md:flex-row max-sm:flex-row px-8 py-6 justify-between items-center">
          <div className="text-3xl font-bold cursor-pointer text-green-700">
            HASSAN ENTERPRISE
          </div>

          <nav className="hidden md:flex justify-center items-end gap-4 lg:gap-8">
            <a
              href="#hero"
              className="font-medium text-lg text-gray-800 hover:text-green-700 hover:underline hover:decoration-2"
            >
              HOME
            </a>
            <a
              href="#product"
              className="font-medium text-lg text-gray-800 hover:text-green-700 hover:underline hover:decoration-2"
            >
              PRODUCTS
            </a>
            <a
              href="#testimonial"
              className="font-medium text-lg text-gray-800 hover:text-green-700 hover:underline hover:decoration-2"
            >
              TESTIMONIALS
            </a>
            <a
              href="#contact"
              className="font-medium text-lg text-gray-800 hover:text-green-700 hover:underline hover:decoration-2"
            >
              CONTACT US
            </a>
          </nav>

          <div
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <button className="text-3xl text-green-700">&#9776;</button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 py-4 bg-white shadow-lg">
            <a
              href="#hero"
              className="font-medium text-lg text-gray-800 hover:text-green-700 hover:underline hover:decoration-2"
              onClick={closeNav}
            >
              HOME
            </a>
            <a
              href="#product"
              className="font-medium text-lg text-gray-800 hover:text-green-700 hover:underline hover:decoration-2"
              onClick={closeNav}
            >
              PRODUCTS
            </a>
            <a
              href="#testimonial"
              className="font-medium text-lg text-gray-800 hover:text-green-700 hover:underline hover:decoration-2"
              onClick={closeNav}
            >
              TESTIMONIALS
            </a>
            <a
              href="#contact"
              className="font-medium text-lg text-gray-800 hover:text-green-700 hover:underline hover:decoration-2"
              onClick={closeNav}
            >
              CONTACT US
            </a>
          </div>
        )}

        <div
          className={
            hover
              ? "h-[4px] bg-green-700 header-hover-in transition-all ease-in-out duration-300"
              : "h-[4px] bg-green-700 w-4"
          }
        ></div>
      </header>
    </>
  );
}

export default Header;
