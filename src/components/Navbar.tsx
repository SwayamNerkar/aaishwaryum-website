import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, MapPin, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Signature Dishes', href: '#signature' },
    { label: 'Experience', href: '#experience' },
    { label: 'Menu', href: '#menu' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Find Us', href: '#location' },
  ];

  return (
    <header
      className={`navbar-header ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
      role="banner"
    >
      <div className="container nav-container">
        {/* Left: Official Circular Logo & Brand Wordmark */}
        <a href="#hero" className="brand-logo" aria-label="Aishwaryam Restaurant - Home">
          <img
            src="/images/logo/aishwaryam-logo.png"
            alt="Aishwaryam Restaurant Official Logo"
            className="brand-logo-img"
          />
          <div className="brand-text-wrap">
            <span className="brand-name">AISHWARYAM</span>
            <span className="brand-subtitle">PURE VEGETARIAN · NAGPUR</span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Clickable Phone & Gold CTA */}
        <div className="nav-actions">
          <a
            href={`tel:${RESTAURANT_INFO.phoneClean}`}
            className="phone-quick-link"
            aria-label={`Call Aishwaryam Restaurant at ${RESTAURANT_INFO.phone}`}
          >
            <Phone size={15} />
            <span className="phone-number-text">{RESTAURANT_INFO.phone}</span>
          </a>

          <a href="#menu" className="btn btn-gold nav-cta-btn">
            Explore Menu
          </a>

          {/* Accessible Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-drawer" role="dialog" aria-modal="true">
          <div className="mobile-menu-inner container">
            <div className="mobile-brand-meta">
              <span className="eyebrow" style={{ color: 'var(--color-gold-rich)' }}>PURE VEGETARIAN</span>
              <p style={{ fontSize: '0.9rem', color: 'rgba(250, 246, 238, 0.9)' }}>
                Plot No. 5, Pillar No. 92, Hingna Road, Nagpur
              </p>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="btn btn-gold"
                style={{ width: '100%', marginBottom: '0.75rem' }}
              >
                <Phone size={16} /> Call {RESTAURANT_INFO.phone}
              </a>
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
                style={{ width: '100%' }}
              >
                <MapPin size={16} /> Get Directions <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
