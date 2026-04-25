/**
 * Zoho CRM lead row helpers for `/api/createLeads`.
 * UTM query keys → common CRM API-style field names (adjust in Zoho if yours differ).
 */

const DEFAULT_LEAD_SUB_SOURCE = 'GarbhaGudi-IVF';
const DEFAULT_LEAD_SOURCE = 'Online';
const DEFAULT_CAMPAIGN_LOOKUP_ID = '3505252000019573428';

const UTM_PAIRS = [
  ['utm_source', 'UTM_Source'],
  ['utm_medium', 'UTM_Medium'],
  ['utm_campaign', 'UTM_Campaign'],
  ['utm_term', 'UTM_Term'],
  ['utm_content', 'UTM_Content'],
];

export function firstQueryValue(value) {
  if (value == null) return '';
  if (Array.isArray(value)) return String(value[0] ?? '').trim();
  return String(value).trim();
}

/** Read `?utm_*=` from a Next.js `router.query` object. */
export function utmFromRouterQuery(query) {
  if (!query || typeof query !== 'object') return {};
  const out = {};
  for (const [low, high] of UTM_PAIRS) {
    const v = firstQueryValue(query[low]);
    if (v) out[high] = v;
  }
  return out;
}

/** Read `?utm_*=` from `window.location.search` (authoritative at submit time). */
export function utmFromWindowLocation() {
  if (typeof window === 'undefined') return {};
  const sp = new URLSearchParams(window.location.search);
  const out = {};
  for (const [low, high] of UTM_PAIRS) {
    const v = (sp.get(low) || '').trim();
    if (v) out[high] = v;
  }
  return out;
}

/** Parse `?utm_*=` from a full URL (e.g. Referer header). */
export function utmFromUrlString(url) {
  if (!url || typeof url !== 'string') return {};
  try {
    const sp = new URL(url).searchParams;
    const out = {};
    for (const [low, high] of UTM_PAIRS) {
      const v = (sp.get(low) || '').trim();
      if (v) out[high] = v;
    }
    return out;
  } catch {
    return {};
  }
}

/** Single-line summary for a custom “UTM / campaign details” CRM field. */
export function buildUtmCampaignDetailsLine(utmHigh) {
  if (!utmHigh || typeof utmHigh !== 'object') return '';
  const parts = [];
  if (utmHigh.UTM_Source) parts.push(`utm_source=${utmHigh.UTM_Source}`);
  if (utmHigh.UTM_Medium) parts.push(`utm_medium=${utmHigh.UTM_Medium}`);
  if (utmHigh.UTM_Campaign) parts.push(`utm_campaign=${utmHigh.UTM_Campaign}`);
  if (utmHigh.UTM_Term) parts.push(`utm_term=${utmHigh.UTM_Term}`);
  if (utmHigh.UTM_Content) parts.push(`utm_content=${utmHigh.UTM_Content}`);
  return parts.join(' | ');
}

/**
 * Required CRM fields + Campaign lookup (Zoho shows "No matches" if `Campaign.id`
 * is wrong or stale — use env to override ID or skip sending `Campaign` entirely).
 */
export function finalizeLeadRowForZohoApi(row) {
  const out = row && typeof row === 'object' ? { ...row } : {};

  const subDefault =
    (typeof process !== 'undefined' && process.env.ZOHO_DEFAULT_LEAD_SUB_SOURCE?.trim()) ||
    (typeof process !== 'undefined' &&
      process.env.NEXT_PUBLIC_ZOHO_DEFAULT_LEAD_SUB_SOURCE?.trim()) ||
    DEFAULT_LEAD_SUB_SOURCE;
  const srcDefault =
    (typeof process !== 'undefined' && process.env.ZOHO_DEFAULT_LEAD_SOURCE?.trim()) ||
    (typeof process !== 'undefined' &&
      process.env.NEXT_PUBLIC_ZOHO_DEFAULT_LEAD_SOURCE?.trim()) ||
    DEFAULT_LEAD_SOURCE;

  if (!out.Lead_Sub_Source || String(out.Lead_Sub_Source).trim() === '') {
    out.Lead_Sub_Source = subDefault;
  }
  if (!out.Lead_Source || String(out.Lead_Source).trim() === '') {
    out.Lead_Source = srcDefault;
  }

  const skipCampaign =
    (typeof process !== 'undefined' &&
      (process.env.NEXT_PUBLIC_ZOHO_CRM_SKIP_CAMPAIGN_LOOKUP === 'true' ||
        process.env.ZOHO_CRM_SKIP_CAMPAIGN_LOOKUP === 'true')) ||
    false;

  const campaignIdOverride =
    (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_ZOHO_CRM_CAMPAIGN_ID?.trim()) ||
    (typeof process !== 'undefined' && process.env.ZOHO_CRM_CAMPAIGN_ID?.trim()) ||
    '';

  if (skipCampaign) {
    delete out.Campaign;
  } else if (campaignIdOverride) {
    out.Campaign = { id: campaignIdOverride };
  } else if (!out.Campaign || !out.Campaign.id) {
    out.Campaign = { id: DEFAULT_CAMPAIGN_LOOKUP_ID };
  }

  return out;
}

/**
 * Client: merge UTM into react-hook-form `data` before POST.
 * Window search overrides router (SPA timing).
 */
export function mergeUtmIntoClientLeadData(formData, router) {
  const detailsField =
    (typeof process !== 'undefined' &&
      process.env.NEXT_PUBLIC_ZOHO_CRM_UTM_DETAILS_API_NAME?.trim()) ||
    'UTM_Campaign_Details';
  const fromRouter = utmFromRouterQuery(router?.query);
  const fromWin = utmFromWindowLocation();
  const utm = { ...fromRouter, ...fromWin };
  const out = { ...formData, ...utm };
  const details = buildUtmCampaignDetailsLine(utm);
  if (details && (!out[detailsField] || String(out[detailsField]).trim() === '')) {
    out[detailsField] = details;
  }
  return finalizeLeadRowForZohoApi(out);
}

/**
 * Server: fill empty UTM_* / details from Referer and optional `body.utm`.
 */
export function mergeUtmIntoServerLeadData(data, { referer, bodyUtm } = {}) {
  const row = data && typeof data === 'object' ? { ...data } : {};
  const fromReferer = utmFromUrlString(referer);
  const fromBodyUtm = {};
  if (bodyUtm && typeof bodyUtm === 'object') {
    for (const [low, high] of UTM_PAIRS) {
      const v = firstQueryValue(bodyUtm[low] ?? bodyUtm[high]);
      if (v) fromBodyUtm[high] = v;
    }
  }

  const sources = [fromReferer, fromBodyUtm];
  for (const src of sources) {
    for (const [high, v] of Object.entries(src)) {
      if (!v || String(v).trim() === '') continue;
      if (!row[high] || String(row[high]).trim() === '') row[high] = String(v).trim();
    }
  }

  const combined = {
    UTM_Source: row.UTM_Source,
    UTM_Medium: row.UTM_Medium,
    UTM_Campaign: row.UTM_Campaign,
    UTM_Term: row.UTM_Term,
    UTM_Content: row.UTM_Content,
  };
  const details = buildUtmCampaignDetailsLine(combined);
  const detailsField =
    process.env.ZOHO_CRM_UTM_DETAILS_API_NAME?.trim() ||
    process.env.NEXT_PUBLIC_ZOHO_CRM_UTM_DETAILS_API_NAME?.trim() ||
    'UTM_Campaign_Details';
  if (
    details &&
    (!row[detailsField] || String(row[detailsField]).trim() === '')
  ) {
    row[detailsField] = details;
  }

  return row;
}
