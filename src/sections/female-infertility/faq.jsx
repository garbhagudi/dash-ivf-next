/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Image, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";

const data = [
  {
    title: "What is In Vitro Fertilization? ",
    contents: (
      <div>
        In infertile couples where women have blocked or absent fallopian tubes,
        or where men have low sperm counts, in vitro fertilization (IVF) offers
        a chance of parenthood to couples who until recently would had no hope
        of having a &quot;biologically related&quot; child....
      </div>
    ),
  },
  {
    title: "Is In Vitro Fertilization Expensive?",
    contents: (
      <div>
        Like other extremely delicate medical procedures, IVF involves highly
        trained professionals with sophisticated laboratories and equipment, and
        the cycle may need to be repeated to be successful...
      </div>
    ),
  },
  {
    title: `Does In Vitro Fertilization Work?`,
    contents: (
      <div>
        Yes. Since 1985, when we began counting, through 2017, 1,204,594 babies
        have been born in the United States as a result of reported Assisted
        Reproductive Technology procedures (IVF, GIFT, ZIFT, and combination
        procedures).
      </div>
    ),
  },
  {
    title: `Do Insurance Plans Cover Infertility Treatment?`,
    contents: (
      <div>
        The degree of services covered depends on where you live and the type of
        insurance plan you have...
      </div>
    ),
  },
  {
    title: `Why am I not responding to the drugs for ovarian stimulation?`,
    contents: (
      <div>
        A response to ovarian stimulation depends on a number of different
        factors, the most important include available eggs, appropriate hormone
        levels, proper administration of any medications and
        lifestyle/environmental factors...
      </div>
    ),
  },
  {
    title: `Should we have genetic testing?`,
    contents: (
      <div>
        Preimplantation genetic testing (PGT) is a technique in which one or
        more cells is taken from an egg or embryo (fertilized egg) for testing
        to provide information about the genetic make-up of the rest of the
        cells in that embryo...
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section sx={styles.section} id="freq">
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image
              src="https://res.cloudinary.com/garbhagudi/image/upload/c_scale,w_800/v1634563067/garbhagudi-ivf/Images%20/3731957_yjmv2x.webp"
              alt="messenger"
            />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Frequently Asked Questions"
            />
            <Text as="p">
              Check out out FAQ section and feel free to contact us at{" "}
              <a href="tel:+919108910832">+919108910832</a> or drop an E-mail at{" "}
              <a href="mailto:dreams@garbhagudi.com">dreams@garbhagudi.com</a>{" "}
              and we will get back to you as soon as possible
            </Text>
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: "center",
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      null,
      "1fr 431px",
      "1fr 530px",
      "1fr 550px",
    ],
    p: {
      mt: "-40px",
      mb: "10px",
    },
  },
  heading: {
    textAlign: ["left", null, null, "center", "left"],
    ml: [null, null, null, "auto"],
    mt: [8, null, null, null],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
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
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, "0 auto", "unset"],
    maxWidth: [null, null, null, 600, "none"],
  },
};
