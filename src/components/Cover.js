import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Cover.css';
import Type from './Type';




const Cover = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollIndicator = document.querySelector('.scroll-indicator');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      scrollIndicator.style.width = scrollPercent + '%';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='cover-container-floor'>
      <div className="scroll-indicator"></div>
      <div className='sliding-bar top-bar'></div> {/* Top sliding bar */}
      <div className="intro-container"> 
        <div className='typing-container'>
          <div className='title'>I'm Taiki Yamashita</div>
          {/* <div className={`description ${descriptionDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '7s' }}>20 y.o. Software Engineer @ Geolabs</div>
          <div className={`description ${descriptionDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '7s' }}>Data Scientist @ National Science Foundation</div> */}
          <div className='subtitle'><Type/></div>

          <button className='cta-button'>Download Resume</button>
          <div className='social-icons'>
            <a href='https://www.linkedin.com/in/taikiyamashita/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://github.com/Taikiy49' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
      <div className='sliding-bar bottom-bar'></div> {/* Bottom sliding bar */}
    </div>
  );
};

export default Cover;
