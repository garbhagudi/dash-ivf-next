import React, { useState, useEffect } from 'react';

interface FooterProps {
  onBookConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookConsultation }) => {
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsStickyVisible(true);
      } else {
        setIsStickyVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer>
        <section className="boxFooter">
          <div className="container">
            <div className="rowFooter">
              <div className="textCopyright">
                © 2026 GarbhaGudi IVF Centre, Inc. All rights reserved.
              </div>
              <ul className="listFooterMenu">
                <li>
                  <a href="https://www.garbhagudi-ivf.com/legal/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="https://www.garbhagudi-ivf.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.garbhagudi-ivf.com/legal/refund-policy" target="_blank" rel="noopener noreferrer">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>

      {/* Scroll-triggered Bottom Sticky CTA Bar */}
      <div className={`stickyBar ${isStickyVisible ? 'sticky' : ''}`}>
        <div className="container">
          <div className="rowSticky">
            <a href="tel:9108910832" className="btn btn-primary btn-dark">
              <img src="/assets/img/telephone1.svg" alt="Phone" style={{ marginRight: '5px' }} />{' '}
              Call Now
            </a>
            <button 
              onClick={onBookConsultation} 
              className="btn btn-primary"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
