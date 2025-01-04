import React from "react";
import Photo from "./about_photo"; // Adjust the import path if necessary

const Team: React.FC = () => {
  const teamMember = {
    name: (
      <>
        Girija ,<br />
        Connect-Ed Founder & Lead Counsellor
        <br/>
      </>
    ),
    description:(
      <>
        <p>A passionate College and Careers Guidance Counsellor with more than 7 years of experience in the evolving field of education, Girija loves equipping students with key habits and skills to craft a meaningful future. She believes that one’s professional identity should be closely aligned with their personal identity since it leads to authenticity in their work life and, eventually, job satisfaction.</p>
        <br/>
        <p>She therefore strives to help students identify their genuine interests and match these with their long term goals, equipping them with the mindset for success. Her personalised counselling sessions are creatively designed to ensure that every student enjoys discovering themselves. Using this approach, she has supported hundreds of students take a significant step towards their professional goals by placing them into the colleges of their dreams.</p>
        <br/>
        <p>In her spare time, she consumes and recommends books, articles, documentaries, movies, and theatre to her students to advance their interests and to build lifelong critical thinking habits and empathy. She also practises Vipassana meditation to develop mindfulness, and writes life narratives.</p>
        <br/>
      </>
    ),
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full h-auto lg:h-screen px-4 lg:px-20 py-10 bg-black">
      {/* Left Side: Photo */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
        <Photo />
      </div>

      {/* Right Side: Name and Description */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
          {teamMember.name}
        </h2>
        <p className="text-lg lg:text-xl text-gray-300">
          {teamMember.description}
        </p>
      </div>
    </div>
  );
};

export default Team;
