import React from 'react';
import './purchase.css';

function ProductCard({ imageUrl, title, originalPrice, salePrice }) {
  return (
    <div className="col-md-3 d-flex">
      <div className="card col-xs-11 shadow product-card h-100">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <p className="card-text" style={{ fontWeight: 600, fontSize: '16px', textAlign: 'center' }}>
            {title} <br />
          </p>
          <p style={{ fontSize: '14px', fontWeight: 600, textAlign: 'center' }}>
            <del>{originalPrice} $</del> / {salePrice} $
          </p>
          <p style={{ fontSize: '14px', fontWeight: 600, textAlign: 'center' }}>Add To Cart</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;