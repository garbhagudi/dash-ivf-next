import { HiPhone } from 'react-icons/hi';
import Link from 'next/link';

const FloatPhone = () => {
  return (
    <>
      <div className='fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#005e7e] transition-opacity duration-500 ease-linear md:h-14 md:w-14'>
        <Link href='tel:+919108910832'>
          <HiPhone className='h-10 w-10 text-white md:h-11 md:w-11 md:p-1' />
        </Link>
      </div>
    </>
  );
};

export default FloatPhone;
