import React from 'react';
import '../styles/Background.css';

const Background = () => {
  return (
    <div className="background-section">
      <div className="background-content">
        <h1>My Passions</h1>
        
        <div className="passion-section">
          <h2>Japanese Culture & Language</h2>
          <p>
            Growing up in Hawaii with Japanese heritage, I've always felt a deep connection to Japanese culture. 
            I'm constantly working to improve my Japanese language skills and stay connected to my roots. 
            The attention to detail, respect for craftsmanship, and pursuit of excellence in Japanese culture 
            deeply influences how I approach both my personal and professional life.
          </p>
        </div>

        <div className="passion-section">
          <h2>Technology & Innovation</h2>
          <p>
            What started as childhood curiosity about how things work has evolved into a genuine passion 
            for building meaningful technology. I love the problem-solving aspect of programming and the 
            satisfaction of creating tools that make people's lives easier. Whether it's AI systems, 
            web applications, or data analysis tools, I'm driven by the potential to make a positive impact.
          </p>
        </div>

        <div className="passion-section">
          <h2>Learning & Teaching</h2>
          <p>
            Teaching and mentoring others has become one of my greatest joys. As a learning assistant and 
            tutor, I've discovered that explaining complex concepts to others not only helps them grow but 
            also deepens my own understanding. I believe in making computer science accessible and enjoyable 
            for everyone, regardless of their background.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;