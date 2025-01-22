import React from 'react';
import Head from 'next/head';
import Header from 'components/header/header';
import Banner from 'sections/lp-ivf/Banner';
import About from 'sections/lp-ivf/About';
import Treatments from 'sections/lp-ivf/Treatments';
import AshaSection from 'sections/lp-ivf/AshaSection';
import FeatureBlocks from 'sections/lp-ivf/FeatureBlocks';
import Cta from 'sections/lp-ivf/Cta';
import Video from 'sections/lp-ivf/Video';
import Features from 'sections/lp-ivf/Features';
import StatsPC from 'sections/lp-ivf/Stats';
import Stat from 'sections/lp-ivf/Stat';

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const IndexPage = ({ testimonials }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Bangalore&apos;s Best IVF Centres | GarbhaGudi IVF Centre</title>
        <meta
          name='title'
          content="Bangalore's Best IVF Centres | GarbhaGudi IVF Centre"
        />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content="Bangalore's Best IVF Centres | GarbhaGudi IVF Centre"
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
          content="Bangalore's Best IVF Centres | GarbhaGudi IVF Centre"
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
      <About />
      <Features />
      <StatsPC />
      <Stat />
      <Treatments />
      <AshaSection />
      <FeatureBlocks />
      <Video testimonials={testimonials} />
      <Cta />
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const testimonialsData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  );

  const testimonials = await testimonialsData.json();

  return {
    props: {
      testimonials,
      fallback: true,
    },
    revalidate: 180,
  };
};
