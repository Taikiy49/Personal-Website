import '../styles/About.css';
import React from 'react';
import { FaBriefcase, FaProjectDiagram, FaBullseye, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Passions',
      sublabel: 'What drives me',
      icon: <FaUser size={40} />,
      description: 'Beyond coding, I'm passionate about Japanese culture, music, and staying active. These interests shape who I am and inspire my work.',
      linkText: 'Read more →',
      route: '/passions',
    },
    {
      label: 'Experiences',
      sublabel: 'Professional journey',
      icon: <FaBriefcase size={40} />,
      description: 'From software engineering at Geolabs to data science research at NSF, I've built AI systems, optimized workflows, and mentored students across diverse technical roles.',
      linkText: 'See my experience →',
      route: '/experiences',
    },
    {
      label: 'Sports',
      sublabel: 'Golf & Pickleball',
      icon: <FaProjectDiagram size={40} />,
      description: 'Golf and pickleball are my favorite ways to unwind and stay competitive. I love the strategy, precision, and mental focus these sports require.',
      linkText: 'Learn about my sports →',
      route: '/sports',
    },
    {
      label: 'Music',
      sublabel: 'Ado & J-Pop',
      icon: <FaBullseye size={40} />,
      description: 'Huge fan of Ado, the incredible Japanese singer. Her powerful vocals and unique style have been a constant source of inspiration and energy in my daily life.',
      linkText: 'Explore my music taste →',
      route: '/music',
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
