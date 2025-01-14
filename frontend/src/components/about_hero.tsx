// import { useEffect } from 'react';
// import abtHero from "../assets/abtHero.jpg"
// const AboutUsSection = () => {
//   const imageBoxes = [
//     { id: 1, delay: 0 },
//     { id: 2, delay: 200 }
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
//       <div className="relative w-full h-[600px]" 
//       style={{
//         backgroundImage: `url(${abtHero})`, // Using the imported image
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/40">
//           {/* Content Container */}
//           <div className="container mx-auto px-4 h-full">
//             {/* Text Section */}
//             <div className="h-full flex flex-col justify-center max-w-2xl">
//               <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
//             </div>
//           </div>
//         </div>

//         {/* Image Boxes Container - Only on large screens, positioned higher */}
//         <div className="absolute right-0 top-1/4 transform -translate-y-1/2 w-1/2 px-8 hidden lg:block">
//           <div className="grid grid-cols-2 gap-4">
//             {imageBoxes.map(({ id, delay }) => (
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
//                   transitionDelay: `${delay}ms`
//                 }}
//               >
//                 <div className="w-full h-full flex items-center justify-center text-gray-400">
//                   Image {id}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 py-16 my-6">
//         <div className="lg:max-w-2xl">
//           <h2 className="text-3xl font-bold mb-6">Title</h2>
//           <p className="text-gray-600 mt-6">
//             Your paragraph text here. This will appear below the title.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsSection;











import { useEffect } from 'react';
import abtHero from "../assets/abtHero.png"; // Hero section image
import image1 from "../assets/image1.jpg";  // First image for image box
import image2 from "../assets/image2.jpg";  // Second image for image box

const AboutUsSection = () => {
  const imageBoxes = [
    { id: 1, delay: 0, image: image1 },   // Assign first image
    { id: 2, delay: 200, image: image2 },  // Assign second image
  ];

  useEffect(() => {
    const boxes = document.querySelectorAll('.image-box');
    boxes.forEach(box => {
      box.classList.add('translate-y-0', 'opacity-100');
    });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section with Overlaid Images */}
      <div className="relative w-full h-[600px]"
        style={{
          backgroundImage: `url(${abtHero})`, // Using the imported hero image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40">
          {/* Content Container */}
          <div className="container mx-auto px-4 h-full">
            {/* Text Section */}
            <div className="h-full flex flex-col justify-center max-w-2xl">
              <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
            </div>
          </div>
        </div>

        {/* Image Boxes Container - Only on large screens, positioned higher */}
        <div className="absolute right-0 top-1/4 transform -translate-y-1/2 w-1/2 px-8 hidden lg:block">
          <div className="grid grid-cols-2 gap-4">
            {imageBoxes.map(({ id, delay, image }) => (
              <div
                key={id}
                className={`
                  image-box
                  aspect-square
                  bg-gray-200
                  rounded-lg
                  transform
                  translate-y-full
                  opacity-0
                  transition-all
                  duration-700
                  ease-out
                  shadow-lg
                  rounded-xl
                `}
                style={{
                  transitionDelay: `${delay}ms`,
                  backgroundImage: `url(${image})`, // Set background image for each box
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Image {id}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 my-6">
        <div className="lg:max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Title</h2>
          <p className="text-gray-600 mt-6">
            Your paragraph text here. This will appear below the title.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
