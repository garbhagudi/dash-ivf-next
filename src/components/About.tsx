import React from 'react';

interface AboutProps {
  onBookConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onBookConsultation }) => {
  return (
    <section className="commanSection sectionSix">
      <div className="container">
        <h5 className="smallHeading">About</h5>
        <h2 className="mainHeading">
          <b>GarbhaGudi</b>
        </h2>
        <div className="gridTwoColumn">
          <div className="column">
            <p>From One Clinic to Karnataka’s Leading Fertility Network</p>
            <p>
              Founded in 2011 by Dr. Asha S Vijay in Hanumanthanagar, Bangalore, GarbhaGudi started with a simple
              belief that every couple deserves access to honest, high-quality fertility care without financial
              barriers.
            </p>
            <p>
              What began as a single clinic has grown into a network of 10 centres across Karnataka and Tamil
              Nadu, backed by a multidisciplinary team of fertility specialists, embryologists, andrologists,
              and counsellors.
            </p>
            <p>
              GarbhaGudi also runs GGIRHR, a dedicated training institute for reproductive health professionals
              where we train the next generation of specialists with the same clinical expertise that goes into
              every treatment at our centres.
            </p>
          </div>
          <div className="column">
            <div className="rowFourColumn rowTwoColumnNew">
              <div className="columnInner">
                <h3>15+</h3>
                <p>Years of trusted fertility care</p>
              </div>
              <div className="columnInner">
                <h3>15,000+</h3>
                <p>Successful Pregnancies</p>
              </div>
              <div className="columnInner">
                <h3>10</h3>
                <p>Centres in Karnataka & Tamil Nadu</p>
              </div>
              <div className="columnInner">
                <h3>100+</h3>
                <p>Free fertility camps in rural areas</p>
              </div>
            </div>
          </div>
        </div>
        <p className="textCenter">
          <button 
            onClick={onBookConsultation} 
            className="btn btn-primary"
          >
            Book Free Consultation
          </button>
        </p>
      </div>
    </section>
  );
};
