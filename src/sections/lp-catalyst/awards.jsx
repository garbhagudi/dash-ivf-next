import React from 'react';
import Image from 'next/image';

function FeaturesBlocks() {
  return (
    <section className='relative'>
      <div className='relative mx-auto mt-10 max-w-7xl px-4 sm:px-6'>
        <div className='py-4 md:py-6'>
          {/* Section header */}
          <div className='mx-auto max-w-3xl pb-12 text-center md:pb-20'>
            <h2 className='h2 mb-4 bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text font-heading text-3xl font-bold uppercase text-transparent'>
              Why we are the Industry Leaders?
            </h2>
            <p className='font-content text-xl text-gray-800'>
              GarbhaGudi has won numerous awards from various organisations for
              its exceptional service and high success rates
            </p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-5'>
            {Data.map((items) => (
              <div
                className='relative flex flex-col items-center rounded-lg bg-white p-3 transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:border-0 hover:shadow-2xl'
                key={items.id}
              >
                <Image
                  src={items.img}
                  alt={items.title}
                  className='rounded-lg'
                  width={500}
                  height={500}
                  loading='lazy'
                />
                <h4 className='mb-1 mt-3 text-center text-xl font-bold leading-snug tracking-tight text-gray-800'>
                  {items.title}
                </h4>
                <p className='text-center text-gray-800'>{items.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;

const Data = [
  {
    id: 1,
    img: 'https://media.graphassets.com/cZCpRhM0Snm4T5prE2EH',
    title: 'Best IVF and Fertility Hospital in India',
    desc: 'National Quality Achievement Awards - 2021',
  },
  {
    id: 2,
    img: 'https://media.graphassets.com/k78093VmTjGWSA2LN5JU',
    title: 'Among Top 10 IVF Centres in India',
    desc: 'Times Health Survey - 2021',
  },
  {
    id: 3,
    img: 'https://media.graphassets.com/eDbmNcAUTOSyWhDpPu2Z',
    title: 'Best IVF Clinic of the Year - South',
    desc: ' National Fertility Awards - Economic Times Health - 2022',
  },
  {
    id: 4,
    img: 'https://media.graphassets.com/luwGzhRUSUKaEwJAQDrQ',
    title: 'Certified Healthy Workplace',
    desc: 'Arogya World - 2022',
  },
  {
    id: 5,
    img: 'https://media.graphassets.com/Q3M7VqroRJmeY8YdfPgJ',
    title: 'ICON of the Year - IVF - Dr Asha S Vijay',
    desc: 'National Fertility Awards - ET HealthWorld - 2023',
  },
];
