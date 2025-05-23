// import DoctorLocation from 'components/cards/doctorLocation';
import React from 'react';
import LocationHeader from 'components/locationHeader';
import CallToAction from 'sections/home/subscribe-us';
// import { doctors } from 'components/doctors';
import Head from 'next/head';

const Marathahalli = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre, Marathahalli | Best IVF & Fertility Hospital in
          India
        </title>
        <meta
          name='title'
          content='Best IVF Centre in Nagarabhavi | Infertility treatment and IVF Cost in Marathahalli - GarbhaGudi'
        />
        <meta
          name='description'
          content='GarbhaGudi IVF Centre in Nagarabhavi offers full range of fertility treatments. Call now to book an appointment! Visit best IVF centre in Marathahalli now.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre, Nagarabhavi | Best IVF & Fertility Hospital in
          India'
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1201x501_MH_jqxxsh.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre, Nagarabhavi | Best IVF & Fertility Hospital in
          India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1201x501_MH_jqxxsh.jpg'
        />
      </Head>
      <LocationHeader
        branch='Nagarabhavi'
        mapLink='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1944.087072336465!2d77.508472!3d12.960706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fcd6ee8ee57%3A0x2b5769e83d027d93!2sGarbhaGudi%20IVF%20Centre%2C%20Nagarbhavi!5e0!3m2!1sen!2sin!4v1682147772838!5m2!1sen!2sin'
        phone='+91 9480 9480 05'
        address={
          '4TH floor, Chirag Towers, 24 & 64, Service Rd, next to Kalamandir, Marathahalli, Bengaluru, Karnataka 560037'
        }
      />
      {/* <div className='mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3'>
        {doctors.map(
          (items) =>
            items.locations.includes('Nagarabhavi') && (
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

export default Marathahalli;
