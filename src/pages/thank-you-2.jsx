import React from 'react';
import Link from 'next/link';

const ThankYou = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='text-2xl text-center'>
        Thank you for contacting us. We will get back to you soon.
      </div>
      <Link
        href='/'
        className='text-xl mt-6 px-2 py-3 border-2 border-brandPink hover:bg-brandPink hover:text-white transition-all duration-200 ease-in-out rounded-lg'
      >
        Go Back
      </Link>
    </div>
  );
};

export default ThankYou;
