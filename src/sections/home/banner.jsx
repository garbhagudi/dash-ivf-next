import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const FormComponent = dynamic(() => import('components/formComp'), {
  ssr: true,
});

const Banner = () => {
  return (
    <div>
      <Head>
        {/* Preload critical image */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1744978945/April_Month_Landing_Page_Latest-02_zle4xm.webp'
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

      <div className='relative grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='relative col-span-2'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1744978945/April_Month_Landing_Page_Latest-02_zle4xm.webp'
            width={720}
            height={360}
            alt='Start IVF from as low as 90K'
            priority='true'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='hidden h-full w-full md:block'
          />
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1745217384/April_Month_Landing_Page_Latest--02_sa0uzt.webp'
            width={420}
            height={360}
            alt='Start IVF from as low as 90K'
            priority='true'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='h-full w-full md:hidden'
          />
          <div className='absolute -bottom-6 flex w-full justify-center p-1 font-semibold text-white md:hidden'>
            <h1 className='w-full rounded-md bg-gg-500 p-1 text-center text-[13px] shadow-sm'>
              Best IVF & Fertility Clinic - Affordable IVF Treatment
            </h1>
          </div>
        </div>
        <div className='flex justify-center bg-[#005e7e]' id='leadForm'>
          <div className='flex h-fit w-full items-center justify-center'>
            <FormComponent title='Book Your Appointment' isTag={false} />
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
