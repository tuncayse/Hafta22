import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';
import GoogleMap from './GoogleMap';

function ContactSection() {
  return (
    <section id="contact-us" className="container py-2 mt-3" style={{ width: '100%' }}>
      <div className="class-top" style={{ alignContent: 'center' }}>
        <div className="titles">
          <h4 style={{ textAlign: 'center', color: 'rgb(21,76,121)' }}><b>CONTACT US</b></h4>
        </div>
        <h6 style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</h6>
      </div>
      <div className="row justify-content-center" style={{ display: 'flex' }}>
        <ContactForm />
        <GoogleMap />
        <ContactInfo />
      </div>
    </section>
  );
}

export default ContactSection;