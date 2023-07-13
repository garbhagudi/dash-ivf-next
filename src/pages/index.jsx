import Banner from 'sections/home/banner';
import OtherServices from 'sections/home/other-services';
import Calculators from 'sections/home/calculators';
import TeamSection from 'sections/home/our-team';
import Testimonials from 'sections/home/testimonials';
import WhyUs from 'sections/home/why-us';
import VideoOne from 'sections/home/video-one';
import CallToAction from 'sections/home/subscribe-us';
import Head from 'next/head';
import TreatmentOptions from 'sections/home/treatment';

export default function Home({ testimonials }) {
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

        {/* Twitter*/}

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
      <Banner />
      <OtherServices />
      <Calculators />
      <TreatmentOptions branch={'GarbhaGudi'} />
      <TeamSection />
      <WhyUs />
      <Testimonials />
      <VideoOne testimonials={testimonials} />
      <CallToAction />
    </div>
  );
}

export const getStaticProps = async () => {
  const YOUTUBE_PLAYLIST_ITEMS_API =
    'https://www.googleapis.com/youtube/v3/playlistItems';
  const testimonialData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  );

  const testimonials = await testimonialData.json();

  return {
    props: {
      testimonials,
    },
    revalidate: 180,
  };
};
