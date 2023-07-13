const data = [
  {
    id: 2,
    icon: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780927/garbhagudi-ivf/Icons/service4_jnvjwo.webp",
    title: "Top Fertility Specialists",
    description: `Our team consists of the many qualified doctors, with a proven track record in dealing with the most challenging of cases.`,
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780927/garbhagudi-ivf/Icons/service7_xwcnxd.webp",
    title: "High Success Rates",
    description: `GarbhaGudi constantly achieves highest IVF success rates in the country.`,
  },
  {
    id: 6,
    icon: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780927/garbhagudi-ivf/Icons/service5_fsjldj.webp",
    title: "Treatment Standards",
    description: `Recognized as the most reputed IVF centre in India due to its exceptional quality of treatments and holistic approach.`,
  },
];

const OtherServices = () => {
  return (
    <div className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-xl leading-8 font-bold font-heading text-gray-700 underline sm:text-2xl text-center">
            What makes GarbhaGudi special?
          </p>
        </div>
        <div className="max-w-4xl mx-auto pb-12">
          <div className="max-w-3xl mx-auto text-center font-bold py-6 md:py-10">
            <h2 className="text-3xl md:text-5xl mb-4">
              Trusted by over{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandPurpleDark">
                8500+ couples{" "}
              </span>
              across the world for over{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandPurpleDark">
                13 Years{" "}
              </span>
            </h2>
          </div>
          <div className="mt-2">
            <h4 className="mb-5 text-center font-bold text-lg text-gray-700">
              Industry Average
            </h4>
            <div className="w-full rounded-full h-6 bg-gray-600">
              <div
                className="bg-brandPink4 text-md h-6 font-bold text-center p-0.5 leading-none rounded-l-full flex items-center justify-center"
                style={{ width: "25%" }}
              >
                25 - 28%
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-brandPink font-bold text-lg mb-5 text-center">
              GarbhaGudi Average
            </h4>
            <div className="w-full bg-gray-600 rounded-full h-6">
              <div
                className="bg-brandPink4 text-md h-6 font-bold text-center p-0.5 leading-none rounded-l-full flex items-center justify-center"
                style={{ width: "75%" }}
              >
                65-73%
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {data.map((feature) => (
              <div key={feature.id} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                    <img src={feature.icon} alt="feature icon" />
                  </div>
                  <p className="ml-16 text-xl leading-6 font-heading font-bold text-gray-900">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-md text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export default OtherServices;
