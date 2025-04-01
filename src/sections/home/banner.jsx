import Image from 'next/image';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Popup = dynamic(() => import('components/Popup'), { ssr: false });
const FormComponent = dynamic(() => import('components/formComp'), {
  ssr: false,
});

const Banner = () => {
  return (
    <div>
      <Head>
        {/* Preload critical image */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1741775546/15th_year_anniversary_Landing_page-01_g71qgd.webp'
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

      <div className='grid grid-cols-1 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='md:order-0 order-1'>
          <div className='items-left flex h-full flex-col justify-center bg-cover bg-no-repeat py-16 text-center lg:py-0'>
            <div className='px-2 pb-4 text-center text-2xl font-extrabold'>
              <h1 className='uppercase text-[#e92e64]'>
                Leading IVF & Fertility Clinic in Bangalore: Expert Care &
                Advanced Treatments
              </h1>
            </div>
            <div className='flex flex-col items-center px-4 py-2 pb-4 text-center text-xl font-normal'>
              <div>
                Offer of the Month: <br />
                15th Anniversary Special: <br />
                <strong className='text-brandPurpleDark'>
                  ₹1,00,000 off on IVF Treatment
                </strong>
              </div>
              <p className='mt-2'>Offer Validity: 30th April 2025</p>
            </div>
            <Popup
              title={'Book Free Consultation'}
              btnClassName='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
            />
          </div>
          <div className='mt-3 hidden text-xs font-medium lg:block'>
            *terms and conditions apply
          </div>
        </div>

        <div className='order-0 flex items-end justify-center overflow-hidden md:order-1'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1741775546/15th_year_anniversary_Landing_page-01_g71qgd.webp'
            width={490}
            height={360}
            alt='Start IVF from as low as 90K'
            quality={90}
            priority='true'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>

        <div className='order-2 bg-[#005e7e]' id='leadForm'>
          <div className='flex items-center justify-center'>
            <FormComponent title='Book Your Appointment' isTag={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
