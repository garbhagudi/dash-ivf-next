import React from "react";
import { HiPhone } from "react-icons/hi";

const FloatPhone = () => {
  return (
    <div className="fixed w-8 h-8 md:w-14 md:h-14 bottom-20 right-6 md:bottom-20 md:right-3.5 bg-brandPink3 rounded-full flex items-center justify-center transition-opacity duration-500 ease-linear">
      <a href="tel:+918880000909">
        <HiPhone className="w-4 h-4 md:w-8 md:h-8 text-white" />
      </a>
    </div>
  );
};

export default FloatPhone;
