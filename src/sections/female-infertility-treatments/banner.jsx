import Link from "next/link";
const Banner = () => {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 scrroll-m-28"
      id="pcos-pcod"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <div className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              Making Couples <br className="hidden md:block" />
              Fertile...
            </div>
            <p className="text-base text-gray-700 md:text-lg">
              Infertility is a medical illness that can harm the patient&apos;s
              psychological, physical, emotional, spiritual, and medical
              well-being. Learn more about your body and how to deal with its
              flaws. We are here to assist you.
            </p>
          </div>
          <div>
            <Link href="#causes-and-symptoms" aria-label="">
              <div className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1667805635/garbhagudi-ivf/New%20Website/Making_Couple_Fertile_01-min_ttuazg.jpg"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1667805635/garbhagudi-ivf/New%20Website/Making_Couple_Fertile_02-min_festae.jpg"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1667805636/garbhagudi-ivf/New%20Website/Making_Couple_Fertile_03-min_ix7xww.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
