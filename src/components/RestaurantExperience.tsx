import React from 'react';
import { MapPin, Sparkles, Coffee, Heart } from 'lucide-react';


export const RestaurantExperience: React.FC = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">THE DINING EXPERIENCE</span>
          <h2 className="section-title">Where Warmth Meets Flavour</h2>
          <p className="section-subtitle">
            An inviting pure vegetarian destination for morning breakfasts, relaxed family lunches, and leisurely evening dinners on Hingna Road.
          </p>
        </div>

        {/* Asymmetric Editorial Collage */}
        <div className="experience-mosaic">
          {/* Main Visual Column: Exterior Facade & Entrance */}
          <div className="experience-col-main">
            <div className="experience-img-frame main-frame">
              <img
                src="/images/restaurant/exterior.jpg"
                alt="Aishwaryam Restaurant Entrance and Signboard"
                className="experience-img"
                loading="lazy"
              />
              <div className="experience-caption-tag">
                <span className="tag-title">Welcoming Facade</span>
                <span className="tag-sub">Pillar 92, Hingna Road, Nagpur</span>
              </div>
            </div>
          </div>

          {/* Secondary Column: Interior Hall & Breakfast Detail */}
          <div className="experience-col-secondary">
            <div className="experience-img-frame top-frame">
              <img
                src="/images/restaurant/interior-01.jpg"
                alt="Spacious family dining interior hall"
                className="experience-img"
                loading="lazy"
              />
              <div className="experience-caption-tag">
                <span className="tag-title">Family Dining Hall</span>
                <span className="tag-sub">Comfortable, air-cooled space</span>
              </div>
            </div>

            <div className="experience-card-quote">
              <Sparkles size={24} className="experience-quote-icon" />
              <h3 className="experience-quote-title">A Welcoming Table for Everyone</h3>
              <p className="experience-quote-text">
                Whether dropping by for an energetic morning filter coffee and idlis, enjoying a hearty executive thali, or celebrating with family, Aishwaryam delivers authentic tastes made fresh every single day.
              </p>
              <div className="experience-badge-row">
                <div className="exp-badge">
                  <Coffee size={15} /> Morning Breakfast
                </div>
                <div className="exp-badge">
                  <Heart size={15} /> Family Dining
                </div>
                <div className="exp-badge">
                  <MapPin size={15} /> Metro Pillar 92
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
