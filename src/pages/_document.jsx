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
        <link
          rel='preload'
          href='/fonts/DM-Sans.woff2'
          as='font'
          crossOrigin=''
        />
        <link rel='dns-prefetch' href='res.cloudinary.com' />
        <link rel='dns-prefetch' href='media.graphassets.com' />
      </Head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-NT9BZ69'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
