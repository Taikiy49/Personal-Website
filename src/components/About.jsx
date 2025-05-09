import '../styles/About.css';
import React from 'react';
import { FaLaptopCode, FaFlask, FaUserGraduate, FaRunning } from 'react-icons/fa';

const About = () => {
  const items = [
    {
      label: 'Software Engineer',
      sublabel: 'Building better software',
      icon: <FaLaptopCode size={40} />,
      description: 'Exploring software, algorithms, and development to boost engineering productivity.',
      linkText: 'Explore my work →',
      link: 'https://geolabs.com',
    },
    {
      label: 'Data Scientist',
      sublabel: 'Discovering insights',
      icon: <FaFlask size={40} />,
      description: 'Analyzing data and using machine learning to uncover insights.',
      linkText: 'See the insights →',
      link: 'https://nsf.gov',
    },
    {
      label: 'Tutor / Mentor',
      sublabel: 'Helping students grow',
      icon: <FaUserGraduate size={40} />,
      description: 'Supporting students in CS and math, helping them grow.',
      linkText: 'Meet the mentor →',
      link: 'https://uci.edu',
    },
    {
      label: 'Golfer & Pickleballer',
      sublabel: 'Active & strategic',
      icon: <FaRunning size={40} />,
      description: 'Staying active and strategic on the course and court.',
      linkText: 'Join the game →',
      link: 'https://honolulututoring.com',
    },
  ];

  const handleClick = (link) => {
    window.open(link, '_blank');
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
            <span className="about-link" onClick={() => handleClick(item.link)}>
              {item.linkText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
