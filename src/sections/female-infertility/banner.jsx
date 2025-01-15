/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import MyModal from 'components/modal';

const Banner = () => {
  return (
    <section id='home' sx={styles.section}>
      <Container sx={styles.container}>
        <div sx={styles.content}>
          <SectionHeading
            sx={styles.heading}
            title='The journey begins when you take your first step'
          />
          <Flex sx={styles.buttonGroup}>
            <MyModal title='Get Started' />
          </Flex>
        </div>
        <Flex as='figure' sx={styles.illustration}>
          <Image
            src='https://res.cloudinary.com/garbhagudi/image/upload/c_scale,w_1280/v1637220770/garbhagudi-ivf/Banners/Young_married_couple_consulting_doctor_svxszn.webp'
            alt='banner'
            loading='lazy'
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: '#FFF',
    pt: [12, null, null, null, 10, 0],
    pb: [2, null, null, null, 10, 8],
    position: 'relative',
    zIndex: 0,
    '::before': {
      backgroundColor: 'white',
      content: `''`,
      position: 'absolute',
      height: [30, null, null, 70, 85, 120],
      bottom: 0,
      width: '100%',
      zIndex: -1,
    },
  },
  container: {
    minHeight: [null, null, null, null, null, '100vh'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  content: {
    maxWidth: [null, null, null, 570, 690],
    textAlign: 'center',
    marginTop: [18, null, null, 22, 120],
    h1: {
      color: 'white',
      fontSize: [7, null, null, 12, 14],
      lineHeight: 1.35,
    },
  },
  heading: {
    mb: [20],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 10],
      lineHeight: [1.33],
    },
    p: {
      fontSize: [3, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: [6, null, null, 6],
    position: 'relative',
    zIndex: 2,
    button: {
      a: {
        textDecoration: 'none',
        color: '#FFF',
      },
    },
  },
  btnOutlined: {
    borderColor: 'white',
    color: 'white',
    ml: 3,
    svg: {
      ml: 2,
    },
  },
  illustration: {
    transform: ['scale(1.1)', null, 'scale(1.20)', 'scale(1.20)'],
    alignItems: 'center',
    display: 'flex',
    marginTop: [2, null, null, -4, -5],
  },
};
