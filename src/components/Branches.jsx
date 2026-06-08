import React from 'react';

export const Branches = ({ onBookConsultation }) => {
  const branchesList = [
    'Hanumanthanagar', 'Kalyan Nagar', 'Electronic City', 'Jayanagar',
    'Marathahalli', 'New BEL Road', 'Yelahanka', 'Davanagere', 'Hosur', 'Nagarabhavi',
  ];

  return (
    <section className="commanSection sectionNine">
      <div className="container">
        <h5 className="smallHeading">Our Center</h5>
        <h2 className="mainHeading"><b>Our Branches</b> Across Karnataka & Bangalore</h2>
        <p className="subText">
          Wherever you are in Bangalore, <b>expert fertility</b> care is just a short drive away.
        </p>
        <div className="rowFourColumn rowFiveColumn">
          {branchesList.map((branch, idx) => (
            <div key={idx} className="columnInner">
              <div className="iconFeels"><img src="/assets/img/marker.svg" alt="Marker" /></div>
              <h4>{branch}</h4>
            </div>
          ))}
        </div>
        <p className="textCenter">
          <button onClick={onBookConsultation} className="btn btn-primary">
            Book Free Consultation
          </button>
        </p>
      </div>
    </section>
  );
};
