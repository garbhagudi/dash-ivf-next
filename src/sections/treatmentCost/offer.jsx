import React from 'react';
import Image from 'next/image';
import FormComponent from 'components/formComp';

const Offer = () => {
  return (
    <section className='grid grid-cols-1 px-2.5 pb-5 md:px-5 md:pb-8 lg:grid-cols-2'>
      <div className='md:order-0 order-1 w-full'>
        <Image
          src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1744978945/April_Month_Landing_Page_Latest-02_zle4xm.webp'
          width={720}
          height={360}
          alt='Start IVF from as low as 90K'
          priority='true'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='hidden h-full w-full md:block'
        />
        <Image
          src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1745217384/April_Month_Landing_Page_Latest--02_sa0uzt.webp'
          width={420}
          height={360}
          alt='Start IVF from as low as 90K'
          priority='true'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='h-full w-full md:hidden'
        />

        <div className='mt-3 hidden text-xs font-medium lg:block'>
          *terms and conditions apply
        </div>
      </div>
      <div className='order-2 flex w-full flex-col items-center justify-center p-4'>
        <h2 className='text-center text-xl font-bold text-gg-500 lg:text-3xl'>
          Bengaluru&apos;s Most Trusted Fertility Centre
        </h2>

        <div className='my-6 rounded-lg bg-[#005E7E] pt-10 lg:px-6 lg:pt-4'>
          <h2 className='overflow-hidden rounded-lg text-center text-xl font-bold text-white'>
            Talk To Our Fertility Experts Today
          </h2>
          <FormComponent />
        </div>
      </div>
    </section>
  );
};

export default Offer;
