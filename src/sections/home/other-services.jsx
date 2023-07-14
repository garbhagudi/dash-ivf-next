import Features from './features';

const OtherServices = () => {
  return (
    <div className='pt-8 pb-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <p className='mt-2 text-xl leading-8 font-bold font-heading text-gray-700 underline sm:text-2xl text-center'>
            What makes GarbhaGudi special?
          </p>
        </div>
        <div className='max-w-4xl mx-auto pb-12'>
          <div className='max-w-3xl mx-auto text-center font-bold py-6 md:py-10'>
            <h2 className='text-3xl md:text-5xl mb-4'>
              Trusted by over{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandPurpleDark'>
                11000+ couples{' '}
              </span>
              across the world for over{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandPurpleDark'>
                13 Years{' '}
              </span>
            </h2>
          </div>
          <div className='max-w-lg mx-auto'>
            <div className='mt-2'>
              <h4 className='text-brandDark font-bold text-lg mb-5 text-center px-3 py-1 border border-brandDark rounded-lg w-56 mx-auto'>
                Industry Average
              </h4>
              <div className='w-full rounded-full h-5 bg-brandPurple'>
                <div
                  className='bg-brandPurpleDark text-md text-white h-5 font-bold text-center p-0.5 leading-none rounded-l-full flex items-center justify-center'
                  style={{ width: '25%' }}
                >
                  25 - 28%
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <h4 className='text-brandPink font-bold text-lg mb-5 text-center px-3 py-1 border border-brandPink rounded-lg w-56 mx-auto'>
                GarbhaGudi Average
              </h4>
              <div className='w-full bg-brandPurple rounded-full h-5'>
                <div
                  className='bg-brandPurpleDark text-md text-white h-5 font-bold text-center p-0.5 leading-none rounded-l-full flex items-center justify-center'
                  style={{ width: '75%' }}
                >
                  65-73%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <Features />
        </div>
      </div>
    </div>
  );
};
export default OtherServices;
