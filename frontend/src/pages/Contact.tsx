import React, { useState } from 'react';
import Contact from "../assets/peakpx.jpg";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // 7249418286
    const whatsappNumber = '8452898618'; // Add your WhatsApp number with country code
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-7xl p-8">
        {/* Image on the left side */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px]">
          <img
            src={Contact} // Add your image path here
            alt="Contact"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Form on the right side */}
        <div className="w-full md:w-1/2 md:ml-8 bg-[#6419cc] text-white p-8 md:p-12 rounded-lg shadow-lg space-y-6 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl text-white font-semibold mb-6">GET IN TOUCH </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-6 py-4 bg-transparent border border-[#009984] rounded-md text-[#009984] focus:outline-none focus:border-[#009984]"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-6 py-4 bg-transparent border border-[#009984] rounded-md text-[#009984] focus:outline-none focus:border-[#009984]"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-6 py-4 bg-transparent border border-[#009984] rounded-md text-[#009984] focus:outline-none focus:border-[#009984]"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message goes here..."
                rows={6}
                className="w-full px-6 py-4 bg-transparent border border-[#009984] rounded-md text-[#009984] focus:outline-none focus:border-[#009984]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#009984] text-black rounded-md hover:bg-[#00e590] focus:outline-none"
            >
              Get in Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
