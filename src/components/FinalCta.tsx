import React from 'react';
import { UtensilsCrossed, Navigation, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FinalCta: React.FC = () => {
  return (
    <section className="final-cta-section" aria-label="Closing invitation">
      <div className="final-cta-bg" />
      <div className="container final-cta-container">
        <div className="final-cta-content">
          <div className="final-cta-logo-wrap">
            <img
              src="/images/logo/aishwaryam-logo.png"
              alt="Aishwaryam Restaurant Official Logo"
              className="final-cta-logo"
            />
          </div>

          <span className="eyebrow" style={{ color: 'var(--color-gold-rich)' }}>
            EXPERIENCE AISHWARYAM
          </span>

          <h2 className="final-cta-headline">
            Your Next Favourite Meal Awaits.
          </h2>

          <p className="final-cta-lead">
            Come hungry. Bring your favourites. Let Aishwaryam take care of the flavour.
          </p>

          <div className="final-cta-buttons">
            <a href="#menu" className="btn btn-gold">
              <UtensilsCrossed size={17} />
              Explore Menu
            </a>

            <a
              href={RESTAURANT_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <Navigation size={17} />
              Get Directions
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="btn btn-primary"
            >
              <Phone size={17} />
              Call {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
