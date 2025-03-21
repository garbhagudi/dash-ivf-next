import React from 'react';
import Image from 'next/image';
import FormComponent from 'components/formComp';

const Offer = () => {
  return (
    <section className='grid grid-cols-1 px-2.5 pb-5 md:px-5 md:pb-8 lg:grid-cols-3'>
      <div className='md:order-0 order-1'>
        <div className='items-left flex h-full flex-col justify-center bg-cover bg-no-repeat py-5 text-center lg:py-0'>
          <div className='px-2 pb-4 pt-8 text-center font-heading text-2xl font-extrabold'>
            <h1 className='uppercase text-[#e92e64]'>
              IVF Treatment Cost at ₹1,50,000*
            </h1>
          </div>
          <div className='flex flex-col px-4 py-2 pb-4 text-xl font-normal'>
            <div className='text-start'>This base package includes :</div>
            <ul className='mt-2 flex flex-col items-start space-y-1 text-start'>
              <li>1. Ovum Pick-up (OPU)</li>
              <li>2. Embryo Freezing for 1 Year (Up to 2 straws)</li>
              <li>3. Frozen Embryo Transfer (FET)</li>
            </ul>
            <div className='flex justify-end pt-16'>
              <Image
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1742457439/1_Lakh_Offer_mbs1hf.png'
                width={800}
                height={350}
                alt='Start IVF from as low as 90K'
                quality={90}
                priority
                // className='h-60 w-60'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>
        </div>
        <div className='mt-3 hidden text-xs font-medium lg:block'>
          *terms and conditions apply
        </div>
      </div>

      <div className='order-0 flex overflow-hidden md:order-1'>
        <Image
          src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1742454450/Couple--01_is1s40.png'
          width={800}
          height={350}
          alt='Start IVF from as low as 90K'
          quality={90}
          priority
          className='h-full'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
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
