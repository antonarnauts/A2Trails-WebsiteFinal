/**
 * Advanced Bot Protection & Shielded Analytics System
 * Protects website metrics from being distorted by automated bots,
 * headless scrapers, preview containers, and development environments.
 */

// Production domains allowed to send analytics data
const PRODUCTION_DOMAINS = [
  'a2trails.com',
  'www.a2trails.com',
  'a2trails.be',
  'www.a2trails.be'
];

/**
 * Checks whether the current hostname is a legitimate production domain.
 * Prevents development servers (localhost), preview environments (*.run.app),
 * CI/CD pipelines, and health-check pingers from polluting production analytics.
 */
export function isProductionDomain(): boolean {
  if (typeof window === 'undefined') return false;
  const hostname = window.location.hostname.toLowerCase();

  // Allow explicit testing override via URL parameter or localStorage
  try {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('debug_ga') === 'true' || localStorage.getItem('debug_ga') === 'true') {
      return true;
    }
  } catch {
    // Ignore storage/search errors
  }

  return PRODUCTION_DOMAINS.includes(hostname);
}

/**
 * Heuristics to detect automated bots, crawlers, headless browsers,
 * and scraping tools.
 */
export function isLikelyBot(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return true;

  // 1. Check navigator.webdriver (Puppeteer, Playwright, Selenium)
  if (navigator.webdriver) {
    return true;
  }

  // 2. Check document/window automation signatures
  const win = window as any;
  const doc = document as any;

  if (
    win.__nightmare ||
    win._phantom ||
    win.callPhantom ||
    win.__selenium_unwrapped ||
    win.__webdriver_evaluate ||
    win.__driver_evaluate ||
    doc.__webdriver_script_fn ||
    doc.documentElement.getAttribute('webdriver')
  ) {
    return true;
  }

  // 3. User-Agent heuristics for automated tools and crawlers
  const userAgent = navigator.userAgent || '';
  const botPattern = /bot|spider|crawler|scraper|crawling|headless|slurp|seek|preview|facebookexternalhit|whatsapp|telegrambot|discordbot|bingpreview|ahrefs|semrush|petalbot|bytespider|yandexbot|googlebot|bingbot|baiduspider|duckduckbot|sogou|exabot|ia_archiver|mj12bot|dotbot|rogerbot|screaming frog|curl|wget|python|urllib|libwww|httpclient|postman|phantomjs|headlesschrome|lighthouse/i;

  if (botPattern.test(userAgent)) {
    return true;
  }

  // 4. Abnormal screen dimensions (common in headless/scraper environments)
  if (window.screen && (window.screen.width === 0 || window.screen.height === 0)) {
    return true;
  }

  // 5. Incomplete navigator configurations (spoofed headless browsers)
  if (!navigator.languages || navigator.languages.length === 0) {
    // Legitimate browsers almost always have a language list
    return true;
  }

  // 6. Prerender visibility state
  if ((document.visibilityState as string) === 'prerender') {
    return true;
  }

  return false;
}

let isAnalyticsLoaded = false;
let isInitialized = false;

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Safely loads the official Google Analytics gtag.js script
 */
function loadGtagScript(measurementId: string) {
  if (isAnalyticsLoaded || typeof document === 'undefined') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.onload = () => {
    isAnalyticsLoaded = true;
  };
  document.head.appendChild(script);
}

/**
 * Initializes Google Analytics with robust bot protection:
 * 1. Verifies it's a legitimate production domain (blocks dev/preview/staging traffic).
 * 2. Runs deep bot heuristics (blocks headless browsers & known scrapers).
 * 3. Defers firing until genuine human engagement is detected (pointer, scroll, touch, or keydown).
 */
export function initShieldedAnalytics(measurementId: string = 'G-45X5CFN0X9') {
  if (typeof window === 'undefined' || isInitialized) return;
  isInitialized = true;

  // Initialize dataLayer and gtag function stub
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());

  // Check 1: Must not be a detected bot
  if (isLikelyBot()) {
    return;
  }

  // Check 2: Must be a legitimate production domain
  if (!isProductionDomain()) {
    // In development or preview, we suppress sending hits to avoid skewing analytics
    return;
  }

  let hasTriggered = false;

  const activateAnalytics = () => {
    if (hasTriggered) return;
    hasTriggered = true;

    // Remove interaction listeners
    window.removeEventListener('pointerdown', activateAnalytics);
    window.removeEventListener('pointermove', onFirstMove);
    window.removeEventListener('scroll', activateAnalytics);
    window.removeEventListener('keydown', activateAnalytics);
    window.removeEventListener('touchstart', activateAnalytics);

    // Load gtag script and configure GA4
    loadGtagScript(measurementId);
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      transport_type: 'beacon',
      page_path: window.location.pathname + window.location.hash,
    });
  };

  // Require small movement threshold to avoid synthetic micro-movements
  let moveCount = 0;
  const onFirstMove = () => {
    moveCount++;
    if (moveCount >= 2) {
      activateAnalytics();
    }
  };

  // Listen for legitimate human interactions
  window.addEventListener('pointerdown', activateAnalytics, { once: true, passive: true });
  window.addEventListener('pointermove', onFirstMove, { passive: true });
  window.addEventListener('scroll', activateAnalytics, { once: true, passive: true });
  window.addEventListener('keydown', activateAnalytics, { once: true, passive: true });
  window.addEventListener('touchstart', activateAnalytics, { once: true, passive: true });

  // Fallback timer: If human is reading without scrolling/moving for 5 seconds
  // and the window has focus and visibility, activate analytics.
  setTimeout(() => {
    if (!hasTriggered && document.hasFocus() && document.visibilityState === 'visible' && !isLikelyBot()) {
      activateAnalytics();
    }
  }, 5000);
}

/**
 * Tracks a pageview in Single Page App (SPA) HashRouter navigation
 * only if analytics has been activated for a verified human visitor.
 */
export function trackShieldedPageView(path: string, measurementId: string = 'G-45X5CFN0X9') {
  if (typeof window === 'undefined' || !isAnalyticsLoaded || typeof window.gtag !== 'function') {
    return;
  }

  if (isLikelyBot() || !isProductionDomain()) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    send_to: measurementId,
  });
}
