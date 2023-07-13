import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DoctorLocation = ({ name, designation, image, qualification }) => {
  return (
    <div>
      <Link href={'/contact-us'} passHref>
        <div className='text-center mb-8 md:mb-0 cursor-pointer'>
          <div className='relative h-44 w-44 mx-auto -mb-20'>
            <div className='h-full w-full absolute rounded-full overflow-hidden bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
            <Image
              className='rounded-full shadow-2xl drop-shadow-2xl bg-transparent overflow-hidden'
              src={image}
              alt={name}
              width={500}
              height={500}
              loading='lazy'
            />
          </div>
          <div className='bg-gray-100 shadow-lg rounded-lg px-2 pt-24 sm:pt-28 pb-6 h-52 text-gray-400 hover:shadow-2xl hover:bg-gray-50 transition-all duration-500'>
            <h3 className='font-heading font-bold text-gray-800 text-md mb-3'>
              {name}
            </h3>
            <p className='text-gray-800 text-sm tracking-wide'>{designation}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DoctorLocation;
