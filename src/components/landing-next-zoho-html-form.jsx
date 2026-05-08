'use client';

/**
 * Zoho "Book your Consultation" — native HTML/CSS form POST, gated by
 * an interactive Google reCAPTCHA v2 (checkbox) inside a popup.
 *
 * Mirrors Zoho's official "Share → Embed → HTML/CSS" download:
 *   <form action="…/htmlRecords/submit" method="POST"
 *         enctype="multipart/form-data">
 *
 * Submission flow:
 *   1. User clicks Submit — fields are validated client-side.
 *   2. A popup opens; reCAPTCHA v2 widget renders inside it.
 *   3. User ticks "I'm not a robot" (and may solve an image challenge),
 *      then clicks "Verify & Submit".
 *   4. We POST the token to `/api/verifyRecaptcha`, which calls Google's
 *      siteverify with the secret server-side.
 *   5. On success `form.submit()` runs natively → browser POSTs
 *      multipart/form-data straight to Zoho. Thank-you redirect comes
 *      from Zoho via the `zf_redirect_url` hidden input.
 *
 * IMPORTANT: `landingNextRecaptchaSiteKey` MUST be a v2 (Checkbox) key.
 * v3 keys will not render the widget; the script silently no-ops because
 * `grecaptcha.render` doesn't exist for v3-only loads.
 *
 * CRM fields like Lead_Sub_Source only persist if they exist on the Zoho form
 * with matching `name` values (see the embed HTML or override via
 * `NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_FIELD_*`).
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
  landingNextRecaptchaSiteKey,
} from 'data/landingNextZohoForm';
import { firstQueryValue, utmFromCookies } from 'lib/zohoCrmLeadPayload';
import { useRouter } from 'next/router';
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { flushSync } from 'react-dom';

/**
 * `useLayoutEffect` warns on SSR. Fall back to `useEffect` on the server so
 * the build stays clean while still running synchronously pre-paint on the
 * client (lets us populate hidden fields before any submit can fire).
 */
const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** Same-tab backup when in-app navigation drops ?utm_* from the URL bar. */
const LANDING_NEXT_UTM_SESSION_KEY = 'gg_landing_next_utm_v1';

/** No-op handler so React treats hidden marketing inputs as *controlled*
 *  without warning about a missing `onChange`. They are populated only by
 *  the surrounding component, never by user typing.
 */
const NOOP_ONCHANGE = () => {};

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

/**
 * `utmFromCookies()` returns Zoho-CRM-style API names (`UTM_Source`, …).
 * Re-key to the lowercase form field names this component uses internally.
 */
function readCookieUtmsLower() {
  const high = utmFromCookies();
  return {
    utm_source: high.UTM_Source || '',
    utm_medium: high.UTM_Medium || '',
    utm_campaign: high.UTM_Campaign || '',
    utm_term: high.UTM_Term || '',
    utm_content: high.UTM_Content || '',
  };
}

function readGclidCookie() {
  if (typeof document === 'undefined' || !document.cookie) return '';
  const m = document.cookie.match(/(?:^|; )gclid=([^;]+)/);
  if (!m) return '';
  try {
    return decodeURIComponent(m[1]).trim();
  } catch {
    return m[1].trim();
  }
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

const EMPTY_HIDDEN_STATE = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
  utm_details: '',
  gclid: '',
  zf_referrer_name: '',
  zf_redirect_url: '',
  page_visited: '',
};

/**
 * Compute the marketing/attribution values to POST.
 * Priority for each `utm_*`: URL > router > cookie (Zoho ZFAdvLead) > sessionStorage > env default.
 * Reading is *synchronous* so callers can use the result both at first paint and at submit time.
 */
function computeHiddenState(routerQuery) {
  if (typeof window === 'undefined') return EMPTY_HIDDEN_STATE;

  const sp = getMarketingSearchParams();
  const sessionSaved = readSessionUtms();
  const cookieUtms = readCookieUtmsLower();

  const defaults = {
    utm_source: landingNextZohoDefaultUtmSource,
    utm_medium: landingNextZohoDefaultUtmMedium,
    utm_campaign: landingNextZohoDefaultUtmCampaign,
    utm_term: landingNextZohoDefaultUtmTerm,
    utm_content: landingNextZohoDefaultUtmContent,
  };

  const utm = {};
  UTM_KEYS.forEach((key) => {
    const fromUrl = (sp.get(key) || '').trim();
    const fromRouter = firstQueryValue(routerQuery?.[key]);
    const fromCookie = (cookieUtms[key] || '').trim();
    const fromSession =
      typeof sessionSaved?.[key] === 'string' ? sessionSaved[key].trim() : '';
    const fallback = (defaults[key] || '').trim();
    utm[key] = firstNonEmpty(fromUrl, fromRouter, fromCookie, fromSession, fallback);
  });

  const utmIdRaw = (sp.get('utm_id') || '').trim();
  const detailsParts = UTM_KEYS.filter((k) => utm[k]).map((k) => `${k}=${utm[k]}`);
  if (utmIdRaw) detailsParts.push(`utm_id=${utmIdRaw}`);

  const gclid = firstNonEmpty(
    (sp.get('gclid') || '').trim(),
    firstQueryValue(routerQuery?.gclid),
    readGclidCookie(),
  );

  const referrer =
    typeof document !== 'undefined' ? document.referrer || '' : '';
  const redirectUrl =
    landingNextZohoFormRedirectUrlEnv || `${window.location.origin}/thank-you.html`;
  const pageVisited = window.location.href;

  return {
    ...utm,
    utm_details: detailsParts.join(' | '),
    gclid,
    zf_referrer_name: referrer,
    zf_redirect_url: redirectUrl,
    page_visited: pageVisited,
  };
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

export default function LandingNextZohoHtmlForm({
  variant = 'section',
  title,
  submitLabel = 'Get a Call Back',
}) {
  const router = useRouter();
  const suffix = useId().replace(/:/g, '');
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [hidden, setHidden] = useState(EMPTY_HIDDEN_STATE);
  const [captchaError, setCaptchaError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  /* The captcha is rendered inside a popup that opens only after the user
   * clicks Submit and field validation passes. While `captchaModalOpen` is
   * true the captcha container is in the DOM and the load-and-render
   * effect (below) injects + renders the reCAPTCHA v2 widget. */
  const [captchaModalOpen, setCaptchaModalOpen] = useState(false);
  /* Tracks whether the user has ticked the checkbox / passed any image
   * challenge. Drives the "Verify & Submit" button enabled state. */
  const [captchaSolved, setCaptchaSolved] = useState(false);
  /* Holds the reCAPTCHA widget id returned by `grecaptcha.render`. We
   * keep it in a ref because it isn't rendered into the React tree. */
  const recaptchaContainerRef = useRef(null);
  const recaptchaWidgetIdRef = useRef(null);
  const isSection = variant === 'section';

  /*
   * Populate marketing/attribution state from the URL/router/cookies/session.
   * `useLayoutEffect` runs synchronously after mount + before paint, so values
   * are present in the DOM before the user can possibly click Submit. We
   * re-run on every router-query identity change (Next.js mints a fresh
   * `query` object per route push) and persist newly-captured UTMs to
   * sessionStorage as a per-tab safety net.
   */
  useIsoLayoutEffect(() => {
    const next = computeHiddenState(router.isReady ? router.query : {});
    setHidden(next);
    const captured = {};
    UTM_KEYS.forEach((k) => {
      if (next[k]) captured[k] = next[k];
    });
    if (Object.keys(captured).length > 0) {
      const prev = readSessionUtms() || {};
      writeSessionUtms({ ...prev, ...captured });
    }
  }, [router.isReady, router.query]);

  /*
   * Load Google reCAPTCHA v2 (checkbox) and render it into the popup's
   * captcha container — *only when the popup is open*. The script is
   * injected once per page (id="gg-recaptcha-script" deduplicates) and
   * we poll briefly for `grecaptcha.render` because the script sets it
   * up asynchronously.
   *
   * When the popup closes the container is unmounted, so we null the
   * widget id ref so the next open re-renders into the fresh container.
   */
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (!landingNextRecaptchaSiteKey) return undefined;
    if (!captchaModalOpen) {
      recaptchaWidgetIdRef.current = null;
      return undefined;
    }

    let cancelled = false;
    let pollHandle;

    const renderWidget = () => {
      if (cancelled) return;
      if (!recaptchaContainerRef.current) return;
      if (recaptchaWidgetIdRef.current !== null) return;
      const grecaptcha = window.grecaptcha;
      if (!grecaptcha?.render) return;
      try {
        recaptchaWidgetIdRef.current = grecaptcha.render(
          recaptchaContainerRef.current,
          {
            sitekey: landingNextRecaptchaSiteKey,
            callback: () => {
              setCaptchaSolved(true);
              setCaptchaError('');
            },
            'expired-callback': () => {
              setCaptchaSolved(false);
              setCaptchaError('Verification expired — please tick again.');
            },
            'error-callback': () => {
              setCaptchaSolved(false);
              setCaptchaError(
                'reCAPTCHA failed to load. Check your site-key/version.',
              );
            },
          },
        );
      } catch {
        /* `grecaptcha.render` throws if called twice on the same element;
         * we treat that as already-rendered and move on. */
      }
    };

    if (window.grecaptcha?.render) {
      renderWidget();
      return () => {
        cancelled = true;
      };
    }

    if (!document.getElementById('gg-recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'gg-recaptcha-script';
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    pollHandle = window.setInterval(() => {
      if (window.grecaptcha?.render) {
        window.clearInterval(pollHandle);
        renderWidget();
      }
    }, 100);

    return () => {
      cancelled = true;
      if (pollHandle) window.clearInterval(pollHandle);
    };
  }, [captchaModalOpen]);

  const clearFieldError = (key) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  /*
   * onSubmit handler — validates fields, syncs hidden inputs, then opens
   * the captcha popup. We never let the browser POST from this handler;
   * the actual native submit happens in `handleConfirmCaptcha` once the
   * server has verified the v2 token.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (submitting || captchaModalOpen) return;

    const fresh = computeHiddenState(router.isReady ? router.query : {});
    flushSync(() => setHidden(fresh));

    const values = readFormValues(form);
    const next = validateConsultationForm(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
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

    if (!landingNextRecaptchaSiteKey) {
      /* No site key configured → submit directly so a missing env var
       * can't permanently block lead capture. */
      form.submit();
      return;
    }

    setCaptchaError('');
    setCaptchaSolved(false);
    setCaptchaModalOpen(true);
  };

  const handleCloseCaptchaModal = () => {
    if (submitting) return;
    setCaptchaModalOpen(false);
    setCaptchaError('');
    setCaptchaSolved(false);
  };

  /*
   * User has ticked the checkbox and clicked "Verify & Submit". Read the
   * token from the rendered widget, ask our API to verify it with Google,
   * and on success natively submit the form to Zoho. `form.submit()`
   * bypasses the onSubmit handler so we don't loop through validation.
   */
  const handleConfirmCaptcha = async () => {
    const form = formRef.current;
    if (!form) return;
    if (submitting) return;

    const grecaptcha = typeof window !== 'undefined' ? window.grecaptcha : null;
    const widgetId = recaptchaWidgetIdRef.current;
    const token =
      grecaptcha && widgetId !== null ? grecaptcha.getResponse(widgetId) : '';
    if (!token) {
      setCaptchaError('Please tick "I\'m not a robot" to continue.');
      return;
    }

    setSubmitting(true);
    setCaptchaError('');
    try {
      const res = await fetch('/api/verifyRecaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await res.json().catch(() => ({}));
      if (!data?.ok) {
        setCaptchaError(
          data?.error || 'Verification failed. Please retry the checkbox.',
        );
        if (grecaptcha && widgetId !== null) grecaptcha.reset(widgetId);
        setCaptchaSolved(false);
        setSubmitting(false);
        return;
      }
    } catch {
      setCaptchaError('Network error during verification. Please retry.');
      setSubmitting(false);
      return;
    }

    /* Re-sync attribution at the last possible moment — UTMs may have
     * shifted between popup-open and confirm (rare, but free). */
    syncZohoLeadAttributionFields(form, router.isReady ? router.query : {});
    form.submit();
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
  const isBanner = variant === 'banner';

  /*
   * Hidden marketing/attribution inputs are *controlled* by React state so
   * the values React renders are the values the browser POSTs (no race
   * with hydration / late `el.value = …` writes). Extracted into a const
   * so each variant render branch can drop them into its own form.
   */
  const hiddenAttributionFields = (
    <>
      <input
        type='hidden'
        name='zf_referrer_name'
        value={hidden.zf_referrer_name}
        onChange={NOOP_ONCHANGE}
      />
      <input
        type='hidden'
        name='zf_redirect_url'
        value={hidden.zf_redirect_url}
        onChange={NOOP_ONCHANGE}
      />
      <input
        type='hidden'
        name='zc_gad'
        value={hidden.gclid}
        onChange={NOOP_ONCHANGE}
      />
      <input
        type='hidden'
        name='utm_source'
        value={hidden.utm_source}
        onChange={NOOP_ONCHANGE}
      />
      <input
        type='hidden'
        name='utm_medium'
        value={hidden.utm_medium}
        onChange={NOOP_ONCHANGE}
      />
      <input
        type='hidden'
        name='utm_campaign'
        value={hidden.utm_campaign}
        onChange={NOOP_ONCHANGE}
      />
      <input
        type='hidden'
        name='utm_term'
        value={hidden.utm_term}
        onChange={NOOP_ONCHANGE}
      />
      <input
        type='hidden'
        name='utm_content'
        value={hidden.utm_content}
        onChange={NOOP_ONCHANGE}
      />
      <input
        type='hidden'
        name={landingNextZohoFormUtmDetailsFieldName}
        value={hidden.utm_details}
        onChange={NOOP_ONCHANGE}
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
    </>
  );

  /* Captcha popup — shared by every variant. */
  const captchaModal = captchaModalOpen ? (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby={`captcha-title-${suffix}`}
      className='fixed inset-0 z-[100] flex items-center justify-center px-4 py-6'
    >
      <button
        type='button'
        aria-label='Close verification dialog'
        disabled={submitting}
        onClick={handleCloseCaptchaModal}
        className='absolute inset-0 h-full w-full cursor-default bg-black/55 backdrop-blur-sm disabled:cursor-not-allowed'
      />
      <div className='relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl'>
        <div className='flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-4 sm:px-6'>
          <div>
            <h3
              id={`captcha-title-${suffix}`}
              className='font-heading text-base font-bold text-brandPurpleDark sm:text-lg'
            >
              Verify and submit
            </h3>
            <p className='mt-1 text-xs text-gray-600 sm:text-sm'>
              Please confirm you&apos;re not a robot to send your details.
            </p>
          </div>
          <button
            type='button'
            aria-label='Close'
            disabled={submitting}
            onClick={handleCloseCaptchaModal}
            className='-mr-1 -mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark disabled:cursor-not-allowed disabled:opacity-50'
          >
            <span aria-hidden='true' className='text-xl leading-none'>
              ×
            </span>
          </button>
        </div>

        <div className='flex flex-col items-center gap-3 px-5 py-5 sm:px-6'>
          {/*
           * reCAPTCHA v2 (checkbox) widget mounts here. The effect above
           * injects api.js and calls `grecaptcha.render` into this div
           * (304×78, fixed by Google).
           */}
          <div ref={recaptchaContainerRef} />
          {captchaError ? (
            <p
              role='alert'
              className='text-center text-xs font-medium text-red-600 sm:text-sm'
            >
              {captchaError}
            </p>
          ) : null}
          <p className='text-center text-[11px] leading-snug text-gray-500'>
            Protected by reCAPTCHA —{' '}
            <a
              href='https://policies.google.com/privacy'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-gray-700'
            >
              Privacy
            </a>{' '}
            /{' '}
            <a
              href='https://policies.google.com/terms'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-gray-700'
            >
              Terms
            </a>
            .
          </p>
        </div>

        <div className='flex flex-col-reverse gap-2 border-t border-gray-100 px-5 py-4 sm:flex-row sm:justify-end sm:gap-3 sm:px-6'>
          <button
            type='button'
            onClick={handleCloseCaptchaModal}
            disabled={submitting}
            className='inline-flex h-11 items-center justify-center rounded-xl border border-gray-300 bg-white px-5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark disabled:cursor-not-allowed disabled:opacity-50'
          >
            Cancel
          </button>
          <button
            type='button'
            onClick={handleConfirmCaptcha}
            disabled={submitting || !captchaSolved}
            aria-busy={submitting ? 'true' : 'false'}
            className='inline-flex h-11 items-center justify-center rounded-xl bg-brandPink px-5 text-sm font-bold text-white shadow-md shadow-brandPink/30 transition hover:bg-brandPink2 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark disabled:cursor-not-allowed disabled:opacity-70'
          >
            {submitting ? 'Verifying…' : 'Verify & Submit'}
          </button>
        </div>
      </div>
    </div>
  ) : null;

  /*
   * Banner variant — matches the home-page hero panel:
   * teal background (provided by parent), white heading, gray-pill labels
   * left of each input, "Get a Call Back" submit button. Wires into the
   * same Zoho-form POST + captcha popup as the other variants.
   */
  if (isBanner) {
    const bannerInput =
      'w-full rounded-ee-full rounded-se-full border border-transparent bg-white/95 px-2 py-1 text-base text-brandDark focus:border-brandPink focus:outline-none focus:ring-1 focus:ring-brandPink active:outline-none';
    const bannerLabelPill =
      'w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left text-brandDark';

    return (
      <div
        className='zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent'
        data-gg-zoho-html-form
      >
        <form
          ref={formRef}
          action={landingNextZohoFormActionUrl}
          name='form'
          id={`zoho-book-form-${suffix}`}
          method='POST'
          acceptCharset='UTF-8'
          encType='multipart/form-data'
          noValidate
          onSubmit={handleSubmit}
        >
          {hiddenAttributionFields}

          {title ? (
            <div className='pb-4 pt-4 text-center font-[B612] text-xl font-bold text-white lg:text-2xl'>
              {title}
            </div>
          ) : null}

          <div className='mx-auto flex flex-col space-y-5 px-3'>
            <div className='relative mx-auto w-full max-w-sm'>
              <label
                htmlFor={`SingleLine-${suffix}`}
                className='flex items-center justify-start'
              >
                <span className={bannerLabelPill}>Full Name</span>
                <input
                  id={`SingleLine-${suffix}`}
                  type='text'
                  name='SingleLine'
                  defaultValue=''
                  maxLength={255}
                  placeholder='Enter full name'
                  autoComplete='name'
                  className={bannerInput}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  fieldType={1}
                  onInput={() => clearFieldError('name')}
                />
              </label>
              {errors.name ? (
                <p role='alert' className='mt-1 text-sm text-red-200'>
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className='relative mx-auto w-full max-w-sm'>
              <label
                htmlFor={`international_PhoneNumber_countrycode-${suffix}`}
                className='flex items-center justify-start'
              >
                <span className={bannerLabelPill}>Phone</span>
                <input
                  id={`international_PhoneNumber_countrycode-${suffix}`}
                  type='text'
                  name='PhoneNumber_countrycode'
                  compname='PhoneNumber'
                  phoneFormat='1'
                  isCountryCodeEnabled='false'
                  maxLength={20}
                  defaultValue=''
                  placeholder='Enter phone number'
                  inputMode='numeric'
                  autoComplete='tel'
                  className={bannerInput}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  fieldType={11}
                  onInput={() => clearFieldError('phone')}
                />
              </label>
              {errors.phone ? (
                <p role='alert' className='mt-1 text-sm text-red-200'>
                  {errors.phone}
                </p>
              ) : null}
            </div>

            <div className='relative mx-auto w-full max-w-sm'>
              <label
                htmlFor={`Email-${suffix}`}
                className='flex items-center justify-start'
              >
                <span className={bannerLabelPill}>Email</span>
                <input
                  id={`Email-${suffix}`}
                  type='email'
                  name='Email'
                  maxLength={255}
                  defaultValue=''
                  placeholder='Enter email'
                  autoComplete='email'
                  className={bannerInput}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  fieldType={9}
                  onInput={() => clearFieldError('email')}
                />
              </label>
              {errors.email ? (
                <p role='alert' className='mt-1 text-sm text-red-200'>
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className='mb-6 mt-6 flex items-center justify-center space-x-4'>
            <button
              type='submit'
              disabled={submitting || captchaModalOpen}
              aria-haspopup='dialog'
              aria-expanded={captchaModalOpen ? 'true' : 'false'}
              className='flex items-center justify-center gap-2 rounded-md bg-[#ea4b6a] px-6 py-2 text-base font-bold text-white transition hover:bg-[#ee6f88] disabled:cursor-not-allowed disabled:opacity-70'
            >
              {submitLabel}
            </button>
          </div>
        </form>

        {captchaModal}
      </div>
    );
  }

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
          {hiddenAttributionFields}

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
                disabled={submitting || captchaModalOpen}
                aria-haspopup='dialog'
                aria-expanded={captchaModalOpen ? 'true' : 'false'}
                className='flex h-[50px] w-full items-center justify-center self-end rounded-xl bg-brandPink px-6 text-base font-bold text-white shadow-md shadow-brandPink/30 transition hover:bg-brandPink2 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandPurpleDark disabled:cursor-not-allowed disabled:opacity-70 md:min-w-[10rem] md:px-8'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {captchaModal}

    </div>
  );
}
