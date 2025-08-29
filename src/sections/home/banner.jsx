import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Link } from 'components/link';

const Carousel = dynamic(() => import('nuka-carousel'), { ssr: false });
const FormComponent = dynamic(() => import('components/formComp'), {
  ssr: true,
});

const Banner = () => {
  const defaultControlsConfig = {
    pagingDotsStyle: { display: 'none' },
  };

  return (
    <div>
      <Head>
        {/* Preload FIRST (LCP) Banner */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/f_auto,q_auto,w_900,h_506,c_fill,g_auto/v1755589783/Desktop_Landing_Page-01_labetv.webp'
          as='image'
        />
      </Head>

      <div className='relative grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        {/* Banner Section */}
        <div className='relative col-span-2 h-fit'>
          <Carousel
            autoplay
            autoplayInterval={3000}
            wrapAround
            dragging
            enableKeyboardControls
            pauseOnHover
            className='border-0 shadow-2xl drop-shadow-2xl'
            defaultControlsConfig={defaultControlsConfig}
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
              bannerData.map((banner, i) => (
                <Link
                  href={banner.url || '#'}
                  target='_blank'
                  rel='noreferrer'
                  key={banner.id}
                >
                  {/* Desktop Banner */}
                  <div className='relative hidden aspect-[16/9] w-full md:block'>
                    <Image
                      src={`${banner.image.url1.replace(
                        '/upload/',
                        '/upload/f_auto,q_auto,w_900,h_506,c_fill,g_auto/',
                      )}`}
                      alt={banner.title}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px'
                      className='object-cover'
                      priority={i === 0} // only first gets priority
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                    />
                  </div>

                  {/* Mobile Banner */}
                  <div className='relative block aspect-[7/6] w-full md:hidden'>
                    <Image
                      src={`${banner.image.url2.replace(
                        '/upload/',
                        '/upload/f_auto,q_auto,w_420,h_360,c_fill,g_auto/',
                      )}`}
                      alt={banner.title}
                      fill
                      sizes='100vw'
                      className='object-cover'
                      priority={i === 0}
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div>No banners available</div>
            )}
          </Carousel>

          {/* Mobile Caption */}
          <div className='absolute -bottom-6 flex w-full justify-center p-1 font-semibold text-white md:hidden'>
            <h1 className='w-full rounded-md bg-gg-500 p-1 text-center text-[13px] shadow-sm'>
              Best IVF & Fertility Clinic - Affordable IVF Treatment
            </h1>
          </div>
        </div>

        {/* Lead Form */}
        <div
          className='flex min-h-[500px] justify-center bg-[#005e7e]'
          id='leadForm'
        >
          <div className='flex h-fit w-full items-center justify-center'>
            <FormComponent title='Book Your Appointment' isTag={false} />
          </div>
        </div>

        {/* Desktop Caption */}
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
    url: '/',
    id: '1',
    title: 'Web_Banner_1',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1755589783/Desktop_Landing_Page-01_labetv.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1745217384/April_Month_Landing_Page_Latest--02_sa0uzt.webp',
    },
  },
  {
    url: '/',
    id: '2',
    title: 'Web_Banner_2',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1755337721/Davangere_Branch_Ad_-_V3-04_asftjb.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1755337723/Davangere_Branch_Ad_-_V3-02_mdkbrc.webp',
    },
  },
];
