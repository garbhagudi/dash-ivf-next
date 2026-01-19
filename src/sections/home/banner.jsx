import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Carousel = dynamic(
  () => import('nuka-carousel').then((m) => m.Carousel),
  {
    ssr: false,
  },
);
import Link from 'next/link';
const FormComponent = dynamic(() => import('components/formComp'), {
  ssr: true,
});

const Banner = () => {
  return (
    <div>
      <Head>
        <link
          rel='preload'
          href={bannerData[0].image.url2.replace(
            '/upload/',
            '/upload/f_auto,q_auto,w_412,h_535,c_fill/',
          )}
          as='image'
        />
        {/* Preload Fonts */}
        {/* <link
          rel='preload'
          href='/path-to-font.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        /> // because we are already using the next/font/google no preload required here */}
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
                <Link
                  href={banner.url || '#'}
                  target='_blank'
                  rel='noreferrer'
                  key={banner.id}
                  className='min-h-full min-w-full'
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
                    className='w-full object-fill md:hidden lg:h-[65vh]'
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
          className='flex min-h-fit justify-center bg-[#005e7e] md:min-h-[500px]'
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
    url: 'https://www.garbhagudi.com/features/paripoorna',
    id: '3',
    title: 'Web_Banner_3',
    image: {
      url1: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1767957948/GG_IVF_WEB_hrcjyg.webp',
      url2: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1767957947/GG_IVF_Mobile_ksbdr7.webp',
    },
  },
];
