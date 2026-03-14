import React from 'react';
import './Pillars.css';

const Pillars = () => {
  const pillars = [
    {
      title: 'Custom Development',
      description: 'Bespoke solutions for enterprise and internal corporate tools. We build high-performance software tailored to your specific operational needs.',
      type: 'Bespoke & Internal',
      icon: '⚡'
    },
    {
      title: 'Utility Products',
      description: 'Streamlined, high-value versions of our custom builds. Cost-effective software for startups and small businesses looking for robust utility.',
      type: 'Scalable & Productized',
      icon: '🛠️'
    },
    {
      title: 'Managed Services',
      description: 'Long-term partnership for maintenance, updates, and feature development. We act as your dedicated engineering arm.',
      type: 'Support & Growth',
      icon: '🤝'
    }
  ];

  return (
    <section id="services" className="pillars">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our <span className="gradient-text">Three Pillars</span></h2>
          <p className="section-subtitle">How we deliver value across the digital landscape.</p>
        </div>
        
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card glass">
              <div className="pillar-icon">{pillar.icon}</div>
              <span className="pillar-type">{pillar.type}</span>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
