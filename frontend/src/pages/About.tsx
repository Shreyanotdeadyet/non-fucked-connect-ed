// import React, { useEffect, useState } from 'react';
// import { ScrollText, Target, Lightbulb, Users, Brain, Compass, Heart, Linkedin, Twitter, Mail } from 'lucide-react';

// import abtHero from '../assets/abtHero.png';
// import aboutbg1 from '../assets/aboutbg1.png';
// import aboutbg2 from '../assets/aboutbg2.png';
// import aboutbg3 from '../assets/aboutbg3.png';
// import aboutbg5 from '../assets/aboutbg5.png';
// import aboutbg7 from '../assets/aboutbg7.png';
// import aboutbg8 from '../assets/aboutbg8.png';
// import AboutUsSection from '@/components/about_hero';



// function AboutUs() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Image boxes for the about section
//   const imageBoxes = [
//     { 
//       id: 1, 
//       delay: 0, 
//       image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//     },
//     { 
//       id: 2, 
//       delay: 200, 
//       image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//     },
//   ];

//   useEffect(() => {
//     const boxes = document.querySelectorAll('.image-box');
//     boxes.forEach(box => {
//       box.classList.add('translate-y-0', 'opacity-100');
//     });
//   }, []);

//   return (
//     <div className="w-full">
//       {/* Hero Section with Overlaid Images */}
//       {/* <div className="relative w-full h-[600px] bg-dtg-500"> */}
//         {/* Dark Overlay */}
//         {/* <div className="absolute inset-0"> */}
//           {/* Content Container */}
//           {/* <div className="container mx-auto px-4 h-full"> */}
//             {/* Text Section */}
//             {/* <div className="h-full flex flex-col justify-center max-w-2xl">
//               <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
//             </div>
//           </div>
//         </div> */}

//         {/* Image Boxes Container - Only on large screens, positioned higher */}
//         {/* <div className="absolute right-0 top-1/4 transform -translate-y-1/2 w-1/2 px-8 hidden lg:block">
//           <div className="grid grid-cols-2 gap-4">
//             {imageBoxes.map(({ id, delay, image }) => (
//               <div
//                 key={id}
//                 className={`
//                   image-box
//                   aspect-square
//                   bg-gray-200
//                   rounded-lg
//                   transform
//                   translate-y-full
//                   opacity-0
//                   transition-all
//                   duration-700
//                   ease-out
//                   shadow-lg
//                   rounded-xl
//                 `}
//                 style={{
//                   transitionDelay: `${delay}ms`,
//                   backgroundImage: `url(${image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div> */}

//       {/* Content Section */}
//       {/* <div className="container mx-auto px-8 py-[170px]  bg-black">
// </div> */}
// <AboutUsSection/>

//       {/* Our Story Section */}
//       <section className="relative min-h-screen flex items-center">
//         <div 
//           className="absolute inset-0 z-0 bg-purple-200" 

//         />
//         <div className="absolute inset-0 z-10" />
//         <div className="relative z-20 container mx-auto px-6 py-20">
//           <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-12 max-w-2xl ml-auto">
//             <ScrollText className="w-12 h-12 text-blue-400 mb-6" />
//             <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
//             <p className="text-lg text-black leading-relaxed">
//               Founded on the principles of innovation and excellence, our journey began with a simple vision: to transform ideas into reality. Through years of dedication and perseverance, we've grown from a small startup into a leading force in our industry, never losing sight of our core values and commitment to quality.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Rest of the sections remain unchanged */}
//       {/* Our Mission Section */}
//       <section className="relative min-h-screen flex items-center">
//         <div 
//           className="absolute inset-0 z-0" 
//           style={{ 
//             backgroundImage:`url(${aboutbg5})`,
//             backgroundPosition: 'bottom',
//             backgroundSize: 'cover',
//             transform: `translateY(${(scrollY - window.innerHeight * 2) * 0.2}px)`,
//           }}
//         />
//         <div className="absolute inset-0 bg-black/30 z-10" />
//         <div className="relative z-20 container mx-auto px-6 py-20">
//           <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-12 max-w-2xl">
//             <Target className="w-12 h-12 text-green-400 mb-6" />
//             <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
//             <p className="text-lg text-black leading-relaxed">
//               We strive to empower businesses and individuals with innovative solutions that drive growth and success. Our mission is to create lasting impact through technology and creativity, while maintaining the highest standards of excellence and sustainability in everything we do.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Approach Section */}
//       <section className="relative min-h-screen flex items-center">
//         <div 
//           className="absolute inset-0 z-0" 
//           style={{ 
//             backgroundImage:`url(${aboutbg7})`,
//             backgroundPosition: 'bottom',
//             backgroundSize: 'cover',
//             transform: `translateY(${(scrollY - window.innerHeight * 3) * 0.2}px)`,
//           }}
//         />
//         <div className="absolute inset-0 bg-black/40 z-10" />
//         <div className="relative z-20 container mx-auto px-6 py-20">
//           <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 max-w-2xl ml-auto">
//             <Lightbulb className="w-12 h-12 text-yellow-400 mb-6" />
//             <h2 className="text-4xl font-bold text-black mb-6">Our Approach</h2>
//             <p className="text-lg text-black leading-relaxed">
//               We believe in a collaborative, data-driven approach that puts our clients at the center of everything we do. By combining cutting-edge technology with human-centered design, we create solutions that are not just effective, but transformative. Our iterative process ensures continuous improvement and optimal results.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="relative min-h-screen">
//         <div 
//           className="absolute inset-0 z-0 bg-dtg-500" 
//           style={{ 
//             // backgroundImage: `url(${aboutbg8})`,
//             backgroundPosition: 'center',
//             backgroundSize: 'cover',
//             transform: `translateY(${(scrollY - window.innerHeight * 4) * 0.2}px)`,
//           }}
//         />
//         <div className="absolute inset-0  z-10" />
//         <div className="relative z-20 container mx-auto px-6 py-20">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-white mb-4">Why Choose Us</h2>
//             <p className="text-xl text-white">Empowering your journey to success</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//             <div className="group bg-white backdrop-blur-lg rounded-2xl p-8 transition-all duration-300  hover:transform hover:-translate-y-2 hover:shadow-2xl">
//               <Users className="w-12 h-12 text-orange-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
//               <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-orange-300">Personal Attention</h3>
//               <p className="text-black transition-opacity duration-300 group-hover:opacity-90">
//                 We work with a small cohort to ensure 100% dedication to each student. Your ambitions matter to us, and we're here to make them achievable.
//               </p>
//             </div>
//             <div className="group bg-white backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
//               <Brain className="w-12 h-12 text-blue-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
//               <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-blue-300">Holistic Development</h3>
//               <p className="text-black transition-opacity duration-300 group-hover:opacity-90">
//                 Our program deconstructs your interests and influences, helping you find the awareness needed to be the best version of yourself in an increasingly competitive landscape.
//               </p>
//             </div>
//             <div className="group bg-white backdrop-blur-lg rounded-2xl p-8 transition-all duration-300  hover:transform hover:-translate-y-2 hover:shadow-2xl">
//               <Compass className="w-12 h-12 text-green-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
//               <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-green-300">Customized Guidance</h3>
//               <p className="text-black transition-opacity duration-300 group-hover:opacity-90">
//                 We offer highly customized College Counseling alongside career guidance, viewing top-tier college admission as a stepping stone toward a fulfilling career and balanced life.
//               </p>
//             </div>
//             <div className="group bg-white backdrop-blur-lg rounded-2xl p-8 transition-all duration-300  hover:transform hover:-translate-y-2 hover:shadow-2xl">
//               <Heart className="w-12 h-12 text-red-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
//               <h3 className="text-2xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-red-300">Continuous Support</h3>
//               <p className="text-black transition-opacity duration-300 group-hover:opacity-90">
//                 Our program ensures you feel supported throughout your high school journey - from navigating complex college applications to building your future career path. We're here to empower you.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="relative bg-white bg-cover bg-center bg-no-repeat py-20">
//         <div className="absolute inset-0 " />
//         <div className="relative container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold text-pup mb-4">Meet Our Team</h2>
//             <p className="text-xl text-black">Dedicated professionals committed to your success</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//             {/* Team Member 1 */}
//             <div className="group relative">
//               <div className="relative overflow-hidden rounded-2xl">
//                 <img 
//                   src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//                   alt="Sarah Johnson"
//                   className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
//                   <h3 className="text-2xl font-bold text-white mb-2">Sarah Johnson</h3>
//                   <p className="text-gray-200 mb-4">Education Counselor</p>
//                   <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                     With 15 years of experience in college counseling, Sarah specializes in helping students discover their unique path to success.
//                   </p>
//                   <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
//                     <a href="#" className="text-white hover:text-blue-400 transition-colors">
//                       <Linkedin className="w-5 h-5" />
//                     </a>
//                     <a href="#" className="text-white hover:text-blue-400 transition-colors">
//                       <Twitter className="w-5 h-5" />
//                     </a>
//                     <a href="#" className="text-white hover:text-blue-400 transition-colors">
//                       <Mail className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Team Member 2 */}
//             <div className="group relative">
//               <div className="relative overflow-hidden rounded-2xl">
//                 <img 
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//                   alt="David Chen"
//                   className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
//                   <h3 className="text-2xl font-bold text-white mb-2">David Chen</h3>
//                   <p className="text-gray-200 mb-4">Career Development Specialist</p>
//                   <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
//                     David brings industry expertise and a deep understanding of career landscapes to help students align their education with future goals.
//                   </p>
//                   <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
//                     <a href="#" className="text-white hover:text-blue-400 transition-colors">
//                       <Linkedin className="w-5 h-5" />
//                     </a>
//                     <a href="#" className="text-white hover:text-blue-400 transition-colors">
//                       <Twitter className="w-5 h-5" />
//                     </a>
//                     <a href="#" className="text-white hover:text-blue-400 transition-colors">
//                       <Mail className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// export default AboutUs;


import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import AboutCard from '@/components/About_card';
import aboutland from "../assets/Aboutland.png";
import { ScrollText, Target, Lightbulb, Users, Brain, Compass, Heart, Linkedin, Twitter, Mail } from 'lucide-react';

function About() {
  const aboutCardRef = useRef<HTMLDivElement | null>(null);

  const scrollToAboutCard = () => {
    if (aboutCardRef.current) {
      aboutCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-3xl font-semibold text-[#3a023b]">
                Your Future, Your Path— We Guide the Way
              </h1>
              <p className="text-lg text-[#750477]">
                No generic advice—only tailored strategies for your success!
              </p>
              <button 
                onClick={scrollToAboutCard} 
                className="inline-flex items-center px-6 py-3 text-white 
                bg-[#3a023b] hover:bg-[#750477] rounded-xl transition-colors duration-200"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </button>
            </div>

            {/* Right Image */}
            <motion.div 
              className="relative h-[600px] overflow-hidden rounded-xl mt-12"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }} 
            >
              <img
                src={aboutland}
                alt="Business Analytics"
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Cards Section with Fade-in Effect */}
      <motion.div 
        ref={aboutCardRef}
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        viewport={{ once: true }}
      >
        <AboutCard />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        viewport={{ once: true }}
      >
        <div className="relative bg-[#3a023b] z-20 px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white mb-4">Why Choose Us</h2>
            <p className="text-white text-lg">Empowering your journey to success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white rounded-xl p-8 shadow-sm border border-[#3a023b]/10 hover:shadow-2xl transition-shadow">
              <Users className="w-12 h-12 text-[#750477] mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-[#3a023b] mb-4">Personal Attention</h3>
              <p className="text-[#750477]">
                We work with a small cohort to ensure 100% dedication to each student. Your ambitions matter to us, and we're here to make them achievable.
              </p>
            </div>
            <div className="group bg-white rounded-xl p-8 shadow-sm border border-[#3a023b]/10 hover:shadow-2xl transition-shadow">
              <Brain className="w-12 h-12 text-[#750477] mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-[#3a023b] mb-4">Holistic Development</h3>
              <p className="text-[#750477]">
                Our program deconstructs your interests and influences, helping you find the awareness needed to be the best version of yourself in an increasingly competitive landscape.
              </p>
            </div>
            <div className="group bg-white rounded-xl p-8 shadow-sm border border-[#3a023b]/10 hover:shadow-2xl transition-shadow">
              <Compass className="w-12 h-12 text-[#750477] mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-[#3a023b] mb-4">Customized Guidance</h3>
              <p className="text-[#750477]">
                We offer highly customized College Counseling alongside career guidance, viewing top-tier college admission as a stepping stone toward a fulfilling career and balanced life.
              </p>
            </div>
            <div className="group bg-white rounded-xl p-8 shadow-sm border border-[#3a023b]/10 hover:shadow-2xl transition-shadow">
              <Heart className="w-12 h-12 text-[#750477] mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-[#3a023b] mb-4">Continuous Support</h3>
              <p className="text-[#750477]">
                Our program ensures you feel supported throughout your high school journey - from navigating complex college applications to building your future career path. We're here to empower you.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      <section className="relative bg-white bg-cover bg-center bg-no-repeat py-20">
        <div className="absolute inset-0" />
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-[#3a023b] mb-4">Meet Our Team</h2>
            <p className="text-lg text-[#750477]">Dedicated professionals committed to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Team Member 1 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Sarah Johnson"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a023b]/90 to-[#3a023b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">Sarah Johnson</h3>
                  <p className="text-lg text-white mb-4">Education Counselor</p>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    With 15 years of experience in college counseling, Sarah specializes in helping students discover their unique path to success.
                  </p>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <a href="#" className="text-white hover:text-[#750477] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white hover:text-[#750477] transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white hover:text-[#750477] transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="David Chen"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a023b]/90 to-[#3a023b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">David Chen</h3>
                  <p className="text-lg text-white mb-4">Career Development Specialist</p>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    David brings industry expertise and a deep understanding of career landscapes to help students align their education with future goals.
                  </p>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <a href="#" className="text-white hover:text-[#750477] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white hover:text-[#750477] transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white hover:text-[#750477] transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;