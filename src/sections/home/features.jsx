import React from 'react';
import Link from 'next/link';
import {
  CiPercent,
  CiMedicalCase,
  CiMedicalClipboard,
  CiBank,
} from 'react-icons/ci';
import { BsBuildings, BsCurrencyRupee, BsQuestionCircle } from 'react-icons/bs';
import { GiMeditation } from 'react-icons/gi';
import { ImLab } from 'react-icons/im';

const features = [
  {
    id: 1,
    name: 'High Success Rate',
    icon: <CiPercent />,
    content:
      'GarbhaGudi has one of the highest IVF treatments success rates in the industry over 65-73 per cent.',
    link: '/features/success-rates-of-ivf',
  },
  {
    id: 2,
    name: 'World Class Fertility Care',
    icon: <BsBuildings />,
    content:
      'GarbhaGudi is Proud to have played a key role in bringing more than 8,500+ babies into the world since 2011.',
    link: '/features/world-class-fertility-care',
  },
  {
    id: 3,
    name: 'Top Fertility Specialists',
    icon: <CiMedicalCase />,
    content:
      'Team of fertility specialists like gynecologists, embryologists, technicians and staff to help you conceive.',
    link: '/fertility-experts',
  },
  {
    id: 4,
    name: 'Affordable Treatments',
    icon: <BsCurrencyRupee />,
    content:
      'GarbhaGudi offers Affordable Infertility treatment without any compromise on service or quality of medicines or services',
    link: '/features/affordable-treatments',
  },
  {
    id: 7,
    name: 'Holistic Approach',
    icon: <GiMeditation />,
    content:
      'At Garbhagudi we are committed to Treating infertility through the holistic mind-body-soul programs.',
    link: '/features/holistic-approach',
  },
  {
    id: 9,
    name: 'Best in Class Facilities',
    icon: <ImLab />,
    content:
      'Our IVF Centers in Bangalore are equipped to handle the most challenging cases with state of the art technology at our disposal',
    link: '/features/best-in-class-facilities',
  },
];

const Features = () => {
  return (
    <div className='relative bg-white py-8 sm:py-18' id='features'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <h2 className='mt-2 text-3xl font-extrabold text-brandDark tracking-tight sm:text-4xl font-heading'>
          Our Versatile Approach
        </h2>
        <p className='mt-5 max-w-prose mx-auto text-md text-brandDark font-content'>
          At GarbhaGudi, we understand that fertility treatments can be mentally
          and physically stressful. We are always committed to providing a world
          of options and bringing a new ray of hope to many who are trying to
          conceive. So, you can expect:
        </p>
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
                      <p className='mt-2 pb-3 text-brandDark antialiased text-sm  font-content font-normal'>
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
