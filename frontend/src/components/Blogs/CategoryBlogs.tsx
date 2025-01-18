import BlogCard from './BlogCard';
import { BLOGS, Blog } from './blogdata';

interface CategoryBlogsProps {
  category: string | null;
  onClose: () => void;
}

function CategoryBlogs({ category, onClose }: CategoryBlogsProps) {
  if (!category) return null;

  const filteredBlogs = BLOGS.filter(blog => blog.category === category);

  return (
    <div className="fixed inset-0 bg-black/50 z-40 overflow-auto">
      {/* Added `overflow-auto` to make the modal scrollable */}
      <div className="min-h-screen bg-white flex flex-col">
        <div className="max-w-4xl mx-auto px-4 py-8 flex-grow">
          <div className="flex justify-between items-center mb-6 mt-12">
            <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
          <div className="space-y-6">
            {filteredBlogs.map((blog: Blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBlogs;
