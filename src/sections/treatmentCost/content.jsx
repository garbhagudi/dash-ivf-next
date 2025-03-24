import Image from 'next/image';

const Content = () => {
  return (
    <div>
      <h2 className='mx-auto mb-6 mt-16 text-center font-heading text-3xl font-black lg:text-5xl'>
        Why Choose GarbhaGudi for IVF Treatment
      </h2>{' '}
      <Image
        src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1738903030/WebIcon-01_ywi7q3.webp'
        alt='Banner Image'
        width={400}
        height={400}
        className='mx-auto w-full object-contain lg:w-1/2'
        priority='true'
      />
    </div>
  );
};
export default Content;
