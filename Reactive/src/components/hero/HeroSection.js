import React from 'react';
import HeroImage from './HeroImage';
import HeroText from './HeroText';
import HeroButtons from './HeroButtons';
import './hero.css';

function HeroSection() {
  return (
    <section id="hero">
      <HeroImage />
      <HeroText />
      <HeroButtons />
    </section>
  );
}

export default HeroSection;