import landing from "../assets/landing.mp4"
import React from 'react';
import GridLayout from '@/components/home_GridLayout';
import { MarqueeDemo } from '@/components/home_MarqueeDemo';
//import '../styles/App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css';
import Workshops from "@/components/home_workshops";
import Services from "@/components/home_services_cards";
import TestimonialComponent from "../components/testimonial";
import globe from "../assets/globe.mp4"

const Home: React.FC = () => {


  return (

  
    <div className="bg-beg">
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

        <section id="services">

          <br />
          <br />
          <br />
          <h1 className="text-white text-4xl font-bold text-center">Services</h1>
          <br />
          <Services />
          <br />
        </section>

        <div className="carousel mb-8 p-4">
          <h2 className="text-2xl font-bold text-white mb-4">Workshops</h2>
          <Workshops/>
        </div>
       <div>
        <MarqueeDemo />
        </div>


      <div className="flex w-full h-screen">
  {/* Video on the left (hidden on small screens) */}
  <div className="w-2/5 h-full hidden md:flex items-center justify-center overflow-hidden">
    <video
      className="w-full h-full rounded-lg" // rounded class for the video
      src={globe}
      autoPlay
      loop
      muted
    ></video>
  </div>
  {/* MarqueeDemo on the right */}
  <div className="w-full md:w-3/5 h-full flex items-center">
    <MarqueeDemo />
  </div>
</div>


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
