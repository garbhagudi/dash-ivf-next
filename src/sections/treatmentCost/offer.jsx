import React from 'react';
import Image from 'next/image';
import FormComponent from 'components/formComp';

const Offer = () => {
  return (
    <section className='flex flex-wrap'>
      <div className='h-100 mx-auto w-full bg-cover bg-center object-cover md:w-1/2'>
        <Image
          src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1738754618/IVF-Starts-at-150K_1to1_wyv3fv.png'
          alt='Banner Image'
          width={400}
          height={400}
          className='mx-auto h-full w-full object-contain'
          priority
        />
      </div>
      <div className='flex w-full flex-col items-center justify-center p-4 md:w-1/2'>
        <h2 className='font-lexend text-center text-3xl font-bold text-gg-500 lg:text-5xl'>
          Bengaluru&apos;s Most Trusted Fertility Centre
        </h2>

        <div className='my-6 rounded-lg bg-[#005E7E] pt-10 lg:px-6 lg:pt-4'>
          <h2 className='font-lexend overflow-hidden rounded-lg text-center text-xl font-bold text-white'>
            Talk To Our Fertility Experts Today
          </h2>
          <FormComponent />
        </div>
      </div>
    </section>
  );
};

export default Offer;
