import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
}

function TypewriterText({ text, speed = 150 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <h2 className="text-3xl font-bold mb-8 text-lilac-900">
      {displayText}
      <span className="animate-pulse">|</span>
    </h2>
  );
}

export default TypewriterText;