import React, { useState, useEffect } from 'react';
import './1-First.css';

const First = () => {
  const [titleDone, setTitleDone] = useState(false);
  const [subtitleDone, setSubtitleDone] = useState(false);
  const [descriptionDone, setDescriptionDone] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setTitleDone(true), 3500); // Typing animation duration for title
    const subtitleTimer = setTimeout(() => setSubtitleDone(true), 7000); // Typing animation duration for subtitle
    const descriptionTimer = setTimeout(() => setDescriptionDone(true), 10500); // Typing animation duration for description

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

  return (
    <div className='first-floor'>
      <div className="top-container">
        <div className="name-container">Taiki Owen Yamashita / 山下大輝</div>
        <div className="icon-container">
          <div className="discord-icon icon-container-style">Home</div>
          <div className="linkedin-icon icon-container-style">Experiences</div>
          <div className="github-icon icon-container-style">Projects</div>
          <div className="github-icon icon-container-style">Goals</div>
        </div>
      </div>

      <div className="intro-container"> 
        <img src='taiki-img.png' className='taiki-img' alt='taiki-image'/>
        <div className='typing-container'>
          <div className={`title ${titleDone ? 'typing-done' : 'typing'}`}>Hello! I'm Taiki</div>
          <div className={`subtitle ${subtitleDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '3.5s' }}>I'm a developer!</div>
          <div className={`description ${descriptionDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '7s' }}>20 y.o. Software Engineer @ Geolabs</div>
          <div className="media-container">
            <img src='linkedin.png' alt='linkedin-link' className='linkedin-img' />
            <img src='github.svg' alt='github-link' className='github-img' />
          </div>
        </div>
      </div>
      <div className='contact-info'>
        <p className='contact-box'>Irvine, CA</p>
        <p className='contact-box'>taikiy49@gmail.com</p>
        <p className='contact-box'>(808) 450-5767</p>
      </div>
    </div>
  );
};

export default First;
