import React from 'react';
import Link from 'next/link';

const Cta = () => {
  return (
    <div className='bg-gray-100 rounded-lg max-w-7xl mx-auto'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>Ready to start?</span>
          <span className='block text-brandPink'>
            Let us take your dreams forward...
          </span>
        </h2>
        <div className='text-right space-x-3 flex items-center justify-center flex-col lg:flex-row'>
          <button className='px-6 py-3 text-center mx-auto block sm:inline-block bg-brandPink hover:bg-brandPurpleDark transition duration-200 ease-in-out text-white font-semibold rounded-lg mt-5 lg:mt-0'>
            <Link
              href='#leadForm'
              className='scroll-smooth font-content text-lg'
            >
              Book an Appointment
            </Link>
          </button>
          <button className='px-6 py-3 text-center mx-auto block sm:inline-block bg-brandPink hover:bg-brandPurpleDark transition duration-200 ease-in-out text-white font-semibold rounded-lg mt-5 lg:mt-0'>
            <Link
              href='tel:+919108910832'
              className='scroll-smooth font-content text-lg'
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
