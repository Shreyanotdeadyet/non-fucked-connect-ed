import React from 'react';
import '../styles/BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-container bg-white">
      <header className="hero-section bg-white ">
        <div className="hero-overlay bg-white">
          
        </div>
      </header>

      <section className="categories bg-white">
        <h2 className="section-title font-geneva bg-white text-purple-700">CATEGORIES</h2>
        <div className="card-container flex justify-center gap-4 bg-white">
          <div
            className="bg-white card relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl hover:border-slate-700 card-careers"
          >
            <div
              className="card-image bg-white bg-cover bg-center h-full w-full"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/236x/c6/80/dd/c680ddc032fbef4df35c7355c4166210.jpg')",
              }}
            >
              <div className="card-overlay bg-white">
                <p className="card-text">Careers</p>
              </div>
            </div>
          </div>

          <div
            className="card relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl hover:border-slate-700 card-essay-tips"
          >
            <div
              className="card-image bg-cover bg-center h-full w-full"
              style={{
                backgroundImage:
                  "url('https://images.ctfassets.net/3s5io6mnxfqz/6cEqjND9VDPuB4VTsTWFln/1ff2411ea7b5a4f662b6d662e65a11e5/AdobeStock_252059584.jpeg?w=1920')",
              }}
            >
              <div className="card-overlay">
                <p className="card-text text-[#009984] ">Essay Tips</p>
              </div>
            </div>
          </div>

          <div
            className="card relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl hover:border-slate-700 card-college-readiness"
          >
            <div
              className="card-image bg-cover bg-center h-full w-full"
              style={{
                backgroundImage:
                  "url('https://cdn.pixabay.com/photo/2017/09/01/13/56/university-2704306_640.jpg')",
              }}
            >
              <div className="card-overlay">
                <p className="card-text text-[#009984] ">College Readiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs bg-white">
        <h2 className="section-title font-geneva text-purple-700">RECENT BLOGS</h2>
        <div className="blog-card bg-white flex justify-center rounded-lg shadow-md p-4">
          <div
            className="blog-placeholder w-1/2 bg-cover bg-center h-32"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq7WGeX5vov1EKe5FbMZB4P6hSm6auAdlRksAsO4RhD0uACM7OnthH_YWjHWCLoIfXQPg&usqp=CAU')",
            }}
          ></div>
          <div className="blog-details w-1/2 pl-4">
            <p className="blog-meta text-gray-600 text-sm">
              Read Time: 5 min | Author: John Doe
            </p>
            <h3 className="blog-title text-xl font-bold">Sample Blog Title</h3>
            <p className="blog-summary text-gray-700">
              This is a placeholder for the blog summary. A brief description of
              what the blog covers.
            </p>
            <button className="read-more bg-[#00e590] hover:bg-[#00c57f] text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
        <div className="blog-card bg-white rounded-lg shadow-md p-4">
          <div
            className="blog-placeholder w-1/2 bg-cover bg-center h-32"
            style={{
              backgroundImage:
                "url('https://www.shutterstock.com/image-photo/blogging-concept-web-blog-social-600nw-2484136087.jpg')",
            }}
          ></div>
          <div className="blog-details w-1/2 pl-4">
            <p className="blog-meta text-gray-600 text-sm">
              Read Time: 8 min | Author: Jane Smith
            </p>
            <h3 className="blog-title text-xl font-bold">Another Blog Title</h3>
            <p className="blog-summary text-gray-700">
              Here is another placeholder for the blog content summary. Brief
              and engaging text.
            </p>
            <button className="read-more bg-[#00e590] hover:bg-[#00c57f] text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
