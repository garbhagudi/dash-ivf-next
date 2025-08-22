import Image from 'components/image';
import dynamic from 'next/dynamic';

const Features = dynamic(() => import('./features'), { ssr: false });

const OtherServices = () => {
  return (
    <div className='bg-white pb-16 pt-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='mt-2 text-center font-heading text-xl font-bold leading-8 text-gray-700 underline sm:text-2xl'>
            What makes GarbhaGudi IVF Centre special?
          </h2>
        </div>
        <div className='mt-5 flex flex-col gap-1.5 text-center'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1738903030/WebIcon-01_ywi7q3.webp'
            alt='Banner Image'
            width={360}
            height={400}
            className='mx-auto w-full object-contain lg:w-3/5'
            loading='lazy'
          />
          <p className='text-sm text-gray-600'>
            GarbhaGudi IVF Centre has been awarded as the Best IVF & Fertility
            centre in Bangalore by multiple organisations.
          </p>
        </div>
        <Features />
        <div className='mx-auto mt-6 max-w-4xl'>
          <div className='mx-auto max-w-3xl py-6 text-center font-bold md:py-10'>
            <h3 className='mb-4 text-3xl md:text-5xl'>
              Trusted by over{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                15000+ couples{' '}
              </span>
              across the world for over{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                15 Years{' '}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherServices;
