import { useState } from 'react';
import {
  Popover,
  PopoverGroup,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import Image from 'components/image';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { Treatments, Services, Locations, About } from './popover';
import { mobileMenu } from './menuData';
import MyModal from 'components/modal';
import AccordionLayout from './mobileMenuLauout';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Popover className='font-content sticky top-0 z-20 border-b-2 bg-white shadow-xl'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between border-gray-100 py-3 sm:py-5 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <div>
                <span className='sr-only'>logo</span>
                <Image
                  className='h-10 sm:h-14'
                  src='https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/GG_Logo_lwfiec.svg'
                  alt='logo'
                />
              </div>
            </Link>
          </div>

          <div className='flex items-center justify-end md:flex-1 lg:w-0'>
            <div className='hidden md:flex'>
              <MyModal title={'Book Appointment'} />
            </div>
            <Link href='/contact.html'>
              <div className='ml-8 flex items-center justify-end whitespace-nowrap rounded-md border border-transparent bg-brandPink3 px-3 py-1 text-sm font-medium text-white shadow-sm hover:bg-brandPink md:hidden'>
                Book Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Popover>
  );
}
