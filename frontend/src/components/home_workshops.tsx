// import image1 from "../assets/image1.jpeg";
// import image2 from "../assets/image2.jpeg";
// import image3 from "../assets/image3.jpeg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Workshops = () => {
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
//           slidesToScroll: 2,
//         },
//       },
//     ],
//     nextArrow: (
//       <div className="slick-next-arrow absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
//         <span className="material-icons text-gray-600">arrow_forward</span>
//       </div>
//     ),
//     prevArrow: (
//       <div className="slick-prev-arrow absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
//         <span className="material-icons text-gray-600">arrow_back</span>
//       </div>
//     ),
//   };

//   return (
//     <div className="carousel bg-[#006255df] py-32 flex flex-col justify-center items-center">
//       <h2 className="text-2xl lg:text-3xl font-bold text-[#f7f0de] mb-8 text-center">
//         Upcoming Workshops
//       </h2>
//       <br/>
//       <br/>
//       <br/>
//       {/* Adjusted width to scale on larger screens */}
//       <div className="max-w-6xl w-full px-4 lg:px-12 xl:scale-150">
//         <Slider {...settings}>
//           {[image1, image2, image3].map((image, index) => (
//             <div
//               key={index}
//               className="box bg-[#e6e2c1] p-6 ml-3 rounded-lg shadow-lg flex flex-col justify-normal items-center text-center transition-transform transform hover:translate-y-[-1px] hover:shadow-2xl"
//             >
//               <h3 className="text-xl lg:text-2xl font-bold text-[#6419cc] mb-3">
//                 Workshop {index + 1}
//               </h3>
//               <p className="text-lg text-gray-600 mb-5">Coming Soon</p>
//               <div className="image-container mb-4">
//                 <img
//                   src={image}
//                   alt={`Workshop ${index + 1}`}
//                   className="w-full h-48 lg:h-56 object-cover rounded-lg"
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
















import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Workshops = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: (
      <div className="slick-next-arrow absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
        <span className="material-icons text-gray-600">arrow_forward</span>
      </div>
    ),
    prevArrow: (
      <div className="slick-prev-arrow absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
        <span className="material-icons text-gray-600">arrow_back</span>
      </div>
    ),
  };

  return (
    <div className="w-full h-screen bg-tg-100 flex flex-col justify-center items-center">
      {/* Title Section */}
      {/* <h1 className="text-4xl font-bold text-center text-white mb-12 text-tg-300"> */}
      <h1 className="text-4xl font-bold text-center text-tg-600 mb-20">
        Workshops
      </h1>

      {/* Carousel Section */}
      <div className="max-w-7xl w-full">
        <Slider {...settings}>
          {[image1, image2, image3].map((image, index) => (
            <div
              key={index}
              className="box bg-tg-300 p-8 mx-6 my-6 rounded-xl shadow-xl flex flex-col justify-between items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#6419cc] mb-4">
                Workshop {index + 1}
              </h3>
              <p className="text-lg text-gray-600 mb-6">Coming Soon</p>
              <div className="image-container mb-6">
                <img
                  src={image}
                  alt={`Workshop ${index + 1}`}
                  className="w-full h-60 lg:h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Workshops;














// import image1 from "../assets/image1.jpeg";
// import image2 from "../assets/image2.jpeg";
// import image3 from "../assets/image3.jpeg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Workshops = () => {
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
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     nextArrow: (
//       <div className="slick-next-arrow absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 rounded-full p-2 lg:p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
//         <span className="material-icons text-gray-600">arrow_forward</span>
//       </div>
//     ),
//     prevArrow: (
//       <div className="slick-prev-arrow absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 rounded-full p-2 lg:p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
//         <span className="material-icons text-gray-600">arrow_back</span>
//       </div>
//     ),
//   };

//   return (
//     <div className="w-full h-screen bg-tg-100 flex flex-col justify-center items-center">
//       {/* Title Section */}
//       <h1 className="text-4xl font-bold text-center text-tg-600 mb-20">
//         Workshops
//       </h1>

//       {/* Carousel Section */}
//       <div className="max-w-7xl w-full">
//         <Slider {...settings}>
//           {[image1, image2, image3].map((image, index) => (
//             <div
//               key={index}
//               className="bg-tg-300 p-10 lg:p-12 mx-4 my-4 lg:mx-6 lg:my-6 rounded-xl shadow-xl flex flex-col justify-between items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
//             >
//               <h3 className="text-2xl lg:text-3xl font-bold text-[#6419cc] mb-4">
//                 Workshop {index + 1}
//               </h3>
//               <p className="text-lg text-gray-600 mb-6">Coming Soon</p>
//               <div className="mb-6">
//                 <img
//                   src={image}
//                   alt={`Workshop ${index + 1}`}
//                   className="w-full h-64 lg:h-72 object-cover rounded-lg"
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
