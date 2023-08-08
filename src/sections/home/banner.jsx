import Image from 'next/image';
import Form from 'components/form';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='order-0 col-span-3 lg:col-span-2 bg-red-200'>
          <Image
            src={'https://media.graphassets.com/fXrmukvAR4qUMXe4NFd7'}
            width={500}
            height={500}
            alt='Start IVF from as low as 90K'
            className='w-full h-full object-cover object-center'
            priority={true}
          />
          <div className='font-content -mt-5 text-xs font-medium hidden lg:block'>
            *terms and conditions apply
          </div>
        </div>
        {/* <div className='order-1 flex items-center justify-center object-cover overflow-hidden bg-[#fff]'>
          <div className='absolute font-content -mt-5 text-xs font-medium lg:hidden block bg-white px-3 py-1 bg-opacity-75 rounded-t-md'>
            *terms and conditions apply
          </div>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudi/image/upload/v1691477376/misc/PNG_Images-02_bxdqyu.webp'
            }
            width={350}
            height={350}
            alt='Start IVF from as low as 90K'
            className='w-96 h-auto object-contain object-center lg:object-contain'
            priority={true}
          />
        </div> */}
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
