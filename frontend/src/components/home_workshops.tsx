
// import image1 from '../assets/image1.jpeg';
// import image2 from '../assets/image2.jpeg';
// import image3 from '../assets/image3.jpeg';

// import Slider from "react-slick";

// function Workshops() {
    
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//     return (
//         <Slider {...settings}>
//             {[image1, image2, image3].map((image, index) => (
//               <div key={index} className="box p-4 bg-white rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-800">Workshop {index + 1}</h3>
//                 {/* <h4 className="text-sm text-gray-600">Date: {`1st January 2025`}</h4>
//                 <h5 className="text-sm text-gray-600">Time: 5:30pm-7:00pm</h5> */}
//                 <p className="text-lg text-gray-600">Coming Soon</p>
//                 <div className="image-container mt-4">
//                   {/* <img
//                     src={image}
//                     alt={`Workshop ${index + 1}`}
//                     className="w-full h-48 object-cover rounded-lg"
//                   /> */}
//                 </div>
//               </div>
//             ))}
//           </Slider>
      
//     )
//   }
  
//   export default Workshops



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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <div className="slick-next-arrow absolute top-1/2 right-4 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
        <span className="material-icons text-gray-600">arrow_forward</span>
      </div>
    ),
    prevArrow: (
      <div className="slick-prev-arrow absolute top-1/2 left-4 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-10 cursor-pointer shadow-lg hover:bg-gray-300">
        <span className="material-icons text-gray-600">arrow_back</span>
      </div>
    )
  };

  return (
    <div className="carousel bg-beige-200 py-12 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Upcoming Workshops
      </h2>
      <Slider {...settings} className="w-full px-4">
        {[image1, image2, image3].map((image, index) => (
          <div
            key={index}
            className="box bg-white p-6 ml-3 rounded-lg shadow-lg flex flex-col justify-normal items-center text-center transition-transform transform hover:translate-y-[-1px] hover:shadow-2xl"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Workshop {index + 1}
            </h3>
            <p className="text-lg text-gray-600 mb-5">Coming Soon</p>
            <div className="image-container mb-4">
              <img
                src={image}
                alt={`Workshop ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Workshops;

