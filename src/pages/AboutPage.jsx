import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const team = [
    {
      name: 'John Austin',
      role: 'CEO / CDO (Chief Design Officer)',
      bio: 'Handles UI/UX design and manages our extensive client portfolios, ensuring every brand vision is executed with precision.',
      portfolio: '#',
      icon: '🎨'
    },
    {
      name: 'John Manuel Vercher',
      role: 'CTO (Chief Technology Officer)',
      bio: 'Directs the core backend development and systems architecture, building the engine that powers our utility and custom solutions.',
      portfolio: '#',
      icon: '👨‍💻'
    },
    {
      name: 'Seth Lawrence',
      role: 'CFO',
      bio: 'Oversees all financial operations and internal administration, ensuring the stable growth and corporate integrity of the enterprise.',
      portfolio: '#',
      icon: '📊'
    }
  ];

  const pillars = [
    {
      title: 'Technical Excellence',
      description: 'We prioritize clean, maintainable, and efficient code in every build.'
    },
    {
      title: 'Strategic Design',
      description: 'Our designs aren\'t just pretty; they are engineered to solve business problems.'
    },
    {
      title: 'Long-term Partnership',
      description: 'We don\'t just ship and leave; we scale with your business.'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">Our Story & <span className="gradient-text">Mission</span></h1>
          <p className="about-tagline">
            At Vercher Technologies, we believe in the power of purposeful engineering. 
            We bridge the gap between complex software needs and high-utility products.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">The <span className="gradient-text">Team</span></h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card glass">
                <div className="team-icon">{member.icon}</div>
                <h3 className="member-name">{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <p className="member-bio">{member.bio}</p>
                <a href={member.portfolio} className="portfolio-link">View Portfolio →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="expertise-pillars">
        <div className="container">
          <h2 className="section-title">Our <span className="gradient-text">Expertise</span></h2>
          <div className="expertise-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="expertise-card glass">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
