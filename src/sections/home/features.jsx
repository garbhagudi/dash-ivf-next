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
    content:
      'GarbhaGudi has one of the highest IVF treatments success rates in the industry.',
    link: '/features/success-rates-of-ivf',
  },
  {
    id: 2,
    name: 'World Class Fertility Care',
    icon: <BsBuildings />,
    content:
      'GarbhaGudi is Proud to have played a key role in bringing more than 15,000+ babies into the world since 2011.',
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
      'At GarbhaGudi we are committed to Treating infertility through the holistic mind-body-soul programs.',
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
    <div className='sm:py-18 relative bg-white py-8' id='features'>
      <div className='mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl'>
        <h2 className='mt-2 text-center font-heading text-2xl font-bold text-brandDark sm:text-3xl'>
          Our Versatile Approach
        </h2>
        <div className='mx-auto max-w-7xl'>
          <div className='py-3 lg:pt-8'>
            <div>
              <div className='pb-2'>
                GarbhaGudi IVF Centre stands as the epitome of excellence,
                making it the{' '}
                <span className='font-bold'>
                  {' '}
                  Best Fertility Hospital in Bangalore
                </span>
                . We take pride in offering a comprehensive range of{' '}
                <span className='font-bold'> Infertility treatments</span> to
                cater to diverse needs, ensuring that every couple receives
                personalized care and attention.
              </div>{' '}
              <div className='pb-2'>
                As a prominent{' '}
                <span className='font-bold'>
                  {' '}
                  Infertility Hospital in Bangalore
                </span>
                , our facility houses state-of-the-art infrastructure and
                cutting-edge technologies. Our dedicated team of fertility
                experts brings together years of experience and expertise to
                provide the highest level of care.
              </div>{' '}
              <div className='pb-2'>
                With a commitment to excellence, compassionate care, and a high
                success rate, GarbhaGudi IVF Centre has rightfully earned its
                reputation as the{' '}
                <span className='font-bold'>
                  {' '}
                  Best Fertility Hospital in Bangalore
                </span>
                . Trust us to accompany you on your journey to parenthood and
                make your dreams of a complete family a reality.
              </div>
            </div>
          </div>
        </div>
        <div className='mt-8'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {features?.map((feature) => (
              <div className='group mx-auto max-w-sm pt-3' key={feature?.id}>
                <div className='shadow-3xl h-full overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl'>
                  <div className='grid h-full grid-cols-6'>
                    <div className='col-span-1 flex h-full items-center justify-center bg-brandPink'>
                      <div className='text-4xl font-bold text-white'>
                        {feature?.icon}
                      </div>
                    </div>
                    <div className='col-span-5 flex flex-col rounded-br-lg rounded-tr-lg border-2 border-brandPink px-2'>
                      <h3 className='mt-3 font-heading text-base font-semibold tracking-tight text-brandDark md:text-lg'>
                        {feature?.name}
                      </h3>
                      <p className='mt-2 pb-3 text-sm md:text-base'>
                        {feature?.content}
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
