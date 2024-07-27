import '../styles/Experiences.css'
import React from 'react';

const Experiences = () => {
    return (
        <div id='experiences' className='experiences-container-floor'>
            <div className='experiences-container-title'>Experiences...</div>
            <div className="experiences-container">
                <div className='geolabs-container'>
                    <div className="box">Geolabs</div>
                    <div className='geolabs-description'>During my internship at Geolabs, Inc., I developed robust software solutions to boost productivity and efficiency, utilizing Python, MySQL, React.js, JavaScript, HTML, and CSS. I implemented AI and machine learning algorithms for effective data querying, alongside cryptography techniques to ensure secure data handling and continuous software updates.</div>
                    <img src='geolabs.png' alt='geolabs-image' className='geolabs-img'/>
                </div>

                <div className='nsf-container'>
                    <div className="box">NSF (National Science Foundation)</div>
                    <div className='nsf-description'>During my research, I conducted exploratory data analysis and created complex data tables using Python, SQL, and R, leveraging advanced data manipulation techniques. I also developed and implemented machine learning models with the NIH AllOfUs dataset, ensuring stringent data security protocols and compliance with ethical standards and privacy regulations.</div>
                    <img src='geolabs.png' alt='geolabs-image' className='geolabs-img'/>
                </div>

                <div className='la-container'>
                    <div className="box">ICS Learning Assistant</div>
                    <div className='la-description'>As an Intermediate Programming Learning Assistant at UC Irvine, I guided students through advanced Python programming concepts, including object-oriented programming, data structures, and algorithms. I also facilitated interactive workshops on algorithmic problem-solving and software development practices.</div>
                    <img src='geolabs.png' alt='geolabs-image' className='geolabs-img'/>
                </div>
            </div>
        </div>
    );
};

export default Experiences;