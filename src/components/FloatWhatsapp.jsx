import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = () => {
  return (
    <Link
      href='https://wa.me/919108910832?text=Hi'
      target='_blank'
      rel='noreferrer'
      aria-label='Chat on WhatsApp'
      className='fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] md:h-14 md:w-14'
    >
      <FaWhatsapp className='h-6 w-6 text-white md:h-7 md:w-7' />
    </Link>
  );
};

export default FloatWhatsApp;
