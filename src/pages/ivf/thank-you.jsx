import Head from 'next/head';
import { thankYouCss } from 'sections/thank-you/styles';
import ThankYouNav from 'sections/thank-you/nav';
import ThankYouHero from 'sections/thank-you/hero';
import ThankYouSteps from 'sections/thank-you/steps';
import ThankYouWhatsAppStrip from 'sections/thank-you/whatsapp-strip';
import ThankYouVideos from 'sections/thank-you/videos';
import ThankYouFooter from 'sections/thank-you/footer';

export default function ThankYouPage() {
  return (
    <>
      <Head>
        <script
          key='gtm'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NT9BZ69');`,
          }}
        />
        <title>Thank You – GarbhaGudi IVF Centre</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='noindex, nofollow' />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap'
          rel='stylesheet'
        />
        <style dangerouslySetInnerHTML={{ __html: thankYouCss }} />
      </Head>

      <div id='ty-root'>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-NT9BZ69'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThankYouNav />
        <ThankYouHero />
        <div className='divider' />
        <ThankYouSteps />
        <div className='divider' />
        <ThankYouWhatsAppStrip />
        <ThankYouVideos />
        <ThankYouFooter />
      </div>
    </>
  );
}
