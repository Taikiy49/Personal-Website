import '../styles/Goals.css';
import React from 'react';

const Goals = () => {
    return (
        <div className='music-container-floor'>
            <div className="music-container">
                <h1>Music & Ado</h1>
                
                <div className="music-section">
                    <h2>Why I Love Ado</h2>
                    <p>
                        Ado is absolutely incredible! Her voice is so powerful and unique - she can go from 
                        soft, emotional melodies to intense, high-energy vocals that give me chills every time. 
                        What I love most about her is how she brings such raw emotion and authenticity to every song.
                    </p>
                    <p>
                        Her music videos are works of art too. The creativity and visual storytelling in songs 
                        like "Usseewa" and "Show" are mind-blowing. She's not just a singer - she's a complete 
                        artist who pushes boundaries and isn't afraid to be different.
                    </p>
                </div>

                <div className="music-section">
                    <h2>Favorite Ado Songs</h2>
                    <div className="song-list">
                        <div className="song-item">
                            <strong>Usseewa</strong> - The song that introduced me to Ado. The energy is unmatched!
                        </div>
                        <div className="song-item">
                            <strong>Show</strong> - Such a powerful and emotional performance
                        </div>
                        <div className="song-item">
                            <strong>Gira Gira</strong> - The intensity and vocal range are incredible
                        </div>
                        <div className="song-item">
                            <strong>Odo</strong> - Beautiful melody with amazing vocal control
                        </div>
                        <div className="song-item">
                            <strong>Readymade</strong> - Love the rock influence and energy
                        </div>
                    </div>
                </div>

                <div className="music-section">
                    <h2>How Music Influences My Work</h2>
                    <p>
                        Listening to Ado while coding actually helps me focus and get into a flow state. 
                        Her music has this perfect balance of energy and emotion that keeps me motivated 
                        during long programming sessions. Sometimes when I'm stuck on a difficult problem, 
                        I'll put on "Usseewa" and suddenly find the solution!
                    </p>
                    <p>
                        Her artistic approach to pushing boundaries and being authentic also inspires how 
                        I approach my own projects. Just like how she's not afraid to experiment with 
                        different styles and sounds, I try to be creative and innovative in my coding and 
                        problem-solving approaches.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Goals;

