import { Container, Grid, Box, Flex, Heading, Text } from "theme-ui";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const data = [
  {
    id: 1,
    path: "/ovulation-calculator",
    title: "Ovulation Prediction Calculator",
    description: `Menstrual periods are different from woman to woman and month to month. Use this calculator to see when you may be ovulating to help find your most fertile days.`,
  },
  {
    id: 2,
    path: "/fertility-quotient-calculator",
    title: "Fertility Quotient Calculator",
    description: `Fertility quotient is an indicator of an individual’s capability to reproduce. Use this calculator to check your Fertility Quotient based on the AGE, BMI, AFC and AMH values.`,
  },
];

const Calculators = () => {
  return (
    <Box as="section" id="support" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          {data?.map((item) => (
            <Flex key={item.id} sx={styles.supportItem}>
              {/* <Flex as="figure" sx={styles.media}>
                <Image src={item?.icon} alt={item?.title} />
              </Flex> */}
              <Box sx={styles.content}>
                <Heading>
                  <Link href={item.path} target="_blank">
                    <a>
                      {item?.title} <BsArrowRight className="inline-flex" />
                    </a>
                  </Link>
                </Heading>
                <Text as="p">{item?.description}</Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Calculators;

const styles = {
  section: {
    pt: [9, null, null, 10, 11, 11, 11],
    pb: [7, null, null, 8, null, 9, 10],
  },
  grid: {
    gap: ["30px 30px"],
    justifyContent: "center",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      null,
      null,
      "repeat(2, 1fr)",
      null,
      "repeat(2, 540px)",
    ],
  },
  supportItem: {
    backgroundColor: "#F6F8FB",
    borderRadius: 7,
    flexDirection: ["column", null, null, null, null, "row"],
    alignItems: "flex-start",
    p: ["25px 25px 20px", null, null, null, "35px 30px", "45px 40px 50px"],
    transition: "0.3s ease-in-out 0s",
    ":hover": {
      backgroundColor: "white",
      boxShadow: "0px 15px 60px rgba(63, 90, 130, 0.12)",
    },
  },
  media: {
    alignItems: "center",
    mr: [6],
    mb: [5, null, null, null, null, 0],
    minWidth: [80],
    img: {
      maxWidth: [60, null, null, null, null, "100%"],
    },
  },
  content: {
    mt: ["-7px"],
    h2: {
      fontWeight: 700,
      fontSize: [2, null, null, null, 4],
      lineHeight: 1.5,
      color: "textSecondary",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    p: {
      fontSize: [1, null, null, null, 15],
      lineHeight: [2.13],
      color: "headingSecondary",
      mt: [3],
    },
    a: {
      textDecoration: "none",
      color: "inherit",
    },
  },
};
