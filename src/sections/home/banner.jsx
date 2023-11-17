import Image from 'next/image';
import Form from 'components/form';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3 bg-[#cad4ea]'>
        <div className='order-0 relative '>
          <div className='flex items-center justify-center w-full h-full flex-col text-center py-16 lg:py-0'>
            <div className='text-4xl lg:text-5xl font-heading font-extrabold text-center pb-4'>
              <div className='text-[#e92e64] uppercase'>Paripoorna</div>
            </div>
            <div className='text-xl font-bold pb-2'>
              It&apos;s the season of JOY of being COMPLETE
            </div>
            <div className='text-xl py-2 font-bold font-heading pb-4'>
              Under Paripoorna, get a flat discount of{' '}
              <span className='text-[#064a63] underline'>₹ 90,000/-</span> on
              IVF treatement program*
            </div>
          </div>
          <div className='font-content -mt-5 text-xs font-medium hidden lg:block'>
            *terms and conditions apply
          </div>
        </div>
        <div className='order-1 flex items-end justify-center object-cover overflow-hidden'>
          <div className='absolute font-content -mt-5 text-xs font-medium lg:hidden block bg-white px-3 py-1 bg-opacity-75 rounded-t-md z-10'>
            *terms and conditions apply
          </div>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudi/image/upload/v1700224143/garbhagudi-ivf/Paripoorna/Web_Banner_New_Artboard_copy_5_or5khw.webp'
            }
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='object-cover object-center w-full h-full'
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
