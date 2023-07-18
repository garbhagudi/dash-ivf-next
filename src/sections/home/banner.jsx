import MyModal from 'components/modal';
import Image from 'next/image';
import Form from 'components/form';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='px-3 order-0 bg-[#e3e3e3]'>
          <div className='flex flex-col items-center justify-center h-full space-y-3 py-16'>
            <div className='font-heading font-bold text-3xl  text-center leading-10'>
              <span className='text-brandPink'>Parenthood:</span> Where every
              little moment becomes a <br />
              <span className='bg-brandPink px-3 pt-1 pb-0.5 text-white rounded-md'>
                Fond Memory
              </span>
            </div>
            <div className='font-content text-center text-lg font-semibold bg-brandPurple text-white px-3 py-1 rounded-lg'>
              15% Discounts on Blood Tests
            </div>
            <div className='text-brandPurpleDark font-semibold text-sm'>
              Offer Valid till July 31st <span className='text-red-500'>*</span>
            </div>
          </div>
          <div className='font-content -mt-5 text-xs font-medium hidden lg:block'>
            *terms and conditions apply
          </div>
        </div>
        <div className='order-1 flex items-end justify-center object-cover overflow-hidden bg-[#e3e3e3]'>
          <div className='absolute font-content -mt-5 text-xs font-medium lg:hidden block bg-white px-3 py-1 bg-opacity-75 rounded-t-md'>
            *terms and conditions apply
          </div>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudiivf/image/upload/v1677492148/Misc/coup-min_g3kq4k.webp'
            }
            width={500}
            height={500}
            alt='Start IVF from as low as 90K'
            className='w-full h-auto object-contain object-center lg:object-contain'
            priority={true}
          />
        </div>
        <div className='order-2 bg-brandPurpleDark'>
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
        <div className='text-center mt-8 sm:mt-0'>
          <MyModal title='Book a Free Appointment' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
