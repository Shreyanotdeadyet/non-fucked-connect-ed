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
      <div className="slick-next-arrow absolute top-1/2 right-4 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-50 cursor-pointer shadow-lg hover:bg-gray-300">
        <span className="material-symbols-rounded text-gray-600">arrow_back_2</span>
      </div>
    ),
    prevArrow: (
      <div className="slick-prev-arrow absolute top-1/2 left-4 -translate-y-1/2 bg-gray-200 rounded-full p-3 z-50 cursor-pointer shadow-lg hover:bg-gray-300">
        <span className="material-symbols-rounded text-gray-600">arrow_back_2</span>
      </div>
    ),
  };

  return (
    <div className="w-full h-screen bg-tg-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-tg-600 mb-20">Workshops</h1>

      <div className="max-w-7xl w-full">
        <Slider {...settings}>
          {[image1, image2, image3].map((image, index) => (
            <div
              key={index}
              className="box bg-tg-300 p-8 mx-6 my-6 rounded-xl shadow-xl flex flex-col justify-between items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#6419cc] mb-4">Workshop {index + 1}</h3>
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
