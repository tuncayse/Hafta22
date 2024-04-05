import React from 'react';
import TrainerCard from './TrainerCard';

function TrainersSection() {
  return (
    <section id="trainers" style={{ width: '100%', backgroundColor: 'rgba(213, 237, 237, 0.799)' }}>
      <div id="class-top" style={{ alignContent: 'center' }}>
        <div className="titles">
          <h4 style={{ textAlign: 'center', color: 'rgb(21,76,121)' }}><b>OUR BEST TRAINERS</b></h4>
        </div>
        <h6 style={{ marginLeft: '20%', marginRight: '20%', textAlign: 'center' }}>Lorem ipsum dolor sit amet...</h6>
      </div>
      <div id="trainer-photos" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px', marginLeft: '15%', marginRight: '15%' }}>
        <TrainerCard imageUrl="images/trainer1.jpg" name="Janet" specialty="Cardio Trainer" />
        <TrainerCard imageUrl="images/trainer2.jpg" name="Jack" specialty="Cardio Trainer" />
        <TrainerCard imageUrl="images/trainer3.jpg" name="Jane" specialty="Cardio Trainer" />
      </div>
    </section>
  );
}

export default TrainersSection;