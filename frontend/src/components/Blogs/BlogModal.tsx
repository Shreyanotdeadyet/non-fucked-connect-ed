import { X } from 'lucide-react';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: {
    title: string;
    intro: string;
    author: string;
    readTime: string;
    image: string;
    content?: string;
  };
}

function BlogModal({ isOpen, onClose, blog }: BlogModalProps) {
  if (!isOpen) return null;

  const fullContent = blog.content || ` 
    ${blog.intro}

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
  `;

  // Fetch random image URL
  const randomImageUrl = `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 1000)}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      {/* Modal container */}
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full overflow-hidden mt-16 ">
        {/* Modal header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="small-dark-heading">{blog.title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {/* Random Image */}
          <div className="mb-4">
            <img
              src={randomImageUrl}
              alt="Random"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Blog metadata */}
          <div className="flex items-center nom-ft mb-4">
            <span className="mr-2 normal-black-text">By {blog.author}</span>
            <span className="mr-2 normal-black-text">•</span>
            <span className="mr-2 normal-black-text">{blog.readTime} read</span>
          </div>

          {/* Blog content */}
          <div className="prose max-w-none">
            {fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="normal-black-text mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;

