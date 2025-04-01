import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Moment from 'react-moment';
import Head from 'next/head';

const IndexPage = () => {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState('28');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const date = value;
  const cycleLength = parseInt(cycle);

  return (
    <>
      <Head>
        <title>Ovulation and Pregnancy Due Date Calculator | GarbhaGudi</title>
        <meta
          name='description'
          content='Use this calculator to see when you may be ovulating to find your most fertile days.'
        />
      </Head>
      <div className='mx-auto max-w-7xl'>
        <div className='text-center'>
          <h4 className='pt-8 font-heading text-3xl font-bold sm:text-4xl'>
            Ovulation and Pregnancy Due Date Calculator
          </h4>
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
            {isClient && (
              <>
                <div className='mx-auto mt-8 w-96 rounded-2xl border p-3 shadow-2xl'>
                  <p>Next Menstrual Cycle:</p>
                  <div className='font-bold'>
                    <Moment format='DD MMMM YYYY' add={{ days: cycleLength }}>
                      {date}
                    </Moment>
                  </div>
                </div>
                <div className='mx-auto mt-3 w-96 rounded-2xl border p-3 shadow-2xl'>
                  <p>Fertile Window</p>
                  <div className='font-bold'>
                    <Moment
                      format='DD MMMM YYYY'
                      add={{ days: cycleLength - 17 }}
                    >
                      {date}
                    </Moment>{' '}
                    -{' '}
                    <Moment
                      format='DD MMMM YYYY'
                      add={{ days: cycleLength - 13 }}
                    >
                      {date}
                    </Moment>
                  </div>
                </div>
                <div className='mx-auto mt-3 w-96 rounded-2xl border p-3 shadow-2xl'>
                  <p>Approximate Ovulation:</p>
                  <div className='font-bold'>
                    <Moment
                      format='DD MMMM YYYY'
                      add={{ days: cycleLength - 14 }}
                    >
                      {date}
                    </Moment>
                  </div>
                </div>
                <div className='mx-auto mt-3 w-96 rounded-2xl border p-3 shadow-2xl'>
                  <p>Approximate Pregnancy Test:</p>
                  <div className='font-bold'>
                    <Moment
                      format='DD MMMM YYYY'
                      add={{ days: cycleLength + 1 }}
                    >
                      {date}
                    </Moment>
                  </div>
                </div>
                <div className='mx-auto mt-3 w-96 rounded-2xl border p-3 shadow-2xl'>
                  <p>
                    If conceived within this timeframe, the estimated due date:
                  </p>
                  <div className='font-bold'>
                    <Moment
                      format='DD MMMM YYYY'
                      add={{ days: cycleLength - 28 + 280 }}
                    >
                      {date}
                    </Moment>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
