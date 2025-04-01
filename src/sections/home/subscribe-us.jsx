import Popup from 'components/Popup';

const CallToAction = () => {
  return (
    <div className='mx-auto max-w-7xl rounded-lg bg-gray-100'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:py-16 lg:text-left'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block'>Ready to start?</span>
          <span className='block text-brandPink'>
            Let us take your dreams forward...
          </span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <Popup
              title={'BOOK AN APPOINTMENT'}
              btnClassName='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
