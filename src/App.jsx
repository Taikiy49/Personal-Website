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
import Terminal from './components/Terminal';
import Portfolio from './components/Portfolio';
import PhotoGallery from './components/PhotoGallery';
import NowPage from './components/NowPage';
import FunFacts from './components/FunFacts';
import ThemeToggle from './components/ThemeToggle';
import SearchBar from './components/SearchBar';
import Newsletter from './components/Newsletter';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <CodeMatrix />
        <ThemeToggle />
        <SearchBar />
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <NowPage />
              <TechStack />
              <Skills />
              <Experience />
              <Portfolio />
              <Projects />
              <Achievements />
              <PhotoGallery />
              <FunFacts />
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