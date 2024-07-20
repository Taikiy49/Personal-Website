import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(0);
  const [titleDone, setTitleDone] = useState(false);
  const [subtitleDone, setSubtitleDone] = useState(false);
  const [descriptionDone, setDescriptionDone] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setTitleDone(true), 3500); // Typing animation duration for title
    const subtitleTimer = setTimeout(() => setSubtitleDone(true), 7000); // Typing animation duration for subtitle
    const descriptionTimer = setTimeout(() => setDescriptionDone(true), 10500); // Typing animation duration for description

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(descriptionTimer);
    };
  }, []);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="app-container">
      <div className='first-floor'>
        <div class="star-field"></div>
        <div className="top-container">
          <div className="name-container">Taiki Owen Yamashita / 山下大輝</div>
          <div className="icon-container">
            <div className="discord-icon icon-container-style">Home</div>
            <div className="linkedin-icon icon-container-style">Experiences</div>
            <div className="github-icon icon-container-style">Projects</div>
            <div className="github-icon icon-container-style">Goals</div>
          </div>
        </div>

        <div className="intro-container">
          <div className={`title ${titleDone ? 'typing-done' : 'typing'}`}>Hello! I'm Taiki</div>
          <div className={`subtitle ${subtitleDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '3.5s' }}>I'm a developer!</div>
          <div className={`description ${descriptionDone ? 'typing-done' : 'typing'}`} style={{ animationDelay: '7s' }}>20 y.o. Software Engineer @ Geolabs</div>
        </div>

        <div className="media-container">
          <div className='resume-button'>Resume</div>
          <div className='linkedin-button'>Linkedin</div>
          <div className='github-button'>GitHub</div>
        </div>

      

      </div>
    
      



      <div className="projects-master-container">

        <div className="dinosaur-container">
          <img src="./dinosaur.png" alt="dinosaur" onClick={handleClick} />
          <div className="counter-text">{counter}</div>
        </div>

        <div className="projects-container">Personal Projects...
          <div className="box">Project 1</div>
          <div className="box">Project 2</div>
          <div className="box">Project 3</div>
          <div className="box">Project 4</div>
        </div>
      </div>

      <div className="goals-master-container">
        <div className="goals-container">Current Goals...
          <div className="box">Find another internship for summer 2025!</div>
          <div className="box">Enhance skills in fullstack development!</div>
          <div className="box">Learn more programming languages!</div>
          <div className="box">Compete in more Hackathons!</div>
        </div>
      </div>

      <div className="explorations-container">Explorations...
        <div className="box">Exploration 1</div>
        <div className="box">Exploration 2</div>
        <div className="box">Exploration 3</div>
      </div>

      <footer>&copy; 2024 Taiki Yamashita. All rights reserved.</footer>
    </div>
  );
};

export default App;
