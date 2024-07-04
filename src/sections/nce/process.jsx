import React from 'react';

const Process = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <h1 className='pb-10 text-center font-heading text-4xl font-bold lg:text-5xl'>
        How to Avail
      </h1>
      <p className='mx-auto max-w-prose px-5 pb-10'>
        The process of financing is simple and easy with the usual turnaround
        time between one to two days. Most of the process is digital and the
        financing organization requires some documentation for their
        verification process.
      </p>
      <section className='text-gray-600'>
        <div className='container mx-auto grid grid-cols-1 px-5 lg:grid-cols-2'>
          <div className='mb-10 w-full overflow-hidden rounded-lg lg:mb-0'>
            <img
              alt='feature'
              className='h-full w-full object-cover object-center'
              src='https://res.cloudinary.com/garbhagudi/image/upload/v1667805635/garbhagudi-ivf/New%20Website/How-to-Avail-min_c54odl.png'
            />
          </div>
          <div className='-mb-10 lg:py-6 lg:pl-12 lg:text-left'>
            {Data.map((items) => (
              <div key={items.id} className='mb-6'>
                <div className='mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 font-heading text-xl text-pink-500'>
                  {items.id}
                </div>
                <div className='flex-grow'>
                  <h2 className='mb-3 font-heading text-lg font-bold text-gray-900'>
                    {items.title}
                  </h2>
                  <div className='text-base leading-relaxed'>
                    {items.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;

const Data = [
  {
    id: '1',
    title: 'Register',
    description: 'Register at GarbhaGudi with the initial nominal fee',
  },
  {
    id: '2',
    title: 'Provide Documentation',
    description: (
      <div>
        Provide personal documents for verification. The usual documents
        requested are:
        <ul className='list-inside list-disc space-y-2'>
          <li>Address and ID proof</li>
          <li>Cancelled Cheque</li>
          <li>Bank statement</li>
          <li>The projected cost of treatment (given by GarbhaGudi)</li>
        </ul>
      </div>
    ),
  },
  {
    id: '3',
    title: 'Approval',
    description:
      'Based on the risk profile and repayment capacity of the applicant, the loan amount is approved. It is disbursed to the hospital directly on the day of the start of the treatment. The EMIs start from the month after the disbursal',
  },
];
