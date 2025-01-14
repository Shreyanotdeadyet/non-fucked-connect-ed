import React from "react";
import SingleCard from "./SingleCard";
// Import images from assets folder
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const GroupCard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mt-10 mb-6">Why Choose Us</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center mt-10 mb-10">
        <SingleCard 
          frontImage={img1} 
          frontText="Major Agnostic" 
          backText="Details on Major Agnostic" 
        />
        <SingleCard 
          frontImage={img2} 
          frontText="Country Agnostic" 
          backText="Details on Country Agnostic" 
        />
        <SingleCard 
          frontImage={img3} 
          frontText="Expert Processes" 
          backText="Details on Expert Processes" 
        />
        <SingleCard 
          frontImage={img4} 
          frontText="Guidance" 
          backText="Details on Comprehensive Guidance" 
        />
      </div>
    </div>
  );
};

export default GroupCard;
