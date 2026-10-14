import React, { useState } from 'react';
import { Phone, Info } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import type { MenuItem } from '../data/restaurantData';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">OUR MENU SELECTION</span>
          <h2 className="section-title">Wholesome Dishes Crafted Daily</h2>
          <p className="section-subtitle">
            From crispy fermented dosas and steamed breakfast classics to satisfying Punjabi curries and traditional thalis.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="menu-categories-bar" role="tablist" aria-label="Menu category filters">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`menu-filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="menu-items-grid">
          {filteredItems.map((item: MenuItem) => (
            <article key={item.id} className="menu-item-card">
              {item.image && (
                <div className="menu-item-img-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-item-img"
                    loading="lazy"
                    width={340}
                    height={220}
                  />
                  {item.tag && (
                    <span className="menu-item-tag">{item.tag}</span>
                  )}
                </div>
              )}

              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3 className="menu-item-name">{item.name}</h3>
                </div>

                <p className="menu-item-description">{item.description}</p>

                {/* Honest & Transparent Note as required */}
                <div className="menu-item-footer">
                  <span className="dish-pure-veg-badge">
                    <span className="veg-icon-dot" /> Pure Veg
                  </span>
                  <span className="menu-availability-text">Prepared Fresh to Order</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Verified Pricing & Enquiry Notice Card */}
        <div className="menu-notice-box">
          <div className="notice-icon-wrap">
            <Info size={24} color="#D5A34B" />
          </div>
          <div className="notice-content">
            <h4 className="notice-title">Looking for today’s menu &amp; daily specials?</h4>
            <p className="notice-body">
              To guarantee absolute accuracy without placeholder pricing, our daily specials and exact prices are updated directly at the counter. Contact us anytime for the latest daily offerings or quick takeaway orders.
            </p>
          </div>
          <div className="notice-action">
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="btn btn-gold btn-call-enquire"
            >
              <Phone size={17} />
              Call to Enquire: {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
