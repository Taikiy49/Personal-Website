import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaFileAlt, FaMusic, FaGolfBall, FaCode, FaRocket } from 'react-icons/fa';
import GlitchText from './GlitchText';
import NeonButton from './NeonButton';
import '../styles/Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    'Software Engineer & IT Associate',
    'AI & Machine Learning Enthusiast', 
    'Ado Music Superfan 🎵',
    'Golf Strategist ⛳',
    'Pickleball Champion 🏓',
    'Full-Stack Developer',
    'Data Science Researcher'
  ];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
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
            <div className="hero-badge">
              <FaRocket />
              <span>Available for opportunities</span>
            </div>
            <h1 className="hero-title">
              <GlitchText><span className="name-highlight">Taiki Yamashita</span></GlitchText>
            </h1>
            <div className="hero-subtitle">
              <span className="typewriter">{text}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Building the future with AI-powered solutions at Geolabs. When I'm not revolutionizing 
              geotechnical engineering with code, I'm jamming to Ado's incredible vocals or perfecting 
              my golf swing on Hawaiian courses.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">8K+</span>
                <span className="stat-label">Reports Processed</span>
              </div>
              <div className="stat">
                <span className="stat-number">450+</span>
                <span className="stat-label">Students Mentored</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Ado Songs</span>
              </div>
            </div>
            <div className="hero-buttons">
              <NeonButton onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} 
                      variant="primary">
                <FaCode />
                View My Work
              </NeonButton>
              <NeonButton onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                      variant="secondary">
                Let's Connect
              </NeonButton>
            </div>
            <div className="social-links">
              <a href="https://github.com/Taikiy49" target="_blank" rel="noopener noreferrer" className="social-link">
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
              <img src="src/taiki-img2.png" 
               <img src="/taiki-img2.png" 
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
  )
  );
};

export default Hero;