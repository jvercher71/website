import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building the Next Generation of <span className="gradient-text">Digital Solutions</span>
          </h1>
          <p className="hero-description">
            From bespoke enterprise applications to scalable utility products, we bridge the gap between complex engineering and simplified business growth.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary glass">View Our Work</Link>
            <a href="#services" className="btn-secondary">Learn Our Model</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
