/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Grid, Container, Button, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Link from 'next/link';
import MyModal from 'components/modal';

const Banner = () => {
  return (
    <section id='home' sx={styles.section}>
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <SectionHeading
              sx={styles.heading}
              title='Its the season of JOY of being Complete'
            />
            <Text as='p'>
              Our intention is to serve couple who are missing parenthood. With
              our experience, we know that not every couple can afford IVF. With
              this in mind, GarbhaGudi IVF Centre in association with GarbhaGnan
              Foundation, initiated a program called PARIPOORNA 2023 - 24. Under
              this programme, the couple can{' '}
              <strong>avail a flat ₹90,000 discount </strong>on cost of IVF
              treatment.
            </Text>
            <div className='mt-8'>
              <MyModal title={'Get Started'} />
            </div>
          </Box>
          <Flex as='figure' sx={styles.illustration}>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1699869285/paripoorna/Paripoorna_2023_Ver_Logo_Eng_bridnx.png'
              alt='illustration'
            />
          </Flex>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    background: `linear-gradient(180deg, rgba(255, 254, 252, 0.5) 0%, #FEFAF5 100%)`,
    pt: [8, null, null, null, 10, 0],
    pb: [8, null, null, null, 10, 0],
  },
  container: {
    px: [3, null, null, 6],
  },
  grid: {
    alignItems: ['center'],
    gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr'],
    minHeight: [null, null, null, null, '45vh', '100vh'],
    pt: [8, null, null, 12, 4],
  },
  content: {
    textAlign: ['center', null, null, null, 'left'],
    heading: {
      h2: {
        color: 'textSecondary',
        fontWeight: 'bold',
        fontSize: [9, null, null, null, 12, 14, 15],
        lineHeight: [1.33, null, null, null, 1.36],
        letterSpacing: 'heading',
      },
    },
    p: {
      color: 'textSecondary',
      fontSize: [1, null, null, 2],
      lineHeight: 1.7,
      maxWidth: 480,
      mx: [null, null, null, 'auto', 'unset'],
      marginTop: [1, null, null, 3],
    },
  },
  buttonGroup: {
    mt: [6, null, null, null, 10],
    button: {
      minHeight: 45,
      px: ['17px', 4],
    },
    a: {
      textDecoration: 'none',
      color: 'white',
    },
    '.white': {
      boxShadow: '0px 4px 6px rgba(125, 128, 170, 0.08)',
      borderRadius: 5,
      fontWeight: 500,
      ml: 3,
    },
  },
  illustration: {
    transform: ['scale(1.1)', null, 'scale(1.15)', 'scale(1.15)'],
    maxWidth: [null, null, null, '80%', 'none'],
    mx: [null, null, null, 'auto', 'unset'],
    mt: [6, null, null, null, 0],
    alignItems: 'center',
  },
};
