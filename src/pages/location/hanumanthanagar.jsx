// import DoctorLocation from 'components/cards/doctorLocation';
import React from 'react';
import LocationHeader from 'components/locationHeader';
// import { doctors } from 'components/doctors';
import CallToAction from 'sections/home/subscribe-us';
import Head from 'next/head';

const HanumanthaNagar = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre, Hanumanthanagar | Best IVF & Fertility Hospital
          in India
        </title>
        <meta
          name='title'
          content='Best IVF Centre in Hanumanthanagar | Infertility treatment and IVF Cost in Hanumanthanagar - GarbhaGudi'
        />
        <meta
          name='description'
          content='GarbhaGudi IVF Centre in Hanumanthanagar offers full range of fertility treatments. Call now to book an appointment! Visit the best IVF Centre in Hamumanthanagar now.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre, Hanumanthanagar | Best IVF & Fertility Hospital
          in India'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi-ivf.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre, Hanumanthanagar | Best IVF & Fertility Hospital
          in India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.jpg'
        />
      </Head>
      <LocationHeader
        branch='Hanumanthanagar'
        mapLink='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.886019164418!2d77.556468!3d12.9416527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61c537027ad19840!2sGarbhaGudi%20IVF%20Centre%2C%20Hanumanthanagar.!5e0!3m2!1sen!2sin!4v1663838744587!5m2!1sen!2sin'
        phone='+919480948005'
        address={
          'Subhasri Complex, 210/A, Kumaraswamy Temple Rd, 2nd Block, Phase 1, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560050'
        }
      />
      {/* <div className='mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {doctors.map(
          (items) =>
            items.locations.includes('Hanumanthanagar') && (
              <DoctorLocation
                key={items.name}
                name={items.name}
                qualification={items.qualification}
                designation={items.designation}
                image={items.image.url}
              />
            ),
        )}
      </div> */}
      <div className='pt-8'>
        <CallToAction />
      </div>
    </div>
  );
};

export default HanumanthaNagar;
