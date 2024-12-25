import {MarqueeDemo} from "@/components/MarqueeDemo"
import { BookmarkIcon, BookOpenIcon, DocumentIcon, PencilSquareIcon, VideoCameraIcon } from '@heroicons/react/24/solid'
import '../styles/App.css'
import Badge from '../components/Badge.tsx'
import Button from '../components/Button.tsx'
import Card from '../components/Card.tsx'

import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';

//import './styles/styles.css';  css for personalised progs' sliding cards
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../index.css';


function Home() {
  
  var settings = {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="App">
      <h1> Services </h1>
      <br></br>
      <section className="card-container">
        <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Class 8-9'
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
            icon: <DocumentIcon />
          }} />
         <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Class 10'
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
            icon: <PencilSquareIcon />
          }} />
            <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Class 11-12'
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
            icon: <BookmarkIcon />
          }} />
       
      </section>
      <br></br>
      <br/>
      <br/>
      <div className="carousel mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Workshops</h2>
        <Slider {...settings}>
          {/* Workshop 1 */}
          <div className="box p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Workshop 1</h3>
            <h4 className="text-sm text-gray-600">1st January 2025</h4>
            <h5 className="text-sm text-gray-600">5:30pm-7:00pm</h5>
            <p className="text-sm text-gray-600">About the event</p>
            <div className="image-container mt-4">
              <img src={image1} alt="Workshop 1" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>

          {/* Workshop 2 */}
          <div className="box p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Workshop 2</h3>
            <h4 className="text-sm text-gray-600">1st January 2025</h4>
            <h5 className="text-sm text-gray-600">7:30pm-9:00pm</h5>
            <p className="text-sm text-gray-600">About the event</p>
            <div className="image-container mt-4">
              <img src={image2} alt="Workshop 2" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>

          {/* Workshop 3 */}
          <div className="box p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Workshop 3</h3>
            <h4 className="text-sm text-gray-600">21st January 2025</h4>
            <h5 className="text-sm text-gray-600">5:30pm-7:00pm</h5>
            <p className="text-sm text-gray-600">About the event</p>
            <div className="image-container mt-4">
              <img src={image3} alt="Workshop 3" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>

          {/* Workshop 4 */}
          <div className="box p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Workshop 4</h3>
            <h4 className="text-sm text-gray-600">21st January 2025</h4>
            <h5 className="text-sm text-gray-600">7:30pm-9:00pm</h5>
            <p className="text-sm text-gray-600">About the event</p>
            <div className="image-container mt-4">
              <img src={image1} alt="Workshop 4" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>

          {/* Workshop 5 */}
          <div className="box p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Workshop 5</h3>
            <h4 className="text-sm text-gray-600">31st January 2025</h4>
            <h5 className="text-sm text-gray-600">5:30pm-7:00pm</h5>
            <p className="text-sm text-gray-600">About the event</p>
            <div className="image-container mt-4">
              <img src={image2} alt="Workshop 5" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>

          {/* Workshop 6 */}
          <div className="box p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Workshop 6</h3>
            <h4 className="text-sm text-gray-600">31st January 2025</h4>
            <h5 className="text-sm text-gray-600">7:30pm-9:00pm</h5>
            <p className="text-sm text-gray-600">About the event</p>
            <div className="image-container mt-4">
              <img src={image3} alt="Workshop 6" className="w-full h-48 object-cover rounded-lg" />
            </div>
          </div>
        </Slider>
      </div>

      {/*//code for workshop carousel using vanilla css now changed to tailwind
       <div className="carousel">
        <h2>Workshops</h2>
        <Slider {...settings}>
        <div className="box">
          <h3>Workshop 1</h3>
          <h4>1st January 2025</h4>
          <h5>5:30pm-7:00pm</h5>
          <p>About the event</p>
          <div className="image-container">
         <img src={image1} alt="Description of Image" />
          </div>
        </div>
        <div className="box">
          <h3>Workshop 2</h3>
          <h4>1st January 2025</h4>
          <h5>7:30pm-9:00pm</h5>
          <p>About the event</p>
          <div className="image-container">
         <img src={image2} alt="Description of Image" />
          </div>
        </div>
        <div className="box">
          <h3>Workshop 3</h3>
          <h4>21st January 2025</h4>
          <h5>5:30pm-7:00pm</h5>
          <p>About the event</p>
          <div className="image-container">
         <img src={image3} alt="Description of Image" />
          </div>
        </div>
        <div className="box">
          <h3>Workshop 4</h3>
          <h4>21st January 2025</h4>
          <h5>7:30pm-9:00pm</h5>
          <p>About the event</p>
          <div className="image-container">
         <img src={image1} alt="Description of Image" />
          </div>
        </div>
        <div className="box">
          <h3>Workshop 5</h3>
          <h4>31st January 2025</h4>
          <h5>5:30pm-7:00pm</h5>
          <p>About the event</p>
          <div className="image-container">
         <img src={image2} alt="Description of Image" />
          </div>
        </div>
        <div className="box">
          <h3>Workshop 6</h3>
          <h4>31st January 2025</h4>
          <h5>7:30pm-9:00pm</h5>
          <p>About the event</p>
          <div className="image-container">
         <img src={image3} alt="Description of Image" />
          </div>
        </div>
        </Slider>
      </div> */}
      <br/>
      {/* <h1>Personalised Programs</h1>
      <br></br>
      <body>
    <div className="container">
        <ul id="cards">
            <li className="card" id="card1">
                <div className="card-body">
                    <h2>Unlock Your Full Potential with Tailored Guidance</h2>
                    </div>
            </li>
            <li className="card" id="card2">
                <div className="card-body">
                    <h2>Customised Consultation</h2>
                     </div>
            </li>
            <li className="card" id="card3">
                <div className="card-body">
                    <h2>Expert Guidance</h2>
                    </div>
            </li>
            <li className="card" id="card4">
                <div className="card-body">
                  <h2>Flexible Formats</h2>
                    </div>
            </li>
        </ul>
    </div>
</body> */}
      <div className="bg-gray-900">
      <MarqueeDemo/>
      
    </div>
    </div>
    
  );
}

export default Home;

