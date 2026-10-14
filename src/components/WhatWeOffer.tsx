import React from 'react';
import { Utensils, ShieldCheck, Wallet, Users, Sparkles } from 'lucide-react';
import { WHAT_WE_OFFER_POINTS } from '../data/restaurantData';

export const WhatWeOffer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils size={28} />;
      case 'ShieldCheck':
        return <ShieldCheck size={28} />;
      case 'Wallet':
        return <Wallet size={28} />;
      case 'Users':
        return <Users size={28} />;
      case 'Sparkles':
      default:
        return <Sparkles size={28} />;
    }
  };

  return (
    <section className="section what-we-offer-section" aria-label="What We Offer">
      <div className="container">
        <div className="section-header-centered">
          <span className="eyebrow">OUR COMMITMENT</span>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Crafting wholesome pure vegetarian dining with authentic recipes, transparent hygiene, and unmatched Nagpur warmth.
          </p>
        </div>

        <div className="offerings-row">
          {WHAT_WE_OFFER_POINTS.map((item) => (
            <div key={item.id} className="offering-pill-card">
              <div className="offering-icon-circle">
                {getIcon(item.icon)}
              </div>
              <h3 className="offering-title">{item.title}</h3>
              <p className="offering-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
