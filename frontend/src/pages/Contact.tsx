import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailSubmit = () => {
    emailjs
      .send(
        "service_eh3vaoq", // Replace with your EmailJS Service ID
        "template_mxl0ame", // Replace with your EmailJS Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phoneNumber,
          message: formData.message,
        },
        "l5X2EfqDur2WU5VfJ" // Replace with your EmailJS User ID
      )
      .then(
        () => alert("Email sent successfully!"),
        () => alert("Failed to send email. Please try again.")
      );
  };

  const handleWhatsAppSubmit = () => {
    const whatsappNumber = "8452898618"; // Replace with your WhatsApp number
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center py-16 lg:py-24"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #eee4f5, #e6fffc)",
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <div className="flex flex-col lg:flex-row items-start justify-center lg:items-center gap-12 px-6 sm:px-12 lg:px-24 max-w-7xl w-full">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-8">
          <h1 className="hd-ft">
            Get started with Contact Us.
          </h1>
          <p className="nom-b-ft-purple italic">
            Achieve Your Dreams with the Right Guidance!
          </p>

          <div className="mt-8 bg-white shadow-md rounded-xl p-6">
            <blockquote className="nom-ft italic">
              "Was paying a lot in fees with JPM, I like the pricing transparency
              and feature offerings."
            </blockquote>
            <div className="flex items-center mt-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4">
                <p className="nom-ft">Girija Kale</p>
                <p className="nom-b-ft-purple">Founder @Connect-Ed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full lg:w-1/2 bg-white bg-opacity-90 py-10 px-8 shadow-lg flex flex-col gap-6 rounded-xl"
        >
          <div className="w-full">
            <label className="nom-ft block mb-1">First Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="w-full">
            <label className="nom-ft block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="w-full">
            <label className="nom-ft block mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="w-full">
            <label className="nom-ft block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={5}
              className="w-full px-4 py-2 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="font-robo1 font-bold text-xl text-white flex items-center justify-center w-full sm:w-1/2 px-6 py-3 bg-slate-800 hover:bg-slate-900 focus:outline-none rounded-xl"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6 mr-2"
              />
              WhatsApp
            </button>
            <button
              type="button"
              onClick={handleEmailSubmit}
              className="font-robo1 font-bold text-xl text-white flex items-center justify-center w-full sm:w-1/2 px-6 py-3 bg-slate-800 hover:bg-slate-900 focus:outline-none rounded-xl"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                alt="Email"
                className="w-6 h-6 mr-2"
              />
              Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
