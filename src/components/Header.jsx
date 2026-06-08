import React from 'react';

export const Header = ({ onBookConsultation }) => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <div className="topbar">
        <div className="container">
          <ul className="listDetail">
            <li>
              <a href="tel:9108910832">
                <span className="icon-small">
                  <img src="/assets/img/telephone1.svg" alt="Telephone" />
                </span>{' '}
                +91 9108 9108 32
              </a>
            </li>
            <li>
              <span className="icon-small">
                <img src="/assets/img/address1.svg" alt="Location" />
              </span>{' '}
              <b style={{ paddingRight: '4px' }}>10 Branches</b>{' '}Across the Region
            </li>
          </ul>
        </div>
      </div>
      <div className="logoArea">
        <div className="container">
          <div className="mainLogoRow">
            <div className="Mainlogo">
              <a href="#" onClick={handleLogoClick}>
                <img src="/assets/img/final_logo.svg" alt="GarbhaGudi Logo" />
              </a>
            </div>
            <div className="topCta">
              <button onClick={onBookConsultation} className="btn btn-primary">
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
