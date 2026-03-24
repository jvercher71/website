import React from 'react';
import { Link } from 'react-router-dom';
import './ShepherdsCoreBuyPage.css';

const ShepherdsCoreBuyPage = () => {
  const plans = [
    {
      name: 'Utility License',
      price: '$600',
      period: '/perpetual',
      features: [
        'Full desktop application local install',
        'Unlimited members and event tracking',
        'Local data storage — your data never leaves',
        'Lifetime major version updates',
        '1-on-1 priority technical support',
        'Remote setup & data import assistance'
      ],
      isPopular: true
    }
  ];

  return (
    <div className="buy-page">
      <section className="buy-hero">
        <div className="container">
          <h1 className="buy-title">Choose Your <span className="gradient-text">Plan</span></h1>
          <p className="buy-tagline">ShepherdsCore for the small to medium-sized congregation.</p>
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
                <div className="upsell-badge">Custom Solution</div>
                <h2>Need a Custom <span className="gradient-text">Build?</span></h2>
                <p>
                  For churches with unique custom requirements or complex specific workflows, 
                  we can build a **bespoke ShepherdsCore experience** tailored exactly to your needs.
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
