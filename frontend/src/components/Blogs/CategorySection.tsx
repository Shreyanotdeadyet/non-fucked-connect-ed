import { useState } from 'react';
// import TypewriterText from './TypewriterText';
import CategoryBlogs from './CategoryBlogs';

const CATEGORIES = [
  {
    title: 'Careers',
    image: 'https://i.pinimg.com/236x/c6/80/dd/c680ddc032fbef4df35c7355c4166210.jpg',
  },
  {
    title: 'Essay Tips',
    image: 'https://images.ctfassets.net/3s5io6mnxfqz/6cEqjND9VDPuB4VTsTWFln/1ff2411ea7b5a4f662b6d662e65a11e5/AdobeStock_252059584.jpeg?w=1920',
  },
  {
    title: 'College Readiness',
    image: 'https://cdn.pixabay.com/photo/2017/09/01/13/56/university-2704306_640.jpg',
  },
];

function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section className="mb-16">
      {/* <TypewriterText text="Categories" /> */}
      <h2 className="hd-ft mb-8">Categories</h2>
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
  {CATEGORIES.map((category) => (
    <div
      key={category.title}
      onClick={() => setSelectedCategory(category.title)}
      className="w-[300px] h-[200px] relative group cursor-pointer overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${category.image}')`,
        }}
      />
      <div className="absolute bottom-0 w-full bg-white/60 backdrop-blur-sm p-4 text-center">
        <p className="nom-b-ft">{category.title}</p>
      </div>
    </div>
  ))}
</div>


      <CategoryBlogs 
        category={selectedCategory} 
        onClose={() => setSelectedCategory(null)} 
      />
    </section>
  );
}

export default CategorySection;