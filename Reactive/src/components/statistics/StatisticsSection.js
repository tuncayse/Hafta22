import React from 'react';
import StatisticCard from './StatisticCard';

function StatisticsSection() {
  return (
    <section id="hero-after" style={{ display: 'flex', margin: '0' }}>
      <div className="container d-flex justify-content-center">
        <div className="row d-flex justify-content-center process-content">
          <StatisticCard title="325" description="Course" />
          <StatisticCard title="405" description="Work Out" />
          <StatisticCard title="305" description="Working Hour" />
          <StatisticCard title="705" description="Happy Client" />
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;