import React from 'react';
import { Link } from 'react-router-dom';
import './ShepherdsCoreBuyPage.css';

const ShepherdsCoreBuyPage = () => {
  const plans = [
    {
      name: 'Essential Ministry',
      price: '$99',
      period: '/month',
      features: ['Up to 500 members', 'Standard giving reports', 'Volunteer rotations', 'Email support'],
      isPopular: false
    },
    {
      name: 'Growth Collective',
      price: '$199',
      period: '/month',
      features: ['Unlimited members', 'Advanced financial analytics', 'Multi-campus support', 'Priority support'],
      isPopular: true
    }
  ];

  return (
    <div className="buy-page">
      <section className="buy-hero">
        <div className="container">
          <h1 className="buy-title">Choose Your <span className="gradient-text">Plan</span></h1>
          <p className="buy-tagline">Generalized ShepherdsCore licenses for congregations of all sizes.</p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div key={plan.name} className={`pricing-card glass ${plan.isPopular ? 'popular' : ''}`}>
                {plan.isPopular && <div className="popular-badge">Most Recommended</div>}
                <h3>{plan.name}</h3>
                <div className="price-tag">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="price-features">
                  {plan.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <button className="btn-primary glass">Get Started Now</button>
              </div>
            ))}
          </div>

          <div className="upsell-container">
            <div className="upsell-card glass highlight-border">
              <div className="upsell-content">
                <div className="upsell-badge">Enterprise Edition</div>
                <h2>Need a Custom <span className="gradient-text">Build?</span></h2>
                <p>
                  For mega-churches or multi-site organizations with unique custom requirements, our "Utility" version might not be enough. 
                  We can build a **bespoke ShepherdsCore experience** tailored specifically to your church's internal workflows.
                </p>
                <div className="upsell-features">
                  <span>✨ Dedicated Developer Role</span>
                  <span>✨ Custom Feature Engineering</span>
                  <span>✨ Unique Database Architecture</span>
                </div>
              </div>
              <div className="upsell-action">
                <Link to="/contact" className="btn-secondary">Request Custom Quote →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShepherdsCoreBuyPage;
