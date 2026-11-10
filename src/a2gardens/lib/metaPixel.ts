/**
 * Meta (Facebook) Pixel Integration for A2Gardens
 * Pixel ID: 29655244417392847
 */

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

export const A2GARDENS_PIXEL_ID = '29655244417392847';

let isInitialized = false;

/**
 * Initializes Meta Pixel for A2Gardens if not already loaded in static HTML.
 */
export function initA2GardensPixel(): void {
  if (typeof window === 'undefined') return;
  if (isInitialized) return;

  if (!window.fbq) {
    const f: any = window;
    const b = document;
    const e = 'script';
    const v = 'https://connect.facebook.net/en_US/fbevents.js';

    const n: any = function () {
      if (n.callMethod) {
        n.callMethod.apply(n, arguments);
      } else {
        n.queue.push(arguments);
      }
    };

    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];

    const t = b.createElement(e);
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(t, s);
    }

    f.fbq = n;
    try {
      window.fbq('init', A2GARDENS_PIXEL_ID);
      window.fbq('track', 'PageView');
    } catch (err) {
      console.warn('Meta Pixel init error:', err);
    }
  }

  isInitialized = true;
}

/**
 * Tracks a custom event or PageView for A2Gardens
 */
export function trackA2GardensPixel(eventName: string, params?: Record<string, any>): void {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.fbq === 'function') {
      if (params) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('track', eventName);
      }
    }
  } catch (err) {
    console.warn(`Meta Pixel track error [${eventName}]:`, err);
  }
}
