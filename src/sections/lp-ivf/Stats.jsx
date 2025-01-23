import React, { useState } from 'react';
import Image from 'next/image';

const Stats = () => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <div className='hidden lg:block'>
      <p className='bg-brandPink5 py-10 text-center font-heading text-4xl font-bold dark:bg-gray-700'>
        This is why you can trust GarbhaGudi for your infertility treatments
      </p>
      <div className='mx-auto mt-4 max-w-lg align-middle md:max-w-4xl'>
        <div className='text-center'>
          <div className='font-content grid grid-cols-4 grid-rows-4'>
            <div>
              <div
                className='mx-auto my-4 -mr-4 -mt-2 flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full'
                onMouseEnter={() => setTooltipStatus(1)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830364/Icons/Why%20GarbhaGudi/11-Years_bvg1gg.webp'
                  alt='11+ years'
                  className='hover:scale-115 transition-all duration-500'
                  width={200}
                  height={200}
                  loading='lazy'
                />

                {tooltipStatus == 1 && (
                  <div className='absolute mt-44 text-sm'>
                    Extensive Exprerience
                  </div>
                )}
              </div>
            </div>

            <div className='col-span-2 row-span-3 flex items-center justify-center rounded-full'>
              <div className='border-gg-500 dark:border-gg-400 absolute -z-50 h-[700px] w-[700px] rounded-full border bg-transparent'></div>
              <div className='animate-spinSlow border-gg-500 dark:border-gg-400 absolute -z-40 h-[450px] w-[450px] rounded-full border-2 border-dashed bg-transparent'></div>
              <div className='flex h-96 w-96 items-center justify-center rounded-full shadow-2xl ring-brandPink4 dark:bg-gray-700'>
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg'
                  alt='garbhagudi logo'
                  className='h-64 w-64 dark:fill-white dark:brightness-0 dark:grayscale dark:invert'
                  width={256}
                  height={256}
                  loading='lazy'
                />
              </div>
            </div>
            <div>
              <div
                className='mx-auto my-4 -ml-4 -mt-2 flex h-[130px] w-[130px] items-center justify-center rounded-full'
                onMouseEnter={() => setTooltipStatus(2)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Holistic-Approach_timeda.webp'
                  alt='Holostic Approach'
                  className='hover:scale-115 transition-all duration-500'
                  width={200}
                  height={200}
                  loading='lazy'
                />
                {tooltipStatus == 2 && (
                  <div className='absolute mt-44 text-sm'>
                    Holistic Approach
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className='mx-auto my-4 mr-14 flex h-[130px] w-[130px] items-center justify-center rounded-full'
                onMouseEnter={() => setTooltipStatus(3)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Humane-Touch_qvniyh.webp'
                  alt='Humane Touch'
                  className='hover:scale-115 transition-all duration-500'
                  width={200}
                  height={200}
                  loading='lazy'
                />
                {tooltipStatus == 3 && (
                  <div className='absolute mt-44 text-sm'>Humane Touch</div>
                )}
              </div>
            </div>
            <div>
              <div
                className='mx-auto my-4 ml-14 flex h-[130px] w-[130px] items-center justify-center rounded-full'
                onMouseEnter={() => setTooltipStatus(4)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830505/Icons/Why%20GarbhaGudi/Successful-Pregnancy_1_xw1hbe.webp'
                  alt='High Success Rate'
                  className='hover:scale-115 transition-all duration-500'
                  width={200}
                  height={200}
                  loading='lazy'
                />
                {tooltipStatus == 4 && (
                  <div className='absolute mt-44 text-sm'>
                    Successful Pregnancies
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className='mx-auto my-4 mr-0 mt-10 flex h-[130px] w-[130px] items-center justify-center rounded-full'
                onMouseEnter={() => setTooltipStatus(5)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Reknowed-Doctor_x52vlx.webp'
                  alt='Top Fertility Specialists'
                  className='hover:scale-115 transition-all duration-500'
                  width={200}
                  height={200}
                  loading='lazy'
                />
                {tooltipStatus == 5 && (
                  <div className='absolute mt-44 text-sm'>
                    Renowned Specialists
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className='mx-auto my-4 ml-0 mt-10 flex h-[130px] w-[130px] items-center justify-center rounded-full'
                onMouseEnter={() => setTooltipStatus(6)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Trasparent-Billing_rbt5lj.webp'
                  alt='Transparent Pricing'
                  className='hover:scale-115 transition-all duration-500'
                  width={200}
                  height={200}
                  loading='lazy'
                />
                {tooltipStatus == 6 && (
                  <div className='absolute mt-44 text-sm'>
                    Transparent Pricing
                  </div>
                )}
              </div>
            </div>
            <div className='w-0'></div>
            <div>
              <div
                className='mx-auto my-4 -mt-2 ml-10 flex h-[130px] w-[130px] items-center justify-center rounded-full'
                onMouseEnter={() => setTooltipStatus(7)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/World-Class-Lab_yerlf1.webp'
                  alt='World Class Labs'
                  className='hover:scale-115 transition-all duration-500'
                  width={200}
                  height={200}
                  loading='lazy'
                />
                {tooltipStatus == 7 && (
                  <div className='absolute mt-44 text-sm'>
                    World-class Labrotories
                  </div>
                )}
              </div>
            </div>
            <div>
              <div
                className='mx-auto my-4 -mt-2 mr-10 flex h-[130px] w-[130px] items-center justify-center rounded-full'
                onMouseEnter={() => setTooltipStatus(8)}
                onMouseLeave={() => setTooltipStatus(0)}
              >
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1660830350/Icons/Why%20GarbhaGudi/Cutting-Edge_qpqb9w.webp'
                  alt='Cutting Edge Technologies'
                  className='hover:scale-115 transition-all duration-500'
                  width={200}
                  height={200}
                  loading='lazy'
                />
                {tooltipStatus == 8 && (
                  <div className='absolute mt-44 text-sm'>
                    Cutting Edge Technologies
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
