import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { HiPhone } from 'react-icons/hi';
import Link from 'next/link';

const FloatPhone = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className='fixed w-10 h-10 md:w-14 md:h-14 bottom-4 left-4 bg-brandPink3 rounded-full flex items-center justify-center transition-opacity duration-500 ease-linear z-50'>
        <Link href='tel:+919108910832'>
          <HiPhone className='w-6 h-6 md:w-8 md:h-8 md:p-0.5 text-white' />
        </Link>
      </div>
    </>
  );
};

export default FloatPhone;
