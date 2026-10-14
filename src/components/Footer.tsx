import React from 'react';
import { Phone, MapPin, ArrowUp, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand">
              <img
                src="/images/logo/aishwaryam-logo.png"
                alt="Aishwaryam Restaurant Official Logo"
                className="footer-logo-img"
              />
              <div>
                <span className="brand-name">AISHWARYAM</span>
                <span className="brand-subtitle">RESTAURANT · NAGPUR</span>
              </div>
            </div>
            <p className="footer-about">
              Pure Vegetarian, South Indian and Multi-Cuisine dining experience in Nagpur. Serving authentic dosas, wholesome thalis, and daily Indian comfort foods.
            </p>
            <div className="footer-social-links">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram profile @aishwaryam_restaurant_"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>{RESTAURANT_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#our-story">Our Story</a></li>
              <li><a href="#signature">Signature Dishes</a></li>
              <li><a href="#menu">Menu Selection</a></li>
              <li><a href="#gallery">Food Gallery</a></li>
              <li><a href="#reviews">Guest Reviews</a></li>
              <li><a href="#location">Find Us</a></li>
            </ul>
          </div>

          {/* Dining Information Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Dining Hours</h4>
            <div className="footer-hours-block">
              <p className="footer-hours-label">All Days (Monday – Sunday)</p>
              <p className="footer-hours-val">{RESTAURANT_INFO.operatingHours.display}</p>
              <p className="footer-hours-note">{RESTAURANT_INFO.operatingHours.note}</p>
            </div>
            <div className="footer-rating-pill">
              <span>Google: 4.5★ (101 reviews)</span>
              <span>Swiggy: 4.4★ · Zomato: 4.1★</span>
            </div>
          </div>

          {/* Location & Contact Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Visit Us</h4>
            <address className="footer-address">
              <p className="footer-contact-line">
                <MapPin size={16} className="contact-icon" />
                <span>Plot No. 5, Ground Floor, Nilkamal Society, Pillar No. 92, Hingna Road, near Rajiv Nagar Metro Station, Nagpur 440036</span>
              </p>
              <p className="footer-contact-line">
                <Phone size={16} className="contact-icon" />
                <a href={`tel:${RESTAURANT_INFO.phoneClean}`} className="footer-phone-link">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
            </address>

            <div className="footer-action-wrap">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
              >
                <Navigation size={14} /> Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {currentYear} Aishwaryam Restaurant. All rights reserved. Pure Vegetarian Dining, Nagpur.
          </p>

          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};
