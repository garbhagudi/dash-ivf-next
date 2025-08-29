import { Popover } from '@headlessui/react';
import Head from 'next/head';
import Image from 'components/image';
import Link from 'next/link';

export default function Header() {
  const logoUrl =
    'https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_auto,h_70,c_fill/v1751352018/GG_New-Hori_Logo_ziwur1.svg';

  return (
    <>
      <Head>
        <link rel='preload' href={logoUrl} as='image' type='image/svg+xml' />
      </Head>
      <Popover className='sticky top-0 z-20 border-b-2 bg-white shadow-xl'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='flex items-center justify-between border-gray-100 py-3 sm:py-5 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <Link href='/'>
                <div>
                  <span className='sr-only'>logo</span>
                  <Image
                    src={logoUrl}
                    alt='logo'
                    width={250}
                    height={70}
                    priority
                  />
                </div>
              </Link>
            </div>

            <div className='flex items-center justify-end md:flex-1 lg:w-0'>
              <a
                href='tel:+919108910832'
                className='flex w-fit items-center gap-1 rounded-md bg-gray-300 pr-2 shadow-md md:gap-2'
              >
                <div className='flex h-6 w-6 items-center justify-center rounded-md bg-brandPink text-white md:h-10 md:w-10'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    height='1.2em'
                    width='1.2em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path fill='none' d='M0 0h24v24H0z'></path>
                    <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'></path>
                  </svg>
                </div>
                <p className='text-sm font-semibold text-brandPink md:text-lg'>
                  +91 9108 9108 32
                </p>
              </a>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}
