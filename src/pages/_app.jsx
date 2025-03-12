import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider, Flex } from 'theme-ui';
import theme from 'theme';
import '../styles/globals.css';
import '../styles/calendar.css';

// Dynamically load non-essential components
const FloatWhatsApp = dynamic(() => import('components/FloatWhatsapp'), {
  ssr: false, // Disable server-side rendering for non-critical components
});
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
    // Defer Google Tag Manager loading
    if (typeof window !== 'undefined') {
      const TagManager = require('react-gtm-module');
      TagManager.initialize({ gtmId: 'GTM-NT9BZ69' });
    }
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
        <main sx={{ variant: 'layout.main' }}>
          <Component {...pageProps} />
        </main>

        {/* Defer loading of less critical components */}
        <FloatWhatsApp />
        <FloatPhone />
        <SalesIQ />
        <Footer />
      </Flex>
    </ThemeProvider>
  );
}

export default MyApp;
