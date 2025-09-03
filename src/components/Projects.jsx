import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="sports-section">
      <h1>Sports & Recreation</h1>
      
      <div className="sport-section">
        <h2>Golf ⛳</h2>
        <p>
          Golf has become one of my greatest passions. There's something incredibly satisfying about the 
          precision and mental focus required for each shot. I love how golf challenges both your physical 
          technique and mental strategy - every round is a new puzzle to solve.
        </p>
        <p>
          Living in Hawaii, I'm fortunate to have access to some of the most beautiful courses in the world. 
          Whether it's an early morning round watching the sunrise over the Pacific or a weekend game with 
          friends, golf provides the perfect balance to my tech-focused work life.
        </p>
        <p>
          <strong>Current Handicap:</strong> Working on breaking 90 consistently<br />
          <strong>Favorite Course:</strong> Ala Wai Golf Course<br />
          <strong>Best Round:</strong> 87 at Kahuku Golf Course
        </p>
      </div>

      <div className="sport-section">
        <h2>Pickleball 🏓</h2>
        <p>
          Pickleball has quickly become my favorite racquet sport! I love how it combines elements of 
          tennis, badminton, and ping pong into something uniquely fun and accessible. The fast-paced 
          rallies and strategic positioning keep me engaged and constantly improving.
        </p>
        <p>
          What I enjoy most about pickleball is the community aspect - it's easy to jump into games 
          with people of all skill levels, and everyone is usually welcoming and encouraging. The sport 
          has taught me patience, quick decision-making, and the importance of positioning over power.
        </p>
        <p>
          <strong>Playing Level:</strong> Intermediate (3.5-4.0)<br />
          <strong>Favorite Shot:</strong> Third shot drop<br />
          <strong>Home Court:</strong> Local community center courts
        </p>
      </div>

      <div className="sport-section">
        <h2>Why Sports Matter to Me</h2>
        <p>
          Both golf and pickleball provide essential balance to my life as a software engineer. 
          They get me outdoors, help me stay physically active, and offer a mental break from screens 
          and code. The strategic thinking required in both sports actually complements my programming 
          work - analyzing situations, planning moves ahead, and adapting to changing conditions.
        </p>
        <p>
          These sports have also taught me valuable lessons about patience, persistence, and continuous 
          improvement that I apply to my professional development. Just like debugging code or optimizing 
          algorithms, getting better at golf and pickleball requires consistent practice and learning from mistakes.
        </p>
      </div>
    </div>
  );
};

export default Projects;
