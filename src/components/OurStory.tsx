import React from 'react';
import { Sparkles, HeartHandshake, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="section story-section">
      <div className="container">
        <div className="story-layout">
          {/* Left Column: Authentic Photography Collage */}
          <div className="story-visual-side">
            <div className="story-logo-badge">
              <img
                src="/images/logo/aishwaryam-logo.png"
                alt="Aishwaryam Restaurant Official Stamp Logo"
                className="story-official-logo"
              />
            </div>
            <div className="story-image-main">
              <img
                src="/images/food/veg-thali.jpg"
                alt="A wholesome Indian vegetarian thali with freshly cooked dishes and rotis"
                loading="lazy"
                width={560}
                height={500}
                className="story-img"
              />
            </div>
            <div className="story-image-accent">
              <img
                src="/images/restaurant/interior-01.jpg"
                alt="Warm and welcoming restaurant dining space at Hingna Road"
                loading="lazy"
                width={360}
                height={300}
                className="story-img"
              />
            </div>

            <div className="story-tag-pill">
              <span className="tag-pill-highlight">Pure Vegetarian</span>
              <span>Hingna Road · Nagpur</span>
            </div>
          </div>

          {/* Right Column: Editorial Brand Introduction */}
          <div className="story-content-side">
            <span className="eyebrow">BRAND INTRODUCTION</span>
            <h2 className="section-title">Good Food. Meaningful Moments.</h2>

            <div className="story-editorial-quote-box">
              <span className="story-quote-mark start">“</span>
              <p className="story-quote-narrative">
                Nestled near Rajiv Nagar Metro Pillar 92 on Hingna Road, <strong>Aishwaryam Restaurant</strong> is more than just a dining spot—it is a sanctuary where pure vegetarian tradition meets genuine Nagpur warmth. From crispy golden ghee dosas to comforting homestyle thalis, every recipe is crafted to bring families and friends together around the table.
              </p>
              <span className="story-quote-mark end">”</span>
            </div>

            {/* Core Pillars */}
            <div className="story-pillars">
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Utensils size={20} />
                </div>
                <div>
                  <h4 className="pillar-heading">Traditional Recipes</h4>
                  <p className="pillar-text">Naturally fermented batters, fresh coconut chutneys ground daily, and everyday spices cooked with care.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4 className="pillar-heading">Warm Hospitality</h4>
                  <p className="pillar-text">Attentive, courteous service focused on welcoming families, daily office diners, and students alike.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="pillar-heading">Hygienic Pure Veg Dining</h4>
                  <p className="pillar-text">Dedicated vegetarian kitchen adhering to high standards of cleanliness, freshness, and quality ingredients.</p>
                </div>
              </div>
            </div>

            <div className="story-cta-row">
              <a href="#menu" className="btn btn-primary">
                Explore What We Serve
              </a>
              <a href={`tel:${RESTAURANT_INFO.phoneClean}`} className="btn btn-outline-green">
                Contact For Dining Enquiries
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
