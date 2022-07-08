import React from "react";
import MyModal from "components/modal";

const CallToAction = () => {
  return (
    <div className="bg-gray-100 rounded-lg max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to start?</span>
          <span className="block text-brandPink">
            Let us take your dreams forward...
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <MyModal title={"BOOK AN APPOINTMENT"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
