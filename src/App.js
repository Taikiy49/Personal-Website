import './App.css';
import React, { useState } from 'react';
import Cover from './components/Cover'; 
import About from './components/About';
import Projects from './components/Projects';
import Goals from './components/Goals';
import Experiences from './components/Experiences';


const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
      setCounter(counter + 1);
  };


  return (
    <div className="app-container">
      <div className="top-container">
        <div className="name-container">Taiki Owen Yamashita / 山下大輝</div>
        <div className="icon-container">
          <a href='#about' className="icon-container-style">About</a>
          <a href='#experiences' className="icon-container-style">Experiences</a>
          <a href='#projects' className="icon-container-style">Projects</a>
          <a href='#goals' className="icon-container-style">Goals</a>
        </div>
      </div>
      <Cover /> 
      <About />
      <Experiences />
      <Projects />
      <Goals />

      <div className="dinosaur-container">
        <img src="./dinosaur.png" alt="dinosaur" onClick={handleClick} />
        <div className="counter-text">{counter}</div>
      </div>

      <footer>&copy; 2024 Taiki Yamashita. All rights reserved.</footer>
    </div>
  );
};

export default App;
