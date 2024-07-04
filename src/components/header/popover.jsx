import React from 'react';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import Link from 'next/link';
import { about, locations, services, treatments } from './menuData';
import Image from 'components/image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Treatments = () => {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <PopoverButton
            className={classNames(
              close ? 'text-gray-900' : 'text-brandPink2',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-brandPink2 focus:outline-none',
            )}
          >
            <span>Treatments</span>
            <HiChevronDown
              className={classNames(
                close ? 'text-gray-900' : 'text-brandPink2',
                'ml-2 h-5 w-5 group-hover:text-brandPink2',
              )}
              aria-hidden='true'
            />
          </PopoverButton>
          <Transition
            as={'div'}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-7 w-screen max-w-md -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl xl:max-w-3xl'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <p className='bg-white px-4 pb-2 pt-4 text-xs font-bold text-brandDark underline sm:text-sm'>
                  Female Infertility
                </p>
                <div className='relative grid grid-cols-2 gap-8 bg-white p-3'>
                  {treatments.female.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => close()}
                      className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center text-white sm:h-12 sm:w-12'>
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className='ml-4'>
                        <p className='text-xs font-medium text-gray-900 sm:text-sm'>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <hr />
                <p className='text-md bg-white px-4 py-2 text-xs font-bold text-brandDark underline sm:text-sm'>
                  Male Infertility
                </p>
                <div className='relative grid grid-cols-2 gap-8 bg-white p-3'>
                  {treatments.male.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => close()}
                      className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center text-white sm:h-12 sm:w-12'>
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className='ml-4'>
                        <p className='text-xs font-medium text-gray-900 sm:text-sm'>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <hr />
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export const Services = () => {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <PopoverButton
            className={classNames(
              close ? 'text-gray-900' : 'text-brandPink2',
              'group inline-flex items-center rounded-md bg-white text-sm font-medium hover:text-brandPink2 focus:outline-none focus:ring-offset-2 md:text-base',
            )}
          >
            <span>Value Adds</span>
            <HiChevronDown
              className={classNames(
                close ? 'text-gray-900' : 'text-brandPink2',
                'ml-2 h-5 w-5 group-hover:text-brandPink2',
              )}
              aria-hidden='true'
            />
          </PopoverButton>

          <Transition
            as={'div'}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute z-10 -ml-4 mt-5 w-screen max-w-xs transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                  {services.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div
                        className='-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50'
                        onClick={() => close()}
                      >
                        <Image
                          className='h-10 w-10 flex-shrink-0 text-indigo-600'
                          src={item.icon}
                          aria-hidden='true'
                          alt={item.name}
                        />
                        <div className='ml-4'>
                          <p className='text-base font-medium text-gray-900'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export const Locations = () => {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <PopoverButton
            className={classNames(
              close ? 'text-gray-900' : 'text-brandPink2',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-brandPink2 focus:outline-none',
            )}
          >
            <span>Locations</span>
            <HiChevronDown
              className={classNames(
                close ? 'text-gray-900' : 'text-brandPink2',
                'ml-2 h-5 w-5 group-hover:text-brandPink2',
              )}
              aria-hidden='true'
            />
          </PopoverButton>

          <Transition
            as={'div'}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-5 w-screen max-w-xl -translate-x-1/2 transform px-2 sm:px-0'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                  {locations.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div
                        className='-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50'
                        onClick={() => close()}
                      >
                        <Image
                          className='h-10 w-10 flex-shrink-0 text-indigo-600'
                          src={item.icon}
                          aria-hidden='true'
                          alt={item.name}
                        />
                        <div className='ml-4'>
                          <p className='text-base font-medium text-gray-900'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export const About = () => {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <PopoverButton
            className={classNames(
              close ? 'text-gray-900' : 'text-brandPink2',
              'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-brandPink2 focus:outline-none',
            )}
          >
            <span>About Us</span>
            <HiChevronDown
              className={classNames(
                close ? 'text-gray-900' : 'text-brandPink2',
                'ml-2 h-5 w-5 group-hover:text-brandPink2',
              )}
              aria-hidden='true'
            />
          </PopoverButton>

          <Transition
            as={'div'}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-5 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                  {about.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <div
                        className='-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50'
                        onClick={() => close()}
                      >
                        <Image
                          className='h-10 w-10 flex-shrink-0 text-indigo-600'
                          src={item.icon}
                          aria-hidden='true'
                          alt={item.name}
                        />
                        <div className='ml-4'>
                          <p className='text-base font-medium text-gray-900'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
