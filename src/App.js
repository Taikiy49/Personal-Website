import './App.css';
import First from './1-First'; //
import Second from './2-Second';

const App = () => {
  return (
    <div className="app-container">
      <First /> 
      <Second />

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
