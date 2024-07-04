import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DoctorLocation = ({ name, designation, image, qualification }) => {
  return (
    <div>
      <Link href={'/contact-us'} passHref>
        <div className='mb-8 cursor-pointer text-center md:mb-0'>
          <div className='relative mx-auto -mb-20 h-44 w-44'>
            <div className='animate-rotate bg-[length: 400%] absolute h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
            <Image
              className='overflow-hidden rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
              src={image}
              alt={name}
              width={500}
              height={500}
              loading='lazy'
            />
          </div>
          <div className='h-52 rounded-lg bg-gray-100 px-2 pb-6 pt-24 text-gray-400 shadow-lg transition-all duration-500 hover:bg-gray-50 hover:shadow-2xl sm:pt-28'>
            <h3 className='text-md mb-3 font-heading font-bold text-gray-800'>
              {name}
            </h3>
            <p className='text-sm tracking-wide text-gray-800'>{designation}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DoctorLocation;
