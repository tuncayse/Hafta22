import React from 'react';
import ClassDetails from './ClassDetails';
import './our_classes.css';

function ClassDetailsSection() {
  return (
    <section id="class-details" className="container py-5" style={{ display: 'flex' }}>
      <div className="row d-flex container mx-auto">
        <ClassDetails 
          title="Why Should You Choose Yoga?" 
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit nemo omnis accusantium."
          imageUrl="images/yoga.jpg" 
        />
      </div>
    </section>
  );
}

export default ClassDetailsSection;