import React, { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className='mt-3 flex w-full items-center justify-center rounded-xl bg-brandDark bg-opacity-20 px-3 py-1 text-brandDark hover:cursor-pointer hover:bg-opacity-80 hover:text-white'
      >
        <div className='flexitems-center text-md justify-center font-semibold sm:text-xl'>
          <div className='font-content'>{title}</div>
        </div>

        {activeIndex === index ? (
          <HiChevronDown className='item-center flex h-4 w-4 rotate-180' />
        ) : (
          <HiChevronDown className='item-center flex h-4 w-4' />
        )}
      </div>
      {activeIndex === index && (
        <div className='shadow-3xl font-content mt-2 rounded-2xl text-center text-gray-900'>
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
