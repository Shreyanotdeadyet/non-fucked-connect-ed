

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Building2, Users, Award, Briefcase } from 'lucide-react';

function StatNumber({ end, label, icon: Icon }: { end: number; label: string; icon: React.ElementType }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    let timer: number;

    const updateCount = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        timer = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    timer = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(timer);
  }, [end, isVisible]);

  return (
    <div
      ref={elementRef}
      className={`stat-number ${isVisible ? 'visible' : 'hidden-number'} text-center`}
    >
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-dpup" />
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{count}+</div>
      <div className="nom-ft">{label}</div>
    </div>
  );
}

const GridLayout = () => {
    return (
      <section className="bg-white/95 backdrop-blur-sm pt-32 pb-16 rounded-t-[40px] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatNumber end={500} label="Companies Connected" icon={Building2} />
          <StatNumber end={1000} label="Workshops Conducted" icon={Award} />
          <StatNumber end={10000} label="Professionals Trained" icon={Users} />
          <StatNumber end={250} label="Active Projects" icon={Briefcase} />
        </div>
      </div>
      </section>
    );
};
    
export default GridLayout;