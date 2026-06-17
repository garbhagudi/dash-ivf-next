'use client';

/**
 * /ivf inline consultation form.
 *
 * Submits to the site's `/api/createLeads` endpoint (Zoho CRM Leads) — the same path
 * the home-page `FormComponent` uses — so leads land in the same CRM as the
 * "Book a Free Consultation" modal, tagged `Lead_Sub_Source: 'GarbhaGudi-IVF'`.
 *
 * Layout: heading + a responsive row — Name / Phone / Email / Submit on one line at
 * `lg`, stacked single-column on phone and tablet.
 */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { isZohoCrmLeadSuccess } from 'lib/zohoCrmCreateLeadResponse';
import { mergeUtmIntoClientLeadData } from 'lib/zohoCrmLeadPayload';

const inputBase =
  'w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-brandDark shadow-sm transition placeholder:text-stone-400 focus:outline-none focus:ring-4';
const inputNormal = `${inputBase} border-stone-200 focus:border-brandPink focus:ring-brandPink/15`;
const inputError = `${inputBase} border-red-400 focus:border-red-500 focus:ring-red-200/50`;
const labelClass = 'block text-sm font-semibold text-brandPurpleDark';

const Spinner = () => (
  <svg width={22} height={22} viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg' stroke='#fff' aria-hidden>
    <g fill='none' fillRule='evenodd'>
      <g transform='translate(1 1)' strokeWidth='2'>
        <circle strokeOpacity='.5' cx='18' cy='18' r='18' />
        <path d='M36 18c0-9.94-8.06-18-18-18'>
          <animateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='1s' repeatCount='indefinite' />
        </path>
      </g>
    </g>
  </svg>
);

export const IvfConsultationForm = () => {
  const router = useRouter();
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
      Page_Visited: '',
    },
  });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setValue('Page_Visited', `${window.location?.origin}${router.asPath || '/ivf'}`);
  }, [router.asPath, setValue]);

  const onSubmit = async (data) => {
    setLoad(true);
    try {
      const payload = mergeUtmIntoClientLeadData(data, router);
      const response = await fetch('/api/createLeads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: payload }),
      });

      let responseData = null;
      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }

      if (!response.ok) {
        throw new Error(responseData?.error || 'Network response was not ok');
      }

      if (isZohoCrmLeadSuccess(responseData)) {
        window.location.assign('/ivf/thank-you');
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
    <div className='flex w-full flex-col overflow-hidden rounded-2xl border-2 border-brandPurpleDark/20 bg-transparent shadow-sm'>
      <div className='h-1 w-full shrink-0 bg-gradient-to-r from-brandPink via-brandPurple to-brandPurpleDark' aria-hidden />

      <div className='px-3 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5 md:px-6 md:pb-6 md:pt-6'>
        <h3 className='text-center font-heading text-xl font-bold text-brandPurpleDark sm:text-2xl'>
          Book Your Free Consultation
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-5'>
            <div className='min-w-0'>
              <label htmlFor='ivf-name' className={labelClass}>
                Full name <em className='not-italic text-brandPink'>*</em>
              </label>
              <input
                id='ivf-name'
                type='text'
                placeholder='Your full name'
                autoComplete='name'
                className={errors.Last_Name ? inputError : inputNormal}
                {...register('Last_Name', { required: 'Full name is required' })}
              />
              {errors.Last_Name ? (
                <p role='alert' className='mt-1.5 text-xs font-medium text-red-600 sm:text-sm'>
                  {errors.Last_Name.message}
                </p>
              ) : null}
            </div>

            <div className='min-w-0'>
              <label htmlFor='ivf-phone' className={labelClass}>
                Phone <em className='not-italic text-brandPink'>*</em>
              </label>
              <input
                id='ivf-phone'
                type='tel'
                inputMode='numeric'
                placeholder='10-digit mobile number'
                autoComplete='tel'
                className={errors.Phone ? inputError : inputNormal}
                {...register('Phone', {
                  required: 'Phone is required',
                  pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit number' },
                })}
              />
              {errors.Phone ? (
                <p role='alert' className='mt-1.5 text-xs font-medium text-red-600 sm:text-sm'>
                  {errors.Phone.message}
                </p>
              ) : null}
            </div>

            <div className='min-w-0'>
              <label htmlFor='ivf-email' className={labelClass}>
                Email <em className='not-italic text-brandPink'>*</em>
              </label>
              <input
                id='ivf-email'
                type='email'
                placeholder='you@example.com'
                autoComplete='email'
                className={errors.Email ? inputError : inputNormal}
                {...register('Email', {
                  required: 'Email is required',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                })}
              />
              {errors.Email ? (
                <p role='alert' className='mt-1.5 text-xs font-medium text-red-600 sm:text-sm'>
                  {errors.Email.message}
                </p>
              ) : null}
            </div>

            <div>
              <span aria-hidden className={`${labelClass} invisible hidden lg:block`}>
                Submit
              </span>
              <button
                type='submit'
                disabled={load}
                className='flex w-full items-center justify-center gap-2 rounded-xl border-2 border-transparent bg-brandPink px-6 py-3 text-base font-bold text-white shadow-md shadow-brandPink/30 transition hover:bg-brandPink2 hover:shadow-lg disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark'
              >
                Submit
                {load ? <Spinner /> : null}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IvfConsultationForm;
