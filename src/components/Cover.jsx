import React, { useEffect, useState } from 'react';
import '../styles/Cover.css';
import Type from './Type';

const Cover = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('.top-container');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
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
      <div className="intro-container" style={{ paddingTop: headerHeight }}>
        <img src='./taiki-img.png' className='taiki-img' />
        <div className='typing-container'>
          <div className='title'>Taiki Yamashita</div>
          <div className='subtitle'><Type /></div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
