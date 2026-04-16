import dynamic from 'next/dynamic';
import { useEffect, useLayoutEffect } from 'react';
import LandingNextHeader from 'components/landing-next-header';
import LandingNextHero from 'sections/landing-next/hero';
import LandingNextTrustStrip from 'sections/landing-next/trust-strip';
import LandingNextServicesCompact from 'sections/landing-next/services-compact';
import LandingNextDoctorsGrid from 'sections/landing-next/doctors-grid';
import LandingNextSocialProof from 'sections/landing-next/social-proof';
import LandingNextFaq from 'sections/landing-next/faq';
import LandingNextConsultationFormSection from 'sections/landing-next/consultation-form-section';
import LandingNextConsultationOfferSection from 'sections/landing-next/consultation-offer-section';

const Head = dynamic(() => import('next/head'));

export default function LandingNextPage() {
  /** Lets global CSS / SalesIQ target this route without relying on offer-section timing. */
  useLayoutEffect(() => {
    const html = document.documentElement;
    html.classList.add('landing-next');
    return () => html.classList.remove('landing-next');
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'smooth';
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className='bg-gradient-to-b from-white via-brandPink5/20 to-white md:min-h-screen'>
      <Head>
        <title>
          GarbhaGudi IVF | Fertility consultation (new experience)
        </title>
        <meta
          name='description'
          content='A calmer GarbhaGudi landing experience focused on trust, clear doctor information, and one primary consultation action—built for testing alongside the main site.'
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <LandingNextHeader />
      <main className='pb-[var(--landing-offer-main-pad,var(--landing-offer-sticky-h,3.25rem))] md:pb-0'>
        <LandingNextHero />
        <LandingNextConsultationFormSection />
        <LandingNextTrustStrip />
        <LandingNextServicesCompact />
        <LandingNextDoctorsGrid />
        <LandingNextSocialProof />
        <LandingNextFaq />
        <LandingNextConsultationOfferSection />
      </main>
    </div>
  );
}
