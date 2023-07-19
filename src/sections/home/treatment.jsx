import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TreatmentOptions = ({ branch }) => {
  return (
    <div className='container mx-auto'>
      <h2 className='pb-16 lg:pb-20 text-2xl lg:text-3xl font-heading text-center font-bold px-2'>
        Infertility Treatment Options at {branch}
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-3 lg:gap-16 pb-10 lg:pb-16 px-2'>
        {Data.map((items) => (
          <div
            key={items?.id}
            className='font-content border border-brandPink4 rounded-2xl flex items-center justify-between flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:bg-pink-50'
          >
            <div className='-mt-10 md:w-24 md:h-24 md:-mt-12 mx-auto flex items-center justify-center rounded-full'>
              <Image
                src={items?.image}
                alt={items?.treatent}
                width={80}
                height={80}
                className='w-20'
                loading='lazy'
              />
            </div>
            <div className='flex flex-col items-center justify-center py-2'>
              <div className='text-base md:text-xl font-heading text-center font-bold pb-2'>
                {items?.treatent}
              </div>
              <div className='px-3 text-sm md:text-base text-center'>
                {items?.desc}
              </div>
            </div>
            <div className=' text-center border w-full bg-brandPink4 py-1 rounded-b-2xl'>
              <Link
                href={items?.link}
                className='font-bold text-white font-content'
              >
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
    treatent: 'Gyanec Treatments',
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
