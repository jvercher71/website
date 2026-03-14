import React from 'react';
import './ShepherdsCoreDemoPage.css';

const ShepherdsCoreDemoPage = () => {
  return (
    <div className="demo-page">
      <section className="demo-hero">
        <div className="container">
          <span className="product-badge">ShepherdsCore</span>
          <h1 className="demo-title">Request a <span className="gradient-text">Ministry Demo</span></h1>
          <p className="demo-tagline">
            Experience how ShepherdsCore can streamline your church operations. 
            Fill out the form below and our team will be in touch to schedule a personalized walkthrough.
          </p>
        </div>
      </section>

      <section className="demo-form-section">
        <div className="container">
          <div className="demo-container glass">
            <div className="demo-benefits">
              <h3>What to expect:</h3>
              <ul className="benefit-list">
                <li>Live walkthrough of member tracking</li>
                <li>Setup guidance for online giving</li>
                <li>Volunteer rotation strategy session</li>
                <li>Q&A with our product engineering team</li>
              </ul>
            </div>
            <form className="demo-form">
              <div className="form-group">
                <label htmlFor="churchName">Church Name</label>
                <input type="text" id="churchName" placeholder="Grace Community Church" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactName">Contact Name</label>
                  <input type="text" id="contactName" placeholder="Pastor John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Your Role</label>
                  <input type="text" id="role" placeholder="Lead Pastor / Administrator" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@church.org" required />
              </div>
              <div className="form-group">
                <label htmlFor="churchSize">Approximate Congregation Size</label>
                <select id="churchSize">
                  <option value="small">Under 100 members</option>
                  <option value="medium">100 - 500 members</option>
                  <option value="large">500 - 2,000 members</option>
                  <option value="enterprise">Over 2,000 members (Custom Build Recommended)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Special Requirements or Questions?</label>
                <textarea id="message" rows="4" placeholder="How can we help your ministry specifically?"></textarea>
              </div>
              <button type="submit" className="btn-primary glass">Request Demo</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShepherdsCoreDemoPage;
