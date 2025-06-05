import React from 'react';
import './AboutUs.css'; // Assuming you have the CSS in AboutUs.css

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p className="subtitle">Connecting millions of creators and billions of fans globally.</p>
          <a href="#mission" className="learn-more-button">Learn More</a>
        </div>
      </header>

      <section id="mission" className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>To unlock the potential of human creativity—by giving a million creative artists the opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it.</p>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We constantly strive to push boundaries and create new and exciting experiences.</p>
            </div>
            <div className="value-card">
              <h3>Collaboration</h3>
              <p>We believe in the power of working together to achieve great things.</p>
            </div>
            <div className="value-card">
              <h3>Passion</h3>
              <p>We are driven by a deep love for music and the creators who make it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <h2>Our Impact</h2>
          <p>Highlighting key achievements and the positive influence we have on the music ecosystem.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;