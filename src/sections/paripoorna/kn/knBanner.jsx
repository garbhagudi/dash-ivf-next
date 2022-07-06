/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Grid, Container, Button, Image, Text } from "theme-ui";
import SectionHeading from "components/section-heading-kn";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <SectionHeading
              sx={styles.heading}
              title="
              ಇದು ಸಂಪೂರ್ಣವಾದ ಸಂತೋಷದ ಋತು"
            />
            <Text as="p" style={{ fontFamily: "'Baloo Tamma 2'" }}>
              ಸಂತಾನೂತ್ಪತ್ತಿಯ ಚಿಕಿತ್ಸೆಗಳು ಅವಶ್ಯಕತೆ ಇರುವ ಎಲ್ಲಾ ದಂಪತಿಗಳಿಗೆ
              ದೊರೆಯಬೇಕೆಂಬ ಮಹಾದಾಸೆ ನಮ್ಮದು. ನಮ್ಮ ಅನುಭವದ ಪ್ರಕಾರ ಐವಿಎಫ್ ನ ನೂತನ
              ಚಿಕೆತ್ಸೆಯ ದರಗಳು ಎಲ್ಲಾ ಅವಶ್ಯಕ ದಂಪತಿಗಳು ಬರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. ಇದನ್ನು
              ಮನದಲ್ಲಿಕ್ಕೊಂಡು ಗರ್ಭಗುಡಿ ಐವಿಎಫ್ ಸೆಂಟರ್ ಗರ್ಭಜ್ಞಾನ ಫೌಂಡೇಶನ್ ಸಹ
              ಭಾಗಿತ್ವದಲ್ಲಿ ಪರಿಪೂರ್ಣ 2021 ಎಂಬ ಕಾರ್ಯಕ್ರಮವನ್ನು ಹಮ್ಮಿಕೊಂಡಿದ್ದೇವೆ.
              ಇದರ ಅಡಿಯಲ್ಲಿ{" "}
              <strong>ಶೇ 50% ರವರೆಗೆ ಐವಿಎಫ್ ಚಿಕೆತ್ಸೆಯಲ್ಲಿ ರಿಯಾಯಿತಿ </strong> ಪಡೆಯ
              ಬಹುದಾಗಿದೆ.
            </Text>
            <div sx={styles.buttonGroup}>
              <Button variant="secondary">
                <Link
                  to="/contact-us"
                  style={{ fontFamily: "'Noto Sans Kannada'" }}
                >
                  ಪ್ರಾರಂಭಿಸಿ
                </Link>
              </Button>
            </div>
          </Box>
          <Flex as="figure" sx={styles.illustration}>
            <Image
              src="https://res.cloudinary.com/garbhagudi/image/upload/c_fit,h_633,w_696/v1637325037/garbhagudi-ivf/Banners/papu_zjbyqe.png"
              alt="illustration"
            />
          </Flex>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    background: `linear-gradient(180deg, rgba(255, 254, 252, 0.5) 0%, #FEFAF5 100%)`,
    pt: [8, null, null, null, 10, 0],
    pb: [8, null, null, null, 10, 0],
  },
  container: {
    px: [3, null, null, 6],
  },
  grid: {
    alignItems: ["center"],
    gridTemplateColumns: ["1fr", null, null, null, "1fr 1fr"],
    minHeight: [null, null, null, null, "45vh", "100vh"],
    pt: [8, null, null, 12, 4],
  },
  content: {
    textAlign: ["center", null, null, null, "left"],
    heading: {
      h2: {
        color: "textSecondary",
        fontWeight: "bold",
        fontSize: [9, null, null, null, 12, 14, 15],
        lineHeight: [1.33, null, null, null, 1.36],
        letterSpacing: "heading",
      },
    },
    p: {
      color: "textSecondary",
      fontSize: [2, null, null, 3],
      lineHeight: 1.7,
      maxWidth: 480,
      mx: [null, null, null, "auto", "unset"],
      marginTop: [1, null, null, 3],
    },
  },
  buttonGroup: {
    mt: [6, null, null, null, 10],
    button: {
      minHeight: 45,
      px: ["17px", 4],
    },
    a: {
      textDecoration: "none",
      color: "white",
    },
    ".white": {
      boxShadow: "0px 4px 6px rgba(125, 128, 170, 0.08)",
      borderRadius: 5,
      fontWeight: 500,
      ml: 3,
    },
  },
  illustration: {
    transform: ["scale(1.1)", null, "scale(1.20)", "scale(1.2)"],
    maxWidth: [null, null, null, "80%", "none"],
    mx: [null, null, null, "auto", "unset"],
    mt: [6, null, null, null, 0],
    alignItems: "center",
  },
};
