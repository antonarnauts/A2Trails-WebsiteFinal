export const SUPPORTED_LANGUAGES = ['en', 'nl', 'fr'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];
export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

export function isSupportedLanguage(lang: string | undefined | null): lang is SupportedLanguage {
  if (!lang) return false;
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(lang.toLowerCase());
}

/**
 * Extracts language code if present at the start of the pathname (e.g., "/nl/about" -> "nl")
 */
export function getLanguageFromPath(pathname: string): SupportedLanguage | null {
  if (!pathname) return null;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && isSupportedLanguage(segments[0])) {
    return segments[0].toLowerCase() as SupportedLanguage;
  }
  return null;
}

/**
 * Removes the language prefix from a pathname (e.g., "/nl/services/construction" -> "/services/construction", "/nl" -> "/")
 */
export function stripLanguagePrefix(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && isSupportedLanguage(segments[0])) {
    const withoutLang = '/' + segments.slice(1).join('/');
    return withoutLang === '/' || withoutLang === '' ? '/' : withoutLang;
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

/**
 * Generates a localized path for the given route and language.
 * Example: getLocalizedPath('/services/construction#pumptracks', 'nl') -> '/nl/services/construction#pumptracks'
 * Example: getLocalizedPath('/', 'nl') -> '/nl'
 * Example: getLocalizedPath('/insights/5-ways', 'fr') -> '/fr/insights/5-ways'
 */
export function getLocalizedPath(path: string, lang?: string): string {
  const targetLang = isSupportedLanguage(lang) ? lang.toLowerCase() : DEFAULT_LANGUAGE;
  
  // Separate hash/search if included
  const [pathAndSearch, hash] = path.split('#');
  const [cleanPath, search] = pathAndSearch.split('?');
  
  const stripped = stripLanguagePrefix(cleanPath);
  
  let result = `/${targetLang}`;
  if (stripped !== '/') {
    result += stripped.startsWith('/') ? stripped : `/${stripped}`;
  }
  
  if (search) {
    result += `?${search}`;
  }
  if (hash) {
    result += `#${hash}`;
  }
  
  return result;
}

/**
 * Builds the full absolute URL for sharing a specific page and language.
 */
export function getShareUrl(path: string, lang?: string): string {
  const localizedPath = getLocalizedPath(path, lang);
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    return `${origin}${pathname}#${localizedPath}`;
  }
  return `https://a2trails.com/#${localizedPath}`;
}
