import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cover from './components/Cover';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Goals from './components/Goals';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <div className="top-container">
          <div className="contact-container">Taiki Owen Yamashita / 山下大輝</div>
          <div className="icon-container">
            <Link to="/" className="icon-home-style">Home</Link>
            <Link to="/background" className="icon-container-style">Background</Link>
            <Link to="/experiences" className="icon-container-style">Experiences</Link>
            <Link to="/projects" className="icon-container-style">Projects</Link>
            <Link to="/goals" className="icon-container-style">Goals</Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<><Cover /><About /></>} />
          <Route path="/background" element={<><Cover /><About /></>} />
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
