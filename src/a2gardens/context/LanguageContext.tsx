import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LanguageCode = 'en' | 'nl' | 'fr';

export interface Translations {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    consultation: string;
    mobileCall: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    regionBadge: string;
  };
  categories: {
    terraces: string;
    cityGardens: string;
    balconies: string;
    rooftops: string;
  };
  spotlight: {
    tag: string;
    title: string;
    subtitle: string;
    viewAll: string;
    inspect: string;
    interactiveTitle: string;
  };
  sectors: {
    title: string;
    subtitle: string;
    s1Title: string;
    s1Tagline: string;
    s1Desc: string;
    s2Title: string;
    s2Tagline: string;
    s2Desc: string;
    s3Title: string;
    s3Tagline: string;
    s3Desc: string;
    s4Title: string;
    s4Tagline: string;
    s4Desc: string;
  };
  methodology: {
    title: string;
    subtitle: string;
    learnMore: string;
    m1Title: string;
    m1Desc: string;
    m2Title: string;
    m2Desc: string;
    m3Title: string;
    m3Desc: string;
    m4Title: string;
    m4Desc: string;
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    button: string;
    recipientNote: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    studio: string;
    contactAnton: string;
    rights: string;
    backToTop: string;
    requestVisit: string;
    contact: string;
    followUs: string;
    vat: string;
    address: string;
    privacy: string;
    terms: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      consultation: 'Get in touch',
      mobileCall: 'Services',
    },
    hero: {
      badge: 'Brussels Gardening Architecture Studio',
      title: 'Terraces,\nCity gardens & Balconies',
      subtitle:
        'In a busy city life, your small piece of nature that you can call your own should be the perfect balance between rest and functionality. We design refined outdoor space where the only goal is to unwind from the chaotic city life. From warm timber, classy stones and a diverse plant selection we create your outdoor sanctuary.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'Our Services',
      regionBadge: 'Brussels Region',
    },
    categories: {
      cityGardens: 'City Gardens & Patios',
      balconies: 'Balconies',
      rooftops: 'Rooftop Gardens',
      terraces: 'Stone Terraces And Driveways',
    },
    spotlight: {
      tag: 'Recent Transformations',
      title: 'Before & After Transformations',
      subtitle: 'Drag the slider left and right to reveal the full transformation of our recent Brussels outdoor projects.',
      viewAll: 'View All Projects',
      inspect: 'Inspect Transformation',
      interactiveTitle: 'Interactive Before / After Comparison',
    },
    sectors: {
      title: 'Solutions Tailored to Your Outdoor Space',
      subtitle:
        'In a busy city life, your personal retreat must balance serene rest with effortless daily functionality. We craft spaces that soothe the senses while adapting intuitively to modern routines.',
      s1Title: 'City Gardens & Patios',
      s1Tagline: 'Quiet, private backyards',
      s1Desc:
        'We turn city outdoor spaces into quiet, private backyards. Think natural stone dining spots, warm timber accents, green privacy screens, and gentle water features that block out neighbourhood noise and keep your space secluded.',
      s2Title: 'Balconies',
      s2Tagline: 'Inspired by your own creativity',
      s2Desc:
        'Transform your standard concrete balcony to a space inspired by your own creativity. Wood, plants and furniture. We tailor everything to your exact needs.',
      s3Title: 'Rooftop Gardens',
      s3Tagline: 'Biodiverse micro biotopes above the city skyline',
      s3Desc:
        'Need a quiet space above the city skyline? Create a micro biotope for intensive or extensive use and introduce a biodiverse hub in the center of Brussels.',
      s4Title: 'Stone Terraces And Driveways',
      s4Tagline: 'Durable natural stone, smart drainage & subtle lighting',
      s4Desc:
        'Upgrade your driveway or terrace into a space that’s built to last and great to look at. We use durable natural stone alongside permeable and semi-permeable options for smart drainage, paired with subtle lighting so your outdoor space stays welcoming day or night.',
    },
    methodology: {
      title: 'Our Architectural Journey',
      subtitle:
        'A structured 4-step process from initial conversation to enduring outdoor living.',
      learnMore: 'Get in touch',
      m1Title: '01. First Free Conversation',
      m1Desc:
        'Fill in our contact sheet so we can prepare a first free conversation.',
      m2Title: '02. Spatial Design',
      m2Desc:
        '2D architectural plans and 3D concepts based on our first conversation. Here we discuss adaptations, cross the T’s and dot the I’s.',
      m3Title: '03. Landscaping & Construction',
      m3Desc:
        'The phase where your dream starts becoming reality. The garden takes its shape with stone placing and detailed woodwork.',
      m4Title: '04. Green Integration & Handover',
      m4Desc:
        'The finishing touch. We fill in our built areas with a biodiverse selection of plants. We clean up and let you enjoy your new green space in peace.',
    },
    ctaBanner: {
      title: 'Ready to Transform Your Brussels Outdoor Space?',
      subtitle:
        'We provide initial on-site consultations across Brussels to evaluate light, dimensions, and botanical possibilities. Our automated dispatch notifies architect Anton Arnauts instantly.',
      button: 'Get in touch',
      recipientNote: 'Direct Notification: antonarnauts@A2trails.com',
    },
    footer: {
      description:
        'In a busy city life, your small piece of nature that you can call your own should be the perfect balance between rest and functionality. Designing bespoke terraces, city gardens, and urban balconies with minimalist precision.',
      quickLinks: 'Quick Links',
      services: 'Services',
      studio: 'Brussels Studio',
      contactAnton: 'Automated Contact',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
      requestVisit: 'Request Project Visit',
      contact: 'Contact',
      followUs: 'Follow Us',
      vat: 'VAT',
      address: 'Registered Office',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  nl: {
    nav: {
      home: 'Home',
      services: 'Diensten',
      projects: 'Projecten',
      about: 'Over Ons',
      contact: 'Contact',
      consultation: 'Get in touch',
      mobileCall: 'Diensten',
    },
    hero: {
      badge: 'Brussels Tuinarchitectuur Bureau',
      title: 'Terrassen,\nStadstuinen & Balkons',
      subtitle:
        'In het drukke stadsleven moet uw eigen stukje natuur de perfecte balans zijn tussen rust en functionaliteit. Wij ontwerpen verfijnde buitenruimtes waar het enige doel is om te ontspannen van het chaotische stadsleven. Met warm hout, klassevolle natuursteen en een gevarieerde plantenselectie creëren we uw persoonlijke toevluchtsoord.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'Onze Diensten',
      regionBadge: 'Regio Brussel',
    },
    categories: {
      cityGardens: 'City Gardens & Patios',
      balconies: 'Balconies',
      rooftops: 'Rooftop Gardens',
      terraces: 'Stone Terraces And Driveways',
    },
    spotlight: {
      tag: 'Recente Transformaties',
      title: 'Voor & Na Transformaties',
      subtitle: 'Sleep de balk naar links en rechts om het verschil te zien van onze recente Brusselse buitenprojecten.',
      viewAll: 'Bekijk Alle Projecten',
      inspect: 'Inspecteer Transformatie',
      interactiveTitle: 'Interactieve Voor / Na Vergelijking',
    },
    sectors: {
      title: 'Oplossingen Afgestemd op Uw Buitenruimte',
      subtitle:
        'In het drukke stadsleven moet uw eigen toevluchtsoord de perfecte balans vormen tussen diepe rust en moeiteloze functionaliteit. Wij ontwerpen plekken die ontspannen en naadloos meebewegen met uw dag.',
      s1Title: 'City Gardens & Patios',
      s1Tagline: 'Rustige, private stadstuinen',
      s1Desc:
        'Wij toveren stedelijke buitenruimtes om tot rustige, private achtertuinen. Denk aan eethoeken in natuursteen, warme houtaccenten, groene privacyschermen en zachte waterelementen die omgevingsgeluid dempen en uw ruimte afschermen.',
      s2Title: 'Balconies',
      s2Tagline: 'Geïnspireerd door uw eigen creativiteit',
      s2Desc:
        'Transformeer uw standaard betonnen balkon naar een ruimte geïnspireerd door uw eigen creativiteit. Hout, planten en meubilair. Wij stemmen alles af op uw exacte behoeften.',
      s3Title: 'Rooftop Gardens',
      s3Tagline: 'Biodiverse microbiotopen boven de Brusselse skyline',
      s3Desc:
        'Nood aan een rustige plek boven de skyline van de stad? Creëer een microbiotoop voor intensief of extensief gebruik en introduceer een biodiverse hub in het hart van Brussel.',
      s4Title: 'Stone Terraces And Driveways',
      s4Tagline: 'Duurzame natuursteen, slimme drainage & sfeervol licht',
      s4Desc:
        'Upgrade uw oprit of terras naar een ruimte die gebouwd is om lang mee te gaan en er fantastisch uitziet. Wij gebruiken duurzame natuursteen naast waterdoorlatende en halfdoorlatende opties voor slimme drainage, gecombineerd met subtiele verlichting zodat uw buitenruimte dag en nacht uitnodigend blijft.',
    },
    methodology: {
      title: 'Onze Architecturale Reis',
      subtitle:
        'Een gestructureerd proces in 4 stappen van eerste kennismaking tot duurzame oplevering.',
      learnMore: 'Get in touch',
      m1Title: '01. Eerste Gratis Gesprek',
      m1Desc:
        'Vul ons contactformulier in zodat we een eerste gratis gesprek kunnen voorbereiden.',
      m2Title: '02. Ruimtelijk Ontwerp',
      m2Desc:
        '2D architecturale plannen en 3D-concepten gebaseerd op ons eerste gesprek. Hier bespreken we aanpassingen en zetten we de puntjes op de i.',
      m3Title: '03. Tuinaanleg & Constructie',
      m3Desc:
        'De fase waarin uw droom werkelijkheid wordt. De tuin krijgt vorm met bestrating in natuursteen en gedetailleerd houtwerk.',
      m4Title: '04. Groenintegratie & Oplevering',
      m4Desc:
        'De finishing touch. We vullen de aangelegde zones met een biodiverse selectie aan planten. We ruimen alles netjes op zodat u in alle rust kunt genieten van uw nieuwe groene oase.',
    },
    ctaBanner: {
      title: 'Klaar om uw Brusselse Buitenruimte te Transformeren?',
      subtitle:
        'Wij verzorgen initiële consultaties ter plaatse in Brussel om licht, afmetingen en botanische mogelijkheden in kaart te brengen. Anton Arnauts ontvangt direct uw aanvraag.',
      button: 'Get in touch',
      recipientNote: 'Directe Melding: antonarnauts@A2trails.com',
    },
    footer: {
      description:
        'In het drukke stadsleven moet uw eigen stukje natuur de perfecte balans zijn tussen rust en functionaliteit. Gespecialiseerd in terrassen, stadstuinen en balkons met minimalistische precisie en rustgevend groen.',
      quickLinks: 'Snelle Links',
      services: 'Diensten',
      studio: 'Brussels Atelier',
      contactAnton: 'Geautomatiseerd Contact',
      rights: 'Alle rechten voorbehouden.',
      backToTop: 'Terug naar boven',
      requestVisit: 'Vraag Plaatsbezoek Aan',
      contact: 'Contact',
      followUs: 'Volg Ons',
      vat: 'BTW',
      address: 'Maatschappelijke Zetel',
      privacy: 'Privacybeleid',
      terms: 'Algemene Voorwaarden',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      projects: 'Projets',
      about: 'À Propos',
      contact: 'Contact',
      consultation: 'Get in touch',
      mobileCall: 'Services',
    },
    hero: {
      badge: 'Studio d’Architecture de Jardin à Bruxelles',
      title: 'Terrasses,\nJardins de ville & Balcons',
      subtitle:
        'Dans le rythme effréné de la ville, votre coin de nature privé doit être le parfait équilibre entre repos et fonctionnalité. Nous concevons des espaces extérieurs raffinés où le seul objectif est de déconnecter de la vie urbaine chaotique. Avec du bois chaleureux, des pierres élégantes et une sélection végétale diversifiée, nous créons votre sanctuaire extérieur.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'Nos Services',
      regionBadge: 'Région Bruxelloise',
    },
    categories: {
      cityGardens: 'City Gardens & Patios',
      balconies: 'Balconies',
      rooftops: 'Rooftop Gardens',
      terraces: 'Stone Terraces And Driveways',
    },
    spotlight: {
      tag: 'Transformations Récentes',
      title: 'Transformations Avant & Après',
      subtitle: 'Faites glisser la barre de gauche à droite pour découvrir le résultat de nos récents projets extérieurs à Bruxelles.',
      viewAll: 'Voir Tous les Projets',
      inspect: 'Inspecter la Réalisation',
      interactiveTitle: 'Comparateur Avant / Après Interactif',
    },
    sectors: {
      title: 'Des Solutions Adaptées à Votre Espace Extérieur',
      subtitle:
        'Dans le rythme effréné de la ville, votre refuge personnel doit trouver le parfait équilibre entre sérénité et fonctionnalité quotidienne. Nous concevons des espaces apaisants qui s’adaptent avec fluidité à vos habitudes.',
      s1Title: 'City Gardens & Patios',
      s1Tagline: 'Havres de paix intimistes',
      s1Desc:
        'Nous transformons les espaces extérieurs urbains en cours arrière calmes et privées. Des coins repas en pierre naturelle, des touches de bois chaleureux, des brise-vues végétaux et de discrets jeux d’eau qui atténuent les bruits environnants pour préserver votre intimité.',
      s2Title: 'Balconies',
      s2Tagline: 'Inspiré par votre propre créativité',
      s2Desc:
        'Transformez votre balcon en béton standard en un lieu inspiré par votre propre créativité. Bois, végétaux et mobilier. Nous adaptons chaque détail à vos besoins précis.',
      s3Title: 'Rooftop Gardens',
      s3Tagline: 'Micro-biotopes biodiversifiés au-dessus de la ville',
      s3Desc:
        'Besoin d’un havre de paix au-dessus de la ville ? Créez un micro-biotope à usage intensif ou extensif et intégrez un îlot de biodiversité au cœur de Bruxelles.',
      s4Title: 'Stone Terraces And Driveways',
      s4Tagline: 'Pierre naturelle durable, drainage intelligent & éclairage',
      s4Desc:
        'Sublimez votre allée ou terrasse pour en faire un espace pérenne et élégant. Nous associons la pierre naturelle durable à des revêtements perméables et semi-perméables pour un drainage optimal, rehaussé d’un éclairage subtil pour profiter de votre extérieur de jour comme de nuit.',
    },
    methodology: {
      title: 'Notre Parcours Architectural',
      subtitle:
        'Un processus rigoureux en 4 étapes, du premier échange à la réalisation pérenne.',
      learnMore: 'Get in touch',
      m1Title: '01. Premier Échange Gratuit',
      m1Desc:
        'Remplissez notre formulaire de contact afin que nous puissions préparer un premier échange gratuit.',
      m2Title: '02. Conception Spatiale',
      m2Desc:
        'Plans architecturaux 2D et concepts 3D basés sur notre premier échange. Nous y ajustons les détails et mettons les points sur les i.',
      m3Title: '03. Aménagement & Construction',
      m3Desc:
        'La phase où votre projet prend vie. Le jardin se dessine avec la pose de pierre naturelle et un travail soigné du bois.',
      m4Title: '04. Intégration Végétale & Réception',
      m4Desc:
        'La touche finale. Nous végétalisons les espaces aménagés avec une sélection végétale diversifiée. Nous nettoyons soigneusement le chantier pour vous laisser profiter sereinement de votre nouvel espace vert.',
    },
    ctaBanner: {
      title: 'Prêt à Transformer Votre Espace Extérieur à Bruxelles ?',
      subtitle:
        'Nous effectuons des visites-conseils sur place à Bruxelles pour analyser la lumière, les dimensions et le potentiel végétal. Anton Arnauts est notifié instantanément.',
      button: 'Get in touch',
      recipientNote: 'Notification Directe : antonarnauts@A2trails.com',
    },
    footer: {
      description:
        'Dans le rythme effréné de la ville, votre coin de nature privé doit être le parfait équilibre entre repos et fonctionnalité. Spécialisé dans les terrasses, jardins de ville et balcons alliant calme et praticité.',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      studio: 'Studio Bruxellois',
      contactAnton: 'Contact Automatisé',
      rights: 'Tous droits réservés.',
      backToTop: 'Haut de page',
      requestVisit: 'Demander une Visite de Projet',
      contact: 'Contact',
      followUs: 'Suivez-nous',
      vat: 'TVA',
      address: 'Siège Social',
      privacy: 'Politique de Confidentialité',
      terms: "Conditions d'Utilisation",
    },
  },
};

/**
 * Detect browser's preferred language from navigator object
 * Accurately handles:
 * - 'nl', 'nl-BE', 'nl-NL' -> 'nl'
 * - 'fr', 'fr-BE', 'fr-FR', 'fr-CH' -> 'fr'
 * - 'en', 'en-US', 'en-GB', etc. -> 'en'
 */
export function detectBrowserLanguage(): LanguageCode {
  if (typeof window === 'undefined' || !navigator) return 'en';

  const candidates: string[] = [];
  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    candidates.push(...navigator.languages);
  }
  if (navigator.language) {
    candidates.push(navigator.language);
  }

  for (const candidate of candidates) {
    if (!candidate) continue;
    const lower = candidate.toLowerCase().trim();
    if (lower.startsWith('nl')) {
      return 'nl';
    }
    if (lower.startsWith('fr')) {
      return 'fr';
    }
    if (lower.startsWith('en')) {
      return 'en';
    }
  }

  return 'en';
}

/**
 * Check if a valid URL parameter exists (e.g. ?lang=nl or ?lang=fr)
 */
function getUrlLanguage(): LanguageCode | null {
  if (typeof window === 'undefined') return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang')?.toLowerCase().trim();
    if (paramLang === 'en' || paramLang === 'nl' || paramLang === 'fr') {
      return paramLang;
    }
  } catch {
    // Ignore URL parse errors
  }
  return null;
}

interface LanguageContextType {
  currentLanguage: LanguageCode;
  detectedBrowserLanguage: LanguageCode;
  isAutoDetected: boolean;
  setLanguage: (lang: LanguageCode) => void;
  resetToBrowserLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY_OVERRIDE = 'a2gardens_user_lang_override';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Initial detection
  const detectedBrowserLanguage = detectBrowserLanguage();
  const urlLang = getUrlLanguage();

  const [currentLanguage, setCurrentLanguageState] = useState<LanguageCode>(() => {
    // Priority 1: URL parameter
    if (urlLang) return urlLang;
    // Priority 2: Saved user override in localStorage
    if (typeof window !== 'undefined') {
      const savedOverride = localStorage.getItem(STORAGE_KEY_OVERRIDE) as LanguageCode | null;
      if (savedOverride === 'en' || savedOverride === 'nl' || savedOverride === 'fr') {
        return savedOverride;
      }
    }
    // Priority 3: Browser detected language (Hybrid Auto)
    return detectedBrowserLanguage;
  });

  const [isAutoDetected, setIsAutoDetected] = useState<boolean>(() => {
    if (urlLang) return false;
    if (typeof window !== 'undefined') {
      const savedOverride = localStorage.getItem(STORAGE_KEY_OVERRIDE);
      if (savedOverride) return false;
    }
    return true;
  });

  // Sync html lang attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLanguage;
    }
  }, [currentLanguage]);

  // Hybrid listener: if browser language changes (rare, but supported by modern browsers) and no manual override is set
  useEffect(() => {
    const handleLanguageChange = () => {
      const savedOverride = localStorage.getItem(STORAGE_KEY_OVERRIDE);
      if (!savedOverride) {
        const newlyDetected = detectBrowserLanguage();
        setCurrentLanguageState(newlyDetected);
        setIsAutoDetected(true);
      }
    };

    window.addEventListener('languagechange', handleLanguageChange);
    return () => window.removeEventListener('languagechange', handleLanguageChange);
  }, []);

  // Set explicit language preference (manual override)
  const setLanguage = (lang: LanguageCode) => {
    setCurrentLanguageState(lang);
    setIsAutoDetected(false);
    try {
      localStorage.setItem(STORAGE_KEY_OVERRIDE, lang);
    } catch {
      // Ignore storage write errors
    }
  };

  // Reset to hybrid automatic browser detection
  const resetToBrowserLanguage = () => {
    try {
      localStorage.removeItem(STORAGE_KEY_OVERRIDE);
    } catch {
      // Ignore
    }
    const detected = detectBrowserLanguage();
    setCurrentLanguageState(detected);
    setIsAutoDetected(true);
  };

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        detectedBrowserLanguage,
        isAutoDetected,
        setLanguage,
        resetToBrowserLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
