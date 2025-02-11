import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = ({ condition }) => {
  return (
    <div
      className={`fixed ${condition ? 'bottom-24' : 'bottom-2'} right-3 flex cursor-pointer items-center justify-center rounded-full bg-green-600 px-2 py-2 font-bold text-white transition-opacity duration-500 ease-linear`}
    >
      <Link href='https://wa.me/918951813344'>
        <FaWhatsapp className='h-10 w-10 text-white md:h-11 md:w-11' />
      </Link>
    </div>
  );
};

export default FloatWhatsApp;
