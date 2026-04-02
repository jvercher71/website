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
              <h2>Software <span className="gradient-text">Solutions</span></h2>
              <p>Looking for ready-to-go, high-utility apps and software tools for your business or ministry?</p>
              <Link to="/products" className="btn-primary glass">Browse Our Shop</Link>
            </div>
            <div className="pathway-card glass highlight">
              <div className="pathway-icon">🤝</div>
              <h2>Strategic <span className="gradient-text">Partnerships</span></h2>
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
              <h2 className="section-title">From <span className="gradient-text">Custom Builds</span> to Essential Tools</h2>
              <p>
                We do two things: we build complex, custom software for industry leaders, and we take those same insights to build simple, affordable tools for small businesses and churches.
              </p>
              <p>
                This "Core to Custom" approach means our neighbors get the same professional-grade logic used by big companies, but in streamlined packages that are actually easy to use.
              </p>
            </div>
            <div className="pipeline-visual glass">
              <div className="pipeline-tag">CUSTOM &rarr; SOLUTIONS</div>
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
                Vercher Technologies is a family firm rooted on the Mississippi Gulf Coast. We believe in building software with the same integrity we bring to our community—making high-end engineering accessible and useful for the local businesses and ministries that keep our neighborhood running.
              </p>
              <Link to="/about" className="btn-secondary">Learn More About Our Story</Link>
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

      {/* Legal Links */}
      <section className="home-legal">
        <div className="container">
          <div className="home-legal-links">
            <Link to="/terms">Terms of Service</Link>
            <span className="legal-divider">·</span>
            <Link to="/terms#privacy">Privacy Policy</Link>
            <span className="legal-divider">·</span>
            <Link to="/terms#refund">Refund Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
