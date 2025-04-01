import React from 'react';
import CallToAction from 'sections/home/subscribe-us';
import MyModal from 'components/modal';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Head from 'next/head';
import Popup from 'components/Popup';

const Ivf = () => {
  function addReviewJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "In-vitro Fertilization (IVF)",
          "image": "https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm",
          "description": "What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).",
          "brand": {
            "@type": "Brand",
            "name": "Garbha Gudi"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "604"
          }
        }`,
    };
  }

  function addBreadcrumbsJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": "1",
              "name": "HOME",
              "item": "https://www.garbhagudi.com/"
            },
            {
              "@type": "ListItem",
              "position": "2",
              "name": "treatments",
              "item": "https://www.garbhagudi.com/treatments/"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "In-vitro Fertilization (IVF)",
              "item": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf"
            }
          ]
        }`,
    };
  }

  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Service",
        "name": "In-vitro Fertilization (IVF)",
        "image": "https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm",
        "description": "What is IVF and how does it work ? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).",
        "offers": {
        "@type": "AggregateOffer",
        "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf",
        "priceCurrency": "INR",
        "lowPrice": "90000",
        "highPrice": "220000"
        },
        "aggregateRating": {
        "@type": "AggregateRating",
          "itemReviewed": {
          "@type": "Hospital",
          "image": "https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg",
          "name": "Garbha Gudi",
          "telephone": "+91 9480 9480 05",
          "priceRange": "90000 - 280000"
          }
        }
      }`,
    };
  }

  function addHowToJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "HowTo",
        "name": "How do you prepare for IVF?",
        "description": "Various screening procedures have to be done before beginning an IVF cycle",
        "image": "https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm",
        "totalTime": "PT5M",
        "step": [
          {
            "@type": "HowToStep",
            "text": "The process of IVF begins with fertility medications and hormones, which are given to the woman for about 10 – 12 days to stimulate the growth of multiple eggs in the ovary. Transvaginal ultrasound scans and hormone analysis is done to know the status of growing eggs.",
            "name": "Ovulation induction",
            "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf#:~:text=may%20be%20required.-,Ovulation%20induction,-The%20process%20of"
          },
          {
            "@type": "HowToStep",
            "text": "Egg retrieval is done 34 to 36 hours after the final trigger injection and before ovulation.",
            "name": "Egg retrieval",
            "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf#:~:text=hormones%20being%20injected.-,Egg%20retrieval,-Egg%20retrieval%20is"
          },
          {
            "@type": "HowToStep",
            "text": "The male counterpart is asked to produce a sample of semen by ejaculating. The sperms and eggs are put together in a dish and stored in the laboratory in a controlled environment to encourage fertilization.",
            "name": "Fertilization",
            "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf#:~:text=fertilize%20the%20eggs.-,Fertilization,-The%20male%20counterpart"
          },
          {
            "@type": "HowToStep",
            "text": "The embryos are usually transferred into the woman’s uterus three to five days after egg retrieval and fertilization.",
            "name": "Embryo Transfer",
            "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf#:~:text=IVF%20cycles%20failed.-,Embryo%20Transfer,-The%20embryos%20are"
          },
          {
            "@type": "HowToStep",
            "text": "In an IVF cycle, one or more embryos develop and these embryos are usually frozen for later use.",
            "name": "Frozen Embryo transfer",
            "url": "Frozen Embryo transfer"
          },
          {
            "@type": "HowToStep",
            "text": "There may be a slight discomfort after the embryo transfer, normal daily activities can be resumed.",
            "name": "After the Embryo Transfer procedure",
            "url": "After the Embryo Transfer procedure"
          }
        ]
      }`,
    };
  }
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>In-vitro Fertilization - IVF | GarbhaGudi</title>
        <meta
          name='title'
          content='In-vitro Fertilization - IVF | GarbhaGudi'
        />
        <meta
          name='description'
          content='What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).'
        />

        {/* Ld+JSON Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addReviewJsonLd()}
          key='review-jsonld'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addProductJsonLd()}
          key='product-jsonld'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
          key='breadcrumbs-jsonld'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addHowToJsonLd()}
          key='howto-jsonld'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='In-vitro Fertilization - IVF | GarbhaGudi'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi-ivf.com' />
        <meta
          property='og:description'
          content='What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='In-vitro Fertilization - IVF | GarbhaGudi'
        />
        <meta
          name='twitter:description'
          content='What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).'
        />
        <meta
          name='twitter:image'
          content='https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm'
        />
      </Head>
      <div className='mx-auto py-12'>
        <main>
          {/* Hero section */}
          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <div className='relative overflow-hidden rounded-2xl shadow-xl'>
                <div className='absolute inset-0'>
                  <img
                    className='h-full w-full object-cover'
                    src='https://res.cloudinary.com/garbhagudi/image/upload/v1667805636/garbhagudi-ivf/New%20Website/Start_IVF_Journey-min_fkc1xs.jpg'
                    alt='Start IVF Journey'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-brandPink4 to-brandPurple2 mix-blend-multiply' />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32'>
                  <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                    <span className='block text-white'>Start your Journey</span>
                    <span className='block text-indigo-200'></span>
                  </h1>
                  <p className='mx-auto mt-6 max-w-lg text-center text-xl font-semibold text-white sm:max-w-3xl'>
                    Begin your journey towards happiness with a visit to
                    GarbhaGudi
                  </p>
                  <div className='mx-auto mt-10 flex justify-center'>
                    <div className='mx-auto'>
                      <div>
                        <Popup
                          title={'Get Started'}
                          btnClassName='rounded-md bg-brandPink px-6 py-4 font-semibold text-white focus:outline-none'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Alternating Feature Sections */}
          <div className='relative overflow-hidden pb-32 pt-16'>
            <div
              aria-hidden='true'
              className='absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100'
            />
            <div className='relative'>
              <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
                <div className='mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-16'>
                  <div>
                    <div className='mt-6'>
                      <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                        What is IVF?
                      </h2>
                      <div className='mt-4 pb-10 text-lg text-gray-900'>
                        Today, in vitro fertilization (IVF) is practically a
                        household word. But not so long ago, it was a mysterious
                        procedure for infertility that produced what were then
                        known as &quot;test-tube babies.&quot; Louise Brown,
                        born in England in 1978, was the first such baby to be
                        conceived outside her mother&apos;s womb.{' '}
                        <p className='mt-4'>
                          Unlike the simpler process of artificial insemination
                          IVF involves combining eggs and sperm outside the body
                          in a laboratory. Once an embryo or embryos form, they
                          are placed in the uterus. IVF is a complex and
                          expensive procedure; only about 5% of couples with
                          infertility seek it out.
                        </p>
                      </div>
                      <div className='mt-6'>
                        <a
                          href='#know-more'
                          className='inline-flex rounded-md border border-transparent bg-gradient-to-r from-brandPink4 to-brandPurple bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-brandPink hover:to-brandPurpleDark'
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-12 sm:mt-16 lg:mt-0'>
                  <div className='px-2 sm:px-0 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:-mr-48 lg:h-full lg:px-0 lg:pl-4'>
                    <img
                      className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                      src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1671177124/Misc/PNG_25_yoa08y.webp'
                      alt='Inbox user interface'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-24'>
              <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8'>
                <div className='mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-32'>
                  <div>
                    <div className='mt-6'>
                      <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                        When is IVF Recommended?
                      </h2>
                      <div className='mt-4 text-lg text-gray-900'>
                        <ul className='list-inside list-disc'>
                          <li>Blocked or defects in fallopian tubes</li>
                          <li>Ovulation disorder</li>
                          <li>Premature ovarian failure</li>
                          <li>Endometriosis</li>
                          <li>Uterine fibroids</li>
                          <li>Individuals with a genetic disorder</li>
                          <li>Male factor infertility</li>
                          <li>
                            Fertility preservation for cancer or other health
                            conditions
                          </li>
                        </ul>
                      </div>
                      <div className='mt-6'>
                        <a
                          href='#know-more'
                          className='inline-flex rounded-md border border-transparent bg-gradient-to-r from-brandPink4 to-brandPurple bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-brandPink hover:to-brandPurpleDark'
                        >
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-0'>
                  <div className='px-2 sm:px-0 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:-ml-48 lg:h-full lg:px-0 lg:pr-4'>
                    <img
                      className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none lg:px-28'
                      src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1671190677/Misc/avn-min_jo63l5.webp'
                      alt='Customer profile user interface'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Feature Section */}
          <div
            className='scroll-m-16 bg-opacity-10 bg-gradient-to-r from-brandPink4 to-brandPurple px-2 py-14 sm:px-0'
            id='know-more'
          >
            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-x-2 lg:grid-cols-2'>
              <div className='flex max-w-md flex-col items-center justify-center'>
                <h3 className='font-heading text-xl font-bold sm:text-2xl'>
                  Procedure of IVF
                </h3>
                <div>
                  <p className='mt-2 text-lg'>
                    The process of IVF begins with fertility medications and
                    hormones, which are given to the woman for about 10 – 12
                    days to stimulate the growth of multiple eggs in the ovary.
                    Transvaginal ultrasound scans and hormone analysis is done
                    to know the status of growing eggs.
                  </p>
                  <div className='mt-2'>
                    <ul className='list-inside list-disc text-lg'>
                      <li>Ovulation induction</li>
                      <li>Egg retrieval</li>
                      <li>Egg and Sperm Preparation</li>
                      <li>Egg Fertilization</li>
                      <li>Embryo Culture: 2 - 6 Days</li>
                      <li>Embryo Transfer / Frozen Embryo transfer</li>
                      <li>Pregnancy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='mt-14 overflow-hidden rounded-3xl'>
                <LiteYouTubeEmbed
                  id='b2tdqev4DpQ'
                  title='What Is IVF, How is ICSI Beneficial'
                />
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full'>
              <div className='h-full w-full xl:grid xl:grid-cols-2'>
                <div className='h-full xl:relative xl:col-start-2'>
                  <img
                    className='h-full w-full object-cover xl:absolute xl:inset-0'
                    src='https://res.cloudinary.com/garbhagudi/image/upload/v1667805635/garbhagudi-ivf/New%20Website/IVF_Success_Rate-min_qtrrke.webp'
                    alt='rounded-xl'
                  />
                </div>
              </div>
            </div>
            <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8'>
              <div className='relative pb-96 pt-12 sm:pb-64 sm:pt-24 xl:col-start-1 xl:pb-24'>
                <h2 className='text-sm font-semibold uppercase tracking-wide'></h2>
                <p className='mt-3 text-3xl font-extrabold text-gray-900'>
                  IVF Success Rate at GarbhaGudi
                </p>
                <p className='mt-5 text-lg text-gray-700'>
                  GarbhaGudi has one of the highest IVF treatments success rates
                  in the industry with over 7000+ successful IVF pregnancies in
                  the last 10-years
                </p>
                <div className='mt-10'>
                  <h4 className='mb-5 text-center text-gray-700'>
                    Industry Average
                  </h4>
                  <div className='h-6 w-full rounded-full bg-gray-500'>
                    <div
                      className='text-md flex h-6 items-center justify-center rounded-l-full bg-brandPink4 p-0.5 text-center font-bold leading-none'
                      style={{ width: '25%' }}
                    >
                      25%
                    </div>
                  </div>
                </div>
                <div className='mt-10'>
                  <h4 className='mb-5 text-center text-gray-700'>
                    GarbhaGudi Average
                  </h4>
                  <div className='h-6 w-full rounded-full bg-gray-500'>
                    <div
                      className='text-md flex h-6 items-center justify-center rounded-l-full bg-brandPink4 p-0.5 text-center font-bold leading-none'
                      style={{ width: '75%' }}
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className='mt-20'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default Ivf;
