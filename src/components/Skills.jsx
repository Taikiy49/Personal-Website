import React from 'react';
import { FaCode, FaBrain, FaServer, FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "R", level: 70 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      icon: <FaBrain />,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-Learn", level: 90 },
        { name: "NumPy", level: 95 },
        { name: "Pandas", level: 90 },
        { name: "OpenAI API", level: 85 },
        { name: "Google AI", level: 80 }
      ]
    },
    {
      icon: <FaServer />,
      title: "Web Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "Flask", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      icon: <FaTools />,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "Linux", level: 80 },
        { name: "ArcGIS", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with to build amazing solutions</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.2) + (i * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;