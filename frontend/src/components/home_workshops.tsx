import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

// Workshop data - in a real app, this would come from an API or database
const workshops = [
  {
    title: "Advanced React Development",
    location: "Tech Hub, 123 Innovation Street, San Francisco, CA",
    date: "2024-04-15",
    time: "14:00",
    coordinates: "37.7749,-122.4194"
  },
  {
    title: "UI/UX Design Fundamentals",
    location: "Design Center, 456 Creative Ave, New York, NY",
    date: "2024-04-20",
    time: "10:00",
    coordinates: "40.7128,-74.0060"
  },
  {
    title: "Web Performance Optimization",
    location: "Code Campus, 789 Developer Road, Seattle, WA",
    date: "2024-04-25",
    time: "15:30",
    coordinates: "47.6062,-122.3321"
  },
  {
    title: "Mobile App Development Workshop",
    location: "App Studio, 321 Mobile Lane, Austin, TX",
    date: "2024-05-01",
    time: "13:00",
    coordinates: "30.2672,-97.7431"
  },
  {
    title: "Cloud Architecture Masterclass",
    location: "Cloud Center, 555 Server Road, Chicago, IL",
    date: "2024-05-05",
    time: "11:00",
    coordinates: "41.8781,-87.6298"
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-[400px] bg-white rounded-xl shadow-sm overflow-hidden border border-purple-100"
    >
      <div className="h-full p-8 flex flex-col">
        <div className="flex-1">
          <h2 className="small-dark-heading mb-6 pb-4 border-b border-purple-100">
            {workshop.title}
          </h2>
          
          <div className="space-y-6">
            <button 
              onClick={() => openGoogleMaps(workshop.coordinates)}
              className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors w-full text-left group"
            >
              <MapPin className="h-5 w-5 text-mp" />
              <span className="normal-black-text group-hover:underline">{workshop.location}</span>
            </button>

            <button 
              onClick={() => addToCalendar(workshop.date, workshop.time, workshop.title, workshop.location)}
              className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors group"
            >
              <Calendar className="h-5 w-5 text-mp" />
              <span className="normal-black-text group-hover:underline">
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
              className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-colors group"
            >
              <Clock className="h-5 w-5 text-mp" />
              <span className="normal-black-text group-hover:underline">
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
          className="w-full bg-dp hover:bg-mp text-white py-4 px-6 rounded-lg transition-colors text-base font-medium"
        >
          Register Now
        </button>
      </div>
    </motion.div>
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
    <div className="relative px-12">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-purple-50 text-purple-600 p-3 rounded-full shadow-sm border border-purple-100 transition-colors z-20"
          >
            <ChevronLeft className="h-6 w-6 text-mp" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-purple-50 text-purple-600 p-3 rounded-full shadow-sm border border-purple-100 transition-colors z-20"
          >
            <ChevronRight className="h-6 w-6 text-mp" />
          </button>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="large-dark-heading text-center mb-4">
          Upcoming Workshops
        </h1>
        <p className="mid-mp-subhd text-center mb-12">
          Expand your knowledge with our expert-led sessions
        </p>
        <Carousel items={workshops} />
      </div>
    </section>
  );
}

export default App;