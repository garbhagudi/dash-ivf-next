import React from 'react';
import MyModal from 'components/modal';

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
      <div className='mx-auto'>
        <div className='relative overflow-hidden shadow-xl'>
          <div className='absolute inset-0'>
            <img
              className='h-full w-full object-cover'
              src='https://res.cloudinary.com/garbhagudi/image/upload/v1667805635/garbhagudi-ivf/New%20Website/Low-EMI-Cost-min_wpvggm.webp'
              alt='Start IVF Journey'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-brandPink4 to-brandPurple2 opacity-75 mix-blend-multiply' />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32'>
            <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
              <span className='block font-heading text-white'>
                Take Your First Steps Towards Parenthood
              </span>
              <span className='block text-indigo-200'></span>
            </h1>
            <p className='font-content mx-auto mt-6 max-w-lg text-center text-xl font-semibold text-white sm:max-w-3xl'>
              Take advantage of many financial benefits available at GarbhaGudi
              designed to make your IVF journey as affordable as possible
            </p>
            <div className='mx-auto mt-10 flex justify-center'>
              <div className='mx-auto'>
                <div>
                  <MyModal title={'Get Started'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
