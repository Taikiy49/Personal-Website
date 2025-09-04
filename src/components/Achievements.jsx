      import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaAward, FaGraduationCap, FaCode } from 'react-icons/fa';
import '../styles/Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: "Dean's Honor List",
      subtitle: "UC Irvine",
      description: "Recognized for academic excellence with GPA above 3.5",
      year: "2023-2024",
      category: "academic"
    },
    {
      icon: <FaCode />,
      title: "AI System Architecture",
      subtitle: "Geolabs Innovation",
      description: "Designed revolutionary AI search system processing 8K+ engineering reports",
      year: "2024",
      category: "professional"
    },
    {
      icon: <FaTrophy />,
      title: "Research Symposium Presenter",
      subtitle: "NSF Research",
      description: "Presented health data analysis to university research community",
      year: "2024",
      category: "research"
    },
    {
      icon: <FaMedal />,
      title: "Student Mentor Excellence",
      subtitle: "450+ Students Guided",
      description: "Successfully mentored hundreds of CS students through complex algorithms",
      year: "2024",
      category: "education"
    },
    {
      icon: <FaStar />,
      title: "Hackathon Participant",
      subtitle: "LA Hacks & Irvine Hacks",
      description: "Built innovative solutions under pressure at major hackathon events",
      year: "2023-2024",
      category: "competition"
    },
    {
      icon: <FaAward />,
      title: "Open Source Contributor",
      subtitle: "GitHub Projects",
      description: "Active contributor to open source projects with 50+ repositories",
      year: "Ongoing",
      category: "community"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      academic: '#00d4ff',
      professional: '#0099cc',
      research: '#ff6b9d',
      education: '#00ff88',
      competition: '#ffaa00',
      community: '#aa00ff'
    };
    return colors[category] || '#00d4ff';
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Recognition</h2>
          <p className="section-subtitle">Milestones in my journey of innovation and excellence</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="achievement-card cyber-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--category-color': getCategoryColor(achievement.category)
              }}
            >
              <div className="achievement-icon" style={{ background: `linear-gradient(45deg, ${getCategoryColor(achievement.category)}, ${getCategoryColor(achievement.category)}aa)` }}>
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <div className="achievement-year">{achievement.year}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-subtitle">{achievement.subtitle}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
              <div className="achievement-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;