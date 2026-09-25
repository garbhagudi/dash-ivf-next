import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = () => {
  return (
    <Link
      href='https://wa.me/919108910832?text=Hi'
      target='_blank'
      rel='noreferrer'
      className='fixed bottom-5 left-3 z-40 flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_4px_16px_rgba(0,0,0,0.14)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)]'
    >
      <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]'>
        <FaWhatsapp className='h-5 w-5 text-white' />
      </span>
      <span className='flex flex-col text-center leading-tight text-black'>
        <span className='font-semibold'>Free</span>
        <span className='font-semibold'>Consult</span>
      </span>
    </Link>
  );
};

export default FloatWhatsApp;
