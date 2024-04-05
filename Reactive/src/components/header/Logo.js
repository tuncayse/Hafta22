import React from 'react';
import logoImage from '../../assets/logo192.png';
import './header.css';

function Logo() {
  return (
    <a className="navbar-brand" href="#">
      <img src={logoImage} width="150px" alt="logo" />
    </a>
  );
}

export default Logo;