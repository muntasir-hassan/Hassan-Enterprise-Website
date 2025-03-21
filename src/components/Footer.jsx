import React from "react";

function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow-sm m-4  md:snap-start">
      <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center md:flex-row md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center ">
          © 2025{" "}
          <a href="#hero" class="hover:underline">
            HASSAN ENTERPRISE TEAM
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
          <li>
            <a href="#hero" class="hover:underline me-4 md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#contact" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-center space-x-6 py-4">
          <a
            href="#"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all duration-300"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className=" hover:text-blue-400 transition-all duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className=" hover:text-pink-500 transition-all duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className=" hover:text-blue-700 transition-all duration-300"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a
            href="#"
            
            rel="noopener noreferrer"
            className=" hover:text-red-600 transition-all duration-300"
          >
            <i className="fab fa-youtube text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
