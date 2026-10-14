import React from 'react';
import { Star, MapPin, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-fullscreen-editorial" aria-label="Aishwaryam Restaurant">
      {/* Edge-to-edge Real Restaurant Exterior Background Image */}
      <div className="hero-bg-media-container" aria-hidden="true">
        <img
          src="/images/restaurant/exterior.jpg"
          alt="Aishwaryam Restaurant Exterior & Signboard on Hingna Road Nagpur"
          className="hero-fullscreen-exterior-img"
          loading="eager"
        />
        {/* Subtle deep forest-green overlay + stronger left reading gradient */}
        <div className="hero-editorial-scrim" />
      </div>

      <div className="container hero-editorial-container">
        {/* Clean, Cinematic Lower-Left / Vertically Centered Left Copy */}
        <div className="hero-left-content">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow-tag">
            <span className="hero-gold-bullet" />
            <span>PURE VEGETARIAN · NAGPUR</span>
          </div>

          {/* Main Heading with clamp font size & turmeric gold accent */}
          <h1 className="hero-editorial-heading">
            Tradition on <br />
            <span className="heading-gold-accent">Every Plate.</span>
          </h1>

          {/* Supporting Description */}
          <p className="hero-editorial-description">
            From golden, crisp dosas to comforting Indian thalis, discover the flavours that bring everyone to the table.
          </p>

          {/* Action Buttons Row */}
          <div className="hero-editorial-actions">
            <a href="#menu" className="btn btn-gold hero-btn-primary">
              <UtensilsCrossed size={17} />
              Explore Our Menu
            </a>

            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light hero-btn-secondary"
            >
              <MapPin size={17} />
              Get Directions
            </a>
          </div>

          {/* Restrained Verified Trust Indicator */}
          <div className="hero-trust-indicator-row">
            <div className="trust-stars-cluster" aria-label="4.5 stars out of 5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  fill={i < 4 ? '#D5A34B' : 'none'}
                  color="#D5A34B"
                />
              ))}
            </div>
            <span className="trust-text-label">
              <strong>★ 4.5 on Google</strong> · 101 reviews
            </span>
          </div>
        </div>

        {/* Life of Chai Inspired Restaurant Metric Counters Strip */}
        <div className="hero-stats-banner">
          <div className="hero-stat-card">
            <span className="hero-stat-number">100%</span>
            <span className="hero-stat-label">Shuddh Shakahari</span>
            <span className="hero-stat-sub">Pure Vegetarian Kitchen</span>
          </div>
          <div className="hero-stat-card">
            <span className="hero-stat-number">4.5★</span>
            <span className="hero-stat-label">Google Rating</span>
            <span className="hero-stat-sub">101+ Verified Reviews</span>
          </div>
          <div className="hero-stat-card">
            <span className="hero-stat-number">30+</span>
            <span className="hero-stat-label">Daily Specialties</span>
            <span className="hero-stat-sub">Dosas, Thalis & Curries</span>
          </div>
          <div className="hero-stat-card">
            <span className="hero-stat-number">Pillar 92</span>
            <span className="hero-stat-label">Hingna Road</span>
            <span className="hero-stat-sub">Near Rajiv Nagar Metro</span>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Cue */}
      <div className="hero-scroll-cue-wrap">
        <a href="#offers" aria-label="Scroll down to explore restaurant story">
          <span>Explore Aishwaryam Story</span>
          <ChevronDown size={16} className="chevron-bounce" />
        </a>
      </div>
    </section>
  );
};
