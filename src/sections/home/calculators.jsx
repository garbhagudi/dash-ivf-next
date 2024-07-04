import Link from 'next/link';

const data = [
  {
    id: 1,
    path: 'tools/ovulation-calculator',
    title: 'Ovulation Prediction Calculator',
    description: `Menstrual periods are different from woman to woman and month to month. Use this calculator to see when you may be ovulating to help find your most fertile days.`,
  },
  {
    id: 2,
    path: 'tools/fertility-quotient-calculator',
    title: 'Fertility Quotient Calculator',
    description: `Fertility quotient is an indicator of an individual’s capability to reproduce. Use this calculator to check your Fertility Quotient based on the AGE, BMI, AFC and AMH values.`,
  },
];

const Calculators = () => {
  return (
    <div as='section' id='support' className='mx-auto max-w-7xl py-10'>
      <div>
        <div className='grid grid-cols-1 justify-center gap-x-8 gap-y-4 lg:grid-cols-2'>
          {data?.map((item) => (
            <div
              key={item.id}
              className='flex items-start rounded-lg bg-pink-200 p-6 transition duration-500 hover:bg-purple-200'
            >
              <Link href={item.path} target='_blank'>
                <div>
                  <div>
                    <div className='py-4 font-heading text-xl font-bold'>
                      {item?.title}
                    </div>
                  </div>
                  <div className='pb-4 text-base'>{item?.description}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculators;
