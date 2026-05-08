/**
 * Verifies a Google reCAPTCHA v2 (checkbox) token server-side before the
 * consultation form is allowed to POST to Zoho.
 *
 * The browser collects the token from the rendered widget via
 * `grecaptcha.getResponse(widgetId)` and sends `{ token }` here as JSON.
 * We forward `secret + response (+ remoteip)` to Google's siteverify and
 * return a simple `{ ok }` shape.
 *
 * Secret is read from `RECAPTCHA_SECRET_KEY`. The fallback value matches
 * the keys provided by the user so the form works out-of-the-box; rotate
 * via env at deploy time to keep it out of the source tree.
 *
 * NOTE: The site key must be a v2 (checkbox) key. v3 keys will fail
 * verification here with `error-codes: ['invalid-input-response']` because
 * Google validates the key version against the token type.
 */
const RECAPTCHA_SECRET =
  process.env.RECAPTCHA_SECRET_KEY?.trim()

const SITEVERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || '';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  const token = (req.body?.token || '').toString().trim();
  if (!token) {
    return res
      .status(400)
      .json({ ok: false, error: 'Please confirm you are not a robot.' });
  }

  if (!RECAPTCHA_SECRET) {
    return res
      .status(500)
      .json({ ok: false, error: 'reCAPTCHA secret is not configured.' });
  }

  try {
    const params = new URLSearchParams();
    params.append('secret', RECAPTCHA_SECRET);
    params.append('response', token);
    const ip = getClientIp(req);
    if (ip) params.append('remoteip', ip);

    const upstream = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await upstream.json();
    /* v2 success response shape:
     *   { success: true, challenge_ts, hostname, ... }
     * Failures include `error-codes` such as `timeout-or-duplicate`,
     * `invalid-input-response`, `invalid-input-secret`, etc. */
    if (data?.success === true) {
      return res.status(200).json({ ok: true });
    }
    return res.status(200).json({
      ok: false,
      error: 'Verification failed. Please retry the checkbox and try again.',
      codes: Array.isArray(data?.['error-codes']) ? data['error-codes'] : [],
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Verification request failed.',
    });
  }
}
