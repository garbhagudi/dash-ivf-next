import Header from 'components/header/header';
import dynamic from 'next/dynamic';
import RelatedSearches from 'sections/home/relatedSearches';

const Banner = dynamic(() => import('sections/home/banner'), { ssr: true });
const OtherServices = dynamic(() => import('sections/home/other-services'), {
  ssr: false,
});
const TeamSection = dynamic(() => import('sections/home/our-team'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('sections/home/testimonials'), {
  ssr: false,
});
const Cta = dynamic(() => import('sections/home/cta'), { ssr: false });
const Head = dynamic(() => import('next/head'));
const TreatmentOptions = dynamic(() => import('sections/home/treatment'), {
  ssr: false,
});
const Faq = dynamic(() => import('sections/home/faq'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India
        </title>
        <meta
          name='title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />

        {/* Open Graph / Facebook */}
        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi-ivf.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Load Google reCAPTCHA */}
        {/* <script
          src='https://www.google.com/recaptcha/api.js'
          async
          defer
        ></script> */}

        {/* Load Zoho Analytics */}
        {/* <script
          src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=61bba0cba3c8377c6a5dd6a5d5678a36b0c0af8489b97450a29344c095d7fdebgid17730c4e7d6442ffce68a431e6d754713eb2b12b9ac7777050f2773ec54ed2d2gid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a'
          async
        ></script> */}
      </Head>

      <Header />
      <Banner />
      <OtherServices />
      <TreatmentOptions branch='GarbhaGudi IVF Centre' />
      <TeamSection />
      <Faq />
      <Testimonials />
      <Cta />
      <RelatedSearches />
    </div>
  );
}
