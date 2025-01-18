// export default BlogPage;
import HeroSection from '../components/Blogs/HeroSection';
import CategorySection from '../components/Blogs/CategorySection';
import RecentBlogs from '../components/Blogs/RecentBlogs';

function BlogPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategorySection />
        <RecentBlogs />
      </div>
    </div>
  );
}

export default BlogPage;