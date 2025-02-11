import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider, Flex } from 'theme-ui';
import theme from 'theme';
import '../styles/globals.css';
import '../styles/calendar.css';
import FloatWhatsApp from 'components/FloatWhatsapp';

const SalesIQ = dynamic(() => import('components/SalesIQ'), { ssr: false });
const FloatPhone = dynamic(() => import('components/phoneFloat'), {
  ssr: false,
});
const Footer = dynamic(() => import('components/footer/footer'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
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
        <main sx={{ variant: 'layout.main' }}>
          <Component {...pageProps} />
        </main>
        <FloatWhatsApp />
        <FloatPhone />
        <SalesIQ />
        <Footer />
      </Flex>
    </ThemeProvider>
  );
}

export default MyApp;
