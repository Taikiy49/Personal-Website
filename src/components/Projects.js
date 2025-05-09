import React from 'react';
import '../styles/Projects.css';

const SoftwareEngineer = () => {
  return (
    <div className="software-engineer-section">
      <h1>Software Engineer</h1>
      <p>My journey in software engineering, including education, skills, and projects.</p>

      <h2>Education</h2>
      <p><strong>B.S. in Computer Science</strong><br />
      University of California, Irvine, 2022 – 2026</p>
      <p>
        Studying algorithms, data structures, software engineering, and artificial intelligence.
        Currently maintaining a 3.7+ GPA with a focus on machine learning and software systems.
      </p>

      <h2>Work Experience</h2>
      <p><strong>Software Engineer Intern</strong><br />
      Geolabs, Inc., June 2024 – September 2024</p>
      <p>
        Developed AI-powered tools to accelerate engineering workflows, optimized backend systems using Python and Flask, and improved data searchability across 8,000+ technical reports.
      </p>

      <h2>Skills</h2>
      <p><strong>Programming Languages</strong><br />
      Python, C/C++, JavaScript, TypeScript, Java, SQL</p>

      <p><strong>Web Development</strong><br />
      React, Flask, Node.js, HTML/CSS, Tailwind CSS</p>

      <p><strong>Machine Learning & AI</strong><br />
      TensorFlow, Scikit-Learn, PyTorch, NumPy, Pandas</p>

      <p><strong>Tools & Technologies</strong><br />
      Git, Docker, AWS, Linux, MongoDB, Notion</p>

      <h2>Projects</h2>
      <p><strong>Cura AI</strong><br />
      Python, Flask, Gemini API</p>
      <p>
        A synergistic medical assistance platform integrating generative AI to improve patient support.
        <br /><a href="https://github.com/yourusername/cura-ai" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>

      <p><strong>ScheduleEase</strong><br />
      React, DynamoDB, Machine Learning</p>
      <p>
        An intelligent schedule maker that optimizes time management for students and professionals.
        <br /><a href="https://github.com/yourusername/scheduleease" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>

      <p><strong>Personal Website</strong><br />
      React, Tailwind CSS, AWS</p>
      <p>
        A responsive portfolio website showcasing projects, skills, and personal achievements.
        <br /><a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </p>
    </div>
  );
};

export default SoftwareEngineer;
