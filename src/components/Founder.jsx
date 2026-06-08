import React from 'react';

export const Founder = ({ onBookConsultation }) => {
  return (
    <section className="commanSection sectionTen sectionDark">
      <div className="container">
        <h5 className="smallHeading">Meet Our Founder</h5>
        <h2 className="mainHeading">Led by One of <b>India's Most Trusted</b> Fertility Experts</h2>
        <div className="contentFounder">
          <div className="columnLeft">
            <div className="boxClientImage">
              <img src="/assets/img/image13.png" alt="Dr. Asha S Vijay" />
            </div>
            <h5 className="smallHeading">Meet Our Founder</h5>
            <h2>Dr. Asha S Vijay</h2>
            <h3>MBBS, DNB (OBG), DGO, PGD-RM&E (Germany)</h3>
          </div>
          <div className="columnRight">
            <p>With close to three decades of experience in obstetrics, gynaecology, and reproductive medicine, Dr. Asha S Vijay has helped over 15,000 couples realise their dream of parenthood. Her approach blends clinical precision with genuine empathy where each patient receives an unhurried consultation, a personalised treatment plan, and continuous emotional support.</p>
            <ul className="listPointer">
              <li>Nearly <b>3 Decades</b> of Experience</li>
              <li>Helped <b>15,000+</b> Families</li>
              <li>Trained in <b>Germany & India</b></li>
              <li>Multiple <b>National Awards</b></li>
              <li>Published <b>Researcher</b></li>
            </ul>
            <p>
              <button onClick={onBookConsultation} className="btn btn-primary">
                Book Consultation
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
