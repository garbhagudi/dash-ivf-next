import Image from 'next/image';
import Form from 'components/form';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='order-0 relative bg-[#e1a1b2]'>
          <div className='flex items-center justify-center w-full h-full flex-col text-center py-16 lg:py-0'>
            <div className='text-3xl lg:text-2xl font-content font-extrabold text-center pb-4'>
              Affordable{' '}
              <span className='text-brandPink drop-shadow-xl'>Parenthood</span>{' '}
              IVF Solutions at GarbhaGudi{' '}
            </div>
            <div className='text-3xl lg:text-4xl pb-2 font-bold font-heading'>
              Your path to parenthood Begins at{' '}
              <span className='text-[#e92e64] uppercase'>₹90,000/- </span>{' '}
            </div>
          </div>
          <div className='font-content -mt-5 text-xs font-medium hidden lg:block'>
            *terms and conditions apply
          </div>
        </div>
        <div className='order-1 relative flex items-center w-full h-full justify-center object-cover overflow-hidden bg-[#e1a1b2]'>
          <div className='absolute font-content -mt-5 text-xs font-medium lg:hidden block bottom-0 bg-white px-3 py-1 bg-opacity-75 rounded-t-md z-10'>
            *terms and conditions apply
          </div>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudi/image/upload/v1692426652/misc/top-view-fertility-concept-with-pink-background-min_hitvgh.webp'
            }
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='object-cover object-center -scale-x-100 bg-[#e1a1b2]'
            priority={true}
          />
        </div>
        <div className='order-2 bg-brandPurpleDark' id='leadForm'>
          <div className='flex items-center justify-center'>
            <Form />
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto sm:mt-10 '>
        <div className='text-base md:text-lg text-center mb-4 px-3 py-2 bg-gray-300 max-w-lg font-semibold mx-auto sm:rounded-lg'>
          To Book Appointment call{' '}
          <a
            href='tel:+919108910832'
            className='text-brandPink block sm:inline-block'
          >
            +91 9108 9108 32
          </a>
        </div>
        <div className='mx-auto text-center'>
          <button className='px-3 py-2 text-center mx-auto block sm:inline-block bg-brandPink hover:bg-brandPurpleDark transition duration-200 ease-in-out text-white font-semibold rounded-lg'>
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
