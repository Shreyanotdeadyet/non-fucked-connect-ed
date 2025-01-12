// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { initialTabs as tabs } from "@/components/ingredients"; // Ensure the path to ingredients is correct

// const Standards = () => {
//   const [selectedTab, setSelectedTab] = useState(tabs[0]);

//   return (
//     <div className="w-full max-w-5xl mx-auto p-12 border border-gray-300 rounded-lg shadow-2xl bg-white">
//       {/* Navigation */}
//       <nav className="mb-12">
//         <ul className="flex justify-evenly">
//           {tabs.map((item) => (
//             <li
//               key={item.label}
//               className={`cursor-pointer py-4 px-8 rounded-lg transition-all duration-200 text-xl ${
//                 item === selectedTab
//                   ? "font-semibold bg-blue-600 text-white shadow-md"
//                   : "text-gray-600 hover:bg-gray-100"
//               }`}
//               onClick={() => setSelectedTab(item)}
//             >
//               {`${item.icon} ${item.label}`}
//               {item === selectedTab ? (
//                 <motion.div
//                   className="w-full h-1 bg-white mt-2 rounded"
//                   layoutId="underline"
//                 />
//               ) : null}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <main className="flex flex-col items-center space-y-12 md:space-y-0 md:flex-row">
//         {/* Text Section */}
//         <div className="flex-1 text-left max-w-lg">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedTab ? selectedTab.label : "empty"}
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -20, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="text-4xl font-bold text-gray-800"
//             >
//               {selectedTab ? selectedTab.label : "Default Text"}
//             </motion.div>
//           </AnimatePresence>
//           <p className="mt-6 text-lg text-gray-600 break-words overflow-auto">
//             {selectedTab
//               ? selectedTab.description
//               : "Select a tab to see details."}
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1 flex justify-center items-center">
//           <AnimatePresence mode="wait">
//             <motion.img
//               key={selectedTab ? selectedTab.label : "default"}
//               src={selectedTab.image} // Ensure each tab has an `image` property in `ingredients.ts`
//               alt={selectedTab.label}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="w-96 h-96 object-cover rounded-lg shadow-xl"
//             />
//           </AnimatePresence>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Standards;
