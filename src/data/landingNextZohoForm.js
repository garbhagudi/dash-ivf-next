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
