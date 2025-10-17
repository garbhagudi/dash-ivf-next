import dynamic from 'next/dynamic';
import { ThemeUIProvider, Flex } from 'theme-ui';
import theme from 'theme';
import '../styles/globals.css';
import { DM_Sans } from 'next/font/google';
import { useRouter } from 'next/router';

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  style: ['normal'],
});

// Dynamically load non-essential components
const SalesIQ = dynamic(() => import('components/SalesIQ'), {
  ssr: false,
  loading: () => null, // Optional loading state
});
const FloatPhone = dynamic(() => import('components/phoneFloat'), {
  ssr: false,
  loading: () => null,
});
const Footer = dynamic(() => import('components/footer/footer'), {
  ssr: false,
  loading: () => null,
});
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeUIProvider theme={theme}>
      <Flex
        sx={{
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Main component */}
        <main sx={{ variant: 'layout.main' }} className={dmSans.className}>
          <Component {...pageProps} />
        </main>

        {/* Defer loading of less critical components */}
        <FloatPhone />
        {router.pathname !== '/ivf/treatment-cost' && <SalesIQ />}
        <Footer />
      </Flex>
    </ThemeUIProvider>
  );
}

export default MyApp;
