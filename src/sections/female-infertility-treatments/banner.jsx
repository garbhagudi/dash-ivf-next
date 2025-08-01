import Image from 'next/image';
import Popup from 'components/Popup';
import FormComponent from 'components/formComp';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='order-0 relative'>
          <div className='items-left flex h-full w-full flex-col justify-center bg-cover bg-no-repeat py-16 text-center lg:py-0'>
            <div className='px-2 pb-4 text-center font-heading text-2xl font-extrabold'>
              <div className='uppercase text-[#e92e64]'>
                Leading IVF & Fertility clinic in Bangalore: Expert care &
                Advanced treatments
              </div>
            </div>
            <div className='px-4 py-2 pb-4 text-xl font-normal'>
              Offer of the Month:
              <div className='block rounded-sm bg-brandPink px-1.5 py-0.5 font-bold text-white'>
                ₹ 55000/- OFF on IVF Treatment
              </div>{' '}
            </div>
            <Popup
              title={'Book an Appointment'}
              btnClassName='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
            />
          </div>
          <div className='-mt-5 hidden text-xs font-medium lg:block'>
            *terms and conditions apply
          </div>
        </div>
        <div className='order-1 flex items-end justify-start overflow-hidden object-cover'>
          <div className='absolute z-10 -mt-5 block rounded-t-md bg-white bg-opacity-50 px-3 py-1 text-xs font-medium lg:hidden'>
            *terms and conditions apply
          </div>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudi/image/upload/v1714582309/Web-V1-min_jx9ivj.webp'
            }
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='h-full object-center'
            loading='lazy'
          />
        </div>
        <div className='order-2 bg-[#005e7e]' id='leadForm'>
          <div className='flex items-center justify-center'>
            <FormComponent
              title={'Consult our Fertility Experts '}
              isTag={false}
            />
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
