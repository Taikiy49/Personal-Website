import React from 'react';
import { FaCalendarAlt, FaEye, FaHeart, FaArrowRight } from 'react-icons/fa';
import '../styles/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building AI-Powered Search: Lessons from Processing 8K+ Reports",
      excerpt: "Deep dive into the architecture and challenges of building a production AI search system for geotechnical engineering.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      views: "1.2k",
      likes: "89",
      tags: ["AI", "Python", "MongoDB", "Architecture"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Why Ado's Music Makes Me a Better Programmer",
      excerpt: "How the emotional depth and technical precision in Ado's vocals inspire my approach to software engineering.",
      date: "Dec 10, 2024",
      readTime: "5 min read",
      views: "856",
      likes: "124",
      tags: ["Music", "Productivity", "Inspiration"],
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "From Golf Course to Code: Strategic Thinking in Both Worlds",
      excerpt: "Exploring how golf strategy and course management principles apply to software architecture and problem-solving.",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      views: "743",
      likes: "67",
      tags: ["Golf", "Strategy", "Problem Solving"],
      image: "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Machine Learning in Healthcare: My NSF Research Experience",
      excerpt: "Analyzing 400K+ health records to predict chronic disease patterns using advanced ML algorithms.",
      date: "Nov 28, 2024",
      readTime: "10 min read",
      views: "1.5k",
      likes: "156",
      tags: ["Machine Learning", "Healthcare", "Research", "Python"],
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest Thoughts</h2>
          <p className="section-subtitle">Insights from code, music, and life</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card cyber-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-overlay">
                  <FaArrowRight />
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    <FaCalendarAlt /> {post.date}
                  </span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <div className="blog-stats">
                  <span className="blog-stat">
                    <FaEye /> {post.views}
                  </span>
                  <span className="blog-stat">
                    <FaHeart /> {post.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;