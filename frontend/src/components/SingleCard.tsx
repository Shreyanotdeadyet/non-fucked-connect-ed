import React from "react";
import '../styles/SingleCard.css';

interface SingleCardProps {
  frontImage: string; // URL for the image on the front side
  frontText: string; // Text for the front side
  backText: string; // Text for the back side
}

const SingleCard: React.FC<SingleCardProps> = ({ frontImage, frontText, backText }) => {
  return (
    <div className="group w-64 h-96 relative perspective">
      {/* Card Wrapper */}
      <div className="flip-card-container absolute w-full h-full rounded-xl shadow-lg transition-transform duration-700 transform group-hover:rotate-y-180">
        {/* Front Side */}
        <div
          className="flip-card-front absolute backface-hidden w-full h-full bg-black text-white flex flex-col justify-center items-center rounded-xl"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${frontImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p className="text-lg font-bold text-white px-4 text-center">{frontText}</p>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute backface-hidden w-full h-full bg-gray-400 text-white flex justify-center items-center rounded-xl transform rotate-y-180">
          <p className="text-lg font-medium px-4 text-center">{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
