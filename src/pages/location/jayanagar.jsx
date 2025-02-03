// import DoctorLocation from 'components/cards/doctorLocation';
import React from 'react';
import LocationHeader from 'components/locationHeader';
import CallToAction from 'sections/home/subscribe-us';
// import { doctors } from 'components/doctors';
import Head from 'next/head';

const Jayanagar = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre, Jayanagar | Best IVF & Fertility Hospital in
          India
        </title>
        <meta
          name='title'
          content='Best IVF Centre in Jayanagar | Infertility treatment and IVF Cost in Jayanagar - GarbhaGudi'
        />
        <meta
          name='description'
          content='GarbhaGudi IVF Centre in Jayanagar offers full range of fertility treatments. Call now to book an appointment! Visit best IVF centre in Jayanagar now.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre, Jayanagar | Best IVF & Fertility
          Hospital in India'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277102/Locations/1201x501_SE_sziwh5.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre, Jayanagar | Best IVF & Fertility
          Hospital in India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277102/Locations/1201x501_SE_sziwh5.jpg'
        />
      </Head>
      <LocationHeader
        branch='Jayanagar'
        mapLink='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124389.58988191826!2d77.50394971640624!3d13.024545500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1596b02fd78f%3A0x1f870d0e467c8c8a!2sGarbhaGudi%20IVF%20Centre%2C%20South%20End%20Circle.!5e0!3m2!1sen!2sin!4v1663846658020!5m2!1sen!2sin'
        phone='+919480940805'
        address={
          'South End Circle, 26, Pattalamma Temple Rd, Basavanagudi, Bengaluru, Karnataka 560004'
        }
      />
      {/* <div className='mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {doctors.map(
          (items) =>
            items.locations.includes('Jayanagar') && (
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

export default Jayanagar;
