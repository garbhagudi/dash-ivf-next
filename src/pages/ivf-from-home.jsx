import React from 'react';
import Banner from 'sections/ipl/banner';
import WorkFlow from 'sections/ipl/workflow';
import SubscribeUs from 'sections/home/subscribe-us';
import Features from 'sections/ipl/features';
import Faq from 'sections/ipl/faq';
import VideoTwo from 'sections/ipl/video-ifh';
import Head from 'next/head';

const IvfFromHome = () => {
  return (
    <div>
      <Head>
        <title>IVF From Home - GarbhaGudi</title>
        <meta
          name='description'
          content='Initialise your IVF treatment from the comfort of your home'
        />
        <meta
          property='og:title'
          content='IVF From Home - GarbhaGudi IVF Centre'
        />
        <meta property='og:type' content='webpage' />
        <meta
          property='og:url'
          content='https://garbhagudi-ivf.com/ivf-from-home'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudi/image/upload/v1633779919/garbhagudi-ivf/Banners/ivffromhome_tdjvoq.webp'
        />
        <meta name='twitter:site' content='@garbhagudiivf'></meta>
        <meta name='twitter:title' content='GarbhaGudi IVF Centre ' />
        <meta
          name='twitter:description'
          content=" India's Best IVF Infrastructure"
        />
        <meta
          name='twitter:image'
          content=' https://res.cloudinary.com/garbhagudi/image/upload/v1633779919/garbhagudi-ivf/Banners/ivffromhome_tdjvoq.webp'
        />
        <meta name='twitter:card' content='summary_large_image'></meta>
      </Head>
      <Banner />
      <VideoTwo />
      <WorkFlow />
      <Features />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default IvfFromHome;
