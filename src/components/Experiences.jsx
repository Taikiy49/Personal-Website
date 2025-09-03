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
        <p className="role-description">
          Leading the development of cutting-edge AI solutions for the geotechnical engineering industry, 
          transforming how engineers access and analyze critical project data.
        </p>
        <ul>
          <li><strong>AI Search System:</strong> Engineered a comprehensive AI-powered search system that processes 8,000+ digitized geotechnical reports using advanced OCR, ElasticSearch, and natural language processing techniques.</li>
          <li><strong>Database Architecture:</strong> Designed and implemented a secure MongoDB database with AES-256 encryption to store cleaned data, ensuring full compliance with industry security standards and data protection regulations.</li>
          <li><strong>Full-Stack Development:</strong> Built a responsive React.js frontend paired with a robust Flask backend featuring async batching capabilities, enabling lightning-fast search across 100,000+ technical keywords.</li>
          <li><strong>AI Integration:</strong> Successfully integrated Google's Gemini AI API to provide intelligent, context-aware natural language search responses that understand engineering terminology and concepts.</li>
          <li><strong>Cloud Deployment:</strong> Architected and deployed the complete solution using AWS EC2 for backend services and Netlify for frontend hosting, optimizing for scalability, performance, and global accessibility.</li>
          <li><strong>Impact:</strong> Reduced report search time from hours to seconds, enabling engineers to make faster, more informed decisions on critical infrastructure projects.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Software Engineer Intern</h3>
        <p className="location">Geolabs, Inc. · Honolulu, HI · Aug 2024 – Sep 2024</p>
        <p className="role-description">
          Developed innovative GIS tools and data visualization solutions that revolutionized soil analysis 
          workflows for engineering teams across Hawaii.
        </p>
        <ul>
          <li><strong>GIS Tool Development:</strong> Created sophisticated GIS analysis tools using Python and ArcGIS that automated complex soil analysis workflows, reducing processing time by approximately 60% and eliminating manual calculation errors.</li>
          <li><strong>Data Visualization:</strong> Built interactive React.js dashboards integrated with Plotly for real-time data visualization, providing engineers with instant insights across 200+ active construction projects.</li>
          <li><strong>API Development:</strong> Designed and implemented RESTful APIs using Flask and PostgreSQL to efficiently manage and query 10,000+ geological records with optimized database indexing and caching strategies.</li>
          <li><strong>Geospatial Mapping:</strong> Plotted and visualized 300+ pile foundation diagrams on Google Earth, significantly improving field assessment accuracy and project planning capabilities.</li>
          <li><strong>Process Optimization:</strong> Streamlined data collection and analysis processes, enabling the engineering team to handle 40% more projects with the same resources.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Data Science Intern</h3>
        <p className="location">National Science Foundation · Irvine, CA · Jun 2024 – Aug 2024</p>
        <p className="role-description">
          Conducted advanced statistical analysis on large-scale health datasets to uncover critical 
          public health trends and develop predictive models for disease risk assessment.
        </p>
        <ul>
          <li><strong>Large-Scale Data Analysis:</strong> Analyzed a comprehensive NIH dataset containing health information from 400,000+ participants using advanced Python libraries and SQL queries to identify significant health trends and correlations.</li>
          <li><strong>Machine Learning Models:</strong> Developed and validated multiple predictive models including Random Forest, Generalized Linear Models, and Lasso regression in R, achieving high accuracy (AUC > 0.85) for disease risk forecasting.</li>
          <li><strong>Data Pipeline Engineering:</strong> Designed and implemented an automated data processing pipeline capable of handling 10+ million records, reducing analysis time from days to hours while maintaining data integrity.</li>
          <li><strong>Research Communication:</strong> Presented findings in weekly research team meetings and created a comprehensive poster presentation for the university research symposium, effectively communicating complex statistical results to diverse audiences.</li>
          <li><strong>Statistical Validation:</strong> Performed rigorous statistical testing and cross-validation to ensure model reliability and reproducibility of research findings.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>ICS Grader</h3>
        <p className="location">UC Irvine · Irvine, CA · Oct 2024 – Present</p>
        <p className="role-description">
          Supporting computer science education by providing detailed feedback and assessment for 
          foundational programming courses.
        </p>
        <ul>
          <li><strong>Assignment Evaluation:</strong> Grade programming assignments for ICS 32A (Programming with Software Libraries) and ICS 33 (Intermediate Programming), providing comprehensive feedback on code quality, logic, and best practices to 150+ students.</li>
          <li><strong>Educational Collaboration:</strong> Work closely with professors in weekly meetings to analyze student performance patterns, suggest improvements to assignment design, and develop more effective teaching strategies.</li>
          <li><strong>Student Support:</strong> Provide detailed, constructive feedback that helps students understand not just what went wrong, but how to improve their programming approach and problem-solving skills.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>ICS Learning Assistant</h3>
        <p className="location">UC Irvine · Irvine, CA · Jan 2024 – Jun 2024</p>
        <p className="role-description">
          Mentored hundreds of students through challenging computer science concepts, fostering 
          a supportive learning environment for algorithmic thinking and programming mastery.
        </p>
        <ul>
          <li><strong>Large-Scale Mentoring:</strong> Guided 450+ students through complex computer science topics including advanced Python programming, object-oriented programming principles, data structures, and algorithm design and analysis.</li>
          <li><strong>Workshop Leadership:</strong> Designed and led interactive workshops focused on algorithmic problem-solving strategies, debugging techniques, and code optimization, helping students develop critical thinking skills for technical challenges.</li>
          <li><strong>Personalized Support:</strong> Provided one-on-one tutoring sessions to help struggling students overcome specific challenges, adapting teaching methods to different learning styles and backgrounds.</li>
          <li><strong>Curriculum Development:</strong> Collaborated with faculty to develop supplementary learning materials and practice problems that reinforced key concepts and improved student success rates.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>CS / Math Tutor</h3>
        <p className="location">Honolulu Tutoring · Honolulu, HI · Jun 2023 – May 2024</p>
        <p className="role-description">
          Provided personalized tutoring in computer science and mathematics, helping students 
          build confidence and achieve academic success through customized learning approaches.
        </p>
        <ul>
          <li><strong>Personalized Education:</strong> Tutored 20+ students across diverse computer science and mathematics topics including algorithms, data structures, calculus, linear algebra, and discrete mathematics, adapting teaching methods to each student's learning style.</li>
          <li><strong>Curriculum Customization:</strong> Developed individualized lesson plans tailored to each student's specific goals, whether preparing for exams, improving grades, or building foundational understanding for advanced coursework.</li>
          <li><strong>Progress Tracking:</strong> Implemented systematic progress tracking and assessment methods to monitor student improvement, adjust teaching strategies, and ensure consistent academic growth.</li>
          <li><strong>Student Success:</strong> Achieved a 95% student satisfaction rate with measurable improvements in grades and confidence levels across all tutored subjects.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
