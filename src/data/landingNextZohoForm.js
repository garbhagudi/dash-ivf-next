/**
 * Zoho Forms native HTML POST target for "Book your Consultation" on `/landing-next`.
 * Copy the `action` URL from Zoho Share → Embed → HTML/CSS (form tag).
 *
 * Optional: `NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_REDIRECT_URL` — absolute URL after
 * submit (defaults to current origin + `/thank-you.html`).
 */
const DEFAULT_ACTION =
  'https://forms.zohopublic.com/GarbhaGudiIVFCentre/form/GG/formperma/KmrIM1SMpY6gHfnIViilsu7uT_rBS3EbvFfnCqaLSX0/htmlRecords/submit';

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
