import React from 'react';

function ReviewCard({ imageUrl, name, title, reviewText }) {
  return (
    <article className="col-md-5">
      <div className="d-flex align-items-center" style={{ marginLeft: '5%' }}>
        <img className="rounded-circle" style={{ width: '50px', marginRight: '20px' }} src={imageUrl} alt={name} />
        <div>
          <b>{name}</b><br />
          {title}
        </div>
      </div>
      <div className="rectangle">
        {reviewText}
      </div>
      <br />
    </article>
  );
}

export default ReviewCard;