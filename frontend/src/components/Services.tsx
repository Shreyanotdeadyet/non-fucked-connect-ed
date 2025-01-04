import { CardInterface, BadgeInterface, ButtonInterface } from "../types";
// import { DocumentIcon, PencilSquareIcon, BookmarkIcon } from '@heroicons/react/outline';
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
const Badge = ({ text, filled }: BadgeInterface) => {
  return (
    <small
      className={`py-1 px-3 text-xs w-3/12 rounded-sm ${filled ? 'bg-[#00e590] text-white' : 'border border-[#00e590] text-[#00e590]'}`}
    >
      {text}
    </small>
  );
};

const Button = ({ text, filled, type, href, icon }: ButtonInterface) => {
  return (
    <a
      href={href}
      className={`inline-flex justify-center gap-5 py-2.5 px-2.5 w-5/12 rounded-sm text-sm transition duration-500 ${filled ? 'bg-[#6419cc] text-[#f7f0de] border-[#009984]' : 'text-[#009984] border-[#009984]'} ${type === 'primary' ? 'hover:bg-[#009984] hover:text-[#f7f0de] hover:border-[#009984]' : ''}`}
>
      <span>{text}</span>
      {icon}
    </a>
  );
};

// const Card = ({ body, btn, title, badge, image, indicator }: CardInterface) => {
//   return (
//     <article className="relative flex flex-col bg-amber-50 p-6 sm:p-8 mx-8 w-full sm:w-96 md:w-[28rem] lg:w-[32rem] h-auto max-h-[32rem] rounded-lg border-emerald-950 shadow-2xl overflow-hidden transform transition-all duration-300">
//       {/* Badge Section */}
//       {badge && (
//         <div className="absolute top-4 left-4">
//           <Badge text={badge.text} filled={badge.filled} />
//         </div>
//       )}

//       {/* Content Wrapper */}
//       <div className="flex flex-col h-full pt-6 sm:pt-8">
//         {/* Scrollable Middle Section */}
//         <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-300 pr-2">
//           {/* Image Section */}
//           {image && (
//             <img
//               src={image}
//               alt="Card Image"
//               className="w-full h-52 object-cover rounded-md mb-4"
//             />
//           )}

//           {/* Title */}
//           <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#6419cc] mb-2">
//             {title}
//           </h3>

//           {/* Body Content */}
//           <div className="text-sm md:text-base text-[#009984] leading-relaxed">
//             {body}
//           </div>
//         </div>

//         {/* Button Section */}
//         <div className="mt-4">
//           <Button
//             filled={btn.filled}
//             type={btn.type}
//             text={btn.text}
//             href={btn.href}
//             icon={btn.icon}
//           />
//         </div>
//       </div>
//     </article>
//   );
// };
const Card = ({ body, btn, title, badge, image, indicator }: CardInterface) => {
  return (
    <article className="relative flex flex-col bg-amber-50 p-6 sm:p-6 mx-4 sm:mx-8 w-full sm:w-96 md:w-[28rem] lg:w-[32rem] min-w-[280px] h-auto max-h-[32rem] rounded-lg border-emerald-950 shadow-2xl overflow-hidden transform transition-all duration-300">
      {/* Badge Section */}
      {badge && (
        <div className="absolute top-2 left-4">
          <Badge text={badge.text} filled={badge.filled} />
        </div>
      )}

      {/* Content Wrapper */}
      <div className="flex flex-col h-full pt-4 sm:pt-6">
        {/* Scrollable Middle Section */}
        <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-300 pr-2">
          {/* Image Section */}
          {image && (
            <img
              src={image}
              alt="Card Image"
              className="w-full h-52 sm:h-52 object-cover rounded-md mb-4"
            />
          )}

          {/* Title */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#6419cc] mb-2">
            {title}
          </h3>

          {/* Body Content */}
          <div className="text-sm sm:text-base text-[#009984] leading-relaxed">
            {body}
          </div>
        </div>

        {/* Button Section */}
        <div className="mt-4">
          <Button
            filled={btn.filled}
            type={btn.type}
            text={btn.text}
            href={btn.href}
            icon={btn.icon}
          />
        </div>
      </div>
    </article>
  );
};


export default Card;
