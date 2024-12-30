import AboutUs from "./pages/About.tsx"
import './index.css'
import ContactUsForm from "./pages/Contact.tsx"
import Navbar from "./components/Navbar.tsx"
import Home  from "./pages/Home.tsx"
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.tsx"

function App() {
  return (
    <> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUsForm />} />
      </Routes>
      <Footer/>
    </> 
  )
}

export default App
