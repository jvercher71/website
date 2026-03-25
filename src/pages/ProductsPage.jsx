import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

const ProductsPage = () => {
  const products = [
    {
      id: 'shepherdscore',
      name: 'ShepherdsCore',
      badge: 'Bestseller',
      category: 'Church Management',
      tagline: 'Streamlined management for the community church.',
      description: 'The essential platform for member tracking, giving, and volunteer management. Designed for simplicity and stewardship.',
      price: '$600',
      icon: '⛪',
      path: '/products/shepherdscore'
    },
    // Future products can be added here
  ];

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container">
          <h1 className="products-title">Utility <span className="gradient-text">Software Shop</span></h1>
          <p className="products-tagline">
            Bespoke-quality software, generalized for your immediate business needs. 
            Rooted in the Mississippi Gulf Coast, we bring the same family-owned care to our utility products 
            as we do to our high-end custom builds.
          </p>
        </div>
      </section>

      <section className="products-grid-section">
        <div className="container">
          <div className="products-listing">
            {products.map((product) => (
              <div key={product.id} className="product-card glass">
                <div className="product-header">
                  <div className="product-icon-large">{product.icon}</div>
                  {product.badge && <span className="product-badge-pill">{product.badge}</span>}
                </div>
                <div className="product-info">
                  <span className="product-cat">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p className="product-tag">{product.tagline}</p>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">Lifetime License: {product.price}</span>
                    <div className="product-links">
                      <Link to={product.path} className="btn-secondary">Learn More</Link>
                      <Link to={`${product.path}/buy`} className="btn-primary glass">Buy Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="custom-build-cta glass">
            <div className="cta-content">
              <h2>Need a Custom <span className="gradient-text">Solution?</span></h2>
              <p>
                Don't see exactly what you need? We specialize in building bespoke applications tailored to your unique workflows. 
                Whether it's a specialized church tool or an internal enterprise suite, let's talk about a custom build.
              </p>
            </div>
            <Link to="/contact" className="btn-primary glass">Discuss Custom Build</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
