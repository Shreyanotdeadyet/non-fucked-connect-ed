import React from 'react';
import landing from "../assets/landing.mp4"

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={landing} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
    </div>
  );
};

export default Home;
