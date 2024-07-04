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
      <div className='fixed bottom-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-brandPink3 transition-opacity duration-500 ease-linear md:h-14 md:w-14'>
        <Link href='tel:+919108910832'>
          <HiPhone className='h-6 w-6 text-white md:h-8 md:w-8 md:p-0.5' />
        </Link>
      </div>
    </>
  );
};

export default FloatPhone;
