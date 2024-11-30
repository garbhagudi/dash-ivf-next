import Features from './features';

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
        <div className='mx-auto max-w-4xl pb-12'>
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
            <div className='pt-8 text-center text-2xl font-bold uppercase underline'>
              IVF Success Rates
            </div>
          </div>
          <div className='mx-auto max-w-lg'>
            <div className='mt-2'>
              <h4 className='mx-auto mb-5 w-56 rounded-lg border border-brandDark px-3 py-1 text-center text-lg font-bold text-brandDark'>
                Industry Average*
              </h4>
              <div className='h-5 w-full rounded-full bg-brandPurple'>
                <div className='flex h-5 w-[25%] items-center justify-center rounded-l-full bg-brandPurpleDark text-center text-sm font-bold leading-none text-white'>
                  25 - 28%
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <h4 className='mx-auto mb-5 w-56 rounded-lg border border-brandPink px-3 py-1 text-center text-lg font-bold text-brandPink'>
                GarbhaGudi Average*
              </h4>
              <div className='h-5 w-full rounded-full bg-brandPurple'>
                <div className='flex h-5 w-[75%] items-center justify-center rounded-l-full bg-brandPurpleDark text-center text-sm font-extrabold leading-none text-white'>
                  65-73%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtherServices;
