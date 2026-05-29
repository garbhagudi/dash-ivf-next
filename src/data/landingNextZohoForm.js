/**
 * Zoho Forms native HTML POST target for "Book your Consultation" on `/landing-next`.
 * Copy the `action` URL from Zoho Share → Embed → HTML/CSS (form tag).
 *
 * Optional: `NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_REDIRECT_URL` — absolute URL after
 * submit (defaults to current origin + `/thank-you.html`).
 */
/* Action URL pulled verbatim from Zoho's official "Share → Embed → HTML/CSS"
 * download for the "Book your Consultation" form. The native browser POST
 * (multipart/form-data) submits straight to Zoho — no proxy, no JS captcha. */
const DEFAULT_ACTION =
  'https://forms.zohopublic.com/GarbhaGudiIVFCentre/form/BookyourConsultationcom/formperma/jEbZCZrOWkXJEoe1vg4sEPNIiqQCVCyYIkqezGFqLY0/htmlRecords/submit';

export const landingNextZohoFormActionUrl =
  process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_ACTION_URL?.trim() ||
  DEFAULT_ACTION;

/** Post-submit redirect; leave empty string to use Zoho default. */
export const landingNextZohoFormRedirectUrlEnv =
  process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_REDIRECT_URL?.trim() || '';

/**
 * Values sent for source attribution (same intent as `formComp` → `/api/createLeads`).
 */
export const landingNextZohoLeadSource = 'Online';
export const landingNextZohoLeadSubSource = 'GarbhaGudi-IVF';

/**
 * HTTP POST `name` for each box — must match Zoho Forms → Share → Embed → HTML/CSS
 * (`<input name="…">`). Zoho often uses `SingleLine`, `Dropdown`, etc., not CRM API names.
 * If CRM shows "Lead_Sub_Source : Required" but the form entry has blank Lead Sub Source,
 * open the official embed HTML, find the field for Lead Sub Source, and set these env vars.
 */
export const landingNextZohoFormLeadSourceFieldName =
  process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_FIELD_LEAD_SOURCE?.trim() || 'Lead_Source';

export const landingNextZohoFormLeadSubSourceFieldName =
  process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_FIELD_LEAD_SUB_SOURCE?.trim() ||
  'Lead_Sub_Source';

/**
 * Optional combined UTM details field (single-line string like
 * `utm_source=... | utm_medium=... | utm_campaign=...`).
 * Must match a real field `name` in the Zoho Forms embed if you want it to sync to CRM.
 */
export const landingNextZohoFormUtmDetailsFieldName =
  process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_FIELD_UTM_DETAILS?.trim() ||
  'UTM_Campaign_Details';

/**
 * Google reCAPTCHA v2 (Checkbox) site key. Public — safe to ship to the
 * browser. Override at deploy time with `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`.
 *
 * The matching secret lives only on the server in `RECAPTCHA_SECRET_KEY`
 * (no `NEXT_PUBLIC_` prefix → never bundled into the browser).
 *
 * Must be a v2 key (Checkbox or Invisible). v3 keys do NOT render an
 * interactive widget and will silently no-op.
 */
export const landingNextRecaptchaSiteKey =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim()

/**
 * Optional defaults for UTM when URL has no utm_* query params.
 * Common convention: source=direct, medium=none, campaign=landing-next.
 */
export const landingNextZohoDefaultUtmSource =
  process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_SOURCE?.trim() || '';
export const landingNextZohoDefaultUtmMedium =
  process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_MEDIUM?.trim() || '';
export const landingNextZohoDefaultUtmCampaign =
  process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_CAMPAIGN?.trim() || '';
export const landingNextZohoDefaultUtmTerm =
  process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_TERM?.trim() || '';
export const landingNextZohoDefaultUtmContent =
  process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_CONTENT?.trim() || '';
