import { Heading, Box, Text, Container, Grid } from "theme-ui";
import React from "react";
import SectionHeading from "components/section-heading";

const workflowData = [
  {
    id: 1,
    title: "Consultation",
    text: "Book an online / physical appointment with our fertility specialists from our website or call +919108910832",
  },
  {
    id: 2,
    title: "Sample Collection",
    text: "Our nurse will come to your home to collect your blood samples. Proper COVID-19 guidelines will be followed.",
  },
  {
    id: 3,
    title: "Analysis of Samples",
    text: "We will analyse the your blood samples received in our labs.",
  },
  {
    id: 4,
    title: "Planning & Treatment",
    text: "Our specialist will plan your treatment and you'll only be asked to visit the hospital for scans and actual procedures",
  },
];

const WorkFlow = () => {
  return (
    <Box as="section" sx={styles.workflow} id="how">
      <Container>
        <SectionHeading
          sx={styles.workflow.blockTitle}
          title="How IVF From Home Works ? "
        />

        <Grid gap="50px 54px" columns={4} sx={styles.workflow.grid}>
          {workflowData.map((item, index) => (
            <Box sx={styles.workflow.card} key={index}>
              <Box sx={styles.workflow.iconBox}>{`Step ${index + 1}`}</Box>
              <Box sx={styles.workflow.wrapper}>
                <Heading sx={styles.workflow.wrapper.title}>
                  {item.title}
                </Heading>
                <Text sx={styles.workflow.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkFlow;

const styles = {
  workflow: {
    position: "relative",
    pt: "100px",
    pb: "100px",
    "@media screen and (max-width: 1366px)": {
      pb: "100px",
    },
    "@media screen and (max-width: 992px)": {
      pb: "60px",
      paddingTop: "60px",
    },
    blockTitle: {
      marginBottom: [30, null, 55],
      textAlign: "center",
    },
    grid: {
      pt: 55,
      "@media screen and (max-width: 1366px)": {
        pt: 0,
      },
      "@media screen and (max-width: 1200px)": {
        gridGap: "50px 30px",
      },
      "@media screen and (max-width: 992px)": {
        gridTemplateColumns: "repeat(2,1fr)",
        gridGap: "50px 50px",
      },
      "@media screen and (max-width: 480px)": {
        gridTemplateColumns: "repeat(1,1fr)",
        gridGap: "35px 0",
      },
    },
    card: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      "&::before": {
        position: "absolute",
        content: '""',
        top: 0,
        left: 75,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: "center center",
        width: 215,
        height: 60,
        "@media screen and (max-width: 1366px)": {
          left: 75,
        },
        "@media screen and (max-width:1200px)": {
          display: "none",
        },
      },
      "&:nth-of-type(2n-1)::before": {
        backgroundImage: `url("https://res.cloudinary.com/garbhagudi/image/upload/v1633781759/garbhagudi-ivf/Icons/arrow-odd_tk9ujl.webp")`,
        ml: "25px",
      },
      "&:nth-of-type(2n)::before": {
        backgroundImage: `url("https://res.cloudinary.com/garbhagudi/image/upload/v1633781759/garbhagudi-ivf/Icons/arrow-even_b83vd5.webp")`,
        top: 17,
        ml: "25px",
      },
      "&:last-child::before": {
        display: "none",
      },
    },

    iconBox: {
      width: "120px",
      height: "50px",
      borderRadius: "20%",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      mb: 30,
      fontSize: 30,
      fontWeight: 700,
      justifyContent: "center",
      boxShadow: "0px 14px 20px rgba(76, 119, 171, 0.5)",
      "@media screen and (max-width: 560px)": {
        width: "120px",
        height: "50px",
        fontSize: 24,
        borderRadius: 20,
        mb: 25,
      },
      "@media screen and (max-width: 480px)": {
        mb: 20,
      },
    },
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      mt: "-5px",
      title: {
        fontSize: 22,
        color: "black",
        lineHeight: 1.55,
        fontWeight: 500,
        mb: "15px",
        "@media screen and (max-width: 1200px)": {
          fontSize: 20,
          lineHeight: 1.4,
        },
        "@media screen and (max-width: 480px)": {
          fontSize: "18px",
          lineHeight: 1.45,
          mb: "10px",
        },
      },
    },
  },
};
