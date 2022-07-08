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
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold font-heading text-gray-900 sm:text-4xl">
            What makes GarbhaGudi special?
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            GarbhaGudi is known for its top-class treatment at affordable costs
            and unparalled success rates.
          </p>
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
