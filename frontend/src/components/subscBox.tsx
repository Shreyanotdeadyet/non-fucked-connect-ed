const PersonalizedProg = () => {
  return (
    <div className="w-full bg-gray-100 flex flex-col items-center justify-center py-16">
      {/* Centered Heading */}
      <h1 className="hd-ft text-center mb-8">
        Personalized Programs
      </h1>

      {/* Content Box */}
      <div className="w-full max-w-7xl px-4 md:w-4/5 border border-dpup rounded-xl bg-white p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 shadow-lg z-10">
        {/* Section 1: Year of Growth Program */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-dpup p-6 md:last:border-none">
          <h2 className="nom-b-ft-purple">Year of Growth Program</h2>
          <p className="nom-ft mt-4 leading-relaxed">
            Unlock your full potential with unlimited, flexible sessions tailored to your goals. Personalized guidance and hands-on mentorship all year!
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 nom-ft">
            <li>Flexible scheduling</li>
            <li>Unlimited one-on-one sessions</li>
            <li>Highly customized support</li>
            <li>Comprehensive resources</li>
          </ul>
          <p className="nom-ft mt-4 leading-relaxed">
            <strong className="nom-b-ft-purple">Best For:</strong> Students seeking continuous support and a fully tailored path to academic and personal success.
          </p>
        </div>

        {/* Section 2: Monthly Map Program */}
        <div className="flex-1 border-b md:border-b-0 md:border-r border-dpup p-6 md:last:border-none">
          <h2 className="nom-b-ft-purple">Monthly Map Program</h2>
          <p className="nom-ft mt-4 leading-relaxed">
            Build clarity and direction with one focused session each month. Gain actionable steps to stay on track toward your goals.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 nom-ft">
            <li>12 monthly 60-minute sessions</li>
            <li>Goal tracking</li>
            <li>Practical advice and structured plans</li>
          </ul>
          <p className="nom-ft mt-4 leading-relaxed">
            <strong className="nom-b-ft-purple">Best For:</strong> Students who prefer a steady pace and actionable guidance in manageable, monthly steps.
          </p>
        </div>

        {/* Section 3: Pathway Accelerator Program */}
        <div className="flex-1 p-6">
          <h2 className="nom-b-ft-purple">Pathway Accelerator Program</h2>
          <p className="nom-ft mt-4 leading-relaxed">
            Accelerate your journey with a single power-packed session designed to offer instant clarity and actionable solutions.
          </p>
          <ul className="list-disc list-inside nom-ft mt-4 space-y-2">
            <li>One 90-minute session</li>
            <li>Quick goal assessment</li>
            <li>Concise action plan</li>
          </ul>
          <p className="nom-ft mt-4 leading-relaxed">
            <strong className="nom-b-ft-purple">Best For:</strong> Students looking for a one-time boost to jumpstart their planning or resolve specific challenges.
          </p>
        </div>
      </div>
      <button className="read-more bg-dpup hover:bg-pup nom-b-ft-white py-2 px-4 rounded-xl my-6">
              Contact Us
            </button>
    </div>
  );
};

export default PersonalizedProg;
