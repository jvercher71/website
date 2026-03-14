import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import ShepherdsCoreDetailPage from './pages/ShepherdsCoreDetailPage';
import ShepherdsCoreDemoPage from './pages/ShepherdsCoreDemoPage';
import ShepherdsCoreBuyPage from './pages/ShepherdsCoreBuyPage';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products/shepherdscore" element={<ShepherdsCoreDetailPage />} />
            <Route path="/products/shepherdscore/demo" element={<ShepherdsCoreDemoPage />} />
            <Route path="/products/shepherdscore/buy" element={<ShepherdsCoreBuyPage />} />
          </Routes>
        </main>
        
        <footer className="main-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <a href="/" className="footer-logo">
                  <span className="logo-text">VERCHER</span>
                  <span className="logo-sub">TECHNOLOGIES</span>
                </a>
                <p className="footer-tagline">Purposive engineering for high-utility software.</p>
              </div>
              <div className="footer-links-grid">
                <div className="link-col">
                  <h4>Company</h4>
                  <a href="/about">About Us</a>
                  <a href="/projects">Our Work</a>
                  <a href="/contact">Contact</a>
                </div>
                <div className="link-col">
                  <h4>Products</h4>
                  <a href="/products">Software Shop</a>
                  <a href="/products/shepherdscore">ShepherdsCore</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} Vercher Technologies. All rights reserved. 
                <span className="footer-attribution">
                  A division of <a href="https://vercherenterprises.com" target="_blank" rel="noopener noreferrer">Vercher Enterprises, LLC</a>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
