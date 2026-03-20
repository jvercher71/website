import React from 'react';
import { Link } from 'react-router-dom';
import './ShepherdsCore.css';

const ShepherdsCore = () => {
  return (
    <section id="products" className="product-spotlight">
      <div className="container">
        <div className="spotlight-card glass">
          <div className="spotlight-content">
            <span className="product-badge">Flagship Utility</span>
            <h2 className="product-title">ShepherdsCore</h2>
            <p className="product-tagline">The Ultimate Church Administration Platform</p>
            <p className="product-description">
              Streamline your congregation management, tithes, scheduling, and communication with our flagship church administration web app. Designed for ease of use and powerful reporting.
            </p>
            <ul className="product-features">
              <li>Member Directory & Management</li>
              <li>Attendance & Event Tracking</li>
              <li>Secure Giving & Financial Reports</li>
              <li>Volunteer Coordination</li>
            </ul>
            <div className="product-actions">
              <Link to="/products/shepherdscore" className="btn-primary glass">Learn More</Link>
              <Link to="/products/shepherdscore/demo" className="btn-secondary">Request Demo</Link>
            </div>
          </div>
          <div className="spotlight-visual">
            <div className="visual-placeholder glass">
              <span className="gradient-text">ShepherdsCore Platform</span>
              <div className="visual-orb"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShepherdsCore;
