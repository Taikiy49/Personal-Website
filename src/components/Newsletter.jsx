import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaCheck, FaRss } from 'react-icons/fa';
import '../styles/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  const newsletterTopics = [
    {
      icon: <FaRss />,
      title: "Tech Insights",
      description: "Latest thoughts on AI, software engineering, and emerging technologies"
    },
    {
      icon: <FaEnvelope />,
      title: "Project Updates",
      description: "Behind-the-scenes look at my current projects and experiments"
    },
    {
      icon: <FaPaperPlane />,
      title: "Personal Reflections",
      description: "Lessons from golf, insights from travel, and musings on life"
    }
  ];

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-info">
            <h2 className="newsletter-title">Stay Connected</h2>
            <p className="newsletter-description">
              Get occasional updates about my latest projects, tech insights, and personal adventures. 
              No spam, just authentic content from my journey as a software engineer, golf enthusiast, 
              and Ado music fan.
            </p>
            
            <div className="newsletter-topics">
              {newsletterTopics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <div className="topic-icon">
                    {topic.icon}
                  </div>
                  <div className="topic-content">
                    <h4 className="topic-title">{topic.title}</h4>
                    <p className="topic-description">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="newsletter-signup">
            <div className="signup-card cyber-card">
              <div className="signup-header">
                <div className="signup-icon">
                  <FaEnvelope />
                </div>
                <h3 className="signup-title">Join the Journey</h3>
                <p className="signup-subtitle">
                  Be the first to know about new projects and insights
                </p>
              </div>

              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="signup-form">
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="email-input"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="subscribe-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <div className="success-icon">
                    <FaCheck />
                  </div>
                  <h4>Welcome aboard! 🎉</h4>
                  <p>Thanks for subscribing. You'll hear from me soon!</p>
                </div>
              )}

              <div className="signup-footer">
                <p className="privacy-note">
                  No spam, unsubscribe anytime. I respect your privacy and will only send 
                  meaningful updates about my work and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;