import React from 'react';
import { FaCode, FaBook, FaMusic, FaGolfBall, FaPlane, FaGraduationCap } from 'react-icons/fa';
import '../styles/NowPage.css';

const NowPage = () => {
  const currentActivities = [
    {
      icon: <FaCode />,
      title: "Building Geolabs Platform",
      description: "Architecting the next-generation AI-powered document management system with Microsoft SSO integration and OCR capabilities",
      status: "In Progress",
      priority: "high"
    },
    {
      icon: <FaGraduationCap />,
      title: "Finishing CS Degree",
      description: "Final year at UC Irvine, maintaining Dean's Honor List status while working full-time",
      status: "Spring 2025",
      priority: "high"
    },
    {
      icon: <FaGolfBall />,
      title: "Breaking 85 in Golf",
      description: "Currently shooting in the high 80s, working with a coach to improve my short game and course management",
      status: "Ongoing",
      priority: "medium"
    },
    {
      icon: <FaMusic />,
      title: "Following Ado's New Releases",
      description: "Staying updated with Ado's latest music and analyzing her vocal techniques for inspiration during coding sessions",
      status: "Always",
      priority: "medium"
    },
    {
      icon: <FaPlane />,
      title: "Planning Japan Trip",
      description: "Organizing summer 2025 trip to visit family and explore new regions of Japan, focusing on tech hubs and cultural sites",
      status: "Planning",
      priority: "medium"
    },
    {
      icon: <FaBook />,
      title: "Learning Advanced AI",
      description: "Deep diving into transformer architectures and large language models to enhance the Geolabs AI search capabilities",
      status: "Learning",
      priority: "high"
    }
  ];

  const currentReads = [
    "Clean Architecture by Robert C. Martin",
    "Designing Data-Intensive Applications by Martin Kleppmann",
    "The Pragmatic Programmer by David Thomas"
  ];

  const currentMusic = [
    "Ado - Show (on repeat during coding)",
    "Ado - Usseewa (for high-energy debugging)",
    "Ado - Gira Gira (motivation for tough problems)"
  ];

  const currentTools = [
    "VS Code with Vim extension",
    "React.js + TypeScript",
    "Python + Flask for backends",
    "AWS S3 for cloud storage",
    "Microsoft Graph API"
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ff6b9d';
      case 'medium': return '#00d4ff';
      case 'low': return '#00ff88';
      default: return '#00d4ff';
    }
  };

  return (
    <section id="now" className="now-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What I'm Up To Now</h2>
          <p className="section-subtitle">Current projects, goals, and interests • Updated December 2024</p>
          <div className="now-inspiration">
            <p>Inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer">nownownow.com</a></p>
          </div>
        </div>

        <div className="now-content">
          <div className="current-activities">
            <h3 className="subsection-title">Current Focus</h3>
            <div className="activities-grid">
              {currentActivities.map((activity, index) => (
                <div 
                  key={index} 
                  className="activity-card cyber-card"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--priority-color': getPriorityColor(activity.priority)
                  }}
                >
                  <div className="activity-header">
                    <div className="activity-icon" style={{ background: `linear-gradient(45deg, ${getPriorityColor(activity.priority)}, ${getPriorityColor(activity.priority)}aa)` }}>
                      {activity.icon}
                    </div>
                    <div className="activity-info">
                      <h4 className="activity-title">{activity.title}</h4>
                      <span className="activity-status" style={{ color: getPriorityColor(activity.priority) }}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                  <p className="activity-description">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="current-interests">
            <div className="interests-grid">
              <div className="interest-category cyber-card">
                <h4 className="category-title">
                  <FaBook /> Currently Reading
                </h4>
                <ul className="interest-list">
                  {currentReads.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="interest-category cyber-card">
                <h4 className="category-title">
                  <FaMusic /> On Repeat
                </h4>
                <ul className="interest-list">
                  {currentMusic.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="interest-category cyber-card">
                <h4 className="category-title">
                  <FaCode /> Favorite Tools
                </h4>
                <ul className="interest-list">
                  {currentTools.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="now-quote cyber-card">
            <blockquote>
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </blockquote>
            <p className="quote-context">
              This quote drives my approach to both coding and life - whether it's learning a new technology, 
              improving my golf game, or building the next feature for Geolabs. There's no perfect time to start, 
              so I start now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowPage;