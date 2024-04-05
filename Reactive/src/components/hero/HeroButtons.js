import React from 'react';
import './hero.css';

function HeroButtons() {
  return (
    <div className="hero-bottom" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="col-12 col-md-auto mb-2"> 
        <a className="btn btn-primary signup-button" href="#" style={{ backgroundColor: 'rgb(21,76,121)', border: 'none', width: '100%', marginTop: '2%' }}>Sign Up</a>
      </div>
      <div className="col-12 col-md-auto">
        <button type="button" className="btn btn-outline-secondary text-white border-white" style={{ width: '100%' }}>Details</button> 
      </div>     
    </div>
  );
}

export default HeroButtons;