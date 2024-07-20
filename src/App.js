import './App.css';
import React, { useState } from 'react';
import Cover from './1-Cover'; 
import Projects from './2-Projects';
import Goals from './3-Goals';
import Experiences from './4-Experiences';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
      setCounter(counter + 1);
  };


  return (
    <div className="app-container">
      <Cover /> 
      <Projects />
      <Goals />
      <Experiences />


      <div className="dinosaur-container">
        <img src="./dinosaur.png" alt="dinosaur" onClick={handleClick} />
        <div className="counter-text">{counter}</div>
      </div>

      <footer>&copy; 2024 Taiki Yamashita. All rights reserved.</footer>
    </div>
  );
};

export default App;
