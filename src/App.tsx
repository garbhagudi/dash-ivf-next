import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { PainPoints } from './components/PainPoints';
import { Approach } from './components/Approach';
import { Treatments } from './components/Treatments';
import { WhyChooseUs } from './components/WhyChooseUs';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Awards } from './components/Awards';
import { Branches } from './components/Branches';
import { Founder } from './components/Founder';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const handleBookConsultation = () => {
    setIsBookingOpen(true);
  };

  const handlePlayVideo = (url: string) => {
    setActiveVideoUrl(url);
  };

  return (
    <>
      {/* 1. Brand Header */}
      <Header onBookConsultation={handleBookConsultation} />

      {/* 2. Main Article Sections */}
      <article>
        {/* Sliders & Clinial Success Metrics */}
        <StatsBar onBookConsultation={handleBookConsultation} />

        {/* Patient Pain Points */}
        <PainPoints onBookConsultation={handleBookConsultation} />

        {/* Clinical Approach */}
        <Approach onBookConsultation={handleBookConsultation} />

        {/* Treatments Tabs Grid */}
        <Treatments onBookConsultation={handleBookConsultation} />

        {/* Why Choose Us USPs */}
        <WhyChooseUs onBookConsultation={handleBookConsultation} />

        {/* About Brand Details & Stats */}
        <About onBookConsultation={handleBookConsultation} />

        <section>
          <div className="container">
            <hr style={{ margin: '0 0' }} />
          </div>
        </section>

        {/* Testimonials & Video Carousels */}
        <Testimonials 
          onBookConsultation={handleBookConsultation} 
          onPlayVideo={handlePlayVideo} 
        />

        {/* Awards & Accolades Slides */}
        <Awards />

        {/* Regional Branches Grid */}
        <Branches onBookConsultation={handleBookConsultation} />

        {/* Founder Bio Card */}
        <Founder onBookConsultation={handleBookConsultation} />

        {/* Frequently Asked Questions */}
        <FAQ />
      </article>

      {/* 3. Footer and Sticky Action Bar */}
      <Footer onBookConsultation={handleBookConsultation} />

      {/* 4. Global Booking Consultation Iframe Modal */}
      <Modal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} maxWidth="530px">
        <iframe
          id="ziframe_187524"
          aria-label="Book a Free Consultation"
          frameBorder="0"
          style={{ height: '600px', width: '100%', border: 'none' }}
          src="https://forms.garbhagudi.com/GarbhaGudiIVFCentre/form/GarbhaGudi/formperma/21qVgPWlHAmSpzYRLjpHYkEGgUHjC5LkKyd7bc_SL9w"
          title="Booking Consultation Form"
        />
      </Modal>

      {/* 5. Global YouTube Video Embed Modal */}
      <Modal isOpen={activeVideoUrl !== null} onClose={() => setActiveVideoUrl(null)} maxWidth="800px">
        {activeVideoUrl && (
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src={activeVideoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </>
  );
}

export default App;
