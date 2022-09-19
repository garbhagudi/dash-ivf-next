import React from "react";
import Link from "next/link";

const DoctorLocation = ({ name, designation, image, qualification }) => {
  return (
    <div>
      <Link href={"/contact-us"} passHref>
        <div className="text-center mb-8 md:mb-0 cursor-pointer">
          <img
            className="w-36 h-36 sm:w-36 sm:h-36 rounded-full mx-auto -mb-20 "
            src={image}
            alt="Avatar Jacky"
          />
          <div className="bg-gray-100 shadow-lg rounded-lg px-2 pt-24 sm:pt-28 pb-6 h-52 text-gray-400 hover:shadow-2xl hover:bg-gray-50 transition-all duration-500">
            <h3 className="font-heading font-bold text-gray-800 text-md mb-3">
              {name}
            </h3>
            <p className="text-gray-800 text-sm tracking-wide">
              {qualification}
            </p>
            <p className="text-gray-800 text-sm tracking-wide">{designation}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DoctorLocation;
