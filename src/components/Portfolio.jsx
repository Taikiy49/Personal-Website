import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye, FaDownload } from 'react-icons/fa';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Geolabs Software Platform",
      category: "fullstack",
      description: "Comprehensive enterprise platform with AI assistance, document management, and inventory tracking",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["React.js", "Python", "Flask", "Microsoft SSO", "AWS S3", "OCR"],
      github: "https://github.com/taikiy49/geolabs-platform",
      demo: "https://geolabs-demo.netlify.app",
      featured: true
    },
    {
      id: 2,
      title: "AI Health Data Analysis",
      category: "ai",
      description: "Machine learning models analyzing 400K+ health records for chronic disease prediction",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["Python", "TensorFlow", "R", "Statistical Modeling"],
      github: "https://github.com/taikiy49/health-ai-analysis",
      demo: "https://health-ai-demo.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Golf Analytics Dashboard",
      category: "data",
      description: "Personal golf performance tracking with shot analysis and course strategy insights",
      image: "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["React.js", "D3.js", "Python", "Data Visualization"],
      github: "https://github.com/taikiy49/golf-analytics",
      demo: "https://golf-analytics-demo.netlify.app",
      featured: false
    },
    {
      id: 4,
      title: "Ado Music Recommendation AI",
      category: "ai",
      description: "AI-powered music recommendation system based on Ado's discography and listening patterns",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
      technologies: ["Python", "Machine Learning", "Spotify API", "NLP"],
      github: "https://github.com/taikiy49/ado-music-ai",
      demo: "https://ado-music-ai.netlify.app",
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'data', label: 'Data Science' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio Showcase</h2>
          <p className="section-subtitle">Live demos, case studies, and project deep-dives</p>
          
          <div className="resume-download">
            <a href="/resume.pdf" download className="download-btn">
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`portfolio-card cyber-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn">
                      <FaEye />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaCode />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;