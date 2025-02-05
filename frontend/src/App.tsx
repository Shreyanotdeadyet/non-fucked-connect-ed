import AboutUs from "./pages/About.tsx"
import './index.css'
import ContactUsForm from "./pages/Contact.tsx"
import Navbar from "./components/Navbar.tsx"
import Home  from "./pages/Home.tsx"
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.tsx"
import BlogPage from "./pages/BlogPage.tsx"
import TestimonialComponent from "./components/testimonial.tsx"
import ComingSoon from "./pages/ComingSoon.tsx"
import { GlobeDemo } from "./components/home_globe.tsx"
function App() {
  return (
    <> 
      <Navbar/>
        
      <div className="main-content ">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUsForm />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/appointment" element={<ComingSoon />} />
    </Routes>
  </div>

   
      
      <Footer/>
    </> 
  )
}

export default App

// import { useEffect } from 'react';
// import Intro from './components/Intro';
// // import Description from '../components/Description';
// // import Projects from '../components/Projects';

// export default function Home() {

//   useEffect( () => {
//     (
//       async () => {
//           const LocomotiveScroll = (await import('locomotive-scroll')).default
//           const locomotiveScroll = new LocomotiveScroll();
//       }
//     )()
//   }, [])

//   return (
//       <main >
//         <Intro />
//         {/* <Description />
//         <Projects /> */}
//       </main>
//   )
// }