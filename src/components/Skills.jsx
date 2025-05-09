import '../styles/Skills.css';
import React from 'react';
import { FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGit, FaDocker, FaLinux, FaAws, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiR, SiMongodb, SiPostgresql, SiTensorflow, SiPytorch, SiFlask, SiNextdotjs, SiTailwindcss, SiScikitlearn, SiNumpy, SiNotion } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { label: 'Python', icon: <FaPython size={30} /> },
        { label: 'C/C++', icon: <SiCplusplus size={30} /> },
        { label: 'Java', icon: <FaJava size={30} /> },
        { label: 'JavaScript', icon: <FaJs size={30} /> },
        { label: 'TypeScript', icon: <SiTypescript size={30} /> },
        { label: 'R', icon: <SiR size={30} /> },
        { label: 'SQL', icon: <FaDatabase size={30} /> },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { label: 'React.js', icon: <FaReact size={30} /> },
        { label: 'Next.js', icon: <SiNextdotjs size={30} /> },
        { label: 'Node.js', icon: <FaNodeJs size={30} /> },
        { label: 'HTML/CSS', icon: <FaHtml5 size={30} /> },
        { label: 'Tailwind CSS', icon: <SiTailwindcss size={30} /> },
        { label: 'Flask', icon: <SiFlask size={30} /> },
      ],
    },
    {
      category: 'Machine Learning & AI',
      skills: [
        { label: 'TensorFlow', icon: <SiTensorflow size={30} /> },
        { label: 'Scikit-Learn', icon: <SiScikitlearn size={30} /> },
        { label: 'PyTorch', icon: <SiPytorch size={30} /> },
        { label: 'NumPy', icon: <SiNumpy size={30} /> },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { label: 'Git', icon: <FaGit size={30} /> },
        { label: 'Docker', icon: <FaDocker size={30} /> },
        { label: 'AWS', icon: <FaAws size={30} /> },
        { label: 'Linux', icon: <FaLinux size={30} /> },
        { label: 'Notion', icon: <SiNotion size={30} /> },
        { label: 'MongoDB', icon: <SiMongodb size={30} /> },
        { label: 'PostgreSQL', icon: <SiPostgresql size={30} /> },
      ],
    },
  ];

  return (
    <div className="skills-container">
      {skillCategories.map((category, index) => (
        <div key={index} className="skills-category">
          <h2>{category.category}</h2>
          <div className="skills-grid">
            {category.skills.map((item, i) => (
              <div key={i} className="skill-card">
                {item.icon}
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
