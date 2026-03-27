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
          id='hotjar'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6671155,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
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
