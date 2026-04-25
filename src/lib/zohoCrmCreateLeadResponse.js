/** Shared with `formComp` and `landing-next-zoho-html-form` for `/api/createLeads` responses. */

const ZOHO_LEAD_FAIL_CODES = new Set([
  'INVALID_DATA',
  'MANDATORY_NOT_FOUND',
  'INVALID_TOKEN',
  'OAUTH_SCOPE_MISMATCH',
  'LIMIT_EXCEEDED',
  'INTERNAL_ERROR',
  'RECORD_NOT_FOUND',
  'ERROR',
]);

function firstZohoRow(responseData) {
  const d = responseData?.data;
  if (Array.isArray(d)) return d[0];
  if (d && typeof d === 'object') return d;
  return null;
}

export function isZohoCrmLeadSuccess(responseData) {
  const row = firstZohoRow(responseData);
  if (!row) return false;
  const codeNorm = String(row.code ?? '').toUpperCase();
  if (ZOHO_LEAD_FAIL_CODES.has(codeNorm)) return false;
  if (codeNorm === 'SUCCESS' || codeNorm === 'DUPLICATE_DATA') return true;
  if (row.status === 'success') return true;
  if (row.details?.id) return true;
  return false;
}
