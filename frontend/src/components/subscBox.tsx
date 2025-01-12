// // import React from 'react';

// const ResponsiveCard = () => {
//     return (
//       <div className="w-screen h-screen bg-tg-100 flex items-center justify-center">
//         <div className="max-w-7xl w-full md:w-4/5 border border-teal-300 rounded-xl bg-white p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//           <div className="flex-1 border-r md:border-teal-300 p-4 md:last:border-none">
//             <h2 className="text-lg font-bold">Section 1</h2>
//             <p className="text-sm text-gray-700">
//               This is the content for the first section.
//             </p>
//           </div>
//           <div className="flex-1 border-r md:border-teal-300 p-4 md:last:border-none">
//             <h2 className="text-lg font-bold">Section 2</h2>
//             <p className="text-sm text-gray-700">
//               This is the content for the second section.
//             </p>
//           </div>
//           <div className="flex-1 p-4">
//             <h2 className="text-lg font-bold">Section 3</h2>
//             <p className="text-sm text-gray-700">
//               This is the content for the third section.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default ResponsiveCard;
  



// import React from 'react';

const ResponsiveCard = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8">
      {/* Centered Heading */}
      <h1 className="text-4xl font-bold text-center text-teal-700">
        Personalized Programs
      </h1>

      {/* Content Box */}
      <div className="max-w-7xl w-full md:w-4/5 border border-teal-300 rounded-xl bg-white p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 shadow-lg">
        {/* Section 1: Year of Growth Program */}
        <div className="flex-1 border-r md:border-teal-300 p-6 md:last:border-none">
          <h2 className="text-xl font-bold text-teal-700">Year of Growth Program</h2>
          <p className="text-base text-gray-800 mt-4 leading-relaxed">
            Unlock your full potential with unlimited, flexible sessions tailored to your goals. Personalized guidance and hands-on mentorship all year!
          </p>
          <ul className="list-disc list-inside text-gray-800 mt-4 space-y-2">
            <li>Flexible scheduling</li>
            <li>Unlimited one-on-one sessions</li>
            <li>Highly customized support</li>
            <li>Comprehensive resources</li>
          </ul>
          <p className="text-base text-teal-600 mt-4 font-semibold leading-relaxed">
            <strong>Best For:</strong> Students seeking continuous support and a fully tailored path to academic and personal success.
          </p>
        </div>

        {/* Section 2: Monthly Map Program */}
        <div className="flex-1 border-r md:border-teal-300 p-6 md:last:border-none">
          <h2 className="text-xl font-bold text-teal-700">Monthly Map Program</h2>
          <p className="text-base text-gray-800 mt-4 leading-relaxed">
            Build clarity and direction with one focused session each month. Gain actionable steps to stay on track toward your goals.
          </p>
          <ul className="list-disc list-inside text-gray-800 mt-4 space-y-2">
            <li>12 monthly 60-minute sessions</li>
            <li>Goal tracking</li>
            <li>Practical advice and structured plans</li>
          </ul>
          <p className="text-base text-teal-600 mt-4 font-semibold leading-relaxed">
            <strong>Best For:</strong> Students who prefer a steady pace and actionable guidance in manageable, monthly steps.
          </p>
        </div>

        {/* Section 3: Pathway Accelerator Program */}
        <div className="flex-1 p-6">
          <h2 className="text-xl font-bold text-teal-700">Pathway Accelerator Program</h2>
          <p className="text-base text-gray-800 mt-4 leading-relaxed">
            Accelerate your journey with a single power-packed session designed to offer instant clarity and actionable solutions.
          </p>
          <ul className="list-disc list-inside text-gray-800 mt-4 space-y-2">
            <li>One 90-minute session</li>
            <li>Quick goal assessment</li>
            <li>Concise action plan</li>
          </ul>
          <p className="text-base text-teal-600 mt-4 font-semibold leading-relaxed">
            <strong>Best For:</strong> Students looking for a one-time boost to jumpstart their planning or resolve specific challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCard;
