import React from 'react';
import { Link } from 'react-router-dom';
import './ShepherdsCoreDetailPage.css';

const ShepherdsCoreDetailPage = () => {
  const features = [
    { title: 'Member Intelligence', desc: 'Detailed profiles, family groups, and spiritual journey tracking.' },
    { title: 'Dynamic Attendance', desc: 'Real-time check-ins and automated follow-ups for guests.' },
    { title: 'Financial Stewardship', desc: 'Secure online giving, recurring donations, and tax-ready reporting.' },
    { title: 'Volunteer Command', desc: 'Schedule rotations, skill matching, and team communication.' }
  ];

  return (
    <div className="product-detail-page">
      <section className="detail-hero">
        <div className="container">
          <span className="product-badge">Flagship Utility</span>
          <h1 className="detail-title">ShepherdsCore</h1>
          <p className="detail-tagline">The essential platform for modern ministry management.</p>
        </div>
      </section>

      <section className="detail-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>The <span className="gradient-text">Efficiency</span> Story</h2>
              <p>
                ShepherdsCore wasn't built in a vacuum. It was forged through years of custom development for some of the largest congregations in the country. 
              </p>
              <p>
                We took the most powerful features from those enterprise builds and stripped away the bloat. What remains is a high-performance, essential utility that gives churches of all sizes the tools they need to thrive without the enterprise price tag.
              </p>
              <div className="custom-upsell-mini glass">
                <p><strong>Need something even more custom?</strong> We can build a bespoke version uniquely tailored to your church's specific workflows.</p>
                <Link to="/contact" className="upsell-link">Discuss Custom Build →</Link>
              </div>
            </div>
            <div className="story-visual glass">
              <div className="visual-orb-large"></div>
              <span>GENERALIZED EXCELLENCE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-features">
        <div className="container">
          <h2 className="section-title">Core <span className="gradient-text">Features</span></h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item glass">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-cta">
        <div className="container">
          <div className="cta-card glass">
            <h2>Ready to transform your <span className="gradient-text">ministry?</span></h2>
            <p>Schedule a personalized demo or choose a plan to get started today.</p>
            <div className="cta-actions">
              <Link to="/products/shepherdscore/buy" className="btn-primary glass">Get Started</Link>
              <Link to="/products/shepherdscore/demo" className="btn-secondary">Request Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShepherdsCoreDetailPage;
