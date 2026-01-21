// import dynamic from 'next/dynamic';
// import { ThemeUIProvider, Flex } from 'theme-ui';
// import theme from 'theme';
// import '../styles/globals.css';
// import { DM_Sans } from 'next/font/google';
// import { useRouter } from 'next/router';

// const dmSans = DM_Sans({
//   weight: ['400', '500', '600', '700', '800'],
//   subsets: ['latin'],
//   style: ['normal'],
// });

// // Dynamically load non-essential components
// const SalesIQ = dynamic(() => import('components/SalesIQ'), {
//   ssr: false,
//   // loading: () => null, // Optional loading state
// });
// const FloatPhone = dynamic(() => import('components/phoneFloat'), {
//   ssr: false,
//   // loading: () => null,
// });
// const Footer = dynamic(() => import('components/footer/footer'), {
//   ssr: false,
//   // loading: () => null,
// });
// function MyApp({ Component, pageProps }) {
//   const router = useRouter();

//   return (
//     <ThemeUIProvider theme={theme}>
//       <Flex
//         sx={{
//           minHeight: '100vh',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//         }}
//       >
//         {/* Main component */}
//         <main sx={{ variant: 'layout.main' }} className={dmSans.className}>
//           <Component {...pageProps} />
//         </main>

//         {/* Defer loading of less critical components */}
//         <FloatPhone />
//         {router.pathname !== '/ivf/treatment-cost' && <SalesIQ />}
//         <Footer />
//       </Flex>
//     </ThemeUIProvider>
//   );
// }

// export default MyApp;

import dynamic from 'next/dynamic';
import { ThemeUIProvider, Flex } from 'theme-ui';
import theme from 'theme';
import '../styles/globals.css';
import { DM_Sans } from 'next/font/google';
import { useRouter } from 'next/router';
import Script from 'next/script';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap', // Improves LCP by showing fallback font first
});

const SalesIQ = dynamic(() => import('components/SalesIQ'), { ssr: false });
const FloatPhone = dynamic(() => import('components/phoneFloat'), {
  ssr: false,
});
const Footer = dynamic(() => import('components/footer/footer'), {
  ssr: false,
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
        className={dmSans.className}
        data-viewport-dxr=''
        suppressHydrationWarning
      >
        <Script
          id='gtm'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NT9BZ69');
        `,
          }}
        />
        <main sx={{ variant: 'layout.main' }}>
          <Component {...pageProps} />
        </main>

        <FloatPhone />
        {router.pathname !== '/ivf/treatment-cost' && <SalesIQ />}
        <Footer />
      </Flex>
    </ThemeUIProvider>
  );
}

export default MyApp;
