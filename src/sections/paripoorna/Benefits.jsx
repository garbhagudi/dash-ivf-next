/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image as Img, Text } from "theme-ui";
import SectionHeading from "components/section-heading";

const Benefits = () => {
  return (
    <section sx={styles.section} id="benefits">
      <Container>
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Img
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1672910543/Misc/4_Extended_Offer-Kan_9-16-min_h91vfc.webp"
              alt="benefits"
              className="rounded-xl my-4"
            />
          </Flex>
          <Box>
            <SectionHeading
              sx={styles.heading}
              title="Avail the benefits of paripoorna and turn your dream of parenthood into reality"
            />
            <Text>
              The word ‘PARIPOORNA’ means fulfilment. GarbhaGudi under Dr Asha’s
              medical supervision, is trying to fulfil the dreams of many of
              couples in achieving their parenthood. <br />
              <br />
              Paripoorna is an initiative of GarbhaGudi IVF Centre and is being
              done in association with GarbhaGnan Foundation. It is a special
              benefit plan for patients who want to go in for fertility
              treatment, but are unable to bear the costs. It is applicable to a
              limited number of couples and is based on their eligibility.{" "}
              <br /> <br />
              Due to the financial challenges, a couple dreaming of having a
              baby through IVF gets shattered. Hence, GarbhaGudi IVF Centre is
              leveraging a special discount on IVF procedures. This unique offer
              is brought to you by the GarbhaGnan Foundation, a unit of
              GarbhaGudi. <br />
              <br />
              Under Paripoorna program, waiver on IVF treatment will be on the
              eligibility of the couples. A couple who needs support can apply
              to the program. GarbhaGnan foundation will check their eligibility
              and select the patient as per their discretion, with no compromise
              on quality for the treatment. <br />
              <br />A humble CSR initiative of GarbhaGudi IVF Centre and
              GarbhaGnan Foundation. It provides substantial discount on IVF
              treatment to couples who are unable to bear the treatment costs.
              It is termed “Paripoorna”.
            </Text>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Benefits;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 8],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ["flex", null, null, "grid"],
    flexDirection: ["column-reverse", null, null, "unset"],
    alignItems: ["start", null, null, "start", "start", "center"],
    gap: [null, null, null, 6, null, 14],
    gridTemplateColumns: ["1fr", null, null, "repeat(2, 1fr)", "445px 500px"],
    justifyContent: "start",
  },
  illustration: {
    alignItems: "center",
    mt: [8, null, null, 8, 6, 0],
    img: {
      transform: ["scale(1.1)", null, null, null, null, "scale(1.3)"],
    },
  },
  heading: {
    textAlign: ["center", null, null, "left"],
    h2: {
      fontSize: [3, null, null, 6, 10, 8],
      lineHeight: 1.2,
    },
    p: {
      lineHeight: 1.5,
    },
  },
  buttonGroup: {
    alignItems: "center",
    justifyContent: ["center", null, null, "unset"],
    mt: [4, null, null, 10],
    img: {
      maxWidth: ["120px", null, null, "none"],
    },
  },
};
