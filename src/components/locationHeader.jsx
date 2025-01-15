import Script from 'next/script';
import React from 'react';

const LocationHeader = ({ branch, mapLink, address, phone }) => {
  return (
    <div>
      <div className="relative flex h-48 items-center justify-center bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1644049097/Banner/GG_Care_Web_Banner-6_iyxanu.jpg')] bg-cover bg-bottom">
        <div className='absolute h-full w-full bg-gray-900 opacity-50'></div>
        <h1 className='relative text-center font-heading text-3xl font-bold text-white md:text-4xl'>
          {branch}
        </h1>
      </div>
      <div className='mx-auto max-w-7xl py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-center justify-center px-1'>
            <iframe
              src={mapLink}
              allowfullscreen='True'
              loading=''
              className='aspect-square w-full rounded-xl border-2 sm:w-1/2 lg:w-11/12'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='flex flex-col justify-center px-3 pt-10 lg:px-10 lg:pt-0'>
            <p>
              GarbhaGudi is a place where dreams come alive, hopes never fade,
              and possibilities never end. We strive tirelessly to assist you to
              treasure the golden moment of holding your little bundles of joy.
            </p>
            <p className='mt-4'>
              You no longer need to go long distances for fertility treatments!
              GarbhaGudi now has five strategically positioned branches in
              Bengaluru and wants to expand to additional places in the near
              future.
            </p>
            <div className='flex flex-col space-y-4 pt-4'>
              <div>
                Phone:{' '}
                <a href={`tel:${phone}`} className='font-bold text-brandPink'>
                  {phone}
                </a>
              </div>
              <div>
                Address : <span className=''>{address}</span>
              </div>
              <div>
                E mail:{' '}
                <a
                  href='mailto:dreams@garbhagudi.com'
                  className='font-bold text-brandPink'
                >
                  dreams@garbhagudi.com
                </a>
              </div>
            </div>
            <img
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643287945/Banner/1200x500_4Directors_nqn9eg.jpg'
              alt='image'
              className='mt-8 h-40 rounded-xl object-cover object-center'
            />
          </div>
        </div>
      </div>
      <div className='py-10 text-center font-heading text-2xl font-bold md:text-4xl'>
        Fertility Experts at {branch}
      </div>
    </div>
  );
};

export default LocationHeader;
