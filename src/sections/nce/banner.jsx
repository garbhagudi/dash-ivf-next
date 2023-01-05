import React from "react";
import MyModal from "components/modal";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl overflow-hidden ">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1667805635/garbhagudi-ivf/New%20Website/Low-EMI-Cost-min_wpvggm.webp"
              alt="Start IVF Journey"
            />
            <div className="absolute opacity-75 inset-0 bg-gradient-to-r from-brandPink4 to-brandPurple2 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white font-heading">
                Take Your First Steps Towards Parenthood
              </span>
              <span className="block text-indigo-200"></span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white font-semibold sm:max-w-3xl font-content">
              Take advantage of many financial benefits available at GarbhaGudi
              designed to make your IVF journey as affordable as possible
            </p>
            <div className="mt-10 mx-auto flex justify-center">
              <div className="mx-auto">
                <div>
                  <MyModal title={"Get Started"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
