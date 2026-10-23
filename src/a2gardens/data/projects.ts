import { Project } from '../types';
import { getAssetPath } from '../../lib/utils';
import { LanguageCode } from '../context/LanguageContext';

export const BRUSSELS_PROJECTS: Project[] = [
  {
    id: 'pergola-timber-terrace',
    title: 'Custom Pergola & Timber Terrace',
    category: 'terrace',
    categoryLabel: 'Pergola & Timber Terrace',
    location: 'Brussels Region',
    commune: 'Brussels',
    surfaceArea: '25 m²',
    orientation: 'South',
    year: '2024',
    tagline: 'Inviting outdoor living room framed by an inox pergola, bespoke timber privacy slats, and durable decking.',
    summary: 'Transforming an open backyard area into an inviting outdoor living room framed by an inox pergola, bespoke timber privacy slats, and durable decking.',
    challenge: 'Exposed backyard lacking shade and architectural definition.',
    architecturalSolution: 'Constructed an architectural inox pergola structure with bespoke timber privacy slats, durable wood decking, and recessed weatherproof lighting.',
    beforeImage: getAssetPath('a2gardens/images/pergolabefore.webp'),
    afterImage: getAssetPath('a2gardens/images/pergolaafter.webp'),
    beforeLabel: 'Before',
    afterLabel: 'After',
    gallery: [
      getAssetPath('a2gardens/images/pergolaafter.webp'),
      getAssetPath('a2gardens/images/pergolabefore.webp'),
    ],
    materials: [
      'Solid Structural Inox Pergola',
      'High-Durability Wood Decking',
      'Shading Slats',
      'Recessed Weatherproof LED Lighting',
    ],
    plantPalette: [
      { name: 'Wisteria', botanicalName: 'Wisteria sinensis', sunlight: 'Full Sun', role: 'Pergola Shading Canopy' },
      { name: 'Feather Reed Grass', botanicalName: 'Calamagrostis acutiflora', sunlight: 'Full Sun', role: 'Soft Screening' },
    ],
    highlights: [
      'Solid structural inox pergola framework',
      'High-durability wood decking with integrated shading slats',
      'Recessed weatherproof LED lighting for evening gatherings',
    ],
    testimonial: {
      client: 'Brussels Resident',
      neighborhood: 'Brussels',
      quote: 'The inox pergola and timber terrace transformed our garden into a true outdoor living room.',
    },
  },
  {
    id: 'molenbeek-courtyard',
    title: 'Molenbeek Courtyard & Terrace',
    category: 'terrace',
    categoryLabel: 'Townhouse patio & Terrace',
    location: 'Molenbeek-Saint-Jean, Brussels',
    commune: 'Molenbeek',
    surfaceArea: '20 m²',
    orientation: 'South-East',
    year: '2024',
    tagline: 'Townhouse patio & Terrace with permeable gravel paving, reinforced grass parking and custom architectural plants.',
    summary: 'A high-walled townhouse courtyard revived with permeable gravel paving, reinforced grass parking with integrated drainage. Finished off with custom architectural plants for varied green experience.',
    challenge: 'Enclosed high-walled urban patio requiring parking reinforcement, permeable paving, and improved water drainage.',
    architecturalSolution: 'Integrated reinforced grass tiles with permeable gravel bedding, concealed drainage channels, and architectural planters.',
    beforeImage: getAssetPath('a2gardens/images/molenbeekbefore.webp'),
    afterImage: getAssetPath('a2gardens/images/molenbeekafter.webp'),
    beforeLabel: 'Before',
    afterLabel: 'After',
    afterObjectPosition: 'center 80%',
    gallery: [
      getAssetPath('a2gardens/images/molenbeekafter.webp'),
      getAssetPath('a2gardens/images/molenbeekbefore.webp'),
    ],
    materials: [
      'Natural Stone',
      'Reinforced Grass Tiles',
      'Concealed Drainage Channels',
    ],
    plantPalette: [
      { name: 'Star Jasmine', botanicalName: 'Trachelospermum jasminoides', sunlight: 'Full Sun', role: 'Evergreen Fragrant Climber' },
      { name: 'Autumn Fern', botanicalName: 'Dryopteris erythrosora', sunlight: 'Deep Shade', role: 'Rich Foliage Texture' },
    ],
    highlights: [
      'Reinforced grass parking integrated into terrace design',
      'Concealed drainage channels for optimal rainwater flow',
      'Architectural plants providing a layered green experience',
    ],
    testimonial: {
      client: 'Townhouse Owner',
      neighborhood: 'Molenbeek',
      quote: 'The transformation brought light, warmth, and greenery into a courtyard we barely used before.',
    },
  },
  {
    id: 'laeken-garden-transformation',
    title: 'Laeken Garden Transformation',
    category: 'city_garden',
    categoryLabel: 'City Garden & Patio',
    location: 'Laeken, Brussels',
    commune: 'Laeken',
    surfaceArea: '25 m²',
    orientation: 'South-West',
    year: '2024',
    tagline: 'Transforming the garden from the 70’s of a family home to a perfect spot to enjoy their green surroundings.',
    summary: 'Transforming the garden from the 70’s of a family home to a perfect spot to enjoy their green surroundings.',
    challenge: 'Aging 70’s layout with awkward grade changes, weathered surfaces, and poor water evacuation.',
    architecturalSolution: 'Complete ground stabilization, natural stone paving, permeable drainage foundation, and integrated ambient evening lighting.',
    beforeImage: getAssetPath('a2gardens/images/laekenbefore.webp'),
    afterImage: getAssetPath('a2gardens/images/laekenafter.webp'),
    beforeLabel: 'Before',
    afterLabel: 'After',
    gallery: [
      getAssetPath('a2gardens/images/laekenafter.webp'),
      getAssetPath('a2gardens/images/laekenbefore.webp'),
    ],
    materials: [
      'Natural Stone Paving',
      'Permeable Drainage Foundation & Water Evacuation',
      'Integrated Evening Lighting',
    ],
    plantPalette: [
      { name: 'Japanese Forest Grass', botanicalName: 'Hakonechloa macra', sunlight: 'Partial Shade', role: 'Softening Borders' },
      { name: 'Hydrangea "Annabelle"', botanicalName: 'Hydrangea arborescens', sunlight: 'Partial Shade', role: 'Summer Blooms' },
      { name: 'Sweet Box', botanicalName: 'Sarcococca confusa', sunlight: 'Deep Shade', role: 'Winter Fragrance' },
    ],
    highlights: [
      'Permeable drainage foundation & smart water evacuation',
      'Seamless natural stone paving',
      'Custom evening lighting for year-round ambiance',
    ],
    testimonial: {
      client: 'Family in Laeken',
      neighborhood: 'Laeken',
      quote: 'A2Gardens turned our 70’s garden into the ultimate spot to enjoy our green surroundings.',
    },
  },
  {
    id: 'biodiverse-prairie-garden',
    title: 'Biodiverse Prairie Garden',
    category: 'city_garden',
    categoryLabel: 'Biodiverse Prairie Garden',
    location: 'Brussels Region',
    commune: 'Brussels',
    surfaceArea: '110 m²',
    orientation: 'South-West',
    year: '2024',
    tagline: 'Self-sustaining biodiverse micro-biotope with natural stone pathways and prairie grasses.',
    summary: 'Redesigning unmanaged terrain into a self-sustaining biodiverse micro-biotope with stone pathways, drought-resilient prairie grasses, and continuous seasonal flowering.',
    challenge: 'Unmanaged plot needing ecological balance and structured pathways.',
    architecturalSolution: 'Integrated natural permeable stone walkways with 500 unique plants across 19 species for seasonal blooming throughout the year.',
    beforeImage: getAssetPath('a2gardens/images/prariebefore.webp'),
    afterImage: getAssetPath('a2gardens/images/prarieafter.webp'),
    beforeLabel: 'Before',
    afterLabel: 'After',
    gallery: [
      getAssetPath('a2gardens/images/prarieafter.webp'),
      getAssetPath('a2gardens/images/prariebefore.webp'),
    ],
    materials: [
      'Natural Permeable Stone',
      '500 Unique Plants Divided Over 19 Species',
      'Blooming Periods Spread Over the Seasons',
    ],
    plantPalette: [
      { name: 'Purple Coneflower', botanicalName: 'Echinacea purpurea', sunlight: 'Full Sun', role: 'Pollinator Magnet' },
      { name: 'Russian Sage', botanicalName: 'Perovskia atriplicifolia', sunlight: 'Full Sun', role: 'Lavender Blue Clouds' },
      { name: 'Feather Reed Grass', botanicalName: 'Calamagrostis x acutiflora', sunlight: 'Full Sun', role: 'Architectural Height' },
    ],
    highlights: [
      '500 unique plants divided over 19 native species',
      'Continuous blooming periods spread across the seasons',
      'Natural permeable stone pathways',
    ],
    testimonial: {
      client: 'Urban Nature Enthusiast',
      neighborhood: 'Brussels',
      quote: 'A haven for birds and bees right in our garden. Low maintenance, ever-changing, and stunning.',
    },
  },
];

const PROJECT_TRANSLATIONS: Record<
  LanguageCode,
  Record<
    string,
    {
      title: string;
      categoryLabel: string;
      location: string;
      summary: string;
      materials: string[];
    }
  >
> = {
  en: {
    'pergola-timber-terrace': {
      title: 'Custom Pergola & Timber Terrace',
      categoryLabel: 'Pergola & Timber Terrace',
      location: 'Brussels Region',
      summary:
        'Transforming an open backyard area into an inviting outdoor living room framed by an inox pergola, bespoke timber privacy slats, and durable decking.',
      materials: [
        'Solid Structural Inox Pergola',
        'High-Durability Wood Decking',
        'Shading Slats',
        'Recessed Weatherproof LED Lighting',
      ],
    },
    'molenbeek-courtyard': {
      title: 'Molenbeek Courtyard & Terrace',
      categoryLabel: 'Townhouse Patio & Terrace',
      location: 'Molenbeek-Saint-Jean, Brussels',
      summary:
        'A high-walled townhouse courtyard revived with permeable gravel paving, reinforced grass parking with integrated drainage. Finished off with custom architectural plants for varied green experience.',
      materials: ['Natural Stone', 'Reinforced Grass Tiles', 'Concealed Drainage Channels'],
    },
    'laeken-garden-transformation': {
      title: 'Laeken Garden Transformation',
      categoryLabel: 'City Garden & Patio',
      location: 'Laeken, Brussels',
      summary:
        'Transforming the garden from the 70’s of a family home to a perfect spot to enjoy their green surroundings.',
      materials: [
        'Natural Stone Paving',
        'Permeable Drainage Foundation & Water Evacuation',
        'Integrated Evening Lighting',
      ],
    },
    'biodiverse-prairie-garden': {
      title: 'Biodiverse Prairie Garden',
      categoryLabel: 'Biodiverse Prairie Garden',
      location: 'Brussels Region',
      summary:
        'Redesigning unmanaged terrain into a self-sustaining biodiverse micro-biotope with stone pathways, drought-resilient prairie grasses, and continuous seasonal flowering.',
      materials: [
        'Natural Permeable Stone',
        '500 Unique Plants Divided Over 19 Species',
        'Blooming Periods Spread Over the Seasons',
      ],
    },
  },
  nl: {
    'pergola-timber-terrace': {
      title: 'Op Maat Gemaakte Pergola & Houten Terras',
      categoryLabel: 'Pergola & Houten Terras',
      location: 'Regio Brussel',
      summary:
        'Transformatie van een open achtertuin naar een uitnodigende buitenkamer, omkaderd door een inox pergola, op maat gemaakte houten privacylamellen en een duurzaam hardhouten terras.',
      materials: [
        'Massieve Structurele Inox Pergola',
        'Duurzaam Houten Terras',
        'Zonwerende Lamellen op Maat',
        'Ingebouwde Weerbestendige LED-verlichting',
      ],
    },
    'molenbeek-courtyard': {
      title: 'Stadskoer & Terras in Molenbeek',
      categoryLabel: 'Stadspatio & Terras',
      location: 'Sint-Jans-Molenbeek, Brussel',
      summary:
        'Een hoog ommuurde binnenplaats van een herenhuis nieuw leven ingeblazen met waterdoorlatende verharding en versterkte grasdallen met geïntegreerde drainage. Afgewerkt met architecturale planten voor een gelaagde groene beleving.',
      materials: ['Natuursteen', 'Versterkte Grasdallen', 'Verborgen Drainagegoten'],
    },
    'laeken-garden-transformation': {
      title: 'Tuintransformatie in Laken',
      categoryLabel: 'Stadstuin & Patio',
      location: 'Laken, Brussel',
      summary:
        'Transformatie van een gezinstuin uit de jaren ’70 naar de ideale plek om in alle rust te genieten van een groene omgeving.',
      materials: [
        'Natuurstenen Bestrating',
        'Waterdoorlatende Fundering & Slimme Waterafvoer',
        'Geïntegreerde Avondverlichting',
      ],
    },
    'biodiverse-prairie-garden': {
      title: 'Biodiverse Prairietuin',
      categoryLabel: 'Biodiverse Prairietuin',
      location: 'Regio Brussel',
      summary:
        'Herinrichting van een onbeheerd terrein tot een zelfregulerende, biodiverse microbiotoop met natuurstenen tuinpaden, droogtebestendige siergrassen en doorlopende bloei doorheen de seizoenen.',
      materials: [
        'Waterdoorlatende Natuursteen',
        '500 Unieke Planten Verdeeld over 19 Soorten',
        'Bloeiperiodes Gespreid over Alle Seizoenen',
      ],
    },
  },
  fr: {
    'pergola-timber-terrace': {
      title: 'Pergola sur Mesure & Terrasse en Bois',
      categoryLabel: 'Pergola & Terrasse en Bois',
      location: 'Région Bruxelloise',
      summary:
        'Transformation d’un jardin ouvert en un véritable salon extérieur encadré par une pergola en inox, des claustras en bois sur mesure et un platelage durable.',
      materials: [
        'Pergola Structurelle en Inox Massif',
        'Terrasse en Bois Haute Durabilité',
        'Brise-soleil sur Mesure',
        'Éclairage LED Encastré Étanche',
      ],
    },
    'molenbeek-courtyard': {
      title: 'Cour & Terrasse à Molenbeek',
      categoryLabel: 'Patio de Maison de Maître & Terrasse',
      location: 'Molenbeek-Saint-Jean, Bruxelles',
      summary:
        'Cour intérieure de maison bruxelloise réinventée avec un revêtement perméable, des dalles engazonnées renforcées avec drainage intégré et une sélection de plantes architecturales.',
      materials: ['Pierre Naturelle', 'Dalles Engazonnées Renforcées', 'Caniveaux de Drainage Discrets'],
    },
    'laeken-garden-transformation': {
      title: 'Transformation de Jardin à Laeken',
      categoryLabel: 'Jardin de Ville & Patio',
      location: 'Laeken, Bruxelles',
      summary:
        'Transformation du jardin des années 70 d’une maison familiale en un lieu idéal pour profiter pleinement de son écrin de verdure.',
      materials: [
        'Pavage en Pierre Naturelle',
        'Fondation Drainante Perméable & Évacuation des Eaux',
        'Éclairage d’Ambiance Nocturne Intégré',
      ],
    },
    'biodiverse-prairie-garden': {
      title: 'Jardin Prairie Biodiversifié',
      categoryLabel: 'Jardin Prairie Biodiversifié',
      location: 'Région Bruxelloise',
      summary:
        'Réaménagement d’un terrain en friche en un micro-biotope autonome avec sentiers en pierre naturelle, graminées résistantes à la sécheresse et floraison continue au fil des saisons.',
      materials: [
        'Pierre Naturelle Perméable',
        '500 Plantes Uniques Réparties en 19 Espèces',
        'Floraisons Étalées sur Toutes les Saisons',
      ],
    },
  },
};

export function getLocalizedProjects(lang: LanguageCode): Project[] {
  const dict = PROJECT_TRANSLATIONS[lang] || PROJECT_TRANSLATIONS.en;
  return BRUSSELS_PROJECTS.map((proj) => {
    const tr = dict[proj.id];
    if (!tr) return proj;
    return {
      ...proj,
      title: tr.title,
      categoryLabel: tr.categoryLabel,
      location: tr.location,
      summary: tr.summary,
      materials: tr.materials,
    };
  });
}
