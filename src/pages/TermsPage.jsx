import React from 'react';
import './TermsPage.css';

const EFFECTIVE_DATE = 'April 2, 2026';
const COMPANY = 'Vercher Technologies, a division of Vercher Enterprises, LLC';
const EMAIL = 'support@verchertechnologies.one';
const STATE = 'Mississippi';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container">
          <h1 className="terms-title">Legal <span className="gradient-text">Documents</span></h1>
          <p className="terms-tagline">
            Effective Date: {EFFECTIVE_DATE}
          </p>
          <nav className="terms-nav">
            <a href="#terms" className="terms-nav-link">Terms of Service</a>
            <span className="terms-nav-divider">·</span>
            <a href="#privacy" className="terms-nav-link">Privacy Policy</a>
            <span className="terms-nav-divider">·</span>
            <a href="#refund" className="terms-nav-link">Refund Policy</a>
          </nav>
        </div>
      </section>

      <div className="terms-body">
        <div className="container">

          {/* ── TERMS OF SERVICE ── */}
          <section id="terms" className="terms-section glass">
            <h2 className="section-heading">Terms of <span className="gradient-text">Service</span></h2>
            <p className="section-intro">
              Please read these Terms of Service ("Terms") carefully before using any website,
              product, or service operated by {COMPANY} ("Vercher Technologies", "we", "us", or "our").
              By accessing or using our services, you agree to be bound by these Terms.
              If you do not agree, do not use our services.
            </p>

            <div className="terms-block">
              <h3>1. Acceptance of Terms</h3>
              <p>
                These Terms constitute a legally binding agreement between you and Vercher Technologies.
                We reserve the right to update these Terms at any time. Continued use of our services
                after changes are posted constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div className="terms-block">
              <h3>2. Services</h3>
              <p>
                Vercher Technologies provides custom software development, consulting, and software
                products (including, but not limited to, ShepherdsCore). Services are described on our
                website and may be modified, suspended, or discontinued at any time without prior notice.
              </p>
            </div>

            <div className="terms-block">
              <h3>3. Use of Services</h3>
              <p>You agree not to:</p>
              <ul className="terms-list">
                <li>Use our services for any unlawful purpose or in violation of any applicable law.</li>
                <li>Reverse engineer, decompile, or disassemble any of our software products.</li>
                <li>Attempt to gain unauthorized access to any portion of our systems or services.</li>
                <li>Reproduce, distribute, or create derivative works without our express written consent.</li>
                <li>Use our services to transmit spam, malware, or any other harmful content.</li>
              </ul>
            </div>

            <div className="terms-block">
              <h3>4. Intellectual Property</h3>
              <p>
                All content, software, trademarks, and materials on our website and products are the
                exclusive property of Vercher Technologies or its licensors. Nothing in these Terms
                grants you any rights to our intellectual property beyond what is expressly stated.
              </p>
            </div>

            <div className="terms-block">
              <h3>5. Payment & Billing</h3>
              <p>
                Fees for products and services are as stated at the time of purchase. All prices are
                in US Dollars unless otherwise specified. Payment is due at the time of purchase or as
                agreed upon in a separate written contract. Failure to pay may result in suspension or
                termination of services.
              </p>
            </div>

            <div className="terms-block">
              <h3>6. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, Vercher Technologies shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages arising out of
                or related to your use of our services, even if we have been advised of the possibility
                of such damages. Our total aggregate liability shall not exceed the amount you paid
                us in the twelve (12) months preceding the claim.
              </p>
            </div>

            <div className="terms-block">
              <h3>7. Disclaimer of Warranties</h3>
              <p>
                Our services are provided "as is" and "as available" without warranties of any kind,
                express or implied, including but not limited to warranties of merchantability, fitness
                for a particular purpose, or non-infringement.
              </p>
            </div>

            <div className="terms-block">
              <h3>8. Governing Law</h3>
              <p>
                These Terms are governed by the laws of the State of {STATE}, without regard to its
                conflict of law provisions. Any disputes shall be resolved in the state or federal
                courts located in {STATE}.
              </p>
            </div>

            <div className="terms-block">
              <h3>9. Termination</h3>
              <p>
                We reserve the right to suspend or terminate your access to our services at our sole
                discretion, with or without notice, for conduct that we believe violates these Terms
                or is harmful to other users, us, or third parties.
              </p>
            </div>

            <div className="terms-block">
              <h3>10. Contact</h3>
              <p>
                For questions about these Terms, contact us at{' '}
                <a href={`mailto:${EMAIL}`} className="terms-link">{EMAIL}</a>.
              </p>
            </div>
          </section>

          {/* ── PRIVACY POLICY ── */}
          <section id="privacy" className="terms-section glass">
            <h2 className="section-heading">Privacy <span className="gradient-text">Policy</span></h2>
            <p className="section-intro">
              Your privacy matters to us. This Privacy Policy explains how Vercher Technologies
              collects, uses, and protects your personal information when you use our website
              and services.
            </p>

            <div className="terms-block">
              <h3>1. Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <ul className="terms-list">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and billing information provided when you contact us, create an account, or make a purchase.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, browser type, IP address, and other analytics collected automatically.</li>
                <li><strong>Communications:</strong> Messages you send us through our contact forms or email.</li>
              </ul>
            </div>

            <div className="terms-block">
              <h3>2. How We Use Your Information</h3>
              <p>We use collected information to:</p>
              <ul className="terms-list">
                <li>Deliver and improve our products and services.</li>
                <li>Process transactions and send related information (receipts, confirmations).</li>
                <li>Respond to inquiries and provide customer support.</li>
                <li>Send service updates, security alerts, and support messages.</li>
                <li>Analyze usage to improve our website and offerings.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </div>

            <div className="terms-block">
              <h3>3. Sharing of Information</h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share information with trusted service providers who assist us in operating our
                business (e.g., payment processors, hosting providers), subject to confidentiality
                agreements. We may also disclose information when required by law or to protect
                the rights and safety of Vercher Technologies and its users.
              </p>
            </div>

            <div className="terms-block">
              <h3>4. Cookies</h3>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your
                experience. You can instruct your browser to refuse cookies, but some portions
                of our site may not function properly as a result.
              </p>
            </div>

            <div className="terms-block">
              <h3>5. Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your information.
                However, no method of transmission over the Internet is 100% secure. While we
                strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="terms-block">
              <h3>6. Data Retention</h3>
              <p>
                We retain your personal information only for as long as necessary to fulfill the
                purposes for which it was collected, or as required by law.
              </p>
            </div>

            <div className="terms-block">
              <h3>7. Children's Privacy</h3>
              <p>
                Our services are not directed to individuals under the age of 13. We do not
                knowingly collect personal information from children. If you believe a child has
                provided us with personal information, please contact us and we will promptly
                delete it.
              </p>
            </div>

            <div className="terms-block">
              <h3>8. Your Rights</h3>
              <p>
                Depending on your location, you may have the right to access, correct, or delete
                your personal information. To exercise these rights, contact us at{' '}
                <a href={`mailto:${EMAIL}`} className="terms-link">{EMAIL}</a>.
              </p>
            </div>

            <div className="terms-block">
              <h3>9. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by updating the effective date at the top of this page.
                Continued use of our services after changes constitutes your acceptance.
              </p>
            </div>
          </section>

          {/* ── REFUND POLICY ── */}
          <section id="refund" className="terms-section glass">
            <h2 className="section-heading">Refund <span className="gradient-text">Policy</span></h2>
            <p className="section-intro">
              We stand behind the quality of our work. This Refund Policy outlines how we handle
              refund requests for products and services offered by Vercher Technologies.
            </p>

            <div className="terms-block">
              <h3>1. Software Products (One-Time Purchases)</h3>
              <p>
                Due to the digital nature of our software products, all sales are generally final
                once the product has been delivered or accessed. However, we will issue a full
                refund within <strong>14 days</strong> of purchase if:
              </p>
              <ul className="terms-list">
                <li>The product does not function as described and we are unable to resolve the issue.</li>
                <li>The product was purchased in error and has not been accessed or downloaded.</li>
              </ul>
            </div>

            <div className="terms-block">
              <h3>2. Custom Software Development Services</h3>
              <p>
                Refunds for custom development engagements are handled on a case-by-case basis
                and are governed by the terms of your specific service agreement or contract.
                In general:
              </p>
              <ul className="terms-list">
                <li>Deposits and milestone payments are non-refundable once work on that phase has begun.</li>
                <li>If we fail to deliver the agreed scope, you may be entitled to a partial or full refund as described in your contract.</li>
                <li>Work paused or cancelled at the client's request after commencement will be billed for work completed to date.</li>
              </ul>
            </div>

            <div className="terms-block">
              <h3>3. Subscriptions & Recurring Services</h3>
              <p>
                For any subscription-based services:
              </p>
              <ul className="terms-list">
                <li>You may cancel at any time; cancellation takes effect at the end of the current billing cycle.</li>
                <li>We do not offer prorated refunds for partial billing periods unless required by law.</li>
                <li>If a billing error occurs on our end, we will issue a correction or refund promptly.</li>
              </ul>
            </div>

            <div className="terms-block">
              <h3>4. How to Request a Refund</h3>
              <p>
                To request a refund, email us at{' '}
                <a href={`mailto:${EMAIL}`} className="terms-link">{EMAIL}</a> with:
              </p>
              <ul className="terms-list">
                <li>Your name and email address used at purchase.</li>
                <li>Order number or invoice reference.</li>
                <li>Reason for the refund request.</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                We will respond within <strong>5 business days</strong>. Approved refunds are
                processed within 7–10 business days to the original payment method.
              </p>
            </div>

            <div className="terms-block">
              <h3>5. Exceptions</h3>
              <p>
                We reserve the right to deny refund requests if we determine, at our sole discretion,
                that the request is fraudulent, abusive, or in violation of our Terms of Service.
              </p>
            </div>

            <div className="terms-block">
              <h3>6. Contact</h3>
              <p>
                Questions about our Refund Policy? Reach us at{' '}
                <a href={`mailto:${EMAIL}`} className="terms-link">{EMAIL}</a>.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsPage;
