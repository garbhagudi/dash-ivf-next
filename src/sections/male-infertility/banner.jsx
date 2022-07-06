/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Box, Container, Button } from "theme-ui";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
import MyModal from "components/modal";

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Best Male Infertility Treatment in Bangalore."
            description="Book a Free Consultation Now!"
          />
          <Box as="figure" sx={styles.illustration}>
            <Box sx={styles.buttonWrapper}>
              <MyModal title="Get Started" />
            </Box>
            <LazyLoadImage
              src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780493/garbhagudi-ivf/Banners/maleInf_umubsg.webp"
              alt="illustration"
              style={{ marginTop: "30px" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    position: "relative",
    pt: [105, null, null, 140, 15, null, 140],
    pb: [8, null, null, 0],
    zIndex: 0,
    ":before": {
      backgroundColor: rgba("#FFF5ED", 0.5),
      content: ["none", null, null, `''`],
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 10],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  illustration: {
    display: ["block", null, null, "flex"],
    position: "relative",
    img: {
      display: ["block", null, null, "block"],
      maxWidth: ["90%"],
      m: ["0 auto"],
    },
  },
  buttonWrapper: {
    textAlign: ["center"],
    position: ["static", null, null, "absolute"],
    left: "50%",
    top: 0,
    transform: ["unset", null, null, "translateX(-50%)"],
    a: {
      textDecoration: "none",
      color: "#fff",
    },
  },
};
