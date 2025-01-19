// // import image1 from "../assets/image1.jpeg";
// // import image2 from "../assets/image2.jpeg";
// // import image3 from "../assets/image3.jpeg";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // const Workshops = () => {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 2,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 2,
// //         },
// //       },
// //     ],
// //     nextArrow: (
// //       <div className="slick-next-arrow absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
// //         <span className="material-icons text-gray-600">arrow_forward</span>
// //       </div>
// //     ),
// //     prevArrow: (
// //       <div className="slick-prev-arrow absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
// //         <span className="material-icons text-gray-600">arrow_back</span>
// //       </div>
// //     ),
// //   };

// //   return (
// //     <div className="carousel bg-[#006255df] py-32 flex flex-col justify-center items-center">
// //       <h2 className="text-2xl lg:text-3xl font-bold text-[#f7f0de] mb-8 text-center">
// //         Upcoming Workshops
// //       </h2>
// //       <br/>
// //       <br/>
// //       <br/>
// //       {/* Adjusted width to scale on larger screens */}
// //       <div className="max-w-6xl w-full px-4 lg:px-12 xl:scale-150">
// //         <Slider {...settings}>
// //           {[image1, image2, image3].map((image, index) => (
// //             <div
// //               key={index}
// //               className="box bg-[#e6e2c1] p-6 ml-3 rounded-lg shadow-lg flex flex-col justify-normal items-center text-center transition-transform transform hover:translate-y-[-1px] hover:shadow-2xl"
// //             >
// //               <h3 className="text-xl lg:text-2xl font-bold text-[#6419cc] mb-3">
// //                 Workshop {index + 1}
// //               </h3>
// //               <p className="text-lg text-gray-600 mb-5">Coming Soon</p>
// //               <div className="image-container mb-4">
// //                 <img
// //                   src={image}
// //                   alt={`Workshop ${index + 1}`}
// //                   className="w-full h-48 lg:h-56 object-cover rounded-lg"
                  
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </Slider>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Workshops;
// import React, { useEffect } from "react";
// import image1 from "../assets/image1.jpeg";
// import image2 from "../assets/image2.jpeg";
// import image3 from "../assets/image3.jpeg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Workshops: React.FC = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       if (window.Calendly) {
//         window.Calendly.initBadgeWidget({
//           url: "https://calendly.com/anshulp027/book-a-consultation?background_color=e9d5b9&text_color=009984&primary_color=7900f7",
//           text: "Book a meeting",
//           color: "#7900f7",
//           textColor: "#e9d5b9",
//         });
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     nextArrow: (
//       <div className="slick-next-arrow absolute top-1/2 right-4 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-50 cursor-pointer shadow-lg hover:bg-gray-300">
//         <span className="material-symbols-rounded text-gray-600">arrow_back_2</span>
//       </div>
//     ),
//     prevArrow: (
//       <div className="slick-prev-arrow absolute top-1/2 left-4 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-50 cursor-pointer shadow-lg hover:bg-gray-300">
//         <span className="material-symbols-rounded text-gray-600">arrow_back_2</span>
//       </div>
//     ),
//   };

//   return (
//     <div className="w-full h-screen bg-tg-100 flex flex-col justify-center items-center">
//       <h1 className="hd-ft text-center mb-20">Workshops</h1>

//       <div className="max-w-7xl w-full">
//         <Slider {...settings}>
//           {[image1, image2, image3].map((image, index) => (
//             <div
//               key={index}
//               className="box bg-tg-300 p-8 mx-6 my-6 rounded-xl shadow-xl flex flex-col justify-between items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
//             >
//               <h3 className="text-2xl lg:text-3xl font-bold text-[#6419cc] mb-4">Workshop {index + 1}</h3>
//               <p className="text-lg text-gray-600 mb-6">Coming Soon</p>
//               <div className="image-container mb-6">
//                 <img
//                   src={image}
//                   alt={`Workshop ${index + 1}`}
//                   className="w-full h-60 lg:h-64 object-cover rounded-lg"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Workshops;

import React, { useState } from 'react';
import { MapPin, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

// Workshop data - in a real app, this would come from an API or database
const workshops = [
  {
    title: "Advanced React Development",
    location: "Tech Hub, 123 Innovation Street, San Francisco, CA",
    date: "2024-04-15",
    time: "14:00",
    coordinates: "37.7749,-122.4194",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "UI/UX Design Fundamentals",
    location: "Design Center, 456 Creative Ave, New York, NY",
    date: "2024-04-20",
    time: "10:00",
    coordinates: "40.7128,-74.0060",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Web Performance Optimization",
    location: "Code Campus, 789 Developer Road, Seattle, WA",
    date: "2024-04-25",
    time: "15:30",
    coordinates: "47.6062,-122.3321",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Mobile App Development Workshop",
    location: "App Studio, 321 Mobile Lane, Austin, TX",
    date: "2024-05-01",
    time: "13:00",
    coordinates: "30.2672,-97.7431",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Cloud Architecture Masterclass",
    location: "Cloud Center, 555 Server Road, Chicago, IL",
    date: "2024-05-05",
    time: "11:00",
    coordinates: "41.8781,-87.6298",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
  }
];

function WorkshopCard({ workshop }: { workshop: typeof workshops[0] }) {
  const addToCalendar = (date: string, time: string, title: string, location: string) => {
    const startTime = new Date(`${date}T${time}`);
    const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startTime.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}\/${endTime.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const openGoogleMaps = (coordinates: string) => {
    window.open(`https://www.google.com/maps?q=${coordinates}`, '_blank');
  };

  return (
    <div className="relative h-[500px] bg-white rounded-xl shadow-lg overflow-hidden group">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${workshop.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 h-full p-2 flex flex-col justify-between">
        <div >
          <h2 className="text-3xl font-bold bg-dtg-500 rounded-xl text-center text-white mb-6 py-4">{workshop.title}</h2>
          
          <div className="space-y-4">
            <button 
              onClick={() => openGoogleMaps(workshop.coordinates)}
              className="flex items-center space-x-3 text-white hover:text-white transition-colors w-full text-left group"
            >
              <MapPin className="h-6 w-6" />
              <span className="text-lg group-hover:underline">{workshop.location}</span>
            </button>

            <button 
              onClick={() => addToCalendar(workshop.date, workshop.time, workshop.title, workshop.location)}
              className="flex items-center space-x-3 text-white hover:text-white transition-colors group"
            >
              <Calendar className="h-6 w-6" />
              <span className="text-lg group-hover:underline">
                {new Date(workshop.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </button>

            <button 
              onClick={() => addToCalendar(workshop.date, workshop.time, workshop.title, workshop.location)}
              className="flex items-center space-x-3 text-white hover:text-white transition-colors group"
            >
              <Clock className="h-6 w-6" />
              <span className="text-lg group-hover:underline">
                {new Date(`2000-01-01T${workshop.time}`).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true
                })}
              </span>
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => addToCalendar(workshop.date, workshop.time, workshop.title, workshop.location)}
          className="w-full bg-tg-300 hover:bg-dtg-500 text-white  py-3 px-6 rounded-lg transition-colors mt-6 text-lg font-semibold"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

function Carousel({ items }: { items: typeof workshops }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= items.length ? 0 : prevIndex + itemsPerPage
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? items.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {items.map((workshop, index) => (
            <div 
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
            >
              <WorkshopCard workshop={workshop} />
            </div>
          ))}
        </div>
      </div>
      
      {totalPages > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-900 p-3 rounded-full shadow-lg transition-colors z-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-900 p-3 rounded-full shadow-lg transition-colors z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}

function Workshops() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="hd-ft mb-4 text-center">Upcoming Workshops</h1>
        <p className="nom-b-ft-purple mb-12 text-center">Expand your knowledge with our expert-led sessions</p>
        <Carousel items={workshops} />
      </div>
    </div>
  );
}

export default Workshops;