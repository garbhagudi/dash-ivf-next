import React from "react";

const Process = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-5xl text-center font-heading font-bold pb-10">
        How to Avail
      </h1>
      <p className="pb-10 max-w-prose mx-auto px-5">
        The process of financing is simple and easy with the usual turnaround
        time between one to two days. Most of the process is digital and the
        financing organization requires some documentation for their
        verification process.
      </p>
      <section className="text-gray-600">
        <div className="container px-5 mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1667805635/garbhagudi-ivf/New%20Website/How-to-Avail-min_c54odl.png"
            />
          </div>
          <div className="lg:py-6 -mb-10 lg:pl-12 lg:text-left ">
            {Data.map((items) => (
              <div key={items.id} className="mb-6">
                <div className="w-12 h-12 inline-flex items-center font-heading text-xl justify-center rounded-full bg-pink-100 text-pink-500 mb-2">
                  {items.id}
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg font-heading font-bold mb-3">
                    {items.title}
                  </h2>
                  <div className="leading-relaxed text-base">
                    {items.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;

const Data = [
  {
    id: "1",
    title: "Register",
    description: "Register at GarbhaGudi with the initial nominal fee",
  },
  {
    id: "2",
    title: "Provide Documentation",
    description: (
      <div>
        Provide personal documents for verification. The usual documents
        requested are:
        <ul className="list-inside list-disc space-y-2">
          <li>Address and ID proof</li>
          <li>Cancelled Cheque</li>
          <li>Bank statement</li>
          <li>The projected cost of treatment (given by GarbhaGudi)</li>
        </ul>
      </div>
    ),
  },
  {
    id: "3",
    title: "Approval",
    description:
      "Based on the risk profile and repayment capacity of the applicant, the loan amount is approved. It is disbursed to the hospital directly on the day of the start of the treatment. The EMIs start from the month after the disbursal",
  },
];
