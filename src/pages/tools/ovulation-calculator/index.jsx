import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Moment from 'react-moment';
import Head from 'next/head';

const IndexPage = () => {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState('28');

  const date = value;
  const cycleLength = parseInt(cycle);
  return (
    <>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Ovulation and Pregnancy Due Date Calculator | GarbhaGudi</title>
        <meta
          name='title'
          content='Ovulation and Pregnancy Due Date Calculator | GarbhaGudi IVF Centre'
        />
        <meta
          name='description'
          content='Menstrual periods are different from woman to woman and month to month. Use this calculator to see when you may be ovulating to help find your most fertile days.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Ovulation and Pregnancy Due Date Calculator | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Menstrual periods are different from woman to woman and month to month. Use this calculator to see when you may be ovulating to help find your most fertile days.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1654690156/SEO/5-min_xsyat3.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Ovulation and Pregnancy Due Date Calculator | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='Menstrual periods are different from woman to woman and month to month. Use this calculator to see when you may be ovulating to help find your most fertile days.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1654690156/SEO/5-min_xsyat3.jpg'
        />
      </Head>
      <div className='mx-auto max-w-7xl'>
        <div className='text-center'>
          <div className='container mx-auto text-center'>
            <h4 className='pt-8 font-heading text-3xl font-bold sm:text-4xl'>
              Ovulation and Pregnancy Due Date Calculator
            </h4>
            <p className='mt-3 px-2 text-sm sm:px-0'>
              Menstrual periods are different from woman to woman and month to
              month. Use this calculator to see when you may be ovulating to
              help find your most fertile days.
            </p>
          </div>
        </div>
        <div className='mt-8 text-center text-lg'>
          <label htmlFor='cycle' className=''>
            How long is your average cycle?{' '}
          </label>
          <select
            onChange={(e) => cycleValue(e.target.value)}
            defaultValue={cycle}
            className='w-36 rounded-lg border text-center'
          >
            <option value='28'>28 Days</option>
            <option value='29'>29 Days</option>
            <option value='30'>30 Days</option>
            <option value='31'>31 Days</option>
            <option value='32'>32 Days</option>
            <option value='33'>33 Days</option>
            <option value='34'>34 Days</option>
            <option value='35'>35 Days</option>
            <option value='36'>36 Days</option>
            <option value='37'>37 Days</option>
            <option value='38'>38 Days</option>
            <option value='39'>39 Days</option>
            <option value='40'>40 Days</option>
            <option value='41'>41 Days</option>
            <option value='42'>42 Days</option>
            <option value='43'>43 Days</option>
            <option value='44'>44 Days</option>
            <option value='45'>45 Days</option>
          </select>
        </div>
        <div className='grid grid-cols-1 pt-8 text-center md:grid-cols-2'>
          <div className='scale-75 md:scale-100'>
            <p className='text-center text-lg'>
              Select the first day of your last period
            </p>
            <div className='flex justify-center'>
              <Calendar
                onChange={onChange}
                value={value}
                className='mx-auto mt-4 rounded-2xl shadow-2xl'
              />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center p-2 text-center'>
            <div className='mx-auto mt-8 w-96 rounded-2xl border p-3 text-center text-base shadow-2xl'>
              <p>Next Menstrual Cycle :</p>
              <div className='font-bold'>
                <Moment format='DD MMMM YYYY' add={{ days: cycleLength + 0 }}>
                  {date}
                </Moment>
              </div>
            </div>
            <div className='mx-auto mt-3 w-96 rounded-2xl border p-3 text-center text-base shadow-2xl'>
              <p>Fertile Window</p>
              <div className='font-bold'>
                <Moment format='DD MMMM YYYY' add={{ days: cycleLength - 17 }}>
                  {date}
                </Moment>{' '}
                -{' '}
                <Moment format='DD MMMM YYYY' add={{ days: cycleLength - 13 }}>
                  {date}
                </Moment>
              </div>
            </div>
            <div className='mx-auto mt-3 w-96 rounded-2xl border p-3 text-center text-base shadow-2xl'>
              <p> Approximate Ovulation :</p>
              <div className='font-bold'>
                <Moment format='DD MMMM YYYY' add={{ days: cycleLength - 14 }}>
                  {date}
                </Moment>
              </div>
            </div>
            <div className='mx-auto mt-3 w-96 rounded-2xl border p-3 text-center text-base shadow-2xl'>
              <p> Approximate Pregnancy Test :</p>
              <div className='font-bold'>
                <Moment format='DD MMMM YYYY' add={{ days: cycleLength + 1 }}>
                  {date}
                </Moment>
              </div>
            </div>
            <div className='mx-auto mt-3 w-96 rounded-2xl border p-3 text-center text-base shadow-2xl'>
              <p>
                {' '}
                If conceived within this timeframe, the estimated due date :{' '}
              </p>
              <div className='font-bold'>
                {cycleLength !== 28 && (
                  <Moment
                    format='DD MMMM YYYY'
                    add={{ days: cycleLength - 28 + 280 }}
                  >
                    {date}
                  </Moment>
                )}
                {cycleLength === 28 && (
                  <Moment
                    format='DD MMMM YYYY'
                    add={{ days: cycleLength - cycleLength + 280 }}
                  >
                    {date}
                  </Moment>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='mb-3 mt-5 px-3 text-center text-xs sm:px-0'>
          Only your physician can accurately determine your due date or the date
          of your conception based on his/her knowledge of your complete medical
          condition.
        </div>
      </div>
    </>
  );
};

export default IndexPage;
