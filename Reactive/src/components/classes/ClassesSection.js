import React from 'react';
import ClassesHeader from './ClassesHeader';
import ClassTypes from './ClassTypes';
import './our_classes.css';

function ClassesSection() {
  return (
    <section id="our_classes" className="container py-4">
      <ClassesHeader />
      <ClassTypes />
    </section>
  );
}

export default ClassesSection;