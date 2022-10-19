import React from "react";
import Advancements from "sections/male-infertility/Advancements";
import Banner from "sections/male-infertility/banner";
import WhatIs from "sections/male-infertility/whatIs";
import Causes from "sections/male-infertility/Causes";
import SubscribeUs from "sections/home/subscribe-us";
import Head from "next/head";
import Tags from "sections/male-infertility/tags";
import AtRisk from "sections/male-infertility/AtRisk";

const MaleInfertility = () => {
  return (
    <div>
      <Head>
        <title>Male Infertility - GarbhaGudi</title>
        <meta
          name="description"
          content="Best Male Infertility Treatment in Bangalore."
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
      <WhatIs />
      <Causes />
      <AtRisk />
      <Advancements />
      <Tags />
      <SubscribeUs />
    </div>
  );
};

export default MaleInfertility;
