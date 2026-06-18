import React from 'react';

export const Header = ({ onBookConsultation }) => {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const logoUrl =
    'https://res.cloudinary.com/garbhagudiivf/image/upload/w_256,h_56/v1751352018/GG_New-Hori_Logo_ziwur1.svg';
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
