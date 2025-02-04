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
      UTM_Campign: '',
    },
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [showCaptchaError, setShowCaptchaError] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (router.query) {
      const { utm_campaign } = router.query;
      setValue('UTM_Campign', utm_campaign || '');
    }
  }, [router.query, setValue]);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
    setShowCaptchaError(false);
  };

  const onSubmit = async (data) => {
    if (!captchaVerified) {
      setShowCaptchaError(true);
      return;
    }

    const getAccessToken = async () => {
      if (accessToken) return accessToken;

      try {
        const tokenParams = new URLSearchParams({
          refresh_token: process.env.NEXT_PRIVATE_ZOHO_REFRESH_TOKEN,
          client_id: process.env.NEXT_PRIVATE_ZOHO_CLIENT_ID,
          client_secret: process.env.NEXT_PRIVATE_ZOHO_CLIENT_SECRET,
          grant_type: 'refresh_token',
        });

        const tokenResponse = await fetch(
          `${process.env.NEXT_PRIVATE_ZOHO_0AUTH_URL}?${tokenParams.toString()}`,
          { method: 'POST' },
        );

        const tokenData = await tokenResponse.json();

        if (!tokenResponse.ok)
          throw new Error(`Token Error: ${tokenData.error}`);

        setAccessToken(tokenData.access_token);
        return tokenData.access_token;
      } catch (error) {
        console.error(error.message);
        return null;
      }
    };

    try {
      const token = await getAccessToken();
      if (!token) throw new Error('Access token could not be retrieved.');

      const requestData = { data: [data] };

      const response = await fetch(process.env.NEXT_PRIVATE_ZOHO_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Zoho-oauthtoken ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const responseData = await response.json();
      router.push('https://www.garbhagudi-ivf.com/thank-you.html');
    } catch (error) {
      console.error(error.message);
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
                  pattern: {
                    value: /^[0-9]{10}$/, // Assuming a 10-digit phone number
                    message: 'Invalid phone number',
                  },
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

        <div className='mb-6 mt-4 flex items-center justify-center space-x-4'>
          <button
            type='submit'
            className='rounded-md bg-[#ea4b6a] px-6 py-2 text-base font-bold text-white transition hover:bg-[#ee6f88]'
          >
            Submit
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
