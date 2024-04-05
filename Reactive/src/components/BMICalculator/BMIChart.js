import React from 'react';
import './bmi-calculator.css';

function BMIChart({ bmi }) {
  return (
    <article className="col-md-5">
      <div style={{ position: 'relative' }}>

        <img src="path-to-bmi-chart.jpg" alt="BMI Scale" style={{ width: '100%' }} />
        {bmi && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <p>Your BMI: {bmi}</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default BMIChart;