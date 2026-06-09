import Image from 'next/image';
import { WhatsAppIcon } from './icons';

export default function ThankYouHero() {
  return (
    <section className="hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-inner">
        <div className="hero-text">
          <div className="badge"><span>🎉</span> Request Received Successfully</div>
          <h1>Thank You for<br /><em>Trusting Us</em></h1>
          <p className="subtext">
            We&apos;ve forwarded your request to our care team. A dedicated fertility specialist
            will contact you shortly. Your dream of parenthood is our mission.
          </p>
          <div className="cta-row">
            <a
              className="btn btn-whatsapp"
              href="https://wa.me/919108910832?text=Hi%2C%20I%20just%20submitted%20my%20enquiry%20on%20GarbhaGudi%20and%20would%20like%20to%20know%20more%20about%20IVF%20treatments."
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon style={{ width: 22, height: 22, fill: '#fff' }} />
              Chat on WhatsApp
            </a>
            <a className="btn btn-call" href="tel:+919108910832">
              <svg viewBox="0 0 24 24" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
                />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1742214671/GGIRHR/Images/Couple-01_iiwu8i.png"
            alt="Happy couple at GarbhaGudi"
            width={560}
            height={680}
          />
          <div className="floating-card">
            <div className="fc-icon">👶</div>
            <div className="fc-text">
              <strong>10,000+ Babies Born</strong>
              <span>& counting every day</span>
            </div>
          </div>
          <div className="floating-card-2">
            <div className="fc2-num">98%</div>
            <div className="fc2-label">Patient Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
