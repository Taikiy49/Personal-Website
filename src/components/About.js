import '../styles/About.css';
import React from 'react';

const About = () => {
  return (
      <div className="about-container">
        <div className='about-title'>About Me...</div>
        <img src='./taiki-img2.png' className='taiki-img2'/>

        <div className='about-description'>
          Hey there! I’m Taiki Owen Yamashita, a dynamic Software Engineer at Geolabs and a cutting-edge Data Scientist with the National Science Foundation. I thrive on building innovative solutions and diving deep into new technologies.
          At Geolabs, I revolutionize engineering workflows by developing software that leverages advanced algorithms and data processing techniques. My role as a Data Scientist at NSF allows me to unravel complex datasets using statistical analysis and machine learning, turning raw data into impactful insights.
          I’m passionate about front-end development, crafting visually stunning and user-friendly interfaces with HTML, CSS, JavaScript, and React. My coding arsenal includes Python, C/C++, SQL, and R, enabling me to tackle everything from backend development to sophisticated data analysis.
        </div>
      </div>
  );
};

export default About;
