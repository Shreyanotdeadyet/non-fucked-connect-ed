// import React from 'react';
import BlogCard from './BlogCard';

const RECENT_BLOGS = [
  {
    title: 'A Parents Guide to Asking The Right Questions During a School Visit ',
    intro: 'Making the most of school visits for a parent as they can assess whether the environment and values of the school align with..',
    author: 'Girija Kele',
    readTime: '2 min',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400',
  },
  {
    title: 'Connect-Ed Educator Meet: Practical Insights Into Transforming Career Mentorship For Our Students',
    intro: 'On 28th July 2024, a group of educators, couselors, trainers and coaches came together to deliberate on the best career-mentoring..',
    author:'Girija Kele',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400',
  },
  {
    title: 'Navigating the Mathematical Niche: Unique Careers in Math',
    intro: 'Mathematics, often revered for its abstract beauty and logical precision, opens doors to a multitude of career paths..',
    author: 'Girija Kele',
    readTime: '2 min',
    image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=400',
  },
];

function RecentBlogs() {
  return (
    <section className="mb-16">
      <h2 className="hd-ft mb-8">Recent Articles</h2>
      <div className="space-y-8">
        {RECENT_BLOGS.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  );
}

export default RecentBlogs;