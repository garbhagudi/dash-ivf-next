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
        <title>Thank You – GarbhaGudi IVF Centre</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: thankYouCss }} />
      </Head>

      <div id="ty-root">
        <ThankYouNav />
        <ThankYouHero />
        <div className="divider" />
        <ThankYouSteps />
        <div className="divider" />
        <ThankYouWhatsAppStrip />
        <ThankYouVideos />
        <ThankYouFooter />
      </div>
    </>
  );
}
