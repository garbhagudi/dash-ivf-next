import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useLayoutEffect } from 'react';
import LandingNextHeader from 'components/landing-next-header';
import LandingNextHero from 'sections/landing-next/hero';
import LandingNextTrustStrip from 'sections/landing-next/trust-strip';
import LandingNextServicesCompact from 'sections/landing-next/services-compact';
import LandingNextConsultationFormSection from 'sections/landing-next/consultation-form-section';

/** Below the fold — code-split to shrink initial JS (Swiper, many lite-youtube, FAQ accordion). */
const LandingNextDoctorsGrid = dynamic(
  () => import('sections/landing-next/doctors-grid'),
  {
    loading: () => (
      <div
        className='min-h-[22rem] bg-gradient-to-br from-pink-300/40 to-purple-100/40'
        aria-hidden
      />
    ),
  },
);
const LandingNextSocialProof = dynamic(
  () => import('sections/landing-next/social-proof'),
  {
    loading: () => (
      <div
        className='min-h-[28rem] bg-gradient-to-tr from-brandPink3/30 via-brandPurple/20 to-purple-100/40'
        aria-hidden
      />
    ),
  },
);
const LandingNextFaq = dynamic(() => import('sections/landing-next/faq'), {
  loading: () => (
    <div
      className='min-h-[16rem] border-t border-brandPink4/30 bg-gradient-to-b from-white via-brandPink5/15 to-purple-100/30'
      aria-hidden
    />
  ),
});
const LandingNextConsultationOfferSection = dynamic(
  () => import('sections/landing-next/consultation-offer-section'),
  { loading: () => <div className='min-h-[5rem]' aria-hidden /> },
);

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
      <Script
        id='gg-zoho-zfadvlead-utm'
        src='/zoho-forms/zf-zfadvlead-utm.js'
        strategy='afterInteractive'
      />
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
