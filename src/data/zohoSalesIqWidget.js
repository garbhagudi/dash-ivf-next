/**
 * Zoho SalesIQ website embed — `wc` query identifies the widget (Zoho portal:
 * Share → Website). Same URL is used on `/landing-next` and site-wide
 * (`components/SalesIQ.jsx`).
 *
 * Override in env if the portal issues a new embed URL:
 *   NEXT_PUBLIC_ZOHO_SALESIQ_WIDGET_SRC=https://salesiq.zohopublic.com/widget?wc=…
 */
export const ZOHO_SALESIQ_WIDGET_SRC =
  process.env.NEXT_PUBLIC_ZOHO_SALESIQ_WIDGET_SRC?.trim() ||
  'https://salesiq.zohopublic.com/widget?wc=siq972f5d7b03057cc80029ab10323f5bbf044b7286b067ba3d6c1e851505d4c958';
