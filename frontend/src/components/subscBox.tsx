import React from "react";

const PersonalizedProg = () => {
  return (
    <section className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="large-dark-heading mb-4">
            Personalized Programs
          </h2>
          <p className="mid-mp-subhd">
            Choose the perfect program to support your educational journey
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Year of Growth Program */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-dp/10 hover:shadow-2xl transition-shadow">
            <h3 className="small-dark-heading mb-4">
              Year of Growth Program
            </h3>
            <p className="normal-mp-text mb-6 leading-relaxed">
              Unlock your full potential with unlimited, flexible sessions tailored to your goals. Personalized guidance and hands-on mentorship all year!
            </p>
            <ul className="space-y-3 mb-6 normal-black-text">
              {[
                "Flexible scheduling",
                "Unlimited one-on-one sessions",
                "Highly customized support",
                "Comprehensive resources"
              ].map((item, index) => (
                <li key={index} className="flex items-start text-text-black">
                  <span className="mr-2 text-text-black">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-dp/10">
              <p className="normal-black-text">
                <span className="font-semibold text-mp">Best For: </span>
                Students seeking continuous support and a fully tailored path to academic and personal success.
              </p>
            </div>
          </div>

          {/* Monthly Map Program */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-dp/10 hover:shadow-2xl transition-shadow">
            <h3 className="small-dark-heading mb-4">
              Monthly Map Program
            </h3>
            <p className="normal-mp-text mb-6 leading-relaxed">
              Build clarity and direction with one focused session each month. Gain actionable steps to stay on track toward your goals.
            </p>
            <ul className="space-y-3 mb-6 normal-black-text">
              {[
                "12 monthly 60-minute sessions",
                "Goal tracking",
                "Practical advice and structured plans"
              ].map((item, index) => (
                <li key={index} className="flex items-start text-text-black">
                  <span className="mr-2 text-text-black">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-dp/10">
              <p className="normal-black-text">
                <span className="font-semibold text-mp">Best For: </span>
                Students who prefer a steady pace and actionable guidance in manageable, monthly steps.
              </p>
            </div>
          </div>

          {/* Pathway Accelerator Program */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-dp/10 hover:shadow-2xl transition-shadow">
            <h3 className="small-dark-heading mb-4">
              Pathway Accelerator Program
            </h3>
            <p className="normal-mp-text mb-6 leading-relaxed">
              Accelerate your journey with a single power-packed session designed to offer instant clarity and actionable solutions.
            </p>
            <ul className="space-y-3 mb-6 normal-black-text ">
              {[
                "One 90-minute session",
                "Quick goal assessment",
                "Concise action plan"
              ].map((item, index) => (
                <li key={index} className="flex items-start text-text-black">
                  <span className="mr-2 text-text-black">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-dp/10">
              <p className="normal-black-text">
                <span className="font-semibold text-mp">Best For: </span>
                Students looking for a one-time boost to jumpstart their planning or resolve specific challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12">
          <button className="bg-dp hover:bg-mp text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedProg;