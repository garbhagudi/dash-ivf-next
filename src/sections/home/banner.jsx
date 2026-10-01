import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
/*
 * Same Zoho-form POST flow as `/landing-next` — see
 * `src/components/landing-next-zoho-html-form.jsx`. The `banner` variant
 * keeps the home hero layout (gray-pill labels, "Get a Call Back").
 */
const FormComponent = dynamic(
  () => import('components/landing-next-zoho-html-form'),
  { ssr: true },
);

/*
 * Hero (LCP) image: server-rendered <picture> with AVIF/WebP/JPEG sources,
 * a matching <link rel="preload"> and fetchpriority=high. No carousel/JS is
 * needed to discover it. Regenerate the files in /public/images with sharp
 * from the originals when the offer artwork changes.
 */
const banner = {
  alt: 'GarbhaGudi IVF festive season offer: free 1st fertility specialist consultation, semen analysis and TVUS scan. Valid until 31st October 2026. Call 9108 9108 32.',
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
            <source media='(min-width: 768px)' srcSet={`${banner.desktop}.jpg`} />
            <source type='image/avif' srcSet={mobileSet('avif')} sizes='100vw' />
            <source type='image/webp' srcSet={mobileSet('webp')} sizes='100vw' />
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
          className='flex min-h-[560px] justify-center bg-[#005e7e] md:min-h-[500px]'
          id='leadForm'
        >
          {isClient ? (
            <div className='flex h-full w-full items-center justify-center'>
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
