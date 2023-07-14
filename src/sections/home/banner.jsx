import MyModal from 'components/modal';
import Image from 'next/image';
import Form from 'components/form';

const Banner = () => {
  return (
    <div>
      <div className='lg:relative flex flex-col lg:flex-row justify-center bg-brandPurpleDark'>
        <div className=''>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudi/image/upload/v1689336861/Web_Banner_Artboard_copy_4-min_3_f8nsqn.webp'
            }
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='w-full h-96 md:h-auto object-cover object-center lg:object-contain'
            priority={true}
          />
        </div>
        <div className='lg:absolute lg:right-0 lg:flex lg:items-center p-0 lg:h-full lg:mr-5'>
          <Form />
        </div>
      </div>
      <div className='max-w-7xl mx-auto mt-3 sm:mt-10 '>
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
