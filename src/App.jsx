import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
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
                <Link to="/" className="footer-logo">
                  <span className="logo-main">VERCHER</span>
                  <span className="logo-sub">TECHNOLOGIES</span>
                </Link>
                <p className="footer-tagline">Purposive engineering for high-utility software.</p>
              </div>
              <div className="footer-links-container">
                <div className="footer-col">
                  <h4>Company</h4>
                  <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/projects">Our Work</Link>
                    <Link to="/contact">Contact</Link>
                  </div>
                </div>
                <div className="footer-col">
                  <h4>Products</h4>
                  <div className="footer-links">
                    <Link to="/products">Software Shop</Link>
                    <Link to="/products/shepherdscore">ShepherdsCore</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} Vercher Technologies. All rights reserved. 
              </p>
              <div className="footer-attribution">
                A division of <a href="https://vercherenterprises.com" target="_blank" rel="noopener noreferrer">Vercher Enterprises, LLC</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
