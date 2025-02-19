import React from 'react';
import { CiPercent, CiMedicalCase } from 'react-icons/ci';
import { BsBuildings, BsCurrencyRupee } from 'react-icons/bs';
import { GiMeditation } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';

const features = [
  {
    id: 1,
    name: 'High Success Rate',
    icon: <CiPercent />,
    content: 'Experience a High success rate with GarbhaGudi.',
    link: '/features/success-rates-of-ivf',
  },
  {
    id: 2,
    name: 'World Class Fertility Care',
    icon: <BsBuildings />,
    content: 'Over 10000+ babies born with our care since 2011.',
    link: '/features/world-class-fertility-care',
  },
  {
    id: 3,
    name: 'Top Fertility Specialists',
    icon: <CiMedicalCase />,
    content:
      'Expert gynecologists, embryologists, and staff to help you conceive.',
    link: '/fertility-experts',
  },
  {
    id: 4,
    name: 'Affordable Treatments',
    icon: <BsCurrencyRupee />,
    content: 'Quality infertility treatment at affordable rates.',
    link: '/features/affordable-treatments',
  },
  {
    id: 7,
    name: 'Holistic Approach',
    icon: <GiMeditation />,
    content: 'We treat infertility holistically, mind-body-soul programs.',
    link: '/features/holistic-approach',
  },
  {
    id: 9,
    name: 'Best in Class Facilities',
    icon: <ImLab />,
    content: 'State-of-the-art technology for challenging cases in Bangalore.',
    link: '/features/best-in-class-facilities',
  },
];

const Features = () => {
  return (
    <div className='relative py-8'>
      <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='mt-2 text-center font-heading text-3xl font-extrabold tracking-tight text-brandDark sm:text-4xl'>
          How We Adapt to Your Needs
        </h2>
        <div className='mt-8'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <div className='group mx-auto max-w-sm pt-3' key={feature.id}>
                <div className='shadow-3xl overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl'>
                  <div className='grid grid-cols-6'>
                    <div className='col-span-1 flex h-full items-center justify-center bg-brandPink'>
                      <div className='text-4xl font-bold text-white'>
                        {feature.icon}
                      </div>
                    </div>
                    <div className='col-span-5 flex flex-col rounded-br-lg rounded-tr-lg border-2 border-brandPink px-2'>
                      <h3 className='mt-3 font-heading text-base font-semibold tracking-tight text-brandDark'>
                        {feature.name}
                      </h3>
                      <p className='font-content mt-2 pb-3 text-sm font-medium text-brandDark antialiased'>
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
