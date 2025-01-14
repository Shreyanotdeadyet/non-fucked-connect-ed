import landing from "../assets/landing.mp4";
import React from "react";
import GridLayout from "@/components/home_GridLayout";
import { MarqueeDemo } from "@/components/home_MarqueeDemo";
//import '../styles/App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Workshops from "@/components/home_workshops";
// import Services from "@/components/home_services_cards";
import TestimonialComponent from "../components/testimonial";
// import globe from "../assets/globe.mp4";

import servbg from "@/assets/image1.jpeg";

// import Service1 from "@/components/Service_1";
import ResponsiveCard from "@/components/subscBox";
import Services from "@/components/Services";
import GroupCard from "@/components/GroupCard";

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

      <div className="Why">
        <GridLayout />
        <GroupCard />
      </div>

      <div className="Services">
        <Services />

        {/* <div className="mt-12 md:mt-16 px-4"> */}
          <ResponsiveCard />
        {/* </div> */}

        <div>
          <Workshops />
        </div>

        <MarqueeDemo />

        <section id="testimonials">
          <div className="w-full h-auto">
            <TestimonialComponent />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;