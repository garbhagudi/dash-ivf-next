import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider, Flex } from 'theme-ui';
import { useRouter } from 'next/router';
import theme from 'theme';
import '../styles/globals.css';
import '../styles/calendar.css';

const SalesIQ = dynamic(() => import('components/SalesIQ'), { ssr: false });
const FloatWhatsApp = dynamic(() => import('components/FloatWhatsapp'), {
  ssr: false,
});
const FloatPhone = dynamic(() => import('components/phoneFloat'), {
  ssr: false,
});
const Footer = dynamic(() => import('components/footer/footer'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showSalesIQ, setShowSalesIQ] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const TagManager = require('react-gtm-module');
      TagManager.initialize({ gtmId: 'GTM-NT9BZ69' });
    }
  }, []);

  useEffect(() => {
    if (router.pathname === '/ivf/treatment-cost') {
      setShowSalesIQ(false);
    } else {
      setShowSalesIQ(true);
    }
  }, [router.pathname]);

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
        <FloatWhatsApp condition={showSalesIQ} />
        <FloatPhone />
        <SalesIQ condition={showSalesIQ} />
        <Footer />
      </Flex>
    </ThemeProvider>
  );
}

export default MyApp;
