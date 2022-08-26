import React, { Fragment } from "react";
import { HiChevronDown } from "react-icons/hi";

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
        className="flex items-center justify-center w-full px-3 py-1 mt-3 rounded-xl text-brandDark bg-brandDark bg-opacity-20 hover:bg-opacity-80 hover:text-white hover:cursor-pointer"
      >
        <div className="justify-center font-semibold flexitems-center text-md sm:text-xl ">
          <div className="font-content">{title}</div>
        </div>

        {activeIndex === index ? (
          <HiChevronDown className="flex w-4 h-4 rotate-180 item-center" />
        ) : (
          <HiChevronDown className="flex w-4 h-4 item-center" />
        )}
      </div>
      {activeIndex === index && (
        <div className="mt-2 text-center text-gray-900 shadow-3xl rounded-2xl font-content">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
