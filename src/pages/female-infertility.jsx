import React from "react";
import Banner from "sections/female-infertility/banner";
import SymptomsCauses from "sections/female-infertility/symptoms-causes";
import DiagnosisTreatment from "sections/female-infertility/diagnosis-treatment";
import Faq from "sections/female-infertility/Faq";
import SubscribeUs from "sections/home/subscribe-us";
import Head from "next/head";

const FemaleInfertility = () => {
  return (
    <div>
      <Head>
        <title>Female Infertility - GarbhaGudi</title>
        <meta
          name="description"
          content="Best female infertility treatment at bangalore with higest success rate and lowest treatment cost."
        />
        <meta property="og:title" content="GarbhaGudi IVF Centre" />
        <meta
          property="og:description"
          content="India's best female infertility treatment with highest success rate and lowest treatment cost. "
        />
        <meta property="og:type" content="webpage" />
        <meta property="og:url" content="https://garbhagudi-ivf.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/c_scale,h_586,w_1200/v1637220770/garbhagudi-ivf/Banners/Young_married_couple_consulting_doctor_svxszn.webp"
        />
        <meta name="twitter:title" content="Garbhagudi IVF Centre" />
        <meta
          name="twitter:description"
          content=" India's Best IVF Infrastructure"
        />
        <meta
          name="twitter:image"
          content=" https://res.cloudinary.com/garbhagudi/image/upload/c_scale,h_586,w_1200/v1637220770/garbhagudi-ivf/Banners/Young_married_couple_consulting_doctor_svxszn.webp"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Banner />
      <SymptomsCauses />
      <DiagnosisTreatment />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default FemaleInfertility;
