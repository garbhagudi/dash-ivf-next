import { useState, useEffect, useRef } from 'react';
import Header from 'components/header/header';
import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('sections/home/banner'), { ssr: true });
const OtherServices = dynamic(() => import('sections/home/other-services'), {
  ssr: false,
});
const TeamSection = dynamic(() => import('sections/home/our-team'), {
  ssr: false,
});
// const Video = dynamic(() => import('sections/home/video'));
const Testimonials = dynamic(() => import('sections/home/testimonials'), {
  ssr: false,
});
const Head = dynamic(() => import('next/head'));
const TreatmentOptions = dynamic(() => import('sections/home/treatment'), {
  ssr: false,
});
const Faq = dynamic(() => import('sections/home/faq'), { ssr: false });
const RelatedSearches = dynamic(() => import('sections/home/relatedSearches'), {
  ssr: false,
});

export default function Home() {
  const lazyComponents = [
    { key: 'other-services', component: <OtherServices /> },
    {
      key: 'treatment-options',
      component: <TreatmentOptions branch='GarbhaGudi IVF Centre' />,
    },
    { key: 'team-section', component: <TeamSection /> },
    // { key: 'video', component: <Video /> },
    { key: 'faq', component: <Faq /> },
    { key: 'testimonials', component: <Testimonials /> },
    { key: 'related-searches', component: <RelatedSearches /> },
  ];

  const [visibleIndex, setVisibleIndex] = useState(1);
  const containerRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentRef = containerRefs.current[visibleIndex - 1];

      if (currentRef) {
        const { bottom } = currentRef.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (bottom <= viewportHeight) {
          setVisibleIndex((prevIndex) =>
            prevIndex < lazyComponents.length ? prevIndex + 1 : prevIndex,
          );
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleIndex, lazyComponents.length]);

  return (
    <div>
      <Head>
        {/* SEO and Meta Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India
        </title>
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        {/* Open Graph / Social Meta */}
        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta property='og:url' content='https://garbhagudi-ivf.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
      </Head>

      <Header />
      <Banner />
      {lazyComponents.map(({ key, component }, index) => (
        <div
          key={key}
          ref={(el) => (containerRefs.current[index] = el)}
          style={{
            marginBottom: '0px',
          }}
        >
          {index < visibleIndex && component}{' '}
        </div>
      ))}
    </div>
  );
}
