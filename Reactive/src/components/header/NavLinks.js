import React from 'react';
import './header.css';

function NavLinks() {
  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#our_classes">Classes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#trainers">Trainers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#client-review">Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact-us">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn btn-warning" style={{ backgroundColor: 'orange', color: 'white' }} href="#" role="button"><b>JOIN US</b></a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;