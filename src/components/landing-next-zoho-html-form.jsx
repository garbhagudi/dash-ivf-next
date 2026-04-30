'use client';

/**
 * Zoho "Book your Consultation" — native HTML/CSS form POST (no iframe, no createLeads).
 * Client-side validation before submit; thank-you via `zf_redirect_url`.
 *
 * CRM fields like Lead_Sub_Source only persist if they exist on the form in Zoho Forms
 * with matching `name` values (see embed HTML or env `NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_FIELD_*`).
 */
import {
  landingNextZohoFormActionUrl,
  landingNextZohoFormRedirectUrlEnv,
  landingNextZohoLeadSource,
  landingNextZohoLeadSubSource,
  landingNextZohoFormLeadSourceFieldName,
  landingNextZohoFormLeadSubSourceFieldName,
  landingNextZohoFormUtmDetailsFieldName,
  landingNextZohoDefaultUtmSource,
  landingNextZohoDefaultUtmMedium,
  landingNextZohoDefaultUtmCampaign,
  landingNextZohoDefaultUtmTerm,
  landingNextZohoDefaultUtmContent,
} from 'data/landingNextZohoForm';
import { firstQueryValue } from 'lib/zohoCrmLeadPayload';
import { useRouter } from 'next/router';
import { useEffect, useId, useRef, useState } from 'react';

/** Same-tab backup when in-app navigation drops ?utm_* from the URL bar. */
const LANDING_NEXT_UTM_SESSION_KEY = 'gg_landing_next_utm_v1';

/**
 * Query string on the main URL plus any `?…` segment inside the hash (some trackers
 * misplace params after `#`). `?utm_…#consultation` is handled by `location.search` alone.
 */
function getMarketingSearchParams() {
  if (typeof window === 'undefined') return new URLSearchParams();
  const merged = new URLSearchParams(window.location.search);
  const hash = window.location.hash || '';
  const qInHash = hash.indexOf('?');
  if (qInHash !== -1) {
    const fromHash = new URLSearchParams(hash.slice(qInHash + 1));
    fromHash.forEach((value, key) => {
      if (!merged.has(key)) merged.set(key, value);
    });
  }
  return merged;
}

function readSessionUtms() {
  try {
    const raw = sessionStorage.getItem(LANDING_NEXT_UTM_SESSION_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch {
    return null;
  }
}

function writeSessionUtms(partial) {
  try {
    sessionStorage.setItem(LANDING_NEXT_UTM_SESSION_KEY, JSON.stringify(partial));
  } catch {
    /* private mode / quota */
  }
}

function firstNonEmpty(...candidates) {
  for (const c of candidates) {
    const s = typeof c === 'string' ? c.trim() : '';
    if (s) return s;
  }
  return '';
}

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

function syncZohoLeadAttributionFields(form, query) {
  const subEl = form.elements.namedItem(landingNextZohoFormLeadSubSourceFieldName);
  if (subEl && 'value' in subEl) {
    const q = query?.Lead_Sub_Source;
    subEl.value =
      typeof q === 'string' && q.trim() ? q.trim() : landingNextZohoLeadSubSource;
  }
  const srcEl = form.elements.namedItem(landingNextZohoFormLeadSourceFieldName);
  if (srcEl && 'value' in srcEl) {
    const q = query?.Lead_Source;
    srcEl.value =
      typeof q === 'string' && q.trim() ? q.trim() : landingNextZohoLeadSource;
  }
}

function buildUtmDetailsFromForm(form, extraPairs = []) {
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const parts = [];
  keys.forEach((k) => {
    const v = String(form.elements.namedItem(k)?.value ?? '').trim();
    if (v) parts.push(`${k}=${v}`);
  });
  extraPairs.forEach(({ k, v }) => {
    const t = String(v ?? '').trim();
    if (t) parts.push(`${k}=${t}`);
  });
  return parts.join(' | ');
}

function syncUtmDetailsField(form) {
  const detailsEl = form.elements.namedItem(landingNextZohoFormUtmDetailsFieldName);
  if (!detailsEl || !('value' in detailsEl)) return;
  const sp = getMarketingSearchParams();
  const utmId = (sp.get('utm_id') || '').trim();
  const extras = utmId ? [{ k: 'utm_id', v: utmId }] : [];
  const details = buildUtmDetailsFromForm(form, extras);
  detailsEl.value = details;
}

function fillFromUrlSearchParams(form, routerQuery) {
  if (typeof window === 'undefined') return;
  const sp = getMarketingSearchParams();
  const sessionSaved = readSessionUtms();

  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const capturedForSession = {};

  keys.forEach((key) => {
    const el = form.elements.namedItem(key);
    if (!el || !('value' in el)) return;

    const fromUrl = (sp.get(key) || '').trim();
    const fromRouter = firstQueryValue(routerQuery?.[key]);
    const fromSession =
      typeof sessionSaved?.[key] === 'string' ? sessionSaved[key].trim() : '';

    const val = firstNonEmpty(fromUrl, fromRouter, fromSession);
    if (val) {
      el.value = val;
      capturedForSession[key] = val;
      return;
    }

    const defaults = {
      utm_source: landingNextZohoDefaultUtmSource,
      utm_medium: landingNextZohoDefaultUtmMedium,
      utm_campaign: landingNextZohoDefaultUtmCampaign,
      utm_term: landingNextZohoDefaultUtmTerm,
      utm_content: landingNextZohoDefaultUtmContent,
    };
    const fallback = defaults[key];
    if (typeof fallback === 'string' && fallback.trim()) el.value = fallback.trim();
  });

  if (Object.keys(capturedForSession).length > 0) {
    writeSessionUtms({ ...(sessionSaved || {}), ...capturedForSession });
  }

  const gclidEl = form.elements.namedItem('zc_gad');
  if (gclidEl && 'value' in gclidEl) {
    const fromUrl = (sp.get('gclid') || '').trim();
    const fromRouter = firstQueryValue(routerQuery?.gclid);
    const v = firstNonEmpty(fromUrl, fromRouter);
    if (v) gclidEl.value = v;
  }

  // Optional: if your Zoho form has a "Page Visited" field (your embed shows `MultiLine1`)
  // this ensures it gets filled even on SPA navigations.
  const pageVisitedEl = form.elements.namedItem('MultiLine1');
  if (pageVisitedEl && 'value' in pageVisitedEl) {
    pageVisitedEl.value = window.location.href;
  }
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
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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

    fillFromUrlSearchParams(form, router.isReady ? router.query : {});

    syncZohoLeadAttributionFields(form, router.isReady ? router.query : {});
    syncUtmDetailsField(form);
  }, [router.isReady, router.query]);

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
    fillFromUrlSearchParams(form, router.isReady ? router.query : {});
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
    syncZohoLeadAttributionFields(form, router.isReady ? router.query : {});
    syncUtmDetailsField(form);
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
          <input
            type='hidden'
            name={landingNextZohoFormUtmDetailsFieldName}
            defaultValue=''
          />
          <input
            type='hidden'
            name={landingNextZohoFormLeadSourceFieldName}
            defaultValue={landingNextZohoLeadSource}
          />
          <input
            type='hidden'
            name={landingNextZohoFormLeadSubSourceFieldName}
            defaultValue={landingNextZohoLeadSubSource}
          />

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
                Email
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
