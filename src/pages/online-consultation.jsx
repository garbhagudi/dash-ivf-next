import React from "react";
import Banner from "sections/online-consultation/Banner";
import Advantages from "sections/online-consultation/Advantages";
import Workflow from "sections/online-consultation/Workflow";
import Faq from "sections/online-consultation/faq";
import SubscribeUs from "sections/home/subscribe-us";
import Head from "next/head";

const OnlineConsultation = () => {
  return (
    <div>
      <Head>
        <title>Online Consultation - GarbhaGudi</title>
        <meta
          name="description"
          content="Begin your journey towards parenthood from the comfort of your Home."
        />
        <meta
          property="og:title"
          content="Male Infertility - GarbhaGudi IVF Centre"
        />
        <meta property="og:type" content="webpage" />
        <meta
          property="og:url"
          content="https://garbhagudi-ivf.com/male-infertility"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/v1633780493/garbhagudi-ivf/Banners/maleInf_umubsg.webp"
        />
        <meta name="twitter:site" content="@garbhagudiivf"></meta>
        <meta name="twitter:title" content="Garbhagudi IVF Centre " />
        <meta
          name="twitter:description"
          content=" India's Best IVF Infrastructure"
        />
        <meta
          name="twitter:image"
          content=" https://res.cloudinary.com/garbhagudi/image/upload/v1633780493/garbhagudi-ivf/Banners/maleInf_umubsg.webp"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Banner />
      <Workflow />
      <Advantages />
      <Faq />
      <SubscribeUs />
    </div>
  );
};

export default OnlineConsultation;
