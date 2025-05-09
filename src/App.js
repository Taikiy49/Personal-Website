// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cover from './components/Cover';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Goals from './components/Goals';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="top-container">
          <div className="contact-container">Taiki Owen Yamashita / 山下大輝</div>
          <div className="icon-container">
            <Link to="/" className="icon-home-style">Home</Link>
            <Link to="/experiences" className="icon-container-style">Experiences</Link>
            <Link to="/projects" className="icon-container-style">Projects</Link>
            <Link to="/goals" className="icon-container-style">Goals</Link>
          </div>
        </div>

        <Routes>
          {/* Home page shows Cover + About together */}
          <Route path="/" element={
            <>
              <Cover />
              <About />
            </>
          } />
          
          {/* Other pages load separately */}
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
        <footer>© 2025 Taiki Yamashita. All rights reserved.</footer>
      </div>
    </Router>
  );
};

export default App;
