import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article';
  schema?: any;
  favicon?: string;
  siteName?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical = 'https://a2trails.com', 
  type = 'website',
  schema,
  favicon,
  siteName
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const activeSiteName = siteName || 'A2Trails';
  const fullTitle = title 
    ? (title.includes(activeSiteName) ? title : `${title} | ${activeSiteName}`)
    : `${activeSiteName} | Professional Mountain Bike Infrastructure`;
  const defaultDescription = 'A2Trails specializes in the consultancy, design, and construction of sustainable mountain bike trails, pump tracks, and skill parks across Europe.';
  const metaDescription = description || defaultDescription;

  // Helper to get absolute URL for meta tags
  const getAbsoluteImageUrl = (path: string) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://a2trails.com';
    let base = '/';
    
    if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
      const pathname = window.location.pathname;
      // Get the base path (e.g., /repo-name/) preserving case
      base = pathname.endsWith('/') ? pathname : pathname.substring(0, pathname.lastIndexOf('/') + 1);
    }
    
    return `${origin}${base}${path}`;
  };

  const logoUrl = favicon ? getAbsoluteImageUrl(favicon.replace(/^\//, '')) : getAbsoluteImageUrl('images/logo.webp');
  const heroUrl = favicon ? getAbsoluteImageUrl(favicon.replace(/^\//, '')) : getAbsoluteImageUrl('images/hero.webp');

  // Local Business Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": activeSiteName,
    "image": logoUrl,
    "@id": canonical,
    "url": canonical,
    "telephone": "+3200000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mariemontkaai 15",
      "addressLocality": "Brussel",
      "postalCode": "1080",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.8503,
      "longitude": 4.3517
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/a2trails",
      "https://www.instagram.com/a2trails"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <html lang={currentLang} />
      {favicon && <link rel="icon" type="image/png" sizes="any" href={favicon} />}
      {favicon && <link rel="shortcut icon" type="image/png" href={favicon} />}
      {favicon && <link rel="apple-touch-icon" href={favicon} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={activeSiteName} />
      <meta property="og:image" content={heroUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={heroUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
