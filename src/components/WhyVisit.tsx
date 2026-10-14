import React from 'react';
import { Utensils, Leaf, Wallet, Users } from 'lucide-react';
import { WHY_VISIT_POINTS } from '../data/restaurantData';

export const WhyVisit: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Utensils size={28} />;
      case 1:
        return <Leaf size={28} />;
      case 2:
        return <Wallet size={28} />;
      case 3:
      default:
        return <Users size={28} />;
    }
  };

  return (
    <section id="why-us" className="section why-visit-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header-centered">
          <span className="eyebrow">OUR DINING PROMISE</span>
          <h2 className="section-title">Why Guests Return to Aishwaryam</h2>
          <p className="section-subtitle">
            Thoughtful preparation, authentic taste, and genuine Indian hospitality designed for everyday dining.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="features-grid">
          {WHY_VISIT_POINTS.map((point, index) => (
            <div key={point.id} className="feature-card">
              <div className="feature-icon-wrapper">
                {getIcon(index)}
              </div>
              <span className="feature-number">0{index + 1}</span>
              <h3 className="feature-title">{point.title}</h3>
              <p className="feature-subtitle">{point.subtitle}</p>
              <p className="feature-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
