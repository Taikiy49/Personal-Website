import React, { useEffect, useState } from 'react';
import '../styles/Cover.css';
import Type from './Type';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

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
        <img src='./taiki-img.png' className='taiki-img' alt='Taiki Yamashita profile' />
        <div className='typing-container'>
          <div className='title'>Taiki Yamashita</div>
          <div className='subtitle'><Type /></div>
        </div>
        <div className="icon-links">
          <a href="https://linkedin.com/in/taikiyamashita" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/taikiy49" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FaFileAlt size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cover;
