import { Container, Grid, Box, Flex, Heading, Text } from "theme-ui";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const data = [
  {
    id: 1,
    path: "tools/ovulation-calculator",
    title: "Ovulation Prediction Calculator",
    description: `Menstrual periods are different from woman to woman and month to month. Use this calculator to see when you may be ovulating to help find your most fertile days.`,
  },
  {
    id: 2,
    path: "tools/fertility-quotient-calculator",
    title: "Fertility Quotient Calculator",
    description: `Fertility quotient is an indicator of an individual’s capability to reproduce. Use this calculator to check your Fertility Quotient based on the AGE, BMI, AFC and AMH values.`,
  },
];

const Calculators = () => {
  return (
    <div
      as="section"
      id="support"
      sx={styles.section}
      className="max-w-7xl mx-auto py-10"
    >
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 justify-center">
          {data?.map((item) => (
            <div
              key={item.id}
              className="bg-blue-200 rounded-lg p-6 flex items-start hover:bg-gray-100 transition duration-500"
            >
              <Link href={item.path} target="_blank">
                <div>
                  <div>
                    <div className="font-heading font-bold py-4 text-xl">
                      {item?.title}{" "}
                      <BsArrowRight className="inline-flex font-bold items-center justify-center" />
                    </div>
                  </div>
                  <div className="pb-4 text-base">{item?.description}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculators;

const styles = {
  section: {
    pt: [5, null, null, 5, 5, 5, 5],
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
