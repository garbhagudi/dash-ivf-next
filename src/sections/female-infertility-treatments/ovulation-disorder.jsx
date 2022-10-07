const OvulationDisorder = () => {
  return (
    <div
      className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden scroll-m-28"
      id="ovarian-disorders"
    >
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Female Infertility
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ovulation Disorder
            </p>
          </div>
        </div>
        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
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
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
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
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                <p>
                  Ovulation abnormalities are among the most prevalent causes of
                  female infertility. Ovulation disorders are disruptions in the
                  development of an egg (also known as an oocyte or ovum) during
                  a woman&apos;s menstrual cycle caused by issues with the
                  control of reproductive hormones. Disorders are frequently
                  caused by situations such as:
                </p>
                <ol className="list-outside list-disc space-y-2">
                  <li>
                    Hypothyroidism or hyperthyroidism is caused by hypothalamic
                    dysfunction
                  </li>
                  <li>Polycystic ovarian syndrome (PCOS) (PCOS)</li>
                  <li>Early ovarian failure</li>
                  <li>
                    Too much prolactin, a hormone that encourages breast milk
                    production among other things
                  </li>
                </ol>
                <h4 className="font-bold text-lg py-4">Symptoms: </h4>
                <p>
                  Symptoms of an ovulation issue vary depending on the reason
                  and the hormones that impact ovulation. Infertility may be the
                  only symptom in certain situations. Others are as follows:
                  <ul className="list-outside list-disc mt-2 space-y-2">
                    <li>Periods that are irregular or missing are common.</li>
                    <li>
                      Anxiety, despair, and anxiousness are examples of mood
                      shifts.
                    </li>
                    <li>
                      Weight fluctuations – Weight growth is frequently
                      associated with hypothyroidism, while weight loss is
                      associated with hyperthyroidism.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                <p>
                  Treatments for ovulation problems aim to improve the quality
                  and frequency of ovulation. Among the therapies are:
                </p>
                <h4 className="font-bold text-lg py-4">
                  Fertility Medications:{" "}
                </h4>
                <p>
                  Fertility treatments, both oral and injectable, can encourage
                  the ovaries to make and release eggs. The majority of women
                  will react to an oral medicine that requires little
                  monitoring. If a patient does not react to oral medicine, she
                  will be started on injectable meds, which will require more
                  frequent monitoring by a doctor
                </p>
                <h4 className="font-bold text-lg py-4">
                  Modifications in lifestyle:
                </h4>
                <p>
                  Patients are urged to undertake lifestyle changes in addition
                  to taking thyroid medication. Maintaining a healthy weight,
                  frequent exercise, and stress-relieving techniques are all
                  recommended.
                </p>
                <h4 className="font-bold text-lg py-4">
                  Thyroid hormone replacement treatment:
                </h4>
                <p>
                  Thyroxine (T4) helps put thyroid levels back into normal
                  ranges in individuals with hypothyroidism or hyperthyroidism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OvulationDisorder;
