import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Carousel = dynamic(
  () => import('nuka-carousel').then((m) => m.Carousel),
  {
    ssr: false,
  },
);
import { Phone } from 'lucide-react';
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
          href='/images/Jun Month Landing page C--01.jpg'
          as='image'
        />
      </Head>

      <div className='grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='relative col-span-2 h-fit'>
          <Carousel
            autoplay={true}
            autoplayInterval={3000}
            wrapMode='wrap'
            className='border-0 shadow-2xl drop-shadow-2xl'
            showArrows='hover'
          >
            {bannerData.length > 0 ? (
              bannerData.map((banner, index) => (
                <div key={banner.id} className='relative overflow-hidden'>
                  {/* Desktop image */}
                  <Image
                    src={banner.image.desktop}
                    alt={banner.alt}
                    width={1024}
                    height={536}
                    {...(index === 0 ? { priority: true } : {})}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px'
                    className='hidden h-full w-full object-cover md:block'
                  />
                  {/* Mobile image */}
                  <Image
                    src={banner.image.mobile}
                    width={731}
                    height={1024}
                    alt={banner.alt}
                    {...(index === 0 ? { priority: true } : {})}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='w-full object-fill md:hidden lg:h-[65vh]'
                  />

                  {/* === DESKTOP OVERLAY === */}
                  <div className='pointer-events-none absolute inset-0 hidden md:block'>
                    {/* Headline — top right */}
                    <div className='absolute right-0 top-12 w-[50%]'>
                      <p className='text-4xl font-bold leading-tight text-gray-900'>
                        Every{' '}
                        <span className='rounded bg-gg-500 px-1.5 py-0.5 text-white'>
                          Parenthood
                        </span>
                        <br />
                        Journey Begins with{' '}
                        <span className='rounded bg-gg-500 px-1.5 py-0.5 text-white'>
                          Hope.
                        </span>
                      </p>
                      <p className='mt-1 text-4xl font-bold text-gray-900'>
                        Let Us Walk Beside{' '}
                        <span className='rounded bg-gg-500 px-1.5 py-0.5 text-white'>
                          You
                        </span>
                      </p>
                    </div>
                    {/* Cloud + offer — mid right */}
                    <div className='absolute left-1/2 top-[20%] w-[40%] px-4'>
                      <div className='relative'>
                        <Image
                          src='/images/Cloud.png'
                          width={300}
                          height={250}
                          alt=''
                          aria-hidden='true'
                          className='w-full'
                        />
                        <div className='absolute left-0 right-0 top-[38%] flex justify-center gap-3 px-5'>
                          <div className='text-center leading-tight text-gray-900'>
                            <p className='text-4xl font-extrabold'>FREE*</p>
                            <p className='text-sm font-bold'>
                              1st Fertility Expert
                            </p>
                            <p>Consultation</p>
                            <p className='text-sm font-bold'>
                              Baseline Fertility
                            </p>
                            <p>(TVUS) Scan</p>
                          </div>
                          <div className='h-14 w-px bg-gray-500' />
                          <div className='text-center leading-tight text-gray-900'>
                            <p className='text-4xl font-extrabold'>50%</p>
                            <p className='text-4xl font-extrabold'>OFF*</p>
                            <p className='text-sm font-bold'>on 24-</p>
                            <p className='text-sm font-bold'>Fertility Tests</p>
                            <p className='text-xs'>Valid until July 31, 2026</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Bottom strip */}
                    <div className='absolute bottom-0 left-0 flex w-full'>
                      <div className='flex flex-1 items-center gap-2 bg-gg-500 px-4 py-2 text-lg font-bold text-white'>
                        <Phone size={16} className='inline-block' /> 9108 9108
                        32
                      </div>
                      <div className='flex items-center bg-yellow-400 px-5 py-2 text-sm font-extrabold text-gray-900'>
                        BOOK FREE Consultation
                      </div>
                    </div>
                  </div>

                  {/* === MOBILE OVERLAY === */}
                  <div className='pointer-events-none absolute inset-0 block md:hidden'>
                    {/* Headline — top */}
                    <div className='absolute left-0 top-4 w-full px-4 text-center'>
                      <p className='text-xl font-bold leading-tight text-gray-900'>
                        Every{' '}
                        <span className='rounded bg-gg-500 px-1.5 py-0.5 text-white'>
                          Parenthood
                        </span>
                        <br />
                        Journey Begins with{' '}
                        <span className='rounded bg-gg-500 px-1.5 py-0.5 text-white'>
                          Hope.
                        </span>
                      </p>
                      <p className='mt-1 text-xl font-bold text-gray-900'>
                        Let Us Walk Beside You
                      </p>
                    </div>
                    {/* Cloud + offer — middle */}
                    <div className='absolute left-1/2 top-[32%] w-[85%] -translate-x-1/2'>
                      <div className='relative'>
                        <Image
                          src='/images/Cloud.png'
                          width={300}
                          height={200}
                          alt=''
                          aria-hidden='true'
                          className='w-full'
                        />
                        <div className='absolute left-0 right-0 top-[40%] flex justify-center gap-2 px-3'>
                          <div className='text-center leading-tight text-gray-900'>
                            <p className='text-base font-extrabold'>FREE*</p>
                            <p className='text-[10px] font-bold'>
                              1st Fertility Expert Consultation
                            </p>
                            <p className='text-[10px] font-bold'>
                              Baseline Fertility (TVUS) Scan
                            </p>
                          </div>
                          <div className='h-10 w-px bg-gray-500' />
                          <div className='text-center leading-tight text-gray-900'>
                            <p className='text-base font-extrabold'>50% OFF*</p>
                            <p className='text-[10px] font-bold'>
                              on 24-Fertility Tests
                            </p>
                            <p className='text-[9px]'>
                              Valid until July 31, 2026
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Bottom strip */}
                    <div className='absolute bottom-0 left-0 flex w-full'>
                      <div className='flex flex-1 items-center gap-1 bg-gg-500 px-3 py-2.5 text-sm font-bold text-white'>
                        <Phone size={14} className='inline-block' /> 9108 9108
                        32
                      </div>
                      <div className='flex items-center bg-yellow-400 px-4 py-2.5 text-xs font-extrabold text-gray-900'>
                        BOOK FREE Consultation
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No banners available</div>
            )}
          </Carousel>
        </div>
        {isClient ? (
          <div
            className='flex min-h-fit justify-center bg-[#005e7e] md:min-h-[500px]'
            id='leadForm'
          >
            <div className='flex h-full w-full items-center justify-center'>
              <FormComponent
                variant='banner'
                title='Book Free Fertility Consultation Today'
                submitLabel='Get a Call Back'
              />
            </div>
          </div>
        ) : (
          ''
        )}
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

const bannerData = [
  {
    id: '4',
    alt: 'GarbhaGudi IVF — Every Parenthood Journey Begins with Hope. Free 1st Fertility Expert Consultation and Baseline Fertility (TVUS) Scan. 50% off on 24 Fertility Tests. Valid until July 31, 2026. Call 9108 9108 32.',
    image: {
      desktop: '/images/Jun Month Landing page C--02.jpg',
      mobile: '/images/Jun Month Landing page C--01.jpg',
    },
  },
];
