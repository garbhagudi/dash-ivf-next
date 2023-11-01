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
    <div className='relative mx-auto bg-white'>
      <div className='absolute bottom-0 w-full h-80 xl:inset-0 xl:h-full'>
        <div className='w-full h-full xl:grid xl:grid-cols-2'>
          <div className='h-full xl:relative xl:col-start-2'>
            <Image
              className='object-cover w-full h-full opacity-70 xl:absolute xl:inset-0'
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1674112151/Misc/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0.jpg'
              alt='Successful IVF Treatment In Banglore'
              height={1024}
              width={1024}
              loading='lazy'
            />
            <div
              aria-hidden='true'
              className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
            />
          </div>
        </div>
      </div>
      <div className='max-w-4xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
        <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
          <p className='mt-3 text-3xl font-extrabold text-gray-800 font-heading'>
            Our Ever-Growing Success
          </p>
          <p className='mt-5 text-lg text-gray-800 font-content'>
            GarbhaGudi is a place where dreams come alive, hopes never fade, and
            possibilities never end. As one of the finest{' '}
            <Link href='/' className='text-gg-500 hover:underline'>
              IVF Centre in Bangalore
            </Link>
            , we ceaselessly work to help you cherish the golden moment of
            holding your little bundles of joy. Along with our quality of
            treatment and care, some of the other contributing factors for
            achieving high success rates are:
          </p>
          <div className='grid grid-cols-1 mt-12 gap-y-12 gap-x-6 sm:grid-cols-2'>
            {metrics.map((item) => (
              <p key={item.id}>
                <span className='block text-2xl font-bold text-gray-800 font-heading'>
                  {item.stat}
                </span>
                <span className='block mt-1 text-base text-gray-800'>
                  <span className='font-medium text-gray-800 font-content'>
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
