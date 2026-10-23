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
    beforeLabel: string;
    afterLabel: string;
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
  aboutSection: {
    role: string;
    tag: string;
    title: string;
    intro: string;
    missionTitle: string;
    missionP1: string;
    missionP2: string;
    dreamTitle: string;
    dreamP1: string;
    cta: string;
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    button: string;
    recipientNote: string;
  };
  contactSection: {
    tag: string;
    title: string;
    subtitlePrefix: string;
    subtitleMid: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    spaceTypeLabel: string;
    spaceTypes: {
      city_garden: string;
      balcony: string;
      rooftop: string;
      terrace: string;
      villa_garden: string;
    };
    communeLabel: string;
    otherCommune: string;
    areaLabel: string;
    areaPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitting: string;
    submitButton: string;
    directNote: string;
    errorName: string;
    errorEmail: string;
    errorMessage: string;
    successTitle: string;
    successSubPrefix: string;
    successSubDefaultClient: string;
    successSubSuffix: string;
    recipientLabel: string;
    channelLabel: string;
    reviewLabel: string;
    reviewTime: string;
    nextStepsTitle: string;
    step1: string;
    step2: string;
    step3: string;
    openEmailApp: string;
    sendAnother: string;
    detailsTitle: string;
    emailTitle: string;
    officeTitle: string;
    officeAddress: string;
    vatTitle: string;
    hoursTitle: string;
    hoursLabel: string;
    auditsNote: string;
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
      badge: 'Brussels Garden Architecture Studio',
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
      beforeLabel: 'Before',
      afterLabel: 'After',
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
    aboutSection: {
      role: 'Landscape Architect & Founder',
      tag: 'About',
      title: 'Transforming Urban Spaces, One Garden at a Time',
      intro:
        'For the past decade, I’ve worked as a landscape architect designing high-impact public spaces and free-to-use sport infrastructure. Creating active, durable environments for the community taught me how to maximize space, balance function with aesthetics, and design landscapes built to last.',
      missionTitle: 'A New Mission: Urban Biodiversity',
      missionP1:
        'Now, I’m taking that decade of urban experience and directing it toward a new goal: bringing nature back to the concrete grid through micro-greenspots.',
      missionP2:
        'Cities urgently need biodiverse habitats to support local ecosystems, cool neighborhoods, and enrich our daily lives. Every courtyard, rooftop, and backyard holds the potential to become a vital pocket of green.',
      dreamTitle: 'Your Dream Garden: A Living Sanctuary',
      dreamP1:
        'What better way to boost urban biodiversity than by creating your own private haven? I combine urban landscape architecture with eco-centric design to transform personal outdoor spaces into vibrant, tailored ecological hubs.',
      cta: "Let's Design Your Garden",
    },
    ctaBanner: {
      title: 'Ready to transform your Brussels outdoor space?',
      subtitle:
        'We provide initial on-site consultations across Brussels to evaluate light, dimensions, and botanical possibilities. Our automated dispatch notifies architect Anton Arnauts instantly.',
      button: 'Get in touch',
      recipientNote: 'Direct Notification: antonarnauts@a2trails.com',
    },
    contactSection: {
      tag: 'Get in Touch',
      title: 'Get in Touch',
      subtitlePrefix:
        'Tell us about your outdoor space in Brussels. Submissions are processed through our automated notification dispatch directly to architect ',
      subtitleMid: ' at ',
      nameLabel: 'Your Full Name *',
      namePlaceholder: 'e.g. Marie Laurent',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'marie@example.be',
      phoneLabel: 'Phone Number (Optional)',
      phonePlaceholder: '+32 4...',
      spaceTypeLabel: 'Space Type *',
      spaceTypes: {
        city_garden: 'City Gardens & Patios',
        balcony: 'Balconies',
        rooftop: 'Rooftop Gardens',
        terrace: 'Stone Terraces And Driveways',
        villa_garden: 'Villa Gardens',
      },
      communeLabel: 'Brussels Commune *',
      otherCommune: 'Other',
      areaLabel: 'Approx. Area (m²)',
      areaPlaceholder: 'e.g. 35 m²',
      messageLabel: 'Your Vision or Requirements *',
      messagePlaceholder:
        'Describe your current outdoor space and wish list (paving, greenery, privacy, acoustic calm)...',
      submitting: 'Transmitting to Formspree & Anton Arnauts...',
      submitButton: 'Get in Touch',
      directNote: 'Direct notification dispatched to antonarnauts@a2trails.com',
      errorName: 'Please enter your full name.',
      errorEmail: 'Please provide a valid email address.',
      errorMessage: 'Please enter a brief message describing your garden, terrace, or balcony.',
      successTitle: 'Project Inquiry Transmitted!',
      successSubPrefix: 'Thank you, ',
      successSubDefaultClient: 'valued client',
      successSubSuffix: '. Your inquiry has been delivered directly to Anton Arnauts via Formspree.',
      recipientLabel: 'Notification Recipient:',
      channelLabel: 'Delivery Channel:',
      reviewLabel: 'Expected Review:',
      reviewTime: 'Within 24 Hours',
      nextStepsTitle: 'Next Steps in Your Brussels Project',
      step1: 'Anton Arnauts will review your space dimensions, orientation, and Brussels commune requirements.',
      step2: 'We will contact you via email or phone to arrange a 45-minute on-site survey.',
      step3: 'Following the visit, you will receive our preliminary conceptual layout.',
      openEmailApp: 'Open in Your Email App',
      sendAnother: 'Send Another Inquiry',
      detailsTitle: 'Contact Details',
      emailTitle: 'Email',
      officeTitle: 'Registered Office',
      officeAddress: 'Mariemontkaai 15, 1080 Brussel, Belgium',
      vatTitle: 'VAT Number',
      hoursTitle: 'Consultation Hours',
      hoursLabel: 'Hours',
      auditsNote: 'On-site audits conducted across all 19 Brussels communes and further.',
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
      home: 'Startpagina',
      services: 'Diensten',
      projects: 'Projecten',
      about: 'Over Ons',
      contact: 'Contact',
      consultation: 'Neem contact op',
      mobileCall: 'Diensten',
    },
    hero: {
      badge: 'Brussels Bureau voor Tuinarchitectuur',
      title: 'Terrassen,\nStadstuinen & Balkons',
      subtitle:
        'In een druk stadsleven hoort uw eigen stukje natuur de perfecte balans te vormen tussen rust en functionaliteit. Wij ontwerpen verfijnde buitenruimtes met één duidelijk doel: volledig tot rust komen na de hectiek van de stad. Met duurzaam hout, stijlvolle natuursteen en een doordachte, biodiverse plantenselectie creëren wij uw persoonlijke groene toevluchtsoord.',
      ctaPrimary: 'Neem contact op',
      ctaSecondary: 'Onze Diensten',
      regionBadge: 'Regio Brussel',
    },
    categories: {
      cityGardens: 'Stadstuinen & Patio’s',
      balconies: 'Balkons',
      rooftops: 'Daktuinen',
      terraces: 'Natuurstenen Terrassen & Opritten',
    },
    spotlight: {
      tag: 'Recente Realisaties',
      title: 'Voor & Na Transformaties',
      subtitle: 'Schuif de balk naar links en rechts om de volledige transformatie van onze recente Brusselse tuin- en terrasprojecten te ontdekken.',
      viewAll: 'Bekijk Alle Projecten',
      inspect: 'Bekijk Transformatie',
      interactiveTitle: 'Interactieve Voor / Na Vergelijking',
      beforeLabel: 'Voor',
      afterLabel: 'Na',
    },
    sectors: {
      title: 'Oplossingen op Maat van Uw Buitenruimte',
      subtitle:
        'In een bruisende stad moet uw buitenruimte zowel diepe rust als moeiteloos dagelijks gebruiksgemak bieden. Wij ontwerpen harmonieuze buitenplekken die de zintuigen kalmeren en naadloos aansluiten op uw levensstijl.',
      s1Title: 'Stadstuinen & Patio’s',
      s1Tagline: 'Rustige, beschutte stadstuinen vol privacy',
      s1Desc:
        'Wij vormen stedelijke buitenruimtes om tot serene, groene stadstuinen en patio’s. Denk aan sfeervolle eetplekken in natuursteen, warme houtaccenten, natuurlijke groenschermen voor optimale privacy en subtiele waterelementen die het stadsgeluid verzachten.',
      s2Title: 'Balkons',
      s2Tagline: 'Geïnspireerd door uw wensen en creativiteit',
      s2Desc:
        'Vorm uw standaard betonnen balkon om tot een karaktervolle buitenkamer op maat. Van houten vlonders tot wintergroene plantenbakken en geïntegreerd meubilair: wij stemmen elk detail af op uw ruimte en oriëntatie.',
      s3Title: 'Daktuinen',
      s3Tagline: 'Biodiverse microbiotopen boven de Brusselse skyline',
      s3Desc:
        'Op zoek naar een groene oase boven de daken van de stad? Wij ontwerpen en realiseren intensieve en extensieve daktuinen die fungeren als een biodiverse groene plek in het hart van Brussel.',
      s4Title: 'Natuurstenen Terrassen & Opritten',
      s4Tagline: 'Duurzame natuursteen, slimme drainage & sfeervolle verlichting',
      s4Desc:
        'Geef uw terras of oprit een tijdloze en duurzame uitstraling. Wij combineren hoogwaardige natuursteen met waterdoorlatende en halfdoorlatende funderingen voor een optimale regenwaterafvoer, afgewerkt met subtiele tuinverlichting voor sfeer bij dag en nacht.',
    },
    methodology: {
      title: 'Ons Architecturaal Stappenplan',
      subtitle:
        'Een helder en gestructureerd traject in 4 stappen: van een eerste vrijblijvend kennismakingsgesprek tot een zorgeloze oplevering.',
      learnMore: 'Neem contact op',
      m1Title: '01. Eerste Vrijblijvend Gesprek',
      m1Desc:
        'Vul ons contactformulier in zodat wij ons optimaal kunnen voorbereiden op een eerste gratis en vrijblijvend kennismakingsgesprek ter plaatse.',
      m2Title: '02. Ruimtelijk Ontwerp',
      m2Desc:
        'Op basis van uw wensen werken wij gedetailleerde 2D-plannen en 3D-concepten uit. Samen bespreken we elke materiaalkeuze en zetten we alle puntjes op de i.',
      m3Title: '03. Tuinaanleg & Constructie',
      m3Desc:
        'De fase waarin uw droomtuin werkelijkheid wordt. De buitenruimte krijgt vorm met vakkundige grondwerken, plaatsing van natuursteen en maatwerk in duurzaam hout.',
      m4Title: '04. Aanplanting & Oplevering',
      m4Desc:
        'De groene kroon op het werk. We vullen de aangelegde structuren met een rijke, biodiverse plantenselectie. We leveren alles piekfijn op zodat u meteen volop kunt genieten.',
    },
    aboutSection: {
      role: 'Landschapsarchitect & Oprichter',
      tag: 'Over A2Gardens',
      title: 'Stedelijke Ruimtes Transformeren, Tuin per Tuin',
      intro:
        'De afgelopen tien jaar heb ik als landschapsarchitect gewerkt aan het ontwerpen van duurzame publieke ruimtes en vrij toegankelijke sport- en buiteninfrastructuur. Het creëren van intensief gebruikte buitenomgevingen leerde me hoe je elke vierkante meter optimaal benut, functionaliteit en esthetiek verenigt, en landschappen bouwt die generaties lang meegaan.',
      missionTitle: 'Een Nieuwe Missie: Stedelijke Biodiversiteit',
      missionP1:
        'Vandaag zet ik die tien jaar ervaring in voor een gerichte missie in de stad: de natuur terugbrengen in het stedelijke weefsel via doordachte groene micro-biotopen.',
      missionP2:
        'Steden hebben meer dan ooit nood aan biodiverse tuinen die lokale ecosystemen ondersteunen, hitte-eilanden verkoelen en rust brengen in ons dagelijkse leven. Elke stadskoer, elk dakterras en elke achtertuin draagt het potentieel in zich om een vitale groene oase te worden.',
      dreamTitle: 'Uw Droomtuin: Een Levend Toevluchtsoord',
      dreamP1:
        'Hoe kunt u de stedelijke natuur beter versterken dan met uw eigen groene buitenkamer? Ik combineer architecturale precisie met ecologisch tuinontwerp om uw terras, balkon of stadstuin om te vormen tot een levendige, onderhoudsvriendelijke plek op maat.',
      cta: 'Laat Ons Uw Tuin Ontwerpen',
    },
    ctaBanner: {
      title: 'Klaar om uw Brusselse buitenruimte te transformeren?',
      subtitle:
        'Wij komen graag ter plaatse in Brussel en omstreken om lichtinval, afmetingen en beplantingsmogelijkheden te bekijken. Landschapsarchitect Anton Arnauts ontvangt uw aanvraag rechtstreeks.',
      button: 'Neem contact op',
      recipientNote: 'Directe Melding: antonarnauts@a2trails.com',
    },
    contactSection: {
      tag: 'Contact & Advies',
      title: 'Neem Contact Op',
      subtitlePrefix:
        'Vertel ons over uw tuin, terras of balkon in Brussel of omstreken. Uw aanvraag wordt rechtstreeks bezorgd aan landschapsarchitect ',
      subtitleMid: ' via ',
      nameLabel: 'Uw Volledige Naam *',
      namePlaceholder: 'bijv. Marie Janssens',
      emailLabel: 'E-mailadres *',
      emailPlaceholder: 'marie@voorbeeld.be',
      phoneLabel: 'Telefoonnummer (Optioneel)',
      phonePlaceholder: '+32 4...',
      spaceTypeLabel: 'Type Buitenruimte *',
      spaceTypes: {
        city_garden: 'Stadstuinen & Patio’s',
        balcony: 'Balkons',
        rooftop: 'Daktuinen',
        terrace: 'Natuurstenen Terrassen & Opritten',
        villa_garden: 'Villatuinen',
      },
      communeLabel: 'Brusselse Gemeente *',
      otherCommune: 'Andere gemeente',
      areaLabel: 'Geschatte Oppervlakte (m²)',
      areaPlaceholder: 'bijv. 35 m²',
      messageLabel: 'Uw Visie of Wensen *',
      messagePlaceholder:
        'Beschrijf uw huidige buitenruimte en uw wensen (terras, beplanting, pergola, privacy, verlichting, drainage)...',
      submitting: 'Aanvraag verzenden naar Anton Arnauts...',
      submitButton: 'Verstuur Aanvraag',
      directNote: 'Rechtstreekse melding naar antonarnauts@a2trails.com',
      errorName: 'Vul alstublieft uw volledige naam in.',
      errorEmail: 'Vul alstublieft een geldig e-mailadres in.',
      errorMessage: 'Geef alstublieft een korte beschrijving van uw tuin, terras of balkon.',
      successTitle: 'Projectaanvraag Goed Ontvangen!',
      successSubPrefix: 'Hartelijk dank, ',
      successSubDefaultClient: 'geachte klant',
      successSubSuffix: '. Uw aanvraag is rechtstreeks doorgestuurd naar Anton Arnauts.',
      recipientLabel: 'Ontvanger:',
      channelLabel: 'Verzendkanaal:',
      reviewLabel: 'Verwachte Reactietijd:',
      reviewTime: 'Binnen 24 Uur',
      nextStepsTitle: 'Volgende Stappen voor Uw Project',
      step1: 'Anton Arnauts bekijkt uw opgegeven afmetingen, oriëntatie en projectwensen.',
      step2: 'Wij nemen via e-mail of telefoon contact met u op om een plaatsbezoek van circa 45 minuten in te plannen.',
      step3: 'Na het bezoek ontvangt u ons voorlopig conceptueel ontwerp.',
      openEmailApp: 'Open in Uw E-mailprogramma',
      sendAnother: 'Nieuwe Aanvraag Indienen',
      detailsTitle: 'Contactgegevens',
      emailTitle: 'E-mailadres',
      officeTitle: 'Maatschappelijke Zetel',
      officeAddress: 'Mariemontkaai 15, 1080 Brussel, België',
      vatTitle: 'BTW-nummer',
      hoursTitle: 'Bereikbaarheid & Consultaties',
      hoursLabel: 'Uren',
      auditsNote: 'Plaatsbezoeken en opmetingen in alle 19 Brusselse gemeenten en ver daarbuiten.',
    },
    footer: {
      description:
        'In een druk stadsleven hoort uw eigen stukje natuur de perfecte balans te vormen tussen rust en functionaliteit. Gespecialiseerd in het ontwerp en de aanleg van terrassen, stadstuinen en balkons op maat.',
      quickLinks: 'Snelle Links',
      services: 'Diensten',
      studio: 'Brussels Atelier',
      contactAnton: 'Rechtstreeks Contact',
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
      consultation: 'Nous contacter',
      mobileCall: 'Services',
    },
    hero: {
      badge: 'Studio d’Architecture de Jardin à Bruxelles',
      title: 'Terrasses,\nJardins de ville & Balcons',
      subtitle:
        'Dans le rythme effréné de la ville, votre coin de nature privé doit être le parfait équilibre entre repos et fonctionnalité. Nous concevons des espaces extérieurs raffinés où le seul objectif est de déconnecter de la vie urbaine chaotique. Avec du bois chaleureux, des pierres élégantes et une sélection végétale diversifiée, nous créons votre sanctuaire extérieur.',
      ctaPrimary: 'Nous contacter',
      ctaSecondary: 'Nos Services',
      regionBadge: 'Région Bruxelloise',
    },
    categories: {
      cityGardens: 'Jardins de Ville & Patios',
      balconies: 'Balcons',
      rooftops: 'Jardins sur Toit',
      terraces: 'Terrasses en Pierre & Allées',
    },
    spotlight: {
      tag: 'Transformations Récentes',
      title: 'Transformations Avant & Après',
      subtitle: 'Faites glisser la barre de gauche à droite pour découvrir le résultat de nos récents projets extérieurs à Bruxelles.',
      viewAll: 'Voir Tous les Projets',
      inspect: 'Inspecter la Réalisation',
      interactiveTitle: 'Comparateur Avant / Après Interactif',
      beforeLabel: 'Avant',
      afterLabel: 'Après',
    },
    sectors: {
      title: 'Des Solutions Adaptées à Votre Espace Extérieur',
      subtitle:
        'Dans le rythme effréné de la ville, votre refuge personnel doit trouver le parfait équilibre entre sérénité et fonctionnalité quotidienne. Nous concevons des espaces apaisants qui s’adaptent avec fluidité à vos habitudes.',
      s1Title: 'Jardins de Ville & Patios',
      s1Tagline: 'Havres de paix intimistes',
      s1Desc:
        'Nous transformons les espaces extérieurs urbains en cours arrière calmes et privées. Des coins repas en pierre naturelle, des touches de bois chaleureux, des brise-vues végétaux et de discrets jeux d’eau qui atténuent les bruits environnants pour préserver votre intimité.',
      s2Title: 'Balcons',
      s2Tagline: 'Inspiré par votre propre créativité',
      s2Desc:
        'Transformez votre balcon en béton standard en un lieu inspiré par votre propre créativité. Bois, végétaux et mobilier. Nous adaptons chaque détail à vos besoins précis.',
      s3Title: 'Jardins sur Toit',
      s3Tagline: 'Micro-biotopes biodiversifiés au-dessus de la ville',
      s3Desc:
        'Besoin d’un havre de paix au-dessus de la ville ? Créez un micro-biotope à usage intensif ou extensif et intégrez un îlot de biodiversité au cœur de Bruxelles.',
      s4Title: 'Terrasses en Pierre & Allées',
      s4Tagline: 'Pierre naturelle durable, drainage intelligent & éclairage',
      s4Desc:
        'Sublimez votre allée ou terrasse pour en faire un espace pérenne et élégant. Nous associons la pierre naturelle durable à des revêtements perméables et semi-perméables pour un drainage optimal, rehaussé d’un éclairage subtil pour profiter de votre extérieur de jour comme de nuit.',
    },
    methodology: {
      title: 'Notre Parcours Architectural',
      subtitle:
        'Un processus rigoureux en 4 étapes, du premier échange à la réalisation pérenne.',
      learnMore: 'Nous contacter',
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
    aboutSection: {
      role: 'Architecte Paysagiste & Fondateur',
      tag: 'À Propos',
      title: 'Transformer les Espaces Urbains, un Jardin à la Fois',
      intro:
        'Au cours de la dernière décennie, j’ai travaillé comme architecte paysagiste en concevant des espaces publics à fort impact et des infrastructures sportives en libre accès. Créer des environnements durables m’a appris à optimiser chaque mètre carré et à allier fonctionnalité et esthétique.',
      missionTitle: 'Une Nouvelle Mission : La Biodiversité Urbaine',
      missionP1:
        'Aujourd’hui, je mets ces dix années d’expérience urbaine au service d’un nouvel objectif : ramener la nature au cœur de la ville grâce à des micro-oasis végétales.',
      missionP2:
        'Les villes ont un besoin urgent d’habitats biodiversifiés pour soutenir les écosystèmes locaux, rafraîchir les quartiers et enrichir notre quotidien. Chaque cour, toit ou jardin recèle le potentiel de devenir un îlot de verdure essentiel.',
      dreamTitle: 'Votre Jardin de Rêve : Un Sanctuaire Vivant',
      dreamP1:
        'Quelle meilleure façon de stimuler la biodiversité urbaine qu’en créant votre propre havre de paix ? J’allie architecture paysagère et conception écologique pour transformer votre extérieur en un espace vivant sur mesure.',
      cta: 'Concevons Votre Jardin',
    },
    ctaBanner: {
      title: 'Prêt à transformer votre espace extérieur à Bruxelles ?',
      subtitle:
        'Nous effectuons des visites-conseils sur place à Bruxelles pour analyser la lumière, les dimensions et le potentiel végétal. Anton Arnauts est notifié instantanément.',
      button: 'Nous contacter',
      recipientNote: 'Notification Directe : antonarnauts@a2trails.com',
    },
    contactSection: {
      tag: 'Contact',
      title: 'Nous Contacter',
      subtitlePrefix:
        'Parlez-nous de votre espace extérieur à Bruxelles. Les demandes sont transmises directement à l’architecte paysagiste ',
      subtitleMid: ' sur ',
      nameLabel: 'Votre Nom Complet *',
      namePlaceholder: 'ex. Marie Laurent',
      emailLabel: 'Adresse E-mail *',
      emailPlaceholder: 'marie@exemple.be',
      phoneLabel: 'Téléphone (Optionnel)',
      phonePlaceholder: '+32 4...',
      spaceTypeLabel: 'Type d’Espace *',
      spaceTypes: {
        city_garden: 'Jardins de Ville & Patios',
        balcony: 'Balcons',
        rooftop: 'Jardins sur Toit',
        terrace: 'Terrasses en Pierre & Allées',
        villa_garden: 'Jardins de Villa',
      },
      communeLabel: 'Commune Bruxelloise *',
      otherCommune: 'Autre commune',
      areaLabel: 'Surface Approx. (m²)',
      areaPlaceholder: 'ex. 35 m²',
      messageLabel: 'Votre Vision ou Vos Besoins *',
      messagePlaceholder:
        'Décrivez votre espace extérieur actuel et vos souhaits (pavage, végétation, intimité, calme acoustique)...',
      submitting: 'Envoi en cours à Anton Arnauts...',
      submitButton: 'Envoyer la Demande',
      directNote: 'Notification directe envoyée à antonarnauts@a2trails.com',
      errorName: 'Veuillez entrer votre nom complet.',
      errorEmail: 'Veuillez fournir une adresse e-mail valide.',
      errorMessage: 'Veuillez décrire brièvement votre jardin, terrasse ou balcon.',
      successTitle: 'Demande de Projet Envoyée !',
      successSubPrefix: 'Merci, ',
      successSubDefaultClient: 'cher client',
      successSubSuffix: '. Votre demande a été transmise directement à Anton Arnauts.',
      recipientLabel: 'Destinataire :',
      channelLabel: 'Canal de livraison :',
      reviewLabel: 'Délai de réponse :',
      reviewTime: 'Sous 24 Heures',
      nextStepsTitle: 'Prochaines Étapes de Votre Projet',
      step1: 'Anton Arnauts analysera les dimensions, l’orientation et les spécificités de votre espace.',
      step2: 'Nous vous contacterons par e-mail ou téléphone pour planifier une visite sur place de 45 minutes.',
      step3: 'Suite à la visite, vous recevrez notre avant-projet conceptuel.',
      openEmailApp: 'Ouvrir dans Votre Messagerie',
      sendAnother: 'Envoyer une Autre Demande',
      detailsTitle: 'Coordonnées',
      emailTitle: 'E-mail',
      officeTitle: 'Siège Social',
      officeAddress: 'Quai de Mariemont 15, 1080 Bruxelles, Belgique',
      vatTitle: 'Numéro de TVA',
      hoursTitle: 'Heures de Consultation',
      hoursLabel: 'Horaires',
      auditsNote: 'Visites et audits sur place dans les 19 communes de Bruxelles et au-delà.',
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
  const detectedBrowserLanguage: LanguageCode = 'en';
  const [currentLanguage, setCurrentLanguageState] = useState<LanguageCode>('en');
  const [isAutoDetected, setIsAutoDetected] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLanguage;
    }
  }, [currentLanguage]);

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLanguageState(lang);
    setIsAutoDetected(false);
  };

  const resetToBrowserLanguage = () => {
    setCurrentLanguageState('en');
    setIsAutoDetected(false);
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
