import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Compass, BookOpen, Users } from "lucide-react"; // Updated import for lucide-react icons
import WhyUsSection from '../components/about_whyus';
import Team from "../components/about_team";
const AboutUs = () => {
  const words = ["Empower", "Inspire", "Guide"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      icon: <Target className="mb-2" />,
      title: "Our Story",
      content:(
        <>
          At Connect-Ed, we are ambitious about YOUR FUTURE.<br/>
We understand that choosing the right educational and career path can be both exciting and overwhelming. That's why we are here to guide you every step of the way.<br/>
Our personalized guidance has helped 300+ high school and undergraduate students traverse the complex and ever-evolving landscape of educational and career choices and win over 150 top tier universities in the US, UK, Canada and India, including the Ivy League and Russell Group
        </>
      ),},
    {
      icon: <Compass className="mb-2" />,
      title: "Our Mission",
      content: "We passionately help high school students in Grades 8 to 12 gain clarity on what drives them, match their passions with the right resources and opportunities, to enable them to take concrete steps towards crafting a purpose-driven future."
    },
    {
      icon: <BookOpen className="mb-2" />,
      title: "Our Approach",
      content: "We employ a holistic approach to create a roadmap that is best-suited to your academic, personal, and financial needs. Our approach is driven by the latest research and findings because we want you to be one step ahead, all the time."
    },
    {
      icon: <Users className="mb-2" />,
      title: "Holistic Approach",
      content: "Creating roadmaps tailored to your academic, personal, and financial needs."
    }
  ];

  return (
    <>
      <div className="bg-black text-[#e9e5e2] min-h-screen flex flex-col items-center justify-center font-sans text-center px-4">
        {/* Initial Text (Landing Page) */}
        <h1 className="font-dmserif text-6xl md:text-7xl lg:text-9xl font-bold mb-4">We</h1>
        <motion.h2
          className="text-6xl font-dmserif md:text-7xl lg:text-9xl font-extrabold transition-all duration-1000 animate-fade-in-scale text-glow"
          key={currentWordIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {words[currentWordIndex]}
        </motion.h2>
        <h1 className="font-dmserif text-6xl md:text-7xl lg:text-9xl font-bold mt-4">the next generation</h1>

        {/* Space between Text and Cards */}
        <div className="my-12"></div>
      </div>

      {/* Cards Section */}
      <div className="w-full bg-black text-[#e9e5e2] px-4 pb-8 mt-0">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p>{card.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <WhyUsSection />


      <div className="w-full bg-[#1a1a1a] text-[#e9e5e2] py-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">The Minds Behind the Mission</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
        Our passionate and collaborative team brings unique expertise to guide you in achieving your dreams.       
        </p>
      </div>

      {/* Team Component */}
      <Team />
    </>
  );
};

export default AboutUs;
