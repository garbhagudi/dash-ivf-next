/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs/";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { rgba } from "polished";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

const data = [
  {
    id: 1,
    tabTitle: "Treatment Options",
    title: `You are not fighting alone against infertility!`,
    description: `"GarbhaGudi provides an in-depth analysis of infertility issues and makes a tailored treatment protocol since every individual is unique."`,
    moreLink: "/online-consultation",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1633780860/garbhagudi-ivf/Images%20/treatment_wykcf3.webp",
    list: [
      "IVF",
      "IUI",
      "MACS",
      "Laparosccopy",
      "OPU/ET",
      "TESA/PESA",
      "ICSI",
      "Hyesteroscopy",
    ],
  },
  {
    id: 2,
    tabTitle: "Value Added Services",
    title: `Concerned about stepping out of your home during this Pandemic ?`,
    description: `Our value added service was started specially for patients seeking infertility treatment during the ongoing pandemic. The idea is to help you start IVF treatment right from the safety of your home and minimize travel risks.`,
    moreLink: "/ivf-from-home",
    image:
      "https://res.cloudinary.com/garbhagudi/image/upload/v1665994575/garbhagudi-ivf/New%20Website/IVF-From-Home-min_pz1yhy.webp",
    list: [
      "IVF from Home",
      "GarbhaGriha ",
      "Zero Cost EMI",
      "Paripoorna",
      "GG Care",
      "and more",
    ],
  },
];

const WhyUs = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Tabs sx={styles.tabs} animated={{ tabPane: true }}>
          {data?.map((item) => (
            <TabPane
              key={item.id}
              tab={<Heading as="h4">{item.tabTitle}</Heading>}
            >
              <Box>
                <Heading>{item.title}</Heading>
                <Text as="p" sx={styles.description}>
                  {item.description}
                </Text>
                <Box sx={styles.list}>
                  {item.list.map((item, i) => (
                    <Box key={i} className="list-item">
                      <RiCheckboxCircleFill
                        color="#3FDBB1"
                        size="20px"
                        sx={{ mr: 2 }}
                      />
                      <span>{item}</span>
                    </Box>
                  ))}
                </Box>
                <Box sx={styles.learnMore}>
                  <Link href={item.moreLink}>Explore more</Link>
                </Box>
              </Box>
              <Box sx={styles.illustration}>
                <LazyLoadImage src={item.image} alt="illustration" />
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default WhyUs;

const styles = {
  section: {
    backgroundColor: rgba("#bbd4ce", 0.3),
    pt: [7, null, null, 9],
    pb: [8, null, null, 9, null, 11],
  },
  tabs: {
    border: 0,
    ".rc-tabs-nav": {
      mb: [8, null, null, 9, 10, 9, 12],
    },
    ".rc-tabs-nav-wrap": {
      borderBottom: `1px solid ${rgba("#01070D", 0.1)}`,
      justifyContent: "center",
    },
    ".rc-tabs-nav-list": {
      flexGrow: 1,
      justifyContent: "space-evenly",
      pb: [3, null, null, 5, null, 6],
    },
    ".rc-tabs-tab-btn": {
      outline: 0,
      alignItems: "center",
      img: {
        outline: 0,
      },
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      // m: ['0 45px'],
      h4: {
        fontFamily: "body",
        fontSize: [2, null, null, 17, null, null, 5],
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: ["center", null, null, null, "left"],
        whiteSpace: ["break-spaces", null, null, null, "unset"],
      },
    },
    ".rc-tabs-tabpane": {
      display: ["flex", null, null, "grid"],
      flexDirection: ["column-reverse", null, null, "unset"],
      alignItems: "center",
      justifyContent: "center",
      gridTemplateColumns: [null, null, null, "0.9fr 1.1fr"],
      outline: 0,
      gap: [5, null, null, 11],
      h2: {
        color: "heading",
        fontSize: [24, null, null, 6, 26, 8, 40],
        fontWeight: 700,
        lineHeight: [1.45, null, null, 1.5],
        letterSpacing: [null, null, null, "0.5px", null, "-1px"],
        textAlign: ["center", null, null, "left"],
      },
      p: {
        color: "textSecondary",
        fontSize: [1, null, null, 2, 17],
        lineHeight: [1.87, null, null, 2, 2.48],
        textAlign: ["center", null, null, "left"],
        mt: [4],
      },
      ".list-item": {
        fontSize: [0, null, null, 1, 2],
        fontWeight: 500,
        lineHeight: [2.8],
        display: "flex",
        alignItems: "center",
      },
    },
  },
  list: {
    mt: [5],
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: ["repeat(2, 164px)", null, null, "repeat(2, 180px)"],
  },
  learnMore: {
    mt: [4],
    textAlign: ["center", null, null, "left"],
    a: {
      fontSize: [null, null, null, 1, 2],
      color: "link",
    },
  },
  illustration: {
    display: ["flex"],
    alignItems: "center",
    justifyContent: "center",
    textAlign: [null, null, null, null, null, "center"],
    img: {
      maxWidth: ["65%", null, null, "100%", null, "90%", "100%"],
    },
  },
};
