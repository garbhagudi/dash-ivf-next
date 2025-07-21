import Image from 'next/image';

import { Link } from 'react-scroll';
import bannerImage from 'assets/images/banner.webp';
import FormComponent from 'components/formComp';
import Popup from 'components/Popup';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 bg-[#005e7e] lg:grid-cols-5 xl:grid-cols-4'>
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
          className='flex items-center justify-center text-center font-semibold lg:col-span-2 lg:text-left xl:col-span-1'
          id='leadForm'
        >
          <div className='flex items-center justify-center'>
            <FormComponent title={'Book your Appointment'} isTag={false} />
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
          <Popup
            title={'Book an Appointment'}
            btnClassName='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
