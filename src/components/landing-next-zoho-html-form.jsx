'use client';

/**
 * Zoho "Book your Consultation" form — native HTML POST (no iframe).
 * Client-side validation blocks submit until fields are valid; Zoho redirects
 * using `zf_redirect_url` (thank-you page) after a successful submission.
 */
import { landingNextZohoFormActionUrl, landingNextZohoFormRedirectUrlEnv } from 'data/landingNextZohoForm';
import { useRouter } from 'next/router';
import { useEffect, useId, useRef, useState } from 'react';

const inputBase =
  'w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-brandDark transition placeholder:text-stone-400 focus:outline-none focus:ring-4';

const inputNormal =
  `${inputBase} border-stone-200 shadow-sm focus:border-brandPink focus:ring-brandPink/15`;

const inputError =
  `${inputBase} border-red-400 shadow-sm focus:border-red-500 focus:ring-red-200/50`;

const labelClass = 'block text-sm font-semibold text-brandPurpleDark';

function readFormValues(form) {
  const name = (form.elements.namedItem('SingleLine')?.value ?? '').trim();
  const phoneRaw = form.elements.namedItem('PhoneNumber_countrycode')?.value ?? '';
  const phone = phoneRaw.replace(/\D/g, '');
  const email = (form.elements.namedItem('Email')?.value ?? '').trim();
  return { name, phone, email };
}

function validateConsultationForm({ name, phone, email }) {
  const err = {};
  if (!name || name.length < 2) {
    err.name = 'Please enter your full name (at least 2 characters).';
  }
  if (!phone) {
    err.phone = 'Phone number is required.';
  } else if (!/^[0-9]{10}$/.test(phone)) {
    err.phone = 'Enter a valid 10-digit mobile number.';
  }
  if (!email) {
    err.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    err.email = 'Enter a valid email address.';
  }
  return err;
}

export default function LandingNextZohoHtmlForm({ variant = 'section' }) {
  const router = useRouter();
  const suffix = useId().replace(/:/g, '');
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const isSection = variant === 'section';

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const refInput = form.querySelector('input[name="zf_referrer_name"]');
    if (refInput && typeof document !== 'undefined') {
      refInput.value = document.referrer || '';
    }

    const redirInput = form.querySelector('input[name="zf_redirect_url"]');
    if (redirInput) {
      const configured = landingNextZohoFormRedirectUrlEnv;
      const fallback =
        typeof window !== 'undefined'
          ? `${window.location.origin}/thank-you.html`
          : '';
      redirInput.value = configured || fallback;
    }

    const gclid = router.query?.gclid;
    const gad = form.querySelector('input[name="zc_gad"]');
    if (gad && typeof gclid === 'string' && gclid) {
      gad.value = gclid;
    }

    const utmKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ];
    utmKeys.forEach((key) => {
      const el = form.querySelector(`input[name="${key}"]`);
      if (!el) return;
      const fromQuery = router.query?.[key];
      if (typeof fromQuery === 'string' && fromQuery) {
        el.value = fromQuery;
      }
    });
  }, [router.query]);

  const clearFieldError = (key) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = (e) => {
    const form = formRef.current;
    if (!form) return;
    const values = readFormValues(form);
    const next = validateConsultationForm(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      e.preventDefault();
      const order = ['name', 'phone', 'email'];
      const firstKey = order.find((k) => next[k]);
      const idMap = {
        name: `SingleLine-${suffix}`,
        phone: `international_PhoneNumber_countrycode-${suffix}`,
        email: `Email-${suffix}`,
      };
      const el = firstKey ? document.getElementById(idMap[firstKey]) : null;
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.focus();
      return;
    }
    const phoneEl = form.elements.namedItem('PhoneNumber_countrycode');
    if (phoneEl) phoneEl.value = values.phone;
  };

  if (!landingNextZohoFormActionUrl) {
    return (
      <p className='rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm text-amber-950'>
        Set{' '}
        <span className='font-mono text-xs'>
          NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_ACTION_URL
        </span>{' '}
        to your Zoho form&apos;s HTML <span className='font-mono text-xs'>action</span> URL.
      </p>
    );
  }

  const fieldShell = 'min-w-0 flex-1';

  return (
    <div
      className={[
        'flex w-full flex-col bg-transparent',
        isSection
          ? 'overflow-hidden rounded-2xl border-2 border-brandPurpleDark/20 shadow-sm'
          : 'overflow-visible',
      ].join(' ')}
      data-gg-zoho-html-form
    >
      {isSection ? (
        <div
          className='h-1 w-full shrink-0 bg-gradient-to-r from-brandPink via-brandPurple to-brandPurpleDark'
          aria-hidden
        />
      ) : null}

      <div
        className={
          isSection
            ? 'px-3 pb-4 pt-4 sm:px-5 sm:pb-5 sm:pt-5 md:px-6 md:pb-6 md:pt-6'
            : 'px-0 pt-1'
        }
      >
        <form
          ref={formRef}
          action={landingNextZohoFormActionUrl}
          name='form'
          id={`zoho-book-form-${suffix}`}
          method='POST'
          acceptCharset='UTF-8'
          encType='multipart/form-data'
          className='space-y-5'
          noValidate
          onSubmit={handleSubmit}
        >
          <input type='hidden' name='zf_referrer_name' defaultValue='' />
          <input type='hidden' name='zf_redirect_url' defaultValue='' />
          <input type='hidden' name='zc_gad' defaultValue='' />
          <input type='hidden' name='utm_source' defaultValue='' />
          <input type='hidden' name='utm_medium' defaultValue='' />
          <input type='hidden' name='utm_campaign' defaultValue='' />
          <input type='hidden' name='utm_term' defaultValue='' />
          <input type='hidden' name='utm_content' defaultValue='' />

          {!isSection ? (
            <h3 className='text-center font-heading text-lg font-bold text-brandPurpleDark md:text-left'>
              Book your Consultation
            </h3>
          ) : null}

          <div className='flex flex-col gap-5 md:flex-row md:items-start md:gap-4 lg:gap-5'>
            <div className={fieldShell}>
              <label htmlFor={`SingleLine-${suffix}`} className={labelClass}>
                Full name <em className='not-italic text-brandPink'>*</em>
              </label>
              <input
                id={`SingleLine-${suffix}`}
                type='text'
                name='SingleLine'
                defaultValue=''
                maxLength={255}
                placeholder='Your full name'
                autoComplete='name'
                className={errors.name ? inputError : inputNormal}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? `err-name-${suffix}` : undefined}
                fieldType={1}
                onInput={() => clearFieldError('name')}
              />
              {errors.name ? (
                <p
                  id={`err-name-${suffix}`}
                  role='alert'
                  className='mt-1.5 text-xs font-medium text-red-600 sm:text-sm'
                >
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className={fieldShell}>
              <label
                htmlFor={`international_PhoneNumber_countrycode-${suffix}`}
                className={labelClass}
              >
                Phone <em className='not-italic text-brandPink'>*</em>
              </label>
              <input
                id={`international_PhoneNumber_countrycode-${suffix}`}
                type='text'
                name='PhoneNumber_countrycode'
                compname='PhoneNumber'
                phoneFormat='1'
                isCountryCodeEnabled='false'
                maxLength={20}
                defaultValue=''
                placeholder='10-digit mobile number'
                inputMode='numeric'
                autoComplete='tel'
                className={errors.phone ? inputError : inputNormal}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? `err-phone-${suffix}` : undefined}
                fieldType={11}
                onInput={() => clearFieldError('phone')}
              />
              {errors.phone ? (
                <p
                  id={`err-phone-${suffix}`}
                  role='alert'
                  className='mt-1.5 text-xs font-medium text-red-600 sm:text-sm'
                >
                  {errors.phone}
                </p>
              ) : null}
            </div>

            <div className={fieldShell}>
              <label htmlFor={`Email-${suffix}`} className={labelClass}>
                Email <em className='not-italic text-brandPink'>*</em>
              </label>
              <input
                id={`Email-${suffix}`}
                type='email'
                name='Email'
                maxLength={255}
                defaultValue=''
                placeholder='you@example.com'
                autoComplete='email'
                className={errors.email ? inputError : inputNormal}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? `err-email-${suffix}` : undefined}
                fieldType={9}
                onInput={() => clearFieldError('email')}
              />
              {errors.email ? (
                <p
                  id={`err-email-${suffix}`}
                  role='alert'
                  className='mt-1.5 text-xs font-medium text-red-600 sm:text-sm'
                >
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className='flex shrink-0 items-stretch pt-1 md:items-end md:pt-6'>
              <button
                type='submit'
                className='flex h-[50px] w-full items-center justify-center self-end rounded-xl bg-brandPink px-6 text-base font-bold text-white shadow-md shadow-brandPink/30 transition hover:bg-brandPink2 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark md:min-w-[10rem] md:px-8'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
