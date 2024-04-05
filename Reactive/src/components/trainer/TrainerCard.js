import React from 'react';
import './trainers.css';

function TrainerCard({ imageUrl, name, specialty }) {
  return (
    <div className="col-md-4" id={`photo${name}`} style={{ position: 'relative' }}>
      <b id={`trial${name}`} style={{ position: 'relative' }}>
        <img src={imageUrl} className="card-img-top" alt={name} style={{ border: '2px solid orange', borderRadius: '10px' }} />
        <span className="trainer-name">{name} <br /> {specialty}</span>
      </b>
    </div>
  );
}

export default TrainerCard;