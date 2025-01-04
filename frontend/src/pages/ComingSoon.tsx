import React, { useState, useEffect } from "react";
import comingBg from "../assets/coming_bg.jpg"; // Update the path based on where your image is located

const ComingSoon: React.FC = () => {
  const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const launchDate = new Date("2025-02-01T00:00:00");
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTime = () => {
    return Object.entries(timeLeft).map(([unit, value]) => (
      <div key={unit} className="flex flex-col items-center space-y-2">
        <h2 className="text-5xl font-semibold text-dtg-500">{value}</h2>
        <span className="text-sm uppercase text-dtg-500">{unit}</span>
      </div>
    ));
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${comingBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Darker overlay */}
      <div className="z-10 text-center px-6 space-y-6">
        <h1 className="text-6xl font-extrabold text-white mb-4">Coming Soon</h1>
        <p className="text-xl text-white opacity-90 mb-6">
          We’re working on something amazing! Stay tuned.
        </p>
        <div className="flex justify-center space-x-8">{renderTime()}</div>
      </div>
    </div>
  );
};

export default ComingSoon;
