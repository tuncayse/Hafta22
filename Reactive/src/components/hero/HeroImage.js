import React from 'react';
import heroManImage from '../../images/hero-man.jpg';
import './hero.css';

function HeroImage() {
  return (
    <img src={heroManImage} alt="hero-man" />
  );
}

export default HeroImage;