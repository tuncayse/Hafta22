import React from 'react';
import './header.css';

function Navbar({ children }) {
  return (
    <nav className="navbar navbar-expand-sm">
      {children}
    </nav>
  );
}

export default Navbar;