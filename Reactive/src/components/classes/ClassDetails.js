import React from 'react';
import './our_classes.css';

function ClassDetails({ title, description, imageUrl }) {
  return (
    <>
      <article className="col-sm-4" style={{ paddingLeft: '2%' }}>
        <h5>{title}</h5>
        <p>{description}</p>
      </article>
      <article className="col-sm-4">
        <img style={{ paddingTop: '10%', marginLeft: '20%' }} src={imageUrl} alt="Class" />
      </article>
    </>
  );
}

export default ClassDetails;