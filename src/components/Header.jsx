import React from 'react';

export const Header = ({ onBookConsultation }) => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const logoUrl =
    'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms76155yh1on07pnqpdnqyzk';
  return (
    <header>
      <div className='logoArea'>
        <div className='container'>
          <div className='mainLogoRow'>
            <div className='Mainlogo'>
              <a href='#' onClick={handleLogoClick}>
                <img src={logoUrl} alt='GarbhaGudi Logo' />
              </a>
            </div>
            <div className='topCta'>
              <div className='ctaButtons'>
                <a href='tel:9108910832' className='btn btn-primary'>
                  +91 9108 9108 32
                </a>
                <button onClick={onBookConsultation} className='btn btn-primary'>
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
