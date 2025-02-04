// import DoctorLocation from 'components/cards/doctorLocation';
import React from 'react';
// import { doctors } from 'components/doctors';
import LocationHeader from 'components/locationHeader';
import CallToAction from 'sections/home/subscribe-us';
import Head from 'next/head';

const ElectronicCity = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre, Electronic City | Best IVF & Fertility Hospital
          in India
        </title>
        <meta
          name='title'
          content='Best IVF Centre in Electronic City | Infertility treatment and IVF Cost in Electronic City - GarbhaGudi'
        />
        <meta
          name='description'
          content='GarbhaGudi IVF Centre in Electronic City offers full range of fertility treatments. Call now to book an appointment! Visit best IVF centre in Electronic City now.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre, Electronic City | Best IVF & Fertility Hospital in India '
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1201x501_EC_g4kioe.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre, Electronic City | Best IVF & Fertility Hospital in India '
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1201x501_EC_g4kioe.jpg'
        />
      </Head>
      <LocationHeader
        branch='Electronic City'
        mapLink='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.860805420732!2d77.66559191525012!3d12.852265620961985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c972baa2581%3A0x38dd3f8049f5f606!2sGarbhaGudi%20IVF%20Centre%2C%20Electronic%20City.!5e0!3m2!1sen!2sin!4v1663845628153!5m2!1sen!2sin'
        phone='+919480948005'
        address={
          'Ganesh Towers,3rd Floor, 60/5 and 60/6, NH 44, Beside Andhra Bank, Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100'
        }
      />
      {/* <div className='mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3'>
        {doctors.map(
          (items) =>
            items.locations.includes('Electronic City') && (
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

export default ElectronicCity;
