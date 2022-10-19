import React from "react";

const PcodPcos = () => {
  return (
    <div className="bg-white overflow-hidden scroll-m-28" id="pcod-pcos">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase scroll-m-28">
              Female Infertility
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              PCOD - PCOS
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://res.cloudinary.com/garbhagudi/image/upload/v1665994576/garbhagudi-ivf/New%20Website/image-0-compressed_kiox5s.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="prose text-gray-500">
                PCOD or PCOS is a syndrome that affects women&apos;s ovaries,
                the reproductive organs that generate progesterone and oestrogen
                hormones that help regulate the menstrual cycle, as well as
                modest amounts of hormones inhibin, relaxin, and male hormones
                known as androgens.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                PCOD affects over 10% of all women worldwide. In comparison to
                PCOD, women with PCOS generate more male hormones than usual.
                This hormonal imbalance leads individuals to miss menstrual
                cycles and makes it difficult for them to conceive. This disease
                might also cause erratic hormonal behavior.
              </p>
              <ul className="list-outside list-disc mt-2 space-y-2">
                <li>Diabetes</li>
                <li>Infertility</li>
                <li>Acne</li>
                <li>Excessive Hair Growth </li>
              </ul>
              <p className="mt-2">
                Many women have PCOD/PCOS but are unaware of it. The following
                symptoms impact ovulation and the ovaries:
              </p>
              <ul className="list-outside list-disc mt-2 space-y-2">
                <li>Cysts in the ovaries</li>
                <li>Male hormone levels have risen.</li>
                <li>Periods that are skipped or irregular</li>
                <li>
                  It&apos;s a rather prevalent condition with no known
                  treatment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcodPcos;
