'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <div>
      <Image
        src={
          'https://res.cloudinary.com/garbhagudiivf/image/upload/v1737708942/Doctors_Image-01_gwmana.jpg'
        }
        alt={'fertility-specialists-banner'}
        width={1920}
        height={1080}
        className='h-full w-full object-cover'
        priority
      />
    </div>
  );
};
export default Banner;
