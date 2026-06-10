import { WhatsAppIcon } from './icons';

export default function ThankYouWhatsAppStrip() {
  return (
    <div className="wa-strip">
      <div className="wa-strip-inner">
        <div className="wa-big-icon">
          <WhatsAppIcon style={{ width: 38, height: 38, fill: '#fff' }} />
        </div>
        <h2>Have Questions Right Now?</h2>
        <p>Our team is available on WhatsApp — get answers in minutes, not days.</p>
        <a
          className="btn-wa-big"
          href="https://wa.me/918951813344?text=Hi%2C%20I%20just%20enquired%20on%20GarbhaGudi%20and%20want%20to%20learn%20more%20about%20IVF%20options."
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon style={{ width: 24, height: 24, fill: '#25D366' }} />
          Message Us on WhatsApp
        </a>
      </div>
    </div>
  );
}
