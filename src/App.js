// src/App.js
import './App.css';
import React, { useState } from 'react';
import Cover from './components/Cover'; 
import About from './components/About';
import Projects from './components/Projects';
import Goals from './components/Goals';
import Experiences from './components/Experiences';

const App = () => {

  return (
    <div className="app-container">
      <div className="top-container">
        <div className="contact-container">Taiki Owen Yamashita / 山下大輝</div>
        <div className="icon-container">
          <a href="#home" className="icon-home-style">Home</a>
          <a href="#about" className="icon-container-style">About</a>
          <a href="#experiences" className="icon-container-style">Experiences</a>
          <a href="#projects" className="icon-container-style">Projects</a>
          <a href="#goals" className="icon-container-style">Goals</a>
        </div>
      </div>
      <Cover /> 
      <About />
      <Experiences />
      <Projects />
      <Goals />
      <footer className="glow">&copy; 2024 Taiki Yamashita. All rights reserved.</footer>
    </div>
  );
};

export default App;
