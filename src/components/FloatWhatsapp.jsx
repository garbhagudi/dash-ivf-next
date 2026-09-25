import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = () => {
  return (
    <div className='fixed bottom-5 left-3 flex cursor-pointer items-center justify-center rounded-full bg-green-600 px-2 py-2 font-bold text-white transition-opacity duration-500 ease-linear'>
      <Link href='https://wa.me/919108910832?text=Hi'>
        <FaWhatsapp className='h-10 w-10 text-white md:h-11 md:w-11' />
      </Link>
    </div>
  );
};

export default FloatWhatsApp;
