import React from 'react';

function StatisticCard({ title, description }) {
  return (
    <article className="col-sm-3" style={{ paddingTop: '2%', paddingBottom: '2%' }}>
      <div className="card" style={{ width: '10rem', backgroundColor: 'rgb(255, 255, 255)' }}>
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: 'center', color: 'rgb(21,76,121)' }}>
            <b>{title}</b>
          </h5>
          <p className="card-text" style={{ textAlign: 'center' }}>{description}</p>
        </div>
      </div>
    </article>
  );
}

export default StatisticCard;