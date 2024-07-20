import React, { useState } from 'react';
import './2-Second.css'


const Second = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    return(
        <div className='second-floor'>
            <div className="dinosaur-container">
                <img src="./dinosaur.png" alt="dinosaur" onClick={handleClick} />
                <div className="counter-text">{counter}</div>
            </div>

            <div className="projects-master-container">
                <div className="projects-container">
                    <div className='projects-container-title'>Personal Projects...</div>
                    <div className="box">Project 1</div>
                    <div className="box">Project 2</div>
                    <div className="box">Project 3</div>
                    <div className="box">Project 4</div>
                </div>
            </div>
        </div>
    );
};

export default Second;
