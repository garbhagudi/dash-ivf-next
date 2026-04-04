import Head from 'next/head';
import Image from 'components/image';
import Link from 'next/link';

const logoUrl =
  'https://res.cloudinary.com/garbhagudiivf/image/upload/w_256,h_56/v1751352018/GG_New-Hori_Logo_ziwur1.svg';

export default function LandingNextHeader() {
  return (
    <>
      <Head>
        <link rel='preload' href={logoUrl} as='image' type='image/svg+xml' />
      </Head>
      <header className='sticky top-0 z-20 border-b-2 border-gray-100 bg-white shadow-xl'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-5'>
          <Link href='/' className='shrink-0 lg:w-0 lg:flex-1'>
            <span className='sr-only'>GarbhaGudi home</span>
            <Image
              className='h-fit w-36 sm:h-14 sm:w-44 md:w-48 lg:w-64'
              src={logoUrl}
              alt='GarbhaGudi IVF Centre'
              width={250}
              height={70}
            />
          </Link>
          <nav
            className='flex flex-1 items-center justify-end gap-2 sm:gap-3 lg:w-0'
            aria-label='Primary actions'
          >
            <a
              href='tel:+919108910832'
              className='hidden w-fit flex-row items-center gap-1 rounded-md bg-gray-300 pr-2 shadow-md sm:flex md:gap-2'
            >
              <span className='flex h-8 w-8 items-center justify-center rounded-md bg-brandPink text-white md:h-10 md:w-10'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  className='h-4 w-4 md:h-5 md:w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                </svg>
              </span>
              <span className='text-xs font-semibold text-brandPink md:text-lg'>
                +91 9108 9108 32
              </span>
            </a>
            <a
              href='#consultation'
              className='rounded-lg bg-brandPink px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-brandPink2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark'
            >
              Book consultation
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
