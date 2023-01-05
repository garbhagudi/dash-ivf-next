import React, { useEffect } from "react";
import { ThemeProvider, Flex } from "theme-ui";
import theme from "theme";
import "../styles/globals.css";
import "../styles/calendar.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";
import TagManager from "react-gtm-module";
import SalesIQ from "components/SalesIQ";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import FloatPhone from "components/phoneFloat";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-5T77DVZ" });
  }, []);
  return (
    <div>
      <Flex
        sx={{
          minHeight: "100vh",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <ThemeProvider theme={theme}>
          <Header />
          <main sx={{ variant: "layout.main" }}>
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
