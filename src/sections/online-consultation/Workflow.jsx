/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text, Button } from "theme-ui";
import SectionHeading from "components/section-heading";

const data = [
  {
    id: 1,
    title: "Select Location ",
    text: "Choose the location and the specialist best suitable for you",
  },
  {
    id: 2,
    title: "Select Timings",
    text: "Choose the most confortable timings for you.",
  },
  {
    id: 3,
    title: "Book Appointment",
    text: "Book an appointment by making the payment ",
  },
];

export default function WorkFlow() {
  return (
    <section sx={{ variant: "section.workflow" }} id="how">
      <Container>
        <SectionHeading title="Let’s see how it works" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading>{item.title}</Heading>
                <Text sx={styles.wrapper.description}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
      <Box sx={styles.buttonWrapper}>
        <Button variant="secondary">
          <a
            href="https://consult.bestdocapp.com/home/GARBHAGUDI"
            target="_blank"
            rel="noreferrer"
          >
            Book an Online Appointment
          </a>
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
      "repeat(3,1fr)",
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
    fontFamily: "DM Sans",
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
