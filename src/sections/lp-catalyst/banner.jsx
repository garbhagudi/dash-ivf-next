import Image from 'next/image';
import Form from 'sections/lp-catalyst/form';
import { Link } from 'react-scroll';
import bannerImage from 'assets/images/banner.webp';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 bg-purple-100 lg:grid-cols-5 xl:grid-cols-4'>
        <div className='h-full w-full object-cover object-center lg:col-span-3 xl:col-span-3'>
          <Image
            src={bannerImage}
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='h-screen max-h-[30vh] w-full justify-center overflow-hidden object-cover object-center sm:h-full sm:max-h-full'
            loading='lazy'
          />
        </div>
        <div
          className='flex items-center justify-center p-4 text-center font-semibold text-white lg:col-span-2 lg:text-left xl:col-span-1'
          id='leadForm'
        >
          <div className='flex items-center justify-center'>
            <Form />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl sm:mt-10'>
        <div className='mx-auto mb-4 max-w-lg bg-gray-300 px-3 py-2 text-center text-base font-semibold sm:rounded-lg md:text-lg'>
          To Book Appointment call{' '}
          <a
            href='tel:+919480948005'
            className='block text-brandPink sm:inline-block'
          >
            +91 9480 9480 05
          </a>
        </div>
        <div className='mx-auto text-center'>
          <button className='mx-auto block rounded-lg bg-brandPink px-3 py-2 text-center font-semibold text-white transition duration-200 ease-in-out hover:bg-brandPurpleDark sm:inline-block'>
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
            >
              Book an Appointment
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
