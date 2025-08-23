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
          <strong>Best IVF centre in Bangalore</strong>
          <p className='text-justify text-sm text-gray-600'>
            GarbhaGudi IVF Centre has been awarded as the{' '}
            <strong>Best IVF centre in Bangalore</strong> by multiple
            organizations and trusted by thousands of couples. GarbhaGudi is
            your trusted partner in the journey to parenthood. We provide
            advanced fertility treatments at an affordable price, making your
            dreams of having a baby come true. Our transparent{' '}
            <strong>IVF cost in Bangalore</strong> and personalized care plans
            ensure you get the best treatment without hidden expenses. If you’re
            searching for a reliable fertility centre close to you or a leading
            IVF centre in your area, GarbhaGudi stands out with high success
            rates, compassionate doctors, and world-class facilities. Begin your
            journey today with GarbhaGudi – where hope meets happiness.
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
