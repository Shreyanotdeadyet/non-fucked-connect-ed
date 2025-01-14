import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "@/components/serv_data"; // Ensure the path to ingredients is correct

import servbg from "@/assets/image1.jpeg";

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section id="services" className="relative w-full bg-cover bg-center bg-no-repeat py-16" style={{ backgroundImage: `url(${servbg})` }}>
      {/* Enhanced Overlay for a Darker Background */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content Section */}
      <div className="relative w-full max-w-5xl mx-auto p-8 border border-tg-100 rounded-xl bg-white bg-opacity-100 backdrop-blur-md z-10">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-black mb-12">Services</h2>

        {/* Navigation */}
        <nav className="mb-12">
          <ul className="flex justify-evenly">
            {tabs.map((item, index) => (
              <li
                key={item.label}
                className={`cursor-pointer py-4 px-8 rounded-lg transition-all duration-200 text-xl ${item === selectedTab
                    ? "font-semibold bg-pp-300 text-white shadow-md"
                    : "text-gray-600 bg-pink-100 hover:bg-pp-100"
                  }`}
                onClick={() => setSelectedTab(item)}
              >
                {/* Show custom labels for small screens */}
                <span className="block md:hidden">
                  {index <= 5
                    ? "1st-5th"
                    : index <= 8
                      ? "6th-8th"
                      : "9th-12th"}
                </span>

                {/* Show original labels for medium and larger screens */}
                <span className="hidden md:block">
                  {`${item.icon} ${item.label}`}
                </span>

                {item === selectedTab ? (
                  <motion.div
                    className="w-full h-1 bg-white mt-2 rounded"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col items-center space-y-12 md:space-y-0 md:flex-row">
          {/* Text Section */}
          <div className="flex-1 text-left max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-gray-800"
              >
                {selectedTab ? selectedTab.label : "Default Text"}
              </motion.div>
            </AnimatePresence>
            <div
              className="mt-6 text-lg text-gray-600 break-words overflow-auto"
              dangerouslySetInnerHTML={{
                __html: selectedTab
                  ? selectedTab.description
                  : "Select a tab to see details.",
              }}
            />
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedTab ? selectedTab.label : "default"}
                src={selectedTab.image} // Ensure each tab has an `image` property
                alt={selectedTab.label}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-94 h-94 object-cover rounded-lg shadow-xl hidden md:block"
              />
            </AnimatePresence>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Services;
