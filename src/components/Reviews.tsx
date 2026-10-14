import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">GUEST EXPERIENCES</span>
          <h2 className="section-title">Good Food. Good Company. Happy Memories.</h2>
          <p className="section-subtitle">
            What our valued diners share about our South Indian specialties, wholesome thalis, and welcoming hospitality.
          </p>
        </div>

        {/* Rating Score Board with verified ratings */}
        <div className="reviews-score-board">
          <div className="score-item score-primary">
            <div className="score-top">
              <span className="score-number">4.5</span>
              <div className="score-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#D5A34B" color="#D5A34B" />
                ))}
              </div>
            </div>
            <div className="score-meta">
              <strong>Google Verified Rating</strong>
              <span>Based on 101 authentic customer reviews</span>
            </div>
          </div>

          <div className="score-item">
            <span className="score-secondary-number">4.4★</span>
            <div className="score-meta">
              <strong>Swiggy Rating</strong>
              <span>Top rated delivery &amp; dining</span>
            </div>
          </div>

          <div className="score-item">
            <span className="score-secondary-number">4.1★</span>
            <div className="score-meta">
              <strong>Zomato Rating</strong>
              <span>Popular for South Indian &amp; Veg</span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="reviews-cards-grid">
          {CUSTOMER_REVIEWS.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card-header">
                <Quote size={28} className="review-quote-icon" />
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill={i < Math.floor(review.rating) ? '#D5A34B' : 'none'}
                      color="#D5A34B"
                    />
                  ))}
                </div>
              </div>

              <p className="review-text">"{review.comment}"</p>

              <div className="review-card-footer">
                <div className="review-author-info">
                  <h4 className="review-author-name">{review.author}</h4>
                  <span className="review-source-tag">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Link to Google Reviews */}
        <div className="reviews-cta-wrap">
          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Read All 101+ Google Reviews</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
