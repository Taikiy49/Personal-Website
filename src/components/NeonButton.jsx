import React from 'react';
import '../styles/NeonButton.css';

const NeonButton = ({ children, onClick, variant = 'primary', className = '' }) => {
  return (
    <button 
      className={`neon-btn neon-btn-${variant} ${className}`}
      onClick={onClick}
    >
      <span className="btn-text">{children}</span>
      <div className="btn-glow"></div>
    </button>
  );
};

export default NeonButton;