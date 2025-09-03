import React, { useState } from 'react';
import { FaCoffee, FaCode, FaMusic, FaGolfBall, FaPlane, FaHeart, FaLaugh, FaStar } from 'react-icons/fa';
import '../styles/FunFacts.css';

const FunFacts = () => {
  const [activeTab, setActiveTab] = useState('quirky');

  const funFacts = {
    quirky: [
      {
        icon: <FaMusic />,
        fact: "I've listened to Ado's 'Usseewa' over 500 times",
        detail: "It's my go-to song for debugging complex algorithms. Something about her powerful vocals helps me focus!"
      },
      {
        icon: <FaCoffee />,
        fact: "I drink way too much matcha",
        detail: "Probably 3-4 cups a day. It's my Japanese heritage meeting my coding addiction."
      },
      {
        icon: <FaCode />,
        fact: "I dream in Python syntax",
        detail: "Seriously, I've woken up with solutions to coding problems. My brain never stops debugging."
      },
      {
        icon: <FaGolfBall />,
        fact: "I practice golf swings during code compilation",
        detail: "Those 30-second build times are perfect for working on my form. Efficiency at its finest!"
      },
      {
        icon: <FaPlane />,
        fact: "I've been to Japan 8+ times but still get lost in Tokyo",
        detail: "You'd think I'd know my way around by now, but Tokyo's train system still confuses me sometimes."
      }
    ],
    personal: [
      {
        icon: <FaHeart />,
        fact: "Born and raised in Hawaii",
        detail: "Island life shaped my laid-back approach to problem-solving and love for outdoor activities."
      },
      {
        icon: <FaStar />,
        fact: "Fluent in Japanese",
        detail: "Thanks to my Japanese parents, I can code-switch between languages as easily as programming languages."
      },
      {
        icon: <FaMusic />,
        fact: "Ado's music is my coding soundtrack",
        detail: "Her emotional range matches the ups and downs of debugging. From frustration to triumph!"
      },
      {
        icon: <FaGolfBall />,
        fact: "Golf taught me patience for debugging",
        detail: "Both require precision, strategy, and the ability to bounce back from bad shots (or bugs)."
      },
      {
        icon: <FaCode />,
        fact: "I name my variables after golf terms",
        detail: "Variables like 'fairwayData', 'holeInOne', and 'roughEdges' make coding more fun for me."
      }
    ],
    achievements: [
      {
        icon: <FaStar />,
        fact: "Dean's Honor List while working full-time",
        detail: "Balancing a 3.8 GPA at UC Irvine with building enterprise software at Geolabs."
      },
      {
        icon: <FaCode />,
        fact: "Built AI system processing 8K+ reports",
        detail: "The Geolabs platform revolutionized how engineers access decades of project data."
      },
      {
        icon: <FaGolfBall />,
        fact: "Shot under 90 three times this year",
        detail: "Each round under 90 feels like successfully deploying code to production - pure joy!"
      },
      {
        icon: <FaMusic />,
        fact: "Can identify any Ado song in 3 seconds",
        detail: "Her unique vocal style is as recognizable to me as different programming languages."
      },
      {
        icon: <FaPlane />,
        fact: "Visited 12 different Hawaiian golf courses",
        detail: "Combining my love for golf with exploring my home state's beautiful courses."
      }
    ]
  };

  const tabs = [
    { key: 'quirky', label: 'Quirky Facts', icon: <FaLaugh /> },
    { key: 'personal', label: 'Personal', icon: <FaHeart /> },
    { key: 'achievements', label: 'Achievements', icon: <FaStar /> }
  ];

  return (
    <section id="fun-facts" className="fun-facts-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Fun Facts About Me</h2>
          <p className="section-subtitle">The quirky, personal side behind the code</p>
        </div>

        <div className="facts-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="facts-content">
          <div className="facts-grid">
            {funFacts[activeTab].map((item, index) => (
              <div 
                key={index} 
                className="fact-card cyber-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="fact-icon">
                  {item.icon}
                </div>
                <div className="fact-content">
                  <h4 className="fact-title">{item.fact}</h4>
                  <p className="fact-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="motto-section cyber-card">
          <h3 className="motto-title">My Motto</h3>
          <blockquote className="motto-quote">
            "Code with passion, golf with patience, and always keep Ado playing in the background."
          </blockquote>
          <p className="motto-explanation">
            This perfectly captures my approach to life: bringing enthusiasm to my work, 
            staying calm under pressure, and finding inspiration in the things I love most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;