import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaFileAlt, FaMusic, FaGolfBall } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = React.useMemo(() => [
    'Software Engineer',
    'AI Enthusiast', 
    'Fitness Enthusiast',
    'Golf Player',
    'Travel Lover',
    'Problem Solver'
  ], []);

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Taiki Yamashita</span>
            </h1>
            <div className="hero-subtitle">
              I'm a <span className="typewriter">{text}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Passionate software engineer building AI-powered solutions. Japanese-born with a love for 
              fitness, golf, travel, and exploring my cultural heritage. Currently transforming the 
              geotechnical engineering industry with cutting-edge technology.
            </p>
            <div className="hero-buttons">
              <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} 
                      className="btn-primary">
                Discover My Story
              </button>
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                      className="btn-secondary">
                Let's Connect
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/taikiy49" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/taikiyamashita" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFileAlt />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-container">
              <div className="profile-ring"></div>
              <div className="profile-ring-2"></div>
              <img src="taiki-img.png" 
                   alt="Taiki Yamashita" className="profile-image" />
              <div className="floating-icons">
                <div className="floating-icon music"><FaMusic /></div>
                <div className="floating-icon golf"><FaGolfBall /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;