import React, { useState } from 'react';
import Contact from "../assets/peakpx.jpg"
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
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex w-full max-w-7xl p-8">
        {/* Image on the left side */}
        <div className="w-1/2 h-[600px]">
          <img
            src={Contact} // Add your image path here
            alt="Contact"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Form on the right side */}
        <div className="w-1/2 ml-8 bg-black text-white p-12 rounded-lg shadow-lg space-y-6">
          <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-6 py-4 bg-transparent border border-white rounded-md text-white focus:outline-none focus:border-pastel-blue"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-6 py-4 bg-transparent border border-white rounded-md text-white focus:outline-none focus:border-pastel-blue"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-6 py-4 bg-transparent border border-white rounded-md text-white focus:outline-none focus:border-pastel-blue"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message goes here..."
                rows={6}
                className="w-full px-6 py-4 bg-transparent border border-white rounded-md text-white focus:outline-none focus:border-pastel-blue"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-pastel-blue text-black rounded-md hover:bg-pastel-pink focus:outline-none"
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
