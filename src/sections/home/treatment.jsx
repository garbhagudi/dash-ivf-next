import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TreatmentOptions = ({ branch }) => {
  return (
    <div className='container mx-auto'>
      <h2 className='px-2 pb-16 text-center font-heading text-2xl font-bold lg:pb-20 lg:text-3xl'>
        Infertility Treatment Options at {branch}
      </h2>
      <div className='grid grid-cols-2 gap-x-3 gap-y-16 px-2 pb-10 lg:grid-cols-4 lg:gap-16 lg:pb-16'>
        {Data?.map((items) => (
          <div
            key={items?.id}
            className='flex flex-col items-center justify-between rounded-2xl border border-brandPink4 transition-all duration-300 hover:-translate-y-2 hover:bg-pink-50 hover:shadow-2xl'
          >
            <div className='mx-auto -mt-10 flex items-center justify-center rounded-full md:-mt-12 md:h-24 md:w-24'>
              <Image
                src={items?.image}
                alt={items?.treatent}
                width={80}
                height={80}
                className='w-20'
                loading='lazy'
                quality={10}
              />
            </div>
            <div className='flex flex-col items-center justify-center py-2'>
              <div className='pb-2 text-center font-heading text-base font-bold md:text-xl'>
                {items?.treatent}
              </div>
              <div className='px-3 text-center text-sm md:text-base'>
                {items?.desc}
              </div>
            </div>
            <div className='w-full rounded-b-2xl border bg-brandPink4 py-1 text-center'>
              <Link href={items?.link} className='font-bold text-white'>
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentOptions;

const Data = [
  {
    id: 1,
    treatent: 'IVF Treatment',
    desc: "Unlock the doors of parenthood with GarbhaGudi's advanced IVF treatment options and give your dreams of starting a family a new lease of life.",
    link: '/contact.html',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/ivf_jwjqwf.webp',
  },
  {
    id: 2,
    treatent: 'ICSI',
    desc: "Take the first step towards parenthood with GarbhaGudi's state-of-the-art ICSI treatment, which offers a high success rate for couples struggling with infertility.",
    link: '/contact.html',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/fertilization_o5hpkk.webp',
  },
  {
    id: 3,
    treatent: 'IUI',
    link: '/contact.html',
    desc: "Experience the joy of parenthood with GarbhaGudi's IUI treatment, designed to increase your chances of pregnancy in a natural way.",
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/in-vitro_mujzkz.webp',
  },
  {
    id: 4,
    treatent: 'TESA/PESA',
    desc: "Get the chance to father a child with GarbhaGudi's TESA/PESA treatment, a revolutionary option for men with low sperm count or poor sperm quality.",
    link: '/contact.html',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/research_j8mdnk.webp',
  },
  {
    id: 5,
    treatent: 'Blastocyst Culture',
    desc: 'Maximize your chances with blastocyst culture treatment, which allows embryos to grow for a longer period before transfer, increasing the chances of implantation.',
    link: '/contact.html',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/sperm_utf0oe.webp',
  },
  {
    id: 6,
    treatent: 'Gynecological Treatments',
    desc: "Say goodbye to gynecological problems with GarbhaGudi's comprehensive range of treatments, specially designed to keep you healthy and fertile.",
    link: '/contact.html',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/gynecology_ynvds8.webp',
  },
  {
    id: 7,
    treatent: 'Natural Conception',
    desc: "Start your journey to parenthood with GarbhaGudi's natural conception program, which helps you understand their fertility and increase their chances of conceiving.",
    link: '/contact.html',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/maternity_cee8v2.webp',
  },
  {
    id: 8,
    treatent: 'Semen Analysis / CASA',
    desc: "Get a detailed analysis of your semen and understand your fertility status with GarbhaGudi's advanced Semen Analysis/CASA service.",
    link: '/contact.html',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890580/Misc/ivf%20icons/semen_nqxd6s.webp',
  },
];
