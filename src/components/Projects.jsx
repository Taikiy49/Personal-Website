import React from 'react';
import { FaGolfBall, FaTableTennis, FaTrophy, FaHeart } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const sportsData = [
    {
      icon: <FaGolfBall />,
      title: "Golf Mastery",
      subtitle: "Precision & Strategy",
      description: "Golf has become my ultimate passion outside of coding. There's something magical about the precision required for each shot and the mental strategy involved in course management.",
      details: [
        "Current handicap: Working towards breaking 90 consistently",
        "Favorite course: Ala Wai Golf Course with ocean views",
        "Best round: Shot an 87 at Kahuku Golf Course",
        "Favorite club: 7-iron for its versatility and reliability",
        "Playing style: Strategic course management over power"
      ],
      achievements: [
        "Improved handicap by 15 strokes in 6 months",
        "Completed 50+ rounds across Hawaiian courses",
        "Member of local golf community group"
      ],
      image: "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: <FaTableTennis />,
      title: "Pickleball Excellence",
      subtitle: "Speed & Agility",
      description: "Pickleball combines the best of tennis, badminton, and ping pong into an incredibly addictive sport. The fast-paced rallies and strategic positioning keep me constantly engaged.",
      details: [
        "Current level: Intermediate (3.5-4.0 rating)",
        "Favorite shot: Third shot drop for court control",
        "Playing frequency: 3-4 times per week",
        "Home courts: Local community center facilities",
        "Specialty: Net play and quick reflexes"
      ],
      achievements: [
        "Won local community tournament doubles division",
        "Improved from beginner to intermediate in 8 months",
        "Regular player in competitive league matches"
      ],
      image: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  const musicSection = {
    title: "Ado - Musical Inspiration",
    subtitle: "The Voice That Fuels My Creativity",
    description: "Ado is absolutely incredible! Her voice is so powerful and unique - she can go from soft, emotional melodies to intense, high-energy vocals that give me chills every time.",
    favoriteSongs: [
      { name: "Usseewa", reason: "The song that introduced me to Ado. The energy is unmatched!" },
      { name: "Show", reason: "Such a powerful and emotional performance that showcases her range" },
      { name: "Gira Gira", reason: "The intensity and vocal control are absolutely incredible" },
      { name: "Odo", reason: "Beautiful melody with amazing vocal technique" },
      { name: "Readymade", reason: "Love the rock influence and raw energy" }
    ],
    impact: "Listening to Ado while coding helps me enter a flow state. Her music has the perfect balance of energy and emotion that keeps me motivated during long programming sessions."
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Passions & Interests</h2>
          <p className="section-subtitle">What drives me beyond the world of code</p>
        </div>

        {/* Music Section */}
        <div className="music-showcase">
          <div className="music-content glass-card">
            <div className="music-header">
              <div className="music-icon">
                <FaHeart />
              </div>
              <div>
                <h3 className="music-title">{musicSection.title}</h3>
                <p className="music-subtitle">{musicSection.subtitle}</p>
              </div>
            </div>
            
            <p className="music-description">{musicSection.description}</p>
            
            <div className="songs-grid">
              {musicSection.favoriteSongs.map((song, index) => (
                <div key={index} className="song-card">
                  <h4 className="song-name">{song.name}</h4>
                  <p className="song-reason">{song.reason}</p>
                </div>
              ))}
            </div>
            
            <div className="music-impact">
              <h4>How Ado Influences My Work</h4>
              <p>{musicSection.impact}</p>
            </div>
          </div>
        </div>

        {/* Sports Section */}
        <div className="sports-grid">
          {sportsData.map((sport, index) => (
            <div key={index} className="sport-card glass-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="sport-image">
                <img src={sport.image} alt={sport.title} />
                <div className="sport-overlay">
                  <div className="sport-icon">
                    {sport.icon}
                  </div>
                </div>
              </div>
              
              <div className="sport-content">
                <h3 className="sport-title">{sport.title}</h3>
                <p className="sport-subtitle">{sport.subtitle}</p>
                <p className="sport-description">{sport.description}</p>
                
                <div className="sport-details">
                  <h4>Current Stats & Preferences</h4>
                  <ul>
                    {sport.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="sport-achievements">
                  <h4><FaTrophy /> Recent Achievements</h4>
                  <ul>
                    {sport.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="passion-summary glass-card">
          <h3>Why These Passions Matter</h3>
          <p>
            Both sports and music provide essential balance to my life as a software engineer. 
            Golf and pickleball get me outdoors and help me stay physically active, while Ado's music 
            fuels my creativity and keeps me energized during coding sessions. The strategic thinking 
            required in sports actually complements my programming work - analyzing situations, 
            planning moves ahead, and adapting to changing conditions.
          </p>
          <p>
            These interests have taught me valuable lessons about patience, persistence, and continuous 
            improvement that I apply directly to my professional development. Just like debugging code 
            or optimizing algorithms, mastering golf, pickleball, and appreciating great music requires 
            consistent practice and learning from every experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;