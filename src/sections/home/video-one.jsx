import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoOne = () => {
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="py-12 px-3">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold sm:text-center">
          Meet this couple. Their dreams have come alive…
          <br /> It’s your turn now!
        </h3>
        <div className="rounded-2xl overflow-hidden mt-6">
          <LiteYouTubeEmbed id="YVyaYhk8Hbk" poster="maxresdefault" />
        </div>
      </div>
    </div>
  );
};

export default VideoOne;
