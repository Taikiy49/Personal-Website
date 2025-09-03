import React, { useState, useEffect } from 'react';
import '../styles/GlitchText.css';

const GlitchText = ({ children, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`glitch-text ${isGlitching ? 'glitch-active' : ''} ${className}`} data-text={children}>
      {children}
    </span>
  );
};

export default GlitchText;