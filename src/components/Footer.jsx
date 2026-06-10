import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = ({ onBookConsultation }) => {
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isSticky = window.scrollY > 300;
      setIsStickyVisible(prev => prev === isSticky ? prev : isSticky);
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
              <div className="textCopyright">© 2026 GarbhaGudi IVF Centre, Inc. All rights reserved.</div>
              <ul className="listFooterMenu">
                <li><a href="https://www.garbhagudi-ivf.com/legal/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                <li><a href="https://www.garbhagudi-ivf.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="https://www.garbhagudi-ivf.com/legal/refund-policy" target="_blank" rel="noopener noreferrer">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </section>
      </footer>

      <div className={`stickyBar ${isStickyVisible ? 'is-sticky' : ''}`}>
        <div className="container">
          <div className="rowSticky">
            <div className="stickyLeft">
              <a href="tel:9108910832" className="btn btn-primary btn-dark">
                <img src="/assets/img/telephone1.svg" alt="Phone" />
                <span className="btn-label">Call Now</span>
              </a>
              <a
                href="https://wa.me/918951813344?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20IVF%20treatment%20at%20GarbhaGudi."
                className="btn btn-primary btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={18} />
                <span className="btn-label">Chat on WhatsApp</span>
              </a>
            </div>
            <button onClick={onBookConsultation} className="btn btn-primary">
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
