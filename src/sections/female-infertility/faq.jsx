/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';

const data = [
  {
    title: 'What is In Vitro Fertilization?',
    contents:
      "In cases where women have blocked or absent fallopian tubes or men have low sperm counts, In Vitro Fertilization (IVF) offers hope to couples who previously faced challenges in having a 'biologically related' child. This procedure can make parenthood possible.",
  },
  {
    title: 'Is In Vitro Fertilization Expensive?',
    contents:
      'Similar to other complex medical treatments, IVF involves highly skilled professionals, advanced laboratories, and equipment. Sometimes, multiple cycles may be necessary to achieve success. Therefore, it can be a significant investment.',
  },
  {
    title: 'Does In Vitro Fertilization Work?',
    contents:
      'Absolutely. From 1985 to 2017, there were 1,204,594 reported births resulting from Assisted Reproductive Technology procedures, including IVF. This demonstrates the effectiveness of IVF in helping couples achieve their dream of parenthood.',
  },
  {
    title: 'Do Insurance Plans Cover Infertility Treatment?',
    contents:
      "Coverage for infertility treatment varies depending on your location and the type of insurance plan you have. The extent of services covered may differ, so it's essential to check your specific insurance policy.",
  },
  {
    title: 'Why am I not responding to ovarian stimulation drugs?',
    contents:
      'The response to ovarian stimulation depends on several factors, such as the number of available eggs, hormone levels, proper medication administration, and lifestyle/environmental factors. Understanding these elements is key to addressing the issue.',
  },
  {
    title: 'Should we have genetic testing?',
    contents:
      'Preimplantation genetic testing (PGT) is a method where one or more cells are taken from an egg or fertilized embryo to assess its genetic makeup. This testing provides valuable insights into the genetic profile of the embryo and can be a crucial decision for some couples.',
  },
];

const Faq = () => {
  return (
    <section sx={styles.section} id='freq'>
      <Container>
        <Grid sx={styles.grid}>
          <Box as='figure' sx={styles.illustration}>
            <Image
              src='https://res.cloudinary.com/garbhagudi/image/upload/c_scale,w_800/v1634563067/garbhagudi-ivf/Images%20/3731957_yjmv2x.webp'
              alt='messenger'
              loading='lazy'
            />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title='Frequently Asked Questions'
            />
            <Text as='p'>
              Check out out FAQ section and feel free to contact us at{' '}
              <a href='tel:+919480940805'>+919480940805</a> or drop an E-mail at{' '}
              <a href='mailto:dreams@garbhagudi.com'>dreams@garbhagudi.com</a>{' '}
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
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
    p: {
      mt: '-40px',
      mb: '10px',
    },
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    mt: [8, null, null, null],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      Image: {
        mt: ['25px', null, null, '0'],
        height: ['500px', null, '500px', 'auto'],
        display: 'flex',
        marginLeft: ['0', null, null, null, 'auto'],
        marginRight: ['0', null, null, null, 'auto'],
        position: 'relative',
        top: [null, null, null, '-20px', '-45px', 'auto'],
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
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
