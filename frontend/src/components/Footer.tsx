import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto text-green-700">

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div>
            <h4 className="text-lg font-bold uppercase mb-4 text-green-900">About</h4>
            <ul>
              <li className="text-green-700 hover:underline">Meet Leadership</li>
              <li className="text-green-700 hover:underline">Why Hire</li>
              <li className="text-green-700 hover:underline">We Get Results</li>
              <li className="text-green-700 hover:underline">Testimonials</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-4 text-green-900">Admissions Counseling</h4>
            <ul>
              <li className="text-green-700 hover:underline">8th & 9th grade Counseling</li>
              <li className="text-green-700 hover:underline">10th & 12th grade Counseling</li>
              <li className="text-green-700 hover:underline">Undergrad Counseling</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-4 text-green-900">Tutoring</h4>
            <ul>
              <li className="text-green-700 hover:underline">Statistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase mb-4 text-green-900">Blogs</h4>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-extrabold text-green-900 drop-shadow-lg">
            CONNECT-ED
          </h1>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-green-700">&copy; 1998-2024 CONNECT-ED. All rights reserved.</p>

          <div className="flex space-x-4">
            <a href="#" className="text-green-700 hover:text-green-800">Email Us</a>
            <a href="#" className="text-green-700 hover:text-green-800">Privacy Policy</a>
            <a href="#" className="text-green-700 hover:text-green-800">Website Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
