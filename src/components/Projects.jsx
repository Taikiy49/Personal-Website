import React, { useState } from 'react';
import { FaGolfBall, FaTableTennis, FaMusic, FaHeart, FaTrophy, FaDumbbell, FaPlane, FaMapMarkedAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ado');

  const adoContent = {
    title: "Ado - My Musical Inspiration",
    subtitle: "The voice that powers my creativity",
    description: "Ado's music is my coding fuel. Her powerful vocals and emotional range create the perfect atmosphere for deep focus during programming sessions.",
    favoriteSongs: [
      { 
        name: "Usseewa", 
        reason: "Perfect energy for tackling complex algorithms.",
        year: "2020"
      },
      { 
        name: "Show", 
        reason: "Great for maintaining focus during long coding sessions.",
        year: "2022"
      },
      { 
        name: "Gira Gira", 
        reason: "High-energy track that keeps me motivated.",
        year: "2023"
      }
    ],
    impact: "Her music keeps me in flow state during development work and inspires attention to detail in my code.",
    stats: {
      songsPlayed: "1,200+",
      hoursListened: "80+",
      favoriteAlbum: "Kyogen",
      concertsWatched: "5 (online)"
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

  const gymData = {
    title: "Fitness & Strength Training",
    subtitle: "Building both code and muscle",
    description: "The gym is my sanctuary for both physical and mental strength. Regular workouts keep me sharp, focused, and ready to tackle any coding challenge.",
    stats: {
      frequency: "5-6 times per week",
      favoriteExercise: "Deadlifts & Pull-ups",
      currentGoal: "Increasing overall strength",
      workoutStyle: "Compound movements focus",
      motivation: "Consistency over intensity"
    },
    benefits: [
      "Improved focus and mental clarity for coding",
      "Better posture for long programming sessions",
      "Stress relief after debugging complex issues",
      "Discipline that translates to consistent coding habits",
      "Energy boost for tackling challenging projects"
    ],
    philosophy: "Just like writing clean code, fitness is about consistency, progressive improvement, and building strong foundations."
  };

  const travelData = {
    title: "Travel & Cultural Exploration",
    subtitle: "Japanese heritage meets global curiosity",
    description: "Born to Japanese parents, I have a deep connection to Japan and love exploring both my cultural roots and new destinations around the world.",
    stats: {
      japanVisits: "8+ trips to Japan",
      favoriteCity: "Tokyo & Kyoto",
      culturalConnection: "Fluent in Japanese",
      travelStyle: "Cultural immersion",
      nextDestination: "Exploring more of Asia"
    },
    experiences: [
      "Exploring Tokyo's tech districts and innovation hubs",
      "Visiting traditional temples and modern architecture",
      "Experiencing Japanese work culture and technology",
      "Connecting with family and cultural heritage",
      "Discovering regional cuisines and local traditions"
    ],
    philosophy: "Travel broadens perspective just like learning new programming languages - each experience adds new tools to solve problems."
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
          <button 
            className={`tab-btn ${activeTab === 'gym' ? 'active' : ''}`}
            onClick={() => setActiveTab('gym')}
          >
            <FaDumbbell />
            <span>Fitness</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'travel' ? 'active' : ''}`}
            onClick={() => setActiveTab('travel')}
          >
            <FaPlane />
            <span>Travel</span>
          </button>
        </div>

        {activeTab === 'ado' && (
          <div className="passion-content">
            <div className="ado-showcase cyber-card">
              <div className="passion-image">
                <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Music and creativity" />
              </div>
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
              <div className="passion-image">
                <img src={activeTab === 'golf' 
                  ? "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=400"
                  : "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=400"
                } alt={activeTab === 'golf' ? 'Golf course' : 'Pickleball court'} />
              </div>
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

        {activeTab === 'gym' && (
          <div className="passion-content">
            <div className="sport-showcase cyber-card">
              <div className="passion-image">
                <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gym and fitness" />
              </div>
              <div className="sport-header">
                <div className="sport-icon">
                  <FaDumbbell />
                </div>
                <div>
                  <h3 className="sport-title">{gymData.title}</h3>
                  <p className="sport-subtitle">{gymData.subtitle}</p>
                </div>
              </div>
              
              <p className="sport-description">{gymData.description}</p>
              
              <div className="sport-stats-grid">
                {Object.entries(gymData.stats).map(([key, value], index) => (
                  <div key={index} className="sport-stat-card">
                    <h5>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h5>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              
              <div className="sport-achievements">
                <h4><FaTrophy /> Benefits for Programming</h4>
                <ul>
                  {gymData.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="sport-philosophy">
                <h4>My Philosophy</h4>
                <p>{gymData.philosophy}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'travel' && (
          <div className="passion-content">
            <div className="sport-showcase cyber-card">
              <div className="passion-image">
                <img src="https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Travel and Japan" />
              </div>
              <div className="sport-header">
                <div className="sport-icon">
                  <FaMapMarkedAlt />
                </div>
                <div>
                  <h3 className="sport-title">{travelData.title}</h3>
                  <p className="sport-subtitle">{travelData.subtitle}</p>
                </div>
              </div>
              
              <p className="sport-description">{travelData.description}</p>
              
              <div className="sport-stats-grid">
                {Object.entries(travelData.stats).map(([key, value], index) => (
                  <div key={index} className="sport-stat-card">
                    <h5>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h5>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              
              <div className="sport-achievements">
                <h4><FaPlane /> Travel Experiences</h4>
                <ul>
                  {travelData.experiences.map((experience, i) => (
                    <li key={i}>{experience}</li>
                  ))}
                </ul>
              </div>
              
              <div className="sport-philosophy">
                <h4>My Philosophy</h4>
                <p>{travelData.philosophy}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;