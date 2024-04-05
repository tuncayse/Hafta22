import React from 'react';
import Header from '../src/components/header/Header';
import HeroSection from '../src/components/hero/HeroSection';
import StatisticsSection from '../src/components/statistics/StatisticsSection';
import ClassesSection from '../src/components/classes/ClassesSection';

import BMICalculatorSection from '../src/components/BMICalculator/BMICalculatorSection';
import TrainersSection from '../src/components/trainer/TrainersSection';
import PurchaseSection from '../src/components/purchase/PurchaseSection';
import ClientReviewSection from '../src/components/clientReview/ClientReviewSection';
import ContactSection from '../src/components/contact/ContactSection';
import Footer from '../src/components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <ClassesSection />

      <BMICalculatorSection />
      <TrainersSection />
      <PurchaseSection />
      <ClientReviewSection />
      <ContactSection />
      <Footer /> 
    </div>
  );
}

export default App;