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
      <div className='fixed bottom-2 left-2 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brandPink3 transition-opacity duration-500 ease-linear md:h-14 md:w-14'>
        <Link href='tel:+919480948005'>
          <HiPhone className='h-10 w-10 text-white md:h-11 md:w-11 md:p-1' />
        </Link>
      </div>
    </>
  );
};

export default FloatPhone;
