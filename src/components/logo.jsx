/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path='/' sx={styles.logo} {...props}>
      <LogoSvg />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    fill: '#ea4b6a',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [200, null, '100%'],
    },
  },
};
