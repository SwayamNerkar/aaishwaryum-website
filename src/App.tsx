import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeOffer } from './components/WhatWeOffer';
import { OurStory } from './components/OurStory';
import { SignatureShowcase } from './components/SignatureShowcase';
import { RestaurantExperience } from './components/RestaurantExperience';
import { MenuSection } from './components/MenuSection';
import { WhyVisit } from './components/WhyVisit';
import { FoodGallery } from './components/FoodGallery';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main id="main-content">
        <Hero />
        <div id="offers">
          <WhatWeOffer />
        </div>
        <OurStory />
        <SignatureShowcase />
        <RestaurantExperience />
        <MenuSection />
        <WhyVisit />
        <FoodGallery />
        <Reviews />
        <LocationSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
