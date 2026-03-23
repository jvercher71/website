import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Pillars from '../components/Pillars';
import ShepherdsCore from '../components/ShepherdsCore';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      {/* Strategic Pathway Selection */}
      <section className="pathway-selection">
        <div className="container">
          <div className="pathway-grid">
            <div className="pathway-card glass">
              <div className="pathway-icon">🚀</div>
              <h2>Software <span className="gradient-text">Buyers</span></h2>
              <p>Looking for ready-to-go, high-utility apps and software tools for your business or ministry?</p>
              <Link to="/products" className="btn-primary glass">Browse Our Shop</Link>
            </div>
            <div className="pathway-card glass highlight">
              <div className="pathway-icon">🏗️</div>
              <h2>Custom <span className="gradient-text">Clients</span></h2>
              <p>Need a bespoke solution, a custom project build, or a managed developer partnership?</p>
              <Link to="/contact" className="btn-secondary">Let's Talk Custom</Link>
            </div>
          </div>
        </div>
      </section>

      <Pillars />

      {/* Custom to Utility Pipeline */}
      <section className="pipeline-section">
        <div className="container">
          <div className="pipeline-grid">
            <div className="pipeline-content">
              <h2 className="section-title">The <span className="gradient-text">Core to Custom</span> Foundation</h2>
              <p>
                We offer a unique dual-model approach. We build high-end custom solutions for industry leaders, 
                gaining deep insights into complex operational challenges. We use those insights to develop 
                our own independent **Core Utility** products—providing smaller organizations with 
                enterprise-grade logic in affordable, streamlined packages.
              </p>
              <p>
                Conversely, any of our core utilities can be expanded into a fully custom, bespoke solution 
                tailored exclusively to your organization's unique requirements, ensuring a perfect 
                fit as your business scales.
              </p>
            </div>
            <div className="pipeline-visual glass">
              <div className="pipeline-tag">CORE &harr; CUSTOM</div>
            </div>
          </div>
        </div>
      </section>

      <ShepherdsCore />
      
      {/* Short About Preview */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">Who We <span className="gradient-text">Are</span></h2>
              <p>
                Vercher Technologies is a forward-thinking software collective dedicated to building software that actually works for people. We specialize in high-fidelity custom builds for enterprises and stripped-down, high-utility products for small businesses.
              </p>
              <Link to="/about" className="btn-secondary">Learn More About Us</Link>
            </div>
            <div className="about-stats glass">
              <div className="stat-item">
                <span className="stat-number">13+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
