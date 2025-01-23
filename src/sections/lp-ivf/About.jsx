import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='mt-4'>
      <div className='mx-auto max-w-5xl pb-16'>
        <h3 className='text-center font-heading text-3xl font-bold text-gray-800 lg:pb-10 lg:text-4xl dark:text-gray-200'>
          About Us
        </h3>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-5'>
          <div className='col-span-2 mx-auto hidden items-center justify-center rounded-lg md:flex'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg'
              alt='logo'
              width={500}
              height={500}
              className='animate-shine h-56 w-56 rounded-xl bg-gradient-to-br from-brandPurple via-white to-brandPink4 bg-[length:400%] p-3 shadow-2xl drop-shadow-2xl'
            />
          </div>
          <div className='font-content col-span-3 mt-6 flex flex-col items-center justify-center px-6 text-gray-800 md:mt-0 dark:text-gray-200'>
            <div>
              Spanning over a decade, GarbhaGudi has served as a beacon of hope
              to thousands of infertile couples. Our experienced and dedicated
              specialists, nurses, and embryologists work to cater for your
              needs and respond to them quickly, professionally and warmly.
            </div>
            <div className='pt-3'>
              GarbhaGudi IVF Hospital in Bangalore was founded in 2011, our
              pioneering work has led to the progression and implementation of
              the latest medical technologies and methods to overcome female and
              male infertility. Our centre has been helping couples from every
              corner of the world, to fulfil their ardent desire to have a baby.
              It is our sincere wish that you will be our next success story.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
