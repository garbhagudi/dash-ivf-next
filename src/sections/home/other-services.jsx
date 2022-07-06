/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";

const data = [
  {
    id: 2,
    icon: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780927/garbhagudi-ivf/Icons/service4_jnvjwo.webp",
    title: "Top Fertility Specialists",
    description: `Our team consists of the many qualified doctors, with a proven track record in dealing with the most challenging of cases.`,
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780927/garbhagudi-ivf/Icons/service7_xwcnxd.webp",
    title: "High Success Rates",
    description: `GarbhaGudi constantly achieves highest IVF success rates in the country.`,
  },
  {
    id: 6,
    icon: "https://res.cloudinary.com/garbhagudi/image/upload/v1633780927/garbhagudi-ivf/Icons/service5_fsjldj.webp",
    title: "Treatment Standards",
    description: `Recognized as the most reputed IVF centre in India due to its exceptional quality of treatments and holistic approach.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section} id="why-us">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What makes GarbhaGudi special?"
          description="GarbhaGudi is known for its top-class treatment at affordable costs and unparalled success rates."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: "10px auto 0",
    },
  },
  contentWrapper: {
    gap: ["30px 30px", "30px 30px", "30px 30px", "80px 30px"],
    display: "grid",
    justifyContent: ["center", "center", "center", "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
