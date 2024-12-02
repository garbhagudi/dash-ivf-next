import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import Header from 'components/header/header';
import RelatedSearches from 'sections/home/relatedSearches';
import Head from 'next/head';

const Banner = dynamic(() => import('sections/home/banner'));
const OtherServices = dynamic(() => import('sections/home/other-services'));
const TeamSection = dynamic(() => import('sections/home/our-team'));
const Testimonials = dynamic(() => import('sections/home/testimonials'));
const Cta = dynamic(() => import('sections/home/cta'));
const TreatmentOptions = dynamic(() => import('sections/home/treatment'));
const Faq = dynamic(() => import('sections/home/faq'));

const SEO = {
  title: 'GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India',
  description:
    'GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.',
  ogImage:
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg',
  url: 'https://garbhagudi-ivf.com',
  twitterHandle: '@garbhagudiivf',
};

export default function Home() {
  const [visibleSections, setVisibleSections] = useState([]);

  const sectionRefs = useRef({
    Banner: null,
    OtherServices: null,
    TreatmentOptions: null,
    TeamSection: null,
    Faq: null,
    Testimonials: null,
    Cta: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              prev.includes(entry.target.id)
                ? prev
                : [...prev, entry.target.id],
            );
          }
        });
      },
      { threshold: 0.1 },
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{SEO.title}</title>
        <meta name='title' content={SEO.title} />
        <meta name='description' content={SEO.description} />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={SEO.title} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content={SEO.url} />
        <meta property='og:description' content={SEO.description} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={SEO.ogImage} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={SEO.twitterHandle} />
        <meta name='twitter:title' content={SEO.title} />
        <meta name='twitter:description' content={SEO.description} />
        <meta name='twitter:image' content={SEO.ogImage} />
      </Head>

      <Header />

      <div id='Banner' ref={(el) => (sectionRefs.current.Banner = el)}>
        {visibleSections.includes('Banner') && <Banner />}
      </div>

      <div
        id='OtherServices'
        ref={(el) => (sectionRefs.current.OtherServices = el)}
      >
        {visibleSections.includes('OtherServices') && <OtherServices />}
      </div>

      <div
        id='TreatmentOptions'
        ref={(el) => (sectionRefs.current.TreatmentOptions = el)}
      >
        {visibleSections.includes('TreatmentOptions') && (
          <TreatmentOptions branch='GarbhaGudi IVF Centre' />
        )}
      </div>

      <div
        id='TeamSection'
        ref={(el) => (sectionRefs.current.TeamSection = el)}
      >
        {visibleSections.includes('TeamSection') && <TeamSection />}
      </div>

      <div id='Faq' ref={(el) => (sectionRefs.current.Faq = el)}>
        {visibleSections.includes('Faq') && <Faq />}
      </div>

      <div
        id='Testimonials'
        ref={(el) => (sectionRefs.current.Testimonials = el)}
      >
        {visibleSections.includes('Testimonials') && <Testimonials />}
      </div>

      <div id='Cta' ref={(el) => (sectionRefs.current.Cta = el)}>
        {visibleSections.includes('Cta') && <Cta />}
      </div>

      <RelatedSearches />
    </div>
  );
}
