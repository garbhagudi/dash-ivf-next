import { HiStar } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import Popup from 'components/Popup';

const Banner = () => {
  return (
    <div className='bg-white pb-8 sm:pb-12 lg:pb-12'>
      <div className='overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-10'>
        <div className='block sm:mx-auto sm:hidden sm:max-w-3xl sm:px-6'>
          <div className='relative mb-8 mt-2 pl-2 pr-2 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-[28rem] lg:max-w-none lg:pl-12'>
            <Image
              className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1739953592/Website_Landing_page_-_02-01_ft0jzo.webp'
              alt='happy couple with a baby'
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className='mx-auto max-w-md px-3 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-20 lg:px-8'>
          <div>
            <div className='text-gray-800 sm:max-w-xl dark:text-gray-200'>
              <h1 className='text-center font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl'>
                Welcome to the Best IVF Centre In Bangalore
              </h1>
            </div>

            <div className='order-0'>
              <div className='items-left flex h-full flex-col justify-center bg-cover bg-no-repeat py-10 text-center lg:py-0'>
                <div className='flex flex-col items-center px-4 pb-4 text-center text-xl font-normal lg:mt-6 lg:py-2'>
                  <p>
                    Offer of the Month:{' '}
                    <strong className='text-brandPurpleDark'>
                      Exclusive Package at ₹ 1111
                    </strong>
                  </p>
                  <ul className='mt-2 flex flex-col items-start space-y-1'>
                    <li>1. Consultation</li>
                    <li>2. AFC Scan</li>
                    <li>3. Ultrasound Scan</li>
                    <li>4. Semen Analysis</li>
                  </ul>
                  <p className='mt-2'>Offer Validity: 28th February 2025</p>
                </div>
                <p className='mt-2 text-base font-extrabold'>
                  EMI Facility Available at 0% Interest.
                </p>
                <div className='mt-3 hidden text-left text-xs font-medium lg:block'>
                  *terms and conditions apply
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <h3 className='mb-6 text-2xl font-medium'>
                Why choose{' '}
                <span className='bg-gradient-to-r from-brandPink2 to-brandPurpleDark bg-clip-text text-transparent dark:to-brandPurple'>
                  GarbhaGudi?
                </span>
              </h3>
              <div className='grid cursor-pointer grid-cols-1 gap-3 text-base font-semibold text-gray-700 md:grid-cols-2'>
                <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                  <span className='font-bold text-brandPink dark:text-gg-400'>
                    15000+
                  </span>{' '}
                  Happy Families
                </div>
                <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                  <span className='font-bold text-brandPink dark:text-gg-400'>
                    12+
                  </span>{' '}
                  Years of Experience
                </div>
                <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                  IVF Success Rate
                </div>
                <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                  <span className='font-bold text-brandPink dark:text-gg-400'>
                    7
                  </span>{' '}
                  Centres Across Bangalore
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <div className='inline-flex items-center divide-x divide-gray-300'>
                <div className='flex flex-shrink-0 pr-5'>
                  <HiStar
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                  <HiStar
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                  <HiStar
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                  <HiStar
                    className='h-5 w-5 text-yellow-400'
                    aria-hidden='true'
                  />
                  <HiStar
                    className='h-5 w-5 text-gray-500'
                    aria-hidden='true'
                  />
                </div>
                <div className='min-w-0 flex-1 py-1 pl-5 text-center text-sm font-semibold text-gray-800 sm:py-3 md:text-left dark:text-gray-200'>
                  <span>Rated 4.8 stars on</span>
                  <span className='text-gg-500 dark:text-gg-400'>
                    {' '}
                    Google Reviews
                  </span>
                  <span> across all our branches</span>
                </div>
              </div>
            </div>
            <div className='hidden text-center lg:mt-6 lg:block lg:text-left'>
              {' '}
              <Popup
                title={'Book an Appointment'}
                btnClassName='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
              />
            </div>
          </div>
        </div>

        <div className='hidden sm:mx-auto sm:block sm:max-w-3xl sm:px-6'>
          <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <div className='hidden sm:block'>
              <div className='absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full dark:bg-gray-700' />
              <svg
                className='absolute right-1/2 top-8 -mr-3 lg:left-0 lg:m-0'
                width={404}
                height={392}
                fill='none'
                viewBox='0 0 404 392'
              >
                <defs>
                  <pattern
                    id='837c3e70-6c3a-44e6-8854-cc48c737b659'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200 dark:text-gray-700'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
                />
              </svg>
            </div>
            <div className='relative mt-2 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-[28rem] lg:max-w-none lg:pl-12'>
              <Image
                className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1739953592/Website_Landing_page_-_02-01_ft0jzo.webp'
                alt='happy couple with a baby'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
