import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Advantages = () => {
  return (
    <Box sx={styles.boostAgencies} id="adv">
      <Container>
        <Box sx={styles.row}>
          <Flex sx={styles.col}>
            <Box sx={styles.content}>
              <Box sx={styles.titleBox}>
                <Heading as="h3">
                  Skip the travel! <br />
                  Opt for an online consultation
                </Heading>
                <Text as="p">Benefits of Online Consultation</Text>
              </Box>
              <Box as="ul" sx={styles.list}>
                <Text as="li">
                  <IoIosCheckmarkCircle />
                  Consultation from the comfort of your home
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle />
                  Flexibility of choosing your convenient time
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle />
                  Option of selecting the specialist of your choice
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle />
                  Reduced travel needs
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle />
                  No extra cost on consultation
                </Text>
                <Text as="li">
                  <IoIosCheckmarkCircle />
                  Security and privacy
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex sx={styles.col}>
            <Image
              src="https://res.cloudinary.com/garbhagudi/image/upload/c_scale,h_707,r_0,w_633/v1634539273/garbhagudi-ivf/Images%20/3720926_pmvypv.webp"
              alt="online-consultation"
            />
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Advantages;

const styles = {
  boostAgencies: {
    pt: ["70px", null, null, "80px", "120px", null, "50px"],
    backgroundColor: "#e4fefe",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: ["column", null, null, "row-reverse"],
  },
  col: {
    flex: ["0 0 100%", null, null, "0 0 50%"],
    Image: {
      mt: ["25px", null, null, "0"],
      height: ["500px", null, "500px", "auto"],
      display: "flex",
      marginLeft: ["0", null, null, null, "auto"],
      marginRight: ["0", null, null, null, "auto"],
      position: "relative",
      top: [null, null, null, "-20px", "-45px", "auto"],
    },
  },

  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    ml: ["25px", null, null, "0"],
    mb: ["10px"],
    mt: ["30px"],
    li: {
      display: "flex",
      alignItems: "center",
      justifyContent: ["flex-start", null, null, null, null, "flex-start"],
      fontSize: [1, null, 2, null, "18px"],
      color: "text_secondary",
      lineHeight: [2.56],
      svg: {
        width: [17, null, null, 23],
        height: [17, null, null, 23],
        color: "#DADADA",
        borderRadius: "50%",
        marginRight: ["10px"],
      },
    },
  },
  titleBox: {
    textAlign: ["center", null, null, "left"],
    h3: {
      color: "black",
      fontSize: [5, null, null, "21px", "36px", "32px", 8],
      lineHeight: [1.6, null, null, "1.5"],
      fontWeight: "bold",
      letterSpacing: ["-0.5px", null, null, null, null, null, "-1.5px"],
    },
    p: {
      fontSize: [0, null, 2, null, "17px"],
      color: "text_secondary",
      opacity: ".6",
      lineHeight: ["26px", null, null, 1.8, null, 2.06],
      padding: ["0 20px", null, null, "0"],
      mt: ["15px"],
    },
  },
  link: {
    color: "primary",
    fontSize: [1, null, 2],
    display: "inline-block",
    verticalAlign: "middle",
    fontWeight: "bold",
    pl: ["30px", null, null, "4px", null, "4px"],
    mt: ["5px", null, null, null, "10px"],
    svg: {
      position: "relative",
      top: "3px",
    },
  },
  content: {
    width: "100%",
    textAlign: ["left", null, null, null, "left"],
    pt: [null, null, null, null, null, "50px"],
    pl: [null, null, null, null, null, "60px", "140px"],
  },
};
