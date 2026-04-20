/**
 * Zoho Forms permalink for `/landing-next` (Share → Embed → iframe `src`).
 * Must include `formperma/…`, or set `NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_PERMA`.
 */
export const landingNextZohoFormEmbedSrc =
  process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_EMBED_SRC?.trim() || '';

export function getZohoFormPermaFromEmbedSrc(embedSrc) {
  const override = process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_PERMA?.trim();
  if (override) return override;
  const m = String(embedSrc || '').match(/formperma\/([^/?#&]+)/i);
  return m ? m[1] : '';
}
