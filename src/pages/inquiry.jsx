import Image from 'components/image';
import React from 'react';

const IndexPage = () => {
  return (
    <div className='max-w-3xl mx-auto'>
      <h1></h1>
      <Image
        src={
          'https://res.cloudinary.com/garbhagudiivf/image/upload/v1663403546/Banner/Google_Form_Header-min_tjenif.jpg'
        }
        alt='Inquiry'
      />
      <iframe
        src='/contact_2.html'
        frameborder='0'
        className='w-screen max-w-md lg:max-w-2xl h-[80vh] md:h-[60vh] mx-auto'
      ></iframe>
    </div>
  );
};

export default IndexPage;
