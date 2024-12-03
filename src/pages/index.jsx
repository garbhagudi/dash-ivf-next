import Header from 'components/header/header';
import dynamic from 'next/dynamic';
import RelatedSearches from 'sections/home/relatedSearches';

const Banner = dynamic(() => import('sections/home/banner'), { ssr: true });
const OtherServices = dynamic(() => import('sections/home/other-services'), {
  ssr: false,
});
const TeamSection = dynamic(() => import('sections/home/our-team'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('sections/home/testimonials'), {
  ssr: false,
});
const Cta = dynamic(() => import('sections/home/cta'), { ssr: false });
const Head = dynamic(() => import('next/head'));
const TreatmentOptions = dynamic(() => import('sections/home/treatment'), {
  ssr: false,
});
const Faq = dynamic(() => import('sections/home/faq'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India
        </title>
        <meta
          name='title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />

        {/* Open Graph / Facebook */}
        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi-ivf.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>

      <Header />
      <Banner />
      <OtherServices />
      <TreatmentOptions branch='GarbhaGudi IVF Centre' />
      <TeamSection />
      <Faq />
      <Testimonials />
      <Cta />
      <RelatedSearches />
    </div>
  );
}
