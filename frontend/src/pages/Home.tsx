
import landing from "../assets/landing.mp4"
import React from 'react';
import GridLayout from '@/components/GridLayout';
import { MarqueeDemo } from '@/components/MarqueeDemo';
import { BookmarkIcon, BookOpenIcon, DocumentIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import '../styles/App.css';
import Card from '../components/Services';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../index.css';

const Home: React.FC = () => {


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
  
    <div className="bg-gray-900">
        <div className="relative w-full h-screen overflow-hidden">
    {/* Video Background */}
    <video 
      className="absolute top-0 left-0 w-full h-full object-cover" 
      autoPlay 
      loop 
      muted 
      playsInline
    >
      <source src={landing} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
      <GridLayout />
      <div className="App">
        <h1 className="text-white text-4xl font-bold text-center">Services</h1>
        <br />
        <section id="services" className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          <Card
            body="Do laborum sunt ut ex cupidatat exercitation."
            title="Class 8-9"
            image={image1}
            badge={{
              text: "New Post",
              filled: false,
            }}
            indicator="Sold"
            btn={{
              text: "Read Post",
              href: '#',
              type: 'primary',
              filled: true,
              icon: <DocumentIcon className="w-5 h-5" />,
            }}
          />
          <Card
            body="Do laborum sunt ut ex cupidatat exercitation."
            title="Class 10"
            image={image2}
            badge={{
              text: "New Post",
              filled: true,
            }}
            indicator="New"
            btn={{
              text: "Apply",
              href: '#',
              type: 'primary',
              filled: true,
              icon: <PencilSquareIcon className="w-5 h-5" />,
            }}
          />
          <Card
            body="Do laborum sunt ut ex cupidatat exercitation."
            title="Class 11-12"
            image={image3}
            badge={{
              text: "New Post",
              filled: true,
            }}
            indicator="Upcoming"
            btn={{
              text: "Book",
              href: '#',
              type: 'primary',
              filled: true,
              icon: <BookmarkIcon className="w-5 h-5" />,
            }}
          />
        </section>

        <br />
        <div className="carousel mb-8 p-4">
          <h2 className="text-2xl font-bold text-white mb-4">Workshops</h2>
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
          
        </div>
        <div>
        <MarqueeDemo />
        </div>
      </div>
    </div>
  );
};

export default Home;
