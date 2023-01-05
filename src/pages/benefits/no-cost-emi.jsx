import React from "react";
import CallToAction from "sections/home/subscribe-us";
import Banner from "sections/nce/banner";
import Content from "sections/nce/content";
import Note from "sections/nce/note";
import Process from "sections/nce/process";
import Head from "next/head";

const NoCostEMI = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>No Cost EMI | Best IVF & Fertility Hospital in India</title>
        <meta
          name="title"
          content="No Cost EMI Options | Infertility treatment and IVF Cost - GarbhaGudi"
        />
        <meta
          name="description"
          content="GarbhaGudi IVF Centre in Electronic City offers full range of fertility treatments. Call now to book an appointment! Visit best IVF centre in Electronic City now."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="No Cost EMI Options | Infertility treatment and IVF Cost - GarbhaGudi "
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi-ivf.com" />
        <meta
          property="og:description"
          content="GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://media.graphassets.com/DOAD1Xy2S2KJxuKlipGw"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="No Cost EMI Options | Infertility treatment and IVF Cost - GarbhaGudi"
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy"
        />
        <meta
          name="twitter:image"
          content="https://media.graphassets.com/DOAD1Xy2S2KJxuKlipGw"
        />
      </Head>
      <Banner />
      <Content />
      <Process />
      <Note />
      <CallToAction />
    </div>
  );
};

export default NoCostEMI;
