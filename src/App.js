import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    university: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Organization submission:', formData);
    alert('Thank you for your submission! We will review your organization and get back to you soon.');
    setFormData({
      organizationName: '',
      organizationType: '',
      university: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      description: ''
    });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🏛️</span>
            Greek Life
          </div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
            <li><a href="#coming-soon" className="nav-link">Coming Soon</a></li>
            <li><a href="#join" className="nav-link">Join Us</a></li>
          </ul>
          <div className="nav-buttons">
            <a href="#join" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div>
            <h1 className="hero-title">
              The Future of <span className="highlight">Greek Life</span> is Here
            </h1>
            <p className="hero-subtitle">
              Connect, organize, and thrive with the next-generation platform designed specifically for college students.
            </p>
            <div className="hero-buttons">
              <a href="#coming-soon" className="btn btn-primary btn-large">Learn More</a>
              <a href="#join" className="btn btn-outline btn-large">Join Waitlist</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-visual">
              <div className="hero-illustration">
                <div className="illustration-circle">
                  <span className="main-icon">🏛️</span>
                </div>
                <div className="illustration-elements">
                  <div className="element element-1">👥</div>
                  <div className="element element-2">📅</div>
                  <div className="element element-3">💬</div>
                  <div className="element element-4">📊</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">What We're Building</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🏛️</span>
              <h3>Organization Management</h3>
              <p>Complete digital management system for your university's organization with member directories, event planning, and administrative tools.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Mobile-First Design</h3>
              <p>Access everything on the go with our responsive mobile app designed for today's connected Greek life community.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🎯</span>
              <h3>Event Coordination</h3>
              <p>Seamlessly plan, promote, and manage events with integrated RSVP systems, social media sharing, and attendance tracking.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💬</span>
              <h3>Communication Hub</h3>
              <p>Stay connected with real-time messaging, announcements, and group discussions tailored for Greek organizations.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📰</span>
              <h3>Community Feed</h3>
              <p>Stay updated with campus events, organization announcements, and student activities in one unified feed.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔒</span>
              <h3>Secure & Private</h3>
              <p>Your organization's data is protected with enterprise-grade security and privacy controls designed for Greek life.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="coming-soon" className="coming-soon">
        <div className="container">
          <div className="coming-soon-content">
            <h2>Coming Soon</h2>
            <p>
              We're working hard to bring you the most comprehensive college platform ever created. 
              Join thousands of organizations already on our waitlist.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <h4>�� Mobile App</h4>
                <p>Native iOS and Android applications</p>
              </div>
              <div className="feature-item">
                <h4>🌐 Web Platform</h4>
                <p>Full-featured web dashboard</p>
              </div>
              <div className="feature-item">
                <h4>🗺️ Campus Map</h4>
                <p>Interactive campus navigation</p>
              </div>
              <div className="feature-item">
                <h4>💬 Messaging</h4>
                <p>Real-time communication hub</p>
              </div>
            </div>
            <a href="#join" className="btn btn-primary btn-large">Join the Waitlist</a>
          </div>
        </div>
      </section>

      <section id="join" className="organization-form">
        <div className="container">
          <div className="form-container">
            <h2 className="form-title">Add Your Organization</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
              Want your fraternity, sorority, or Greek organization to be among the first to experience our platform? 
              Submit your information below and we'll reach out when we're ready to launch.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="organizationName">Organization Name *</label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="organizationType">Organization Type * <span style={{ fontWeight: 'normal', color: '#666' }}>(ex. fraternity, sorority, club, charity)</span></label>
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="fraternity">Fraternity</option>
                  <option value="sorority">Sorority</option>
                  <option value="co-ed">Co-Ed Organization</option>
                  <option value="honor-society">Honor Society</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="university">University/College *</label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contactName">Contact Person Name *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contactEmail">Contact Email *</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contactPhone">Contact Phone</label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Tell us about your organization</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Share details about your organization, current challenges, and what you're looking for in a Greek Life platform..."
                />
              </div>
              
              <button type="submit" className="submit-btn">
                Submit Organization
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Greek Life Connect</h4>
              <p>The future of Greek Life organization and connectivity. Building the next generation platform for fraternities, sororities, and Greek organizations.</p>
            </div>
            <div className="footer-section">
              <h4>Platform</h4>
              <a href="#features">Features</a>
              <a href="#coming-soon">Coming Soon</a>
              <a href="#join">Join Waitlist</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="#contact">Contact Us</a>
              <a href="#faq">FAQ</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#" className="social-link">📧</a>
                <a href="#" className="social-link">📱</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Greek Life. All rights reserved. Founded by Jonah Ortega & Preston Chan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
