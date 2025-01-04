import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Saanvi M.",
    title: "Greenwood High International School, Bangalore - India",
    comment: "Ms Girija provided exceptional support as my Careers and College Guidance Counselor and displayed unwavering dedication to help me develop essential skills. She recognised my passion for writing early on, and encouraged me to explore extracurricular opportunities that aligned with my interests. Her guidance extended beyond conventional paths - she provided resources and suggestions to expand my thinking horizons. Thanks to her constant motivation and belief in my abilities, I am going to be a published author and poet this year. She has the ability to bring out the best in you. Her expertise and personalised approach made a tremendous difference to my educational journey.",
    video: false,
  },
  {
    id: 2,
    name: "Anandita A.",
    title: "The International School Bangalore - India",
    comment: "Ms Girija was a truly wonderful mentor to me during my high school years. She became a crucial voice of constructive criticism that helped me turn my dreams into realities, elevating my passions into projects. With her as my mentor, I never felt alone or lost, knowing I had a guiding hand in times of anxiety. She pushed me to think about the world differently and try and learn new skills, stepping out of my comfort zone. If I struggled with something, she helped me get back on my feet, helping me believe and achieve the best possible version of myself. She helped shape my worldview as a role-model and a partner-in- conversation, always being a reliable and warm force in my life.",
    video: false,
  },
  {
    id: 3,
    name: "John Smith",
    title: "Marketing Head",
    video: true,
  },
  {
    id: 4,
    name: "Neha S.",
    title: "St Mary's School, Pune - India",
    comment: "When I first started working with Ms Girija, I was unsure about my desired field of study. She guided me through reflection exercises that provided invaluable insights into what I wanted to pursue at college and professionally. She helped generate original ideas for extracurricular activities that perfectly aligned with my strengths and interests. Additionally, her essay guidance was exceptional, as her feedback was both constructive and enlightening. She also kept me informed on scholarships and other deadlines, ensuring I always stayed on track. Thanks to her guidance, I am now studying at the University of California Los Angeles. Her expertise and personalised approach made her an invaluable resource throughout the application journey.",
    video: false,
  },
];

const TestimonialComponent = () => {
  const [activeId, setActiveId] = useState(Math.ceil(testimonials.length / 2));

  const handlePrev = () => {
    setActiveId((prev) => (prev === 1 ? testimonials.length : prev - 1));
  };

  const handleNext = () => {
    setActiveId((prev) => (prev === testimonials.length ? 1 : prev + 1));
  };

  const activeTestimonial =
    testimonials.find((item) => item.id === activeId) || {
      id: 0,
      name: "Unknown",
      title: "Not Available",
      comment: "No comment available.",
      video: false,
    };

  return (
    <div className="h-screen text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Header Section */}
      <div className="absolute top-10 text-center z-20 ">
        <h2 className="text-2xl font-semibold mb-4 text-dtg-900">What Our Clients Say</h2>
        <p className="text-lg italic text-dtg-500">"Our clients have experienced the best results with our services."</p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        <div className="hidden lg:flex w-full items-center justify-center">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`absolute transition-transform duration-500 ease-in-out rounded-lg shadow-2xl bg-dtg-900 p-6 ${item.id === activeId
                  ? "w-1/2 scale-100 z-10"
                  : "w-1/3 scale-90 z-0 opacity-50"
                }`}
              style={{
                transform: `translateX(${(index - activeId + 1) * 100}%)`,
              }}
            >
              {item.video ? (
                <video
                  className="rounded-lg w-full h-64 object-contain shadow-lg"
                  controls
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                />
              ) : (
                <div className="text-center text-black p-6 bg-beg rounded-lg flex flex-col justify-center items-center h-64 overflow-y-auto max-h-64">
                  <p className="text-lg italic overflow-auto">{item.comment}</p>
                  <span className="mt-4 font-bold text-sm">{item.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Small Screen Carousel */}
        <div className="flex lg:hidden items-center justify-between w-full px-4">
          <button
            onClick={handlePrev}
            className="text-white bg-dtg-500 p-2 rounded-full hover:bg-dtg-900"
          >
            &lt;
          </button>
          <div className="w-4/5">
            {activeTestimonial.video ? (
              <video
                className="rounded-lg w-full h-64 object-contain shadow-lg"
                controls
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              />
            ) : (
              <div className="text-center p-6 bg-dtg-900 rounded-lg flex flex-col justify-center items-center h-64 overflow-y-auto max-h-64">
                <p className="text-lg italic overflow-auto">{activeTestimonial.comment}</p>
                <span className="mt-4 font-bold text-sm">{activeTestimonial.name}</span>
              </div>
            )}
          </div>
          <button
            onClick={handleNext}
            className="text-white bg-dtg-500 p-2 rounded-full hover:bg-dtg-900"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-20 hidden lg:flex justify-center items-center space-x-[-10px]">
        {testimonials.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`w-14 h-14 rounded-full bg-dtg-500 text-white flex items-center justify-center font-bold text-base cursor-pointer border-2 border-white transition-all duration-300 ease-in-out transform hover:scale-110 ${item.id === activeId ? "ring-4 ring-dtg-900" : ""
              }`}
          >
            {item.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </button>
        ))}
      </div>

    </div>
  );
};

export default TestimonialComponent;
