import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoTwo = () => {
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="py-12 px-3">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold sm:text-center">
          IVF From Home...
          <br /> Is it really Possible?
        </h3>
        <div className="rounded-2xl overflow-hidden mt-6">
          <LiteYouTubeEmbed id="q-NWGcN89as" poster="maxresdefault" />
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
