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
      <div className="home-video-container">
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
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            isScrolled ? "opacity-50" : "opacity-0"
          }`}
        />
        {/* Quote Container */}
        <div className="absolute bottom-8 left-8 max-w-md z-10">
          <blockquote className="text-white">
            <p className="text-2xl font-semibold mb-2 leading-relaxed">
              "Education is not preparation for life; education is life itself."
            </p>
            <footer className="text-lg opacity-80">
              — John Dewey
            </footer>
          </blockquote>
        </div>
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