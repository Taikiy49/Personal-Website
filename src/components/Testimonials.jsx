import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Supervisor",
      company: "National Science Foundation",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Taiki's analytical skills and attention to detail in processing our 400K+ health dataset were exceptional. His predictive models achieved remarkable accuracy and his presentation at the research symposium was outstanding.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Engineer",
      company: "Geolabs, Inc.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Working with Taiki on the Geolabs Software Platform has been incredible. His ability to architect complex systems while maintaining clean, maintainable code is impressive. The AI search feature he built revolutionized how we access information.",
      rating: 5
    },
    {
      name: "Prof. David Kim",
      role: "Computer Science Professor",
      company: "UC Irvine",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "As Taiki's professor and supervisor for his Learning Assistant role, I've watched him excel both academically and as a mentor. His ability to explain complex algorithms to 450+ students while maintaining Dean's Honor List status is remarkable.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      role: "Project Manager",
      company: "Geolabs, Inc.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Taiki transformed our entire workflow with the comprehensive platform he developed. What used to take hours of searching through documents now takes seconds. His Microsoft SSO integration and role-based permissions are exactly what we needed.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Former Student",
      company: "UC Irvine CS",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Taiki was an amazing Learning Assistant. He helped me understand data structures and algorithms in a way that finally clicked. His patience and different teaching approaches made all the difference in my CS journey.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Tutoring Student",
      company: "Honolulu Tutoring",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Taiki's tutoring helped me go from struggling with calculus to acing my exams. His ability to break down complex mathematical concepts and relate them to real-world programming problems was incredibly helpful.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">Feedback from colleagues, professors, and students</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card cyber-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
              
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;