import React from 'react';
import { FaHeart, FaCode, FaMusic, FaGolfBall } from 'react-icons/fa';
import HolographicCard from './HolographicCard';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know the person behind the code</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <HolographicCard className="about-card">
              <div className="card-icon">
                <FaHeart />
              </div>
              <h3>My Story</h3>
              <p>
                Born and raised in the beautiful islands of Hawaii with Japanese heritage, I've always been 
                fascinated by the intersection of technology and culture. My journey in software engineering 
                began with curiosity about how things work and evolved into a passion for building 
                meaningful solutions that make a real impact.
              </p>
              <p>
                Currently working as a Software Engineer at Geolabs, where I'm revolutionizing the 
                geotechnical engineering industry with AI-powered search systems and data visualization tools. 
                When I'm not coding, you'll find me listening to Ado's incredible music or out on the 
                golf course perfecting my swing.
              </p>
            </HolographicCard>
          </div>

          <div className="about-highlights">
            <HolographicCard className="highlight-card">
              <div className="highlight-icon">
                <FaCode />
              </div>
              <h4>Tech Passion</h4>
              <p>Specializing in AI, full-stack development, and data science with a focus on creating impactful solutions.</p>
            </HolographicCard>

            <HolographicCard className="highlight-card">
              <div className="highlight-icon">
                <FaMusic />
              </div>
              <h4>Ado Enthusiast</h4>
              <p>Huge fan of Ado's powerful vocals and artistic vision. Her music fuels my creativity and coding sessions.</p>
            </HolographicCard>

            <HolographicCard className="highlight-card">
              <div className="highlight-icon">
                <FaGolfBall />
              </div>
              <h4>Sports Lover</h4>
              <p>Golf and pickleball provide the perfect balance to my tech career, teaching patience and strategic thinking.</p>
            </HolographicCard>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">8000+</div>
            <div className="stat-label">Reports Processed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">450+</div>
            <div className="stat-label">Students Mentored</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Ado Songs Played</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;