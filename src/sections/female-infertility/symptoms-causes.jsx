/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import FemaleInfCard from 'components/cards/femaleInf';

const data = [
  {
    id: 1,
    icon: 'https://res.cloudinary.com/garbhagudi/image/upload/v1637219312/garbhagudi-ivf/Icons/ovary_hrqblu.png',
    title: 'Ovulation Factors',
    description: `It is one of the most common factors, which can cause female infertility due to imbalanced ovarian hormonal function due to PCOS/PCOD which lead to infertility condition such as anovulation and oligo-ovulation.`,
  },
  {
    id: 2,
    icon: 'https://res.cloudinary.com/garbhagudi/image/upload/v1637219312/garbhagudi-ivf/Icons/uterus_1_hl8jsd.png',
    title: 'Fallopian Tube damage & blockage',
    description: ` Fallopian tubes may be blocked due to pelvic infection, polyp in the uterus, or benign tumours on the uterine wall.  This blockage prevents the sperm to fertilize the egg causing tubal factor infertility.`,
  },
  {
    id: 3,
    icon: 'https://res.cloudinary.com/garbhagudi/image/upload/v1637219312/garbhagudi-ivf/Icons/uterus_2_bmdhh3.png',
    title: 'Uterine & Cervical factors',
    description: `Uterine or cervical factor infertility is a condition where the passage of sperm is obstructed and the sperm cannot swim through the cervical mucosa usually due to abnormal consistency of the cervical mucus and at times due to presence of anti-sperm antibodies which prevent the sperm to fertilize the egg and cause infertility.`,
  },
  {
    id: 4,
    icon: 'https://res.cloudinary.com/garbhagudi/image/upload/c_crop,h_600,w_600,z_1.5/v1637219793/garbhagudi-ivf/Icons/png_desi_je2vgv.png',
    title: 'Endometriosis',
    description: `Endometriosis is an often painful disorder in which tissue similar to the tissue that normally lines the inside of your uterus — the endometrium — grows outside your uterus. Endometriosis most commonly involves your ovaries, fallopian tubes and the tissue lining your pelvis.`,
  },
  {
    id: 5,
    icon: 'https://res.cloudinary.com/garbhagudi/image/upload/v1637219620/garbhagudi-ivf/Icons/menopause_eizqjp.png',
    title: 'Ovarian failure and early menopause',
    description: `Menopause is a condition where the female ovaries are no longer able to produce adequate amount of oestrogen hormone which releases an egg every month.  Early menopause is a condition where the woman stops ovulating before the age of 40.`,
  },
  {
    id: 6,
    icon: 'https://res.cloudinary.com/garbhagudi/image/upload/v1637219312/garbhagudi-ivf/Icons/ribbon_eygqon.png',
    title: 'Cancer and its treatment',
    description: `Certain types of cancer need both radiation and chemotherapy which kills the rapid dividing of cancer cells and damage the reproductive organs thus causing infertility.`,
  },
];

const UsefulFeatures = () => {
  return (
    <Box
      as='section'
      id='causes-and-symptoms'
      variant='section.usefulFeatures'
      className='scroll-m-24'
    >
      <Container>
        <SectionHeading
          sx={styles.heading}
          title='Causes &amp; Symptoms for Female Infertility'
          description='There are several factors responsible for female infertility. They are usually divided into ovarian, tubal and uterine factors like cervical and  vaginal abnormalities'
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <FemaleInfCard key={item.id} data={item} className='feature-item' />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UsefulFeatures;

const styles = {
  heading: {
    pt: [7, null, null, 9],
    pb: [8, null, null, 9, null, 8],
    marginBottom: [6, null, null, 8],
    maxWidth: ['none', null, null, 565, null, 'none'],
    p: {
      maxWidth: '700px',
      fontSize: [3, null, null, 3],
    },
  },
  features: {
    gap: 60,
    display: ['grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'],
    '.feature-item': {
      display: ['block', 'block', 'block', 'block', 'flex'],
      px: ['15px', 0],
      maxWidth: ['none'],
      figure: {
        minWidth: '90px',
        m: [
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 26px 0 0',
        ],
      },
    },
  },
};
