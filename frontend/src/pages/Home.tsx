import landing from "../assets/landing.mp4"
import React from 'react';
import GridLayout from '@/components/home_GridLayout';
import { MarqueeDemo } from '@/components/home_MarqueeDemo';
//import '../styles/App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css';
import Workshops from "@/components/home_workshops";
// import Services from "@/components/home_services_cards";
import TestimonialComponent from "../components/testimonial";
// import globe from "../assets/globe.mp4";

import servbg from "@/assets/image1.jpeg";

// import Service1 from "@/components/Service_1";
import Standards from "@/components/Standards";
import ResponsiveCard from "@/components/subscBox";

const Home: React.FC = () => {
  return (
    <div className="bg-base">
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

      <GridLayout />
      <div className="App">

      <section
  id="services"
  className="relative h-screen w-full bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${servbg})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-center pt-24">
    <h1 className="text-4xl font-bold text-center text-white mb-8">
      Services
    </h1>
    <Standards />
  </div>
  
</section>

<div>
  <ResponsiveCard/>
</div>


      {/* <section id="services" className="py-16 bg-gray-50"> */}
      {/* <section
  id="services"
  className="relative bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${servbg})` }}
>
  <h1 className="text-teal-800 text-4xl font-bold text-center mb-12">
    Services
  </h1>
  <Standards />
</section> */}

        {/* <div className="carousel mb-8 p-4"> */}
          {/* <h2 className="text-4xl font-bold text-teal-800 mb-4 text-center">Workshops</h2> */}
          <div>
          <Workshops/>
          </div>
          
        {/* </div> */}

      {/* <div className="flex w-full h-screen"> */}
  {/* Video on the left (hidden on small screens) */}
  {/* <div className="w-2/5 h-full hidden md:flex items-center justify-center overflow-hidden">
    <video
      className="w-full h-full rounded-lg" // rounded class for the video
      src={globe}
      autoPlay
      loop
      muted
    ></video>
  </div> */}
  {/* MarqueeDemo on the right */}
  {/* <div className="w-full h-full flex items-center"> */}
    <MarqueeDemo />
  {/* </div> */}
{/* </div> */}


        <section id="testimonials" >
          <div className="w-full h-auto" >
            <TestimonialComponent />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
