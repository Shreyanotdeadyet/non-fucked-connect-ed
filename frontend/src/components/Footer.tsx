import React from "react";
import logo from "../assets/logo.png"; // Import the logo image

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #eee4f5, #e6fffc)", // light purple to light blue gradient from left to right
      }}
    >
      <div className="container mx-auto text-black px-4 py-4">
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          <div>
            <h4 className="text-sm font-bold uppercase mb-2 text-black">ABOUT</h4>
            <ul className="text-xs space-y-1">
              <li>
                <a
                  className="text-black hover:underline"
                  href="http://localhost:5174/home"
                >
                  Meet Leadership
                </a>
              </li>
              <li>
                <a className="text-black hover:underline" href="#">
                  Why Hire
                </a>
              </li>
              <li>
                <a className="text-black hover:underline" href="#">
                  We Get Results
                </a>
              </li>
              <li>
                <a className="text-black hover:underline" href="#">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase mb-2 text-black">
              Admissions Counseling
            </h4>
            <ul className="text-xs space-y-1">
              <li>
                <a className="text-black hover:underline" href="#">
                  8th & 9th Grade Counseling
                </a>
              </li>
              <li>
                <a className="text-black hover:underline" href="#">
                  10th & 12th Grade Counseling
                </a>
              </li>
              <li>
                <a className="text-black hover:underline" href="#">
                  Undergrad Counseling
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase mb-2 text-black">Blogs</h4>
            <ul className="text-xs space-y-1">
              <li>
                <a className="text-black hover:underline" href="#">
                  Latest Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase mb-2 text-black">Home</h4>
            <ul className="text-xs space-y-1">
              <li>
                <a
                  className="text-black hover:underline"
                  href="http://localhost:5174/home"
                >
                  Go to Home
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Title with Logo */}
        <div className="text-center mt-4">
          <img
            src={logo}
            alt="CONNECT-ED Logo"
            className="w-75 h-auto mx-auto" // Increased size from w-48 to w-64
          />
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <p className="text-[10px] sm:text-xs text-black text-center">
            &copy; 1998-2024 CONNECT-ED. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 text-center">
            <a
              href="#"
              className="text-[10px] sm:text-xs text-black underline hover:text-green-800"
            >
              Email Us
            </a>
            <a
              href="#"
              className="text-[10px] sm:text-xs text-black underline hover:text-green-800"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] sm:text-xs text-black underline hover:text-green-800"
            >
              Website Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;