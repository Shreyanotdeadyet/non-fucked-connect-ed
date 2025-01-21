import React from "react";
import SingleCard from "./SingleCard";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import hwu from "../assets/hwu.png"

const GroupCard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-[#3a023b] text-center mt-10 mb-6">Why Choose Us</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center mt-10 mb-10">
        <SingleCard frontImage={img1} frontText="Major Agnostic" cardIndex={1} />
        <SingleCard frontImage={img2} frontText="Country Agnostic" cardIndex={2} />
        <SingleCard frontImage={img3} frontText="Expert Processes" cardIndex={3} />
        <SingleCard frontImage={img4} frontText="Guidance" cardIndex={4} />
      </div>
    </div>
  );
};

export default GroupCard;