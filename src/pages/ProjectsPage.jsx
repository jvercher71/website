import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'ShepherdsCore',
      category: 'Technical Case Study (Featured)',
      description: 'Developing a high-performance, local-first utility architecture to restore data sovereignty for community organizations.',
      tags: ['Engineering', 'Architecture', 'SQL', 'Data Sovereignty'],
      icon: '🏛️',
      path: '/projects/shepherdscore',
      highlight: true
    }
  ];

  return (
    <div className="projects-page grid-texture">
      <div className="hero-glow"></div>
      <section className="projects-hero">
        <div className="container">
          <h1 className="projects-title">Our <span className="gradient-text">Work</span></h1>
          <p className="projects-tagline">
            From bespoke custom builds for industry leaders to high-utility tools for community organizations. 
            We build software that solves problems, whether custom or productized.
          </p>
        </div>
      </section>

      <section className="model-explanation glass">
        <div className="container">
          <div className="model-grid">
            <div className="model-text">
              <h2>The <span className="gradient-text">Core to Custom</span> Foundation</h2>
              <p>
                We provide a unique dual-model approach. We gain deep industry insights from our high-end custom builds, 
                which we use to develop independent, high-utility products. This allows us to provide powerful, 
                professional-grade logic in affordable, streamlined packages—while ensuring our custom 
                clients receive entirely unique, proprietary solutions.
              </p>
            </div>
            <div className="model-visual">
              <div className="visual-line"></div>
              <span>CORE ↔ CUSTOM</span>
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
