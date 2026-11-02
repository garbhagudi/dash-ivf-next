import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const FormComponent = dynamic(
  () => import('components/landing-next-zoho-html-form'),
  { ssr: true },
);

const banner = {
  alt: 'GarbhaGudi IVF Centre Paripoorna 2026: a defined, all inclusive IVF care package at ₹1,75,000. Transparent. Complete. With no hidden costs. Call 9108 9108 32.',
  desktop: '/images/landing-banner-desktop-1600',
  mobile: '/images/landing-banner-mobile',
};
const MOBILE_SIZES = [480, 828];
const mobileSet = (ext) =>
  MOBILE_SIZES.map((w) => `${banner.mobile}-${w}.${ext} ${w}w`).join(', ');

const Banner = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      <Head>
        <link
          rel='preload'
          as='image'
          type='image/avif'
          href={`${banner.mobile}-828.avif`}
          imageSrcSet={mobileSet('avif')}
          imageSizes='100vw'
          media='(max-width: 767px)'
          fetchPriority='high'
        />
        <link
          rel='preload'
          as='image'
          type='image/avif'
          href={`${banner.desktop}.avif`}
          media='(min-width: 768px)'
          fetchPriority='high'
        />
      </Head>

      <div className='grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='relative col-span-2 h-fit'>
          <picture>
            <source
              media='(min-width: 768px)'
              type='image/avif'
              srcSet={`${banner.desktop}.avif`}
            />
            <source
              media='(min-width: 768px)'
              type='image/webp'
              srcSet={`${banner.desktop}.webp`}
            />
            <source
              media='(min-width: 768px)'
              srcSet={`${banner.desktop}.jpg`}
            />
            <source
              type='image/avif'
              srcSet={mobileSet('avif')}
              sizes='100vw'
            />
            <source
              type='image/webp'
              srcSet={mobileSet('webp')}
              sizes='100vw'
            />
            <img
              src={`${banner.mobile}-828.jpg`}
              srcSet={mobileSet('jpg')}
              sizes='100vw'
              alt={banner.alt}
              width={828}
              height={1159}
              fetchPriority='high'
              loading='eager'
              decoding='async'
              className='block aspect-[828/1159] h-auto w-full object-cover md:aspect-[1600/838] md:h-full'
            />
          </picture>
        </div>
        <div
          className='flex min-h-[400px] justify-center bg-[#005e7e] md:min-h-[500px]'
          id='leadForm'
        >
          {isClient ? (
            <div className='flex h-full w-full flex-col items-center justify-center gap-3'>
              <div className='w-full overflow-hidden'>
                <div className='motion-safe:animate-marquee flex w-full justify-center motion-safe:justify-start'>
                  <span className='flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-gg-500 to-gg-600 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg'>
                    <span className='relative flex h-2 w-2'>
                      <span className='absolute inline-flex h-full w-full rounded-full bg-white opacity-75 motion-safe:animate-ping' />
                      <span className='relative inline-flex h-2 w-2 rounded-full bg-white' />
                    </span>
                    EMI options available
                  </span>
                </div>
              </div>
              <FormComponent
                variant='banner'
                title='Book Free Fertility Consultation Today'
                submitLabel='Get a Call Back'
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className='mx-auto mb-3 hidden w-full flex-col justify-center rounded-md bg-gg-500 p-2 px-4 font-semibold text-white shadow-sm md:flex'>
        <h1 className='w-full text-center text-base'>
          Best IVF & Fertility Clinic - Affordable IVF Treatment
        </h1>
      </div>
      <div className='mb-3 flex w-full flex-col justify-center rounded-md bg-brandPurpleDark p-2 px-5 font-semibold text-white shadow-sm md:hidden'>
        <h1 className='w-full text-center text-base'>
          Best IVF & Fertility Clinic - Affordable IVF Treatment
        </h1>
      </div>
    </div>
  );
};

export default Banner;
