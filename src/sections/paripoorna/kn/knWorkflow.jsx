/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text, Button } from "theme-ui";
import SectionHeading from "components/section-heading-kn";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "ಗರ್ಭಗುಡಿಗೆ ಭೇಟಿ ನೀಡಿ ",
    text: "ನಿಮ್ಮ ಆರಂಭಿಕ ಬಂಜೆತನ ತಪಾಸಣೆಗಾಗಿ ನಿಮ್ಮ ಹತ್ತಿರದ ಗರ್ಭಗುಡಿ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ.",
  },
  {
    id: 2,
    title: "ಸಮಾಲೋಚನೆ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ",
    text: "ರೋಗನಿರ್ಣಯಕ್ಕಾಗಿ ನಿಮ್ಮ ಆರಂಭಿಕ ಸಮಾಲೋಚನೆ ಮತ್ತು ಫಲವತ್ತತೆ ಸ್ಕ್ರೀನಿಂಗ್ ಮೂಲಕ ಹೋಗಿ.",
  },
  {
    id: 3,
    title: "ನೋಂದಾಯಿಸಿ ಮತ್ತು ಅನ್ವಯಿಸಿ ",
    text: "ಶಾಖೆಯಲ್ಲಿ ಒದಗಿಸಿದ ಫಾರ್ಮ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡುವ ಮೂಲಕ ಪರಿಪೂರ್ಣ ಯೋಜನೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ.",
  },
  {
    id: 4,
    title: "ನಿಮ್ಮ ಪ್ರಯೋಜನಗಳನ್ನು ಆನಂದಿಸಿ",
    text: "ಗರ್ಭಜ್ಞಾನ್ ಸಮಿತಿಯು ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ ಮತ್ತು ಸಂಬಂಧಿತ ರಿಯಾಯಿತಿಯನ್ನು ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ. ",
  },
];

export default function WorkFlow() {
  return (
    <section sx={{ variant: "section.workflow" }} id="workflow">
      <Container>
        <SectionHeading title="ಈ ಕೊಡುಗೆಯನ್ನು ಹೇಗೆ ಪಡೆಯುವುದು? " />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading
                  sx={styles.wrapper.heading}
                  style={{ fontFamily: "'Noto Sans Kannada'" }}
                >
                  {item.title}
                </Heading>
                <Text
                  sx={styles.wrapper.description}
                  style={{ fontFamily: "'Baloo Tamma 2'" }}
                >
                  {item.text}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
      <Box sx={styles.buttonWrapper}>
        <Button variant="secondary">
          <Link to="/contact-us" style={{ fontFamily: "'Noto Sans Kannada'" }}>
            ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ
          </Link>
        </Button>
      </Box>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 3],
    pb: [0, null, null, null, null, null, null, null, 5],
    mb: -1,
    gridGap: [
      "40px",
      "45px",
      "45px 30px",
      null,
      "60px 30px",
      "50px 40px",
      null,
      "75px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: ["column", null, null, "row"],
    textAlign: ["center", null, "left"],
    px: [0, 5, 0],
    mx: "auto",
  },

  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: [8, 9, null, null, 10, null, null, 11],
    fontWeight: 300,
    color: "heading",
    lineHeight: 1,
    letterSpacing: "heading",
    mr: ["auto", null, 0, 4, null, null, null, 5],
    ml: ["auto", null, 0],
    mt: [0, null, null, -1],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    description: {
      fontSize: [1, 2],
      fontWeight: "body",
      lineHeight: 1.9,
      pt: 2,
    },
    heading: {
      fontSize: [2, null, null, 4],
      fontWeight: "bold",
    },
  },
  buttonWrapper: {
    textAlign: ["center"],
    left: "50%",
    top: 0,
    mt: 10,
    a: {
      textDecoration: "none",
      color: "#fff",
    },
  },
};
