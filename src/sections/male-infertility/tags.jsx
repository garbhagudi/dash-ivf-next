import React from 'react';
import { HiOutlineTag } from 'react-icons/hi';

const Tags = () => {
  return (
    <div className='mx-auto max-w-5xl py-10'>
      {Data.map((items) => (
        <div
          className='leading-sm ml-4 inline-flex items-center rounded-full bg-green-200 px-3 py-0.5 text-xs font-bold uppercase text-green-700'
          key={items.id}
        >
          <HiOutlineTag className='mr-2' />
          <a>{items.tag}</a>
        </div>
      ))}
    </div>
  );
};

export default Tags;

const Data = [
  {
    id: 1,
    tag: 'Male Infertility',
  },
  {
    id: 2,
    tag: 'Semen analysis',
  },
  {
    id: 3,
    tag: 'Tesa',
  },
  {
    id: 4,
    tag: 'Pesa',
  },
  {
    id: 5,
    tag: 'Varicocele',
  },
  {
    id: 6,
    tag: 'Casa',
  },
  {
    id: 7,
    tag: 'PGS',
  },
  {
    id: 8,
    tag: 'PGD',
  },
  {
    id: 9,
    tag: 'Azoospermia',
  },
  {
    id: 10,
    tag: 'Sperm Donation',
  },
  {
    id: 11,
    tag: 'Cryopreservation',
  },
  {
    id: 12,
    tag: 'Oligoasthenoteratozoospermia',
  },
  // {
  //   id: 14,
  //   tag: "",
  // },
];
