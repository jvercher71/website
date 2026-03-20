import { Link } from 'react-router-dom';
import ProductShowcase from '../components/ProductShowcase';
import './ShepherdsCoreDetailPage.css';

const ShepherdsCoreDetailPage = () => {
  const mainFeatures = [
    { 
      title: 'Absolute Data Security', 
      desc: 'In an era of endless cloud breaches, true security means physical control. Your data never leaves your PC.',
      points: ['Stored Locally', 'Zero Telemetry', 'Offline Access']
    },
    { 
      title: 'Physical Data Ownership', 
      desc: 'You buy it, you own it. No forced subscriptions or cloud-locked databases.',
      points: ['Perpetual License', 'Direct DB Access', 'Easy Backups']
    }
  ];

  return (
    <div className="product-detail-page">
      <section className="detail-hero">
        <div className="container">
          <span className="product-badge">Flagship Utility</span>
          <h1 className="detail-title">ShepherdsCore</h1>
          <p className="detail-tagline">The Ultimate Church Administration Platform</p>
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

      <section className="detail-showcase">
        <div className="container">
          <h2 className="section-title">Experience the <span className="gradient-text">Interface</span></h2>
          <p className="section-subtitle">Take a closer look at the tools designed for your ministry.</p>
          <ProductShowcase />
        </div>
      </section>

      <section className="detail-security">
        <div className="container">
          <div className="security-grid">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="security-card glass">
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
              <h4>Ownership & Backups</h4>
              <p>
                Your database is stored locally at <code>C:\Users\[User]\ShepherdsCore\</code>. 
                We recommend a weekly backup of your <code>.db</code> file to a secure USB or cloud folder to ensure your legacy is protected.
              </p>
            </div>
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
