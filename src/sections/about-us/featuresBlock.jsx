import React from "react";

function FeaturesBlocks() {
  return (
    <section className="relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        <div className="py-4 md:py-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 uppercase font-heading bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandPurpleDark font-bold">
              Why we are the Industry Leaders?
            </h2>
            <p className="text-2xl text-gray-600">
              GarbhaGudi has won numerous awards from various organisations for
              its exceptional service and high success rates
            </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {Data.map((items) => (
              <div
                className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl"
                key={items.id}
              >
                <div className="bg-brandPink rounded-full">
                  <img
                    src={items.img}
                    alt={items.title}
                    className="rounded-lg"
                  />
                </div>
                <h4 className="text-xl font-bold text-center leading-snug tracking-tight mb-1 mt-3">
                  {items.title}
                </h4>
                <p className="text-gray-600 text-center">{items.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;

const Data = [
  {
    id: 1,
    img: "https://media.graphassets.com/cZCpRhM0Snm4T5prE2EH",
    title: "Best IVF and Fertility Hospital in India",
    desc: "National Quality Achievement Awards - 2021",
  },
  {
    id: 2,
    img: "https://media.graphassets.com/k78093VmTjGWSA2LN5JU",
    title: "Among Top 10 IVF Centres in India",
    desc: "Times Health Survey - 2021",
  },
  {
    id: 3,
    img: "https://media.graphassets.com/eDbmNcAUTOSyWhDpPu2Z",
    title: "Best IVF Clinic of the Year - South",
    desc: " National Fertility Awards - Economic Times Health - 2022",
  },
  {
    id: 4,
    img: "https://media.graphassets.com/luwGzhRUSUKaEwJAQDrQ",
    title: "Certified Healthy Workplace",
    desc: "Arogya World - 2022",
  },
];
