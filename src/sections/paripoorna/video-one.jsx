import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const VideoOne = () => {
  return (
    <div className="mx-auto max-w-7xl ">
      <div className="px-3 pb-10 lg:pb-24">
        <div className="rounded-2xl  overflow-hidden">
          <LiteYouTubeEmbed id="OQEFbV9AB5w" poster="maxresdefault" />
        </div>
      </div>
    </div>
  );
};

export default VideoOne;

const styles = {
  video: {
    pt: [7, null, null, 9, null, 10, 4],
    pb: [9, null, null, 10, 11],
    h3: {
      mb: 8,
      fontSize: [5, null, null, "21px", "36px", "32px", 9],
      letterSpacing: ["-0.5px", null, null, null, null, "-1.5px"],
      fontWeight: "bold",
      lineHeight: [1.6, null, null, 1.25],
      textAlign: "center",
    },
    p: {
      fontSize: ["15px", null, null, "17px"],
      lineHeight: ["26px", null, null, 2],
      mt: ["10px", null, null, null, "25px"],
      mb: ["0px", null, null, null, "20px"],
    },
    br: {
      display: ["none", null, null, "inherit"],
    },
  },
  videoBox: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ">img": {
      display: "flex",
      width: ["100%", null, null, null, "80%", null, "100%"],
      border: "solid",
      borderColor: "borderColor",
      borderRadius: "10px",
      borderWidth: "2px",
    },
  },
  link: {
    color: "secondary",
    fontSize: [1, null, 2],
    display: "inline-block",
    verticalAlign: "middle",
    fontWeight: "bold",
    mt: ["15px", null, null, null, "0px"],
    mb: ["20px", null, null, "50px"],
    svg: {
      position: "relative",
      top: "3px",
    },
  },
  videoBtn: {
    width: [44, null, 44, 66, 120],
    height: [44, null, 44, 66, 120],
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    transition: "500ms ease",
    svg: {
      fontSize: ["15px", null, "15px", null, "22px", "35px"],
      color: ["secondary"],
    },
    "&:hover": {
      backgroundColor: "secondary",
      svg: {
        color: "#fff",
      },
    },
  },
};
