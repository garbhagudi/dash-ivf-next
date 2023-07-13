import DoctorLocation from 'components/cards/doctorLocation';
import React from 'react';
import CallToAction from 'sections/home/subscribe-us';
import LocationHeader from 'components/locationHeader';
import { doctors } from 'components/doctors';
import Head from 'next/head';

const KalyanNagar = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre, Kalyan Nagar | Best IVF & Fertility Hospital in
          India
        </title>
        <meta
          name='title'
          content='Best IVF Centre in Kalyan Nagar | Infertility treatment and IVF Cost in Kalyan Nagar - GarbhaGudi'
        />
        <meta
          name='description'
          content='GarbhaGudi IVF Centre in Kalyan Nagar offers full range of fertility treatments. Call now to book an appointment! Visit best IVF centre in Kalyan Nagar now.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre, Kalyan Nagar | Best IVF & Fertility Hospital in
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre, Kalyan Nagar | Best IVF & Fertility Hospital in
          India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg'
        />
      </Head>
      <LocationHeader
        branch='Kalyan Nagar'
        mapLink='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124389.58988191826!2d77.50394971640624!3d13.024545500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172fb91663b9%3A0xfb184afa11ae1fdd!2sGarbhaGudi%20IVF%20Centre%2C%20Kalyan%20Nagar.!5e0!3m2!1sen!2sin!4v1663845866928!5m2!1sen!2sin'
        phone='+919108910832'
        address={
          'Park Landing, 5AC-709, Dr Puneeth Rajkumar Rd, Balachandra Layout, HRBR Layout 2nd Block, Chelekare, Extension, Bengaluru, Karnataka 560043'
        }
      />
      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {doctors.map(
          (items) =>
            items.locations.includes('Kalyan Nagar') && (
              <DoctorLocation
                key={items.name}
                name={items.name}
                qualification={items.qualification}
                designation={items.designation}
                image={items.image.url}
              />
            ),
        )}
      </div>
      <div className='pt-8'>
        <CallToAction />
      </div>
    </div>
  );
};

export default KalyanNagar;
