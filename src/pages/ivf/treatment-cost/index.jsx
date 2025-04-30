import React from 'react';
import Head from 'next/head';
import Header from 'components/header/header';
import Offer from 'sections/treatmentCost/offer';
import KeyBenefits from 'sections/treatmentCost/keyBenefits';
import Content from 'sections/treatmentCost/content';
import OtherServices from 'sections/treatmentCost/otherServices';
import Treatment from 'sections/treatmentCost/treatment';
import PeopleContainer from 'sections/treatmentCost/peopleContainer';
import TeamSection from 'sections/home/our-team';
import Faq from 'sections/treatmentCost/faq';
import Cta from 'sections/home/cta';
import RelatedSearches from 'sections/home/relatedSearches';
import Testimonial from 'sections/home/testimonials';
import Script from 'next/script';

const IndexPage = () => {
  return (
    <div>
      <Head>
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
      {/* Engati Bot Script */}
      <Script id='engati-bot' strategy='afterInteractive'>
        {`
            (function(e,t,a){
              var c=e.head||e.getElementsByTagName("head")[0],
                  n=e.createElement("script");
              n.async=!0;
              n.defer=!0;
              n.type="text/javascript";
              n.src=t+"/static/js/widget.js?config="+JSON.stringify(a);
              c.appendChild(n);
            })(document,"https://app.engati.com",{
              bot_key:"ce000a8e2dc64673",
              welcome_msg:true,
              branding_key:"default",
              server:"https://app.engati.com",
              e:"p"
            });
          `}
      </Script>
      <Header />
      <Offer />
      <KeyBenefits />
      <Content />
      <OtherServices />
      <Treatment />
      <PeopleContainer />
      <TeamSection />
      <Faq />
      <Testimonial />
      <Cta />
      <RelatedSearches />
    </div>
  );
};

export default IndexPage;
