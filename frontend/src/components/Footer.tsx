import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6419cc]">
      <div className="container mx-auto text-green-700 px-4 py-8">

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center text-center">
          <div>
            <h4 className="text-lg font-extrabold uppercase mb-4 text-white">ABOUT</h4>
            <ul className="text-sm font-geneva">
              <li className="text-white hover:underline">Meet Leadership</li>
              <li className="text-white hover:underline">Why Hire</li>
              <li className="text-white hover:underline">We Get Results</li>
              <li className="text-white hover:underline">Testimonials</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold uppercase mb-4 text-white">Admissions Counseling</h4>
            <ul className="text-sm font-geneva">
              <li className="text-white hover:underline">8th & 9th grade Counseling</li>
              <li className="text-white hover:underline">10th & 12th grade Counseling</li>
              <li className="text-white hover:underline">Undergrad Counseling</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold uppercase mb-4 text-white">Tutoring</h4>
            <ul className="text-sm font-geneva">
              <li className="text-white hover:underline">Statistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-extrabold uppercase mb-4 text-white">Blogs</h4>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-9xl font-extrabold text-white drop-shadow-lg">
            CONNECT-ED
          </h1>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-x-4">
          <p className="text-xs sm:text-sm text-white font-geneva">&copy; 1998-2024 CONNECT-ED. All rights reserved.</p>

          <div className="flex space-x-4">
            <a href="#" className="text-xs sm:text-sm text-white hover:text-green-800">Email Us</a>
            <a href="#" className="text-xs sm:text-sm text-white hover:text-green-800">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-white hover:text-green-800">Website Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
