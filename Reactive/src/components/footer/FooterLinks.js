import React from 'react';
import './footer.css';

function FooterLinks() {
  return (
    <div style={{ display: 'flex' }}>
      <div className="col-md-5">
        <ul style={{ listStyleType: 'none' }}>
          <li style={{ fontSize: '20px' }}>Information</li>
          <li><a href="#">About Us</a></li>
          <li><a href="#our_classes">Classes</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#contact-us">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-5">
        <ul style={{ listStyleType: 'none' }}>
          <li style={{ fontSize: '20px' }}>Helpful Links</li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Supports</a></li>
          <li><a href="#">Terms & Condition</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;