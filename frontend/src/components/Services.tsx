// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { initialTabs as tabs } from "@/components/serv_data"; // Ensure the path to ingredients is correct

// import servbg from "@/assets/image1.jpeg";

// const Services = () => {
//   const [selectedTab, setSelectedTab] = useState(tabs[0]);

//   return (
//     <section id="services" className="relative w-full bg-cover bg-center bg-no-repeat py-16" >
//       {/* Enhanced Overlay for a Darker Background */}
//       <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

//       {/* Content Section */}
//       <div className="relative w-[90%] max-w-7xl mx-auto p-4 border border-tg-100 rounded-xl bg-white bg-opacity-100 backdrop-blur-md z-10">

//         {/* Heading */}
//         <h2 className="hd-ft text-center mb-12">Services</h2>

//         {/* Navigation */}
//         <nav className="mb-12">
//           <ul className="flex justify-evenly">
//             {tabs.map((item, index) => (
//               <li
//                 key={item.label}
//                 className={`cursor-pointer py-4 px-8 rounded-lg transition-all duration-200 text-xl ${item === selectedTab
//                     ? "font-semibold bg-pp-300 nom-b-ft-white shadow-md"
//                     : "nom-b-ft-slate bg-pink-100 hover:bg-pp-100"
//                   }`}
//                 onClick={() => setSelectedTab(item)}
//               >
//                 {/* Show custom labels for small screens */}
//                 <span className="block md:hidden">
//                   {index <= 5
//                     ? "1st-5th"
//                     : index <= 8
//                       ? "6th-8th"
//                       : "9th-12th"}
//                 </span>

//                 {/* Show original labels for medium and larger screens */}
//                 <span className="hidden md:block">
//                   {`${item.icon} ${item.label}`}
//                 </span>

//                 {item === selectedTab ? (
//                   <motion.div
//                     className="w-full h-1 bg-white mt-2 rounded"
//                     layoutId="underline"
//                   />
//                 ) : null}
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Main Content */}
//         <main className="flex flex-col items-center space-y-12 md:space-y-0 md:flex-row">
//           {/* Text Section */}
//           <div className="flex-1 text-left max-w-lg">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={selectedTab ? selectedTab.label : "empty"}
//                 initial={{ x: -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -20, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="nom-b-ft-slate"
//               >
//                 {selectedTab ? selectedTab.label : "Default Text"}
//               </motion.div>
//             </AnimatePresence>
//             <div
//               className="mt-6 nom-ft break-words overflow-auto"
//               dangerouslySetInnerHTML={{
//                 __html: selectedTab
//                   ? selectedTab.description
//                   : "Select a tab to see details.",
//               }}
//             />
//           </div>

//           {/* Image Section */}
//           <div className="flex-1 flex justify-center items-center">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={selectedTab ? selectedTab.label : "default"}
//                 src={selectedTab.image} // Ensure each tab has an `image` property
//                 alt={selectedTab.label}
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="w-94 h-94 object-cover rounded-lg shadow-xl hidden md:block"
//               />
//             </AnimatePresence>
//           </div>
//         </main>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Brain } from 'lucide-react';

interface Tab {
  label: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
}

function Services() {
  const tabs: Tab[] = [
    {
      label: "Elementary",
      description: "Building strong foundations through personalized learning and creative exploration for grades 1-5.",
      features: [
        "One-on-one mentoring sessions",
        "Interactive learning activities",
        "Reading and writing workshops",
        "Math skill development",
        "Creative expression programs"
      ],
     
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      icon: <BookOpen className="inline-block mr-2" size={20} />
    },
    {
      label: "Middle School",
      description: "Nurturing academic excellence and personal growth for grades 6-8 through comprehensive support.",
      features: [
        "Subject-specific tutoring",
        "Study skills development",
        "Time management training",
        "Project-based learning",
        "Social skills development"
      ],
     
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80",
      icon: <Users className="inline-block mr-2" size={20} />
    },
    {
      label: "High School",
      description: "Comprehensive college preparation and academic excellence program for grades 9-12.",
      features: [
        "College application guidance",
        "SAT/ACT preparation",
        "Advanced placement support",
        "Career counseling",
        "Leadership development"
      ],
      
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
      icon: <Brain className="inline-block mr-2" size={20} />
    }
  ];
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs.length > 0 ? tabs[0] : {} as Tab);


  return (
    <section className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-[#3a023b] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#750477]">
            Comprehensive educational support for every stage of learning
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white rounded-xl p-2 shadow-sm border border-[#3a023b]/10">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setSelectedTab(tab)}
                className={`px-8 py-4 rounded-lg text font-medium transition-all duration-200 ${
                  tab.label === selectedTab.label
                    ? 'bg-[#3a023b] text-white shadow-sm'
                    : 'text-[#750477] hover:text-[#3a023b] hover:bg-[#f5e6f5]'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-12 border border-[#3a023b]/10 min-h-[600px]">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-semibold text-[#3a023b]">
                  {selectedTab.label} Program
                </h3>
                <p className="text-[#750477] leading-relaxed">
                  {selectedTab.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-[#3a023b] mb-4">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-black">
                    {selectedTab.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

               
              </motion.div>
            </AnimatePresence>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative h-[400px] rounded-xl overflow-hidden shadow-sm border border-[#3a023b]/10"
              >
                <img
                  src={selectedTab.image}
                  alt={selectedTab.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a023b]/30 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;