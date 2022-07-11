import React from "react";
import Head from "next/head";
import Banner from "sections/paripoorna/kn/knBanner";
import Benefits from "sections/paripoorna/kn/knBenefits";
import Faq from "sections/paripoorna/kn/knfaq";
import Video from "sections/paripoorna/kn/knvideo-one";
import SubscribeUs from "sections/home/subscribe-us";
import WorkFlow from "sections/paripoorna/kn/knWorkflow";

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
