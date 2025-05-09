import React, { useEffect } from 'react';
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
      <div className="intro-container"> 
      <img src='./taiki-img.png' className='taiki-img'/>
        <div className='typing-container'>
          <div className='title'>Taiki Yamashita</div>
          {/* <div className={`description ${descriptionDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '7s' }}>20 y.o. Software Engineer @ Geolabs</div>
          <div className={`description ${descriptionDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '7s' }}>Data Scientist @ National Science Foundation</div> */}
          <div className='subtitle'><Type/></div>
        </div>
  
      </div>
    </div>
  );
};

export default Cover;
