import Image from 'components/image';
import React from 'react';
import Head from 'next/head';
const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>GarbhaGudi IVF Center | Know your Fertility Score</title>
      </Head>
      <div className='mx-auto max-w-3xl'>
        <h1></h1>
        <Image
          src={
            'https://res.cloudinary.com/garbhagudiivf/image/upload/v1663403546/Banner/Google_Form_Header-min_tjenif.jpg'
          }
          alt='Inquiry'
          loading='lazy'
        />
        <iframe
          src='/contact_2.html'
          className='mx-auto h-[80vh] w-screen max-w-md md:h-[60vh] lg:max-w-2xl'
        ></iframe>
      </div>
    </div>
  );
};

export default IndexPage;
