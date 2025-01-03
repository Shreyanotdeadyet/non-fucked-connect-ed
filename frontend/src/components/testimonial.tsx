
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rodger Struck",
    title: "CEO of Company Name",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.",
    video: false,
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Product Manager",
    comment: "Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem.",
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
    name: "Sohn Smith",
    title: "Marketing Head",
    video: true,
  },
  {
    id: 5,
    name: "And",
    video: false,
    comment: "Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem.",
  },
  {
    id: 6,
    name: "Jane Doe",
    title: "Product Manager",
    comment: "Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem.",
    video: false,
  },
  {
    id: 7,
    name: "Jane Doe",
    title: "Product Manager",
    comment: "Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem.",
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
      <div className="absolute top-10 text-center z-20">
        <h2 className="text-2xl font-semibold mb-4">What Our Clients Say</h2>
        <p className="text-lg italic">"Our clients have experienced the best results with our services."</p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        <div className="hidden lg:flex w-full items-center justify-center">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`absolute transition-transform duration-500 ease-in-out rounded-lg shadow-2xl bg-gray-800 p-6 ${
                item.id === activeId
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
                <div className="text-center p-6 bg-gray-700 rounded-lg flex flex-col justify-center items-center h-64">
                  <p className="text-lg italic">{item.comment}</p>
                  <span className="mt-4 font-bold text-sm">{`- ${item.name}`}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Small Screen Carousel */}
        <div className="flex lg:hidden items-center justify-between w-full px-4">
          <button
            onClick={handlePrev}
            className="text-white bg-gray-700 p-2 rounded-full hover:bg-red-500"
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
              <div className="text-center p-6 bg-gray-700 rounded-lg flex flex-col justify-center items-center h-64">
                <p className="text-lg italic">{activeTestimonial.comment}</p>
                <span className="mt-4 font-bold text-sm">{`- ${activeTestimonial.name}`}</span>
              </div>
            )}
          </div>
          <button
            onClick={handleNext}
            className="text-white bg-gray-700 p-2 rounded-full hover:bg-red-500"
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
            className={`w-14 h-14 rounded-full bg-gray-700 text-white flex items-center justify-center font-bold text-base cursor-pointer border-2 border-white transition-all duration-300 ease-in-out transform hover:scale-110 ${
              item.id === activeId ? "ring-4 ring-red-500" : ""
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
