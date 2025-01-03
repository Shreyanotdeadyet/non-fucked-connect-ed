import React from "react";
import Photo from "./about_photo"; // Adjust the import path if necessary

const Team: React.FC = () => {
  const teamMember = {
    name: "John Doe",
    description: "John is a passionate software engineer with expertise in frontend development and a love for creating seamless user experiences.",
  };

  return (
    <div className="flex flex-col bg-white lg:flex-row items-center lg:items-start lg:justify-between w-full h-auto lg:h-screen px-4 lg:px-20 py-10">
      {/* Left Side: Photo */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
        <Photo />
      </div>

      {/* Right Side: Name and Description */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center font-monaco items-start text-left">
        <h2 className="text-3xl lg:text-5xl font-bold font-monaco text-[#6419cc] mb-4">
          {teamMember.name}
        </h2>
        <p className="text-lg lg:text-xl font-monaco text-[#6419cc]">
          {teamMember.description}
        </p>
      </div>
    </div>
  );
};

export default Team;
