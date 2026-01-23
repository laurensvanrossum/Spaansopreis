function normalizeUrl(url: string): string {
  const withProtocol = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, '');
}

/**
 * Public site URL used for canonical URLs, OpenGraph URLs, sitemap, etc.
 *
 * Prefer setting `NEXT_PUBLIC_SITE_URL` in your env (e.g. "https://spaansopreis.com").
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (explicit) return normalizeUrl(explicit);

  const vercel = process.env.VERCEL_URL;
  if (vercel) return normalizeUrl(`https://${vercel}`);

  // Fallback: keep production-ish by default; override via env when deploying elsewhere.
  return 'https://spaansopreis.com';
}

export function getSiteUrlAsUrl(): URL {
  return new URL(getSiteUrl());
}


