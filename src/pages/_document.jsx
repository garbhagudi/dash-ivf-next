import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      {/* <Head> */}
      {/* Google Tag Manager */}
      {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NT9BZ69');`,
          }}
        /> */}
      {/* End Google Tag Manager */}
      {/* </Head> */}
      <Head>
        <link rel='dns-prefetch' href='https://res.cloudinary.com' />
        <link rel='dns-prefetch' href='https://media.graphassets.com' />
        {/* Zoho SalesIQ: widget loader + API (CORS) and its static float JS/CSS. */}
        <link rel='preconnect' href='https://salesiq.zohopublic.com' />
        <link
          rel='preconnect'
          href='https://salesiq.zohopublic.com'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://static.zohocdn.com' />
      </Head>

      <body>
        {/*
          GTM (JS) lives in `_app.jsx`. Omitting the noscript iframe avoids an extra
          third‑party request and duplicate container for users with JavaScript enabled
          (including Lighthouse).
        */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
