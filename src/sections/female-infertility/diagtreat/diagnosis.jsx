/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "Ovulation testing",
    contents: (
      <div>
        A home testing kit to check to know the rise in luteinizing hormone (LH)
        when the female is most likely to be fertile or when the egg is about to
        release for fertilization. This is often used as an over-the-counter
        prediction kit to test for ovulation.
      </div>
    ),
  },
  {
    title: "Hysterosalpingography",
    contents: (
      <div>
        Hysterosalpingography is a type of x-ray where the contrast dye is
        injected into the uterus to obtain a clear view of the inside of the
        uterus to identify any underlying condition that could be causing
        infertility. This helps seek immediate evaluation and care if any
        problem is detected in a female’s uterus or fallopian tubes.
      </div>
    ),
  },
  {
    title: `Ovarian reserve testing`,
    contents: (
      <div>
        Ovarian reserve testing helps the clinician to predict how the ovaries
        can produce a good quality and quantity of egg and how well the ovaries
        are responding to hormonal signals from her brain, even including the
        women older the 35. This could include certain blood investigations or
        imaging studies.
      </div>
    ),
  },
  {
    title: `Other hormone testing.`,
    contents: (
      <div>
        Tests to check for adequate levels of hormones like FSH, oestradiol, LH,
        AMH, serum progesterone, prolactin, and androgen released by the thyroid
        gland and pituitary glands which control the reproductive processes.
      </div>
    ),
  },
  {
    title: `Imaging tests`,
    contents: (
      <div>
        As the fertility specialist may not be able to visualize the problem in
        the reproductive organ for the cause of infertility on the normal pelvic
        ultrasound, further imaging tests could be recommended. Most common
        imaging studies are sonohysterography or a hysteroscopy, which give
        clear look inside the uterus.
      </div>
    ),
  },
  {
    title: `Laparoscopy`,
    contents: (
      <div>
        Laparoscopy is a minimally invasive surgery where the fertility
        specialist insets a camera and instrument into the abdominal cavity with
        a small incision beneath the belly button to examine the reproductive
        organs and to fix the problem for infertility.
      </div>
    ),
  },
  {
    title: `Genetic testing`,
    contents: (
      <div>
        Genetic testing is a chemical database that helps to determine the DNA
        or a gene change that may cause infertility.
      </div>
    ),
  },
];
export default function Diagnosis() {
  return (
    <Box as="section" variant="section.faq" id="faq">
      <Container>
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
