
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';

import Slider from "react-slick";

function Workshops() {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <Slider {...settings}>
            {[image1, image2, image3].map((image, index) => (
              <div key={index} className="box p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Workshop {index + 1}</h3>
                <h4 className="text-sm text-gray-600">Date: {`1st January 2025`}</h4>
                <h5 className="text-sm text-gray-600">Time: 5:30pm-7:00pm</h5>
                <p className="text-sm text-gray-600">About the event</p>
                <div className="image-container mt-4">
                  <img
                    src={image}
                    alt={`Workshop ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
      
    )
  }
  
  export default Workshops
  

