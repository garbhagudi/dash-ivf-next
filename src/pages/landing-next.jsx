import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import LandingNextHeader from 'components/landing-next-header';
import LandingNextHero from 'sections/landing-next/hero';
import LandingNextTrustStrip from 'sections/landing-next/trust-strip';
import LandingNextServicesCompact from 'sections/landing-next/services-compact';
import LandingNextDoctorsGrid from 'sections/landing-next/doctors-grid';
import LandingNextSocialProof from 'sections/landing-next/social-proof';
import LandingNextFaq from 'sections/landing-next/faq';
import LandingNextConsultationBlock from 'sections/landing-next/consultation-block';

const Head = dynamic(() => import('next/head'));

export default function LandingNextPage() {
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'smooth';
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-brandPink5/20 to-white'>
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
      <main>
        <LandingNextHero />
        <LandingNextTrustStrip />
        <LandingNextServicesCompact />
        <LandingNextDoctorsGrid />
        <LandingNextSocialProof />
        <LandingNextFaq />
        <LandingNextConsultationBlock />
      </main>
    </div>
  );
}
