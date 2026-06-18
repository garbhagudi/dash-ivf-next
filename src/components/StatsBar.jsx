import React from 'react';
import { CustomCarousel } from './CustomCarousel';
import { IvfConsultationForm } from 'components/IvfConsultationForm';

export const StatsBar = ({ onBookConsultation }) => {
  return (
    <section className="commanSection sectionOne noSpace">
      <div className="container">
        <div className="boxSlider">
          <div className="home-slider-desktop-wrapper">
            <CustomCarousel desktopItems={1} mobileItems={1} gap={0}>
              <div className="item"><img src="/assets/img/banners/1-desktop.jpg" alt="Banner 1" style={{ width: '100%' }} /></div>
              <div className="item"><img src="/assets/img/banners/2-desktop.jpg" alt="Banner 2" style={{ width: '100%' }} /></div>
              <div className="item"><img src="/assets/img/banners/3-desktop.jpg" alt="Banner 3" style={{ width: '100%' }} /></div>
            </CustomCarousel>
          </div>
          <div className="home-slider-mobile-wrapper">
            <CustomCarousel desktopItems={1} mobileItems={1} gap={0}>
              <div className="item"><img src="/assets/img/banners/1-mobile.jpg" alt="Banner 1 Mobile" style={{ width: '100%' }} /></div>
              <div className="item"><img src="/assets/img/banners/2-mobile.jpg" alt="Banner 2 Mobile" style={{ width: '100%' }} /></div>
              <div className="item"><img src="/assets/img/banners/3-mobile.jpg" alt="Banner 3 Mobile" style={{ width: '100%' }} /></div>
            </CustomCarousel>
          </div>
        </div>

        <div className="boxConsultForm" style={{ margin: '24px 0' }}>
          <IvfConsultationForm />
        </div>

        <div className="boxSuccessRate">
          <div className="column">
            <div className="iconRate"><img src="/assets/img/talent1.svg" alt="Success Rate" /></div>
            <div className="contentRate"><h6>Success Rate</h6><h4>65–73%</h4></div>
          </div>
          <div className="column">
            <div className="iconRate"><img src="/assets/img/family-dress1.svg" alt="Happy Families" /></div>
            <div className="contentRate"><h6>Happy Families</h6><h4>15,000+</h4></div>
          </div>
          <div className="column">
            <div className="iconRate"><img src="/assets/img/thumbs-up-trust1.svg" alt="Years of Trust" /></div>
            <div className="contentRate"><h6>Years of Trust</h6><h4>15+</h4></div>
          </div>
        </div>

        <p className="textCenter">
          <button onClick={onBookConsultation} className="btn btn-primary">
            Book Free Consultation
          </button>
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .home-slider-mobile-wrapper { display: none !important; }
          .home-slider-desktop-wrapper { display: block !important; }
        }
        @media (max-width: 767px) {
          .home-slider-desktop-wrapper { display: none !important; }
          .home-slider-mobile-wrapper { display: block !important; }
        }
      `}</style>
    </section>
  );
};
