/** @jsxRuntime classic **/
/** @jsx jsx **/
import { jsx } from 'theme-ui';
import { Text, Heading, Box } from 'theme-ui';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';

export default function TeamCard({ src, altText, title, designation }) {
  return (
    <Link href='/contact-us'>
      <Box sx={styles.card}>
        <LazyLoadImage src={src} alt={altText} sx={styles.memberThumb} />
        <Box sx={styles.infoWrapper}>
          <Heading className='info__name' sx={styles.infoWrapper.name}>
            {title}
          </Heading>
          <Text
            className='info__designation'
            sx={styles.infoWrapper.designation}
          >
            {designation}
          </Text>
        </Box>
      </Box>
    </Link>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'secondary',
      },
      '.info__designation': {
        color: 'secondary',
      },
    },
  },

  memberThumb: {
    width: ['70px', '80px', '100px', null, null, '130px'],
    height: ['70px', '80px', '100px', null, null, '130px'],
    flexShrink: 0,
    border: '2px solid',
    borderColor: 'secondary',
    borderRadius: '50%',
  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 2],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
      mb: 1,
    },
    designation: {
      fontSize: ['14px', null, null, 2],
      fontWeight: 'body',
      lineHeight: 'heading',
      color: 'text',
      transition: 'color 0.25s',
    },
  },
};
