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
              <div className='uppercase text-[#e92e64]'>
                Trusted by over 10,000+ couples across the world for over 14 years...
              </div>
            </div>
            <div className='font-content px-4 py-2 pb-4 text-xl font-normal'>
              Offer of the Month : Rs.1,00,000 Discount on IVF Treatment Valid upto 31st December 2024
            </div>
            <Link
              href={'#leadForm'}
              className='mx-auto w-full rounded-sm bg-brandPink py-1.5 text-base font-bold text-white transition duration-200 ease-in-out hover:bg-brandPurpleDark md:w-1/2'
            >
              <button>Book an Appointment</button>
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
            src='https://res.cloudinary.com/garbhagudi/image/upload/v1730993605/garbhagudi-ivf/Paripoorna/IVF_Compressed_kmekqi.webp'
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='object-center'
            priority={true}
          />
        </div>
        <div className='order-2 bg-[#005e7e]' id='leadForm'>
          <div className='flex items-center justify-center'>
            <Form />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl sm:mt-10'>
        <div className='mx-auto mb-4 max-w-lg bg-gray-300 px-3 py-2 text-center text-base font-semibold sm:rounded-lg md:text-lg'>
          To Book Appointment call{' '}
          <a
            href='tel:+919108910832'
            className='block text-brandPink sm:inline-block'
          >
            +91 9108 9108 32
          </a>
        </div>
        <div className='mx-auto text-center'>
          <button className='mx-auto block rounded-lg bg-brandPink px-3 py-2 text-center font-semibold text-white transition duration-200 ease-in-out hover:bg-brandPurpleDark sm:inline-block'>
            <Link href='#leadForm' className='scroll-smooth font-sans'>
              Book an Appointment
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
