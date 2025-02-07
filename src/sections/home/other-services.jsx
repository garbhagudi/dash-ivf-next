import dynamic from 'next/dynamic';

const Features = dynamic(() => import('./features'), { ssr: false });

const OtherServices = () => {
  return (
    <div className='bg-white pb-16 pt-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <p className='mt-2 text-center font-heading text-xl font-bold leading-8 text-gray-700 underline sm:text-2xl'>
            What makes GarbhaGudi special?
          </p>
        </div>
        <div className='mt-10 text-center'>
          GarbhaGudi IVF Centre has been awarded as the{' '}
          <h1>Best IVF & Fertility centre in Bangalore</h1> by multiple
          organisations.
        </div>
        <Features />
        <div className='mx-auto mt-6 max-w-4xl'>
          <div className='mx-auto max-w-3xl py-6 text-center font-bold md:py-10'>
            <h2 className='mb-4 text-3xl md:text-5xl'>
              Trusted by over{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                10000+ couples{' '}
              </span>
              across the world for over{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                14 Years{' '}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherServices;
