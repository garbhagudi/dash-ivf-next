import React from 'react';

const RelatedSearches = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <h2 className='py-8 text-center font-heading text-4xl font-bold lg:py-14'>
        Related Searches
      </h2>
      <ul className='flex flex-wrap items-center justify-center gap-2 text-center'>
        {list?.map((item) => (
          <li
            key={item?.id}
            className='cursor-default rounded-lg bg-brandPurple px-3 py-1.5 text-white hover:bg-brandPurpleDark'
          >
            {item?.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedSearches;

const list = [
  {
    id: 1,
    item: 'Fertility Hospital in Bangalore',
  },
  {
    id: 2,
    item: 'Fertility Doctor in Bangalore',
  },
  {
    id: 3,
    item: 'Infertility Treatment in Bangalore',
  },
  {
    id: 4,
    item: 'Fertility Clinic in Bangalore',
  },
  {
    id: 5,
    item: 'IVF Treatment in Bangalore',
  },
  {
    id: 6,
    item: 'Low Cost IVF Treatment in Bangalore',
  },
];
