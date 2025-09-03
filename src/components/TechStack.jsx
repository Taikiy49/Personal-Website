import React, { useState } from 'react';
import { FaCode, FaBrain, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import '../styles/TechStack.css';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const techCategories = {
    languages: {
      icon: <FaCode />,
      title: "Languages & Scripting",
      items: [
        { name: "Python", level: 95, description: "Primary language for AI/ML and backend development" },
        { name: "JavaScript", level: 90, description: "Frontend development and full-stack applications" },
        { name: "C/C++", level: 80, description: "System programming and performance optimization" },
        { name: "Java", level: 85, description: "Object-oriented programming and enterprise applications" },
        { name: "R", level: 75, description: "Statistical analysis and data science research" },
        { name: "SQL", level: 88, description: "Database design and complex query optimization" },
        { name: "MATLAB", level: 70, description: "Mathematical computing and algorithm development" }
      ]
    },
    frameworks: {
      icon: <FaServer />,
      title: "Frameworks & Libraries",
      items: [
        { name: "React.js", level: 92, description: "Modern frontend development with hooks and context" },
        { name: "Flask", level: 88, description: "Lightweight Python web framework for APIs" },
        { name: "TensorFlow", level: 85, description: "Deep learning and neural network development" },
        { name: "Scikit-Learn", level: 90, description: "Machine learning algorithms and model evaluation" },
        { name: "NumPy/Pandas", level: 95, description: "Data manipulation and numerical computing" },
        { name: "Express.js", level: 80, description: "Node.js backend development and REST APIs" }
      ]
    },
    databases: {
      icon: <FaDatabase />,
      title: "Databases & Storage",
      items: [
        { name: "MongoDB", level: 88, description: "NoSQL document database with advanced querying" },
        { name: "PostgreSQL", level: 85, description: "Relational database design and optimization" },
        { name: "SQLite", level: 90, description: "Lightweight database for development and testing" },
        { name: "ElasticSearch", level: 82, description: "Full-text search and analytics engine" },
        { name: "Redis", level: 75, description: "In-memory caching and session management" }
      ]
    },
    cloud: {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      items: [
        { name: "AWS EC2", level: 85, description: "Cloud computing and server deployment" },
        { name: "AWS S3", level: 80, description: "Object storage and static website hosting" },
        { name: "Netlify", level: 90, description: "Frontend deployment and continuous integration" },
        { name: "Vercel", level: 85, description: "Modern web application deployment" },
        { name: "Git", level: 92, description: "Version control and collaborative development" },
        { name: "Docker", level: 75, description: "Containerization and deployment automation" }
      ]
    },
    ai: {
      icon: <FaBrain />,
      title: "AI & Machine Learning",
      items: [
        { name: "Google Gemini API", level: 88, description: "Advanced AI integration and NLP processing" },
        { name: "OpenAI API", level: 85, description: "GPT integration and conversational AI" },
        { name: "Computer Vision", level: 80, description: "Image processing and pattern recognition" },
        { name: "NLP", level: 87, description: "Natural language processing and text analysis" },
        { name: "OCR", level: 85, description: "Optical character recognition and document processing" },
        { name: "Vector Embeddings", level: 82, description: "Semantic search and similarity matching" }
      ]
    },
    tools: {
      icon: <FaTools />,
      title: "Tools & Platforms",
      items: [
        { name: "Jupyter Notebook", level: 90, description: "Data analysis and research development" },
        { name: "Vim", level: 85, description: "Efficient code editing and terminal workflows" },
        { name: "ArcGIS", level: 78, description: "Geographic information systems and spatial analysis" },
        { name: "Ubuntu", level: 82, description: "Linux server administration and deployment" },
        { name: "CORS/HTTPS", level: 85, description: "Web security and API configuration" },
        { name: "JSON/XML", level: 88, description: "Data serialization and API communication" }
      ]
    }
  };

  return (
    <section id="techstack" className="techstack-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technology Arsenal</h2>
          <p className="section-subtitle">The tools I use to build the future</p>
          <div className="tech-hero-image">
            <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Technology stack" />
          </div>
        </div>

        <div className="tech-navigation">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              className={`tech-nav-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <div className="tech-content">
          <div className="tech-grid">
            {techCategories[activeCategory].items.map((item, index) => (
              <div key={index} className="tech-item cyber-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="tech-header">
                  <h4 className="tech-name">{item.name}</h4>
                  <span className="tech-level">{item.level}%</span>
                </div>
                <div className="tech-bar">
                  <div 
                    className="tech-progress" 
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <p className="tech-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;