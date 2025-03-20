import React from 'react';
import Image from 'next/image';
import FormComponent from 'components/formComp';

const Offer = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 md:pb-8 md:px-5 pb-5 px-2.5'>
      <div className='order-1 md:order-0'>
        <div className='flex flex-col bg-cover bg-no-repeat h-full justify-center text-center items-left lg:py-0 py-5'>
          <div className='text-2xl text-center font-extrabold font-heading pb-4 pt-8 px-2'>
            <h1 className='text-[#e92e64] uppercase'>
              IVF Treatment Cost at ₹1,50,000*
            </h1>
          </div>
          <div className='flex flex-col text-xl font-content font-normal pb-4 px-4 py-2'>
            <div className='text-start'>This base package includes :</div>
            <ul className='flex flex-col text-start items-start mt-2 space-y-1'>
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
        <div className='text-xs font-content font-medium hidden lg:block mt-3'>
          *terms and conditions apply
        </div>
      </div>

      <div className='flex order-0 md:order-1 overflow-hidden'>
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
      <div className='flex flex-col order-2 justify-center p-4 w-full items-center'>
        <h2 className='text-center text-gg-500 text-xl font-bold font-lexend lg:text-3xl'>
          Bengaluru&apos;s Most Trusted Fertility Centre
        </h2>

        <div className='bg-[#005E7E] rounded-lg lg:pt-4 lg:px-6 my-6 pt-10'>
          <h2 className='rounded-lg text-center text-white text-xl font-bold font-lexend overflow-hidden'>
            Talk To Our Fertility Experts Today
          </h2>
          <FormComponent />
        </div>
      </div>
    </section>
  );
};

export default Offer;
