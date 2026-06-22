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
                    <div className='absolute right-0 top-4 flex w-[50%] flex-col gap-1.5 text-xl font-bold leading-tight text-gray-900 xl:top-8 xl:text-3xl 2xl:top-12 2xl:text-4xl'>
                      <p className='2xl:py-0.5'>
                        Every{' '}
                        <span className='rounded bg-gg-500 px-1.5 text-white'>
                          Parenthood
                        </span>
                      </p>
                      <p className='2xl:py-0.5'>
                        Journey Begins with{' '}
                        <span className='rounded bg-gg-500 px-1.5 text-white'>
                          Hope.
                        </span>
                      </p>
                      <p className='font-bold text-gray-900 xl:py-0.5 2xl:py-0.5'>
                        Let Us Walk Beside{' '}
                        <span className='rounded bg-gg-500 px-1.5 text-white'>
                          You
                        </span>
                      </p>
                    </div>
                    <div className='absolute left-[45%] top-[25%] w-[50%] px-4 xl:left-1/2 xl:w-[42%]'>
                      <div className='relative'>
                        <Image
                          src='/images/Cloud.png'
                          width={300}
                          height={250}
                          alt=''
                          aria-hidden='true'
                          className='w-full'
                        />
                        <div className='absolute left-10 right-0 top-[37%] flex justify-center gap-1 px-5 lg:left-9 2xl:left-20'>
                          <div className='text-start font-bold leading-none text-black'>
                            <p className='text-3xl font-black 2xl:text-5xl'>
                              FREE*
                            </p>
                            <div className='-mt-2'>
                              <p className='text-xs font-bold'>
                                1st Fertility Expert
                              </p>
                              <p className='-mt-1 text-xs font-bold'>
                                Consultation
                              </p>
                            </div>
                            <div className='-mt-1'>
                              <p className='text-xs font-bold'>
                                Baseline Fertility
                              </p>
                              <p className='-mt-1 text-sm font-bold'>
                                (TVUS) Scan
                              </p>
                            </div>
                          </div>
                          <div className='w-[2px] bg-gg-500 xl:h-24 2xl:h-36' />
                          <div className='flex justify-start text-left leading-none'>
                            <div className='self-start text-center leading-none text-gray-900'>
                              <div className='text-xl font-black leading-none xl:text-3xl 2xl:text-5xl'>
                                <p>50%</p>
                                <p className='xl:-mt-2'>OFF*</p>
                              </div>
                              <div className='text-left text-xs font-bold leading-none xl:-mt-1'>
                                <p>on 24-</p>
                                <p>Fertility</p>
                                <p>Tests</p>
                              </div>
                            </div>
                            <div className='xl-mt-0 mt-4 flex flex-col justify-center text-[10px] leading-none tracking-tighter xl:ml-2 xl:text-sm'>
                              <p>Valid until</p>
                              <p>July 31,</p>
                              <p>2026</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='absolute bottom-8 left-0 flex w-1/2 xl:bottom-12'>
                      <div className='from-80% to-100% flex flex-1 items-center gap-2 bg-gradient-to-r from-gg-700 to-transparent px-6 text-3xl font-bold text-white xl:text-5xl'>
                        <Phone size={16} className='inline-block' /> 9108 9108
                        32
                      </div>
                    </div>
                  </div>

                  {/* === MOBILE OVERLAY === */}
                  <div className='pointer-events-none absolute inset-0 block md:hidden'>
                    <div className='absolute left-4 top-4 w-full px-4 text-left leading-none'>
                      <p className='text-xl font-bold leading-tight text-gray-900 max-[375px]:text-base'>
                        Every{' '}
                        <span className='rounded bg-gg-500 px-1.5 text-white'>
                          Parenthood
                        </span>
                        <br />
                        Journey Begins with{' '}
                        <span className='rounded bg-gg-500 px-1.5 text-white'>
                          Hope.
                        </span>
                      </p>
                      <p className='text-xl font-bold text-gray-900 max-[375px]:text-base'>
                        Let Us Walk Beside You
                      </p>
                    </div>
                    <div className='absolute left-[32%] top-[12%] w-[65%]'>
                      <div className='relative'>
                        <Image
                          src='/images/Cloud.png'
                          width={300}
                          height={200}
                          alt=''
                          aria-hidden='true'
                          className='w-full'
                        />
                        <div className='absolute left-6 right-0 top-[35%] flex justify-center'>
                          <div className='text-left !leading-none text-gray-900'>
                            <p className='text-2xl font-extrabold max-[375px]:text-xl'>
                              FREE*
                            </p>
                            <div className='-mt-1 text-[10px] font-bold max-[375px]:text-[8px]'>
                              <p>1st Fertility Expert</p>
                              <p>Consultation</p>
                              <p>Baseline Fertility</p>
                              <p>(TVUS) Scan</p>
                            </div>
                          </div>
                          <div className='mx-1 w-px rounded-full bg-gg-500' />
                          <div className='flex text-left !leading-none text-gray-900'>
                            <div className='self-start text-center leading-none'>
                              <div className='text-2xl font-extrabold !leading-none max-[375px]:text-xl'>
                                <p>50%</p>
                                <p>OFF*</p>
                              </div>
                              <div className='text-left text-[10px] font-bold max-[375px]:text-[8px]'>
                                <p>on 24-</p>
                                <p>Fertility</p>
                                <p>Tests</p>
                              </div>
                            </div>
                            <div className='mt-4 flex flex-col justify-center text-[10px] leading-none tracking-tighter max-[375px]:text-[8px]'>
                              <p>Valid until</p>
                              <p>July 31,</p>
                              <p>2026</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='absolute bottom-8 left-0 flex w-3/4'>
                      <div className='from-80% to-100% flex flex-1 items-center gap-2 bg-gradient-to-r from-gg-700 to-transparent px-6 text-2xl font-bold text-white'>
                        <Phone size={14} className='inline-block' /> 9108 9108
                        32
                      </div>
                    </div>
                  </div>
                  <div className='absolute bottom-4 right-4 flex w-[120px] max-[425px]:w-[100px] sm:right-8 lg:bottom-8'>
                    <div className='relative'>
                      <Image
                        src='/images/bookConsultation.png'
                        width={300}
                        height={200}
                        alt=''
                        aria-hidden='true'
                        className='w-full'
                      />
                      <div className='-lg:mt-1 absolute top-1/2 -mt-1.5 max-[425px]:left-2 sm:left-2'>
                        <div className='font-bold !leading-none text-black'>
                          <p className='md:te3xt text-[8px] !leading-none sm:text-[10px]'>
                            Book
                          </p>
                          <p className='-mt-0.5text-lg !leading-none sm:text-lg'>
                            FREE
                          </p>
                          <p className='-mt-0.5 text-[8px] !leading-none sm:text-[10px]'>
                            Consultation
                          </p>
                        </div>
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
