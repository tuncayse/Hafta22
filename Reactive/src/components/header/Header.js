import React from 'react';
import Navbar from './Navbar';

import NavLinks from './NavLinks';
import ToggleButton from './ToggleButton';
import './header.css';

function Header() {
  return (
    <header id="header" className="fixed-top">
      <Navbar>
    
        <ToggleButton />
        <NavLinks />
      </Navbar>
    </header>
  );
}

export default Header;