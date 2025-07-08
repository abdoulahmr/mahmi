import React from 'react';
import './../../assets/section-six.css';

function SectionSix() {
  const blogPosts = [
    {
      image: "blog-post-img1.png",
      category: 'Trend In Design',
      title: 'Protect Your Workplace From Cyber Attacks',
      link: '#',
    },
    {
      image: "blog-post-img2.png",
      category: 'Management',
      title: 'Security In A Fragment World Of Workload For Your Business',
      link: '#',
    },
  ];

  return (
    <div className="section-six">
      <div className="section-six-header">
        <label className="section-six-label">OUR NEWS</label>
        <h1 className="section-six-heading">Latest Blog Posts</h1>
      </div>
      <div className="section-six-cards-container">
        {blogPosts.map((post, index) => (
          <div
            className="section-six-card"
            key={index}
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="section-six-card-overlay">
              <span className="section-six-card-category">{post.category}</span>
              <h3 className="section-six-card-title">{post.title}</h3>
              <a href={post.link} className="section-six-read-more">
                Read more &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionSix;