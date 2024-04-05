import React from 'react';

function ContactInfo() {
  return (
    <article style={{ display: 'flex', margin: '5%' }}>
      <div>
        <p><b>Mobile Number</b><br />+135 111 111 11 11</p>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <p><b>Email Address</b><br />demo@patika.dev</p>
      </div>
    </article>
  );
}

export default ContactInfo;