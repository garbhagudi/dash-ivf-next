import React from 'react';
import MyModal from 'sections/lp-catalyst/modal';

const CallToAction = () => {
  return (
    <div className='bg-gray-100 rounded-lg max-w-7xl mx-auto'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>
            Let&apos;s turn your dreams into reality...
          </span>
          <span className='block text-brandPink'>Are you ready to begin ?</span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <MyModal title={'Book an Appointment'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
