import React, { useState } from 'react';
import './ProductShowcase.css';

const slides = [
  {
    id: 'dashboard',
    title: 'Ministry Dashboard',
    desc: 'Your command center. Get a quick overview of active members, monthly & annual giving trends, and recent contributions at a glance.',
    image: '/assets/dashboard.png'
  },
  {
    id: 'members',
    title: 'Member Intelligence',
    desc: 'Complete directory management. Track names, photos, spiritual journeys, and family connectivity with lightning-fast search.',
    image: '/assets/members.png'
  },
  {
    id: 'giving',
    title: 'Financial Stewardship',
    desc: 'Easily log contributions by category (Tithe, Missions, Building Fund). Automated tracking for tax-compliant reporting.',
    image: '/assets/giving.png'
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
                          <div className="mockup-stats">
                            <div></div><div></div><div></div>
                          </div>
                        </div>
                      )}
                      {slide.id === 'members' && (
                        <div className="mockup-ui">
                          <div className="mockup-list">
                            <div></div><div></div><div></div><div></div>
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
                    {/* <img src={slide.image} alt={slide.title} className="slide-image" /> */}
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
