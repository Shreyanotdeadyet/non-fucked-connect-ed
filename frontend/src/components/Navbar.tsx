import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll to the top when the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navbarStyle = {
    backgroundColor: "white", // Constant white background
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Constant shadow for better visibility
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  };

  const textColor = "text-[#271725]"; // Constant dark text color

  return (
    <nav className={`fixed w-full top-0 z-50 p-4 ${textColor}`} style={navbarStyle}>
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="CONNECT-ED Logo"
            className="w-40 h-auto" // Adjust size as needed
          />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-3">
          {["Home",  "Services", "Testimonials", "About", "Contact", "Blogs"].map((item) => (
            <li key={item} className="group relative">
              {["Testimonials", "Services"].includes(item) ? (
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className={`font-semibold px-3 py-2 rounded ${textColor} cursor-pointer transition-colors duration-300 lg:text-lg`}
                >
                  {item}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#81517c] to-[#271725] transition-all duration-300 group-hover:w-full"
                  ></span>
                </ScrollLink>
              ) : (
                <RouterLink
                  to={`/${item.toLowerCase()}`}
                  className={`font-semibold px-3 py-2 rounded ${textColor} transition-colors duration-300 lg:text-lg`}
                >
                  {item}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#81517c] to-[#271725] transition-all duration-300 group-hover:w-full"
                  ></span>
                </RouterLink>
              )}
            </li>
          ))}
          <li key="Appointment" className="group relative">
            <RouterLink
              to="/appointment"
              className="font-semibold px-3 py-2 bg-[#81517c] text-white rounded-2xl transition-colors duration-300 lg:text-lg"
            >
              Appointment
            </RouterLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col items-end md:hidden mt-4 space-y-2 bg-white p-4 rounded shadow-lg">
          {["Home", "About", "Testimonials", "Services", "Contact", "Blogs"].map((item) => (
            <li key={item} className="py-2">
              {["Testimonials", "Services"].includes(item) ? (
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-[#271725] font-semibold hover:bg-[#f7f7f7] px-4 py-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </ScrollLink>
              ) : (
                <RouterLink
                  to={`/${item.toLowerCase()}`}
                  className="text-[#271725] font-semibold hover:bg-[#f7f7f7] px-4 py-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </RouterLink>
              )}
            </li>
          ))}
          <li key="Appointment" className="py-2">
            <RouterLink
              to="/appointment"
              className="text-white font-semibold bg-[#81517c] hover:bg-[#6f3f60] px-4 py-2 rounded-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Appointment
            </RouterLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
