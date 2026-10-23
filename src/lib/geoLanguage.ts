import { isSupportedLanguage, SupportedLanguage, DEFAULT_LANGUAGE } from './i18nRouting';
import { isLikelyBot } from './botProtection';

export interface DeviceInfo {
  locale: string;
  languages: string[];
  primaryLang: string;
  isMobile: boolean;
  platform?: string;
  detectedAt: number;
}

export interface RegionInfo {
  countryCode: string;
  countryName?: string;
  city?: string;
  ip?: string;
  detectedAt: number;
}

export interface StoredPreferences {
  device: DeviceInfo | null;
  region: RegionInfo | null;
  manualPreference?: SupportedLanguage;
  resolvedLanguage: SupportedLanguage;
  resolutionReason: 'manual' | 'device' | 'region' | 'hybrid' | 'fallback';
}

const STORAGE_KEYS = {
  DEVICE: 'a2_device',
  REGION: 'a2_region',
  MANUAL_PREF: 'a2_manual_lang',
  RESOLVED_LANG: 'a2_resolved_lang',
};

// 7 days cache for IP region to avoid excessive requests
const REGION_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * Reads stored device info from localStorage
 */
export function getStoredDeviceInfo(): DeviceInfo | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem('device') || localStorage.getItem(STORAGE_KEYS.DEVICE);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Saves device info to localStorage under both 'device' and 'a2_device'
 */
export function saveStoredDeviceInfo(info: DeviceInfo): void {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify(info, null, 2);
    localStorage.setItem('device', serialized);
    localStorage.setItem(STORAGE_KEYS.DEVICE, serialized);
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Reads stored region info from localStorage
 */
export function getStoredRegionInfo(): RegionInfo | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem('region') || localStorage.getItem(STORAGE_KEYS.REGION);
    if (!raw) return null;
    const parsed: RegionInfo = JSON.parse(raw);
    // Check if expired
    if (Date.now() - parsed.detectedAt > REGION_CACHE_TTL_MS) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Saves region info to localStorage under both 'region' and 'a2_region'
 */
export function saveStoredRegionInfo(info: RegionInfo): void {
  if (typeof window === 'undefined') return;
  try {
    const serialized = JSON.stringify(info, null, 2);
    localStorage.setItem('region', serialized);
    localStorage.setItem(STORAGE_KEYS.REGION, serialized);
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Checks if the browser's language setting is Croatian.
 * Strictly verifies whether navigator.language or any navigator.languages entry starts with 'hr'.
 */
export function isCroatianBrowser(): boolean {
  if (typeof navigator === 'undefined') return false;
  const nav = navigator;
  const locale = (nav.language || (nav as any).userLanguage || (nav as any).browserLanguage || '').toLowerCase();
  if (locale.startsWith('hr')) return true;
  if (Array.isArray(nav.languages)) {
    return nav.languages.some((lang) => typeof lang === 'string' && lang.toLowerCase().startsWith('hr'));
  }
  return false;
}

/**
 * Checks if the detected region or IP corresponds to Belgium ('BE' or 'BEL').
 */
export function isBelgianRegion(region: RegionInfo | null): boolean {
  if (!region) return false;
  const code = (region.countryCode || '').toUpperCase();
  if (code === 'BE' || code === 'BEL') return true;
  const name = (region.countryName || '').toLowerCase();
  if (name.includes('belgi')) return true;
  return false;
}

/**
 * Validates whether the Croatian version is allowed to open or be displayed.
 * Strict conditions:
 * 1. Must be opened in a Croatian browser (isCroatianBrowser).
 * 2. Must NEVER be from a Belgian IP address (BE).
 * 3. In no other situation.
 */
export function isCroatianAllowed(region: RegionInfo | null = getStoredRegionInfo()): boolean {
  if (!isCroatianBrowser()) {
    return false;
  }
  if (isBelgianRegion(region)) {
    return false;
  }
  return true;
}

/**
 * Gets explicit manual user preference if saved
 */
export function getStoredManualPreference(): SupportedLanguage | null {
  if (typeof window === 'undefined') return null;
  try {
    const manual = localStorage.getItem(STORAGE_KEYS.MANUAL_PREF);
    if (!isSupportedLanguage(manual)) return null;
    if (manual === 'hr' && !isCroatianAllowed()) {
      localStorage.removeItem(STORAGE_KEYS.MANUAL_PREF);
      localStorage.removeItem(STORAGE_KEYS.RESOLVED_LANG);
      localStorage.removeItem('i18nextLng');
      return null;
    }
    return manual;
  } catch {
    return null;
  }
}

/**
 * Stores explicit manual user preference (when user selects language in dropdown)
 */
export function setManualLanguagePreference(lang: SupportedLanguage): void {
  if (typeof window === 'undefined') return;
  try {
    if (lang === 'hr' && !isCroatianAllowed()) {
      return;
    }
    localStorage.setItem(STORAGE_KEYS.MANUAL_PREF, lang);
    localStorage.setItem(STORAGE_KEYS.RESOLVED_LANG, lang);
    localStorage.setItem('i18nextLng', lang);
  } catch {
    // Ignore storage quota errors
  }
}

/**
 * Detects device language and hardware platform, saving it locally
 */
export function detectAndStoreDeviceInfo(): DeviceInfo {
  const nav = typeof navigator !== 'undefined' ? navigator : ({} as any);
  const userAgent = nav.userAgent || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const locale = nav.language || 'en';
  const languages = Array.isArray(nav.languages) ? [...nav.languages] : [locale];
  const primaryLang = locale.split('-')[0].toLowerCase();

  const info: DeviceInfo = {
    locale,
    languages,
    primaryLang,
    isMobile,
    platform: nav.platform,
    detectedAt: Date.now(),
  };

  saveStoredDeviceInfo(info);
  return info;
}

/**
 * Fetches region from IP via fast lightweight endpoint and saves it locally
 */
export async function fetchAndStoreRegionInfo(): Promise<RegionInfo | null> {
  // Check cached region first
  const cached = getStoredRegionInfo();
  if (cached) {
    return cached;
  }

  // Do not perform external lookups for automated search engine bots
  if (isLikelyBot()) {
    return null;
  }

  // 1. Primary: api.country.is (instant < 50ms, returns { ip, country })
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch('https://api.country.is', {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.country) {
        const region: RegionInfo = {
          countryCode: String(data.country).toUpperCase(),
          ip: data.ip,
          detectedAt: Date.now(),
        };
        saveStoredRegionInfo(region);
        return region;
      }
    }
  } catch {
    // Fallback to secondary endpoint
  }

  // 2. Secondary fallback: ipwho.is (fast, reliable, CORS-enabled)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch('https://ipwho.is/', {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const code = data?.country_code || data?.countryCode;
      if (data && code) {
        const region: RegionInfo = {
          countryCode: String(code).toUpperCase(),
          countryName: data.country,
          city: data.city,
          ip: data.ip,
          detectedAt: Date.now(),
        };
        saveStoredRegionInfo(region);
        return region;
      }
    }
  } catch {
    // Fallback to tertiary endpoint
  }

  // 3. Tertiary fallback: api.db-ip.com
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch('https://api.db-ip.com/v2/free/self', {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.countryCode) {
        const region: RegionInfo = {
          countryCode: String(data.countryCode).toUpperCase(),
          countryName: data.countryName,
          city: data.city,
          ip: data.ipAddress,
          detectedAt: Date.now(),
        };
        saveStoredRegionInfo(region);
        return region;
      }
    }
  } catch {
    // Fallback silently if offline or blocked
  }

  return null;
}

/**
 * Smart Hybrid Resolution Engine:
 * Combines:
 * 1. User manual override (highest priority)
 * 2. Device language (0ms latency)
 * 3. Region from IP (Belgium hybrid handling, Netherlands, France, Croatia, International)
 */
export function resolveSmartHybridLanguage(
  device: DeviceInfo,
  region: RegionInfo | null
): { language: SupportedLanguage; reason: StoredPreferences['resolutionReason'] } {
  const country = region?.countryCode?.toUpperCase();
  const isBE = country === 'BE' || country === 'BEL' || isBelgianRegion(region);

  // 1. Manual user override is strictly prioritized, UNLESS it is Croatian and forbidden
  const manual = getStoredManualPreference();
  if (manual) {
    if (manual === 'hr' && (!isCroatianBrowser() || isBE)) {
      if (typeof window !== 'undefined') {
        try {
          localStorage.removeItem(STORAGE_KEYS.MANUAL_PREF);
          localStorage.removeItem(STORAGE_KEYS.RESOLVED_LANG);
          localStorage.removeItem('i18nextLng');
        } catch {}
      }
    } else {
      return { language: manual, reason: 'manual' };
    }
  }

  const deviceCode = device.primaryLang;
  const isDeviceDutch = deviceCode === 'nl' || device.languages.some((l) => l.toLowerCase().startsWith('nl'));
  const isDeviceFrench = deviceCode === 'fr' || device.languages.some((l) => l.toLowerCase().startsWith('fr'));
  const isDeviceEnglish = deviceCode === 'en' || device.languages.some((l) => l.toLowerCase().startsWith('en'));
  const isCroBrowser = isCroatianBrowser();

  // 2. Belgium IP: strictly NEVER Croatian under any circumstance
  if (isBE) {
    if (isDeviceFrench) {
      return { language: 'fr', reason: 'hybrid' };
    }
    if (isDeviceDutch) {
      return { language: 'nl', reason: 'hybrid' };
    }
    if (isDeviceEnglish) {
      return { language: 'en', reason: 'hybrid' };
    }
    // Default for Belgium
    return { language: 'nl', reason: 'hybrid' };
  }

  // 3. Netherlands
  if (country === 'NL' || country === 'NLD') {
    return { language: 'nl', reason: 'region' };
  }

  // 4. France
  if (country === 'FR' || country === 'FRA') {
    return { language: 'fr', reason: 'region' };
  }

  // 5. Croatia:
  // Croatian page only opens when page is opened in a Croatian browser. In no other situation and never from BE IP.
  if (country === 'HR' || country === 'HRV') {
    if (isCroBrowser) {
      return { language: 'hr', reason: 'region' };
    }
    // If not a Croatian browser, never open Croatian even if physically located in Croatia
    if (isDeviceDutch) return { language: 'nl', reason: 'device' };
    if (isDeviceFrench) return { language: 'fr', reason: 'device' };
    return { language: DEFAULT_LANGUAGE, reason: 'fallback' };
  }

  // 6. Other countries / international:
  // Croatian page ONLY opens if opened in Croatian browser AND NOT BE IP:
  if (isCroBrowser && !isBE) {
    if (region) {
      return { language: 'hr', reason: 'device' };
    }
    // If region not yet verified, hold off temporarily to avoid any BE leak until IP check returns
    return { language: DEFAULT_LANGUAGE, reason: 'fallback' };
  }

  if (isDeviceDutch) {
    return { language: 'nl', reason: 'device' };
  }
  if (isDeviceFrench) {
    return { language: 'fr', reason: 'device' };
  }

  // Otherwise international default is English
  return { language: DEFAULT_LANGUAGE, reason: 'fallback' };
}

// Eagerly trigger region detection if in browser to minimize latency
if (typeof window !== 'undefined' && !getStoredRegionInfo() && !getStoredManualPreference() && !isLikelyBot()) {
  fetchAndStoreRegionInfo().catch(() => {});
}
