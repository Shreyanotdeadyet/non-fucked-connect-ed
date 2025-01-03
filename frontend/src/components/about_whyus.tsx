import React from 'react';
import { Users, Target, Compass, Heart } from 'lucide-react';

const WhyUsSection = () => {
  const sections = [
    {
      icon: <Users size={48} className="text-[#009984]" />,
      title: 'Personal Attention',
      content:
        'We work with a small cohort to ensure 100% dedication to each student. Your ambitions matter to us, and we\'re here to make them achievable.',
    },
    {
      icon: <Target size={48} className="text-[#009984]" />,
      title: 'Holistic Development' ,
      content:
        'Our program deconstructs your interests and influences, helping you find the awareness needed to be the best version of yourself in an increasingly competitive landscape.',
    },
    {
      icon: <Compass size={48} className="text-[#009984]" />,
      title: 'Customized Guidance',
      content:
        'We offer highly customized College Counseling alongside career guidance, viewing top-tier college admission as a stepping stone toward a fulfilling career and balanced life.',
    },
    {
      icon: <Heart size={48} className="text-[#009984]" />,
      title: 'Continuous Support',
      content:
        'Our program ensures you feel supported throughout your high school journey - from navigating complex college applications to building your future career path. We\'re here to empower you.',
    },
  ];

  return (
    <div className="bg-white px-4 sm:px-8 lg:px-20">
      <div className="min-h-screen bg-white text-[#e9e5e2] px-8 py-16">
        {/* Title */}
        <h1 className="text-5xl text-[#6419cc] font-bold text-center mb-12 animate__animated animate__fadeIn">Why Choose Us?</h1>
        <p className="text-xl text-[#6419cc] text-center mb-16 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          Your journey to success deserves dedicated guidance and support. Explore what makes our approach unique.
        </p>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-[#6419cc] p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Grid Content */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h2 className="text-2xl text-white font-semibold">{section.title}</h2>
                <p className="text-lg text-white">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
