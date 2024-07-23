import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Cover.css';

const Cover = () => {
  const [titleDone, setTitleDone] = useState(false);
  const [subtitleDone, setSubtitleDone] = useState(false);
  const [descriptionDone, setDescriptionDone] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setTitleDone(true), 3500);
    const subtitleTimer = setTimeout(() => setSubtitleDone(true), 7000);
    const descriptionTimer = setTimeout(() => setDescriptionDone(true), 10500);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

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
          <div className={`title ${titleDone ? 'typing-done' : 'typing'}`}>Hello! I'm Taiki</div>
          <div className={`subtitle ${subtitleDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '3.5s' }}>I'm a developer!</div>
          <div className={`description ${descriptionDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '7s' }}>20 y.o. Software Engineer @ Geolabs</div>
          <div className={`description ${descriptionDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '7s' }}>Data Scientist @ National Science Foundation</div>
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
