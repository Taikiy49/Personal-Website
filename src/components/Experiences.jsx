import React from 'react';
import '../styles/Experiences.css';

const Experiences = () => {
  const leftCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'TypeScript', 'R', 'SQL'],
    },
    {
      category: 'Machine Learning & AI',
      skills: ['TensorFlow', 'Scikit-Learn', 'PyTorch', 'NumPy'],
    },
  ];

  const rightCategories = [
    {
      category: 'Web Development',
      skills: ['React.js', 'Next.js', 'Node.js', 'HTML/CSS', 'Tailwind CSS', 'Flask'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Notion', 'MongoDB', 'PostgreSQL'],
    },
  ];

  return (
    <div className="experiences-section">
      <div className="skills-container">
        <div className="skills-column">
          {leftCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <h2>{category.category}</h2>
              <div className="skills-grid">
                {category.skills.map((item, i) => (
                  <div key={i} className="skill-bubble">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-column">
          {rightCategories.map((category, index) => (
            <div key={index} className="skills-category">
              <h2>{category.category}</h2>
              <div className="skills-grid">
                {category.skills.map((item, i) => (
                  <div key={i} className="skill-bubble">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-item">
        <h3>Software Engineer I</h3>
        <p className="location">Geolabs, Inc. · Honolulu, HI · Sep 2024 – Present</p>
        <ul>
          <li>Engineered an AI-powered system to search 8000+ digitized geotechnical reports using OCR, ElasticSearch, and NLP.</li>
          <li>Built a secure MongoDB database with AES encryption to store cleaned data, ensuring compliance with industry standards.</li>
          <li>Developed React.js frontend + Flask backend with async batching and search across 100K+ keywords.</li>
          <li>Integrated Gemini AI API for intelligent natural language search responses.</li>
          <li>Deployed on AWS EC2 (backend) + Netlify (frontend), optimizing scalability and access.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Software Engineer Intern</h3>
        <p className="location">Geolabs, Inc. · Honolulu, HI · Aug 2024 – Sep 2024</p>
        <ul>
          <li>Developed GIS tools using Python + ArcGIS, reducing soil analysis time by ~60%.</li>
          <li>Built React.js + Plotly dashboards for real-time visualization across 200+ projects.</li>
          <li>Created Flask + PostgreSQL REST APIs for managing 10K+ geological records.</li>
          <li>Plotted 300+ pile diagrams on Google Earth, improving field assessments.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Data Science Intern</h3>
        <p className="location">National Science Foundation · Irvine, CA · Jun 2024 – Aug 2024</p>
        <ul>
          <li>Analyzed 400K-participant NIH dataset using Python + SQL, uncovering health trends.</li>
          <li>Built predictive models (Random Forest, GLM, Lasso, AUC) in R for risk forecasting.</li>
          <li>Designed a data pipeline processing 10M+ records, cutting analysis times.</li>
          <li>Presented results in weekly research updates + university symposium poster.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>ICS Grader</h3>
        <p className="location">UC Irvine · Irvine, CA · Oct 2024 – Present</p>
        <ul>
          <li>Graded assignments for ICS 32A, 33; provided detailed feedback to support learning.</li>
          <li>Collaborated with professors in weekly meetings to improve assignment design.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>ICS Learning Assistant</h3>
        <p className="location">UC Irvine · Irvine, CA · Jan 2024 – Jun 2024</p>
        <ul>
          <li>Guided 450 students through advanced Python, OOP, data structures, and algorithms.</li>
          <li>Led workshops on algorithmic problem-solving and debugging.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>CS / Math Tutor</h3>
        <p className="location">Honolulu Tutoring · Honolulu, HI · Jun 2023 – May 2024</p>
        <ul>
          <li>Tutored 20+ students in CS + math topics, including algorithms and calculus.</li>
          <li>Customized lessons to fit student goals and tracked progress.</li>
        </ul>
      </div>

      <h2>Projects</h2>

      <div className="experience-item">
        <h3>MedNav</h3>
        <p>
          <a href="https://github.com/Taikiy49/MedNav" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </p>
        <ul>
          <li>AI medical assistant recommending facilities based on symptoms.</li>
          <li>Backend in Flask with Gemini API, frontend in React.js + Google Maps API.</li>
          <li>Symptom-to-location matching with vector embeddings + contextual search.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>SchedulEase</h3>
        <p>
          <a href="https://github.com/Taikiy49/SchedulEase" target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
        </p>
        <ul>
          <li>AI-driven scheduling app using ML for optimized planning.</li>
          <li>Python backend with TensorFlow, React.js frontend with Google Calendar API.</li>
          <li>Adaptive schedule adjustments using temporal pattern analysis.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
