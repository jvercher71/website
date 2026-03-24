import { Link } from 'react-router-dom';
import ProductShowcase from '../components/ProductShowcase';
import ComparisonTable from '../components/ComparisonTable';
import './ShepherdsCoreDetailPage.css';

const ShepherdsCoreDetailPage = () => {
  const mainFeatures = [
    { 
      title: 'Security You Can Trust', 
      desc: 'In an era of cloud breaches, true security means physical control. Your data stays on your hardware—exactly where it belongs.',
      points: ['Stored Locally', 'No Hidden Data Tracking', 'Works Without Internet'],
      icon: '🛡️'
    },
    { 
      title: 'Ownership is Stewardship', 
      desc: 'You buy it, you own it. No monthly bills, no cloud locks, and no "member tax" for growing your congregation.',
      points: ['Perpetual License', 'Complete Data Access', 'Simple Backups'],
      icon: '🔑'
    }
  ];

  return (
    <div className="product-detail-page grid-texture">
      <div className="hero-glow"></div>
      <section className="detail-hero">
        <div className="container">
          <div className="hero-content">
            <span className="product-badge glass">Built for Stewardship</span>
            <h1 className="detail-title">Shepherds<span className="gradient-text">Core</span></h1>
            <p className="detail-tagline">A Simple Way to Manage Your Church and Protect Your Data.</p>
            <div className="hero-actions">
              <Link to="/products/shepherdscore/buy" className="btn-primary glass">Get Started Today</Link>
              <a href="#stewardship" className="scroll-hint">Explore the Story ↓</a>
            </div>
          </div>
        </div>
      </section>

      <section id="stewardship" className="detail-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-label">Our Philosophy</span>
              <h2>Our <span className="gradient-text">Philosophy</span></h2>
              <p className="lead-text">
                ShepherdsCore was born from a simple observation: small and medium churches were being over-complicated and over-charged by cloud vendors.
              </p>
              <div className="story-bits">
                <div className="story-bit">
                  <span className="bit-icon">🌱</span>
                  <p>We built it for the local congregation, stripping away the complexity so you can focus on ministry.</p>
                </div>
                <div className="story-bit">
                  <span className="bit-icon">🤝</span>
                  <p>We designed it for the community churches that form the backbone of our faith.</p>
                </div>
              </div>
              <p>
                Our mission was to take powerful logic and make it simple. What remains is an essential tool that helps you protect your church's legacy—without a monthly bill that never ends.
              </p>
              <div className="custom-upsell-mini glass">
                <p><strong>Need something more specific?</strong> If ShepherdsCore doesn’t quite fit your workflow, let’s talk about a custom build tailored exactly for you.</p>
                <Link to="/contact" className="upsell-link">Discuss Custom Build →</Link>
              </div>
            </div>
            <div className="story-visual glass">
              <div className="visual-orb-large"></div>
              <div className="visual-tag">CORE UTILITY FOUNDATION</div>
            </div>
          </div>
        </div>
      </section>

      <section className="legacy-trust-section">
        <div className="container">
          <div className="trust-card glass">
            <div className="trust-icon">✝️</div>
            <p className="trust-quote">
              "We saw a need for privacy and stewardship that cloud vendors weren't meeting. 
              Our mission is to ensure that your church's data—and its legacy—is owned by you, not a monthly bill."
            </p>
            <div className="trust-footer">
              <span className="trust-attribution">The Vercher Family</span>
              <span className="trust-location">Mississippi Gulf Coast</span>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-showcase">
        <div className="container">
          <span className="section-label">Interface Tour</span>
          <h2 className="section-title">High-Fidelity <span className="gradient-text">Control</span></h2>
          <p className="section-subtitle">Take a closer look at the tools designed for modern ministry stewardship.</p>
          <ProductShowcase />
        </div>
      </section>

      <section className="detail-security">
        <div className="container">
          <div className="security-header text-center">
            <span className="section-label">Uncompromising Security</span>
            <h2>Physical <span className="gradient-text">Protection</span></h2>
            <p className="section-subtitle">True security is about control, not promises.</p>
          </div>
          
          <div className="security-grid">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="security-card glass">
                <div className="card-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <ul className="security-points">
                  {feature.points.map((point, i) => (
                    <li key={i}>
                      <span className="check">✓</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="backup-info glass">
            <div className="backup-icon">💾</div>
            <div className="backup-content">
              <h4>Ownership & Physical Backups</h4>
              <p>
                No cloud locks means your database is yours. It is stored locally at <code>C:\Users\[User]\ShepherdsCore\</code>. 
                We recommend a weekly physical backup to a secure USB drive for absolute legacy protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-comparison">
        <div className="container">
          <div className="comparison-header text-center">
            <span className="section-label">Market Value</span>
            <h2>The <span className="gradient-text">Stewardship</span> Difference</h2>
            <p className="section-subtitle">Comparing the lifetime value of ownership vs. cloud subscriptions.</p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      <section className="detail-cta">
        <div className="container">
          <div className="cta-card glass">
            <div className="cta-content">
              <h2>Ready to protect your <span className="gradient-text">ministry?</span></h2>
              <p>Choose a plan that fits your stewardship goals or request a personalized demo.</p>
              <div className="cta-actions">
                <Link to="/products/shepherdscore/buy" className="btn-primary glass">Get Started Now</Link>
                <Link to="/products/shepherdscore/demo" className="btn-secondary">Request Live Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShepherdsCoreDetailPage;
