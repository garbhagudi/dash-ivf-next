import React from "react";
import CallToAction from "sections/home/subscribe-us";
import Banner from "sections/nce/banner";
import Content from "sections/nce/content";
import Note from "sections/nce/note";
import Process from "sections/nce/process";

const NoCostEMI = () => {
  return (
    <div>
      <Banner />
      <Content />
      <Process />
      <Note />
      <CallToAction />
    </div>
  );
};

export default NoCostEMI;
