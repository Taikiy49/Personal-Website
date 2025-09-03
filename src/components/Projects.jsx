import React, { useState } from 'react';
import { FaGolfBall, FaTableTennis, FaMusic, FaHeart, FaTrophy, FaChartLine, FaPlay } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ado');

  const adoContent = {
    title: "Ado - My Musical Inspiration",
    subtitle: "The voice that powers my creativity",
    description: "Ado is absolutely incredible! Her voice has this raw power and emotional depth that just hits different. Every song is a masterpiece of vocal technique and artistic expression.",
    favoriteSongs: [
      { 
        name: "Usseewa", 
        reason: "The song that got me hooked! The rebellious energy and vocal power are unmatched.",
        year: "2020"
      },
      { 
        name: "Show", 
        reason: "Demonstrates her incredible range and emotional control. Gives me chills every time.",
        year: "2022"
      },
      { 
        name: "Gira Gira", 
        reason: "The intensity and vocal gymnastics are absolutely mind-blowing.",
        year: "2023"
      },
      { 
        name: "Odo", 
        reason: "Beautiful melody with technical perfection. Perfect coding background music.",
        year: "2022"
      },
      { 
        name: "Readymade", 
        reason: "Love the rock influence and how she makes it uniquely hers.",
        year: "2021"
      }
    ],
    impact: "Ado's music is my coding fuel. Her energy keeps me in flow state during long programming sessions, and her artistic perfectionism inspires me to write cleaner, more elegant code.",
    stats: {
      songsPlayed: "2,847",
      hoursListened: "156",
      favoriteAlbum: "Kyogen",
      concertsWatched: "12 (online)"
    }
  };

  const sportsData = {
    golf: {
      title: "Golf Mastery Journey",
      subtitle: "Precision meets strategy",
      description: "Golf has become my ultimate passion outside coding. The mental game, course strategy, and pursuit of that perfect shot mirror the problem-solving I love in programming.",
      stats: {
        handicap: "Working toward breaking 90",
        bestRound: "87 at Kahuku Golf Course",
        favoriteClub: "7-iron (most reliable)",
        roundsPlayed: "75+ across Hawaiian courses",
        favoriteCourse: "Ala Wai Golf Course"
      },
      achievements: [
        "Improved handicap by 15 strokes in 8 months",
        "Completed rounds at 12 different Hawaiian courses",
        "Shot under 90 three times this year",
        "Member of local golf community group",
        "Consistent fairway accuracy improvement"
      ],
      philosophy: "Golf teaches patience and precision - qualities essential in both debugging code and life. Every shot is a new problem to solve."
    },
    pickleball: {
      title: "Pickleball Excellence",
      subtitle: "Speed, strategy, and reflexes",
      description: "Pickleball combines the best of tennis, badminton, and ping pong. The fast-paced rallies and strategic positioning keep me sharp and focused.",
      stats: {
        rating: "3.5-4.0 intermediate level",
        frequency: "4-5 times per week",
        favoriteShot: "Third shot drop",
        winRate: "68% in league matches",
        partnerStyle: "Aggressive net play"
      },
      achievements: [
        "Won local community doubles tournament",
        "Advanced from beginner to intermediate in 6 months",
        "Regular player in competitive league",
        "Mentoring new players at community center",
        "Developed signature dinking strategy"
      ],
      philosophy: "Pickleball is like rapid prototyping - quick iterations, fast feedback, and constant adaptation to changing conditions."
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Passions</h2>
          <p className="section-subtitle">What drives me beyond the keyboard</p>
        </div>

        <div className="passion-tabs">
          <button 
            className={`tab-btn ${activeTab === 'ado' ? 'active' : ''}`}
            onClick={() => setActiveTab('ado')}
          >
            <FaMusic />
            <span>Ado Music</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'golf' ? 'active' : ''}`}
            onClick={() => setActiveTab('golf')}
          >
            <FaGolfBall />
            <span>Golf</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'pickleball' ? 'active' : ''}`}
            onClick={() => setActiveTab('pickleball')}
          >
            <FaTableTennis />
            <span>Pickleball</span>
          </button>
        </div>

        {activeTab === 'ado' && (
          <div className="passion-content">
            <div className="ado-showcase cyber-card">
              <div className="ado-header">
                <div className="ado-icon">
                  <FaHeart />
                </div>
                <div>
                  <h3 className="ado-title">{adoContent.title}</h3>
                  <p className="ado-subtitle">{adoContent.subtitle}</p>
                </div>
              </div>
              
              <p className="ado-description">{adoContent.description}</p>
              
              <div className="ado-stats">
                <div className="ado-stat">
                  <span className="stat-number">{adoContent.stats.songsPlayed}</span>
                  <span className="stat-label">Songs Played</span>
                </div>
                <div className="ado-stat">
                  <span className="stat-number">{adoContent.stats.hoursListened}</span>
                  <span className="stat-label">Hours Listened</span>
                </div>
                <div className="ado-stat">
                  <span className="stat-number">{adoContent.stats.concertsWatched}</span>
                  <span className="stat-label">Concerts Watched</span>
                </div>
              </div>
              
              <div className="songs-grid">
                {adoContent.favoriteSongs.map((song, index) => (
                  <div key={index} className="song-card">
                    <div className="song-header">
                      <h4 className="song-name">{song.name}</h4>
                      <span className="song-year">{song.year}</span>
                    </div>
                    <p className="song-reason">{song.reason}</p>
                  </div>
                ))}
              </div>
              
              <div className="ado-impact">
                <h4>How Ado Influences My Work</h4>
                <p>{adoContent.impact}</p>
              </div>
            </div>
          </div>
        )}

        {(activeTab === 'golf' || activeTab === 'pickleball') && (
          <div className="passion-content">
            <div className="sport-showcase cyber-card">
              <div className="sport-header">
                <div className="sport-icon">
                  {activeTab === 'golf' ? <FaGolfBall /> : <FaTableTennis />}
                </div>
                <div>
                  <h3 className="sport-title">{sportsData[activeTab].title}</h3>
                  <p className="sport-subtitle">{sportsData[activeTab].subtitle}</p>
                </div>
              </div>
              
              <p className="sport-description">{sportsData[activeTab].description}</p>
              
              <div className="sport-stats-grid">
                {Object.entries(sportsData[activeTab].stats).map(([key, value], index) => (
                  <div key={index} className="sport-stat-card">
                    <h5>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h5>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              
              <div className="sport-achievements">
                <h4><FaTrophy /> Recent Achievements</h4>
                <ul>
                  {sportsData[activeTab].achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="sport-philosophy">
                <h4>My Philosophy</h4>
                <p>{sportsData[activeTab].philosophy}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;