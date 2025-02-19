import React from 'react';
import Link from 'next/link';
import { CiPercent, CiMedicalCase, CiBank } from 'react-icons/ci';
import { BsCurrencyRupee } from 'react-icons/bs';
import { GiMeditation } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';

const features = [
  {
    id: 1,
    name: 'High Success Rate',
    icon: <CiPercent />,
    content:
      'GarbhaGudi has one of the highest IVF treatments success rates in the industry.',
    link: '/features/success-rates-of-ivf',
  },
  {
    id: 2,
    name: 'Top Fertility Specialists',
    icon: <CiMedicalCase />,
    content:
      'Team of fertility specialists like gynecologists, embryologists, technicians and staff to help you conceive.',
    link: '/fertility-experts',
  },
  {
    id: 3,
    name: 'Affordable Treatments',
    icon: <BsCurrencyRupee />,
    content:
      'GarbhaGudi offers Affordable Infertility treatment without any compromise on service or quality of medicines or services',
    link: '/features/affordable-treatments',
  },
  {
    id: 4,
    name: 'Financing Options',
    icon: <CiBank />,
    content:
      '0% interest for patients when they cannot manage the finances to meet the cost of procedures.',
    link: '/features/financing-options',
  },
  {
    id: 5,
    name: 'Holistic Approach',
    icon: <GiMeditation />,
    content:
      'At Garbhagudi we are committed to Treating infertility through the holistic mind-body-soul programs.',
    link: '/features/holistic-approach',
  },
  {
    id: 6,
    name: 'Best in Class Facilities',
    icon: <ImLab />,
    content:
      'Our IVF Centers in Bangalore are equipped to handle the most challenging cases with state of the art technology at our disposal',
    link: '/features/best-in-class-facilities',
  },
];

const Features = () => {
  return (
    <div
      className='sm:py-18 relative bg-white py-8 dark:bg-gray-800'
      id='features'
    >
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='mt-2 font-heading text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200'>
          Our Versatile Approach
        </h2>
        <p className='text-md font-content mx-auto mt-5 max-w-prose text-gray-800 dark:text-gray-200'>
          At GarbhaGudi, we understand that fertility treatments can be mentally
          and physically stressful. We are always committed to providing a world
          of options and bringing a new ray of hope to many who are trying to
          conceive. So, you can expect:
        </p>
        <div className='mt-8'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <div className='group mx-auto max-w-sm pt-3' key={feature.id}>
                <div className='shadow-3xl overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl'>
                  <div className='grid grid-cols-6'>
                    <div className='col-span-1 flex h-full items-center justify-center bg-gg-500 dark:bg-gray-600 dark:group-hover:bg-gg-500'>
                      <div className='text-4xl font-bold text-white'>
                        {feature.icon}
                      </div>
                    </div>
                    <div className='col-span-5 flex flex-col rounded-br-lg rounded-tr-lg border-2 border-gg-500 px-2 dark:border-gray-600 dark:group-hover:border-gg-500'>
                      <h3 className='mt-3 font-heading text-base font-semibold tracking-tight text-gray-800 dark:text-gray-200'>
                        {feature.name}
                      </h3>
                      <p className='font-content mt-2 pb-3 text-sm font-normal text-gray-800 antialiased dark:text-gray-200'>
                        {feature.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
