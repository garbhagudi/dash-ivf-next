/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Box, Heading } from 'theme-ui';
import Link from 'next/link';
import Image from 'next/image';

export const WidgetAbout = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as='h4'>{title}</Heading>
      <ul>
        {items.map(({ url, label, icon }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            <a href={url} key={i}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export const WidgetInfo = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as='h4'>{title}</Heading>
      <ul>
        {items.map(({ to, label, icon }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            <Link href={to} key={i}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export const WidgetPages = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as='h4'>{title}</Heading>
      <ul>
        {items.map(({ to, label, icon }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            <Link href={to} key={i}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

const styles = {
  footerWidget: {
    h4: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px',
        },
      },
      a: {
        color: '#02073E',
        textDecoration: 'none',
      },
    },
  },
};
