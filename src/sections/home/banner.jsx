import Image from 'next/image';
import Form from 'components/form';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='order-0 relative'>
          <div className='items-left flex h-full w-full flex-col justify-center bg-cover bg-no-repeat py-16 text-center lg:py-0'>
            <div className='px-2 pb-4 text-center font-heading text-2xl font-extrabold'>
              <h1 className='uppercase text-[#e92e64]'>
                Leading IVF & Fertility clinic in Bangalore: Expert care &
                Advanced treatments
              </h1>
            </div>
            <div className='font-content flex flex-col items-center px-4 py-2 pb-4 text-center text-xl font-normal'>
              <p>
                Offer of the Month:{' '}
                <strong className='text-brandPurpleDark'>
                  Exclusive Package at ₹ 1111
                </strong>
              </p>
              <ul className='mt-2 flex flex-col items-start'>
                <li>1. Free consultation</li>
                <li>2. AFC Scan</li>
                <li>3. Ultrasound Scan</li>
                <li>4. Semen Analysis</li>
              </ul>
              <p className='mt-2'>Offer validity : 31st March 2025</p>
            </div>

            <Link
              href={'tel:+919108910832'}
              className='mx-auto w-fit rounded-lg bg-brandPink px-5 py-1.5 text-base font-bold text-white transition duration-200 ease-in-out hover:bg-brandPurpleDark'
            >
              Call us for Appointment
            </Link>
          </div>
          <div className='font-content -mt-5 hidden text-xs font-medium lg:block'>
            *terms and conditions apply
          </div>
        </div>
        <div className='order-1 flex items-end justify-start overflow-hidden object-cover'>
          <div className='font-content absolute z-10 -mt-5 block rounded-t-md bg-white bg-opacity-50 px-3 py-1 text-xs font-medium lg:hidden'>
            *terms and conditions apply
          </div>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1735634760/01_Jan_25_-_Offer_-_Ads_-_LP_fwbkhw.jpg'
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='object-center'
            priority={true}
            quality={10}
            loading='eager'
          />
        </div>
        <div className='order-2 bg-[#005e7e]' id='leadForm'>
          <div className='flex items-center justify-center'>
            {Form ? <Form /> : <p>Loading...</p>}
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl sm:mt-10'>
        <div className='mx-auto mb-4 max-w-lg bg-gray-300 px-3 py-2 text-center text-base font-semibold sm:rounded-lg md:text-lg'>
          To Book an Appointment call{' '}
          <a
            href='tel:+919108910832'
            className='block text-brandPink sm:inline-block'
          >
            +91 9108 9108 32
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
