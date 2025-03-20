import React from 'react';

const KeyBenefits = () => {
  return (
    <>
      <div className='bg-gg-800'>
        <div className='lg:px-5 max-w-7xl mx-auto px-3'>
          <div className='text-center text-xl text-yellow-500 font-bold font-lexend lg:py-6 lg:text-2xl py-5'>
          15th Anniversary - ₹1 Lakh Off on IVF Treatment - A Gift from us to you!
          </div>
        </div>
      </div>
      <div className='max-w-8xl mx-auto sm:mt-6'>
        <div className='bg-gray-300 text-base text-center font-semibold max-w-lg mb-4 md:text-lg mx-auto px-3 py-2 sm:rounded-lg'>
          <div>
            Call{' '}
            <a
              href='tel:+919480948005'
              className='text-brandPink block sm:inline-block'
            >
              +91 9480 9480 05
            </a>
          </div>
          <div> to book your free consultation today!</div>
        </div>
      </div>
    </>
  );
};

export default KeyBenefits;
