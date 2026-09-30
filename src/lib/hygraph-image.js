/**
 * Hygraph (graphassets) on-the-fly transform: WebP + max width.
 * `next/image` runs with `unoptimized: true`, so this is what keeps CMS
 * images small. URLs that aren't graphassets assets are returned unchanged.
 */
const GRAPHASSETS = /^(https:\/\/[a-z0-9-]+\.graphassets\.com\/[A-Za-z0-9]+)\/([A-Za-z0-9]+)$/;

export function hygraphImage(url, width) {
  const m = typeof url === 'string' ? url.match(GRAPHASSETS) : null;
  if (!m) return url;
  return `${m[1]}/output=format:webp/resize=width:${width},fit:max/${m[2]}`;
}
