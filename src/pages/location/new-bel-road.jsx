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
          GarbhaGudi IVF Centre, New BEL Road | Best IVF & Fertility Hospital in
          India
        </title>
        <meta
          name='title'
          content='Best IVF Centre in New BEL Road | Infertility treatment and IVF Cost in Marathahalli - GarbhaGudi'
        />
        <meta
          name='description'
          content='GarbhaGudi IVF Centre in New BEL Road offers full range of fertility treatments. Call now to book an appointment! Visit best IVF centre in Marathahalli now.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre, New BEL Road | Best IVF & Fertility Hospital in
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
          content='GarbhaGudi IVF Centre, New BEL Road | Best IVF & Fertility Hospital in
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
        branch='New BEL Road'
        mapLink='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248776.01303899457!2d77.571752!3d13.027698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1787016c1729%3A0xc0292defa84a9230!2sGarbhaGudi%20IVF%20Centre%2C%20New%20BEL%20Road!5e0!3m2!1sen!2sin!4v1682145314332!5m2!1sen!2sin'
        phone='+91 9480 9480 05'
        address={
          'No. 3, 1st Floor, New BEL Rd, opp. to Ramaiah Hospital, RMV 2nd Stage, Ashwath Nagar, Devasandra Layout, Bengaluru, Karnataka 560094'
        }
      />
      {/* <div className='mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3'>
        {doctors.map(
          (items) =>
            items.locations.includes('RMV Extension') && (
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
