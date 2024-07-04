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

          <PopoverGroup as='nav' className='hidden space-x-10 lg:flex'>
            <Treatments />
            <Services />
            <Locations />
            <About />
          </PopoverGroup>

          <div className='flex items-center justify-end md:flex-1 lg:w-0'>
            <div className='hidden md:flex'>
              <MyModal title={'Book Appointment'} />
            </div>
            <Link href='/contact.html'>
              <div className='ml-8 flex items-center justify-end whitespace-nowrap rounded-md border border-transparent bg-brandPink3 px-3 py-1 text-sm font-medium text-white shadow-sm hover:bg-brandPink md:hidden'>
                Book Now
              </div>
            </Link>
            <div className='-my-2 -mr-2 ml-2 lg:hidden'>
              <PopoverButton className='flex items-end justify-between rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandPink'>
                <span className='sr-only'>Open menu</span>
                <HiMenu className='h-6 w-6' aria-hidden='true' />
              </PopoverButton>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={'div'}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <PopoverPanel className='absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition duration-500 lg:hidden'>
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-2 pb-2 pt-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <Image
                    className='h-10 w-auto sm:h-12'
                    src='https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/GG_Logo_lwfiec.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='-mr-2 flex items-center justify-center'>
                  <Link href='/contact-us'>
                    <div className='mr-2 whitespace-nowrap rounded-md border border-transparent bg-brandPink3 px-2 py-1 text-xs font-medium text-white shadow-sm hover:bg-brandPink focus:outline-none md:hidden'>
                      Book Now
                    </div>
                  </Link>
                  <PopoverButton className='mr-2 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandPink'>
                    <span className='sr-only'>Close menu</span>
                    <HiX className='h-6 w-6' aria-hidden='true' />
                  </PopoverButton>
                </div>
              </div>
              <div className='mt-6'>
                <div className='w-full'>
                  <AccordionLayout
                    title={'Female Infertility'}
                    key={1}
                    index={1}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  >
                    <div className='flex flex-col'>
                      {mobileMenu.female.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <div className='rounded-xl px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white'>
                            {items.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>

                  <AccordionLayout
                    title={'Male Infertility'}
                    key={2}
                    index={2}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  >
                    <div className='flex flex-col'>
                      {mobileMenu.male.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <div className='rounded-xl px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white'>
                            {items.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>

                  {/* <AccordionLayout
                    title={"Advanced Treatments"}
                    key={3}
                    index={3}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  >
                    <div className="flex flex-col">
                      {mobileMenu.infertility.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <div className="px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white rounded-xl">
                            {items.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout> */}

                  <AccordionLayout
                    title={'Value Added Service'}
                    key={4}
                    index={4}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  >
                    <div className='flex flex-col'>
                      {mobileMenu.valueAdds.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <div className='rounded-xl px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white'>
                            {items.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>

                  <AccordionLayout
                    title={'Locations'}
                    key={5}
                    index={5}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  >
                    <div className='flex flex-col'>
                      {mobileMenu.locations.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <div className='rounded-xl px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white'>
                            {items.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>

                  <AccordionLayout
                    title={'About Us'}
                    key={6}
                    index={6}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  >
                    <div className='flex flex-col'>
                      {mobileMenu.others.map((items) => (
                        <Link href={items.href} key={items.id}>
                          <div className='rounded-xl px-2 py-2 text-sm hover:bg-brandPink4 hover:font-semibold hover:text-white'>
                            {items.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionLayout>
                </div>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
