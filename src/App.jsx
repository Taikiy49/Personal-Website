import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CodeMatrix from './components/CodeMatrix';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Terminal from './components/Terminal';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <CodeMatrix />
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <TechStack />
              <Skills />
              <Experience />
              <Projects />
              <Achievements />
              <Blog />
              <Terminal />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;