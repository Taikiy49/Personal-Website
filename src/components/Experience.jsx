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
      description: "Architecting and developing the comprehensive Geolabs Software Platform - an all-in-one web application that centralizes company knowledge, project data, reports, and tools into a single interface for enhanced productivity.",
      achievements: [
        "Architected comprehensive Geolabs Software Platform integrating AI assistance, database management, file storage, and inventory tracking",
        "Implemented secure Microsoft SSO authentication with role-based permissions (Owner, Admin, User) for enterprise security",
        "Built intelligent 'Ask AI' feature allowing employees to query company documents in plain English using advanced NLP",
        "Developed OCR Lookup system converting scanned reports into searchable text, making legacy documents instantly accessible",
        "Created S3 cloud storage integration for seamless project file management with upload/download capabilities",
        "Designed Core Box Inventory system tracking physical drilling materials, locations, and status in real-time",
        "Built comprehensive database viewer and editor tools for admins to manage company data efficiently",
        "Integrated company-wide contacts directory with advanced search functionality across departments and roles",
        "Reduced information retrieval time from hours to seconds, eliminating need to search through multiple systems"
      ],
      technologies: ["React.js", "Python", "Flask", "Microsoft SSO", "AWS S3", "OCR", "AI/NLP", "Database Management", "Cloud Storage"],
      impact: "Revolutionized daily workflows by centralizing all company resources into one intelligent platform"
    },
    {
      title: "Software Engineer Intern",
      company: "Geolabs, Inc.",
      location: "Honolulu, HI",
      period: "Jun 2024 – Aug 2024",
      type: "internship",
      description: "Developed foundational components and features for the Geolabs Software Platform, gaining hands-on experience in full-stack development and enterprise software architecture.",
      achievements: [
        "Built initial prototypes for the AI-powered document search system using Python and Flask",
        "Developed user authentication flow integration with Microsoft SSO for secure access",
        "Created database schema designs and implemented CRUD operations for project management",
        "Designed responsive frontend components using React.js for optimal user experience",
        "Implemented file upload and storage functionality connecting to AWS S3 services",
        "Collaborated with senior engineers to establish coding standards and development workflows",
        "Conducted testing and debugging of core platform features ensuring reliability",
        "Documented technical specifications and user workflows for future development phases"
      ],
      technologies: ["React.js", "Python", "Flask", "JavaScript", "AWS S3", "Microsoft SSO", "Database Design", "REST APIs"],
      impact: "Laid the technical foundation for what would become the comprehensive Geolabs Software Platform"
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
      case 'internship': return <FaBriefcase />;
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
          <div className="experience-hero-image">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional experience" />
          </div>
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