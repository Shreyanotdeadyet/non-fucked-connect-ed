import React from "react";
import "../styles/SingleCard.css";
import { Shield, Clock, Heart, Trophy } from "lucide-react";

interface SingleCardProps {
  frontImage: string;
  frontText: string;
  cardIndex: number;
}

const SingleCard: React.FC<SingleCardProps> = ({ frontImage, frontText, cardIndex }) => {
  const backSideContent = [
    {
      title: "All Majors Welcome",
      icon: <Shield className="w-8 h-8 text-[#750477]" />,
      text: "Over a decade of proven expertise in delivering outstanding results.",
      features: ["Industry-leading standards", "Proven track record"],
    },
    {
      title: "24/7 Support",
      icon: <Clock className="w-8 h-8 text-[#750477]" />,
      text: "Round-the-clock assistance ensuring you're never left without help.",
      features: ["Instant response time", "Expert team available"],
    },
    {
      title: "Personalized Guidance",
      icon: <Heart className="w-8 h-8 text-[#750477]" />,
      text: "Tailored strategies to fit every student's academic journey.",
      features: ["Custom career planning", "One-on-one mentorship"],
    },
    {
      title: "Proven Success",
      icon: <Trophy className="w-8 h-8 text-[#750477]" />,
      text: "Our students have secured admissions to top global universities.",
      features: ["Ivy League admissions", "Merit-based scholarships"],
    },
  ];  

  return (
    <div className="group w-80 h-[450px] relative perspective">
      <div className="flip-card-container absolute w-full h-full rounded-xl shadow-sm border border-[#3a023b]/10 transition-transform duration-700 transform group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="flip-card-front absolute backface-hidden w-full h-full bg-white text-[#3a023b] flex flex-col justify-between rounded-xl overflow-hidden">
          {/* Upper Section - Image */}
          <div
            className="w-full h-2/3 rounded-t-xl"
            style={{
              backgroundImage: `url(${frontImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-gradient-[#3a023b]" />
          </div>

          {/* Bottom Section - Text */}
          <div className="w-full h-1/3 bg-white flex justify-center items-center px-6">
            <p className="text-lg font-semibold text-[#3a023b] text-center">{frontText}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute backface-hidden w-full h-full rounded-xl transform rotate-y-180">
          <div className="h-full bg-white rounded-xl overflow-hidden">
            {/* Header */}
            <div className="h-24 bg-[#750477] flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300">
                {backSideContent[cardIndex - 1].icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-8 h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-[#3a023b] mb-4">
                {backSideContent[cardIndex - 1].title}
              </h3>
              <ul className="space-y-3 overflow-y-auto flex-1">
                {backSideContent[cardIndex - 1].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-[#750477]">
                    <div className="w-1.5 h-1.5 bg-[#750477] rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
