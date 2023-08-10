import React from 'react';

const RelatedSearches = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <h2 className='text-4xl font-bold font-heading text-center py-8 lg:py-14'>
        Related Searches
      </h2>
      <ul className='flex items-center justify-center gap-2 text-center flex-wrap'>
        {list.map((item) => (
          <li
            key={item.id}
            className='px-3 py-1.5 bg-brandPurple hover:bg-brandPurpleDark cursor-default text-white rounded-lg'
          >
            {item.item}
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
