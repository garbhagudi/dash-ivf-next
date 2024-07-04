import React from 'react';
import MyModal from 'sections/lp-catalyst/modal';

const CallToAction = () => {
  return (
    <div className='mx-auto max-w-7xl rounded-lg bg-gray-100'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:py-16 lg:text-left'>
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
