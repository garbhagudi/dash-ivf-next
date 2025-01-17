import { useState } from 'react';
import { Popover } from '@headlessui/react';
import Head from 'next/head';
import Image from 'components/image';
import Link from 'next/link';
import Popup from 'components/Popup';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const logoUrl =
    'https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/GG_Logo_lwfiec.svg';

  return (
    <>
      <Head>
        <link rel='preload' href={logoUrl} as='image' type='image/svg+xml' />
      </Head>
      <Popover className='font-content sticky top-0 z-20 border-b-2 bg-white shadow-xl'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='flex items-center justify-between border-gray-100 py-3 sm:py-5 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link href='/'>
                <div>
                  <span className='sr-only'>logo</span>
                  <Image
                    className='h-10 sm:h-14'
                    src={logoUrl}
                    alt='logo'
                    loading='lazy'
                  />
                </div>
              </Link>
            </div>

            <div className='flex items-center justify-end md:flex-1 lg:w-0'>
              <div className='hidden md:flex'>
                <Popup
                  title={'Book Appointment'}
                  btnClassName='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
                />
              </div>
              <div className='md:hidden'>
                <Popup
                  title={'Book Now'}
                  btnClassName='ml-8 flex items-center justify-end whitespace-nowrap rounded-md border border-transparent bg-brandPink3 px-3 py-1 text-sm font-medium text-white shadow-sm hover:bg-brandPink'
                />
              </div>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}
