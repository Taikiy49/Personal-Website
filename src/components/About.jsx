import '../styles/About.css';
import React from 'react';
import { FaBriefcase, FaProjectDiagram, FaBullseye, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Background',
      sublabel: 'Where it all began',
      icon: <FaUser size={40} />,
      description: 'Born and raised in Honolulu, I grew up curious about how things work. I’ve always loved solving problems and exploring new technologies, which led me to pursue computer science at UC Irvine.',
      linkText: 'Read more →',
      route: '/background', // ✅ Correct internal route
    },
    {
      label: 'Experiences',
      sublabel: 'Learning through doing',
      icon: <FaBriefcase size={40} />,
      description: 'Gained hands-on experience at organizations like Geolabs and the National Science Foundation, working on AI systems, data pipelines, and meaningful software tools.',
      linkText: 'See my experience →',
      route: '/experiences',
    },
    {
      label: 'Projects',
      sublabel: 'Building creative tools',
      icon: <FaProjectDiagram size={40} />,
      description: 'Developed platforms like Cura AI, ScheduleEase, and an AI-powered report search system to solve real-world problems using full-stack and AI technologies.',
      linkText: 'Browse projects →',
      route: '/projects',
    },
    {
      label: 'Goals',
      sublabel: 'Aiming higher',
      icon: <FaBullseye size={40} />,
      description: 'Dedicated to creating accessible tech, launching open-source tools for learning, and contributing to AI research that improves lives.',
      linkText: 'View goals →',
      route: '/goals',
    },
  ];

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="about-container">
      <div className="about-grid">
        {items.map((item, index) => (
          <div key={index} className="about-card">
            <div className="about-card-header">
              <div className="about-icon">{item.icon}</div>
              <div>
                <h2>{item.label}</h2>
                <h3 className="about-sublabel">{item.sublabel}</h3>
              </div>
            </div>
            <p>{item.description}</p>
            <span className="about-link" onClick={() => handleClick(item.route)}>
              {item.linkText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
