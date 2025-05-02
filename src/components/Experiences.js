import '../styles/Experiences.css'
import React from 'react';

const Experiences = () => {
    return (
        <div className="experiences-container">
            <div className="experiences-title">Experiences...</div>

            <div className='geolabs-container'>
                <div className="geolabs-title">Software Engineer @ Geolabs</div>
                <div className='geolabs-description'>
                    During my internship at Geolabs, Inc., I developed robust software solutions to boost productivity and efficiency, utilizing Python, MySQL, React.js, JavaScript, HTML, and CSS. I implemented AI and machine learning algorithms for effective data querying, alongside cryptography techniques to ensure secure data handling and continuous software updates.
                </div>
            </div>

            <div className='nsf-container'>
                <div className="nsf-title">Data Science Intern @ NSF</div>
                <div className='nsf-description'>
                    At the National Science Foundation, I analyzed a 400K-participant NIH dataset with Python and SQL to identify chronic condition trends. I built predictive models in R using GLM, Lasso, and Random Forest to forecast long-term health outcomes, and optimized data pipelines processing over 10 million records to support faster research insights.
                </div>
            </div>

            <div className='grader-container'>
                <div className="grader-title">ICS Grader @ UC Irvine</div>
                <div className='grader-description'>
                    As a grader for ICS 32A and 33, I evaluated programming assignments and provided detailed feedback to help students improve their understanding of Python, data structures, and software design. I worked closely with professors to align grading with course objectives and identify areas where students needed more support.
                </div>
            </div>

            <div className='la-container'>
                <div className="la-title">ICS Learning Assistant @ UC Irvine</div>
                <div className='la-description'>
                    I supported over 450 students by leading workshops and tutoring sessions on object-oriented programming, algorithmic problem solving, and debugging. My sessions focused on building strong coding habits and fostering peer collaboration through hands-on learning activities.
                </div>
            </div>

            <div className='tutoring-container'>
                <div className="tutoring-title">CS & Math Tutor @ Honolulu Tutoring</div>
                <div className='tutoring-description'>
                    I provided personalized tutoring for high school and college students in computer science and mathematics, covering topics like algorithms, data structures, algebra, and calculus. I tailored each lesson to student goals and adjusted my teaching strategies based on progress assessments.
                </div>
            </div>
        </div>
    );
};

export default Experiences;
