import React from 'react';

interface WhyChooseUsProps {
  onBookConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onBookConsultation }) => {
  return (
    <section className="commanSection sectionFive sectionDark">
      <div className="container">
        <h5 className="smallHeading">Why Choose Us</h5>
        <h2 className="mainHeading">
          What Makes <b>GarbhaGudi</b> Different
        </h2>
        <p className="subText">
          We don't just treat infertility - We partner with you on the most important journey of your life, with
          care that's personal, transparent, and effective.
        </p>
        <div className="rowThreeColumn">
          <div className="columnInnerThree">
            <div className="mainColumnText">
              <div className="iconLeft">
                <img src="/assets/img/talent1.svg" alt="Talent" />
              </div>
              <div className="contentRight">
                <h4>
                  Industry-Leading <b>Success Rates</b>
                </h4>
              </div>
            </div>
            <p>
              We don't just treat infertility - We partner with you on the most important journey of your life,
              with care that's personal, transparent, and effective.
            </p>
          </div>
          <div className="columnInnerThree">
            <div className="mainColumnText">
              <div className="iconLeft">
                <img src="/assets/img/microchip.svg" alt="Technology" />
              </div>
              <div className="contentRight">
                <h4>
                  <b>Cutting-Edge</b> Technology
                </h4>
              </div>
            </div>
            <p>
              From advanced embryology labs to ICSI, PGD, ERA, we leverage the latest technology for best
              results.
            </p>
          </div>
          <div className="columnInnerThree">
            <div className="mainColumnText">
              <div className="iconLeft">
                <img src="/assets/img/wallet-arrow.svg" alt="Wallet" />
              </div>
              <div className="contentRight">
                <h4>
                  <b>Affordable</b> with Zero Interest EMI
                </h4>
              </div>
            </div>
            <p>
              World-class fertility care shouldn't be out of reach. We offer transparent pricing and 0% interest
              financing making parenthood accessible to every family.
            </p>
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
