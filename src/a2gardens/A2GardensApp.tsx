/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { Layers, Calendar, Mail } from 'lucide-react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { getAssetPath } from '../lib/utils';
import SEO from '../components/SEO';

function A2GardensContent() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const { currentLanguage, t } = useLanguage();
  const logoUrl = getAssetPath('a2gardens/images/logoa2gardernspng.png');
  const heroImageUrl = getAssetPath('a2gardens/images/hero-architectural-garden.jpg');

  const seoTitle =
    currentLanguage === 'nl'
      ? 'Tuinarchitect Brussel | Stadstuinen, Terrassen & Daktuinen – A2Gardens'
      : currentLanguage === 'fr'
      ? 'Architecte Paysagiste Bruxelles | Jardins de Ville & Terrasses – A2Gardens'
      : 'Garden Architect Brussels | City Gardens, Terraces & Rooftops – A2Gardens';

  const seoDescription =
    currentLanguage === 'nl'
      ? 'Tuinarchitect Anton Arnauts (A2Gardens) ontwerpt en realiseert stadstuinen, natuurstenen terrassen, daktuinen en balkons in alle 19 Brusselse gemeenten.'
      : currentLanguage === 'fr'
      ? 'L’architecte paysagiste Anton Arnauts (A2Gardens) conçoit et réalise des jardins de ville, terrasses en pierre, toitures végétalisées et balcons à Bruxelles.'
      : 'Landscape architect Anton Arnauts (A2Gardens) designs and builds bespoke city gardens, natural stone terraces, rooftop gardens, and balconies across all 19 Brussels communes.';

  const seoKeywords =
    'garden architect Brussels, landscape architect Brussels, tuinarchitect Brussel, tuinaanleg Brussel, architecte paysagiste Bruxelles, aménagement jardin Bruxelles, city garden Brussels, stadstuin Brussel, jardin de ville Bruxelles, terrace construction Brussels, terras aanleggen Brussel, rooftop garden Brussels, daktuin Brussel, Ixelles, Uccle, Saint-Gilles, Etterbeek, Schaerbeek, Anton Arnauts, A2Gardens';

  const a2GardensSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'LandscapeService'],
    name: 'A2Gardens',
    alternateName: 'A2Gardens Brussels Garden Architecture & Terraces',
    description: seoDescription,
    url: 'https://a2gardens.a2trails.com',
     '@id': 'https://a2gardens.a2trails.com/#business',
    email: 'antonarnauts@a2trails.com',
    vatID: 'BE1024.359.194',
    priceRange: '€€-€€€',
    founder: {
      '@type': 'Person',
      name: 'Anton Arnauts',
      jobTitle: 'Landscape Architect',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mariemontkaai 15',
      addressLocality: 'Brussel',
      addressRegion: 'Brussels-Capital Region',
      postalCode: '1080',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8503,
      longitude: 4.3517,
    },
    areaServed: [
      'Brussels-Capital Region',
      'Ixelles / Elsene',
      'Uccle / Ukkel',
      'Saint-Gilles / Sint-Gillis',
      'Brussels City / Stad Brussel',
      'Etterbeek',
      'Schaerbeek / Schaarbeek',
      'Woluwe-Saint-Lambert / Sint-Lambrechts-Woluwe',
      'Woluwe-Saint-Pierre / Sint-Pieters-Woluwe',
      'Watermael-Boitsfort / Watermaal-Bosvoorde',
      'Auderghem / Oudergem',
      'Forest / Vorst',
      'Molenbeek-Saint-Jean / Sint-Jans-Molenbeek',
      'Anderlecht',
      'Jette',
      'Ganshoren',
      'Koekelberg',
      'Berchem-Sainte-Agathe / Sint-Agatha-Berchem',
      'Evere',
      'Saint-Josse-ten-Noode / Sint-Joost-ten-Node',
    ].map((name) => ({ '@type': 'AdministrativeArea', name })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Brussels Garden Architecture & Landscaping Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'City Gardens & Patios (Stadstuinen / Jardins de Ville)',
            description: 'Bespoke urban courtyard gardens, privacy planting, timber pergolas, and natural stone dining spaces in Brussels.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Balcony Design (Balkons / Balcons)',
            description: 'Custom wooden decking, tailored planters, and evergreen balcony transformations in Brussels.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Rooftop Gardens (Daktuinen / Jardins sur Toit)',
            description: 'Intensive and extensive biodiverse rooftop biotopes across Brussels.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Stone Terraces & Permeable Driveways (Terrassen & Opritten / Terrasses & Allées)',
            description: 'Durable natural stone paving, smart permeable drainage, and architectural outdoor lighting.',
          },
        },
      ],
    },
  };

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title={seoTitle}
        siteName="A2Gardens"
        description={seoDescription}
        canonical="https://a2gardens.a2trails.com"
        favicon={logoUrl}
        ogImage={heroImageUrl}
        keywords={seoKeywords}
        langOverride={currentLanguage}
        schema={a2GardensSchema}
      />
      <div className="min-h-screen bg-[#090d0a] text-[#dce6df] flex flex-col font-sans selection:bg-[#10b981] selection:text-black">
        {/* Top Navigation */}
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        {/* Main Content View */}
        <main className={`flex-1 ${currentPage !== 'home' ? 'pt-20' : ''}`}>
          {currentPage === 'home' && (
            <HomePage onNavigate={navigateTo} />
          )}

          {currentPage === 'privacy' && (
            <PrivacyPolicyPage onNavigate={navigateTo} />
          )}

          {currentPage === 'terms' && (
            <TermsOfServicePage onNavigate={navigateTo} />
          )}
        </main>

        {/* Mobile Sticky Quick-Action Bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070b08]/95 backdrop-blur-md border-t border-[#172b1e] p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
          <button
            onClick={() => scrollToSection('services')}
            className="flex-1 py-2 rounded-lg bg-[#111e15] border border-[#1b3424] text-xs font-semibold text-[#8ca394] active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-[#10b981]" />
            <span>{t.nav.services}</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex-1 py-2 rounded-lg bg-[#10b981] text-[#061e12] text-xs font-semibold uppercase tracking-wider active:scale-95 flex items-center justify-center gap-1.5 shadow-md shadow-[#10b981]/25 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.nav.consultation}</span>
          </button>

          <a
            href="mailto:antonarnauts@a2trails.com"
            aria-label="Direct Email to Anton Arnauts"
            className="p-2 rounded-lg bg-[#111e15] border border-[#1b3424] text-[#10b981] active:scale-95 flex items-center justify-center"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Footer */}
        <Footer onNavigate={navigateTo} />
      </div>
    </>
  );
}

export default function A2GardensApp() {
  const logoUrl = getAssetPath('a2gardens/images/logoa2gardernspng.png');

  // Dynamic favicon & mobile tab icon update for A2Gardens (including iOS apple-touch-icon & Android shortcut icon)
  useEffect(() => {
    const defaultIcon = getAssetPath('images/logo.webp');

    const applyIcons = (href: string, mimeType: string) => {
      const existingIcons = document.querySelectorAll(
        "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon'], link[rel='apple-touch-icon-precomposed']"
      );
      existingIcons.forEach((el) => el.parentNode?.removeChild(el));

      const rels = ['icon', 'shortcut icon', 'apple-touch-icon'];
      rels.forEach((rel) => {
        const link = document.createElement('link');
        link.rel = rel;
        if (rel !== 'apple-touch-icon') {
          link.type = mimeType;
        }
        link.href = href;
        document.head.appendChild(link);
      });
    };

    applyIcons(logoUrl, 'image/png');

    return () => {
      applyIcons(defaultIcon, 'image/webp');
    };
  }, [logoUrl]);

  return (
    <LanguageProvider>
      <A2GardensContent />
    </LanguageProvider>
  );
}
