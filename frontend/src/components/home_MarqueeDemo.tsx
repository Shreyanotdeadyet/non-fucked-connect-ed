
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Shreya",
    username: "@mandekar",
    body: "Bhai bachah lo merlo nhi karna",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg",
          // Set individual background color to white for the card container
          "bg-white border-gray-200 hover:bg-gray-100",
          // Light mode styles for text
          "text-gray-800",
          // Dark mode styles for text
          "dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="40" height="40" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-base font-semibold text-gray-800 dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-gray-600 dark:text-white/60">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-gray-700 dark:text-white/80">{body}</blockquote>
      </figure>
    );
  };
  
  export function MarqueeDemo() {
    return (
      <div className="relative flex flex-col items-center justify-center w-screen max-w-full h-auto overflow-hidden bg-[#3a023b]">
        <h1 className="hd-ft-white text-center py-16">
      University
    </h1>
        {/* Container for Marquee */}
        <div className="w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="w-full overflow-hidden py-16">
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>

        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-#f3f3f3 to-transparent"></div> */}
        {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-900 to-transparent"></div> */}

      </div>
    );
  }
  