import React from "react";
import Head from "next/head";
import Banner from "Pages/Paripoorna/kn/knBanner";
import Benefits from "Pages/Paripoorna/kn/knBenefits";
import Faq from "Pages/Paripoorna/kn/knfaq";
import Video from "Pages/Paripoorna/kn/knvideo-one";
import SubscribeUs from "Pages/Home/subscribe-us";
import WorkFlow from "Pages/Paripoorna/kn/knWorkflow";

const KnParipoorna = () => {
  return (
    <div>
      <Head>
        <title>ಪರಿಪೂರ್ಣ - ಗರ್ಭಗುಡಿ</title>
        <meta
          name="description"
          content="Your next step in infertility treatment"
        />
        <meta property="og:title" content=" ಪರಿಪೂರ್ಣ - ಗರ್ಭಗುಡಿ" />
        <meta property="og:type" content="webpage" />
        <meta property="og:url" content="https://garbhagudi-ivf.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/c_scale,w_1200/v1638189477/garbhagudi-ivf/Banners/Link_Share_Banner_i1ppok.webp"
        />
        <meta name="twitter:title" content="Garbhagudi IVF Centre" />
        <meta
          name="twitter:description"
          content=" India's Best IVF Infrastructure"
        />
        <meta
          name="twitter:image"
          content=" https://res.cloudinary.com/garbhagudi/image/upload/c_scale,w_1200/v1638189477/garbhagudi-ivf/Banners/Link_Share_Banner_i1ppok.webp"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Banner />
      <WorkFlow />
      <Video />
      <Benefits />
      <Faq />
      <SubscribeUs />
    </div>
  );
};
export default KnParipoorna;
