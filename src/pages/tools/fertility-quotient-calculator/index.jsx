import React from "react";
import { Average, Good, Low, Best, Poor } from "./results";
import Head from "next/head";

const IndexPage = () => {
  function calculate() {
    var values = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 100,
    ];
    var age = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    var bmi = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5, 5, 4, 4, 4, 3,
      3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    var afc = [
      1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 3, 3,
      3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    var amh10 = [
      0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    const ageInput = document.getElementById("age").value;
    const bmiInput = document.getElementById("bmi").value;
    const afcInput = document.getElementById("afc").value;
    const amhInput = Number(document.getElementById("amh").value) * 10;

    //Handle Empty Inputs
    if (
      ageInput === "" ||
      bmiInput === "" ||
      afcInput === "" ||
      amhInput === ""
    ) {
      return (document.getElementById("error").innerHTML =
        "Error! : Please check your inputs...");
    }
    if (
      ageInput !== "" &&
      bmiInput !== "" &&
      afcInput !== "" &&
      amhInput !== ""
    ) {
      document.getElementById("error").innerHTML = "";
    }

    function map1(ageInput) {
      let index = values.findIndex((values) => values >= ageInput);
      return age[index] * 3;
    }
    function map2(bmiInput) {
      let index = values.findIndex((values) => values >= bmiInput);
      return bmi[index];
    }
    function map3(afcInput) {
      let index = values.findIndex((values) => values >= afcInput);
      return afc[index] * 3;
    }
    function map4(amhInput) {
      let index = values.findIndex((values) => values >= amhInput);
      return amh10[index] * 3;
    }

    const score =
      map1(ageInput) + map2(bmiInput) + map3(afcInput) + map4(amhInput);
    const percent = score * 2;

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("form").classList.add("hidden");
    document.getElementById("score").innerHTML = `${score}/50`;
    document.getElementById("percent").innerHTML = `${percent}%`;

    if (score <= 18) {
      document.getElementById("poor-fertility").classList.remove("hidden");
    } else if (score > 18 && score <= 27) {
      document.getElementById("low-fertility").classList.remove("hidden");
    } else if (score > 27 && score <= 34) {
      document.getElementById("average-fertility").classList.remove("hidden");
    } else if (score > 34 && score <= 42) {
      document.getElementById("good-fertility").classList.remove("hidden");
    } else if (score > 42 && score <= 50) {
      document.getElementById("best-fertility").classList.remove("hidden");
    } else {
      document.getElementById("overflow").classList.remove("hidden");
      document.getElementById("score").classList.add("hidden");
      document.getElementById("percent").classList.add("hidden");
    }
  }
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Fertility Quotient Calculator | GarbhaGudi</title>
        <meta
          name="title"
          content="Fertility Quotient Calculator | GarbhaGudi IVF Centre"
        />
        <meta
          name="description"
          content="Fertility quotient is an indicator of an individual’s capability to reproduce. The subjective topic of fertility reserve is being converted to an objective score. It is ascore against 100, given against inputs provided by the user. The score is then converted to an indicative value to help the person understand the status of his/her fertility levels."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="Fertility Quotient Calculator  | GarbhaGudi IVF Centre"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="Fertility quotient is an indicator of an individual’s capability to reproduce. The subjective topic of fertility reserve is being converted to an objective score. It is ascore against 100, given against inputs provided by the user. The score is then converted to an indicative value to help the person understand the status of his/her fertility levels."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1654690156/SEO/5-min_xsyat3.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="Fertility Quotient Calculator | GarbhaGudi IVF Centre"
        />
        <meta
          name="twitter:description"
          content="Fertility quotient is an indicator of an individual’s capability to reproduce. The subjective topic of fertility reserve is being converted to an objective score. It is ascore against 100, given against inputs provided by the user. The score is then converted to an indicative value to help the person understand the status of his/her fertility levels."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1654690156/SEO/5-min_xsyat3.jpg"
        />
      </Head>
      <div className="max-w-7xl mx-auto font-content">
        <h1 className="text-4xl font-heading font-semibold text-center py-8 text-brandPink">
          Fertility Quotient Calculator
        </h1>
        <div
          className=" text-sm sm:text-base px-3 sm:px-0 max-w-6xl mx-auto flex items-center justify-start flex-col"
          id="intro"
        >
          <p className="mt-2">
            Fertility quotient is an indicator of an individual’s capability to
            reproduce. The subjective topic of fertility reserve is being
            converted to an objective score. It is ascore against 100, given
            against inputs provided by the user. The score is then converted to
            an indicative value to help the person understand the status of
            his/her fertility levels.
          </p>
          <p className="mt-2">
            There have many research articles that address this topic of
            fertility capability. All research articles are more or less
            unanimous in their findings that a lady’s fertility is based on
            several factors which include her age, her Antral Follicular Count
            (AFC), her AMH hormone levels and her general health condition.
            There are also other fringe factors that contribute to the fertility
            aspect – like tobacco usage, addiction to alcohol or other drugs
            etc.
          </p>
        </div>
        <hr className="my-5" />
        <div className="py-6">
          <div className="max-w-lg space-y-3 mx-auto" id="form">
            <div className="px-3 sm:px-0">
              <label
                htmlFor="Age"
                className="block text-sm font-medium text-gray-700"
              >
                Age{" "}
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="Age"
                  id="age"
                  className="shadow-lg placeholder:text-xs focus:ring-brandPink4 focus:border-brandPink4 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Age"
                  aria-describedby="Age"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-400" id="Age Value">
                Optimum Value: 18 - 25
              </p>
            </div>
            <div className="px-3 sm:px-0">
              <label
                htmlFor="bmi"
                className="block text-sm font-medium text-gray-700"
              >
                Body Mass Index (BMI)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="bmi"
                  id="bmi"
                  className="shadow-lg placeholder:text-xs focus:ring-brandPink4 focus:border-brandPink4 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="BMI"
                  aria-describedby="Body Mass Index"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                <p className="mt-2 text-xs text-gray-400" id="Age Value">
                  Optimum Value: 19 - 21
                </p>
              </div>
            </div>
            <div className="px-3 sm:px-0">
              <label
                htmlFor="afc"
                className="block text-sm font-medium text-gray-700"
              >
                Antral Follicle Count (AFC)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="afc"
                  id="afc"
                  className="shadow-lg placeholder:text-xs focus:ring-brandPink4 focus:border-brandPink4 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="AFC"
                  aria-describedby="Antral Follicle Count"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                <p className="mt-2 text-xs text-gray-400" id="Age Value">
                  Optimum Value: 12 - 16
                </p>
              </div>
            </div>
            <div className="px-3 sm:px-0">
              <label
                htmlFor="amh"
                className="block text-sm font-medium text-gray-700"
              >
                Anti-Müllerian Hormone (AMH) level
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="amh"
                  id="amh"
                  className="shadow-lg placeholder:text-xs focus:ring-brandPink4 focus:border-brandPink4 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="AMH"
                  aria-describedby="Anti-Müllerian Hormone"
                  onKeyPress={(e) => {
                    if (!/^\d*\.?\d*$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                <p className="mt-2 text-xs text-gray-400" id="Age Value">
                  Optimum Value: 2.1 - 3.9
                </p>
              </div>
            </div>
            <div className="mx-auto  text-center">
              <button
                className="px-8 py-2 mt-5 border order-gray-300 font-semibold rounded-3xl focus:ring-brandPink4 focus:border-brandPink4 hover:bg-brandPink4 hover:text-white"
                onClick={() => calculate()}
              >
                <span className="text-xl">Calculate</span>
              </button>
              <div id="error" className="my-4 text-red-500"></div>
            </div>
          </div>
          <div id="result" className="hidden max-w-xl mx-auto px-3">
            <div className="flex flex-row mt-2">
              <div className="mx-auto px-3 py-1  text-center rounded-2xl border text-base shadow-2xl w-32">
                <div> Score </div>
                <div id="score" className="font-bold text-xl"></div>
              </div>
              <div className="mx-auto px-3 py-1 text-center rounded-2xl border text-base shadow-2xl w-32">
                <div> Percent </div>
                <div id="percent" className="font-bold text-xl"></div>
              </div>
            </div>
            <div className="mt-10">
              <div id="poor-fertility" className="hidden">
                <Poor />
              </div>
              <div id="low-fertility" className="hidden">
                <Low />
              </div>
              <div id="average-fertility" className="hidden">
                <Average />
              </div>
              <div id="good-fertility" className="hidden">
                <Good />
              </div>
              <div id="best-fertility" className="hidden">
                <Best />
              </div>
              <div
                id="overflow"
                className="hidden text-red-500 text-center text-lg"
              >
                {" "}
                Please check your Inputs.
              </div>
            </div>
            <div className="mx-auto text-center mt-5">
              <button
                className="px-6 py-2 font-semibold text-xl border rounded-3xl focus:ring-brandPink4 focus:border-brandPink4 hover:bg-brandPink4 hover:text-white"
                onClick={refreshPage}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
        <div className="text-xs px-3 mb-5">
          <p>
            The score is calculated based on the woman’s fertility factors -
            AMH, AFC, Age and BMI. Some of these factors play a role more
            critical than the others. So, proper adjustments have been done in
            the algorithm to manage these variations.{" "}
          </p>
          <p className="mt-2">
            Please note that the fertility quotient is an indicator of the
            fertility status. It is not a definitive advice from the doctor.
            Consult a fertility specialist to know more about your fertility
            quotient and fertility status. It is also important to note that a
            woman may move from one stage to another rather quickly based on the
            parameters that play a role. For example, a lady with a fertility
            quotient of “Best Fertility” may move to “Good Fertility” within the
            matter of a few months if her age is beyond 30 and if her AMH or AFC
            starts dropping quickly.
          </p>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
