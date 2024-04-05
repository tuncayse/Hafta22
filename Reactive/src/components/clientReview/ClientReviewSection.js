import React from 'react';
import ReviewCard from './ReviewCard';

function ClientReviewSection() {
  return (
    <section id="client-review" style={{ width: '100%', backgroundColor: 'rgba(213, 237, 237, 0.799)' }}>
      <div id="class-top" style={{ justifyContent: 'center' }}>
        <div className="titles">
          <h4 style={{ textAlign: 'center', color: 'rgb(21,76,121)' }}><b>CLIENT REVIEW</b></h4>
        </div>
        <h6 style={{ textAlign: 'center', marginLeft: '15%', marginRight: '15%' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </h6>
      </div>
      <div id="photos" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
        <div className="row justify-content-center">
          <ReviewCard
            imageUrl="images/client1.jpg"
            name="Diet Expert"
            title="CFO"
            reviewText="Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
          />
          <ReviewCard
            imageUrl="images/client2.jpg"
            name="Cardio Trainer"
            title="CEO"
            reviewText="Lorem ipsum, dolor sit amet consectetur adipisicing elit..."
          />
   
        </div>
      </div>
    </section>
  );
}

export default ClientReviewSection;