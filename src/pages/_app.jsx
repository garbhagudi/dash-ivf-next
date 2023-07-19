import React, { useEffect } from 'react';
import { ThemeProvider, Flex } from 'theme-ui';
import theme from 'theme';
import '../styles/globals.css';
import '../styles/calendar.css';
import TagManager from 'react-gtm-module';
import SalesIQ from 'components/SalesIQ';
import Footer from 'components/footer/footer';
import FloatPhone from 'components/phoneFloat';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NT9BZ69' });
  }, []);
  return (
    <div>
      <Flex
        sx={{
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <ThemeProvider theme={theme}>
          {/* <Header /> */}
          <main sx={{ variant: 'layout.main' }}>
            <Component {...pageProps} />
          </main>
          <FloatPhone />
          <SalesIQ />
          <Footer />
        </ThemeProvider>
      </Flex>
    </div>
  );
}

export default MyApp;
