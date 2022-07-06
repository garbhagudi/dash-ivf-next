/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Flex, Box, Heading, Text, Image, Button } from "theme-ui";
// import ModalVideo from "react-modal-video";
// import { FaPlayCircle } from "react-icons/fa";

export default function Banner() {
  // const [videoOpen, setVideoOpen] = React.useState(false);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setVideoOpen(true);
  // };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Begin your journey towards parenthood from the comfort of your home.
          </Heading>
          <Text as="p" variant="heroSecondary">
            Easy, Secure & Private... <br /> Connect with our experts to have a
            quick consultation from home
          </Text>
          <Text as="p" variant="heroSecondary">
            No Extra Cost!!
          </Text>
          <Flex>
            <Button variant="whiteButton" aria-label="Get Started">
              <a
                href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                target="_blank"
                rel="noreferrer"
              >
                Get Started
              </a>
            </Button>
            {/* <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="bVNVbHEmDQI"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch Video
              </Button>
            </> */}
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image
            src="https://res.cloudinary.com/garbhagudi/image/upload/c_scale,h_700,w_800/v1634546628/garbhagudi-ivf/Banners/phonee_fgv31d.webp"
            alt="banner"
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ["hidden", "initial", null, "hidden"],
    backgroundImage: `url(https://res.cloudinary.com/garbhagudi/image/upload/v1634539905/garbhagudi-ivf/Banners/bannerBg_ua1mbj.png)`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "top left",
    backgroundSize: "cover",
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ["150px", null, null, null, null, null, "140px", "130px"],
    pb: ["100px", null, null, "110px", null, 10, "150px"],
    backgroundColor: "#62c3cb",
    container: {
      display: "flex",
    },
    contentBox: {
      width: ["100%", null, "85%", "55%", "50%", "55%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
      a: {
        textDecoration: "none",
        color: "secondary",
      },
    },
    imageBox: {
      display: ["none", null, null, "block"],
      justifyContent: "center",
      ml: [0, null, null, "-110px", "-115px", "-150px", "-210px", "-270px"],
      mr: [0, null, null, "-145px", "-160px", "-180px", "-220px", "-290px"],
      mt: [0, null, null, "40px", 4, 7, 10],
      mb: [0, null, null, "-150px", "-150px", "-150px", "-160px", "-200px"],
      overflow: "hidden",
      textAlign: "right",
      width: "100%",
    },
  },
};
