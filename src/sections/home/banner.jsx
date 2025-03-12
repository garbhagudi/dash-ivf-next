import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import FormComponent from 'components/formComp';

const Banner = () => {
  return (
    <div>
      <Head>
        {/* Preload critical image */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1738910110/Website_Landing_page-01_zwlyd7.png'
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

      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='order-0'>
          <div className='items-left flex h-full flex-col justify-center bg-cover bg-no-repeat py-16 text-center lg:py-0'>
            <div className='px-2 pb-4 text-center font-heading text-2xl font-extrabold'>
              <h1 className='uppercase text-[#e92e64]'>
                Leading IVF & Fertility Clinic in Bangalore: Expert Care &
                Advanced Treatments
              </h1>
            </div>
            <div className='font-content flex flex-col items-center px-4 py-2 pb-4 text-center text-xl font-normal'>
              <p>
                Offer of the Month:{' '}
                <strong className='text-brandPurpleDark'>
                  Free Fertility Screening
                </strong>
              </p>
              <ul className='mt-2 flex flex-col items-start space-y-1'>
                <li>1. Free Consultation</li>
                <li>2. Baseline Scan</li>
                <li>3. Semen Analysis</li>
              </ul>
              <p className='mt-2'>Offer Validity: 31st March 2025</p>
            </div>
            <Link
              href='tel:+919480948005'
              className='mx-auto w-fit rounded-lg bg-brandPink px-5 py-1.5 text-base font-bold text-white transition duration-200 ease-in-out hover:bg-brandPurpleDark'
            >
              Call us for Appointment
            </Link>
          </div>
          <div className='font-content mt-3 hidden text-xs font-medium lg:block'>
            *terms and conditions apply
          </div>
        </div>

        <div className='order-1 flex items-end justify-center overflow-hidden'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1740748730/PHOTO-2025-02-28-15-58-41_wpwy1e.webp'
            width={800}
            height={450}
            alt='Start IVF from as low as 90K'
            quality={90}
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>

        <div className='order-2 bg-[#005e7e]' id='leadForm'>
          <div className='flex items-center justify-center'>
            <FormComponent title='Book Your Appointment' />
          </div>
        </div>
      </div>

      <div className='max-w-8xl mx-auto sm:mt-10'>
        <div className='mx-auto mb-4 max-w-lg bg-gray-300 px-3 py-2 text-center text-base font-semibold sm:rounded-lg md:text-lg'>
          <div>
            Call{' '}
            <a
              href='tel:+919480948005'
              className='block text-brandPink sm:inline-block'
            >
              +91 9480 9480 05
            </a>
          </div>
          <div> to book your free consultation today!</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
