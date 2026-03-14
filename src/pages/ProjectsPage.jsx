import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'ShepherdsCore',
      category: 'Utility Product (Featured)',
      description: 'Our flagship church management platform, generalized from high-fidelity custom builds for national congregations.',
      tags: ['Product', 'SaaS', 'Church Tech', 'Generalized'],
      icon: '⛪',
      path: '/products/shepherdscore',
      highlight: true
    },
    {
      title: 'Enterprise ERP Suite',
      category: 'Custom Development',
      description: 'A massive internal tool built for a Fortune 500 logistics company to manage global fleet operations.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Internal Tool'],
      icon: '🏢'
    },
    {
      title: 'Pulse Analytics',
      category: 'Custom Build',
      description: 'Real-time telemetry and monitoring dashboard for manufacturing hardware.',
      tags: ['Hardware', 'Real-time', 'Dashboard'],
      icon: '📈'
    }
  ];

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1 className="projects-title">Our <span className="gradient-text">Work</span></h1>
          <p className="projects-tagline">
            From bespoke enterprise builds to high-value utility generalizations. 
            We build software that solves problems, whether custom or productized.
          </p>
        </div>
      </section>

      <section className="model-explanation glass">
        <div className="container">
          <div className="model-grid">
            <div className="model-text">
              <h2>The <span className="gradient-text">Custom to Utility</span> Pipeline</h2>
              <p>
                Every product in our shop started as a high-end custom build for a client. We take the specialized work we do for industry leaders, strip away the custom bloat, and generalize the core value into affordable, high-utility products.
              </p>
            </div>
            <div className="model-visual">
              <div className="visual-line"></div>
              <span>CUSTOM → UTILITY</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-list">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className={`project-card glass ${project.highlight ? 'featured-card' : ''}`}>
                <div className="project-icon">{project.icon}</div>
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                {project.path ? (
                  <Link to={project.path} className="btn-case-study">View Project Details →</Link>
                ) : (
                  <button className="btn-case-study-muted">Case Study Coming Soon</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
