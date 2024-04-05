
import React from 'react';

function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <article className="col-sm-5">
      <form id="contact-form" onSubmit={handleSubmit} style={{ margin: '5%' }}>
        <input type="text" className="form-control mb-3" placeholder="Your Name" required />
        <input type="email" className="form-control mb-3" placeholder="Email" required />
        <textarea className="form-control mb-3" placeholder="Your message" required></textarea>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'orange', borderColor: 'orange' }}>Submit</button>
      </form>
    </article>
  );
}

export default ContactForm;