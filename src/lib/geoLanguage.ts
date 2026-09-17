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
 * Gets explicit manual user preference if saved
 */
export function getStoredManualPreference(): SupportedLanguage | null {
  if (typeof window === 'undefined') return null;
  try {
    const manual = localStorage.getItem(STORAGE_KEYS.MANUAL_PREF);
    return isSupportedLanguage(manual) ? manual : null;
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

  // Try Primary: api.country.is (instant < 50ms, returns { ip, country })
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
    // Fallback to secondary endpoint if primary fails
  }

  // Fallback: freeipapi.com
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch('https://freeipapi.com/api/json', {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.countryCode) {
        const region: RegionInfo = {
          countryCode: String(data.countryCode).toUpperCase(),
          countryName: data.countryName,
          city: data.cityName,
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
 * 3. Region from IP (Belgium hybrid handling, Netherlands, France, International)
 */
export function resolveSmartHybridLanguage(
  device: DeviceInfo,
  region: RegionInfo | null
): { language: SupportedLanguage; reason: StoredPreferences['resolutionReason'] } {
  // 1. Manual user override is strictly prioritized
  const manual = getStoredManualPreference();
  if (manual) {
    return { language: manual, reason: 'manual' };
  }

  const deviceCode = device.primaryLang;
  const isDeviceDutch = deviceCode === 'nl' || device.languages.some((l) => l.toLowerCase().startsWith('nl'));
  const isDeviceFrench = deviceCode === 'fr' || device.languages.some((l) => l.toLowerCase().startsWith('fr'));
  const isDeviceEnglish = deviceCode === 'en' || device.languages.some((l) => l.toLowerCase().startsWith('en'));

  const country = region?.countryCode?.toUpperCase();

  // 2. Region-specific logic
  if (country === 'NL') {
    // Visitor in Netherlands -> Dutch
    return { language: 'nl', reason: 'region' };
  }

  if (country === 'FR') {
    // Visitor in France -> French
    return { language: 'fr', reason: 'region' };
  }

  if (country === 'BE') {
    // Belgium is trilingual (Flanders Dutch, Wallonia French, Brussels bilingual).
    // The device language is the decisive tie-breaker:
    if (isDeviceFrench) {
      return { language: 'fr', reason: 'hybrid' };
    }
    if (isDeviceDutch) {
      return { language: 'nl', reason: 'hybrid' };
    }
    if (isDeviceEnglish) {
      return { language: 'en', reason: 'hybrid' };
    }
    // Default for Belgium if device is another language: Dutch
    return { language: 'nl', reason: 'hybrid' };
  }

  // 3. For any other international country (UK, US, DE, ES, etc.):
  // Check if their device specifically prefers Dutch or French
  if (isDeviceDutch) {
    return { language: 'nl', reason: 'device' };
  }
  if (isDeviceFrench) {
    return { language: 'fr', reason: 'device' };
  }

  // Otherwise international default is English
  return { language: DEFAULT_LANGUAGE, reason: 'fallback' };
}
