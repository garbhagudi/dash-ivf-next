import React from 'react';
import Head from 'next/head';
import Header from 'components/header/header';
import Video from 'sections/lp-ivf/Video';
import DoctorsList from 'sections/fertility-specialists/doctorsList';
import Banner from 'sections/fertility-specialists/Banner';

const FertilitySpecialists = () => {
  const testimonials = {
    items: [
      {
        id: '1',
        snippet: {
          resourceId: {
            videoId: 'UQmHSuSOk5w',
          },
        },
      },
      {
        id: '2',
        snippet: {
          resourceId: {
            videoId: 'A0FUbqXKxAE',
          },
        },
      },
      {
        id: '3',
        snippet: {
          resourceId: {
            videoId: 'NVlmT5pBMr0',
          },
        },
      },
    ],
  };

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
      <DoctorsList />
      <Video testimonials={testimonials} />
    </div>
  );
};

export default FertilitySpecialists;
