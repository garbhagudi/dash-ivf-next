import Image from 'next/image';
import Form from 'sections/lp-catalyst/form';
import Link from 'next/link';
import bannerImage from 'assets/images/banner.webp';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-4 bg-purple-100'>
        <div className='lg:col-span-3 xl:col-span-3 w-full h-full object-cover object-center'>
          <Image
            src={bannerImage}
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='w-full h-screen max-h-[66vh] sm:h-full  object-center justify-center object-cover overflow-hidden'
            priority={true}
          />
        </div>
        <div
          className='lg:col-span-2 xl:col-span-1 flex items-center justify-center p-4 text-white font-semibold text-center lg:text-left'
          id='leadForm'
        >
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
