import React, { useState } from 'react';
import { BookOpen, Target, Lightbulb } from 'lucide-react';

interface Card {
  id: number;
  title: string;
  content: string;
  icon: React.ReactNode;
  image: string;
}

function AboutCard() {
  const cards: Card[] = [
    {
      id: 1,
      title: "Our Story",
      content: "Founded in 2020, we embarked on a journey to revolutionize digital experiences. What started as a small team of passionate innovators has grown into a global community of creative minds. Through challenges and triumphs, we've remained committed to our founding principle: technology should empower human connection, not replace it. Our journey is marked by continuous learning, adaptation, and an unwavering commitment to excellence in everything we do.",
      icon: <BookOpen className="w-8 h-8 mb-4" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      title: "Our Mission",
      content: "We're on a mission to transform how people interact with technology. Our goal is to create digital solutions that not only solve problems but inspire and delight users. We believe in making technology accessible to all, breaking down barriers, and fostering innovation that serves humanity. Through our work, we strive to create a more connected, efficient, and inclusive digital world.",
      icon: <Target className="w-8 h-8 mb-4" />,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      title: "Our Approach",
      content: "Our approach combines cutting-edge technology with human-centered design principles. We believe in collaborative innovation, working closely with our clients to understand their unique challenges and aspirations. Through agile methodologies, continuous feedback, and iterative improvement, we deliver solutions that exceed expectations. Our process emphasizes sustainability, scalability, and long-term impact.",
      icon: <Lightbulb className="w-8 h-8 mb-4" />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const [activeCard, setActiveCard] = useState(1);

  const getCardPosition = (cardId: number) => {
    if (cardId === activeCard) {
      return "main-card";
    }
    return "side-card";
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="flex gap-6 w-full max-w-6xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`transition-all duration-500 ease-in-out ${
              getCardPosition(card.id) === "main-card"
                ? "flex-grow bg-white rounded-xl shadow-sm border border-[#3a023b]/10 overflow-hidden"
                : "w-48 bg-[#3a023b] rounded-xl cursor-pointer hover:bg-[#750477] transition-colors"
            }`}
            onClick={() => setActiveCard(card.id)}
          >
            {getCardPosition(card.id) === "main-card" ? (
              <div className="h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 "></div>
                  <div className="absolute bottom-2 left-2 p-4 bg-[#3a023b] rounded-xl text-white">
                    <div className="flex items-center">
                      {card.icon}
                      <h2 className="text-2xl font-semibold text-white ml-4">{card.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-[#750477] leading-relaxed">{card.content}</p>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center p-6">
                <h2 className="vertical-text text-white font-semibold whitespace-nowrap transform -rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  {card.title}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;