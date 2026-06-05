import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '24/7', label: 'Expert Support' },
    { value: '100%', label: 'Premium Quality' },
  ];

  return (
    <div className="about-page-container">
      {/* قسم الهيدر الرئيسي */}
      <section className="about-hero">
        <h1 className="about-title">Our Story</h1>
        <p className="about-subtitle">
          Redefining the modern shopping experience through curation, quality, and simplicity.
        </p>
      </section>

      {/* قسم المحتوى والتفاصيل */}
      <section className="about-content-grid">
        <div className="about-text-block">
          <h2>Who We Are</h2>
          <p>
            Founded with a vision to bridge the gap between premium design and accessibility, 
            <strong> QA Shop</strong> is a curated destination for everyday essentials. From high-end 
            timepieces to cutting-edge technology, we select every item with an uncompromising 
            eye for detail.
          </p>
          <p>
            We believe that shopping should be intuitive, delightful, and secure. That is why 
            we focus on clean interfaces, fast shipping, and transparent customer relations.
          </p>
        </div>

        {/* قسم الأرقام والإحصائيات الصامتة لبناء الثقة */}
        <div className="about-stats-aside">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* قسم دعوة لاتخاذ إجراء (CTA) */}
      <section className="about-footer-cta">
        <h3>Ready to explore?</h3>
        <Link to="/" className="explore-shop-btn">
          Back to Store
        </Link>
      </section>
    </div>
  );
};

export default About;