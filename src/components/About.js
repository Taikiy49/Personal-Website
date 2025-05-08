import '../styles/About.css';
import React from 'react';
import { FaLaptopCode, FaFlask, FaDatabase, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const About = () => {
  const items = [
    {
      label: 'Software Engineer',
      icon: <FaLaptopCode size={40} />,
      description: 'Built advanced software to boost engineering productivity.',
      link: 'https://geolabs.com',
    },
    {
      label: 'Data Scientist',
      icon: <FaFlask size={40} />,
      description: 'Analyzed complex datasets with machine learning.',
      link: 'https://nsf.gov',
    },
    {
      label: 'Tutor / Mentor',
      icon: <FaUserGraduate size={40} />,
      description: 'Supported students and graded CS assignments.',
      link: 'https://uci.edu',
    },
    {
      label: 'Golfer & Pickleballer',
      icon: <FaChalkboardTeacher size={40} />,
      description: 'Tutored students in coding and mathematics.',
      link: 'https://honolulututoring.com',
    },
  ];

  const handleButtonClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="about-container">
      <div className="black-table">
        {items.map((item, index) => (
          <div key={index} className="black-table-box">
            <div className="box-content">
              {item.icon}
              <h3>{item.label}</h3>
              <p>{item.description}</p>
              <button onClick={() => handleButtonClick(item.link)}>Learn More</button>
            </div>
          </div>
        ))}
      </div>

      <div className='about-title'>About Me...</div>
      <img src='./taiki-img2.png' className='taiki-img2'/>

      <div className='about-description'>
        Hey there! I’m Taiki Owen Yamashita, a dynamic Software Engineer at Geolabs and a cutting-edge Data Scientist with the National Science Foundation...
      </div>
    </div>
  );
};

export default About;
