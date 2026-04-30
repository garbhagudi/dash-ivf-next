import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useLayoutEffect } from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { landingNextHeroYoutubePosterSrc } from 'data/landingNextHeroVideo';
import LandingNextHeader from 'components/landing-next-header';
import LandingNextHero from 'sections/landing-next/hero';
import LandingNextConsultationFormSection from 'sections/landing-next/consultation-form-section';
import LandingNextConsultationOfferSection from 'sections/landing-next/consultation-offer-section';

/**
 * Below the fold — code-split without `loading` placeholders so SSR HTML matches
 * first paint (avoids CLS from short skeleton → tall content).
 */
const LandingNextTrustStrip = dynamic(
  () => import('sections/landing-next/trust-strip'),
);
const LandingNextServicesCompact = dynamic(
  () => import('sections/landing-next/services-compact'),
);
const LandingNextDoctorsGrid = dynamic(
  () => import('sections/landing-next/doctors-grid'),
);
const LandingNextSocialProof = dynamic(
  () => import('sections/landing-next/social-proof'),
);
const LandingNextFaq = dynamic(() => import('sections/landing-next/faq'));

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
        strategy='lazyOnload'
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
        <link rel='preconnect' href='https://i.ytimg.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://i.ytimg.com' />
        <link rel='preload' as='image' href={landingNextHeroYoutubePosterSrc()} />
      </Head>
      <LandingNextHeader />
      {/*
        Fixed bottom bar (~5.5–6.5rem) + safe-area — static padding avoids CLS from
        JS-measured CSS variables updating after paint.
      */}
      <main className='max-md:pb-[calc(6.75rem+env(safe-area-inset-bottom,0px))] md:pb-0'>
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
