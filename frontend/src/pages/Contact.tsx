// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleEmailSubmit = () => {
//     emailjs
//       .send(
//         "service_eh3vaoq", // Replace with your EmailJS Service ID
//         "template_mxl0ame", // Replace with your EmailJS Template ID
//         {
//           user_name: formData.name,
//           user_email: formData.email,
//           user_phone: formData.phoneNumber,
//           message: formData.message,
//         },
//         "l5X2EfqDur2WU5VfJ" // Replace with your EmailJS User ID
//       )
//       .then(
//         () => alert("Email sent successfully!"),
//         () => alert("Failed to send email. Please try again.")
//       );
//   };

//   const handleWhatsAppSubmit = () => {
//     const whatsappNumber = "8452898618"; // Replace with your WhatsApp number
//     const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nMessage: ${formData.message}`;
//     const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center py-16 lg:py-24"
//       style={{
//         backgroundImage: "linear-gradient(to bottom right, #eee4f5, #e6fffc)",
//         fontFamily: "'Open Sans', sans-serif",
//       }}
//     >
//       <div className="flex flex-col lg:flex-row items-start justify-center lg:items-center gap-12 px-6 sm:px-12 lg:px-24 max-w-7xl w-full">
//         {/* Left Section */}
//         <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
//           <h1
//             className="text-[#a855f7] font-bold"
//             style={{
//               fontSize: "3.5rem",
//               lineHeight: "1.2",
//               fontFamily: "'Poppins', sans-serif",
//             }}
//           >
//             Get started with <span className="text-[#5b21b6]">Contact Us</span>.
//           </h1>
//           <p className="text-gray-600 text-lg font-bold italic">
//             Achieve Your Dreams with the Right Guidance!
//           </p>

//           <div className="mt-8 bg-white shadow-md rounded-lg p-6">
//             <blockquote className="text-gray-600 italic">
//               "Was paying a lot in fees with JPM, I like the pricing transparency
//               and feature offerings."
//             </blockquote>
//             <div className="flex items-center mt-4">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="ml-4">
//                 <p className="text-gray-700 font-semibold">Girija Kale</p>
//                 <p className="text-sm text-gray-500">Founder @Connect-Ed</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <form
//           onSubmit={(e) => e.preventDefault()}
//           className="w-full lg:w-1/2 bg-white bg-opacity-90 py-10 px-8 shadow-lg flex flex-col gap-6 rounded-lg"
//         >
//           <div className="w-full">
//             <label className="block font-semibold mb-1 text-sm">First Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="w-full px-4 py-2 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//           <div className="w-full">
//             <label className="block font-semibold mb-1 text-sm">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//           <div className="w-full">
//             <label className="block font-semibold mb-1 text-sm">Phone Number</label>
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               placeholder="Enter your phone number"
//               className="w-full px-4 py-2 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//           <div className="w-full">
//             <label className="block font-semibold mb-1 text-sm">Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="How can we help you?"
//               rows={5}
//               className="w-full px-4 py-2 border border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 mt-4">
//             <button
//               type="button"
//               onClick={handleWhatsAppSubmit}
//               className="flex items-center justify-center w-full sm:w-1/2 px-6 py-3 bg-green-500 text-white font-semibold hover:bg-green-600 focus:outline-none rounded-lg"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//                 alt="WhatsApp"
//                 className="w-6 h-6 mr-2"
//               />
//               WhatsApp
//             </button>
//             <button
//               type="button"
//               onClick={handleEmailSubmit}
//               className="flex items-center justify-center w-full sm:w-1/2 px-6 py-3 bg-purple-500 text-white font-semibold hover:bg-purple-600 focus:outline-none rounded-lg"
//             >
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
//                 alt="Email"
//                 className="w-6 h-6 mr-2"
//               />
//               Email
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, User, MapPin, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Contact Inquiry');
    const body = encodeURIComponent(`
Name: ${formData.firstName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `);
    window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`
Name: ${formData.firstName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  // Simplified animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Line Art Map */}
        <motion.div 
          className="lg:w-2/5 relative bg-[#fafafa]"
          variants={childVariants}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23e5e7eb' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            opacity: 0.5
          }}/>
          
          <div className="relative p-12 lg:p-16 min-h-screen lg:min-h-full flex flex-col justify-center">
            <motion.div className="mb-12" variants={childVariants}>
              <h1 className="large-dark-heading mb-4">Navigate Your Future</h1>
              <p className="mid-mp-subhd">
                Let's plot the course to your educational success together.
              </p>
            </motion.div>

            {/* Location Markers with Line Art Style */}
            <div className="space-y-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Main Office",
                  content: "123 Education Street, New York, NY 10001",
                  showNav: true
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Digital Contact",
                  content: <>contact@example.com<br />+1 (234) 567-890</>
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Hours of Operation",
                  content: <>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</>
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={childVariants}
                  className="group p-6 rounded-xl border border-dp/10 hover:border-dp/30 transition-all duration-300 bg-white"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-mp">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="small-dark-heading mb-1 flex items-center">
                        {item.title}
                        {item.showNav && (
                          <Navigation className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-mp" />
                        )}
                      </h3>
                      <p className="normal-mp-text">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute bottom-0 right-0 p-8"
              variants={childVariants}
            >
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="50" stroke="#3a023b" strokeWidth="2" strokeDasharray="4 4"/>
                <circle cx="60" cy="60" r="30" stroke="#750477" strokeWidth="2"/>
                <path d="M60 20L60 100" stroke="#3a023b" strokeWidth="2" strokeDasharray="4 4"/>
                <path d="M20 60L100 60" stroke="#3a023b" strokeWidth="2" strokeDasharray="4 4"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.div 
          className="lg:w-3/5 p-12 lg:p-24 bg-white"
          variants={childVariants}
        >
          <div className="max-w-md mx-auto">
            <motion.h2 
              className="large-dark-heading mb-8"
              variants={childVariants}
            >
              Send Us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  label: "First Name",
                  type: "text",
                  name: "firstName",
                  placeholder: "John",
                  icon: <User className="w-5 h-5" />
                },
                {
                  label: "Email",
                  type: "email",
                  name: "email",
                  placeholder: "john@example.com",
                  icon: <Mail className="w-5 h-5" />
                },
                {
                  label: "Phone Number",
                  type: "tel",
                  name: "phone",
                  placeholder: "+1 (555) 000-0000",
                  icon: <Phone className="w-5 h-5" />
                }
              ].map((field, index) => (
                <motion.div key={field.name} variants={childVariants}>
                  <label htmlFor={field.name} className="block mid-mp-subhd mb-2">
                    {field.label}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mp">
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="pl-10 w-full p-3 border border-dp/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mp/20 focus:border-mp"
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                </motion.div>
              ))}

              <motion.div variants={childVariants}>
                <label htmlFor="message" className="block mid-mp-subhd mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-mp w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="pl-10 w-full p-3 border border-dp/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-mp/20 focus:border-mp"
                    placeholder="Your message here..."
                    required
                  />
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                variants={childVariants}
              >
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className="flex-1 inline-flex justify-center items-center px-6 py-3 bg-dp text-white rounded-lg hover:bg-mp transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send via Email
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 inline-flex justify-center items-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;