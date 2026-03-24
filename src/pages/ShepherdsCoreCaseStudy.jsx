import React from 'react';
import { Link } from 'react-router-dom';
import './ShepherdsCoreCaseStudy.css';

const ShepherdsCoreCaseStudy = () => {
  return (
    <div className="case-study-page">
      <section className="case-hero">
        <div className="container">
          <Link to="/projects" className="back-link">← Back to Projects</Link>
          <span className="case-label">Technical Case Study</span>
          <h1 className="case-title">Shepherds<span className="gradient-text">Core</span> Architecture</h1>
          <p className="case-tagline">Solving the "Cloud-Lock" crisis for community organizations through Local-First engineering.</p>
        </div>
      </section>

      <section className="case-content">
        <div className="container">
          <div className="case-grid">
            <aside className="case-sidebar">
              <div className="sidebar-block">
                <h4>Technical Stack</h4>
                <ul>
                  <li><strong>Frontend:</strong> React / Vite</li>
                  <li><strong>Runtime:</strong> Desktop Native (Electron Wrappable)</li>
                  <li><strong>Storage:</strong> Local SQLite / Direct SQL</li>
                  <li><strong>Security:</strong> AES-256 Encryption (At Rest)</li>
                </ul>
              </div>
              <div className="sidebar-block">
                <h4>Key Achievement</h4>
                <p>100% Data Sovereignty with zero external dependencies or telemetry.</p>
              </div>
            </aside>

            <main className="case-main">
              <div className="content-block">
                <span className="block-label">01. The Challenge</span>
                <h3>The "Subscription Trap" & Data Vulnerability</h3>
                <p>
                  Most modern Church Management Systems (ChMS) have shifted to a "Software as a Service" (SaaS) model. 
                  While convenient, this introduces two major risks for community congregations:
                </p>
                <ol>
                  <li><strong>Financial Drain:</strong> Mandatory monthly fees that never end, often totaling $5k-$10k over a 10-year period.</li>
                  <li><strong>Data Vulnerability:</strong> Sensitive member information is stored on third-party servers, making the church vulnerable to cloud breaches and centralized downtime.</li>
                </ol>
                <p>
                  We were challenged to build a platform that provided the high-fidelity UI of a modern SaaS app but with the 
                  permanent ownership and security of a local utility.
                </p>
              </div>

              <div className="content-block">
                <span className="block-label">02. The Architecture</span>
                <h3>Local-First & SQL-Direct Engineering</h3>
                <p>
                  We avoided the "Cloud-First" standard. Instead, we architected ShepherdsCore around a high-performance local database.
                </p>
                <div className="tech-box glass">
                  <h4>Technical Implementation:</h4>
                  <ul>
                    <li><strong>Embedded SQLite:</strong> Fast, reliable, and portable database structure that lives on the user's file system.</li>
                    <li><strong>Zero Telemetry:</strong> No external API calls are made for tracking or analytics. The app functions entirely offline.</li>
                    <li><strong>Direct SQL Access:</strong> For power users, the data isn't trapped in a proprietary format. It’s an open SQL standard that the church truly owns.</li>
                  </ul>
                </div>
              </div>

              <div className="content-block">
                <span className="block-label">03. The Execution</span>
                <h3>Balancing Power with Simplicity</h3>
                <p>
                  The core challenge was ensuring that the "Power User" features (like bulk imports and custom reporting) 
                  didn't overwhelm the everyday administrator.
                </p>
                <p>
                  We built a modular UI using React's component architecture, allowing us to keep the interface 
                  clean while maintaining deep functional logic in the background. The result is a desktop-class 
                  experience that feels as fast as a local folder but works as smart as a cloud app.
                </p>
              </div>

              <div className="content-block feedback-block glass">
                <span className="block-label">04. The Result</span>
                <h3>Legacy Protection through Stewardship</h3>
                <p>
                  ShepherdsCore restores the "Stewardship of Data." Churches now have a high-fidelity tool they 
                  own forever for a one-time cost. 
                </p>
                <div className="result-stats">
                  <div className="stat">
                    <strong>$0</strong>
                    <span>Ongoing Monthly Fees</span>
                  </div>
                  <div className="stat">
                    <strong>100%</strong>
                    <span>Data Control</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section className="case-cta glass">
        <div className="container text-center">
          <h2>Ready to Build Your <span className="gradient-text">Own Legacy?</span></h2>
          <p>We take the same technical rigor and family-first integrity to our custom builds.</p>
          <div className="cta-links">
            <Link to="/contact" className="btn-primary glass">Discuss Your Custom Project</Link>
            <Link to="/products/shepherdscore" className="btn-secondary">View Product Page</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShepherdsCoreCaseStudy;
