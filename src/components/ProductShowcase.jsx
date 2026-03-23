import React, { useState } from 'react';
import './ProductShowcase.css';

const slides = [
  {
    id: 'dashboard',
    title: 'Stewardship Dashboard',
    desc: 'Your ministry command center. Monitor health with a quick overview of active members and giving trends—all without the "member tax" of cloud subscriptions.',
    image: '/assets/dashboard.png'
  },
  {
    id: 'members',
    title: 'Legacy Intelligence',
    desc: 'Complete directory management designed to protect your congregation\'s legacy. Track naming, spiritual journeys, and family connectivity with physical data security.',
    image: '/assets/members.png'
  },
  {
    id: 'giving',
    title: 'Financial Sovereignty',
    desc: 'Log tithes and offerings directly into your private database. Automated, tax-compliant tracking that saves you thousands in yearly SaaS fees.',
    image: '/assets/giving.png'
  },
  {
    id: 'security',
    title: 'Absolute Data Security',
    desc: 'True security means physical control. In an era of cloud breaches, your data remains safely stored on your local hardware—zero telemetry, zero risk.',
    image: '/assets/dashboard.png' // Using dashboard as a fallback or a placeholder for security view
  },
  {
    id: 'ownership',
    title: 'Physical Data Ownership',
    desc: 'You buy it, you own it. No forced subscriptions, no cloud-locked databases. Own your ministry software, don\'t rent it.',
    image: '/assets/giving.png' // Using giving as a placeholder for ownership view
  }
];

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="product-showcase">
      <div className="showcase-container">
        <div className="showcase-controls">
          <button onClick={prevSlide} className="control-btn prev" aria-label="Previous Slide">←</button>
          <button onClick={nextSlide} className="control-btn next" aria-label="Next Slide">→</button>
        </div>

        <div className="showcase-track">
          {slides.map((slide, index) => {
            let position = 'next';
            if (index === activeIndex) position = 'active';
            else if (index === (activeIndex - 1 + slides.length) % slides.length) position = 'prev';

            return (
              <div key={slide.id} className={`showcase-slide ${position}`}>
                <div className="slide-content glass">
                  <div className="slide-image-container">
                    <div className={`mockup-fallback ${slide.id}`}>
                      {slide.id === 'dashboard' && (
                        <div className="mockup-ui">
                          <div className="mockup-nav"></div>
                          <div className="mockup-chart"></div>
                        </div>
                      )}
                      {slide.id === 'members' && (
                        <div className="mockup-ui">
                          <div className="mockup-list">
                            <div></div><div></div><div></div>
                          </div>
                        </div>
                      )}
                      {slide.id === 'giving' && (
                        <div className="mockup-ui">
                          <div className="mockup-graph"></div>
                          <div className="mockup-form"></div>
                        </div>
                      )}
                    </div>
                    <img src={slide.image} alt={slide.title} className="slide-image" onError={(e) => e.target.style.display='none'} />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="slide-info">
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="showcase-dots">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
