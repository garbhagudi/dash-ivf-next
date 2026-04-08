'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function firstZohoRow(responseData) {
  const d = responseData?.data;
  if (Array.isArray(d)) return d[0];
  if (d && typeof d === 'object') return d;
  return null;
}

const ZOHO_LEAD_FAIL_CODES = new Set([
  'INVALID_DATA',
  'MANDATORY_NOT_FOUND',
  'INVALID_TOKEN',
  'OAUTH_SCOPE_MISMATCH',
  'LIMIT_EXCEEDED',
  'INTERNAL_ERROR',
  'RECORD_NOT_FOUND',
  'ERROR',
]);

function isZohoLeadSuccess(responseData) {
  const row = firstZohoRow(responseData);
  if (!row) return false;
  const codeNorm = String(row.code ?? '').toUpperCase();
  if (ZOHO_LEAD_FAIL_CODES.has(codeNorm)) return false;
  if (codeNorm === 'SUCCESS' || codeNorm === 'DUPLICATE_DATA') return true;
  if (row.status === 'success') return true;
  if (row.details?.id) return true;
  return false;
}

/**
 * @param {'banner' | 'card'} variant - banner: teal strip (home). card: white panel (landing-next).
 */
const FormComponent = ({ title, isTag = true, variant = 'banner' }) => {
  const router = useRouter();
  const pathForVisit = router?.query?.pageVisit || router.asPath || '/';
  const pageVisit = pathForVisit;
  const utmCampaign = router.query?.utm_campaign || '';
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Last_Name: '',
      Phone: '',
      Email: '',
      Lead_Source: 'Online',
      Lead_Sub_Source: 'GarbhaGudi-IVF',
      Campaign: { id: '3505252000019573428' },
      UTM_Campaign: utmCampaign,
      Page_Visited: pageVisit,
    },
  });
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setValue('Page_Visited', `${window.location?.origin}${pageVisit}`);
  }, [pageVisit, setValue]);
  useEffect(() => {
    setValue('UTM_Campaign', utmCampaign);
  }, [utmCampaign, setValue]);

  const onSubmit = async (data) => {
    setLoad(true);
    try {
      const response = await fetch('/api/createLeads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      let responseData = null;
      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }

      if (!response.ok) {
        throw new Error(
          responseData?.error || 'Network response was not ok',
        );
      }

      if (isZohoLeadSuccess(responseData)) {
        // Full navigation so static `public/thank-you.html` always loads (Pages router).
        window.location.assign('/thank-you.html');
        return;
      }

      console.warn('Lead API returned 200 but Zoho payload was not success', responseData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className='zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent'>
      {isTag && (
        <div className='flex justify-center'>
          <div className='mx-5 mt-5 w-fit self-center rounded-md bg-white px-2 py-1 text-center font-semibold text-brandPink shadow-sm'>
            Parivara Parva Book a Free Consultation Now
          </div>
        </div>
      )}
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
                    value: /^[0-9]{10}$/,
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

        <div className='mb-6 mt-6 flex items-center justify-center space-x-4'>
          <button
            type='submit'
            className='flex items-center justify-center gap-2 rounded-md bg-[#ea4b6a] px-6 py-2 text-base font-bold text-white transition hover:bg-[#ee6f88]'
            disabled={load}
          >
            Get a Call Back
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
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
