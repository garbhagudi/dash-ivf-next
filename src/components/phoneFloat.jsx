import { HiPhone } from 'react-icons/hi';
import Link from 'next/link';

const FloatPhone = () => {
  return (
    <>
      <div className='fixed bottom-5 left-5 z-50 h-14 w-14 rounded-full bg-[#25D366]'>
        <Link
          href='tel:+919108910832'
          aria-label='Call GarbhaGudi'
          className='flex h-full w-full items-center justify-center'
        >
          <HiPhone className='h-7 w-7 text-white' />
        </Link>
      </div>
    </>
  );
};

export default FloatPhone;
