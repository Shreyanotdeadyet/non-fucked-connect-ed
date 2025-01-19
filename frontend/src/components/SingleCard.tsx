import React from "react";
import "../styles/SingleCard.css";
import { Shield, Clock, Heart, Trophy } from "lucide-react";

interface SingleCardProps {
  frontImage: string;
  frontText: string;
  cardIndex: number; // To determine which back-side content to show
}

const SingleCard: React.FC<SingleCardProps> = ({ frontImage, frontText, cardIndex }) => {
  // Define back-side content for each card
  const backSideContent = [
    {
      title: "Trusted Excellence",
      bgGradient: "bg-dpup",
      icon: <Shield className="w-8 h-8 text-dpup" />,
      text: "Over a decade of proven expertise in delivering outstanding results.",
      features: ["Industry-leading standards", "Proven track record"],
    },
    {
      title: "24/7 Support",
      bgGradient: "bg-dpup",
      icon: <Clock className="w-8 h-8 text-dpup" />,
      text: "Round-the-clock assistance ensuring you're never left without help.",
      features: ["Instant response time", "Expert team available"],
    },
    {
      title: "Personalized Guidance",
      bgGradient: "bg-dpup",
      icon: <Heart className="w-8 h-8 text-dpup" />,
      text: "Tailored strategies to fit every student's academic journey.",
      features: ["Custom career planning", "One-on-one mentorship"],
    },
    {
      title: "Proven Success",
      bgGradient: "bg-dpup",
      icon: <Trophy className="w-8 h-8 text-dpup" />,
      text: "Our students have secured admissions to top global universities.",
      features: ["Ivy League admissions", "Merit-based scholarships"],
    },
  ];

  return (
    <div className="group w-80 h-[450px] relative perspective">
      {/* Card Wrapper */}
      <div className="flip-card-container absolute w-full h-full rounded-xl shadow-lg transition-transform duration-700 transform group-hover:rotate-y-180">
        {/* Front Side */}
        <div
  className="flip-card-front absolute backface-hidden w-full h-full bg-black text-white flex flex-col justify-between rounded-xl"
>
  {/* Upper Section - Image */}
  <div
    className="w-full h-2/3 rounded-t-xl"
    style={{
      backgroundImage: `url(${frontImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  {/* Bottom Section - Text with White Background */}
  <div className="w-full h-1/3 bg-white flex justify-center items-center rounded-b-xl px-4">
    <p className="nom-b-ft-purple text-center">{frontText}</p>
  </div>
</div>


        {/* Back Side */}
        <div className="flip-card-back absolute backface-hidden w-full h-full bg-gray-400 text-white flex justify-center items-center rounded-xl transform rotate-y-180">
          <div className="group h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className={`h-24 ${backSideContent[cardIndex - 1].bgGradient} flex items-center justify-center`}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                {backSideContent[cardIndex - 1].icon}
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="text-xl font-bold mb-4 group-hover:text-opacity-80 transition-opacity">
                {backSideContent[cardIndex - 1].title}
              </h3>
              <p className="nom-ft leading-relaxed">{backSideContent[cardIndex - 1].text}</p>
              <ul className="nom-ft space-y-2 mt-4">
                {backSideContent[cardIndex - 1].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></div>
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
