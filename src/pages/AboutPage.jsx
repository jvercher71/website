import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const team = [
    {
      name: 'John Austin',
      role: 'CEO / CDO (Chief Design Officer)',
      bio: "John leads our design vision with a focus on creating modern, intuitive experiences. He's passionate about blending aesthetic beauty with functional simplicity.",
      icon: '🎨'
    },
    {
      name: 'John Manuel Vercher',
      role: 'CTO (Chief Technology Officer)',
      bio: "John handles the technical heavy lifting, building the robust architecture that powers our software. He's dedicated to creating fast, secure, and scalable solutions.",
      icon: '👨‍💻'
    },
    {
      name: 'Seth Lawrence',
      role: 'CFO',
      bio: "Seth keeps our operations running smoothly, managing the business side so our engineers can focus on building. He ensures everything we do is built on a stable foundation.",
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

      <section className="about-vercher">
        <div className="container">
          <div className="about-intro-card glass">
            <h2 className="section-title">A Family <span className="gradient-text">Legacy</span></h2>
            <p className="intro-text">
              Vercher Technologies is a family-owned and operated software development firm rooted in the heart of the Mississippi Gulf Coast. 
              Founded by John Manuel Vercher and his son, John Austin, our team is bound by more than just engineering—it's bound by integrity and a personal touch.
            </p>
            <p className="intro-text">
              Seth Lawrence, a lifelong friend who has become a brother to John Austin and a second son to John Manuel, completes our leadership. 
              We are a proud Mississippi company, bringing Gulf Coast grit and family values to every line of code we write. 
              Whether we are developing custom applications or solving complex technical challenges, our mission is to provide 
              the high-level expertise of a global tech firm with the accessibility and care of a local neighbor.
            </p>
          </div>

          <div className="why-choose-us">
            <h2 className="section-title text-center">Why <span className="gradient-text">Choose Us?</span></h2>
            <div className="features-grid">
              <div className="feature-card glass">
                <div className="feature-icon">🛡️</div>
                <h3>Family-First Integrity</h3>
                <p>We take a personal interest in every project we touch, ensuring our work reflects our family name.</p>
              </div>
              <div className="feature-card glass">
                <div className="feature-icon">📍</div>
                <h3>Gulf Coast Proud</h3>
                <p>Based in Gulfport, Mississippi, we are committed to fueling the growing tech landscape of the South.</p>
              </div>
              <div className="feature-card glass">
                <div className="feature-icon">💡</div>
                <h3>Tailored Innovation</h3>
                <p>We specialize in custom software and app development designed to meet the unique needs of your business or project.</p>
              </div>
            </div>
          </div>
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
