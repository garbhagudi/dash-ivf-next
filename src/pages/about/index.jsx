import React from 'react';
import HeroHome from 'sections/about-us/banner';
import FeaturesBlocks from 'sections/about-us/featuresBlock';
import Management from 'sections/about-us/management';
import Testimonials from 'sections/about-us/news';
import CallToAction from 'sections/home/subscribe-us';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>About | GarbhaGudi</title>
        <meta name='title' content='About | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='About | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi-ivf.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='About | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <HeroHome />
      <Management />
      <FeaturesBlocks />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default IndexPage;
