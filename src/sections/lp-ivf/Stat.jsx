import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const metrics = [
  {
    id: 1,
    stat: '10000+',
    emphasis: 'Happy Families',
  },
  {
    id: 2,
    stat: '150+',
    emphasis: 'Free Fertility Awareness Camps',
  },
  {
    id: 3,
    stat: '65-73%',
    emphasis: 'IVF Success Rate',
  },
  {
    id: 4,
    stat: '7',
    emphasis: 'Infertility Centres Across Bangalore',
  },
];

const Stat = () => {
  return (
    <div className='relative mx-auto bg-white dark:bg-gray-800'>
      <div className='absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full'>
        <div className='h-full w-full xl:grid xl:grid-cols-2'>
          <div className='h-full xl:relative xl:col-start-2'>
            <Image
              className='h-full w-full object-cover opacity-70 xl:absolute xl:inset-0'
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722501966/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0_1_i7oozx.jpg'
              alt='Successful IVF Treatment In Banglore'
              height={1024}
              width={1024}
              loading='lazy'
            />
            <div
              aria-hidden='true'
              className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r dark:from-gray-800'
            />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8'>
        <div className='relative pb-64 pt-12 sm:pb-64 sm:pt-24 xl:col-start-1 xl:pb-24'>
          <p className='mt-3 font-heading text-3xl font-extrabold text-gray-800 dark:text-gray-200'>
            Our Ever-Growing Success
          </p>
          <p className='font-content mt-5 text-lg text-gray-800 dark:text-gray-200'>
            GarbhaGudi is a place where dreams come alive, hopes never fade, and
            possibilities never end. As one of the finest{' '}
            <Link
              href='/'
              className='text-gg-500 dark:text-gg-400 hover:underline'
            >
              IVF Centre in Bangalore
            </Link>
            , we ceaselessly work to help you cherish the golden moment of
            holding your little bundles of joy. Along with our quality of
            treatment and care, some of the other contributing factors for
            achieving high success rates are:
          </p>
          <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2'>
            {metrics.map((item) => (
              <p key={item.id}>
                <span className='block font-heading text-2xl font-bold text-gray-800 dark:text-gray-200'>
                  {item.stat}
                </span>
                <span className='mt-1 block text-base text-gray-800 dark:text-gray-200'>
                  <span className='font-content font-medium text-gray-800 dark:text-gray-200'>
                    {item.emphasis}
                  </span>{' '}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stat;
