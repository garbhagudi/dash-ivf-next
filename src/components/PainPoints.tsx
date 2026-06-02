import React from 'react';

interface PainPointsProps {
  onBookConsultation: () => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onBookConsultation }) => {
  return (
    <section className="commanSection sectionTwo">
      <div className="container">
        <h2 className="mainHeading">
          If This <b>Feels Familiar,</b> You're Not Alone
        </h2>
        <div className="rowFourColumn">
          <div className="columnInner">
            <div className="iconFeels">
              <img src="/assets/img/icon1.svg" alt="Icon 1" />
            </div>
            <h4>
              Done everything <b>people suggested</b>
            </h4>
            <p>home remedies, lifestyle changes, timing, tracking but still no results?</p>
          </div>
          <div className="columnInner">
            <div className="iconFeels">
              <img src="/assets/img/icon2.svg" alt="Icon 2" />
            </div>
            <h4>
              Putting on a <b>brave face</b> around family
            </h4>
            <p>when every well-meaning question only reminds you of the answer you're still searching for?</p>
          </div>
          <div className="columnInner">
            <div className="iconFeels">
              <img src="/assets/img/icon3.svg" alt="Icon 3" />
            </div>
            <h4>
              Feeling overwhelmed, <b>confused</b>
            </h4>
            <p>and carrying it all alone, not knowing who to talk to or where to begin?</p>
          </div>
          <div className="columnInner">
            <div className="iconFeels">
              <img src="/assets/img/icon4.svg" alt="Icon 4" />
            </div>
            <h4>
              <b>Quietly wondering</b> if the issue
            </h4>
            <p>is with you but too unsure, too scared, or too private to bring it up?</p>
          </div>
        </div>
        <div className="subContent">
          <h3>
            Now, you don't have to <b>figure</b> this out alone
          </h3>
          <p className="addSpace">
            Over <b>15,000</b> couples walked in feeling exactly like you and walked out as parents. The only
            step between you and your parenthood is a single conversation.
          </p>
          <p className="textCenter">
            <button 
              onClick={onBookConsultation} 
              className="btn btn-primary"
            >
              Book Free Consultation
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
