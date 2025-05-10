import '../styles/Skills.css';
import React from 'react';

const Skills = () => {
  const leftCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'R', 'SQL'],
    },
    {
      category: 'Machine Learning & AI',
      skills: ['TensorFlow', 'Scikit-Learn', 'PyTorch', 'NumPy'],
    },
  ];

  const rightCategories = [
    {
      category: 'Web Development',
      skills: ['React.js', 'Next.js', 'Node.js', 'HTML/CSS', 'Tailwind CSS', 'Flask'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Notion', 'MongoDB', 'PostgreSQL'],
    },
  ];

  return (
    <div className="skills-container">
      <div className="skills-column">
        {leftCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h2>{category.category}</h2>
            <div className="skills-grid">
              {category.skills.map((item, i) => (
                <div key={i} className="skill-bubble">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-column">
        {rightCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h2>{category.category}</h2>
            <div className="skills-grid">
              {category.skills.map((item, i) => (
                <div key={i} className="skill-bubble">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
