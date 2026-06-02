import React from 'react';

interface ApproachProps {
  onBookConsultation: () => void;
}

export const Approach: React.FC<ApproachProps> = ({ onBookConsultation }) => {
  return (
    <section className="commanSection sectionThree sectionDark">
      <div className="container">
        <h5 className="smallHeading">Our Approach</h5>
        <h2 className="mainHeading">
          Right Diagnosis. Right Guidance. <b>Right Treatment.</b>
        </h2>
        <p className="subText">
          At GarbhaGudi, we don't rush into treatment. We focus on understanding your situation first because
          honest conversations help in planning treatment that works for you.
        </p>
        <div className="rowTwoColumn">
          <div className="columnInnerTwo">
            <div className="iconLeft">
              <img src="/assets/img/sperm1.svg" alt="Sperm icon" />
            </div>
            <div className="contentRight">
              <h4>Detailed Fertility Evaluation</h4>
              <p>
                Comprehensive diagnostics for both partners hormonal panels, imaging, semen analysis, and more
                to identify the root cause with precision
              </p>
            </div>
          </div>
          <div className="columnInnerTwo">
            <div className="iconLeft">
              <img src="/assets/img/master-plan1.svg" alt="Master Plan icon" />
            </div>
            <div className="contentRight">
              <h4>Personalised Treatment Plan</h4>
              <p>
                Your plan is built around your body, your history, and your goals because every couple's journey
                is different.
              </p>
            </div>
          </div>
          <div className="columnInnerTwo">
            <div className="iconLeft">
              <img src="/assets/img/treatment1.svg" alt="Treatment icon" />
            </div>
            <div className="contentRight">
              <h4>Advanced Treatment Options</h4>
              <p>
                Access to IVF, IUI, ICSI, TESA, PGD, egg freezing, and more all under one roof with
                state-of-the-art labs and experienced professionals.
              </p>
            </div>
          </div>
          <div className="columnInnerTwo">
            <div className="iconLeft">
              <img src="/assets/img/rules-alt1.svg" alt="Rules icon" />
            </div>
            <div className="contentRight">
              <h4>Continuous Guidance at Every Step</h4>
              <p>
                From your first consultation to your pregnancy and beyond, our team stays with you at every step,
                answering your questions and guiding you through the entire journey.
              </p>
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
