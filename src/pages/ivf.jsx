import React from "react";
import CallToAction from "sections/home/subscribe-us";
import MyModal from "components/modal";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Ivf = () => {
  return (
    <div>
      <div className="mx-auto py-12">
        <main>
          {/* Hero section */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-2">
              <div className="relative shadow-xl rounded-2xl overflow-hidden ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://img.freepik.com/premium-vector/childless-couples-plan-queue-reproductive-center-clinic-doctor-flat-vector-illustration-isolated_125133-1561.jpg?w=1380"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brandPink4 to-brandPurple2 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Start your Journey</span>
                    <span className="block text-indigo-200"></span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white font-semibold sm:max-w-3xl">
                    Begin your journey towards happiness with a visit to
                    GarbhaGudi
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
          {/* Alternating Feature Sections */}
          <div className="relative pt-16 pb-32 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
            />
            <div className="relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        What is IVF?
                      </h2>
                      <div className="mt-4 pb-10 text-lg text-gray-900">
                        Today, in vitro fertilization (IVF) is practically a
                        household word. But not so long ago, it was a mysterious
                        procedure for infertility that produced what were then
                        known as &quot;test-tube babies.&quot; Louise Brown,
                        born in England in 1978, was the first such baby to be
                        conceived outside her mother&apos;s womb.{" "}
                        <p className="mt-4">
                          Unlike the simpler process of artificial insemination
                          IVF involves combining eggs and sperm outside the body
                          in a laboratory. Once an embryo or embryos form, they
                          are placed in the uterus. IVF is a complex and
                          expensive procedure; only about 5% of couples with
                          infertility seek it out.
                        </p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex bg-gradient-to-r from-brandPink4 to-brandPurple bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-brandPink hover:to-brandPurpleDark"
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="px-2 sm:px-0 lg:pl-4 lg:-mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-ivf-infographic_23-2149367789.jpg?t=st=1657263078~exp=1657263678~hmac=0222a98bad4eb649fc59effafa1aae60a2316ce746f97b7af047b84e659f9a02&w=1380"
                      alt="Inbox user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        When is IVF Recommended?
                      </h2>
                      <div className="mt-4 text-lg text-gray-900">
                        <ul className="list-inside list-disc">
                          <li>Blocked or defects in fallopian tubes</li>
                          <li>Ovulation disorder</li>
                          <li>Premature ovarian failure</li>
                          <li>Endometriosis</li>
                          <li>Uterine fibroids</li>
                          <li>Individuals with a genetic disorder</li>
                          <li>Male factor infertility</li>
                          <li>
                            Fertility preservation for cancer or other health
                            conditions
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex bg-gradient-to-r from-brandPink4 to-brandPurple bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-brandPink hover:to-brandPurpleDark"
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                  <div className="px-2 sm:px-0 lg:pr-4 lg:-ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-infertility-infographic_23-2149367796.jpg?w=1380"
                      alt="Customer profile user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Feature Section */}
          <div className="bg-gradient-to-r from-brandPink4 to-brandPurple bg-opacity-10 px-2 py-14 sm:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 max-w-7xl mx-auto ">
              <div className="max-w-md flex items-center justify-center flex-col">
                <h3 className="text-xl sm:text-2xl font-heading font-bold">
                  Procedure of IVF
                </h3>
                <div>
                  <p className="mt-2 text-lg">
                    The process of IVF begins with fertility medications and
                    hormones, which are given to the woman for about 10 – 12
                    days to stimulate the growth of multiple eggs in the ovary.
                    Transvaginal ultrasound scans and hormone analysis is done
                    to know the status of growing eggs.
                  </p>
                  <div className="mt-2">
                    <ul className="list-inside list-disc text-lg">
                      <li>Ovulation induction</li>
                      <li>Egg retrieval</li>
                      <li>Egg and Sperm Preparation</li>
                      <li>Egg Fertilization</li>
                      <li>Embryo Culture: 2 - 6 Days</li>
                      <li>Embryo Transfer / Frozen Embryo transfer</li>
                      <li>Pregnancy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden mt-14">
                <LiteYouTubeEmbed
                  id="b2tdqev4DpQ"
                  title="What Is IVF, How is ICSI Beneficial"
                />
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="relative mt-10">
            <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <img
                    className="h-full w-full object-cover xl:absolute xl:inset-0"
                    src="https://img.freepik.com/premium-photo/medical-banner-with-icons_1325-1526.jpg?w=1380"
                    alt="rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
              <div className="relative pt-12 pb-96 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                <h2 className="text-sm font-semibold tracking-wide uppercase"></h2>
                <p className="mt-3 text-3xl font-extrabold text-gray-900">
                  IVF Success Rate at GarbhaGudi
                </p>
                <p className="mt-5 text-lg text-gray-700">
                  GarbhaGudi has one of the highest IVF treatments success rates
                  in the industry with over 7000+ successful IVF pregnancies in
                  the last 10-years
                </p>
                <div className="mt-10">
                  <h4 className="mb-5 text-center text-gray-700">
                    Industry Average
                  </h4>
                  <div className="w-full rounded-full h-6 bg-gray-500">
                    <div
                      className="bg-brandPink4 text-md h-6 font-bold text-center p-0.5 leading-none rounded-l-full flex items-center justify-center"
                      style={{ width: "25%" }}
                    >
                      25%
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <h4 className="text-gray-700 mb-5 text-center">
                    GarbhaGudi Average
                  </h4>
                  <div className="w-full bg-gray-500 rounded-full h-6">
                    <div
                      className="bg-brandPink4 text-md h-6 font-bold text-center p-0.5 leading-none rounded-l-full flex items-center justify-center"
                      style={{ width: "75%" }}
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className=" -mb-20">
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default Ivf;
