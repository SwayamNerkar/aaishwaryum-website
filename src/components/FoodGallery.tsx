import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import type { GalleryItem } from '../data/restaurantData';

export const FoodGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow">VISUAL JOURNAL</span>
          <h2 className="section-title">A Feast for the Senses</h2>
          <p className="section-subtitle">
            Glimpses of our freshly roasted dosas, wholesome thalis, Indian breads, and welcoming dining atmosphere.
          </p>
        </div>

        {/* Editorial Asymmetric Masonry-style Grid */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`gallery-item gallery-item-${item.aspect}`}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(item);
                }
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="gallery-img"
                loading="lazy"
                width={600}
                height={450}
              />
              <div className="gallery-overlay">
                <span className="gallery-tag">{item.category}</span>
                <h4 className="gallery-caption-title">{item.title}</h4>
                <p className="gallery-caption-text">{item.caption}</p>
                <span className="gallery-view-hint">
                  <Eye size={16} /> Click to expand
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on imagery authenticity */}
        <div className="gallery-notice">
          <p>
            Representational culinary photography highlighting our signature South Indian and vegetarian dining preparations. Authentic taste served fresh daily at our Hingna Road venue.
          </p>
        </div>
      </div>

      {/* Accessible Full-size Image Modal / Viewer */}
      {selectedImage && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="gallery-modal-img"
            />
            <div className="gallery-modal-info">
              <span className="eyebrow" style={{ color: 'var(--color-gold-rich)', marginBottom: '0.2rem' }}>
                {selectedImage.category}
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-ivory-warm)' }}>
                {selectedImage.title}
              </h3>
              <p style={{ color: 'rgba(250, 246, 238, 0.85)', fontSize: '0.95rem', marginTop: '0.25rem' }}>
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
