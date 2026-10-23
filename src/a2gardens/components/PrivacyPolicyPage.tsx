import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Mail, Building, MapPin, Hash, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageType } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageType) => void;
}

const PRIVACY_CONTENT = {
  en: {
    title: 'Privacy Policy: A2Trails',
    lastUpdated: 'Last Updated: March 12, 2026',
    intro:
      'This Privacy Policy outlines how A2Trails collects, uses, and safeguards your personal data when you interact with our websites, request project consultations, or partner with us.',
    controller: {
      title: '1. Data Controller',
      text: 'The entity responsible for processing your personal data is:',
      company: 'Company Name',
      office: 'Registered Office',
      cbe: 'CBE/KBO Number',
      email: 'Contact Email',
    },
    legalBasis: {
      title: '2. Legal Basis for Processing',
      text: 'We process personal data only when a valid legal basis exists under Article 6(1) GDPR:',
      contractual:
        'Contractual Necessity: To provide quotes for outdoor architecture, design, construction, or maintenance.',
      legal:
        'Legal Obligation: For mandatory social security declarations (e.g., Check-in-at-work / 30bis declaration) or tax reporting.',
      consent:
        'Consent: When you subscribe to our newsletter or use non-essential cookies.',
      legitimate:
        'Legitimate Interest: To ensure the security of our website and to communicate with B2B partners.',
    },
    categories: {
      title: '3. Categories of Data Collected',
      text: 'We collect and process the following data categories:',
      identification: 'Identification Data: Name, address, telephone number, and email.',
      professional:
        'Professional Data: Company name, VAT number, and project location (GPS coordinates for project sites).',
      technical: 'Technical Data: IP address, browser type, and duration of visit (via cookies).',
    },
    retention: {
      title: '4. Retention Periods',
      text: 'Data is stored no longer than necessary for the purposes for which it was collected:',
      accounting: 'Accounting/Tax Data: Strictly 7 years (statutory Belgian requirement).',
      contractual:
        'Contractual Documents: 10 years following the end of the contract (to cover 10-year liability for construction works under Articles 1792 and 2270 of the Civil Code).',
      requests: 'Contact Requests: 1 year if no contract is concluded.',
    },
    sharing: {
      title: '5. Data Sharing and Transfers',
      text: 'Data may be shared with:',
      subcontractors:
        'Subcontractors: Specialized earthmovers, joiners, or ecologists, strictly under a signed Data Processing Agreement (DPA).',
      authorities:
        'Public Authorities: RSZ/ONSS for mandatory attendance registration on construction sites.',
      it: 'IT Providers: Hosting and cloud services located within the EEA.',
    },
    rights: {
      title: '6. Rights of the Data Subject',
      text: 'Under Belgian and EU law, you possess the following rights, which we will honor within 30 days of a request:',
      access: 'Right of Access: To know what data we hold.',
      rectification: 'Right to Rectification: To correct inaccurate data.',
      erasure: 'Right to Erasure ("Right to be Forgotten"): Subject to legal retention obligations.',
      restriction: 'Right to Restriction: To temporarily halt processing.',
      portability: 'Right to Data Portability: To receive your data in a structured, machine-readable format.',
    },
    security: {
      title: '7. Security Measures',
      text: 'We implement technical and organizational measures (encryption, firewalls, access controls) to protect data against unauthorized access, loss, or destruction. On-site project data is restricted to personnel on a "need-to-know" basis.',
    },
    complaints: {
      title: '8. Complaints',
      text: 'If you believe your data is being mishandled, you have the right to lodge a complaint with the Belgian Data Protection Authority (GBA/APD):',
      authority: 'Data Protection Authority (Gegevensbeschermingsautoriteit / Autorité de protection des données)',
      link: 'https://www.gegevensbeschermingsautoriteit.be',
    },
    back: 'Back to Home',
  },
  nl: {
    title: 'Privacybeleid: A2Trails',
    lastUpdated: 'Laatst bijgewerkt: 12 maart 2026',
    intro:
      'Dit privacybeleid beschrijft hoe A2Trails uw persoonsgegevens verzamelt, gebruikt en beschermt wanneer u onze website bezoekt, een offerte aanvraagt of met ons samenwerkt.',
    controller: {
      title: '1. Verwerkingsverantwoordelijke',
      text: 'De entiteit die verantwoordelijk is voor de verwerking van uw persoonsgegevens is:',
      company: 'Bedrijfsnaam',
      office: 'Maatschappelijke zetel',
      cbe: 'KBO-nummer',
      email: 'Contact e-mail',
    },
    legalBasis: {
      title: '2. Juridische Grondslag voor Verwerking',
      text: 'Wij verwerken persoonsgegevens uitsluitend wanneer er een geldige wettelijke basis bestaat onder Artikel 6(1) AVG (GDPR):',
      contractual:
        'Contractuele noodzaak: Voor het opstellen van offertes voor ontwerp, aanleg of onderhoud.',
      legal:
        'Wettelijke verplichting: Voor verplichte RSZ-aangiftes (bijv. Check-in-at-work / 30bis) of fiscale rapportering.',
      consent:
        'Toestemming: Wanneer u zich inschrijft voor onze nieuwsbrief of optionele cookies accepteert.',
      legitimate:
        'Gerechtvaardigd belang: Om de veiligheid van onze website te garanderen en te communiceren met B2B-partners.',
    },
    categories: {
      title: '3. Categorieën van Verzamelde Gegevens',
      text: 'Wij verzamelen en verwerken de volgende categorieën gegevens:',
      identification: 'Identificatiegegevens: Naam, adres, telefoonnummer en e-mailadres.',
      professional:
        'Professionele gegevens: Bedrijfsnaam, btw-nummer en projectlocatie (GPS-coördinaten van de werf).',
      technical: 'Technische gegevens: IP-adres, browsertype en bezoekduur (via cookies).',
    },
    retention: {
      title: '4. Bewaartermijnen',
      text: 'Gegevens worden niet langer bewaard dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld:',
      accounting: 'Boekhoudkundige/fiscale gegevens: Strikt 7 jaar (wettelijke Belgische bewaartermijn).',
      contractual:
        'Contractuele documenten: 10 jaar na beëindiging van het contract (ter dekking van de 10-jarige aansprakelijkheid voor bouwwerken onder art. 1792 en 2270 Burgerlijk Wetboek).',
      requests: 'Contactaanvragen: 1 jaar indien er geen contract tot stand komt.',
    },
    sharing: {
      title: '5. Gegevensdeling en Doorgifte',
      text: 'Gegevens kunnen worden gedeeld met:',
      subcontractors:
        'Onderaannemers: Gespecialiseerde grondwerkers of ecologen, strikt onder een ondertekende verwerkersovereenkomst (VWO).',
      authorities:
        'Overheidsinstanties: RSZ voor verplichte aanwezigheidsregistratie op werven.',
      it: 'IT-providers: Hosting- en clouddiensten gevestigd binnen de EER.',
    },
    rights: {
      title: '6. Rechten van de Betrokkene',
      text: 'Onder de Belgische en EU-wetgeving beschikt u over de volgende rechten, die wij binnen 30 dagen na een verzoek honoreren:',
      access: 'Recht op inzage: Om te weten welke gegevens wij bewaren.',
      rectification: 'Recht op rectificatie: Om onjuiste gegevens te corrigeren.',
      erasure: 'Recht op gegevenswissing ("Recht op vergetelheid"): Onder voorbehoud van wettelijke bewaarplichten.',
      restriction: 'Recht op beperking van de verwerking.',
      portability: 'Recht op overdraagbaarheid van gegevens in een gestructureerd formaat.',
    },
    security: {
      title: '7. Beveiligingsmaatregelen',
      text: 'Wij implementeren technische en organisatorische maatregelen (encryptie, firewalls, toegangscontroles) om gegevens te beveiligen tegen ongeoorloofde toegang, verlies of vernietiging. Projectgegevens op de werf zijn uitsluitend toegankelijk op "need-to-know" basis.',
    },
    complaints: {
      title: '8. Klachten',
      text: 'Indien u meent dat uw gegevens niet correct worden verwerkt, heeft u het recht een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA):',
      authority: 'Gegevensbeschermingsautoriteit (GBA)',
      link: 'https://www.gegevensbeschermingsautoriteit.be',
    },
    back: 'Terug naar Startpagina',
  },
  fr: {
    title: 'Politique de Confidentialité : A2Trails',
    lastUpdated: 'Dernière mise à jour : 12 mars 2026',
    intro:
      'Cette politique de confidentialité décrit la manière dont A2Trails collecte, utilise et protège vos données personnelles lorsque vous consultez notre site web, sollicitez un devis ou collaborez avec nous.',
    controller: {
      title: '1. Responsable du Traitement',
      text: 'L’entité responsable du traitement de vos données personnelles est :',
      company: 'Nom de l’entreprise',
      office: 'Siège social',
      cbe: 'Numéro BCE',
      email: 'E-mail de contact',
    },
    legalBasis: {
      title: '2. Base Juridique du Traitement',
      text: 'Nous ne traitons les données personnelles que lorsqu’une base juridique valide existe en vertu de l’article 6(1) du RGPD :',
      contractual:
        'Nécessité contractuelle : Pour fournir des devis pour la conception, la réalisation ou l’entretien d’aménagements extérieurs.',
      legal:
        'Obligation légale : Pour les déclarations de sécurité sociale obligatoires (ex. Check-in-at-work / déclaration 30bis) ou fiscales.',
      consent:
        'Consentement : Lorsque vous vous abonnez à nos communications ou acceptez les cookies non essentiels.',
      legitimate:
        'Intérêt légitime : Pour assurer la sécurité de notre site et échanger avec nos partenaires professionnels.',
    },
    categories: {
      title: '3. Catégories de Données Collectées',
      text: 'Nous collectons et traitons les catégories de données suivantes :',
      identification: 'Données d’identification : Nom, adresse, numéro de téléphone et e-mail.',
      professional:
        'Données professionnelles : Raison sociale, numéro de TVA et localisation des chantiers (coordonnées GPS).',
      technical: 'Données techniques : Adresse IP, type de navigateur et durée de visite (via cookies).',
    },
    retention: {
      title: '4. Périodes de Conservation',
      text: 'Les données ne sont pas conservées plus longtemps que nécessaire aux fins pour lesquelles elles ont été collectées :',
      accounting: 'Données comptables/fiscales : Strictement 7 ans (obligation légale belge).',
      contractual:
        'Documents contractuels : 10 ans après l’achèvement du contrat (responsabilité décennale selon les art. 1792 et 2270 du Code civil).',
      requests: 'Demandes de devis / contact : 1 an si aucun contrat n’est conclu.',
    },
    sharing: {
      title: '5. Partage et Transferts de Données',
      text: 'Les données peuvent être partagées avec :',
      subcontractors:
        'Sous-traitants : Artisans ou bureaux spécialisés, strictement sous accord de traitement de données (DPA).',
      authorities:
        'Autorités publiques : ONSS pour l’enregistrement obligatoire des présences sur chantier.',
      it: 'Prestataires informatiques : Services d’hébergement et cloud au sein de l’EEE.',
    },
    rights: {
      title: '6. Droits de la Personne Concernée',
      text: 'En vertu de la législation belge et européenne, vous disposez des droits suivants sous 30 jours :',
      access: 'Droit d’accès : Savoir quelles données nous détenons.',
      rectification: 'Droit de rectification : Corriger les données inexactes.',
      erasure: 'Droit à l’effacement ("Droit à l’oubli") : Sous réserve des obligations de conservation.',
      restriction: 'Droit à la limitation du traitement.',
      portability: 'Droit à la portabilité des données sous format structuré.',
    },
    security: {
      title: '7. Mesures de Sécurité',
      text: 'Nous appliquons des mesures techniques et organisationnelles (chiffrement, pare-feu, gestion stricte des accès) pour protéger vos données contre tout accès non autorisé, perte ou altération.',
    },
    complaints: {
      title: '8. Réclamations',
      text: 'Si vous estimez que vos données ne sont pas traitées conformément à la loi, vous pouvez introduire une réclamation auprès de l’Autorité de protection des données (APD) :',
      authority: 'Autorité de Protection des Données (APD)',
      link: 'https://www.autoriteprotectiondonnees.be',
    },
    back: 'Retour à l’Accueil',
  },
};

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const content = PRIVACY_CONTENT[currentLanguage] || PRIVACY_CONTENT['en'];
  const badgeText =
    currentLanguage === 'nl'
      ? 'Juridisch & Naleving'
      : currentLanguage === 'fr'
      ? 'Mentions Légales & Conformité'
      : 'Legal & Compliance';
  const officeAddress =
    currentLanguage === 'nl'
      ? 'Mariemontkaai 15, 1080 Brussel, België'
      : currentLanguage === 'fr'
      ? 'Quai de Mariemont 15, 1080 Bruxelles, Belgique'
      : 'Mariemontkaai 15, 1080 Brussel, Belgium';

  return (
    <div className="pt-28 pb-24 bg-[#070b08] min-h-screen text-gray-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation back */}
        <div className="mb-8">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#10b981] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{content.back}</span>
          </button>
        </div>

        {/* Card */}
        <div className="bg-[#0b120d] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-[#10b981] uppercase tracking-wider">
              {badgeText}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            {content.title}
          </h1>
          <p className="text-gray-400 text-sm mb-8 italic">{content.lastUpdated}</p>
          <p className="text-gray-300 text-base leading-relaxed mb-10 pb-8 border-b border-white/10">
            {content.intro}
          </p>

          <div className="space-y-12 text-sm leading-relaxed text-gray-300">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.controller.title}
              </h2>
              <p className="mb-4">{content.controller.text}</p>
              <div className="bg-[#0e1710] p-6 rounded-2xl border border-white/5 space-y-3 font-sans">
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-[#10b981] shrink-0" />
                  <div>
                    <span className="text-white font-semibold">{content.controller.company}: </span>
                    <span className="text-gray-300">A2Trails</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">{content.controller.office}: </span>
                    <span className="text-gray-300">{officeAddress}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Hash className="w-4 h-4 text-[#10b981] shrink-0" />
                  <div>
                    <span className="text-white font-semibold">{content.controller.cbe}: </span>
                    <span className="text-gray-300 font-mono">BE 1024.359.194</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#10b981] shrink-0" />
                  <div>
                    <span className="text-white font-semibold">{content.controller.email}: </span>
                    <a
                      href="mailto:antonarnauts@a2trails.com"
                      className="text-[#10b981] hover:underline font-mono"
                    >
                      antonarnauts@a2trails.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.legalBasis.title}
              </h2>
              <p className="mb-4">{content.legalBasis.text}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>{content.legalBasis.contractual}</li>
                <li>{content.legalBasis.legal}</li>
                <li>{content.legalBasis.consent}</li>
                <li>{content.legalBasis.legitimate}</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.categories.title}
              </h2>
              <p className="mb-4">{content.categories.text}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>{content.categories.identification}</li>
                <li>{content.categories.professional}</li>
                <li>{content.categories.technical}</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.retention.title}
              </h2>
              <p className="mb-4">{content.retention.text}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>{content.retention.accounting}</li>
                <li>{content.retention.contractual}</li>
                <li>{content.retention.requests}</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.sharing.title}
              </h2>
              <p className="mb-4">{content.sharing.text}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>{content.sharing.subcontractors}</li>
                <li>{content.sharing.authorities}</li>
                <li>{content.sharing.it}</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.rights.title}
              </h2>
              <p className="mb-4">{content.rights.text}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>{content.rights.access}</li>
                <li>{content.rights.rectification}</li>
                <li>{content.rights.erasure}</li>
                <li>{content.rights.restriction}</li>
                <li>{content.rights.portability}</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.security.title}
              </h2>
              <p className="text-gray-300">{content.security.text}</p>
            </section>

            {/* Section 8 */}
            <section className="pt-6 border-t border-white/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.complaints.title}
              </h2>
              <p className="mb-3">{content.complaints.text}</p>
              <div className="bg-[#0e1710] p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <span className="text-white font-medium">{content.complaints.authority}</span>
                <a
                  href="https://www.gegevensbeschermingsautoriteit.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10b981] hover:underline font-mono text-xs"
                >
                  www.gegevensbeschermingsautoriteit.be
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
