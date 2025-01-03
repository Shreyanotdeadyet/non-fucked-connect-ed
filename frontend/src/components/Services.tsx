import { CardInterface, BadgeInterface, ButtonInterface } from "../types";
// import { DocumentIcon, PencilSquareIcon, BookmarkIcon } from '@heroicons/react/outline';

const Badge = ({ text, filled }: BadgeInterface) => {
  return (
    <small
      className={`py-1 px-3 text-xs w-3/12 rounded-sm ${filled ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500'}`}
    >
      {text}
    </small>
  );
};

const Button = ({ text, filled, type, href, icon }: ButtonInterface) => {
  return (
    <a
      href={href}
      className={`inline-flex justify-center gap-5 py-2.5 px-2.5 w-5/12 rounded-sm text-sm transition- duration-500 ${filled ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500'} ${type === 'primary' ? 'hover:bg-black hover:text-bisque' : ''}w- 120px`}
>
      <span>{text}</span>
      {icon}
    </a>
  );
};

const Card = ({ body, btn, title, badge, image, indicator }: CardInterface) => {
  return (
    <article className="flex flex-col relative bg-white p-6 mx-12 mb-11 size-max w-full sm:w-72 md:w-80 lg:w-96 rounded-lg shadow-xl max-w-sm">
      {/* {indicator && (
          <small className="absolute right-5 top-0 bg-red-500 text-white rounded-full min-w-20 min-h-20 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
          {indicator}
        </small>
      )} */}
      {badge && (
        <Badge text={badge.text} filled={badge.filled} />
      )}
      {image && (
        <img src={image} alt="Random Image" className="w-full h-auto object-cover rounded-md my-4" />
      )}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-sm text-gray-700">{body}</p>
      </div>
      <Button
        filled={btn.filled}
        type={btn.type}
        text={btn.text}
        href={btn.href}
        icon={btn.icon}
      />
    </article>
  );
};

export default Card;
