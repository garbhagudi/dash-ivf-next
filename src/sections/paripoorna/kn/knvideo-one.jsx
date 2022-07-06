import React, { useState } from "react";
import { Container, Box, Heading } from "theme-ui";
import { Link } from "components/link";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import Image from "components/image";

const VideoOne = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <Box as="section" sx={styles.video}>
      <Container>
        <Heading as="h3" style={{ fontFamily: "'Noto Sans Kannada'" }}>
          ಪರಿಪೂರ್ಣ ಅವಲೋಕನ
        </Heading>
        <Box sx={styles.videoBox}>
          <Image
            src="https://res.cloudinary.com/garbhagudi/image/upload/v1638185192/garbhagudi-ivf/Images%20/you_thumbnail_ocegdx.webp"
            alt="testimonial video"
          />
          <Link
            path="/"
            aria-label="video btn"
            onClick={handleClick}
            sx={styles.videoBtn}
          >
            <FaPlay />
          </Link>
        </Box>
      </Container>
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="T4R5zcRNs_k"
        onClose={() => setVideoOpen(false)}
      />
    </Box>
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
      fontFamily: "kannadaHead",
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
