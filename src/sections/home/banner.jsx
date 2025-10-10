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
        {/* Preload Fonts */}
        <link
          rel='preload'
          href='/path-to-font.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>

      <div className='relative grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='relative col-span-2 h-fit'>
          <Carousel
            autoplay
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
                className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
              >
                <HiChevronLeft className='mr-1' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
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
                    priority={index === 0}
                    fetchPriority='high'
                    sizes='(max-width: 1200px) 66vw, 900px'
                    className='hidden h-full w-full object-cover md:block'
                  />
                  <Image
                    src={`${banner.image.url2.replace('/upload/', '/upload/f_auto,q_auto,w_412,h_535,c_fill/')}`}
                    width={412}
                    height={535}
                    alt={banner.title}
                    priority={index === 0}
                    fetchPriority='high'
                    sizes='(max-width: 768px) 100vw'
                    className='h-[65vh] w-full object-fill md:hidden'
                  />
                </Link>
              ))
            ) : (
              <div>No banners available</div>
            )}
          </Carousel>
          <div className='absolute -bottom-6 flex w-full justify-center p-1 font-semibold text-white md:hidden'>
            <h1 className='w-full rounded-md bg-gg-500 p-1 text-center text-[13px] shadow-sm'>
              Best IVF & Fertility Clinic - Affordable IVF Treatment
            </h1>
          </div>
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
        <div className='absolute -bottom-5 hidden w-full justify-center px-5 font-semibold text-white md:flex'>
          <h1 className='w-full rounded-md bg-gg-500 p-2 text-center text-base shadow-sm'>
            Best IVF & Fertility Clinic - Affordable IVF Treatment
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

const bannerData = [
  {
    url: 'https://www.garbhagudi.com/',
    id: '1',
    title: 'Web_Banner_1',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1760101158/1-02_yyxrvi.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1760101172/1-01_c6w9x7.webp',
    },
  },
  {
    url: 'https://www.garbhagudi.com/locations/davanagere',
    id: '2',
    title: 'Web_Banner_2',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1755337721/Davangere_Branch_Ad_-_V3-04_asftjb.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1755337723/Davangere_Branch_Ad_-_V3-02_mdkbrc.webp',
    },
  },
  {
    url: 'https://www.garbhagudi.com/locations/hosur',
    id: '3',
    title: 'Web_Banner_3',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1759466308/Hosur_Ad_English_-_2-03-1_jokqsq.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1759466290/Hosur_Ad_English_-_2-02-1_kl2e6t.webp',
    },
  },
];
