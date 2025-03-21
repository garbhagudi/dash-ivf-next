import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { Transition } from '@headlessui/react';

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) => {
    activeIndex !== index && setActiveIndex(index);
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className={
          activeIndex === index
            ? `text-md mt-3 flex w-full items-center justify-between rounded-t-lg bg-brandPink3 px-3 py-2 font-heading text-white transition-all duration-500 ease-in-out hover:cursor-pointer sm:px-6 xl:text-xl`
            : `text-md mt-3 flex w-full items-center justify-between border-gray-300 px-3 py-1 transition-all duration-500 ease-in-out hover:cursor-pointer hover:rounded-lg hover:border-b-0 hover:bg-brandPink4 hover:py-3 sm:px-6 sm:hover:text-lg xl:hover:text-xl`
        }
      >
        <div className='flex items-center justify-center font-semibold'>
          <div className='mt-1'>{title}</div>
        </div>
        <div>
          {activeIndex === index ? (
            <HiChevronDown className='h-8 w-8 rotate-180' />
          ) : (
            <HiChevronDown className='h-8 w-8' />
          )}
        </div>
      </div>
      <Transition
        as={'div'}
        show={true}
        enter='transition duration-300 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-100 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        {activeIndex === index && (
          <div className='shadow-3xl rounded-b-lg border-2 border-brandPink3 p-4'>
            {children}
          </div>
        )}
      </Transition>
    </>
  );
};

export default AccordionLayout;
