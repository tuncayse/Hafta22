import React, { useState } from 'react';
import './bmi-calculator.css';

function BMICalculatorForm({ onCalculate }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(height, weight);
  };

  return (
    <article className="col-md-5" style={{ paddingRight: '10%' }}>
      <h3 style={{ color: '#355592' }}><b>BMI Calculator</b></h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group" style={{ marginBottom: '10px' }}>
          <input 
            type="number" 
            className="form-control" 
            id="heightInput" 
            value={height}
            onChange={e => setHeight(e.target.value)}
            placeholder="Your Height in cm" 
            required 
          />
        </div>
        <div className="input-group">
          <input 
            type="number" 
            className="form-control" 
            id="weightInput" 
            value={weight}
            onChange={e => setWeight(e.target.value)}
            placeholder="Your Weight in kg" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: '10px', backgroundColor: 'orange', borderColor: 'orange' }}>Calculate</button>
      </form>
    </article>
  );
}

export default BMICalculatorForm;