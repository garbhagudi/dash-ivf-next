import React from 'react';
import { doctors } from 'components/doctors';
import DoctorLayout from 'components/doctorsLayout';
import Head from 'next/head';

const FertilityExperts = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);

  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Our Fertility Experts | GarbhaGudi IVF Centre</title>
        <meta
          name='title'
          content='Top Infertility Hospital and Centres with Best Fertility Doctors in Banglore | Garbha Gudi'
        />
        <meta
          name='description'
          content='GarbhaGudi is a well known and one of the best fertility hospitals in Bangalore and you can be sure of getting the best fertility care here. Our hospital specializes in IVF treatments and has helped hundreds of couples realize their dreams of parenthood.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Our Fertility Experts | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi-ivf.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a well known and one of the best fertility hospitals in Bangalore and you can be sure of getting the best fertility care here. Our hospital specializes in IVF treatments and has helped hundreds of couples realize their dreams of parenthood.'
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
          content='Our Fertility Experts | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a well known and one of the best fertility hospitals in Bangalore and you can be sure of getting the best fertility care here. Our hospital specializes in IVF treatments and has helped hundreds of couples realize their dreams of parenthood.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <div className='mx-auto max-w-7xl'>
        <h1 className='py-10 text-center font-heading text-4xl font-bold lg:py-24 lg:text-5xl'>
          Our Fertility Experts
        </h1>
        <div className='xl-grid-cols-5 grid grid-cols-2 gap-5 px-2 lg:grid-cols-4'>
          {doctors.map((items) => (
            <DoctorLayout
              key={items.id}
              index={items.id}
              imageComponent={
                <ImageComponent
                  name={items.name}
                  image={items.image}
                  qualification={items.qualification}
                  designation={items.designation}
                />
              }
              activeIndex={activeIndex}
              docpic={items.image}
              name={items.name}
              bio={items.bio}
              setActiveIndex={setActiveIndex}
            ></DoctorLayout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FertilityExperts;

const ImageComponent = ({ name, image, qualification, designation }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img
        src={image}
        alt={name}
        className='h-40 w-40 rounded-full md:h-64 md:w-64'
      />
      <div className='text-center'>
        <div className='mt-4 font-heading text-xl font-bold'>{name}</div>
        <div className='font-content mt-2 text-xs'>{qualification}</div>
        <div className='font-content mb-4 mt-2 text-sm'>{designation}</div>
      </div>
    </div>
  );
};
