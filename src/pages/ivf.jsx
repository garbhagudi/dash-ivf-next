import { useState } from 'react';
import Head from 'next/head';
import { Header } from 'components/Header';
import { StatsBar } from 'components/StatsBar';
import { PainPoints } from 'components/PainPoints';
import { Approach } from 'components/Approach';
import { Treatments } from 'components/Treatments';
import { WhyChooseUs } from 'components/WhyChooseUs';
import { About } from 'components/About';
import { Testimonials } from 'components/Testimonials';
import { Awards } from 'components/Awards';
import { Branches } from 'components/Branches';
import { Founder } from 'components/Founder';
import { FAQ } from 'components/FAQ';
import { Footer } from 'components/Footer';
import { Modal } from 'components/Modal';

export default function IvfPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

  return (
    <>
      <Head>
        <script
          key='gtm'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NT9BZ69');`,
          }}
        />
        <title>IVF Treatment | GarbhaGudi IVF Centre</title>
        <meta
          name='description'
          content='Discover world-class IVF treatment at GarbhaGudi IVF Centre. Expert fertility specialists, advanced technology, and compassionate care across 10 branches.'
        />
        <meta
          property='og:title'
          content='IVF Treatment | GarbhaGudi IVF Centre'
        />
        <meta
          property='og:description'
          content='Discover world-class IVF treatment at GarbhaGudi IVF Centre. Expert fertility specialists, advanced technology, and compassionate care across 10 branches.'
        />
        <meta property='og:type' content='website' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css'
          integrity='sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB'
          crossOrigin='anonymous'
        />
        <link rel='stylesheet' href='/assets/css/style.css' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <div className='ivf-page'>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-NT9BZ69'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header onBookConsultation={() => setIsBookingOpen(true)} />

        <article>
          <StatsBar onBookConsultation={() => setIsBookingOpen(true)} />
          <PainPoints onBookConsultation={() => setIsBookingOpen(true)} />
          <Approach onBookConsultation={() => setIsBookingOpen(true)} />
          <Treatments onBookConsultation={() => setIsBookingOpen(true)} />
          <WhyChooseUs onBookConsultation={() => setIsBookingOpen(true)} />
          <About onBookConsultation={() => setIsBookingOpen(true)} />

          <section>
            <div className='container'>
              <hr style={{ margin: '0 0' }} />
            </div>
          </section>

          <Testimonials
            onBookConsultation={() => setIsBookingOpen(true)}
            onPlayVideo={(url) => setActiveVideoUrl(url)}
          />
          <Awards />
          <Branches onBookConsultation={() => setIsBookingOpen(true)} />
          <Founder onBookConsultation={() => setIsBookingOpen(true)} />
          <FAQ />
        </article>

        <Footer onBookConsultation={() => setIsBookingOpen(true)} />

        <Modal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          maxWidth='530px'
        >
          <iframe
            id='ziframe_187524'
            aria-label='Book a Free Consultation'
            frameBorder={0}
            style={{ height: '600px', width: '100%', border: 'none' }}
            src='https://forms.garbhagudi.com/GarbhaGudiIVFCentre/form/GarbhaGudi/formperma/21qVgPWlHAmSpzYRLjpHYkEGgUHjC5LkKyd7bc_SL9w'
            title='Booking Consultation Form'
          />
        </Modal>

        <Modal
          isOpen={activeVideoUrl !== null}
          onClose={() => setActiveVideoUrl(null)}
          maxWidth='800px'
        >
          {activeVideoUrl && (
            <div className='video-container'>
              <iframe
                width='100%'
                height='315'
                src={activeVideoUrl}
                title='YouTube video player'
                frameBorder={0}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}
