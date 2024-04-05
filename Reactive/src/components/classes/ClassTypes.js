import React from 'react';
import './our_classes.css';

function ClassTypes() {
  return (
    <section id="class-types" className="container" style={{ display: 'flex', borderRadius: '0px' }}>
      <div className="container d-flex justify-content-center">
        <div id="class-types-div" className="row d-flex justify-content-center process-content">

          <button className="btn btn-primary" style={{ borderRadius: '0px', marginRight: '40px', backgroundColor: 'rgb(21,76,121)', border: 'none' }}>Yoga</button>
          <button className="btn btn-primary" style={{ borderRadius: '0px', marginRight: '40px', backgroundColor: 'rgb(21,76,121)', border: 'none' }}>Group</button>
          <button className="btn btn-primary" style={{ borderRadius: '0px', marginRight: '40px', backgroundColor: 'rgb(21,76,121)', border: 'none' }}>Solo</button>
          <button className="btn btn-primary" style={{ borderRadius: '0px', marginRight: '40px', backgroundColor: 'rgb(21,76,121)', border: 'none' }}>Stretching</button>

        </div>
      </div>
    </section>
  );
}

export default ClassTypes;