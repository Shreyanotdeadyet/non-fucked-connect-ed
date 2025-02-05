import { useState } from 'react';
import { Clock, User, BookOpen } from 'lucide-react';
import BlogModal from './BlogModal';

interface BlogCardProps {
  title: string;
  intro: string;
  author: string;
  readTime: string;
  image: string;
}

function BlogCard({ title, intro, author, readTime, image }: BlogCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.02] border border-slate-500">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full md:w-48 object-cover"
              src={image}
              alt={title}
            />
          </div>
          <div className="p-8">
            <div className="flex items-center gap-4 text-sm text-gy mb-2">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-lilac-600" />
                {readTime}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1 text-lilac-600" />
                {author}
              </div>
            </div>
            <h3 className="small-dark-heading mb-2">{title}</h3>
            <p className="text-gy mb-4">{intro}</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-gy hover:text-gy transition-colors"
            >
              <BookOpen className="w-4 h-4 mr-1" />
              Read More
            </button>
          </div>
        </div>
      </div>

      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        blog={{ title, intro, author, readTime, image }}
      />
    </>
  );
}

export default BlogCard;