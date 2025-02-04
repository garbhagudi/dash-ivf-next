import React from 'react';
import Link from 'next/link';
import Popup from 'components/Popup';

const Cta = () => {
  return (
    <div className='mx-auto max-w-7xl rounded-lg bg-gray-100'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:py-16 lg:text-left'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>Ready to start?</span>
          <span className='block text-brandPink'>
            Let us take your dreams forward...
          </span>
        </h2>
        <div className='flex flex-col items-center justify-center lg:flex-row'>
          <Popup
            title={'Book an Appointment'}
            btnClassName='mx-auto mt-5 block rounded-lg bg-brandPink px-6 py-3 text-center font-semibold text-white transition duration-200 ease-in-out hover:bg-brandPurpleDark sm:inline-block lg:mt-0 text-lg'
          />
          <button className='mx-auto mt-5 block rounded-lg bg-brandPink px-6 py-3 text-center font-semibold text-white transition duration-200 ease-in-out hover:bg-brandPurpleDark sm:inline-block lg:ml-2 lg:mt-0'>
            <Link
              href='tel:+919480948005'
              className='font-content scroll-smooth text-lg'
            >
              Talk to us
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
