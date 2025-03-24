import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider, Flex } from 'theme-ui';
import theme from 'theme';
import '../styles/globals.css';
import '../styles/calendar.css';
import { DM_Sans } from 'next/font/google';

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
  useEffect(() => {
    // Defer Google Tag Manager loading after the initial page load
    const loadGoogleTagManager = () => {
      if (typeof window !== 'undefined') {
        const TagManager = require('react-gtm-module');
        TagManager.initialize({ gtmId: 'GTM-NT9BZ69' });
      }
    };

    // Load Google Tag Manager after the page is loaded
    window.addEventListener('load', loadGoogleTagManager);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('load', loadGoogleTagManager);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
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
        <SalesIQ />
        <Footer />
      </Flex>
    </ThemeProvider>
  );
}

export default MyApp;
