import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Let's Build Something <span className="gradient-text">Extraordinary</span></h1>
          <p className="contact-tagline">
            Whether you're looking for a bespoke enterprise tool, a managed developer partnership, or have questions about our utility products—we're here to help.
          </p>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid glass">
            <div className="contact-info-panel">
              <div className="info-group">
                <h3>General Inquiries</h3>
                <p>For broad questions about our services or company mission.</p>
                <div className="info-link">📧 hello@verchertechnologies.one</div>
              </div>
              <div className="info-group">
                <h3>Development Partnerships</h3>
                <p>Interested in a dedicated developer role or long-term managed services?</p>
                <div className="info-link">🤝 partners@verchertechnologies.one</div>
              </div>
              <div className="info-group">
                <h3>Technical Support</h3>
                <p>Existing customers looking for assistance with our utility software.</p>
                <div className="info-link">🛠 support@verchertechnologies.one</div>
              </div>
            </div>

            <div className="contact-form-panel">
              <h2 className="panel-title">Inquiry Form</h2>
              <form className="main-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="John Manuel Vercher" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option value="custom">Custom Development Project</option>
                    <option value="managed">Managed Developer Services</option>
                    <option value="product">Product Question (ShepherdsCore)</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="6" placeholder="Tell us more about your needs..." required></textarea>
                </div>
                <button type="submit" className="btn-primary glass">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
