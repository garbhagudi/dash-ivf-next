import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Carousel from 'nuka-carousel';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';
const FormComponent = dynamic(() => import('components/formComp'), {
  ssr: true,
});

const Banner = () => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div>
      <Head>
        {/* Preload critical image */}
        <link
          rel='preload'
          href={bannerData[0].image.url2.replace(
            '/upload/',
            '/upload/f_auto,q_auto,w_412,h_535,c_fill/',
          )}
          as='image'
        />
        {/* Preload Fonts */}
        <link
          rel='preload'
          href='/path-to-font.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>

      <div className='grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='relative col-span-2 h-fit'>
          <Carousel
            autoplay={false}
            autoplayInterval={3000}
            className='border-0 shadow-2xl drop-shadow-2xl'
            defaultControlsConfig={defaultControlsConfig}
            wrapAround
            dragging
            enableKeyboardControls
            pauseOnHover
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={previousSlide}
                className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100'
              >
                <HiChevronLeft className='mr-1' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100'
              >
                <HiChevronRight className='ml-1' />
              </button>
            )}
          >
            {bannerData.length > 0 ? (
              bannerData.map((banner, index) => (
                <Link
                  href={banner.url || '#'}
                  target='_blank'
                  rel='noreferrer'
                  key={banner.id}
                >
                  <Image
                    src={`${banner.image.url1}`}
                    alt={banner.title}
                    width={900}
                    height={471}
                    {...(index === 0 ? { priority: true } : {})}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px'
                    className='hidden h-full w-full object-cover md:block'
                  />
                  <Image
                    src={`${banner.image.url2.replace('/upload/', '/upload/f_auto,q_auto,w_412,h_535,c_fill/')}`}
                    width={412}
                    height={535}
                    alt={banner.title}
                    {...(index === 0 ? { priority: true } : {})}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='h-[65vh] w-full object-fill md:hidden'
                  />
                </Link>
              ))
            ) : (
              <div>No banners available</div>
            )}
          </Carousel>
          {/* <div className='absolute -bottom-6 flex w-full justify-center p-1 font-semibold text-white md:hidden'>
            <h1 className='w-full rounded-md bg-gg-500 p-1 text-center text-[13px] shadow-sm'>
              Best IVF & Fertility Clinic - Affordable IVF Treatment
            </h1>
          </div> */}
        </div>
        <div
          className='flex min-h-[500px] justify-center bg-[#005e7e]'
          id='leadForm'
        >
          <div className='flex h-full w-full items-center justify-center'>
            <FormComponent
              title='Book Free Fertility Consultation Today'
              isTag={false}
            />
          </div>
        </div>
      </div>
      <div className='hidden w-full flex-col justify-center rounded-md bg-gg-500 p-2 px-5 font-semibold text-white shadow-sm md:flex'>
        <h1 className='w-full text-center text-base'>
          Best IVF & Fertility Clinic - Affordable IVF Treatment
        </h1>
        <h2 className='my-2 text-center text-base font-semibold text-white sm:text-base md:text-lg'>
          Experience Parenthood with PARIPOORNA Offer — Save ₹1,11,111* on IVF
          Treatments!
        </h2>
        <p className='text-justify text-sm text-gray-100'>
          Parenthood is priceless, and through PARIPOORNA, we aim to make it
          more accessible for every aspiring couple. At GarbhaGudi, we
          understand that the path to parenthood can be filled with emotional
          and financial hurdles.
          <br />
          PARIPOORNAis our way of making this journey a little easier —
          combining compassionate care, advanced fertility treatments, and
          trusted expertise to turn your dream of a baby into reality.
        </p>
      </div>
      <div className='flex w-full flex-col justify-center rounded-md bg-gg-500 p-2 px-5 font-semibold text-white shadow-sm md:hidden'>
        <h1 className='w-full text-center text-base'>
          Best IVF & Fertility Clinic - Affordable IVF Treatment
        </h1>
        <h2 className='my-2 text-center text-base font-semibold text-white sm:text-base md:text-lg'>
          Celebrate the season of parenthood with PARIPOORNA — this Nov & Dec
          2025, get ₹1,11,111 OFF on IVF treatments at GarbhaGudi IVF Centre.
        </h2>
        <p className='text-justify text-sm text-gray-100'>
          Parenthood is priceless. Through PARIPOORNA, GarbhaGudi makes it more
          accessible by easing the emotional and financial journey with
          compassionate care, advanced treatments, and trusted expertise.
        </p>
      </div>
    </div>
  );
};

export default Banner;

const bannerData = [
  {
    url: 'https://www.garbhagudi.com/features/paripoorna',
    id: '3',
    title: 'Web_Banner_3',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1762497773/paripoorna_Landing_Page_Banner-02_qebqpx.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1762504289/paripoorna_Landing_Page_Banner-01_wxgq38.webp',
    },
  },
];
