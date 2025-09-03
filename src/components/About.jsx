import React from 'react';
import { FaHeart, FaCode, FaMusic, FaGolfBall, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import HolographicCard from './HolographicCard';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">The story behind the code</p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <HolographicCard className="about-card">
              <div className="card-icon">
                <FaHeart />
              </div>
              <h3>My Journey</h3>
              <p>
                Born and raised in the beautiful islands of Hawaii 🌺, I'm currently pursuing my B.S. in Computer Science 
                at UC Irvine with a minor in Statistics. My passion lies at the intersection of AI, music, and sports.
              </p>
              <p>
                As a Software Engineer & IT Associate at Geolabs, I'm transforming the geotechnical engineering industry 
                with cutting-edge AI solutions. When I'm not building the future with code, you'll find me listening to 
                Ado's powerful vocals or dominating the golf course and pickleball courts.
              </p>
              <div className="personal-info">
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>Irvine, CA | Honolulu, HI</span>
                </div>
                <div className="info-item">
                  <FaGraduationCap />
                  <span>UC Irvine CS '25 (Dean's Honor List)</span>
                </div>
              </div>
            </HolographicCard>
          </div>

          <div className="about-highlights">
            <HolographicCard className="highlight-card">
              <div className="highlight-icon">
                <FaCode />
              </div>
              <h4>Tech Innovation</h4>
              <p>Specializing in AI/ML, full-stack development, and data science. Built systems processing 8K+ reports.</p>
            </HolographicCard>

            <HolographicCard className="highlight-card">
              <div className="highlight-icon">
                <FaMusic />
              </div>
              <h4>Ado Superfan</h4>
              <p>Obsessed with Ado's incredible artistry. Her music fuels my creativity and coding marathons.</p>
            </HolographicCard>

            <HolographicCard className="highlight-card">
              <div className="highlight-icon">
                <FaGolfBall />
              </div>
              <h4>Sports Enthusiast</h4>
              <p>Golf and pickleball provide perfect balance. Strategic thinking on the course translates to better code.</p>
            </HolographicCard>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">3.8</div>
            <div className="stat-label">GPA</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Programming Languages</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Major Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Ado Fan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;