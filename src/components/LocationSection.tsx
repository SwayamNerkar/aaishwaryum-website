import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Train } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="section location-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">VISIT US IN NAGPUR</span>
          <h2 className="section-title">We’re Easy to Find.</h2>
          <p className="section-subtitle">
            Conveniently situated on Hingna Road right opposite Pillar No. 92, steps away from Rajiv Nagar Metro Station.
          </p>
        </div>

        <div className="location-grid">
          {/* Left Column: Essential Contact & Access Cards */}
          <div className="location-info-panel">
            {/* Address Card */}
            <div className="location-card">
              <div className="loc-card-icon-wrap">
                <MapPin size={24} color="#183D32" />
              </div>
              <div className="loc-card-content">
                <h3 className="loc-card-title">Restaurant Address</h3>
                <p className="loc-card-body">
                  <strong>Plot No. 5, Ground Floor</strong>, Nilkamal Society,<br />
                  <strong>Pillar No. 92</strong>, Hingna Road,<br />
                  Near Rajiv Nagar Metro Station,<br />
                  Nagpur, Maharashtra 440036, India.
                </p>
                <div className="loc-transit-tag">
                  <Train size={15} /> Landmark: Pillar No. 92, Rajiv Nagar Metro
                </div>
              </div>
            </div>

            {/* Operating Hours Card with editable/provisional notice */}
            <div className="location-card">
              <div className="loc-card-icon-wrap">
                <Clock size={24} color="#183D32" />
              </div>
              <div className="loc-card-content">
                <h3 className="loc-card-title">Opening Hours</h3>
                <p className="loc-card-body">
                  <span className="loc-hours-highlight">{RESTAURANT_INFO.operatingHours.display}</span>
                </p>
                <p className="loc-card-note">
                  *Provisional schedule. Open daily for breakfast, lunch, tea &amp; dinner. Please call ahead if planning a large family gathering.
                </p>
              </div>
            </div>

            {/* Phone & Direct Contact */}
            <div className="location-card">
              <div className="loc-card-icon-wrap">
                <Phone size={24} color="#183D32" />
              </div>
              <div className="loc-card-content">
                <h3 className="loc-card-title">Direct Contact</h3>
                <p className="loc-card-body">
                  <a href={`tel:${RESTAURANT_INFO.phoneClean}`} className="loc-phone-link">
                    {RESTAURANT_INFO.phone}
                  </a>
                </p>
                <p className="loc-card-sub">
                  Reach us for table availability, takeaway inquiries, and catering orders.
                </p>
              </div>
            </div>

            {/* Actions CTA Row */}
            <div className="location-actions-row">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <Navigation size={17} />
                Get Directions
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="btn btn-primary"
              >
                <Phone size={17} />
                Call Restaurant
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Box */}
          <div className="location-map-panel">
            <div className="map-embed-wrapper">
              <iframe
                title="Aishwaryam Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.84883460613!2d79.0305881!3d21.1185368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be58cf093db5%3A0x6bfecebb620ff33e!2sAishwaryam%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-meta-banner">
              <span>Plot No. 5, Pillar 92, Hingna Road, Nagpur</span>
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-link"
              >
                Open in Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
