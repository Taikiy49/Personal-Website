import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const aboutContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 } // Trigger the animation when 10% of the element is visible
    );
  }, []);

  return (
    <div id='about' className='about-container-floor'>
      <div className="about-container" ref={aboutContainerRef}>
        <div className='about-container-title'>About Me</div>
        <div className='about-description'>
          I'm Taiki Owen Yamashita, a Software Engineer @ Geolabs and Data Scientist @ National Science Foundation. I love building innovative solutions and exploring new technologies.
        </div>
      </div>
    </div>
  );
};

export default About;
