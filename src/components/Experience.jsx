import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer I",
      company: "Geolabs, Inc.",
      location: "Honolulu, HI",
      period: "Sep 2024 – Present",
      description: "Leading AI innovation in geotechnical engineering, transforming how engineers access critical project data.",
      achievements: [
        "Engineered AI-powered search system processing 8,000+ digitized geotechnical reports",
        "Designed secure MongoDB database with AES-256 encryption for industry compliance",
        "Built responsive React.js frontend with Flask backend featuring async batching",
        "Integrated Google's Gemini AI for intelligent natural language search responses",
        "Deployed scalable solution using AWS EC2 and Netlify for global accessibility",
        "Reduced report search time from hours to seconds, enabling faster engineering decisions"
      ],
      technologies: ["Python", "React.js", "Flask", "MongoDB", "AWS", "Google AI", "ElasticSearch"]
    },
    {
      title: "Software Engineer Intern",
      company: "Geolabs, Inc.",
      location: "Honolulu, HI",
      period: "Aug 2024 – Sep 2024",
      description: "Developed innovative GIS tools and data visualization solutions for engineering workflows.",
      achievements: [
        "Created sophisticated GIS analysis tools reducing processing time by 60%",
        "Built interactive React.js dashboards with Plotly for real-time data visualization",
        "Designed RESTful APIs using Flask and PostgreSQL for 10,000+ geological records",
        "Plotted 300+ pile foundation diagrams on Google Earth for improved field assessment",
        "Streamlined processes enabling 40% more project capacity with same resources"
      ],
      technologies: ["Python", "React.js", "ArcGIS", "PostgreSQL", "Flask", "Plotly", "Google Earth"]
    },
    {
      title: "Data Science Intern",
      company: "National Science Foundation",
      location: "Irvine, CA",
      period: "Jun 2024 – Aug 2024",
      description: "Conducted advanced statistical analysis on large-scale health datasets for public health research.",
      achievements: [
        "Analyzed NIH dataset with 400,000+ participants using Python and SQL",
        "Developed predictive models achieving high accuracy (AUC > 0.85) for disease risk",
        "Designed automated data pipeline handling 10+ million records",
        "Presented findings at university research symposium",
        "Performed rigorous statistical testing for research reliability"
      ],
      technologies: ["Python", "R", "SQL", "Machine Learning", "Statistical Analysis", "Data Visualization"]
    },
    {
      title: "ICS Grader",
      company: "UC Irvine",
      location: "Irvine, CA",
      period: "Oct 2024 – Present",
      description: "Supporting computer science education through detailed assessment and feedback.",
      achievements: [
        "Grade programming assignments for 150+ students in ICS 32A and ICS 33",
        "Provide comprehensive feedback on code quality and best practices",
        "Collaborate with professors to improve teaching strategies",
        "Help students understand programming concepts and problem-solving approaches"
      ],
      technologies: ["Python", "Java", "Code Review", "Educational Technology"]
    },
    {
      title: "ICS Learning Assistant",
      company: "UC Irvine",
      location: "Irvine, CA",
      period: "Jan 2024 – Jun 2024",
      description: "Mentored students through challenging computer science concepts and algorithmic thinking.",
      achievements: [
        "Guided 450+ students through complex CS topics and data structures",
        "Led interactive workshops on algorithmic problem-solving strategies",
        "Provided personalized tutoring adapted to different learning styles",
        "Developed supplementary materials improving student success rates"
      ],
      technologies: ["Python", "Algorithms", "Data Structures", "Teaching", "Workshop Design"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My journey in technology and innovation</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content glass-card">
                <div className="experience-header">
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <div className="job-meta">
                      <span className="location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                      <span className="period">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="job-description">{exp.description}</p>
                
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                
                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;