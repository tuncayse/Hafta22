import React from 'react';
import FooterInfo from '../../components/footer/FooterInfo';
import FooterLinks from '../../components/footer/FooterLinks';
import './footer.css';

function Footer() {
  return (
    <footer className="py-2 mt-3">

      <FooterInfo />
      <FooterLinks />
    </footer>
  );
}

export default Footer;