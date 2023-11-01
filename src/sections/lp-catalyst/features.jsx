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
    content: 'Experience a 65-73% IVF success rate with GarbhaGudi.',
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
      <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <h2 className='mt-2 text-3xl text-center font-extrabold text-brandDark tracking-tight sm:text-4xl font-heading'>
          How We Adapt to Your Needs
        </h2>
        <div className='mt-8'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map((feature) => (
              <div className='pt-3 group max-w-sm mx-auto' key={feature.id}>
                <div className='rounded-lg overflow-hidden shadow-3xl hover:shadow-2xl hover:scale-105 transition-all duration-200'>
                  <div className='grid grid-cols-6 '>
                    <div className='col-span-1 bg-brandPink flex items-center justify-center h-full'>
                      <div className='text-4xl text-white font-bold'>
                        {feature.icon}
                      </div>
                    </div>
                    <div className='flex flex-col col-span-5 px-2 border-2 border-brandPink rounded-tr-lg rounded-br-lg'>
                      <h3 className='mt-3 text-base font-semibold text-brandDark tracking-tight font-heading'>
                        {feature.name}
                      </h3>
                      <p className='mt-2 pb-3 text-brandDark antialiased text-sm  font-content font-medium'>
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
