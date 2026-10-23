export interface LegalSection {
  title: string;
  text?: string;
  subsections?: { label?: string; text: string }[];
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const LEGAL_CONTENT: Record<'en' | 'nl' | 'fr', { privacy: LegalDocument; terms: LegalDocument }> = {
  en: {
    privacy: {
      title: 'Privacy Policy: A2Gardens & A2Trails',
      lastUpdated: 'Last Updated: March 12, 2026',
      sections: [
        {
          title: '1. Data Controller',
          text: 'The entity responsible for processing your personal data is:',
          subsections: [
            { label: 'Company Name', text: 'A2Trails / A2Gardens' },
            { label: 'Registered Office', text: 'Mariemontkaai 15, 1080 Brussel, Belgium' },
            { label: 'CBE / KBO / VAT Number', text: 'BE1024.359.194' },
            { label: 'Contact Email', text: 'antonarnauts@a2trails.com' },
          ],
        },
        {
          title: '2. Legal Basis for Processing',
          text: 'We process personal data only when a valid legal basis exists under Article 6(1) GDPR:',
          subsections: [
            { label: 'Contractual Necessity', text: 'To provide site surveys, design proposals, quotes, construction, and maintenance for urban gardens and outdoor architectural projects.' },
            { label: 'Legal Obligation', text: 'For mandatory social security declarations (e.g., Check-in-at-work / 30bis declaration) and tax reporting.' },
            { label: 'Consent', text: 'When you subscribe to updates, request callbacks, or accept non-essential cookies.' },
            { label: 'Legitimate Interest', text: 'To maintain the security of our website and communicate with prospective B2B and private clients.' },
          ],
        },
        {
          title: '3. Categories of Data Collected',
          text: 'We collect and process the following data categories:',
          subsections: [
            { label: 'Identification Data', text: 'Name, address, telephone number, and email.' },
            { label: 'Professional & Project Data', text: 'Company name (if applicable), VAT number, project location, access constraints, and photos/blueprints of outdoor spaces.' },
            { label: 'Technical Data', text: 'IP address, browser type, and duration of visit (via cookies and web analytics).' },
          ],
        },
        {
          title: '4. Retention Periods',
          text: 'Data is stored no longer than necessary for the purposes for which it was collected:',
          subsections: [
            { label: 'Accounting / Tax Data', text: 'Strictly 7 years (statutory Belgian legal requirement).' },
            { label: 'Contractual Documents', text: '10 years following the end of the contract (to cover 10-year decennial liability for architectural and construction works under Articles 1792 and 2270 of the Civil Code).' },
            { label: 'Contact Requests', text: '1 year if no contract is concluded.' },
          ],
        },
        {
          title: '5. Data Sharing and Transfers',
          text: 'Data may be shared with:',
          subsections: [
            { label: 'Subcontractors', text: 'Specialized stonemasons, crane operators, arborists, or soil ecologists, strictly under a signed Data Processing Agreement (DPA).' },
            { label: 'Public Authorities', text: 'RSZ/ONSS and regional authorities for mandatory attendance registration on construction sites and urban planning compliance.' },
            { label: 'IT Providers', text: 'Hosting and cloud services located strictly within the European Economic Area (EEA).' },
          ],
        },
        {
          title: '6. Rights of the Data Subject',
          text: 'Under Belgian and EU law, you possess the following rights, which we will honor within 30 days of a request:',
          subsections: [
            { label: 'Right of Access', text: 'To know what data we hold about you and receive a copy.' },
            { label: 'Right to Rectification', text: 'To correct inaccurate or incomplete data.' },
            { label: 'Right to Erasure', text: '("Right to be Forgotten") Subject to legal tax and statutory retention obligations.' },
            { label: 'Right to Restriction', text: 'To temporarily halt processing while an objection or accuracy dispute is evaluated.' },
            { label: 'Right to Data Portability', text: 'To receive your data in a structured, machine-readable format.' },
          ],
        },
        {
          title: '7. Security Measures',
          text: 'We implement rigorous technical and organizational measures (encryption, firewalls, role-based access controls) to protect data against unauthorized access, loss, or destruction. On-site project data and client floor plans are restricted to personnel on a strict "need-to-know" basis.',
        },
        {
          title: '8. Complaints',
          text: 'If you believe your data is being mishandled, you have the right to lodge a complaint with the Belgian Data Protection Authority (GBA/APD):',
          subsections: [
            { label: 'Authority', text: 'Gegevensbeschermingsautoriteit / Autorité de protection des données' },
            { label: 'Address', text: 'Drukpersstraat 35, 1000 Brussel' },
            { label: 'Website', text: 'https://www.gegevensbeschermingsautoriteit.be' },
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of Service: A2Gardens & A2Trails',
      lastUpdated: 'Last Updated: March 12, 2026',
      sections: [
        {
          title: '1. Our Partnership',
          text: 'These Terms of Service (the "Terms") define the professional relationship between A2Trails / A2Gardens (the "Company") and the Client. We build with passion, botanical precision, and architectural discipline; these terms ensure that the quality and integrity of our work are preserved for the long term.',
        },
        {
          title: '2. Intellectual Property & Design Integrity',
          text: 'Our garden and landscape designs are the result of specialized spatial engineering and creative vision. Under Book XI of the Belgian Code of Economic Law, these designs are protected works of authorship.',
          subsections: [
            { label: 'Authorized Use', text: 'The Client is granted an exclusive license to use and enjoy the garden or terrace installation at the agreed-upon location.' },
            { label: 'Protection of Work', text: 'To maintain the safety and "DNA" of our builds, the Client agrees not to replicate, copy, or allow third parties to mimic our technical drawings, custom joinery features, or layouts elsewhere without our prior written consent.' },
            { label: 'Modifications', text: "Because our name is attached to the project's reputation, any significant structural changes to the installation must be discussed with us first to ensure the moral rights and safety standards of the original design are respected." },
          ],
        },
        {
          title: '3. Warranty and Maintenance',
          text: 'We stand behind the quality of our builds. Our warranty structure is as follows:',
          subsections: [
            { label: '3-Year Limited Warranty', text: 'The Company provides a three-year warranty against defects in craftsmanship and non-structural components (e.g., custom timber joinery, paving stability, or drainage assemblies), provided the outdoor space is maintained according to our provided Four-Season Maintenance Guide.' },
            { label: 'Structural Integrity (10-Year Decennial Liability)', text: 'In accordance with Articles 1792 and 2270 of the Belgian Civil Code, liability for the fundamental stability of major masonry, retaining walls, and load-bearing structures remains 10 years by law.' },
            { label: 'Exclusions', text: 'This warranty does not cover damage from natural disasters (force majeure), unseasonable extreme weather anomalies, lack of routine botanical maintenance, soil pests, or unauthorized third-party modifications by the Client.' },
          ],
        },
        {
          title: '4. Ownership and Payment',
          subsections: [
            { label: 'Retention of Title', text: 'Per the Belgian Law of 11 July 2013, all materials, custom steel planters, stone slabs, and the finished installation remain the legal property of the Company until the final invoice is settled in full.' },
            { label: 'Payment Terms', text: 'We appreciate timely payments. Invoices are payable within 14 calendar days. Late payments will incur interest at the statutory rate for commercial transactions, plus a standard recovery fee as permitted under Belgian law.' },
          ],
        },
        {
          title: '5. Confidentiality',
          text: 'During the design and construction phases, we may share proprietary architectural details, custom joinery techniques, or specialized sub-surface drainage systems. The Client agrees to treat this technical information as confidential and will not share detailed blueprints or methodologies with competing firms.',
        },
        {
          title: '6. Dispute Resolution',
          text: 'We prefer a handshake over a courtroom. Should an issue arise, both parties agree to attempt good-faith formal mediation. If a resolution cannot be reached, the competent courts of the Company’s registered office in Brussels, Belgium shall have exclusive jurisdiction.',
        },
      ],
    },
  },
  nl: {
    privacy: {
      title: 'Privacybeleid: A2Gardens & A2Trails',
      lastUpdated: 'Laatst bijgewerkt: 12 maart 2026',
      sections: [
        {
          title: '1. Verwerkingsverantwoordelijke',
          text: 'De entiteit die verantwoordelijk is voor de verwerking van uw persoonsgegevens is:',
          subsections: [
            { label: 'Bedrijfsnaam', text: 'A2Trails / A2Gardens' },
            { label: 'Maatschappelijke zetel', text: 'Mariemontkaai 15, 1080 Brussel, België' },
            { label: 'KBO / BTW-nummer', text: 'BE1024.359.194' },
            { label: 'Contact e-mail', text: 'antonarnauts@a2trails.com' },
          ],
        },
        {
          title: '2. Rechtsgrondslag voor verwerking',
          text: 'Wij verwerken persoonsgegevens alleen wanneer er een geldige rechtsgrondslag bestaat onder Artikel 6(1) AVG:',
          subsections: [
            { label: 'Contractuele noodzaak', text: 'Om plaatsbezoeken, ontwerpen, offertes, aanleg en onderhoud van terrassen, stadstuinen en balkons uit te voeren.' },
            { label: 'Wettelijke verplichting', text: 'Voor verplichte sociale zekerheidsaangiften (bijv. Check-in-at-work / 30bis aangifte) en fiscale rapportage.' },
            { label: 'Toestemming', text: 'Wanneer u zich aanmeldt voor updates of niet-essentiële cookies accepteert.' },
            { label: 'Gerechtvaardigd belang', text: 'Om de veiligheid van onze website te waarborgen en te communiceren met B2B-partners en particuliere klanten.' },
          ],
        },
        {
          title: '3. Categorieën van verzamelde gegevens',
          text: 'Wij verzamelen en verwerken de volgende gegevenscategorieën:',
          subsections: [
            { label: 'Identificatiegegevens', text: 'Naam, adres, telefoonnummer en e-mailadres.' },
            { label: 'Professionele & Projectgegevens', text: 'Bedrijfsnaam (indien van toepassing), BTW-nummer, projectlocatie, toegangsbeperkingen en afmetingen van de tuin.' },
            { label: 'Technische gegevens', text: 'IP-adres, browsertype en bezoekduur (via cookies en analyse).' },
          ],
        },
        {
          title: '4. Bewaarperioden',
          text: 'Gegevens worden niet langer bewaard dan nodig voor de doeleinden waarvoor ze zijn verzameld:',
          subsections: [
            { label: 'Boekhoudkundige / fiscale gegevens', text: 'Strikt 7 jaar (wettelijke Belgische vereiste).' },
            { label: 'Contractuele documenten', text: '10 jaar na oplevering (ter dekking van de 10-jarige tienjarige aansprakelijkheid voor bouwwerken onder de artikelen 1792 en 2270 van het Burgerlijk Wetboek).' },
            { label: 'Contactverzoeken', text: '1 jaar als er geen overeenkomst tot stand komt.' },
          ],
        },
        {
          title: '5. Delen en doorgeven van gegevens',
          text: 'Gegevens kunnen worden gedeeld met:',
          subsections: [
            { label: 'Onderaannemers', text: 'Gespecialiseerde steenkappers, kraanmachinisten of ecologen, strikt onder een ondertekende verwerkersovereenkomst (VWO).' },
            { label: 'Overheidsinstanties', text: 'RSZ voor verplichte aanwezigheidsregistratie op werven en stedenbouwkundige diensten.' },
            { label: 'IT-providers', text: 'Hosting- en clouddiensten uitsluitend gevestigd binnen de Europese Economische Ruimte (EER).' },
          ],
        },
        {
          title: '6. Rechten van de betrokkene',
          text: 'Onder de Belgische en EU-wetgeving beschikt u over de volgende rechten, die wij binnen 30 dagen na een verzoek honoreren:',
          subsections: [
            { label: 'Recht op inzage', text: 'Om te weten welke gegevens wij bewaren.' },
            { label: 'Recht op rectificatie', text: 'Om onjuiste gegevens te corrigeren.' },
            { label: 'Recht op gegevenswissing', text: '("Recht om vergeten te worden") Behoudens wettelijke fiscale bewaarplichten.' },
            { label: 'Recht op beperking', text: 'Om de verwerking tijdelijk stop te zetten.' },
            { label: 'Recht op overdraagbaarheid', text: 'Om uw gegevens te ontvangen in een gestructureerd formaat.' },
          ],
        },
        {
          title: '7. Veiligheidsmaatregelen',
          text: 'Wij implementeren technische en organisatorische maatregelen (encryptie, firewalls, toegangscontroles) om gegevens te beveiligen tegen ongeoorloofde toegang. Projectplannen en werfgegevens zijn strikt beperkt tot bevoegd personeel.',
        },
        {
          title: '8. Klachten',
          text: 'Als u van mening bent dat uw gegevens onzorgvuldig worden behandeld, heeft u het recht een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA):',
          subsections: [
            { label: 'Autoriteit', text: 'Gegevensbeschermingsautoriteit (GBA)' },
            { label: 'Adres', text: 'Drukpersstraat 35, 1000 Brussel' },
            { label: 'Website', text: 'https://www.gegevensbeschermingsautoriteit.be' },
          ],
        },
      ],
    },
    terms: {
      title: 'Algemene Voorwaarden: A2Gardens & A2Trails',
      lastUpdated: 'Laatst bijgewerkt: 12 maart 2026',
      sections: [
        {
          title: '1. Onze Samenwerking',
          text: 'Deze Algemene Voorwaarden (de "Voorwaarden") definiëren de professionele relatie tussen A2Trails / A2Gardens (het "Bedrijf") en de Klant. Wij ontwerpen en bouwen met passie, architecturale discipline en botanische precisie; deze voorwaarden waarborgen dat de kwaliteit en integriteit van ons werk op lange termijn behouden blijven.',
        },
        {
          title: '2. Intellectuele Eigendom en Ontwerpintegriteit',
          text: 'Onze tuin-, patio- en terrasontwerpen zijn het resultaat van gespecialiseerde ruimtelijke engineering en creatieve visie. Onder Boek XI van het Belgisch Wetboek van Economisch Recht zijn deze ontwerpen auteursrechtelijk beschermde werken.',
          subsections: [
            { label: 'Toegestaan Gebruik', text: 'De Klant verkrijgt een exclusieve licentie om het opgeleverde tuinontwerp op de overeengekomen locatie te gebruiken en te genieten.' },
            { label: 'Bescherming van Werk', text: 'Om de esthetiek en het DNA van onze realisaties te beschermen, stemt de Klant ermee in onze technische plannen en maatwerkelementen niet elders na te bouwen of door derden te laten kopiëren zonder onze voorafgaande schriftelijke toestemming.' },
            { label: 'Wijzigingen', text: 'Omdat onze reputatie aan het project verbonden is, moeten substantiële structurele wijzigingen vooraf worden afgestemd ter bescherming van de morele rechten en veiligheidsnormen van het oorspronkelijke ontwerp.' },
          ],
        },
        {
          title: '3. Garantie en Onderhoud',
          text: 'Wij staan achter de duurzame kwaliteit van onze constructies:',
          subsections: [
            { label: '3 Jaar Beperkte Garantie', text: 'Het Bedrijf biedt 3 jaar garantie op vakmanschap en niet-structurele elementen (zoals bestrating, houtwerk, drainage en bakken), mits de tuin wordt onderhouden conform onze Vierseizoenengids.' },
            { label: '10-jarige Tienjarige Aansprakelijkheid', text: 'Overeenkomstig de artikelen 1792 en 2270 van het Belgisch Burgerlijk Wetboek geldt voor de fundamentele stabiliteit van dragende constructies en grondkeringen een wettelijke aansprakelijkheid van 10 jaar.' },
            { label: 'Uitsluitingen', text: 'Schade door overmacht, extreme weersanomalieën, gebrek aan elementair tuinonderhoud of onoordeelkundige aanpassingen door derden vallen buiten de garantie.' },
          ],
        },
        {
          title: '4. Eigendom en Betaling',
          subsections: [
            { label: 'Eigendomsvoorbehoud', text: 'Conform de wet van 11 juli 2013 blijven alle geleverde materialen en het voltooide werk eigendom van het Bedrijf totdat de eindfactuur integraal is voldaan.' },
            { label: 'Betalingstermijn', text: 'Facturen dienen binnen 14 kalenderdagen te worden voldaan. Bij laattijdige betaling zijn van rechtswege wettelijke handelsrente en invorderingskosten verschuldigd volgens de Belgische wetgeving.' },
          ],
        },
        {
          title: '5. Vertrouwelijkheid',
          text: 'Tijdens de realisatie kunnen wij specifieke drainagetechnieken of maatwerkdetails delen. De Klant stemt ermee in deze technische methodologieën vertrouwelijk te behandelen.',
        },
        {
          title: '6. Geschillenbeslechting',
          text: 'Wij verkiezen een handdruk boven een rechtszaal. Mocht er een geschil ontstaan, dan proberen partijen eerst via minnelijke bemiddeling tot een akkoord te komen. Indien geen oplossing wordt bereikt, zijn de bevoegde rechtbanken van de maatschappelijke zetel van het Bedrijf in Brussel exclusief bevoegd.',
        },
      ],
    },
  },
  fr: {
    privacy: {
      title: 'Politique de Confidentialité : A2Gardens & A2Trails',
      lastUpdated: 'Dernière mise à jour : 12 mars 2026',
      sections: [
        {
          title: '1. Responsable du traitement',
          text: "L'entité responsable du traitement de vos données personnelles est :",
          subsections: [
            { label: "Nom de l'entreprise", text: 'A2Trails / A2Gardens' },
            { label: 'Siège social', text: 'Mariemontkaai 15, 1080 Bruxelles, Belgique' },
            { label: 'Numéro BCE / TVA', text: 'BE1024.359.194' },
            { label: 'E-mail de contact', text: 'antonarnauts@a2trails.com' },
          ],
        },
        {
          title: '2. Base juridique du traitement',
          text: "Nous ne traitons les données personnelles que lorsqu'une base juridique valide existe en vertu de l'article 6(1) du RGPD :",
          subsections: [
            { label: 'Nécessité contractuelle', text: 'Pour effectuer des visites de sites, élaborer des devis, concevoir, réaliser et entretenir des jardins urbains et terrasses architecturales.' },
            { label: 'Obligation légale', text: "Pour les déclarations obligatoires de sécurité sociale (ex. Check-in-at-work / déclaration 30bis) et les déclarations fiscales." },
            { label: 'Consentement', text: 'Lorsque vous demandez un rappel ou acceptez les cookies non essentiels.' },
            { label: 'Intérêt légitime', text: 'Pour garantir la sécurité de notre site et échanger avec nos clients et partenaires B2B.' },
          ],
        },
        {
          title: '3. Catégories de données collectées',
          text: 'Nous collectons et traitons les catégories de données suivantes :',
          subsections: [
            { label: "Données d'identification", text: 'Nom, adresse, numéro de téléphone et adresse e-mail.' },
            { label: 'Données professionnelles & de projet', text: "Nom d'entreprise (si applicable), numéro de TVA, localisation du projet, contraintes d'accès et plans du jardin." },
            { label: 'Données techniques', text: 'Adresse IP, type de navigateur et durée de la visite (via cookies).' },
          ],
        },
        {
          title: '4. Périodes de conservation',
          text: 'Les données ne sont conservées que pendant la durée nécessaire aux finalités poursuivies :',
          subsections: [
            { label: 'Données comptables / fiscales', text: 'Strictement 7 ans (obligation légale belge).' },
            { label: 'Documents contractuels', text: '10 ans après la réception du chantier (couverture de la responsabilité décennale en vertu des articles 1792 et 2270 du Code civil).' },
            { label: 'Demandes de contact', text: '1 an si aucun contrat n’est conclu.' },
          ],
        },
        {
          title: '5. Partage et transferts de données',
          text: 'Les données peuvent être partagées avec :',
          subsections: [
            { label: 'Sous-traitants', text: 'Tailleurs de pierre, grutiers, élagueurs ou écologistes spécialisés, strictement sous contrat de sous-traitance (DPA).' },
            { label: 'Autorités publiques', text: "ONSS pour l'enregistrement obligatoire des présences sur chantier et services d'urbanisme." },
            { label: 'Prestataires informatiques', text: 'Services d’hébergement et cloud situés exclusivement au sein de l’EEE.' },
          ],
        },
        {
          title: '6. Droits de la personne concernée',
          text: 'Conformément au RGPD et à la législation belge, vous bénéficiez des droits suivants sous 30 jours :',
          subsections: [
            { label: "Droit d'accès", text: 'Pour connaître les données que nous détenons.' },
            { label: 'Droit de rectification', text: 'Pour corriger des informations inexactes.' },
            { label: "Droit à l'effacement", text: '("Droit à l’oubli") Sous réserve des obligations légales de conservation.' },
            { label: 'Droit à la limitation', text: 'Pour suspendre temporairement un traitement.' },
            { label: 'Droit à la portabilité', text: 'Pour recevoir vos données dans un format structuré.' },
          ],
        },
        {
          title: '7. Mesures de sécurité',
          text: 'Nous appliquons des mesures rigoureuses (chiffrement, pare-feu, contrôle d’accès) pour protéger vos données. Les plans et données de chantiers sont restreints au personnel ayant un besoin légitime.',
        },
        {
          title: '8. Plaintes',
          text: "Si vous estimez que vos données sont mal traitées, vous avez le droit d'introduire une réclamation auprès de l'Autorité de protection des données (APD) :",
          subsections: [
            { label: 'Autorité', text: 'Autorité de protection des données (APD)' },
            { label: 'Adresse', text: 'Rue de la Presse 35, 1000 Bruxelles' },
            { label: 'Site web', text: 'https://www.autoriteprotectiondonnees.be' },
          ],
        },
      ],
    },
    terms: {
      title: 'Conditions Générales de Service : A2Gardens & A2Trails',
      lastUpdated: 'Dernière mise à jour : 12 mars 2026',
      sections: [
        {
          title: '1. Notre Partenariat',
          text: 'Ces Conditions Générales de Service (les "Conditions") définissent la relation professionnelle entre A2Trails / A2Gardens (la "Société") et le Client. Nous concevons et réalisons avec passion, rigueur architecturale et précision botanique ; ces conditions garantissent la qualité et la pérennité de notre travail.',
        },
        {
          title: '2. Propriété Intellectuelle et Intégrité de la Conception',
          text: 'Nos conceptions paysagères et terrasses sont le fruit d’une ingénierie spatiale et d’une vision créative exclusive. En vertu du livre XI du Code de droit économique belge, ces conceptions sont protégées par le droit d’auteur.',
          subsections: [
            { label: 'Utilisation Autorisée', text: 'Le Client se voit octroyer une licence exclusive d’utilisation et de jouissance de l’aménagement à l’adresse convenue.' },
            { label: 'Protection de l’Œuvre', text: 'Afin de préserver l’intégrité esthétique et l’ADN de nos réalisations, le Client s’engage à ne pas reproduire ni faire reproduire nos plans et ouvrages de ferronnerie sur mesure sans notre accord écrit préalable.' },
            { label: 'Modifications', text: 'Toute modification structurelle majeure doit être discutée avec nous au préalable afin de respecter les droits moraux et les critères de sécurité de l’œuvre d’origine.' },
          ],
        },
        {
          title: '3. Garantie et Entretien',
          text: 'Nous garantissons l’excellence de nos réalisations :',
          subsections: [
            { label: 'Garantie Limitée de 3 Ans', text: 'La Société accorde une garantie de 3 ans sur les finitions, le dallage, la menuiserie et le drainage, sous réserve du respect de notre Guide d’Entretien Quatre Saisons.' },
            { label: 'Responsabilité Décennale (10 Ans)', text: 'Conformément aux articles 1792 et 2270 du Code civil belge, la responsabilité relative à la stabilité fondamentale des maçonneries et ouvrages porteurs est de 10 ans de plein droit.' },
            { label: 'Exclusions', text: 'Sont exclus les dommages résultant de catastrophes naturelles, d’anomalies climatiques exceptionnelles, du défaut d’entretien végétal ou de modifications non autorisées.' },
          ],
        },
        {
          title: '4. Propriété et Paiement',
          subsections: [
            { label: 'Réserve de Propriété', text: 'Conformément à la loi belge du 11 juillet 2013, tous les matériaux et l’ouvrage fini demeurent la propriété exclusive de la Société jusqu’au paiement intégral de la facture finale.' },
            { label: 'Conditions de Paiement', text: 'Les factures sont payables sous 14 jours calendrier. Tout retard donnera lieu de plein droit aux intérêts légaux applicables aux transactions commerciales et à une indemnité forfaitaire.' },
          ],
        },
        {
          title: '5. Confidentialité',
          text: 'Durant le projet, nous pouvons partager des techniques exclusives de terrassement ou de drainage. Le Client s’engage à garder ces méthodologies strictement confidentielles.',
        },
        {
          title: '6. Résolution des Litiges',
          text: 'Nous privilégions le dialogue constructif. En cas de différend, les parties conviennent de tenter une médiation préalable. À défaut d’accord amiable, les tribunaux de l’arrondissement judiciaire du siège social de la Société à Bruxelles sont exclusivement compétents.',
        },
      ],
    },
  },
};
