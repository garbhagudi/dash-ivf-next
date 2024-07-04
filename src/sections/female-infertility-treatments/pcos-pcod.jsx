import React from 'react';

const PcodPcos = () => {
  return (
    <div className='scroll-m-28 overflow-hidden bg-white' id='pcod-pcos'>
      <div className='relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block' />
        <div className='mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
          <div>
            <h2 className='scroll-m-28 text-base font-semibold uppercase tracking-wide text-indigo-600'>
              Female Infertility
            </h2>
            <h3 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
              PCOD - PCOS
            </h3>
          </div>
        </div>
        <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='relative lg:col-start-2 lg:row-start-1'>
            <svg
              className='absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
              />
            </svg>
            <div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
              <figure>
                <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                  <img
                    className='rounded-lg object-cover object-center shadow-lg'
                    src='https://res.cloudinary.com/garbhagudi/image/upload/v1665994576/garbhagudi-ivf/New%20Website/image-0-compressed_kiox5s.jpg'
                    alt='Whitney leaning against a railing on a downtown street'
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className='mt-8 lg:mt-0'>
            <div className='mx-auto max-w-prose text-base lg:max-w-none'>
              <p className='prose text-gray-500'>
                PCOD or PCOS is a syndrome that affects women&apos;s ovaries,
                the reproductive organs that generate progesterone and oestrogen
                hormones that help regulate the menstrual cycle, as well as
                modest amounts of hormones inhibin, relaxin, and male hormones
                known as androgens.
              </p>
            </div>
            <div className='prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none'>
              <p>
                PCOD affects over 10% of all women worldwide. In comparison to
                PCOD, women with PCOS generate more male hormones than usual.
                This hormonal imbalance leads individuals to miss menstrual
                cycles and makes it difficult for them to conceive. This disease
                might also cause erratic hormonal behavior.
              </p>
              <ul className='mt-2 list-outside list-disc space-y-2'>
                <li>Diabetes</li>
                <li>Infertility</li>
                <li>Acne</li>
                <li>Excessive Hair Growth </li>
              </ul>
              <p className='mt-2'>
                Many women have PCOD/PCOS but are unaware of it. The following
                symptoms impact ovulation and the ovaries:
              </p>
              <ul className='mt-2 list-outside list-disc space-y-2'>
                <li>Cysts in the ovaries</li>
                <li>Male hormone levels have risen.</li>
                <li>Periods that are skipped or irregular</li>
                <li>
                  It&apos;s a rather prevalent condition with no known
                  treatment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcodPcos;
