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
            ? `flex w-full justify-between items-center px-3 sm:px-6 py-2 mt-3 rounded-t-lg hover:cursor-pointer transition-all duration-500 ease-in-out text-md xl:text-xl bg-brandPink3 text-white font-heading`
            : `flex w-full justify-between items-center px-3 sm:px-6 py-1 hover:py-3 mt-3 hover:rounded-lg hover:cursor-pointer transition-all duration-500 ease-in-out text-md hover:bg-brandPink4 sm:hover:text-lg xl:hover:text-xl hover:border-b-0 border-gray-300 font-content`
        }
      >
        <div className='flex items-center justify-center font-semibold '>
          <div className='mt-1'>{title}</div>
        </div>
        <div>
          {activeIndex === index ? (
            <HiChevronDown className='w-8 h-8 rotate-180' />
          ) : (
            <HiChevronDown className='w-8 h-8 ' />
          )}
        </div>
      </div>
      <Transition
        show={true}
        enter='transition duration-300 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-100 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        {activeIndex === index && (
          <div className='shadow-3xl rounded-b-lg p-4 font-content border-2 border-brandPink3'>
            {children}
          </div>
        )}
      </Transition>
    </>
  );
};

export default AccordionLayout;
