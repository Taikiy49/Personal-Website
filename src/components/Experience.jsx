import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaRocket, FaDatabase, FaChartLine } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer & IT Associate",
      company: "Geolabs, Inc.",
      location: "Honolulu, HI",
      period: "Sep 2024 – Present",
      type: "current",
      description: "Leading AI innovation in geotechnical engineering, transforming how engineers access critical project data through cutting-edge technology solutions.",
      achievements: [
        "Engineered AI-powered search system processing 8,000+ digitized geotechnical reports using advanced OCR and NLP",
        "Designed secure MongoDB database with AES-256 encryption ensuring compliance with industry data protection standards",
        "Built responsive React.js frontend with Flask backend featuring async file batching for optimal performance",
        "Integrated Google's Gemini AI API for intelligent natural language search responses and data interpretation",
        "Deployed scalable solution using AWS EC2 and Netlify, optimizing for reliability and global accessibility",
        "Reduced report search time from hours to seconds, enabling faster engineering decisions and project timelines",
        "Implemented ElasticSearch indexing across 100K+ keywords and technical phrases for precision search results",
        "Developed automated data cleaning pipeline processing millions of engineering records with 99.5% accuracy"
      ],
      technologies: ["Python", "React.js", "Flask", "MongoDB", "AWS EC2", "Google Gemini AI", "ElasticSearch", "OCR", "AES Encryption"],
      impact: "Revolutionized geotechnical data access for engineering teams worldwide"
    },
    {
      title: "Data Science Intern",
      company: "National Science Foundation",
      location: "Irvine, CA",
      period: "Jun 2024 – Aug 2024",
      type: "research",
      description: "Conducted advanced statistical analysis on large-scale health datasets, developing predictive models for chronic disease research.",
      achievements: [
        "Analyzed comprehensive NIH dataset with 400,000+ participants using advanced Python and SQL techniques",
        "Built sophisticated predictive models (Random Forest, GLM, Lasso) achieving high accuracy (AUC > 0.85) for disease risk assessment",
        "Designed automated data pipeline handling 10+ million health records with optimized processing algorithms",
        "Collaborated with health experts to ensure statistical rigor and clinical relevance of findings",
        "Presented research findings at university symposium, receiving recognition for innovative analytical approaches",
        "Performed comprehensive statistical testing ensuring reproducibility and reliability of research conclusions",
        "Developed interactive R visualizations for complex health trend analysis and pattern recognition"
      ],
      technologies: ["Python", "R", "SQL", "TensorFlow", "Scikit-Learn", "Statistical Modeling", "Data Visualization", "NIH Datasets"],
      impact: "Contributed to groundbreaking health research with potential to improve chronic disease prevention"
    },
    {
      title: "ICS Grader",
      company: "UC Irvine - Donald Bren School",
      location: "Irvine, CA",
      period: "Oct 2024 – Present",
      type: "education",
      description: "Supporting computer science education through detailed assessment and mentorship of programming assignments.",
      achievements: [
        "Grade programming assignments for 150+ students across ICS 32A and ICS 33 courses",
        "Provide comprehensive feedback on code quality, algorithm efficiency, and programming best practices",
        "Conduct weekly 30-minute meetings with professors to discuss assignment structures and student progress",
        "Identify common programming challenges and develop targeted solutions for student success",
        "Maintain detailed grading rubrics ensuring fair and consistent evaluation across all submissions",
        "Help students understand complex programming concepts through personalized feedback and guidance"
      ],
      technologies: ["Python", "Java", "Code Review", "Educational Technology", "Algorithm Analysis"],
      impact: "Enhanced learning experience for hundreds of computer science students"
    },
    {
      title: "ICS Learning Assistant",
      company: "UC Irvine - Donald Bren School",
      location: "Irvine, CA",
      period: "Jan 2024 – Jun 2024",
      type: "education",
      description: "Mentored students through challenging computer science concepts, focusing on algorithmic thinking and problem-solving strategies.",
      achievements: [
        "Guided 450+ students through complex CS topics including data structures, algorithms, and object-oriented programming",
        "Led interactive workshops on algorithmic problem-solving strategies and software development best practices",
        "Provided personalized tutoring sessions adapted to different learning styles and skill levels",
        "Developed supplementary educational materials that improved student success rates by 25%",
        "Facilitated study groups for challenging topics like dynamic programming and graph algorithms",
        "Collaborated with faculty to identify curriculum improvements and student support opportunities"
      ],
      technologies: ["Python", "Data Structures", "Algorithms", "Teaching", "Workshop Design", "Curriculum Development"],
      impact: "Significantly improved student understanding and success in foundational CS courses"
    },
    {
      title: "Computer Science / Mathematics Tutor",
      company: "Honolulu Tutoring",
      location: "Honolulu, HI",
      period: "Jun 2023 – May 2024",
      type: "tutoring",
      description: "Provided personalized tutoring in computer science and mathematics, helping students achieve academic excellence.",
      achievements: [
        "Tutored 20+ students in advanced topics including data structures, algorithms, and object-oriented programming",
        "Taught mathematics subjects ranging from algebra and calculus to discrete mathematics and statistics",
        "Customized lesson plans based on individual learning goals and academic requirements",
        "Adapted teaching strategies through ongoing progress tracking and performance assessment",
        "Achieved 95% student satisfaction rate with significant grade improvements across all subjects",
        "Developed innovative teaching methods combining visual learning with hands-on coding practice"
      ],
      technologies: ["Python", "Java", "Mathematics", "Algorithm Design", "Educational Technology"],
      impact: "Helped students achieve academic success and develop strong problem-solving skills"
    }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'current': return <FaRocket />;
      case 'research': return <FaChartLine />;
      case 'education': return <FaDatabase />;
      default: return <FaBriefcase />;
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">Building the future through technology and innovation</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-marker">
                {getTypeIcon(exp.type)}
              </div>
              <div className="timeline-content cyber-card">
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
                
                <div className="impact-badge">
                  <span>Impact: {exp.impact}</span>
                </div>
                
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