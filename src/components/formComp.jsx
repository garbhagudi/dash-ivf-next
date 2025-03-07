'use client';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

const FormComponent = ({ title }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Last_Name: '',
      Phone: '',
      Email: '',
      Lead_Source: 'Online',
      Lead_Sub_Source: 'GarbhaGudi-IVF',
      UTM_Campaign: '',
    },
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (router.query) {
      const { utm_campaign } = router.query;
      setValue('UTM_Campaign', utm_campaign || '');
    }
  }, [router.query, setValue]);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
    setShowCaptchaError(false);
  };

  const onSubmit = async (data) => {
    setLoad(true);
    if (!captchaVerified) {
      setLoad(false);
      setShowCaptchaError(true);
      return;
    }

    try {
      const response = await fetch('/api/createLeads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setLoad(false);
      responseData?.data[0]?.code === 'SUCCESS' &&
        router.push('/thank-you.html');
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  return (
    <div className='zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='pb-4 pt-4 text-center font-[B612] text-xl font-bold text-white lg:text-2xl'>
          {title}
        </div>
        <div className='mx-auto flex flex-col space-y-5 px-3'>
          <div className='mx-auto max-w-sm'>
            <label
              htmlFor='Last_Name'
              className='flex items-center justify-start'
            >
              <span className='w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left'>
                Full Name
              </span>
              <input
                type='text'
                id='Last_Name'
                placeholder='Enter full name'
                {...register('Last_Name', {
                  required: 'Full Name is required',
                })}
                className='w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none'
              />
            </label>
            {errors.Last_Name && (
              <p className='absolute ml-[1.2em] text-sm text-red-500'>
                {errors.Last_Name?.message}
              </p>
            )}
          </div>

          <div className='mx-auto max-w-sm'>
            <label htmlFor='Phone' className='flex items-center justify-start'>
              <span className='w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left'>
                Phone
              </span>
              <input
                type='text'
                id='Phone'
                placeholder='Enter phone number'
                {...register('Phone', {
                  required: 'Phone is required',
                  // pattern: {
                  //   value: /^[0-9]{10}$/, // Assuming a 10-digit phone number
                  //   message: 'Invalid phone number',
                  // },
                })}
                className='w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none'
              />
            </label>
            {errors.Phone && (
              <p className='absolute ml-[1.2em] text-sm text-red-500'>
                {errors.Phone?.message}
              </p>
            )}
          </div>

          <div className='mx-auto max-w-sm'>
            <label htmlFor='Email' className='flex items-center justify-start'>
              <span className='w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left'>
                Email
              </span>
              <input
                type='email'
                id='Email'
                placeholder='Enter email'
                {...register('Email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
                className='w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none'
              />
            </label>
            {errors.Email && (
              <p className='absolute ml-[1.2em] text-sm text-red-500'>
                {errors.Email?.message}
              </p>
            )}
          </div>
        </div>

        <div className='zcwf_row flex flex-col items-center justify-center pt-5'>
          <ReCAPTCHA
            sitekey='6LegDMIiAAAAAEdpZNW8tk7jSYoTFJu7-1smV3xB'
            onChange={handleCaptchaChange}
          />
          {showCaptchaError && (
            <p className='text-sm text-red-500'>
              Please complete the captcha verification.
            </p>
          )}
        </div>

        <div className='mb-6 mt-6 flex items-center justify-center space-x-4'>
          <button
            type='submit'
            className='flex items-center justify-center gap-2 rounded-md bg-[#ea4b6a] px-6 py-2 text-base font-bold text-white transition hover:bg-[#ee6f88]'
            disabled={load}
          >
            Submit
            {load && (
              <svg
                width={22}
                height={22}
                viewBox='0 0 38 38'
                xmlns='http://www.w3.org/2000/svg'
                stroke='#B2B2B2'
              >
                <g fill='none' fillRule='evenodd'>
                  <g transform='translate(1 1)' strokeWidth='2'>
                    <circle strokeOpacity='.5' cx='18' cy='18' r='18' />
                    <path d='M36 18c0-9.94-8.06-18-18-18'>
                      <animateTransform
                        attributeName='transform'
                        type='rotate'
                        from='0 18 18'
                        to='360 18 18'
                        dur='1s'
                        repeatCount='indefinite'
                      />
                    </path>
                  </g>
                </g>
              </svg>
            )}
          </button>

          <button
            type='button'
            onClick={() => {
              reset();
              setCaptchaVerified(false);
              setShowCaptchaError(false);
            }}
            className='rounded-md bg-[#ea4b6a] px-6 py-2 text-base font-bold text-white transition hover:bg-[#ee6f88]'
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
