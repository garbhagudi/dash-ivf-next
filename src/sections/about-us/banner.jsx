import MyModal from "components/modal";
import React from "react";

function HeroHome() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-10 pb-12">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandPurpleDark">
                GarbhaGudi
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                India&apos;s premiere infertilty treatment hospital chain laced
                with state of the art infrastructure determined to help couples
                in fulfilling their dream of parenthood
              </p>
              <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-10 items-center justify-center">
                <div>
                  <MyModal title={"Book a Free Consultation"} />
                </div>
                <div>
                  <a
                    className="px-5 py-4 font-semibold rounded-lg text-white bg-gray-900 hover:bg-gray-800 w-full"
                    href="#"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto rounded-xl"
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/q_auto:eco/v1643461022/Banner/About_us_xg1b1l.webp"
                  width="768"
                  // height="432"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
