import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';

export const SignatureShowcase: React.FC = () => {
  return (
    <section id="signature" className="section signature-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">SIGNATURE FOOD SHOWCASE</span>
          <h2 className="section-title">Flavours Worth Coming Back For.</h2>
          <p className="section-subtitle">
            Authentic South Indian specialties, wholesome daily feasts, and comforting Indian favourites crafted with pure ingredients.
          </p>
        </div>

        {/* Asymmetrical Editorial Food Cards Grid */}
        <div className="signature-grid">
          {SIGNATURE_DISHES.map((dish, index) => (
            <article key={dish.id} className={`signature-card signature-card-${index + 1}`}>
              <div className="signature-img-wrap">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="signature-img"
                  loading="lazy"
                  width={600}
                  height={450}
                />
                <div className="signature-badge">{dish.badge}</div>
              </div>

              <div className="signature-body">
                <span className="signature-eyebrow">{dish.eyebrow}</span>
                <h3 className="signature-name">{dish.name}</h3>
                <p className="signature-desc">{dish.description}</p>
                <div className="signature-action">
                  <a href="#menu" className="signature-link">
                    <span>Explore on Menu</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
