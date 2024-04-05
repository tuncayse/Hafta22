import React, { useState } from 'react';
import BMICalculatorForm from './BMICalculatorForm';
import BMIChart from './BMIChart';
import './bmi-calculator.css';

function BMICalculatorSection() {
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      const bmiValue = (weight / (height/100)**2).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <section id="bmi-calculator" className="container py-5" style={{ display: 'flex' }}>
      <div className="row d-flex container mx-auto">
        <BMICalculatorForm onCalculate={calculateBMI} />
        <BMIChart bmi={bmi} />
      </div>
    </section>
  );
}

export default BMICalculatorSection;