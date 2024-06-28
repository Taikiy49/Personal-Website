import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="top-container">
        <div className="name-container">Taiki Owen Yamashita / 山下大輝</div>
        <div className="icon-container">
          <div className="discord-icon icon-container-style">Resume</div>
          <div className="linkedin-icon icon-container-style">Linkedin</div>
          <div className="github-icon icon-container-style ">Github</div>
        </div>
      </div>

      <div className="intro-container">
        <div className="title">Hello! I'm Taiki</div>
        <div className="subtitle">I'm a developer!</div>
        <div className="description">20 y.o. Software Engineer @ Geolabs</div>
      </div>


      <div className="projects-container">Personal Projects...
        <div class="box">Project 1</div>
        <div class="box">Project 2</div>
        <div class="box">Project 3</div>
        <div class="box">Project 4</div>
      </div>

      <div className="goals-container">Current Goals...
        <div class="box">Find another internship for summer 2025!</div>
        <div class="box">Enhance skills in fullstack development!</div>
        <div class="box">Learn more programming languages!</div>
        <div class="box">Compete in more Hackathons!</div>
      </div>

      <div className="explorations-container">Explorations...
        <div class="box">Exploration 1</div>
        <div class="box">Exploration 2</div>
        <div class="box">Exploration 3</div>
      </div>


      <footer>&copy; 2024 Taiki Yamashita. All rights reserved.</footer>

      
    </div>
  );
}

export default App;
