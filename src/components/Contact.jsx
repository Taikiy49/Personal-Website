import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Ready to collaborate or just want to chat about Ado, golf, or tech?</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card glass-card">
              <h3>Get In Touch</h3>
              <p>
                Whether you want to discuss exciting project opportunities, share your favorite Ado songs, 
                plan a golf round, or just connect about technology and innovation, I'd love to hear from you!
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-info">
                    <h4>Email</h4>
                    <p>taiki.yamashita@example.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-info">
                    <h4>Phone</h4>
                    <p>+1 (808) 555-0123</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-info">
                    <h4>Location</h4>
                    <p>Honolulu, Hawaii</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/taikiy49" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/taikiyamashita" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;