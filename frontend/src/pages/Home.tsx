// import landing from "../assets/landing.mp4";
// import React, { useEffect, useRef, useState } from "react";
// import GridLayout from "@/components/home_GridLayout";
// import { MarqueeDemo } from "@/components/home_MarqueeDemo";
// //import '../styles/App.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../index.css";
// import Workshops from "@/components/home_workshops";
// // import Services from "@/components/home_services_cards";
// import TestimonialComponent from "../components/testimonial";
// // import globe from "../assets/globe.mp4";


// // import Service1 from "@/components/Service_1";
// import ResponsiveCard from "@/components/subscBox";
// import Services from "@/components/Services";
// import GroupCard from "@/components/GroupCard";
// import PersonalizedProg from "@/components/subscBox";

// const Home: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > window.innerHeight * 0.2) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const videoRef = useRef<HTMLVideoElement | null>(null); // ✅ Explicit type

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 10; // Set playback speed
//     }
//   }, []);

//   return (
//     <div className="bg-base">
//       {/* <div className="fixed w-full h-screen overflow-hidden"> */}
//       <div className="home-video-container">
//         {/* Video Background */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src={landing} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div
//           className={`absolute inset-0 bg-black transition-opacity duration-500 ${isScrolled ? "opacity-50" : "opacity-0"
//             }`}
//         />
//       </div>

//       <div className="home-number">
//         <GridLayout />
//       </div>
//       <div className="home-why-us">
//         <GroupCard />
//       </div>

//       <div className="home-Services">
//         <Services />
//       </div>
//       {/* <div className="mt-12 md:mt-16 px-4"> */}
//       <PersonalizedProg />
//       {/* </div> */}

//       <div>
//         <Workshops />
//       </div>

//       <MarqueeDemo />

//       <section id="testimonials">
//         <div className="w-full h-auto">
//           <TestimonialComponent />
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;

import landing from "../assets/landing.mp4";
import React, { useEffect, useRef, useState } from "react";
import GridLayout from "@/components/home_GridLayout";
import { MarqueeDemo } from "@/components/home_MarqueeDemo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Workshops from "@/components/home_workshops";
import TestimonialComponent from "../components/testimonial";
import ResponsiveCard from "@/components/subscBox";
import Services from "@/components/Services";
import GroupCard from "@/components/GroupCard";
import PersonalizedProg from "@/components/subscBox";

const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <div className="bg-base">
      <div className="home-video-container relative">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={landing} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Quote Overlay */}
        <div className="absolute bottom-12 left-20 text-white w-1/2">
  <p
    className="text-[2.8rem] md:text-[4rem] leading-tight tracking-tight"
    style={{
      fontFamily: "'Playfair Display', serif", // Playfair Display font
      fontWeight: "400", // Regular weight
      lineHeight: "1.1", // Tighter line height
      textAlign: "left",
    }}
  >
    "The best way to predict the future is to create it."
  </p>
  <p
    className="mt-4 text-[1.6rem] md:text-[1.8rem] italic leading-snug"
    style={{
      fontFamily: "'Playfair Display', serif", // Playfair Display font
      fontWeight: "400", // Regular weight
      textAlign: "left",
    }}
  >
    – Peter Drucker
  </p>
</div>




        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isScrolled ? "opacity-50" : "opacity-0"
          }`}
        />
        
      </div>

      <div className="home-number">
        <GridLayout />
      </div>
      <div className="home-why-us">
        <GroupCard />
      </div>

      <div className="home-Services">
        <Services />
      </div>
      <PersonalizedProg />

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
  );
};

export default Home;         


