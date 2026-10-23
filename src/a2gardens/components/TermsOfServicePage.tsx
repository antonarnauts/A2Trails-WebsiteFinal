import React, { useEffect } from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PageType } from '../types';

interface TermsOfServicePageProps {
  onNavigate: (page: PageType) => void;
}

const TERMS_CONTENT = {
  en: {
    title: 'Terms of Service: A2Trails',
    lastUpdated: 'Last Updated: March 12, 2026',
    intro:
      'These Terms of Service (the "Terms") govern all project agreements, consulting, design, and construction services provided by A2Trails. We build with passion and precision; these terms ensure that the quality and integrity of our work are preserved for the long term.',
    partnership: {
      title: '1. Our Partnership',
      text: 'These Terms of Service (the "Terms") define the professional relationship between A2Trails (the "Company") and the Client. We build with passion and precision; these terms ensure that the quality and integrity of our work are preserved for the long term.',
    },
    intellectualProperty: {
      title: '2. Intellectual Property & Design Integrity',
      text: 'Our trail and architectural designs are the result of specialized engineering and creative vision. Under Book XI of the Belgian Code of Economic Law, these designs are protected works of authorship.',
      authorizedUse:
        'Authorized Use: The Client is granted an exclusive license to use and enjoy the project at the agreed-upon location.',
      protection:
        'Protection of Work: To maintain the safety and "DNA" of our builds, the Client agrees not to replicate, copy, or allow third parties to mimic our technical features or layouts elsewhere without our written consent.',
      modifications:
        'Modifications: Because our name is attached to the project\'s reputation, any significant structural changes to the project must be discussed with us first to ensure the "moral rights" and safety standards of the original design are respected.',
    },
    warranty: {
      title: '3. Warranty and Maintenance',
      text: 'We stand behind the quality of our builds. Our warranty structure is as follows:',
      limited:
        '3-Year Limited Warranty: The Company provides a three-year warranty against defects in craftsmanship and non-structural components (e.g., specific surfacing issues or minor drainage adjustments), provided the installation is maintained according to our provided Maintenance Manual.',
      structural:
        'Structural Integrity: In accordance with Articles 1792 and 2270 of the Belgian Civil Code, liability for the fundamental stability of major earthworks and structures remains 10 years by law.',
      exclusions:
        'Exclusions: This warranty does not cover damage from natural disasters (force majeure), lack of routine maintenance, or unauthorized "DIY" modifications by the Client.',
    },
    ownership: {
      title: '4. Ownership and Payment',
      retention:
        'Retention of Title: Per the Law of 11 July 2013, all materials and the finished work remain the legal property of the Company until the final invoice is settled in full.',
      payment:
        'Payment Terms: We appreciate timely payments. Late payments will incur interest at the statutory rate for commercial transactions, plus a standard recovery fee as permitted under Belgian law.',
    },
    confidentiality: {
      title: '5. Confidentiality',
      text: 'During the build, we may share proprietary "building secrets" or specialized drainage techniques. The Client agrees to treat this technical information as confidential and will not share blueprints or construction methodologies with competing firms.',
    },
    dispute: {
      title: '6. Dispute Resolution',
      text: 'We prefer a handshake over a courtroom. Should an issue arise, both parties agree to attempt formal mediation. If a resolution cannot be reached, the courts of the Company’s registered office in Belgium shall have exclusive jurisdiction.',
    },
    back: 'Back to Home',
  },
  nl: {
    title: 'Algemene Voorwaarden: A2Trails',
    lastUpdated: 'Laatst bijgewerkt: 12 maart 2026',
    intro:
      'Deze Algemene Voorwaarden bepalen alle projectovereenkomsten, consultaties, ontwerpen en constructiediensten geleverd door A2Trails. Wij bouwen met passie en precisie; deze voorwaarden zorgen ervoor dat de kwaliteit en integriteit van ons werk op lange termijn behouden blijven.',
    partnership: {
      title: '1. Onze Samenwerking',
      text: 'Deze Algemene Voorwaarden (de "Voorwaarden") definiëren de professionele relatie tussen A2Trails (het "Bedrijf") en de Klant. Wij bouwen met passie en precisie; deze voorwaarden zorgen ervoor dat de kwaliteit en integriteit van ons werk op lange termijn behouden blijven.',
    },
    intellectualProperty: {
      title: '2. Intellectuele Eigendom & Integriteit van het Ontwerp',
      text: 'Onze ontwerpen zijn het resultaat van gespecialiseerde engineering en creatieve visie. Onder Boek XI van het Belgisch Wetboek van Economisch Recht zijn deze ontwerpen beschermde werken van auteurschap.',
      authorizedUse:
        'Geautoriseerd Gebruik: De Klant krijgt een exclusieve licentie om de constructie te gebruiken en ervan te genieten op de overeengekomen locatie.',
      protection:
        'Bescherming van het Werk: Om de veiligheid en het "DNA" van onze constructies te behouden, stemt de Klant ermee in om onze technische kenmerken of lay-outs elders niet te repliceren, te kopiëren of derden toe te staan deze na te bootsen zonder onze schriftelijke toestemming.',
      modifications:
        'Wijzigingen: Omdat onze naam verbonden is aan de reputatie van het project, moeten alle belangrijke structurele wijzigingen eerst met ons worden besproken om ervoor te zorgen dat de "morele rechten" en veiligheidsnormen van het oorspronkelijke ontwerp worden gerespecteerd.',
    },
    warranty: {
      title: '3. Garantie en Onderhoud',
      text: 'Wij staan achter de kwaliteit van onze constructies. Onze garantiestructuur is als volgt:',
      limited:
        '3 jaar beperkte garantie: Het Bedrijf biedt een garantie van drie jaar tegen gebreken in vakmanschap en niet-structurele componenten (bijv. specifieke verhardingsproblemen of kleine drainage-aanpassingen), op voorwaarde dat het project wordt onderhouden volgens onze verstrekte Onderhoudshandleiding.',
      structural:
        'Structurele Integriteit: In overeenstemming met de artikelen 1792 en 2270 van het Belgisch Burgerlijk Wetboek blijft de aansprakelijkheid voor de fundamentele stabiliteit van belangrijke grondwerken en structuren wettelijk 10 jaar.',
      exclusions:
        'Uitsluitingen: Deze garantie dekt geen schade door natuurrampen (overmacht), gebrek aan routineonderhoud of ongeoorloofde "doe-het-zelf" wijzigingen door de Klant.',
    },
    ownership: {
      title: '4. Eigendom en Betaling',
      retention:
        'Eigendomsvoorbehoud: Volgens de Wet van 11 juli 2013 blijven alle materialen en het voltooide werk het wettelijk eigendom van het Bedrijf totdat de slotfactuur volledig is voldaan.',
      payment:
        'Betalingsvoorwaarden: Wij waarderen tijdige betalingen. Bij laattijdige betalingen wordt wettelijke rente voor handelstransacties in rekening gebracht, vermeerderd met een forfaitaire invorderingsvergoeding zoals toegestaan onder Belgisch recht.',
    },
    confidentiality: {
      title: '5. Vertrouwelijkheid',
      text: 'Tijdens de bouw kunnen we bedrijfseigen bouwtechnieken of gespecialiseerde drainagemethodes delen. De Klant stemt ermee in deze technische informatie als vertrouwelijk te behandelen en geen plannen of constructiemethodologieën te delen met concurrerende bedrijven.',
    },
    dispute: {
      title: '6. Geschillenbeslechting',
      text: 'Wij geven de voorkeur aan een handdruk boven een rechtszaal. Mocht er een probleem ontstaan, dan komen beide partijen overeen om eerst formele bemiddeling te proberen. Indien geen oplossing wordt bereikt, zijn de rechtbanken van de maatschappelijke zetel van het Bedrijf in België exclusief bevoegd.',
    },
    back: 'Terug naar Startpagina',
  },
  fr: {
    title: 'Conditions Générales de Service : A2Trails',
    lastUpdated: 'Dernière mise à jour : 12 mars 2026',
    intro:
      'Ces Conditions Générales régissent l’ensemble des prestations de conseil, d’étude et de réalisation fournies par A2Trails. Nous construisons avec passion et précision ; ces conditions garantissent que la qualité et l’intégrité de notre travail sont préservées sur le long terme.',
    partnership: {
      title: '1. Notre Partenariat',
      text: 'Ces Conditions Générales de Service (les "Conditions") définissent la relation professionnelle entre A2Trails (la "Société") et le Client. Nous construisons avec passion et précision ; ces conditions garantissent que la qualité et l\'intégrité de notre travail sont préservées sur le long terme.',
    },
    intellectualProperty: {
      title: '2. Propriété Intellectuelle et Intégrité de la Conception',
      text: 'Nos conceptions sont le résultat d\'une ingénierie spécialisée et d\'une vision créative. En vertu du livre XI du Code de droit économique belge, ces conceptions sont des œuvres protégées par le droit d\'auteur.',
      authorizedUse:
        'Utilisation autorisée : Le Client se voit accorder une licence exclusive pour utiliser et profiter de l\'aménagement à l\'endroit convenu.',
      protection:
        'Protection de l\'œuvre : Pour maintenir la sécurité et l\'« ADN » de nos constructions, le Client accepte de ne pas reproduire, copier ou permettre à des tiers d\'imiter nos caractéristiques techniques ou nos agencements ailleurs sans notre consentement écrit.',
      modifications:
        'Modifications : Parce que notre nom est attaché à la réputation du projet, tout changement structurel important apporté à l\'aménagement doit être discuté avec nous au préalable afin de garantir le respect des « droits moraux » et des normes de sécurité de la conception originale.',
    },
    warranty: {
      title: '3. Garantie et Entretien',
      text: 'Nous garantissons la qualité de nos constructions. Notre structure de garantie est la suivante :',
      limited:
        'Garantie limitée de 3 ans : La Société offre une garantie de trois ans contre les défauts de fabrication et les composants non structurels (par exemple, des problèmes de revêtement spécifiques ou des ajustements mineurs de drainage), à condition que l\'aménagement soit entretenu conformément à notre manuel d\'entretien fourni.',
      structural:
        'Intégrité structurelle : Conformément aux articles 1792 et 2270 du Code civil belge, la responsabilité pour la stabilité fondamentale des travaux de terrassement et des structures importants reste de 10 ans selon la loi.',
      exclusions:
        'Exclusions : Cette garantie ne couvre pas les dommages causés par des catastrophes naturelles (force majeure), le manque d\'entretien de routine ou les modifications « DIY » non autorisées par le Client.',
    },
    ownership: {
      title: '4. Propriété et Paiement',
      retention:
        'Réserve de propriété : Conformément à la loi du 11 juillet 2013, tous les matériaux et le travail achevé restent la propriété légale de la Société jusqu\'au règlement intégral de la facture finale.',
      payment:
        'Conditions de paiement : Nous apprécions les paiements ponctuels. Les retards de paiement entraîneront des intérêts au taux légal pour les transactions commerciales, ainsi qu\'une indemnité forfaitaire de recouvrement autorisée par le droit belge.',
    },
    confidentiality: {
      title: '5. Confidentialité',
      text: 'Pendant la réalisation, nous pouvons partager des techniques de construction ou des méthodes de drainage spécialisées exclusives. Le Client s\'engage à traiter ces informations techniques de manière confidentielle et à ne pas divulguer plans ou méthodologies à des concurrents.',
    },
    dispute: {
      title: '6. Règlement des Litiges',
      text: 'Nous privilégions une poignée de main à un procès. En cas de différend, les deux parties conviennent de tenter une médiation préalable. À défaut d\'accord, les tribunaux du siège social de la Société en Belgique sont seuls compétents.',
    },
    back: 'Retour à l’Accueil',
  },
};

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const content = TERMS_CONTENT[currentLanguage] || TERMS_CONTENT['en'];
  const badgeText =
    currentLanguage === 'nl'
      ? 'Juridische Voorwaarden'
      : currentLanguage === 'fr'
      ? 'Conditions Juridiques'
      : 'Legal Terms';

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
              <Scale className="w-5 h-5" />
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
                {content.partnership.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{content.partnership.text}</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.intellectualProperty.title}
              </h2>
              <p className="mb-4">{content.intellectualProperty.text}</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li>
                  <span className="text-white font-semibold">{content.intellectualProperty.authorizedUse}</span>
                </li>
                <li>
                  <span className="text-white font-semibold">{content.intellectualProperty.protection}</span>
                </li>
                <li>
                  <span className="text-white font-semibold">{content.intellectualProperty.modifications}</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.warranty.title}
              </h2>
              <p className="mb-4">{content.warranty.text}</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li>
                  <span className="text-white font-semibold">{content.warranty.limited}</span>
                </li>
                <li>
                  <span className="text-white font-semibold">{content.warranty.structural}</span>
                </li>
                <li>
                  <span className="text-white font-semibold">{content.warranty.exclusions}</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.ownership.title}
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li>
                  <span className="text-white font-semibold">{content.ownership.retention}</span>
                </li>
                <li>
                  <span className="text-white font-semibold">{content.ownership.payment}</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.confidentiality.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{content.confidentiality.text}</p>
            </section>

            {/* Section 6 */}
            <section className="pt-6 border-t border-white/10">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                {content.dispute.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{content.dispute.text}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
