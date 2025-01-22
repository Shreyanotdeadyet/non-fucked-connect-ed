// import FlipText from "../ui/flip-text";

// function HeroSection() {
//   return (
//     <div className="relative h-[400px] mb-16">
//       <img
//         src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80"
//         alt="Blog Hero"
//         className="w-full h-full object-cover brightness-90"
//       />
//       <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//         <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-4">
//           <FlipText word="Discover Inspiring Stories" />
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;




import blog from "../../assets/blog.png"
import FlipText from "../ui/flip-text";

function HeroSection() {
  return (
    <div className="relative h-[400px] mb-16">
   
   <img
      src={blog}
      alt="Blog Hero"
      className=" top-[50px] left-0 w-full h-full object-cover brightness-90"
    />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl text-white font-semibold text-center px-4 leading-tight">
          <span className="hidden sm:inline">
            <FlipText word="Discover Inspiring Stories" />
          </span>
          <span className="block sm:hidden text-2xl">
            <FlipText word="Discovering" />
            <br />
            <FlipText word="Inspiring" />
            <br />
            <FlipText word="Stories"/>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
