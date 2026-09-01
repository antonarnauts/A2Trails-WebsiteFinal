import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            products: 'Products',
            allProducts: 'All Construction Products',
            services: 'Services',
            projects: 'Projects',
            insights: 'Insights',
            about: 'About',
            contact: 'Contact',
            consultancy: 'Research & Feasibility',
            design: 'Design',
            construction: 'Construction',
            maintenance: 'Maintenance',
            designBuild: 'Design and Build',
          },
          hero: {
            title: 'Designing & Building<br />Riding Infrastructure for Lasting Impact',
            subtitle: 'Professional construction of riding infrastructure - helping municipalities, developers, and holiday parks create vibrant, active outdoor spaces',
            cta: 'View Our Projects',
            cta2: 'Get In Touch',
          },
          homeInsights: {
            badge: 'Industry Insights & Research',
            title: 'Featured Knowledge & Practical Guides',
            subtitle: 'Explore our latest articles on how specialized biking infrastructure creates lasting value for municipalities and construction projects.',
            viewAll: 'View All Insights',
            readArticle: 'Read Full Article',
            articleBadge: 'Industry Insights',
            slideOf: 'Article {{current}} of {{total}}',
          },
          sectors: {
            title: 'Solutions Tailored to Your Sector',
            subtitle: 'Specialized design, consultancy, and construction expertise engineered for your unique project requirements.',
            municipalities: {
              title: 'Municipalities',
              tagline: 'Inclusive sports hubs & active mobility',
              desc: 'Transform public spaces into thriving community hubs with certified pump tracks, urban skills parks, and accessible mountain biking trails.',
            },
            contractors: {
              title: 'Contractors & Developers',
              tagline: 'Specialist B2B design-and-build partner',
              desc: 'Team up with experienced trail building specialists for development and delivery of projects in the public domain.',
            },
            holidayParks: {
              title: 'Campings & Holiday Parks',
              tagline: 'Compact family attractions and sports facilities',
              desc: 'Skill parks and compact pumptracks that enhance and diversify guest experience.',
            },
            architects: {
              title: 'Architects',
              tagline: 'Co-creating attractive and engaging public spaces',
              desc: 'Seamlessly integrate our designs and user flow into your master plans with specialised technical and feasibility support.',
            },
          },
          expertise: {
            title: 'Our Expertise',
            subtitle: 'Design-and-build or solutions catered to your unique vision',
            learnMore: 'Learn More',
            consultancy: {
              desc: 'Strategic feasibility studies, site assessments, and technical engineering for sustainable biking and mountain-biking infrastructure.',
            },
            design: {
              desc: 'Creative and functional design of trail centers, skill parks, and pump tracks tailored to your specific needs.',
            },
            construction: {
              desc: 'Professional building using specialized machinery and hand-finishing for durable, high-quality bike infrastructure.',
            },
            maintenance: {
              desc: 'Preserving the quality and safety of your infrastructure through routine inspections and professional repairs.',
            },
          },
          cta: {
            title: 'Ready to Build Your Vision?',
            subtitle: "Let's create something amazing together. Contact us for a consultation.",
            button: 'Start Your Project',
          },
          footer: {
            description: 'Professional construction of mountain biking infrastructure that is perfectly adapted to your specific needs',
            quickLinks: 'Quick Links',
            services: 'Services',
            followUs: 'Follow Us',
            contact: 'Contact',
            vat: 'VAT',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
          },
          about: {
            title: 'Passion Meets Precision',
            p1: 'At A2Trails, we design and build cycling infrastructure that creates lasting community impact. As a complete end-to-end partner, we deliver customized pumptracks, skill parks, and trail networks tailored to the needs of municipalities, contractors, and holiday parks.',
            p2: 'Combining landscape architecture with a passion for riding, we create safe, inclusive spaces where people of all ages and abilities can move, progress, and connect.',
            stats: {
              experience: 'Years Experience',
              projects: 'Projects Completed',
            },
            approach: {
              title: 'Our Approach',
              community: {
                title: 'Community Focus',
                desc: 'We work closely with local communities to ensure our projects meet their needs and become beloved gathering places.',
              },
              design: {
                title: 'Adapted Design',
                desc: 'We analyse terrain, user needs, and environmental factors to create optimal designs that maximise rider confidence, fun, and sustainability.',
              },
              quality: {
                title: 'Quality Construction',
                desc: 'Using professional-grade equipment and proven techniques, we build facilities that stand the test of time and heavy use.',
              },
              pricing: {
                title: 'Lasting Impact',
                desc: "Perfectly blended in it's surroundings our tracks inspire confidence and create safer everyday cyclists",
              },
            },
            team: {
              title: 'Meet The Team',
              anton: {
                role: 'Founder & Designer',
                desc: 'Landscape architect with 5 years of track building experience',
              },
              ward: {
                role: 'Freelance designer - Dirt Jumps',
                desc: 'Dedicated trail builder with an eye for detail',
              },
              jelle: {
                role: 'Freelance Designer - Urban solutions',
                desc: 'Expert in street installations focused on BMX riders',
              },
              rafael: {
                role: 'Freelance Shaper',
                desc: 'Experienced MX rider who will never put his tools down before the job is done',
              },
            },
            cta: {
              title: "Let's Build Together",
              subtitle: "Have a project in mind? We'd love to hear about it and discuss how we can bring your vision to life.",
              button: 'Start a Conversation',
            },
          },
          projects: {
            title: 'Our Projects',
            subtitle: 'Showcasing our commitment to quality, flow, and sustainable bike infrastructure across Europe.',
            directory: 'Project Directory',
            browse: 'Browse our complete portfolio of projects where we assisted, planned, constructed and designed multiple types of mountain biking infrastructure.',
            search: 'Search by city or project...',
            filter: 'Filter:',
            all: 'All',
            table: {
              project: 'Project',
              category: 'Category',
              location: 'Location',
              services: 'Services',
              year: 'Year',
            },
            noResults: 'No projects found matching your criteria.',
            clearFilters: 'Clear all filters',
            cta: {
              title: 'Have a Project in Mind?',
              subtitle: 'Let\'s build something incredible together. From initial feasibility to final construction, we\'re with you every step of the way.',
              button: 'Get in Touch',
            },
            categories: {
              pumptrack: 'Pumptrack',
              skillPark: 'Skill Park',
              trailCenter: 'Trail Center',
              dirtJumps: 'Dirt Jumps',
            },
          },
          insights: {
            title: 'Industry Insights',
            subtitle: 'Thoughts, projects and inspiration from the world of biking infrastructure.',
            directory: 'Articles & Knowledge Base',
            browse: 'Explore research, case studies, and engineering deep-dives from our trail builders and landscape architects.',
            search: 'Search articles, topics or tags...',
            filter: 'Category:',
            all: 'All Categories',
            readTime: 'min read',
            readArticle: 'Read Article',
            backToInsights: 'Back to Insights',
            share: 'Share',
            keyTakeaways: 'Key Takeaways',
            noResults: 'No articles found matching your criteria.',
            clearFilters: 'Clear filters',
            categories: {
              engineering: 'Design & Engineering',
              landscape: 'Landscape Architecture',
              construction: 'Construction & Environment',
              safety: 'Safety & Norms',
              maintenance: 'Maintenance & Lifecycle',
              planning: 'Planning & Feasibility',
            },
            cta: {
              title: 'Have a project that includes biking infrastructure?',
              button: "Let's Talk",
            },
            articles: {
              'biking-infrastructure-partnerships': {
                title: 'Building Better Projects Through Biking Infrastructure Partnerships',
                meta: 'Written by A2Trails · Published September 2026 · Construction specialist partnership',
                excerpt: 'Modern developments are increasingly complex, blending housing, public spaces, and recreation. Meeting these demands often requires bringing specialized expertise into your project team.',
                content: `Modern developments are increasingly complex, blending housing, public spaces, and recreation. Meeting these demands often requires bringing specialized expertise into your project team.

Biking infrastructure—such as [pump tracks](/services/construction#pumptracks), [skills parks](/services/construction#skill-tracks), and trails—is one area where specialist knowledge makes a measurable difference. Partnering with a specialist complements your company's core capabilities, helping integrate these features smoothly into the wider project.

Three key benefits of partnering with a biking infrastructure specialist:

1. Improves Project Quality
• A successful biking facility depends on how well layout, flow, shape, materials, drainage, and safety work together.
• Bringing specialist expertise into the project early aligns biking infrastructure with the wider design, boosting the overall appeal and performance of the project.
• Outsourcing keeps your focus on the overall project development.

2. Reduces Project Risk
• Early assessment of site conditions, drainage, materials, and safety requirements gives your team a clear understanding of scope and costs upfront.
• Tight coordination between designers, your construction team, and specialists ensures financial predictability, fewer surprises, and smoother execution.

3. Enhances Construction Capabilities
• Offer clients complete, specialized biking solutions through a single project team without the overhead of developing in-house expertise.
• Win more bids for recreational projects while keeping overall project execution firmly under control.

Great partnerships are about bringing the right expertise in at the right time.

At A2Trails, we work alongside construction companies from design through execution. Have a project that includes biking infrastructure? [Let's talk](/contact).`,
                takeaways: [
                  'Specialist expertise aligns layout, flow, shape, drainage, and safety for higher project appeal.',
                  'Early technical assessment of site conditions reduces project risk and guarantees cost predictability.',
                  'Enables construction teams to win and deliver complete recreational biking solutions without in-house overhead.',
                ],
              },
              'biking-infrastructure-municipalities': {
                title: '5 Ways Biking Infrastructure Can Benefit Municipalities',
                meta: 'Written by A2Trails · Published September 2026 · Municipal Biking Infrastructure',
                excerpt: 'Belgium is entering an important decade for biking, aiming for 22% of all trips and 10% of kilometres travelled by bicycle by 2040 under the Be Cyclist 2.0 action plan.',
                content: `Belgium is entering an important decade for biking.

In May 2026, the federal government approved **Be Cyclist 2.0**, its biking action plan for 2026-2029. The strategy aims to make biking more attractive, accessible, safe and healthy. Looking further ahead, Belgium aims to reach **22% of all trips by bicycle and 10% of kilometres travelled by bicycle by 2040**. [1][2]

For municipalities, this raises a broader question: **how can biking infrastructure help more people cycle while also creating value for the wider community?**

Cycle paths and safe streets are essential. But people also need spaces where they can learn, practise and enjoy biking. [Pump tracks](/services/construction#pumptracks), [skills parks](/services/construction#skill-tracks) and other biking facilities can complement the wider network while creating additional value for the community.

1. Biking infrastructure contributes to healthier communities
Biking combines physical activity, recreation and everyday transportation, making it a practical way for municipalities to encourage healthier lifestyles and more movement as part of daily life. A bicycle ride to school, a trip to a local destination or an afternoon spent riding can all turn movement into a regular part of daily life. Research consistently shows that biking can improve physical fitness, particularly among young people, and can contribute to better cardiovascular health. [3] Studies involving more than one million people have also found that regular biking is associated with a lower risk of cardiovascular disease and death. [4]

For municipalities, this means biking infrastructure can contribute to **public-health objectives as well as mobility objectives**. A pump track or skills park adds another opportunity for physical activity - a dedicated area where children, families and recreational riders can be active outdoors, close to home and at their own level.

2. Biking skills build confidence
Feeling confident on a bicycle matters. Braking, balancing, controlling speed, cornering and navigating obstacles are skills that develop with practice. A dedicated biking facility gives people a safe environment to develop these skills.

Research involving 2,260 children found that bicycle safety and skills training improved both their knowledge and their confidence in their biking abilities. [5] Longer-term research has also found that young people who received cycle training were more likely to cycle to school and reported certain safer biking behaviours. [6]

Giving people a place to learn, practise and progress can help make biking feel more natural and enjoyable - and encourage them to keep riding.

3. Biking facilities create community destinations
A pump track or skills park can be much more than a place to ride. With the right design, it can bring together children, teenagers, families, recreational riders, clubs and schools, creating a space where people are active and spend time together. This makes biking infrastructure part of **placemaking - creating destinations where people want to spend time, be active and connect**.

Research into new biking infrastructure in Sydney found positive effects on social connection among residents, alongside potential increases in biking participation. [7] This suggests that biking infrastructure can contribute not only to getting people moving, but also to creating spaces where people spend time, meet others and enjoy their community.

4. Pump tracks are part of a wider biking system
Safe streets and connected biking routes make everyday biking possible. Schools and community programmes can help people learn and build confidence, while facilities such as pump tracks and skills parks provide areas to practise and stay active. Research supports this combined approach: studies have found that improvements to biking infrastructure together with broader community-level programmes can contribute to increased biking. [8][9]

For a municipality, this could mean connecting a biking facility to existing bike routes, working with local schools or clubs on biking activities, or combining infrastructure improvements with education and community events. A pump track or skills park then becomes one part of a broader biking environment, rather than a standalone project.

5. One facility supports several community priorities
Municipal investments often need to serve more than one purpose. A well-designed biking facility can support **active mobility, health, recreation, youth engagement and tourism** at the same time. It can give children and families an opportunity to be active, provide schools and clubs a setting for biking activities, and add a new recreational destination to a neighbourhood. When a facility is attractive enough to draw visitors from neighbouring towns or further afield, it can also contribute to the wider appeal of the municipality and local tourism.

A facility that offers different levels of challenge can welcome beginners while still giving more experienced riders room to progress. It can be useful on an ordinary afternoon, but also become a place for coaching, community activities or events.

At A2Trails, we believe that starts with understanding the community and the people who will use the space. The right solution should balance rider experience, technical excellence, community needs and long-term value - creating infrastructure that works not only as a facility, but as part of the place around it. [Learn more about our Research & Feasibility and Design & Engineering services](/services/consultancy)

Planning a biking infrastructure project? [Let's talk](/contact)

References
[1] Federal Government of Belgium. (2026, May 22). Be Cyclist 2.0: Federal action plan for cycling 2026–2029. News.belgium. https://news.belgium.be/nl/be-cyclist-20-federaal-actieplan-voor-de-fiets-2026-2029
[2] Federal Public Service Mobility and Transport. (2026, May 22). Federal survey on home-to-work travel 2024–2025: Twice as many cyclists in 20 years. News.belgium. https://mobilit.belgium.be/nl/news/nieuw-actieplan-be-cyclist-20
[3] Oja, P., Titze, S., Bauman, A., de Geus, B., Krenn, P., Reger-Nash, B., & Kohlberger, T. (2011). Health benefits of cycling: A systematic review. Scandinavian Journal of Medicine & Science in Sports, 21(4), 496–509. https://doi.org/10.1111/j.1600-0838.2011.01299.x
[4] Nordengen, S., Andersen, L. B., Solbraa, A. K., & Riiser, A. (2019). Cycling is associated with a lower incidence of cardiovascular diseases and death: Part 1 -Systematic review of cohort studies with meta-analysis. British Journal of Sports Medicine, 53(14), 870–878. https://doi.org/10.1136/bjsports-2018-099099
[5] Howard, K. A., Griffin, S. F., Rolke, L. J., et al. (2025). Exploration of individual and context features of a bicycle skills program for riding injury prevention knowledge and self-efficacy among children. Journal of Transport & Health, 43, 102050. https://doi.org/10.1016/j.jth.2025.102050
[6] Teyhan, A., Cornish, R., Boyd, A., Sissons Joshi, M., & Macleod, J. (2016). The impact of cycle proficiency training on cycle-related behaviours and accidents in adolescence: Findings from ALSPAC, a UK longitudinal cohort. BMC Public Health, 16, 469. https://doi.org/10.1186/s12889-016-3138-2
[7] Mertens, L., Compernolle, S., Deforche, B., et al. (2017). Longitudinal evaluation of travel and health outcomes in relation to new bicycle infrastructure, Sydney, Australia. Journal of Transport & Health, 6, 386–395. https://doi.org/10.1016/j.jth.2017.07.002
[8] Yang, L., Sahlqvist, S., McMinn, A., Griffin, S. J., & Ogilvie, D. (2010). Interventions to promote cycling: Systematic review. BMJ, 341, c5293. https://doi.org/10.1136/bmj.c5293
[9] Roaf, E., Larrington-Spencer, H., & Lawlor, E. R. (2024). Interventions to increase active travel: A systematic review. Journal of Transport & Health, 38, 101860. https://doi.org/10.1016/j.jth.2024.101860`,
                takeaways: [
                  'Biking infrastructure connects public-health objectives with municipal mobility goals.',
                  'Dedicated riding spaces like pumptracks and skills parks encourage active daily movement for all generations.',
                  'Biking facilities serve as placemaking destinations and support broader multi-purpose community priorities.',
                ],
              },
              'sustainable-trail-drainage': {
                title: 'Sustainable Trail Drainage: Preventing Erosion in Natural Surface Networks',
                excerpt: 'Proven techniques in grade reversals, rolling dips, and sustainable soil stabilization to keep mountain bike and gravel trails weatherproof year-round.',
                content: 'Water is the primary adversary of natural surface trail systems. Implementing proactive hydrological controls such as outsloped tread, grade reversals every 10 to 15 meters, and localized French drains ensures trails remain rideable in wet European climates while protecting topsoil.',
                takeaways: [
                  'Grade reversals shed water before it gains enough velocity to cause rilling.',
                  'Outsloped treads distribute sheet flow naturally across downhill vegetation.',
                  'Mineral soil stabilization reduces rutting without introducing synthetic microplastics.',
                ],
              },
              'european-safety-standards-din-en-14974': {
                title: 'Safety Standards in Public Riding Infrastructure: DIN EN 14974 & EN 1176 Decoded',
                excerpt: 'A comprehensive overview of European safety norms for municipal sports parks, fall zones, barrier clearances, and risk mitigation strategies.',
                content: 'Navigating public liability and municipal compliance requires strict adherence to DIN EN 14974 (Skateparks & Pumptracks) and DIN EN 1176 (Playground Equipment). Understanding impact zones, sightlines, and safe surface transitions gives project managers confidence from tender to certification.',
                takeaways: [
                  'Impact areas must maintain minimum clearances of 2.0 meters from rigid obstacles.',
                  'Berm apexes require specified fall-zone transitions to adjacent turf or safety surfacing.',
                  'Clear signage detailing skill levels and direction of travel is mandatory for public liability compliance.',
                ],
              },
              'lifecycle-cost-maintenance-strategy': {
                title: 'Lifecycle Economics & Maintenance: Why Proactive Care Multiplies Trail ROI',
                excerpt: 'Comparing lifecycle costs of asphalt, gravel, and natural surface tracks. Best practices for crack sealing, vegetation management, and municipal handover.',
                content: 'While asphalt pumptracks have higher upfront construction costs compared to dirt jump parks, their 15-to-20 year durability and minimal maintenance produce far superior return on municipal investment. We outline the annual maintenance schedule that protects assets from premature degradation.',
                takeaways: [
                  'Bitumen emulsion seal-coating at year 5 and 10 restores surface flexibility and prevents oxidation.',
                  'Regular edge trimming prevents root intrusion from compromising the perimeter asphalt.',
                  'Digital maintenance logbooks streamline municipal warranty compliance.',
                ],
              },
              'community-driven-track-planning': {
                title: 'Community Engagement in Public Track Planning: From User Surveys to Opening Day',
                excerpt: 'How early stakeholder workshops with local youth, cycling clubs, and municipal planners ensure maximum park utilization and community ownership.',
                content: 'The most successful pump tracks and trail centers are co-created with the riders who will use them. Involving youth councils, local schools, and cycling associations during the feasibility phase generates local pride, reduces vandalism, and ensures riders of all skill tiers are accommodated.',
                takeaways: [
                  'Pre-design workshops align expectations across skateboarders, BMX riders, rollerbladers, and adaptive athletes.',
                  'Transparent public surveys simplify political approval processes and grant funding applications.',
                  'Community test-ride sessions prior to official opening build excitement and positive civic connection.',
                ],
              },
            },
          },
          contact: {
            title: 'Get In Touch',
            subtitle: 'Have an idea, a question or simply want to know more? Let’s talk.',
            info: 'Contact Information',
            phone: 'Phone',
            email: 'Email',
            office: 'Office',
            vat: 'VAT',
            hours: {
              title: 'Office Hours',
              monFri: 'Monday - Friday',
              weekend: 'Weekend',
              hoursRange: '8am - 6pm',
              closed: 'Closed',
            },
            form: {
              name: 'Name *',
              namePlaceholder: 'Your name',
              email: 'Email *',
              emailPlaceholder: 'Your email',
              phone: 'Phone',
              phonePlaceholder: 'Your phone number',
              projectType: 'Project Type *',
              projectTypePlaceholder: 'Select a project type',
              projectTypeInfo: 'Info',
              details: 'Project Details *',
              detailsPlaceholder: 'Tell us about your project, location, timeline, and any specific requirements...',
              submit: 'Send Message',
              success: 'Thank you for your message! We have received your request and will get back to you soon.',
              error: 'Something went wrong. Please ensure you have verified your email with Formspree or contact us directly at antonarnauts@a2trails.com.',
            },
          },
          services: {
            consultancy: {
              title: 'Research & Feasibility',
              subtitle: 'Strategic planning and technical expertise for sustainable bike infrastructure',
              feasibility: {
                title: 'Feasibility & Impact Studies',
                desc: 'Comprehensive analysis of site potential, environmental impact, and community needs to ensure project viability.',
                features: [
                  'Site potential assessment',
                  'Environmental impact analysis',
                  'Community need surveys',
                  'Risk assessment',
                  'Regulatory compliance check',
                ],
              },
              engineering: {
                title: 'Technical Engineering',
                desc: 'Precision engineering for drainage, soil stability, and structural technical features.',
                features: [
                  'Adapted drainage design',
                  'Soil composition analysis',
                  'Structural engineering',
                  'Technical specifications',
                  'Material sourcing strategy',
                  'Safety standards audit',
                ],
              },
              strategic: {
                title: 'Strategic Planning',
                desc: 'Long-term master planning for trail networks and urban bike park integration.',
                features: [
                  'Master plan development',
                  'Phased implementation strategy',
                  'Grant & funding support',
                  'Maintenance planning',
                  'Future-proofing designs',
                ],
              },
              cta: {
                title: 'Expert Advice',
                subtitle: 'Need technical guidance for your project? Our engineering team is ready to help you navigate the complexities of trail building.',
                button: 'Consult with Us',
              },
            },
            design: {
              title: 'Design',
              subtitle: 'Creative and functional designs that maximise fun and are scaled to your specific project',
              micro: {
                title: 'Micro Design',
                desc: 'Designing specific tracks tailored to local demands and user groups.',
                features: [
                  'Local demand analysis',
                  'Track-specific layouts',
                  'User-group targeting',
                  'Feature-specific blueprints',
                  'Technical obstacle design',
                  'Progression-based features',
                ],
              },
              meso: {
                title: 'Meso Design',
                desc: 'Seamless integration of bike infrastructure into surrounding parks, recreational areas, or sports complexes.',
                features: [
                  'Park & sports area integration',
                  'Landscape architecture',
                  'Multi-use synergy',
                  'Accessibility & flow',
                  'Aesthetic integration',
                  'Environmental blending',
                ],
              },
              macro: {
                title: 'Macro Design',
                desc: 'Large-scale strategic planning for recreation networks and trail centers to activate regional tourism.',
                features: [
                  'Regional network planning',
                  'Trail center master plans',
                  'Tourism activation strategy',
                  'Economic impact planning',
                  'Long-term sustainability',
                ],
              },
              cta: {
                title: 'Creative Vision',
                subtitle: 'Ready to see your project take shape? Let our designers create a vision that inspires your community.',
                button: 'Start Designing',
              },
            },
            construction: {
              title: 'Construction',
              subtitle: 'Creating infrastructure with a focus on durability, safety, and flow',
              pumptracks: {
                title: 'Pumptracks',
                desc: 'Professional asphalt pumptracks built for durability and perfect flow.',
                features: [
                  'Asphalt surfacing',
                  'Perfect geometry',
                  'All-weather durability',
                  'Low maintenance',
                  'Multi-user accessibility',
                  'Precision shaping',
                ],
              },
              mtbTrails: {
                title: 'Mountain Bike Trails',
                desc: 'Sustainable trail building that respects the natural environment while providing maximum fun.',
                features: [
                  'Natural terrain blending',
                  'Sustainable drainage',
                  'Erosion control',
                  'Technical trail features',
                  'Flow-trail expertise',
                  'Environmental protection',
                ],
              },
              jumpTracks: {
                title: 'Jump Tracks',
                desc: 'Technical jump lines designed for progression and airtime.',
                features: [
                  'Precision dirt shaping',
                  'Progression-based lines',
                  'Safety-first design',
                  'Technical jump geometry',
                  'Compaction expertise',
                  'Tuning & testing',
                ],
              },
              skillTracks: {
                title: 'Skill Tracks',
                desc: 'Educational tracks with technical obstacles to improve bike handling skills.',
                features: [
                  'Technical obstacles',
                  'Balance features',
                  'Progression zones',
                  'Safe learning environment',
                  'Wooden structures',
                  'Skill-specific challenges',
                ],
              },
              bmxTracks: {
                title: 'BMX Tracks',
                desc: 'Professional race tracks and freestyle parks designed for BMX athletes.',
                features: [
                  'UCI standard geometry',
                  'Starting gate integration',
                  'Pro-section lines',
                  'Technical rhythm sections',
                  'Asphalt or dirt turns',
                  'Race-ready surfacing',
                ],
              },
              eMotoTracks: {
                title: 'E-Moto Tracks',
                desc: 'Specialized tracks designed for electric motocross, focusing on power management, traction, and sustainable trail design.',
                features: [
                  'Sustainable soil stabilization',
                  'Technical climbing sections',
                  'Heavy-duty trail surfacing',
                ],
              },
              cta: {
                title: 'Built to Last',
                subtitle: 'Ready to break ground? Our construction team brings decades of experience to every build.',
                button: 'Build with Us',
              },
            },
            maintenance: {
              title: 'Maintenance',
              subtitle: 'Preserving the quality and safety of your bike infrastructure',
              asphalt: {
                title: 'Asphalt Pumptracks',
                desc: 'Specialized maintenance for asphalt surfaces to ensure long-lasting performance and rider safety.',
                features: [
                  'Crack repair',
                  'Erosion repair',
                  'Safety lines',
                  'Safety inspections',
                  'Surface repair',
                ],
              },
              gravelDirt: {
                title: 'Gravel and Dirt Trails',
                desc: 'Keeping natural surface trails in top shape through expert shaping and erosion management.',
                features: [
                  'Reshaping',
                  'Erosion repair',
                  'Feature inspection and repair',
                  'Signage and Information Panels',
                  'Green Maintenance',
                ],
              },
              green: {
                title: 'Green Maintenance',
                desc: 'Ecological management of the surroundings to preserve visibility and natural aesthetics.',
                features: [
                  'Vegetation control',
                  'Trimming overgrowth',
                  'Invasive species management',
                  'Accessibility of trails',
                ],
              },
              cta: {
                title: 'Protect Your Investment',
                subtitle: 'Regular maintenance extends the lifespan of your infrastructure and ensures maximum safety for users.',
                button: 'Schedule Maintenance',
              },
            },
          },
          privacy: {
            title: "Privacy Policy: A2Trails",
            lastUpdated: "Last Updated: March 12, 2026",
            controller: {
              title: "1. Data Controller",
              text: "The entity responsible for processing your personal data is:",
              company: "Company Name",
              office: "Registered Office",
              cbe: "CBE/KBO Number",
              email: "Contact Email"
            },
            legalBasis: {
              title: "2. Legal Basis for Processing",
              text: "We process personal data only when a valid legal basis exists under Article 6(1) GDPR:",
              contractual: "Contractual Necessity: To provide quotes for MTB trail design, construction, or maintenance.",
              legal: "Legal Obligation: For mandatory social security declarations (e.g., Check-in-at-work / 30bis declaration) or tax reporting.",
              consent: "Consent: When you subscribe to our newsletter or use non-essential cookies.",
              legitimate: "Legitimate Interest: To ensure the security of our website and to communicate with B2B partners."
            },
            categories: {
              title: "3. Categories of Data Collected",
              text: "We collect and process the following data categories:",
              identification: "Identification Data: Name, address, telephone number, and email.",
              professional: "Professional Data: Company name, VAT number, and project location (GPS coordinates for trail sites).",
              technical: "Technical Data: IP address, browser type, and duration of visit (via cookies)."
            },
            retention: {
              title: "4. Retention Periods",
              text: "Data is stored no longer than necessary for the purposes for which it was collected:",
              accounting: "Accounting/Tax Data: Strictly 7 years (statutory Belgian requirement).",
              contractual: "Contractual Documents: 10 years following the end of the contract (to cover 10-year liability for construction works under Articles 1792 and 2270 of the Civil Code).",
              requests: "Contact Requests: 1 year if no contract is concluded."
            },
            sharing: {
              title: "5. Data Sharing and Transfers",
              text: "Data may be shared with:",
              subcontractors: "Subcontractors: Specialized earthmovers or ecologists, strictly under a signed Data Processing Agreement (DPA).",
              authorities: "Public Authorities: RSZ/ONSS for mandatory attendance registration on construction sites.",
              it: "IT Providers: Hosting and cloud services located within the EEA."
            },
            rights: {
              title: "6. Rights of the Data Subject",
              text: "Under Belgian and EU law, you possess the following rights, which we will honor within 30 days of a request:",
              access: "Right of Access: To know what data we hold.",
              rectification: "Right to Rectification: To correct inaccurate data.",
              erasure: "Right to Erasure (\"Right to be Forgotten\"): Subject to legal retention obligations.",
              restriction: "Right to Restriction: To temporarily halt processing.",
              portability: "Right to Data Portability: To receive your data in a structured, machine-readable format."
            },
            security: {
              title: "7. Security Measures",
              text: "We implement technical and organizational measures (encryption, firewalls, access controls) to protect data against unauthorized access, loss, or destruction. On-site project data is restricted to personnel on a \"need-to-know\" basis."
            },
            complaints: {
              title: "8. Complaints",
              text: "If you believe your data is being mishandled, you have the right to lodge a complaint with the Belgian Data Protection Authority (GBA/APD):",
              authority: "Data Protection Authority"
            }
          },
          terms: {
            title: "Terms of Service: A2Trails",
            partnership: {
              title: "1. Our Partnership",
              text: "These Terms of Service (the \"Terms\") define the professional relationship between A2Trails (the \"Company\") and the Client. We build with passion and precision; these terms ensure that the quality and integrity of our work are preserved for the long term."
            },
            intellectualProperty: {
              title: "2. Intellectual Property & Design Integrity",
              text: "Our trail designs are the result of specialized engineering and creative vision. Under Book XI of the Belgian Code of Economic Law, these designs are protected works of authorship.",
              authorizedUse: "Authorized Use: The Client is granted an exclusive license to use and enjoy the trail at the agreed-upon location.",
              protection: "Protection of Work: To maintain the safety and \"DNA\" of our builds, the Client agrees not to replicate, copy, or allow third parties to mimic our technical features or layouts elsewhere without our written consent.",
              modifications: "Modifications: Because our name is attached to the project's reputation, any significant structural changes to the trail must be discussed with us first to ensure the \"moral rights\" and safety standards of the original design are respected."
            },
            warranty: {
              title: "3. Warranty and Maintenance",
              text: "We stand behind the quality of our builds. Our warranty structure is as follows:",
              limited: "3-Year Limited Warranty: The Company provides a three-year warranty against defects in craftsmanship and non-structural components (e.g., specific surfacing issues or minor drainage adjustments), provided the trail is maintained according to our provided Maintenance Manual.",
              structural: "Structural Integrity: In accordance with Articles 1792 and 2270 of the Belgian Civil Code, liability for the fundamental stability of major earthworks and structures remains 10 years by law.",
              exclusions: "Exclusions: This warranty does not cover damage from natural disasters (force majeure), lack of routine maintenance, or unauthorized \"DIY\" modifications by the Client."
            },
            ownership: {
              title: "4. Ownership and Payment",
              retention: "Retention of Title: Per the Law of 11 July 2013, all materials and the finished work remain the legal property of the Company until the final invoice is settled in full.",
              payment: "Payment Terms: We appreciate timely payments. Late payments will incur interest at the statutory rate for commercial transactions, plus a standard recovery fee as permitted under Belgian law."
            },
            confidentiality: {
              title: "5. Confidentiality",
              text: "During the build, we may share proprietary \"trail-building secrets\" or specialized drainage techniques. The Client agrees to treat this technical information as confidential and will not share blueprints or construction methodologies with competing firms."
            },
            dispute: {
              title: "6. Dispute Resolution",
              text: "We prefer a handshake over a courtroom. Should an issue arise, both parties agree to attempt formal mediation. If a resolution cannot be reached, the courts of the Company’s registered office in Belgium shall have exclusive jurisdiction."
            }
          },
        },
      },
      nl: {
        translation: {
          nav: {
            home: 'Home',
            products: 'Producten',
            allProducts: 'Alle Bouwproducten',
            services: 'Diensten',
            projects: 'Projecten',
            insights: 'Insights',
            about: 'Over ons',
            contact: 'Contact',
            consultancy: 'Research & Feasibility',
            design: 'Ontwerp',
            construction: 'Bouw',
            maintenance: 'Onderhoud',
            designBuild: 'Design and Build',
          },
          hero: {
            title: 'Ontwerpen & Bouwen van<br />Rij-infrastructuur met Blijvende Impact',
            subtitle: 'Professionele aanleg van fietsinfrastructuur - wij helpen gemeenten, projectontwikkelaars en vakantieparken levendige, actieve buitenruimtes te creëren',
            cta: 'Bekijk Onze Projecten',
            cta2: 'Neem Contact Op',
          },
          homeInsights: {
            badge: 'Inzichten & Onderzoek',
            title: 'Uitgelichte Kennis & Praktijkgidsen',
            subtitle: 'Ontdek onze nieuwste artikelen over hoe gespecialiseerde fietsinfrastructuur blijvende waarde creëert voor gemeenten en projectontwikkelingen.',
            viewAll: 'Bekijk Alle Inzichten',
            readArticle: 'Lees Volledig Artikel',
            articleBadge: 'Industry Insights',
            slideOf: 'Artikel {{current}} van {{total}}',
          },
          sectors: {
            title: 'Oplossingen Afgestemd op Uw Sector',
            subtitle: 'Gespecialiseerd ontwerp, advies en bouwexpertise afgestemd op de specifieke vereisten van uw project.',
            municipalities: {
              title: 'Gemeenten & Overheden',
              tagline: 'Inclusieve sport- en ontmoetingsplekken & actieve mobiliteit',
              desc: 'Transformeer openbare ruimtes tot bruisende ontmoetingsplekken met gecertificeerde pumptracks, urban skills parks en toegankelijke mountainbikeroutes.',
            },
            contractors: {
              title: 'Aannemers & Ontwikkelaars',
              tagline: 'Gespecialiseerde B2B design-and-build partner',
              desc: 'Werk samen met ervaren trailbouw-specialisten voor de ontwikkeling en oplevering van projecten in de openbare ruimte.',
            },
            holidayParks: {
              title: 'Campings & Vakantieparken',
              tagline: 'Compacte gezinsattracties en sportfaciliteiten',
              desc: 'Skillparks en compacte pumptracks die de gastbeleving verrijken en diversifiëren.',
            },
            architects: {
              title: 'Architecten & Landschapsplanners',
              tagline: 'Samen aantrekkelijke en dynamische openbare ruimtes creëren',
              desc: 'Integreer onze ontwerpen en gebruikersstromen naadloos in uw masterplannen met gespecialiseerde technische en haalbaarheidsondersteuning.',
            },
          },
          expertise: {
            title: 'Onze Expertise',
            subtitle: 'Design-and-build of oplossingen afgestemd op uw unieke visie',
            learnMore: 'Lees meer',
            consultancy: {
              desc: 'Strategische haalbaarheidsstudies, locatiebeoordelingen en technische engineering voor duurzame trailcenters en skillparks.',
            },
            design: {
              desc: 'Creatief en functioneel ontwerp van trailcenters, skillparks en pumptracks afgestemd op uw specifieke behoeften.',
            },
            construction: {
              desc: 'Professionele bouw met gespecialiseerde machines en handmatige afwerking voor duurzame fietsinfrastructuur van hoge kwaliteit.',
            },
            maintenance: {
              desc: 'Behoud van de kwaliteit en veiligheid van uw infrastructuur door routinematige inspecties en professionele reparaties.',
            },
          },
          cta: {
            title: 'Klaar om Uw Visie te Realiseren?',
            subtitle: 'Laten we samen iets geweldigs creëren. Neem contact met ons op voor een consultatie.',
            button: 'Start Uw Project',
          },
          footer: {
            description: 'Professionele aanleg van mountainbike-infrastructuur die perfect is aangepast aan uw specifieke behoeften',
            quickLinks: 'Snelle Links',
            services: 'Diensten',
            followUs: 'Volg Ons',
            contact: 'Contact',
            vat: 'BTW',
            rights: 'Alle rechten voorbehouden.',
            privacy: 'Privacybeleid',
            terms: 'Algemene Voorwaarden',
          },
          about: {
            title: 'Passie Ontmoet Precisie',
            p1: 'Bij A2Trails ontwerpen en bouwen we fietsinfrastructuur die een blijvende impact heeft op de gemeenschap. Als complete end-to-end partner leveren we op maat gemaakte pumptracks, skillparks en trailnetwerken afgestemd op de behoeften van gemeenten, aannemers en vakantieparken.',
            p2: 'Door landschapsarchitectuur te combineren met een passie voor rijden, creëren we veilige, inclusieve ruimtes waar mensen van alle leeftijden en niveaus kunnen bewegen, vooruitgang boeken en verbinden.',
            stats: {
              experience: 'Jaar Ervaring',
              projects: 'Projecten Voltooid',
            },
            approach: {
              title: 'Onze Aanpak',
              community: {
                title: 'Focus op Lokale Gebruikers',
                desc: 'We werken nauw samen met lokale gebruikers om ervoor te zorgen dat onze projecten aan hun behoeften voldoen en geliefde ontmoetingsplaatsen worden.',
              },
              design: {
                title: 'Aangepast Ontwerp',
                desc: 'We analyseren het terrein, de behoeften van de gebruiker en omgevingsfactoren om optimale ontwerpen te creëren die het zelfvertrouwen van de rijder, plezier en duurzaamheid maximaliseren.',
              },
              quality: {
                title: 'Kwaliteitsbouw',
                desc: 'Met behulp van professionele apparatuur en bewezen technieken bouwen we faciliteiten die de tand des tijds en intensief gebruik doorstaan.',
              },
              pricing: {
                title: 'Blijvende Impact',
                desc: 'Perfect ingepast in de omgeving inspireren onze tracks zelfvertrouwen en creëren ze veiligere alledaagse fietsers.',
              },
            },
            team: {
              title: 'Ontmoet Het Team',
              anton: {
                role: 'Oprichter & Ontwerper',
                desc: 'Landschapsarchitect met 5 jaar ervaring in het bouwen van tracks',
              },
              ward: {
                role: 'Freelance ontwerper - Dirt Jumps',
                desc: 'Toegewijde trailbouwer met oog voor detail',
              },
              jelle: {
                role: 'Freelance Ontwerper - Stedelijke oplossingen',
                desc: 'Expert in straatinstallaties gericht op BMX-rijders',
              },
              rafael: {
                role: 'Freelance Shaper',
                desc: 'Ervaren MX-rijder die zijn gereedschap nooit neerlegt voordat de klus is geklaard',
              },
            },
            cta: {
              title: 'Laten We Samen Bouwen',
              subtitle: 'Heeft u een project in gedachten? We horen er graag over en bespreken hoe we uw visie tot leven kunnen brengen.',
              button: 'Start een Gesprek',
            },
          },
          projects: {
            title: 'Onze Projecten',
            subtitle: 'Onze toewijding aan kwaliteit, flow en duurzame fietsinfrastructuur in heel Europa.',
            directory: 'Projectoverzicht',
            browse: 'Bekijk ons volledige portfolio van projecten waarbij we hebben geholpen, gepland, gebouwd en ontworpen voor meerdere soorten mountainbike-infrastructuur.',
            search: 'Zoek op stad of project...',
            filter: 'Filter:',
            all: 'Alle',
            table: {
              project: 'Project',
              category: 'Categorie',
              location: 'Locatie',
              services: 'Diensten',
              year: 'Jaar',
            },
            noResults: 'Geen projecten gevonden die aan uw criteria voldoen.',
            clearFilters: 'Wis alle filters',
            cta: {
              title: 'Heeft u een Project in Gedachten?',
              subtitle: 'Laten we samen iets ongelooflijks bouwen. Van de eerste haalbaarheid tot de uiteindelijke constructie, we begeleiden u bij elke stap.',
              button: 'Neem Contact Op',
            },
            categories: {
              pumptrack: 'Pumptrack',
              skillPark: 'Skill Park',
              trailCenter: 'Trail Center',
              dirtJumps: 'Dirt Jumps',
            },
          },
          insights: {
            title: 'Inzichten & Technische Kennis',
            subtitle: 'Gedachten, projecten en inspiratie uit de wereld van fietsinfrastructuur.',
            directory: 'Kennisbank & Inzichten',
            browse: 'Ontdek onderzoek, casestudies en technische analyses van onze trailbouwers en landschapsarchitecten.',
            search: 'Zoek artikelen, onderwerpen of tags...',
            filter: 'Categorie:',
            all: 'Alle Categorieën',
            readTime: 'min leestijd',
            readArticle: 'Lees Artikel',
            backToInsights: 'Terug naar Inzichten',
            share: 'Delen',
            keyTakeaways: 'Belangrijkste Inzichten',
            noResults: 'Geen artikelen gevonden die aan uw criteria voldoen.',
            clearFilters: 'Wis filters',
            categories: {
              engineering: 'Ontwerp & Engineering',
              landscape: 'Landschapsarchitectuur',
              construction: 'Bouw & Milieu',
              safety: 'Veiligheid & Normen',
              maintenance: 'Onderhoud & Levensduur',
              planning: 'Planning & Haalbaarheid',
            },
            cta: {
              title: 'Heeft u een project met fietsinfrastructuur?',
              button: 'Laten We Praten',
            },
            articles: {
              'biking-infrastructure-partnerships': {
                title: 'Betere Projecten Bouwen Door Partnerschappen in Fietsinfrastructuur',
                meta: 'Geschreven door A2Trails · Gepubliceerd september 2026 · Samenwerking met bouwspecialisten',
                excerpt: 'Moderne projectontwikkelingen worden steeds complexer en combineren wonen, openbare ruimte en recreatie. Om aan deze eisen te voldoen is vaak gespecialiseerde expertise binnen het projectteam nodig.',
                content: `Moderne projectontwikkelingen worden steeds complexer en combineren wonen, openbare ruimte en recreatie. Om aan deze eisen te voldoen is vaak gespecialiseerde expertise binnen het projectteam nodig.

Fietsinfrastructuur — zoals [pumptracks](/services/construction#pumptracks), [skillparks](/services/construction#skill-tracks) en trails — is een domein waar specialistische kennis een meetbaar verschil maakt. Samenwerken met een specialist vult de kerncompetenties van uw bedrijf aan en zorgt voor een soepele integratie van deze faciliteiten in het grotere geheel.

Drie belangrijke voordelen van samenwerken met een specialist in fietsinfrastructuur:

1. Verbetert de projectkwaliteit
• Een succesvolle fietsfaciliteit hangt af van hoe goed lay-out, flow, vormgeving, materialen, afwatering en veiligheid samenkomen.
• Door vroegtijdig specialistische expertise in te schakelen, wordt de fietsinfrastructuur afgestemd op het bredere ontwerp, wat de aantrekkingskracht en prestaties van het totale project verhoogt.
• Uitbesteding zorgt ervoor dat uw focus blijft liggen op de algehele projectontwikkeling.

2. Verlaagt het projectrisico
• Een vroege beoordeling van terreinomstandigheden, drainage, materialen en veiligheidseisen geeft uw team vooraf direct inzicht in de scope en kosten.
• Nauwe afstemming tussen ontwerpers, uw bouwteam en specialisten zorgt voor financiële voorspelbaarheid, minder verrassingen en een soepelere uitvoering.

3. Versterkt de bouwcapaciteiten
• Bied klanten complete, gespecialiseerde fietsoplossingen aan via één enkel projectteam, zonder de overhead van het intern opbouwen van specialistische expertise.
• Win meer aanbestedingen voor recreatieve projecten terwijl de algehele projectuitvoering stevig onder controle blijft.

Goede partnerschappen draaien om het inbrengen van de juiste expertise op het juiste moment.

Bij A2Trails werken we samen met bouwbedrijven van ontwerp tot en met realisatie. Heeft u een project met fietsinfrastructuur? [Laten we praten](/contact).`,
                takeaways: [
                  'Specialistische expertise stemt lay-out, flow, vormgeving, drainage en veiligheid optimaal op elkaar af.',
                  'Vroegtijdige inbreng over terrein en afwatering verlaagt projectrisico\'s en waarborgt kostenvoorspelbaarheid.',
                  'Stelt bouwbedrijven in staat complete recreatieve fietsoplossingen aan te bieden zonder interne overhead.',
                ],
              },
              'biking-infrastructure-municipalities': {
                title: '5 Manieren Waarop Fietsinfrastructuur Gemeenten Ten Goede Komt',
                meta: 'Geschreven door A2Trails · Gepubliceerd september 2026 · Gemeentelijke Fietsinfrastructuur',
                excerpt: 'België gaat een belangrijk decennium voor de fiets tegemoet, met als doel 22% van alle verplaatsingen en 10% van alle kilometers per fiets te realiseren tegen 2040 binnen Be Cyclist 2.0.',
                content: `België gaat een belangrijk decennium voor de fiets tegemoet.

In mei 2026 keurde de federale regering **Be Cyclist 2.0** goed, haar fietsactieplan voor 2026-2029. De strategie heeft tot doel fietsen aantrekkelijker, toegankelijker, veiliger en gezonder te maken. Vooruitkijkend wil België tegen 2040 **22% van alle verplaatsingen per fiets en 10% van de afgelegde kilometers per fiets** realiseren. [1][2]

Voor gemeenten roept dit een bredere vraag op: **hoe kan fietsinfrastructuur meer mensen aan het fietsen krijgen en tegelijkertijd waarde creëren voor de bredere gemeenschap?**

Fietspaden en veilige straten zijn essentieel. Maar mensen hebben ook plekken nodig waar ze kunnen leren, oefenen en genieten van fietsen. [Pumptracks](/services/construction#pumptracks), [skillparks](/services/construction#skill-tracks) en andere fietsfaciliteiten kunnen het bredere netwerk aanvullen en extra waarde creëren voor de gemeenschap.

1. Fietsinfrastructuur draagt bij aan gezondere gemeenschappen
Fietsen combineert fysieke activiteit, recreatie en dagelijks vervoer, waardoor het voor gemeenten een praktische manier is om gezondere levensstijlen en meer beweging in het dagelijks leven te stimuleren. Een fietstocht naar school, een rit naar een lokale bestemming of een namiddag rijden kunnen beweging tot een vast onderdeel van het dagelijks leven maken. Onderzoek toont consequent aan dat fietsen de fysieke conditie verbetert, vooral bij jongeren, en kan bijdragen aan een betere cardiovasculaire gezondheid. [3] Studies met meer dan een miljoen mensen hebben tevens aangetoond dat regelmatig fietsen gepaard gaat met een lager risico op hart- en vaatziekten en vroegtijdig overlijden. [4]

Voor gemeenten betekent dit dat fietsinfrastructuur kan bijdragen aan **volksgezondheidsdoelstellingen én mobiliteitsdoelstellingen**. Een pumptrack of skillpark biedt een extra kans op lichaamsbeweging - een toegewijde plek waar kinderen, gezinnen en recreatieve fietsers buiten actief kunnen zijn, dicht bij huis en op hun eigen niveau.

2. Fietsvaardigheden bouwen zelfvertrouwen op
Zelfvertrouwen op de fiets is van groot belang. Remmen, balanceren, snelheid beheersen, bochten nemen en obstakels overwinnen zijn vaardigheden die groeien door oefening. Een toegewijde fietsfaciliteit biedt mensen een veilige omgeving om deze vaardigheden te ontwikkelen.

Onderzoek onder 2.260 kinderen toonde aan dat fietsveiligheids- en vaardigheidstrainingen zowel hun kennis als hun zelfvertrouwen in hun fietsvaardigheden verbeterden. [5] Langetermijnonderzoek wees daarnaast uit dat jongeren die fietstraining kregen vaker met de fiets naar school gingen en veiliger fietsgedrag vertoonden. [6]

Door mensen een plek te bieden om te leren, te oefenen en vooruitgang te boeken, voelt fietsen natuurlijker en plezieriger aan — en blijven ze fietsen.

3. Fietsfaciliteiten creëren gemeenschappelijke ontmoetingsplekken
Een pumptrack of skillpark is veel meer dan alleen een plek om te rijden. Met het juiste ontwerp brengt het kinderen, tieners, gezinnen, recreatieve fietsers, clubs en scholen samen in een ruimte waar mensen actief zijn en tijd doorbrengen. Zo wordt fietsinfrastructuur een essentieel onderdeel van **placemaking — het creëren van bestemmingen waar mensen graag vertoeven, bewegen en verbinden**.

Onderzoek naar nieuwe fietsinfrastructuur in Sydney toonde positieve effecten aan op de sociale cohesie tussen bewoners, naast een toename in fietsdeelname. [7] Dit toont aan dat fietsinfrastructuur niet alleen mensen in beweging brengt, maar ook plekken creëert waar mensen elkaar ontmoeten en genieten van hun leefomgeving.

4. Pumptracks maken deel uit van een breder fietssysteem
Veilige straten en verbonden fietsroutes maken dagelijks fietsen mogelijk. Scholen en gemeenschapsprogramma's helpen mensen te leren en zelfvertrouwen op te bouwen, terwijl faciliteiten zoals pumptracks en skillparks ruimte bieden om actief te blijven. Onderzoek ondersteunt deze gecombineerde aanpak: studies tonen aan dat infrastructurele verbeteringen samen met bredere gemeenschapsprogramma's leiden tot meer fietsgebruik. [8][9]

Voor een gemeente kan dit betekenen dat een fietsfaciliteit wordt verbonden met bestaande fietsroutes, dat wordt samengewerkt met lokale scholen of clubs, of dat infrastructuur wordt gecombineerd met educatie en evenementen. Een pumptrack of skillpark wordt zo een integraal onderdeel van een brede fietsomgeving, in plaats van een op zichzelf staand project.

5. Eén faciliteit ondersteunt meerdere gemeentelijke prioriteiten
Gemeentelijke investeringen moeten vaak meerdere doelen tegelijk dienen. Een doordacht ontworpen fietsfaciliteit kan gelijktijdig **actieve mobiliteit, gezondheid, recreatie, jeugdbetrokkenheid en toerisme** ondersteunen. Het biedt kinderen en gezinnen een laagdrempelige beweegkans, geeft scholen en verenigingen een geschikte locatie voor activiteiten en voegt een aantrekkelijke bestemming toe aan de wijk. Wanneer een baan aantrekkelijk genoeg is om bezoekers uit omliggende gemeenten of verder weg aan te trekken, versterkt dit de uitstraling en het lokale toerisme.

Een faciliteit met verschillende moeilijkheidsgraden verwelkomt beginners en biedt tegelijkertijd ervaren rijders ruimte om te groeien. Het is bruikbaar op een doordeweekse namiddag, maar kan evengoed fungeren als locatie voor clinics, evenementen of buurtactiviteiten.

Bij A2Trails geloven we dat succes begint met inzicht in de gemeenschap en de eindgebruikers. De juiste oplossing brengt rijervaring, technische uitmuntendheid, maatschappelijke behoeften en langetermijnwaarde in balans — infrastructuur die niet alleen functioneert als baan, maar als verrijking van de omgeving. [Ontdek onze Onderzoek & Haalbaarheid en Ontwerp & Engineering diensten](/services/consultancy)

Een fietsinfrastructuurproject plannen? [Laten we praten](/contact)

Referenties
[1] Federale Regering van België. (2026, 22 mei). Be Cyclist 2.0: Federaal actieplan voor de fiets 2026–2029. News.belgium. https://news.belgium.be/nl/be-cyclist-20-federaal-actieplan-voor-de-fiets-2026-2029
[2] Federale Overheidsdienst Mobiliteit en Vervoer. (2026, 22 mei). Federale diagnostiek woon-werkverkeer 2024–2025: Dubbel zoveel fietsers in 20 jaar. News.belgium. https://mobilit.belgium.be/nl/news/nieuw-actieplan-be-cyclist-20
[3] Oja, P., Titze, S., Bauman, A., de Geus, B., Krenn, P., Reger-Nash, B., & Kohlberger, T. (2011). Health benefits of cycling: A systematic review. Scandinavian Journal of Medicine & Science in Sports, 21(4), 496–509. https://doi.org/10.1111/j.1600-0838.2011.01299.x
[4] Nordengen, S., Andersen, L. B., Solbraa, A. K., & Riiser, A. (2019). Cycling is associated with a lower incidence of cardiovascular diseases and death: Part 1 -Systematic review of cohort studies with meta-analysis. British Journal of Sports Medicine, 53(14), 870–878. https://doi.org/10.1136/bjsports-2018-099099
[5] Howard, K. A., Griffin, S. F., Rolke, L. J., et al. (2025). Exploration of individual and context features of a bicycle skills program for riding injury prevention knowledge and self-efficacy among children. Journal of Transport & Health, 43, 102050. https://doi.org/10.1016/j.jth.2025.102050
[6] Teyhan, A., Cornish, R., Boyd, A., Sissons Joshi, M., & Macleod, J. (2016). The impact of cycle proficiency training on cycle-related behaviours and accidents in adolescence: Findings from ALSPAC, a UK longitudinal cohort. BMC Public Health, 16, 469. https://doi.org/10.1186/s12889-016-3138-2
[7] Mertens, L., Compernolle, S., Deforche, B., et al. (2017). Longitudinal evaluation of travel and health outcomes in relation to new bicycle infrastructure, Sydney, Australia. Journal of Transport & Health, 6, 386–395. https://doi.org/10.1016/j.jth.2017.07.002
[8] Yang, L., Sahlqvist, S., McMinn, A., Griffin, S. J., & Ogilvie, D. (2010). Interventions to promote cycling: Systematic review. BMJ, 341, c5293. https://doi.org/10.1136/bmj.c5293
[9] Roaf, E., Larrington-Spencer, H., & Lawlor, E. R. (2024). Interventions to increase active travel: A systematic review. Journal of Transport & Health, 38, 101860. https://doi.org/10.1016/j.jth.2024.101860`,
                takeaways: [
                  'Fietsinfrastructuur verbindt volksgezondheidsdoelstellingen met gemeentelijke mobiliteitsdoelen.',
                  'Toegewijde faciliteiten zoals pumptracks en skillparks stimuleren dagelijkse beweging voor alle generaties.',
                  'Fietsfaciliteiten fungeren als ontmoetingsplek en ondersteunen brede maatschappelijke prioriteiten.',
                ],
              },
              'sustainable-trail-drainage': {
                title: 'Duurzame Trailafwatering: Erosie Voorkomen op Natuurlijke Ondergronden',
                excerpt: 'Bewezen technieken in hellingomkeringen, afwateringsgeulen en bodemstabilisatie om mountainbike- en gravelpaden het hele jaar berijdbaar te houden.',
                content: 'Water is de grootste vijand van onverharde trails. Door proactieve hydrologische controle zoals verkanting, hellingomkeringen om de 10 tot 15 meter en gerichte drainage blijven paden ook in natte Europese winters perfect in conditie.',
                takeaways: [
                  'Hellingomkeringen voeren water af voordat het stroomsnelheid en erosiekracht opbouwt.',
                  'Afschot zorgt voor een gelijkmatige verspreiding van oppervlaktewater over de vegetatie.',
                  'Minerale bodemstabilisatie vermindert spoorvorming zonder synthetische microplastics.',
                ],
              },
              'european-safety-standards-din-en-14974': {
                title: 'Veiligheidsnormen in Openbare Rij-infrastructuur: DIN EN 14974 & EN 1176 Uitgelegd',
                excerpt: 'Een overzicht van Europese veiligheidsnormen voor gemeentelijke sportparken, valzones, obstakelvrije ruimtes en risicobeheer.',
                content: 'Het waarborgen van openbare aansprakelijkheid en gemeentelijke conformiteit vereist strikte naleving van DIN EN 14974 en DIN EN 1176. Inzicht in valzones, zichtlijnen en veilige overgangen biedt projectleiders zekerheid van aanbesteding tot keuring.',
                takeaways: [
                  'Valzones moeten een minimale vrije ruimte van 2,0 meter houden ten opzichte van starre obstakels.',
                  'Kombochten vereisen veilige overgangszones naar aangrenzend gras of valdempende ondergrond.',
                  'Duidelijke bewegwijzering met moeilijkheidsgraden en rijrichting is essentieel voor openbare aansprakelijkheid.',
                ],
              },
              'lifecycle-cost-maintenance-strategy': {
                title: 'Levensduurkosten & Onderhoudsstrategie: Proactief Beheer Verhoogt Rendement',
                excerpt: 'Vergelijking van levensduurkosten tussen asfalt, gravel en aarde. Best practices voor scheurherstel, groenbeheer en overdracht.',
                content: 'Hoewel asfalt pumptracks een hogere initiële investering vergen, zorgen de levensduur van 15 tot 20 jaar en het minimale onderhoud voor een veel gunstiger gemeentelijk rendement. We schetsen het onderhoudsschema dat vroegtijdige slijtage voorkomt.',
                takeaways: [
                  'Bitumenemulsie-sealing in jaar 5 en 10 herstelt de flexibiliteit en voorkomt oxidatie.',
                  'Regelmatig kanten steken voorkomt dat wortelgroei de randen van het asfalt beschadigt.',
                  'Digitale onderhoudslogboeken vereenvoudigen de garantieopvolging voor gemeenten.',
                ],
              },
              'community-driven-track-planning': {
                title: 'Participatieve Baanplanning: Van Gebruikersbevraging tot Openingsdag',
                excerpt: 'Hoe participatieworkshops met lokale jeugd, clubs en stedenbouwers zorgen voor maximale bezetting en respect voor het terrein.',
                content: 'De meest succesvolle pumptracks en trailcenters ontstaan in co-creatie met de toekomstige gebruikers. Het betrekken van jeugdraden, scholen en wielerclubs tijdens de haalbaarheidsfase creëert trots, verkleint het risico op overlast en waarborgt toegankelijkheid voor elk niveau.',
                takeaways: [
                  'Ontwerpateliers stemmen behoeften van skateboarders, BMX’ers, steppers en inline-skaters op elkaar af.',
                  'Transparante burgerbevragingen vereenvoudigen politieke besluitvorming en subsidies.',
                  'Test-events vóór de officiële opening zorgen voor enthousiasme en sociale verbondenheid.',
                ],
              },
            },
          },
          contact: {
            title: 'Neem Contact Op',
            subtitle: 'Heeft u een idee, een vraag of wilt u gewoon meer weten?',
            info: 'Contactinformatie',
            phone: 'Telefoon',
            email: 'E-mail',
            office: 'Kantoor',
            vat: 'BTW',
            hours: {
              title: 'Kantooruren',
              monFri: 'Maandag - Vrijdag',
              weekend: 'Weekend',
              hoursRange: '08:00 - 18:00',
              closed: 'Gesloten',
            },
            form: {
              name: 'Naam *',
              namePlaceholder: 'Uw naam',
              email: 'E-mail *',
              emailPlaceholder: 'Uw e-mail',
              phone: 'Telefoon',
              phonePlaceholder: 'Uw telefoonnummer',
              projectType: 'Projecttype *',
              projectTypePlaceholder: 'Selecteer een projecttype',
              projectTypeInfo: 'Info',
              details: 'Projectdetails *',
              detailsPlaceholder: 'Vertel ons over uw project, locatie, tijdlijn en eventuele specifieke vereisten...',
              submit: 'Bericht Verzenden',
              success: 'Bedankt voor uw bericht! We hebben uw aanvraag ontvangen en nemen snel contact met u op.',
              error: 'Er is iets misgegaan. Zorg ervoor dat u uw e-mailadres heeft geverifieerd bij Formspree of neem direct contact met ons op via antonarnauts@a2trails.com.',
            },
          },
          services: {
            consultancy: {
              title: 'Research & Feasibility',
              subtitle: 'Advies op maat, haalbaarheidsstudies en locatie beoordelingen voor pump tracks, skill parks en recreatieve netwerken.',
              feasibility: {
                title: 'Haalbaarheids- & Impactstudies',
                desc: 'Uitgebreide analyse van het potentieel van de site, de impact op het milieu en de behoeften van de lokale gebruikers om de levensvatbaarheid van het project te waarborgen.',
                features: [
                  'Beoordeling van het potentieel van de site',
                  'Milieueffectanalyse',
                  'Enquêtes naar de behoeften van de lokale gebruikers',
                  'Risicobeoordeling',
                  'Controle op naleving van regelgeving',
                ],
              },
              engineering: {
                title: 'Technisch Ontwerp',
                desc: 'Precisie-engineering voor drainage, bodemstabiliteit en structurele technische kenmerken.',
                features: [
                  'Drainage-ontwerp',
                  'Analyse van de bodemsamenstelling',
                  'Technische specificaties',
                  'Strategie voor materiaalinkoop',
                  'Audit van veiligheidsnormen',
                ],
              },
              strategic: {
                title: 'Strategische Planning',
                desc: 'Lange-termijn masterplanning voor trailnetwerken en stedelijke bikepark-integratie.',
                features: [
                  'Ontwikkeling van masterplannen',
                  'Gefaseerde implementatiestrategie',
                  'Ondersteuning bij subsidies & financiering',
                  'Onderhoudsplanning',
                  'Toekomstbestendige ontwerpen',
                ],
              },
              cta: {
                title: 'Deskundig Advies',
                subtitle: 'Technische begeleiding nodig voor uw project? Ons engineeringteam staat klaar om u te helpen bij de complexiteit van trailbouw.',
                button: 'Raadpleeg Ons',
              },
            },
            design: {
              title: 'Ontwerp',
              subtitle: 'Creatieve en functionele trailontwerpen die FUN en rijervaring maximaliseren',
              micro: {
                title: 'Micro Ontwerp',
                desc: 'Ontwerpen van specifieke tracks afgestemd op lokale behoeften en gebruikersgroepen.',
                features: [
                  'Analyse van lokale vraag',
                  'Track-specifieke lay-outs',
                  'Doelgroepgerichtheid',
                  'Functiespecifieke blauwdrukken',
                  'Ontwerp van technische obstakels',
                  'Op progressie gebaseerde obstakels',
                ],
              },
              meso: {
                title: 'Meso Ontwerp',
                desc: 'Naadloze integratie van fietsinfrastructuur in omliggende parken, recreatiegebieden of sportcomplexen.',
                features: [
                  'Integratie in parken & sportgebieden',
                  'Landschapsarchitectuur',
                  'Toegankelijkheid & flow',
                  'Esthetische integratie',
                  'Natuurlijke inpassing',
                ],
              },
              macro: {
                title: 'Macro Ontwerp',
                desc: 'Grootschalige strategische planning voor recreatienetwerken en trailcenters om regionaal toerisme te activeren.',
                features: [
                  'Regionale netwerkplanning',
                  'Masterplannen voor trailcenters',
                  'Strategie voor toerisme-activatie',
                  'Planning van economische impact',
                  'Duurzaamheid op lange termijn',
                ],
              },
              cta: {
                title: 'Creatieve Visie',
                subtitle: 'Klaar om uw project vorm te zien krijgen? Laat onze ontwerpers een visie creëren die uw lokale gebruikers inspireert.',
                button: 'Begin Met Ontwerpen',
              },
            },
            construction: {
              title: 'Constructie',
              subtitle: 'Professionele trailbouw met een focus op duurzaamheid, veiligheid en flow',
              pumptracks: {
                title: 'Pumptracks',
                desc: 'Professionele asfalt pumptracks gebouwd voor duurzaamheid en perfecte flow.',
                features: [
                  'Asfaltverharding',
                  'Ontwerpen gericht op progressie',
                  'Duurzaamheid in alle weersomstandigheden',
                  'Weinig onderhoud',
                  'Toegankelijkheid voor diverse gebruikersgroepen',
                ],
              },
              mtbTrails: {
                title: 'Mountainbike Trails',
                desc: 'Duurzame trailbouw die de natuurlijke omgeving respecteert en maximaal plezier biedt.',
                features: [
                  'Integratie in natuurlijke omgeving.',
                  'Duurzame drainage',
                  'Erosiebestrijding',
                  'Technische trailkenmerken',
                  'Expertise in flow-trails',
                  'Milieubescherming',
                ],
              },
              jumpTracks: {
                title: 'Jump Tracks',
                desc: 'Technische jumplijnen ontworpen voor progressie en airtime.',
                features: [
                  'Precisievormgeving van aarde',
                  'Op progressie gebaseerde lijnen',
                  'Veiligheid-eerst ontwerp',
                  'Technische jump-geometrie',
                  'Expertise in verdichting',
                  'Afstemming & testen',
                ],
              },
              skillTracks: {
                title: 'Skill Tracks',
                desc: 'Educatieve tracks met technische obstakels om de fietstechniek te verbeteren.',
                features: [
                  'Technische obstakels',
                  'Balanskenmerken',
                  'Progressiezones',
                  'Veilige leeromgeving',
                  'Houten constructies',
                  'Vaardigheidsspecifieke uitdagingen',
                ],
              },
              bmxTracks: {
                title: 'BMX Tracks',
                desc: 'Professionele racebanen en freestyle parken ontworpen voor BMX-atleten.',
                features: [
                  'UCI-standaard geometrie',
                  'Integratie van starthekken',
                  'Pro-sectie lijnen',
                  'Technische ritmesecties',
                  'Asfalt of onverharde bochten',
                  'Race-klare verharding',
                ],
              },
              eMotoTracks: {
                title: 'E-Moto Tracks',
                desc: 'Gespecialiseerde tracks ontworpen voor elektrische motorcross, met de focus op vermogensbeheer, tractie en duurzaam trailontwerp.',
                features: [
                  'Duurzame bodemstabilisatie',
                  'Technische klimsecties',
                  'Heavy-duty trailverharding',
                ],
              },
              cta: {
                title: 'Gebouwd Om Mee Te Gaan',
                subtitle: 'Klaar om te beginnen? Ons constructieteam brengt tientallen jaren ervaring mee naar elke bouw.',
                button: 'Bouw Met Ons',
              },
            },
            maintenance: {
              title: 'Onderhoud',
              subtitle: 'Behoud van de kwaliteit en veiligheid van uw fietsinfrastructuur',
              asphalt: {
                title: 'Asfalt Pumptracks',
                desc: 'Gespecialiseerd onderhoud voor asfaltoppervlakken om behoud op lange termijn en veiligheid van de rijder te garanderen.',
                features: [
                  'Scheurreparatie',
                  'Erosieherstel',
                  'Veiligheidsbelijning',
                  'Veiligheidsinspecties',
                  'Oppervlakteherstel',
                ],
              },
              gravelDirt: {
                title: 'Grind- en Onverharde Trails',
                desc: 'Natuurlijke trails in topvorm houden door deskundige vormgeving en erosiebeheer.',
                features: [
                  'Hervormen',
                  'Erosieherstel',
                  'Inspectie en reparatie van features',
                  'Signalisatie en Informatiepanelen',
                  'Groenonderhoud',
                ],
              },
              green: {
                title: 'Groenonderhoud',
                desc: 'Ecologisch beheer van de omgeving om de zichtbaarheid en natuurlijke esthetiek te behouden.',
                features: [
                  'Vegetatiecontrole',
                  'Snoeien van overgroei',
                  'Beheer van invasieve soorten',
                  'Toegankelijkheid van trails',
                ],
              },
              cta: {
                title: 'Bescherm Uw Investering',
                subtitle: 'Regelmatig onderhoud verlengt de levensduur van uw infrastructuur en garandeert maximale veiligheid voor gebruikers.',
                button: 'Onderhoud Inplannen',
              },
            },
          },
          privacy: {
            title: "Privacybeleid: A2Trails",
            lastUpdated: "Laatst bijgewerkt: 12 maart 2026",
            controller: {
              title: "1. Verwerkingsverantwoordelijke",
              text: "De entiteit die verantwoordelijk is voor de verwerking van uw persoonsgegevens is:",
              company: "Bedrijfsnaam",
              office: "Maatschappelijke zetel",
              cbe: "KBO-nummer",
              email: "Contact e-mail"
            },
            legalBasis: {
              title: "2. Rechtsgrondslag voor verwerking",
              text: "Wij verwerken persoonsgegevens alleen wanneer er een geldige rechtsgrondslag bestaat onder Artikel 6(1) AVG:",
              contractual: "Contractuele noodzaak: Om offertes te verstrekken voor het ontwerp, de aanleg of het onderhoud van MTB-trails.",
              legal: "Wettelijke verplichting: Voor verplichte sociale zekerheidsaangiften (bijv. Check-in-at-work / 30bis aangifte) of belastingrapportage.",
              consent: "Toestemming: Wanneer u zich aanmeldt voor onze nieuwsbrief of niet-essentiële cookies gebruikt.",
              legitimate: "Gerechtvaardigd belang: Om de veiligheid van onze website te waarborgen en om te communiceren met B2B-partners."
            },
            categories: {
              title: "3. Categorieën van verzamelde gegevens",
              text: "Wij verzamelen en verwerken de volgende gegevenscategorieën:",
              identification: "Identificatiegegevens: Naam, adres, telefoonnummer en e-mail.",
              professional: "Professionele gegevens: Bedrijfsnaam, BTW-nummer en projectlocatie (GPS-coördinaten voor trail-locaties).",
              technical: "Technische gegevens: IP-adres, browsertype en duur van het bezoek (via cookies)."
            },
            retention: {
              title: "4. Bewaarperioden",
              text: "Gegevens worden niet langer bewaard dan nodig is voor de doeleinden waarvoor ze zijn verzameld:",
              accounting: "Boekhoudkundige/fiscale gegevens: Strikt 7 jaar (wettelijke Belgische vereiste).",
              contractual: "Contractuele documenten: 10 jaar na het einde van het contract (ter dekking van de 10-jarige aansprakelijkheid voor bouwwerken onder de artikelen 1792 en 2270 van het Burgerlijk Wetboek).",
              requests: "Contactverzoeken: 1 jaar als er geen contract wordt gesloten."
            },
            sharing: {
              title: "5. Delen en doorgeven van gegevens",
              text: "Gegevens kunnen worden gedeeld met:",
              subcontractors: "Onderaannemers: Gespecialiseerde grondverzetters of ecologen, strikt onder een ondertekende verwerkersovereenkomst (VWO).",
              authorities: "Overheidsinstanties: RSZ voor verplichte aanwezigheidsregistratie op bouwplaatsen.",
              it: "IT-providers: Hosting- en clouddiensten gevestigd binnen de EER."
            },
            rights: {
              title: "6. Rechten van de betrokkene",
              text: "Onder de Belgische en EU-wetgeving beschikt u over de volgende rechten, die wij binnen 30 dagen na een verzoek zullen honoreren:",
              access: "Recht op inzage: Om te weten welke gegevens we bewaren.",
              rectification: "Recht op rectificatie: Om onjuiste gegevens te corrigeren.",
              erasure: "Recht op gegevenswissing (\"Recht om vergeten te worden\"): Behoudens wettelijke bewaarplichten.",
              restriction: "Recht op beperking: Om de verwerking tijdelijk stop te zetten.",
              portability: "Recht op overdraagbaarheid van gegevens: Om uw gegevens te ontvangen in een gestructureerd, machineleesbaar formaat."
            },
            security: {
              title: "7. Veiligheidsmaatregelen",
              text: "Wij implementeren technische en organisatorische maatregelen (encryptie, firewalls, toegangscontroles) om gegevens te beschermen tegen ongeoorloofde toegang, verlies of vernietiging. Projectgegevens op locatie zijn beperkt tot personeel op basis van \"need-to-know\"."
            },
            complaints: {
              title: "8. Klachten",
              text: "Als u van mening bent dat uw gegevens verkeerd worden behandeld, heeft u het recht om een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA):",
              authority: "Gegevensbeschermingsautoriteit"
            }
          },
          terms: {
            title: "Algemene Voorwaarden: A2Trails",
            partnership: {
              title: "1. Onze Samenwerking",
              text: "Deze Algemene Voorwaarden (de \"Voorwaarden\") definiëren de professionele relatie tussen A2Trails (het \"Bedrijf\") en de Klant. Wij bouwen met passie en precisie; deze voorwaarden zorgen ervoor dat de kwaliteit en integriteit van ons werk op lange termijn behouden blijven."
            },
            intellectualProperty: {
              title: "2. Intellectuele Eigendom & Integriteit van het Ontwerp",
              text: "Onze trailontwerpen zijn het resultaat van gespecialiseerde engineering en creatieve visie. Onder Boek XI van het Belgisch Wetboek van Economisch Recht zijn deze ontwerpen beschermde werken van auteurschap.",
              authorizedUse: "Geautoriseerd Gebruik: De Klant krijgt een exclusieve licentie om de trail te gebruiken en ervan te genieten op de overeengekomen locatie.",
              protection: "Bescherming van het Werk: Om de veiligheid en het \"DNA\" van onze constructies te behouden, stemt de Klant ermee in om onze technische kenmerken of lay-outs elders niet te repliceren, te kopiëren of derden toe te staan deze na te bootsen zonder onze schriftelijke toestemming.",
              modifications: "Wijzigingen: Omdat onze naam verbonden is aan de reputatie van het project, moeten alle belangrijke structurele wijzigingen aan de trail eerst met ons worden besproken om ervoor te zorgen dat de \"morele rechten\" en veiligheidsnormen van het oorspronkelijke ontwerp worden gerespecteerd."
            },
            warranty: {
              title: "3. Garantie en Onderhoud",
              text: "Wij staan achter de kwaliteit van onze constructies. Onze garantiestructuur is als volgt:",
              limited: "3 jaar beperkte garantie: Het Bedrijf biedt een garantie van drie jaar tegen gebreken in vakmanschap en niet-structurele componenten (bijv. specifieke verhardingsproblemen of kleine drainage-aanpassingen), op voorwaarde dat de trail wordt onderhouden volgens onze verstrekte Onderhoudshandleiding.",
              structural: "Structurele Integriteit: In overeenstemming met de artikelen 1792 en 2270 van het Belgisch Burgerlijk Wetboek blijft de aansprakelijkheid voor de fundamentele stabiliteit van belangrijke grondwerken en structuren wettelijk 10 jaar.",
              exclusions: "Uitsluitingen: Deze garantie dekt geen schade door natuurrampen (overmacht), gebrek aan routineonderhoud of ongeoorloofde \"doe-het-zelf\" wijzigingen door de Klant."
            },
            ownership: {
              title: "4. Eigendom en Betaling",
              retention: "Eigendomsvoorbehoud: Volgens de Wet van 11 juli 2013 blijven alle materialen en het voltooide werk het wettelijk eigendom van het Bedrijf totdat de slotfactuur volledig is voldaan.",
              payment: "Betalingsvoorwaarden: Wij stellen tijdige betalingen op prijs. Bij laattijdige betalingen wordt rente aangerekend tegen de wettelijke rentevoet voor handelstransacties, plus een standaard invorderingsvergoeding zoals toegestaan onder de Belgische wetgeving."
            },
            confidentiality: {
              title: "5. Vertrouwelijkheid",
              text: "Tijdens de bouw kunnen we eigen \"trailbouwgeheimen\" of gespecialiseerde drainagetechnieken delen. De Klant stemt ermee in deze technische informatie als vertrouwelijk te behandelen en zal geen blauwdrukken of constructiemethodologieën delen met concurrerende bedrijven."
            },
            dispute: {
              title: "6. Geschillenbeslechting",
              text: "Wij verkiezen een handdruk boven een rechtszaal. Mocht er een probleem ontstaan, dan komen beide partijen overeen om formele bemiddeling te proberen. Indien geen oplossing kan worden bereikt, zijn de rechtbanken van de maatschappelijke zetel van het Bedrijf in België exclusief bevoegd."
            }
          },
        },
      },
      fr: {
        translation: {
          nav: {
            home: 'Accueil',
            products: 'Produits',
            allProducts: 'Tous les Produits de Construction',
            services: 'Services',
            projects: 'Projets',
            insights: 'Insights',
            about: 'À propos',
            contact: 'Contact',
            consultancy: 'Recherche & Faisabilité',
            design: 'Conception',
            construction: 'Construction',
            maintenance: 'Entretien',
            designBuild: 'Design and Build',
          },
          hero: {
            title: 'Conception & Construction<br />d\'Infrastructures Cyclables pour un Impact Durable',
            subtitle: 'Construction professionnelle d\'infrastructures cyclables - nous aidons les municipalités, les promoteurs et les villages de vacances à créer des espaces extérieurs dynamiques et actifs',
            cta: 'Voir Nos Projets',
            cta2: 'Contactez-nous',
          },
          homeInsights: {
            badge: 'Analyses & Recherches',
            title: 'Articles à la Une & Guides Pratiques',
            subtitle: 'Découvrez nos dernières publications sur la manière dont les infrastructures cyclables spécialisées créent une valeur durable pour les collectivités et les projets d\'aménagement.',
            viewAll: 'Voir Tous Les Articles',
            readArticle: 'Lire l\'Article Complet',
            articleBadge: 'Industry Insights',
            slideOf: 'Article {{current}} sur {{total}}',
          },
          sectors: {
            title: 'Des Solutions Adaptées à Votre Secteur',
            subtitle: 'Conception spécialisée, conseil technique et expertise de construction adaptés aux exigences spécifiques de votre projet.',
            municipalities: {
              title: 'Municipalités & Collectivités',
              tagline: 'Pôles sportifs inclusifs & mobilité active',
              desc: 'Transformez les espaces publics en lieux de vie dynamiques avec des pump tracks homologués, des parcs d\'apprentissage et des pistes de VTT accessibles.',
            },
            contractors: {
              title: 'Entreprises Générales & Promoteurs',
              tagline: 'Partenaire B2B spécialisé en design & build',
              desc: 'Collaborez avec des spécialistes confirmés de la construction de pistes pour le développement et la livraison de projets dans l\'espace public.',
            },
            holidayParks: {
              title: 'Campings & Villages de Vacances',
              tagline: 'Attractions familiales compactes et installations sportives',
              desc: 'Des skill parks et pump tracks compacts qui enrichissent et diversifient l\'expérience de vos visiteurs.',
            },
            architects: {
              title: 'Architectes & Paysagistes',
              tagline: 'Co-création d\'espaces publics attractifs et dynamiques',
              desc: 'Intégrez harmonieusement nos conceptions et flux d\'utilisateurs dans vos plans directeurs grâce à notre expertise technique et nos études de faisabilité.',
            },
          },
          expertise: {
            title: 'Notre Expertise',
            subtitle: 'Design & build ou solutions adaptées à votre vision unique',
            learnMore: 'En savoir plus',
            consultancy: {
              desc: 'Études de faisabilité stratégiques, évaluations de sites et ingénierie technique pour des centres de pistes et des parcs de compétences durables.',
            },
            design: {
              desc: 'Conception créative et fonctionnelle de centres de pistes, de parcs de compétences et de pump tracks adaptés à vos besoins spécifiques.',
            },
            construction: {
              desc: 'Construction professionnelle utilisant des machines spécialisées et des finitions manuelles pour une infrastructure cyclable durable et de haute qualité.',
            },
            maintenance: {
              desc: 'Préserver la qualité et la sécurité de vos infrastructures grâce à des inspections de routine et des réparations professionnelles.',
            },
          },
          cta: {
            title: 'Prêt à Réaliser Votre Vision ?',
            subtitle: 'Créons quelque chose d\'incroyable ensemble. Contactez-nous pour une consultation.',
            button: 'Démarrer Votre Projet',
          },
          footer: {
            description: 'Construction professionnelle d\'infrastructures de VTT parfaitement adaptées à vos besoins spécifiques',
            quickLinks: 'Liens Rapides',
            services: 'Services',
            followUs: 'Suivez-nous',
            contact: 'Contact',
            vat: 'TVA',
            rights: 'Tous droits réservés.',
            privacy: 'Politique de Confidentialité',
            terms: 'Conditions d\'Utilisation',
          },
          about: {
            title: 'La Passion Rencontre la Précision',
            p1: 'Chez A2Trails, nous concevons et construisons des infrastructures cyclables qui créent un impact communautaire durable. En tant que partenaire de bout en bout complet, nous livrons des pump tracks, parcs de compétences et réseaux de sentiers personnalisés, adaptés aux besoins des municipalités, des entrepreneurs et des parcs de vacances.',
            p2: 'En alliant l\'architecture paysagère à une passion pour le ride, nous créons des espaces sûrs et inclusifs où les personnes de tous âges et de toutes capacités peuvent bouger, progresser et se connecter.',
            stats: {
              experience: 'Années d\'Expérience',
              projects: 'Projets Réalisés',
            },
            approach: {
              title: 'Notre Approche',
              community: {
                title: 'Focus Communautaire',
                desc: 'Nous travaillons en étroite collaboration avec les communautés locales pour garantir que nos projets répondent à leurs besoins et deviennent des lieux de rencontre appréciés.',
              },
              design: {
                title: 'Conception Adaptée',
                desc: 'Nous analysons le terrain, les besoins des utilisateurs et les facteurs environnementaux pour créer des conceptions optimales qui maximisent la confiance des riders, le plaisir et la durabilité.',
              },
              quality: {
                title: 'Construction de Qualité',
                desc: 'En utilisant un équipement de qualité professionnelle et des techniques éprouvées, nous construisons des installations qui résistent à l\'épreuve du temps et à une utilisation intensive.',
              },
              pricing: {
                title: 'Impact Durable',
                desc: 'Parfaitement intégrées dans leur environnement, nos pistes inspirent confiance et créent des cyclistes du quotidien plus sûrs.',
              },
            },
            team: {
              title: 'Rencontrez l\'Équipe',
              anton: {
                role: 'Fondateur & Designer',
                desc: 'Architecte paysagiste avec 5 ans d\'expérience en construction de pistes.',
              },
              ward: {
                role: 'Designer freelance - Dirt Jumps',
                desc: 'Constructeur de pistes dévoué avec un sens du détail.',
              },
              jelle: {
                role: 'Designer Freelance - Solutions urbaines',
                desc: 'Expert en installations de rue axées sur les riders BMX',
              },
              rafael: {
                role: 'Shaper Freelance',
                desc: 'Rider MX expérimenté qui ne posera jamais ses outils avant que le travail ne soit terminé',
              },
            },
            cta: {
              title: 'Construisons Ensemble',
              subtitle: 'Vous avez un projet en tête ? Nous serions ravis d\'en entendre parler et de discuter de la manière dont nous pouvons donner vie à votre vision.',
              button: 'Démarrer une Conversation',
            },
          },
          projects: {
            title: 'Nos Projets',
            subtitle: 'Présentation de notre engagement envers la qualité, le flow et les infrastructures cyclables durables à travers l\'Europe.',
            directory: 'Répertoire des Projets',
            browse: 'Parcourez notre portfolio complet de projets où nous avons assisté, planifié, construit et conçu plusieurs types d\'infrastructures de VTT.',
            search: 'Rechercher par ville ou projet...',
            filter: 'Filtrer :',
            all: 'Tous',
            table: {
              project: 'Projet',
              category: 'Catégorie',
              location: 'Lieu',
              services: 'Services',
              year: 'Année',
            },
            noResults: 'Aucun projet trouvé correspondant à vos critères.',
            clearFilters: 'Effacer tous les filtres',
            cta: {
              title: 'Vous avez un Projet en Tête ?',
              subtitle: 'Construisons quelque chose d\'incroyable ensemble. De la faisabilité initiale à la construction finale, nous vous accompagnons à chaque étape.',
              button: 'Contactez-nous',
            },
            categories: {
              pumptrack: 'Pump Track',
              skillPark: 'Skill Park',
              trailCenter: 'Centre de Pistes',
              dirtJumps: 'Dirt Jumps',
            },
          },
          insights: {
            title: 'Perspectives & Connaissances Techniques',
            subtitle: 'Réflexions, projets et inspiration du monde des infrastructures cyclables.',
            directory: 'Centre de Connaissances',
            browse: 'Découvrez des études de cas, des recherches et des analyses d\'ingénierie rédigées par nos concepteurs et architectes paysagistes.',
            search: 'Rechercher des articles, thèmes ou tags...',
            filter: 'Catégorie :',
            all: 'Toutes les Catégories',
            readTime: 'min de lecture',
            readArticle: 'Lire l\'Article',
            backToInsights: 'Retour aux Insights',
            share: 'Partager',
            keyTakeaways: 'Points Clés',
            noResults: 'Aucun article trouvé correspondant à vos critères.',
            clearFilters: 'Effacer les filtres',
            categories: {
              engineering: 'Conception & Ingénierie',
              landscape: 'Architecture Paysagère',
              construction: 'Construction & Environnement',
              safety: 'Sécurité & Normes',
              maintenance: 'Entretien & Cycle de Vie',
              planning: 'Planification & Faisabilité',
            },
            cta: {
              title: 'Vous avez un projet intégrant des infrastructures cyclables ?',
              button: 'Échangeons Ensemble',
            },
            articles: {
              'biking-infrastructure-partnerships': {
                title: 'Construire de Meilleurs Projets Grâce aux Partenariats en Infrastructure Cyclable',
                meta: 'Rédigé par A2Trails · Publié en septembre 2026 · Partenariat avec spécialistes de la construction',
                excerpt: 'Les aménagements modernes sont de plus en plus complexes, combinant habitat, espaces publics et loisirs. Répondre à ces exigences nécessite souvent d\'intégrer une expertise spécialisée au sein de votre équipe projet.',
                content: `Les projets d'aménagement modernes sont de plus en plus complexes, combinant habitat, espaces publics et loisirs. Répondre à ces exigences nécessite souvent d'intégrer une expertise spécialisée au sein de votre équipe projet.

Les infrastructures cyclables — telles que les [pump tracks](/services/construction#pumptracks), les [skills parks](/services/construction#skill-tracks) et les sentiers — constituent un domaine où les compétences pointues font une différence mesurable. S'associer à un spécialiste complète les capacités clés de votre entreprise, facilitant l'intégration harmonieuse de ces équipements dans l'aménagement global.

Trois bénéfices majeurs d'un partenariat avec un spécialiste des infrastructures cyclables :

1. Améliore la qualité du projet
• La réussite d'un aménagement cyclable repose sur la parfaite synergie entre tracé, fluidité, modelage, matériaux, drainage et sécurité.
• Intégrer l'expertise spécialisée dès la phase amont aligne les infrastructures cyclables avec le plan masse, renforçant l'attractivité et la performance globale du projet.
• L'externalisation vous permet de maintenir votre concentration sur la conduite générale de l'opération.

2. Réduit les risques du projet
• L'évaluation précoce de la topographie, du drainage, des matériaux et des exigences de sécurité offre à votre équipe une vision nette du périmètre et des coûts dès le départ.
• Une coordination étroite entre concepteurs, équipe de chantier et spécialistes garantit la prévisibilité financière, élimine les mauvaises surprises et assure une exécution fluide.

3. Renforce les capacités de construction
• Proposez à vos clients des solutions cyclables complètes et spécialisées au sein d'une équipe projet unique, sans supporter les coûts de développement d'un pôle d'expertise en interne.
• Remportez davantage d'appels d'offres pour des projets récréatifs tout en gardant une maîtrise totale de l'exécution globale.

Les grands partenariats consistent à mobiliser la bonne expertise au moment opportun.

Chez A2Trails, nous collaborons avec les entreprises de construction de la conception jusqu'à l'exécution. Vous avez un projet intégrant des infrastructures cyclables ? [Échangeons ensemble](/contact).`,
                takeaways: [
                  'Une expertise pointue optimise le tracé, la fluidité, le modelage et l\'attractivité globale du site.',
                  'L\'évaluation précoce du terrain et du drainage réduit les risques et garantit la prévisibilité budgétaire.',
                  'Permet aux entreprises générales de remporter et livrer des projets récréatifs clés en main sans frais de structure internes.',
                ],
              },
              'biking-infrastructure-municipalities': {
                title: '5 Façons Dont les Infrastructures Cyclables Bénéficient aux Communes',
                meta: 'Rédigé par A2Trails · Publié en septembre 2026 · Infrastructure Cyclable Municipale',
                excerpt: 'La Belgique entre dans une décennie décisive pour le vélo, avec pour objectif 22 % de parts modales et 10 % des kilomètres parcourus d\'ici 2040 dans le cadre de Be Cyclist 2.0.',
                content: `La Belgique entre dans une décennie décisive pour le vélo.

En mai 2026, le gouvernement fédéral a approuvé **Be Cyclist 2.0**, son plan d'action vélo pour 2026-2029. Cette stratégie vise à rendre la pratique du vélo plus attractive, accessible, sûre et saine. À plus long terme, la Belgique ambitionne d'atteindre **22 % de l'ensemble des déplacements à vélo et 10 % des kilomètres parcourus à vélo d'ici 2040**. [1][2]

Pour les municipalités et communes, cela soulève une question plus large : **comment l'infrastructure cyclable peut-elle encourager davantage de personnes à pédaler tout en créant de la valeur pour l'ensemble de la collectivité ?**

Les pistes cyclables et les rues sécurisées sont indispensables. Mais les usagers ont également besoin d'espaces où ils peuvent apprendre, s'entraîner et prendre plaisir à rouler. [Les pump tracks](/services/construction#pumptracks), les [skills parks](/services/construction#skill-tracks) et les autres aménagements cyclables peuvent compléter le réseau global tout en apportant une valeur ajoutée à la communauté.

1. L'infrastructure cyclable contribue à des communautés en meilleure santé
Le vélo associe activité physique, loisirs et déplacements quotidiens, ce qui en fait un moyen concret pour les communes d'encourager des modes de vie plus sains et davantage de mouvement au quotidien. Un trajet vers l'école, un déplacement de proximité ou un après-midi de glisse peuvent transformer l'activité physique en une habitude quotidienne. Les recherches démontrent de manière constante que la pratique du vélo améliore la condition physique, en particulier chez les jeunes, et contribue à une meilleure santé cardiovasculaire. [3] Des études portant sur plus d'un million de personnes ont également révélé que la pratique régulière du vélo est associée à une réduction du risque de maladies cardiovasculaires et de mortalité. [4]

Pour les communes, cela signifie que les infrastructures cyclables participent autant aux **objectifs de santé publique qu'aux objectifs de mobilité**. Un pump track ou un skills park offre une opportunité supplémentaire d'activité physique : un espace dédié où enfants, familles et pratiquants de tous niveaux peuvent s'épanouir en plein air, à proximité immédiate de leur domicile.

2. Les compétences cyclistes renforcent la confiance
Se sentir en confiance sur un vélo est primordial. Freiner, maintenir son équilibre, maîtriser sa vitesse, négocier les virages et franchir des obstacles sont des compétences qui s'acquièrent avec la pratique. Un espace dédié offre un environnement sécurisé et stimulant pour développer ces aptitudes.

Une étude menée auprès de 2 260 enfants a démontré que l'apprentissage des règles de sécurité et des compétences à vélo améliorait tant leurs connaissances que leur confiance en leurs capacités. [5] Des recherches longitudinales ont également établi que les jeunes ayant suivi une formation cycliste étaient plus enclins à se rendre à l'école à vélo et adoptaient des comportements plus prudents. [6]

Offrir un lieu pour apprendre, s'exercer et progresser rend la pratique plus naturelle et agréable — et encourage à continuer de rouler.

3. Les infrastructures créent de véritables destinations citoyennes
Un pump track ou un skills park est bien plus qu'une simple piste. Grâce à une conception soignée, il rassemble enfants, adolescents, familles, cyclistes amateurs, clubs et écoles dans un même espace partagé. L'infrastructure cyclable devient ainsi un puissant levier de **placemaking — créant des lieux de vie où les citoyens aiment se retrouver, bouger et tisser des liens**.

Une étude sur les nouvelles infrastructures cyclables à Sydney a mis en évidence des effets positifs sur le lien social entre résidents, parallèlement à une hausse de la pratique du vélo. [7] L'infrastructure contribue ainsi à créer des espaces conviviaux où les habitants partagent des moments de qualité.

4. Les pump tracks s'intègrent dans un écosystème cyclable global
Des rues sécurisées et des itinéraires continus rendent les trajets du quotidien possibles. Les programmes scolaires et associatifs permettent d'acquérir les bases et la confiance, tandis que les installations telles que les pump tracks et skills parks offrent des espaces idéaux pour pratiquer. La recherche confirme cette approche globale : les aménagements cyclables combinés à des programmes communautaires favorisent une hausse pérenne de la pratique. [8][9]

Pour une commune, cela implique de relier la piste aux axes cyclables existants, de collaborer avec les écoles et clubs locaux, et d'associer l'aménagement à des événements éducatifs et sportifs. Un pump track ou un skills park devient alors une composante majeure d'un environnement cyclable dynamique.

5. Un aménagement unique répond à plusieurs priorités communales
Les investissements municipaux doivent souvent répondre à des enjeux multiples. Un équipement cyclable bien conçu soutient simultanément **la mobilité active, la santé, les loisirs, l'engagement de la jeunesse et le tourisme local**. Il offre aux familles un espace de détente, fournit aux écoles et associations un cadre d'apprentissage et enrichit le quartier d'une nouvelle attraction récréative capable d'attirer des visiteurs des localités voisines.

Une infrastructure offrant des niveaux de difficulté progressifs accueille aussi bien les débutants que les pratiquants chevronnés. Elle sert au quotidien tout en accueillant des stages, des cours de perfectionnement ou des événements associatifs.

Chez A2Trails, nous sommes convaincus que chaque projet commence par l'écoute de la communauté et de ses usagers. La solution idéale concilie plaisir de pilotage, rigueur technique, besoins locaux et durabilité — en concevant des équipements parfaitement intégrés à leur environnement. [Découvrez nos services d'Étude & Faisabilité et de Conception & Ingénierie](/services/consultancy)

Vous planifiez un projet d'infrastructure cyclable ? [Échangeons ensemble](/contact)

Références
[1] Gouvernement Fédéral de Belgique. (2026, 22 mai). Be Cyclist 2.0 : Plan d'action fédéral pour le vélo 2026–2029. News.belgium. https://news.belgium.be/nl/be-cyclist-20-federaal-actieplan-voor-de-fiets-2026-2029
[2] SPF Mobilité et Transports. (2026, 22 mai). Diagnostic fédéral des déplacements domicile-travail 2024–2025 : Deux fois plus de cyclistes en 20 ans. News.belgium. https://mobilit.belgium.be/nl/news/nieuw-actieplan-be-cyclist-20
[3] Oja, P., Titze, S., Bauman, A., de Geus, B., Krenn, P., Reger-Nash, B., & Kohlberger, T. (2011). Health benefits of cycling: A systematic review. Scandinavian Journal of Medicine & Science in Sports, 21(4), 496–509. https://doi.org/10.1111/j.1600-0838.2011.01299.x
[4] Nordengen, S., Andersen, L. B., Solbraa, A. K., & Riiser, A. (2019). Cycling is associated with a lower incidence of cardiovascular diseases and death: Part 1 -Systematic review of cohort studies with meta-analysis. British Journal of Sports Medicine, 53(14), 870–878. https://doi.org/10.1136/bjsports-2018-099099
[5] Howard, K. A., Griffin, S. F., Rolke, L. J., et al. (2025). Exploration of individual and context features of a bicycle skills program for riding injury prevention knowledge and self-efficacy among children. Journal of Transport & Health, 43, 102050. https://doi.org/10.1016/j.jth.2025.102050
[6] Teyhan, A., Cornish, R., Boyd, A., Sissons Joshi, M., & Macleod, J. (2016). The impact of cycle proficiency training on cycle-related behaviours and accidents in adolescence: Findings from ALSPAC, a UK longitudinal cohort. BMC Public Health, 16, 469. https://doi.org/10.1186/s12889-016-3138-2
[7] Mertens, L., Compernolle, S., Deforche, B., et al. (2017). Longitudinal evaluation of travel and health outcomes in relation to new bicycle infrastructure, Sydney, Australia. Journal of Transport & Health, 6, 386–395. https://doi.org/10.1016/j.jth.2017.07.002
[8] Yang, L., Sahlqvist, S., McMinn, A., Griffin, S. J., & Ogilvie, D. (2010). Interventions to promote cycling: Systematic review. BMJ, 341, c5293. https://doi.org/10.1136/bmj.c5293
[9] Roaf, E., Larrington-Spencer, H., & Lawlor, E. R. (2024). Interventions to increase active travel: A systematic review. Journal of Transport & Health, 38, 101860. https://doi.org/10.1016/j.jth.2024.101860`,
                takeaways: [
                  'L\'infrastructure cyclable conjugue objectifs de santé publique et politiques de mobilité communales.',
                  'Les espaces dédiés comme les pump tracks et skills parks encouragent une activité physique quotidienne pour tous les âges.',
                  'Ces aménagements créent de véritables lieux de vie et répondent à des priorités citoyennes transversales.',
                ],
              },
              'sustainable-trail-drainage': {
                title: 'Drainage Durable des Sentiers : Prévenir l\'Érosion sur Surfaces Naturelles',
                excerpt: 'Techniques éprouvées d\'inversions de pente, de passages d\'eau et de stabilisation du sol pour des pistes praticables en toute saison.',
                content: 'L\'eau est le principal facteur de dégradation des sentiers naturels. La mise en place de dispositifs hydrologiques proactifs tels que le dévers, les inversions de pente tous les 10 à 15 mètres et les drains français garantit la pérennité des pistes même lors des hivers pluvieux.',
                takeaways: [
                  'Les inversions de pente évacuent l\'eau avant qu\'elle ne prenne une vitesse érosive.',
                  'Le profil en dévers répartit l\'écoulement laminaire sur la végétation aval.',
                  'La stabilisation minérale réduit l\'orniérage sans introduire de microplastiques.',
                ],
              },
              'european-safety-standards-din-en-14974': {
                title: 'Normes de Sécurité dans les Pistes Publiques : DIN EN 14974 & EN 1176 Décryptées',
                excerpt: 'Vue d\'ensemble des normes de sécurité européennes pour les parcs de glisse municipaux, zones de chute, dégagements et gestion des risques.',
                content: 'La conformité municipale et la responsabilité civile exigent le respect rigoureux des normes DIN EN 14974 et DIN EN 1176. La maîtrise des zones d\'impact, des lignes de vue et des raccords offre une sérénité totale de l\'appel d\'offres à la réception.',
                takeaways: [
                  'Les zones d\'impact doivent respecter un dégagement minimal de 2,0 mètres de tout obstacle rigide.',
                  'Les crêtes de virages exigent des raccords sécurisés vers le gazon ou les revêtements amortissants.',
                  'Une signalétique claire indiquant les niveaux de difficulté et le sens de circulation est obligatoire.',
                ],
              },
              'lifecycle-cost-maintenance-strategy': {
                title: 'Coûts de Cycle de Vie & Stratégie d\'Entretien : Valoriser l\'Investissement',
                excerpt: 'Comparaison des coûts globaux entre asphalte, gravier et terre. Bonnes pratiques de colmatage, fauchage et carnet d\'entretien.',
                content: 'Si les pump tracks en asphalte requièrent un investissement initial plus élevé, leur longévité de 15 à 20 ans et leurs faibles coûts d\'exploitation garantissent un retour sur investissement imbattable pour les collectivités.',
                takeaways: [
                  'L\'application d\'une émulsion bitumineuse aux années 5 et 10 restaure l\'élasticité et prévient l\'oxydation.',
                  'La coupe régulière des bordures empêche l\'enracinement dans l\'asphalte.',
                  'Le carnet d\'entretien numérique facilite le suivi des garanties par les services communaux.',
                ],
              },
              'community-driven-track-planning': {
                title: 'Planification Participative : Du Diagnostic Citoyen à l\'Inauguration',
                excerpt: 'Comment les ateliers avec les jeunes locaux, clubs et urbanistes garantissent une fréquentation maximale et le respect des lieux.',
                content: 'Les infrastructures les plus vivantes sont co-conçues avec les pratiquants qui les feront vivre. Impliquer les conseils de jeunes et les associations cyclistes dès la phase de faisabilité crée un sentiment d\'appartenance et prévient les incivilités.',
                takeaways: [
                  'Les ateliers de conception harmonisent les attentes des skateurs, riders BMX, trottinettistes et rollers.',
                  'Des concertations publiques transparentes facilitent les arbitrages municipaux et les demandes de subventions.',
                  'Des sessions de test avant l\'ouverture officielle créent un engouement fort et durable.',
                ],
              },
            },
          },
          contact: {
            title: 'Contactez-nous',
            subtitle: 'Vous avez une idée, une question ou souhaitez simplement en savoir plus ? Discutons-en.',
            info: 'Informations de Contact',
            phone: 'Téléphone',
            email: 'E-mail',
            office: 'Bureau',
            vat: 'TVA',
            hours: {
              title: 'Heures d\'Ouverture',
              monFri: 'Lundi - Vendredi',
              weekend: 'Week-end',
              hoursRange: '08:00 - 18:00',
              closed: 'Fermé',
            },
            form: {
              name: 'Nom *',
              namePlaceholder: 'Votre nom',
              email: 'E-mail *',
              emailPlaceholder: 'Votre e-mail',
              phone: 'Téléphone',
              phonePlaceholder: 'Votre numéro de téléphone',
              projectType: 'Type de Projet *',
              projectTypePlaceholder: 'Sélectionnez un type de projet',
              projectTypeInfo: 'Info',
              details: 'Détails du Projet *',
              detailsPlaceholder: 'Parlez-nous de votre projet, de son emplacement, de votre calendrier et de toute exigence spécifique...',
              submit: 'Envoyer le Message',
              success: 'Merci pour votre message ! Nous avons reçu votre demande et nous vous recontacterons bientôt à l\'adresse antonarnauts@a2trails.com.',
            },
          },
          services: {
            consultancy: {
              title: 'Recherche & Faisabilité',
              subtitle: 'Planification stratégique et expertise technique pour des infrastructures cyclables durables',
              feasibility: {
                title: 'Études de Faisabilité & d\'Impact',
                desc: 'Analyse complète du potentiel du site, de l\'impact environnemental et des besoins de la communauté pour assurer la viabilité du projet.',
                features: [
                  'Évaluation du potentiel du site',
                  'Analyse d\'impact environnemental',
                  'Enquêtes sur les besoins de la communauté',
                  'Évaluation des risques',
                  'Contrôle de conformité réglementaire',
                ],
              },
              engineering: {
                title: 'Ingénierie Technique',
                desc: 'Ingénierie de précision pour le drainage, la stabilité des sols et les caractéristiques techniques structurelles.',
                features: [
                  'Conception hydraulique & drainage',
                  'Analyse de la composition du sol',
                  'Ingénierie structurelle',
                  'Spécifications techniques',
                  'Stratégie d\'approvisionnement en matériaux',
                  'Audit des normes de sécurité',
                ],
              },
              strategic: {
                title: 'Planification Stratégique',
                desc: 'Planification directrice à long terme pour les réseaux de pistes et l\'intégration des parcs cyclables urbains.',
                features: [
                  'Développement du plan directeur',
                  'Stratégie de mise en œuvre progressive',
                  'Soutien aux subventions & financements',
                  'Planification de la maintenance',
                  'Conceptions tournées vers l\'avenir',
                ],
              },
              cta: {
                title: 'Conseils d\'Experts',
                subtitle: 'Besoin d\'un accompagnement technique pour votre projet ? Notre équipe d\'ingénierie est prête à vous aider à naviguer dans les complexités de la construction de pistes.',
                button: 'Consultez-nous',
              },
            },
            design: {
              title: 'Conception',
              subtitle: 'Des conceptions de pistes créatives et fonctionnelles qui maximisent le flow et l\'expérience du rider',
              micro: {
                title: 'Design Micro',
                desc: 'Conception de pistes spécifiques adaptées aux demandes locales et aux groupes d\'utilisateurs.',
                features: [
                  'Analyse de la demande locale',
                  'Mises en page spécifiques aux pistes',
                  'Ciblage des groupes d\'utilisateurs',
                  'Plans spécifiques aux fonctionnalités',
                  'Conception d\'obstacles techniques',
                  'Fonctionnalités basées sur la progression',
                ],
              },
              meso: {
                title: 'Design Méso',
                desc: 'Intégration harmonieuse de l\'infrastructure cyclable dans les parcs environnants, les zones de loisirs ou les complexes sportifs.',
                features: [
                  'Intégration parcs & zones sportives',
                  'Architecture de paysage',
                  'Synergie multi-usages',
                  'Accessibilité & flow',
                  'Intégration esthétique',
                  'Mélange environnemental',
                ],
              },
              macro: {
                title: 'Design Macro',
                desc: 'Planification stratégique à grande échelle pour les réseaux de loisirs et les centres de pistes afin d\'activer le tourisme régional.',
                features: [
                  'Planification de réseaux régionaux',
                  'Plans directeurs de centres de pistes',
                  'Stratégie d\'activation du tourisme',
                  'Planification de l\'impact économique',
                  'Durabilité à long terme',
                ],
              },
              cta: {
                title: 'Vision Créative',
                subtitle: 'Prêt à voir votre projet prendre forme ? Laissez nos designers créer une vision qui inspire votre communauté.',
                button: 'Commencer la Conception',
              },
            },
            construction: {
              title: 'Construction',
              subtitle: 'Construction de pistes professionnelle axée sur la durabilité, la sécurité et le flow',
              pumptracks: {
                title: 'Pumptracks',
                desc: 'Pumptracks en asphalte professionnels construits pour la durabilité et un flow parfait.',
                features: [
                  'Revêtement en asphalte',
                  'Géométrie parfaite',
                  'Durabilité par tous les temps',
                  'Faible entretien',
                  'Accessibilité multi-utilisateurs',
                  'Façonnage de précision',
                ],
              },
              mtbTrails: {
                title: 'Pistes de VTT',
                desc: 'Construction de pistes durables qui respectent l\'environnement naturel tout en offrant un maximum de plaisir.',
                features: [
                  'Mélange avec le terrain naturel',
                  'Drainage durable',
                  'Contrôle de l\'érosion',
                  'Caractéristiques techniques de la piste',
                  'Expertise en flow-trails',
                  'Protection de l\'environnement',
                ],
              },
              jumpTracks: {
                title: 'Pistes de Saut',
                desc: 'Lignes de saut techniques conçues pour la progression et le temps de vol.',
                features: [
                  'Façonnage de précision de la terre',
                  'Lignes basées sur la progression',
                  'Conception axée sur la sécurité',
                  'Géométrie de saut technique',
                  'Expertise en compactage',
                  'Mise au point & tests',
                ],
              },
              skillTracks: {
                title: 'Pistes de Maniabilité',
                desc: 'Pistes éducatives avec des obstacles techniques pour améliorer les compétences de conduite.',
                features: [
                  'Obstacles techniques',
                  'Caractéristiques d\'équilibre',
                  'Zones de progression',
                  'Environnement d\'apprentissage sûr',
                  'Structures en bois',
                  'Défis spécifiques aux compétences',
                ],
              },
              bmxTracks: {
                title: 'Pistes de BMX',
                desc: 'Pistes de course professionnelles et parcs freestyle conçus pour les athlètes BMX.',
                features: [
                  'Géométrie standard UCI',
                  'Intégration de grille de départ',
                  'Lignes de section pro',
                  'Sections rythmiques techniques',
                  'Virages en asphalte ou terre',
                  'Revêtement prêt pour la course',
                ],
              },
              eMotoTracks: {
                title: 'Pistes E-Moto',
                desc: 'Pistes spécialisées conçues pour le motocross électrique, axées sur la gestion de la puissance, la traction et la conception de pistes durables.',
                features: [
                  'Stabilisation durable des sols',
                  'Sections de montée techniques',
                  'Revêtement de piste ultra-résistant',
                ],
              },
              cta: {
                title: 'Construit Pour Durer',
                subtitle: 'Prêt à commencer les travaux ? Notre équipe de construction apporte des décennies d\'expérience à chaque réalisation.',
                button: 'Construisez Avec Nous',
              },
            },
            maintenance: {
              title: 'Entretien',
              subtitle: 'Préserver la qualité et la sécurité de vos infrastructures cyclables',
              asphalt: {
                title: 'Pump Tracks en Asphalte',
                desc: 'Entretien spécialisé des surfaces en asphalte pour garantir des performances durables et la sécurité des riders.',
                features: [
                  'Réparation de fissures',
                  'Réparation de l\'érosion',
                  'Lignes de sécurité',
                  'Inspections de sécurité',
                  'Réparation de surface',
                ],
              },
              gravelDirt: {
                title: 'Pistes en Gravier et Terre',
                desc: 'Maintenir les pistes à surface naturelle en excellent état grâce à un façonnage expert et une gestion de l\'érosion.',
                features: [
                  'Remodelage',
                  'Réparation de l\'érosion',
                  'Inspection et réparation des éléments',
                  'Signalisation et Panneaux d\'Information',
                  'Entretien Vert',
                ],
              },
              green: {
                title: 'Entretien Vert',
                desc: 'Gestion écologique des abords pour préserver la visibilité et l\'esthétique naturelle.',
                features: [
                  'Contrôle de la végétation',
                  'Taille de la croissance excessive',
                  'Gestion des espèces envahissantes',
                  'Accessibilité des pistes',
                ],
              },
              cta: {
                title: 'Protégez Votre Investissement',
                subtitle: 'Un entretien régulier prolonge la durée de vie de votre infrastructure et assure une sécurité maximale aux utilisateurs.',
                button: 'Planifier un Entretien',
              },
            },
          },
          privacy: {
            title: "Politique de Confidentialité : A2Trails",
            lastUpdated: "Dernière mise à jour : 12 mars 2026",
            controller: {
              title: "1. Responsable du traitement",
              text: "L'entité responsable du traitement de vos données personnelles est :",
              company: "Nom de l'entreprise",
              office: "Siège social",
              cbe: "Numéro BCE",
              email: "E-mail de contact"
            },
            legalBasis: {
              title: "2. Base juridique du traitement",
              text: "Nous ne traitons les données personnelles que lorsqu'une base juridique valide existe en vertu de l'article 6(1) du RGPD :",
              contractual: "Nécessité contractuelle : Pour fournir des devis pour la conception, la construction ou l'entretien de pistes de VTT.",
              legal: "Obligation légale : Pour les déclarations de sécurité sociale obligatoires (ex. Check-in-at-work / déclaration 30bis) ou les rapports fiscaux.",
              consent: "Consentement : Lorsque vous vous abonnez à notre newsletter ou utilisez des cookies non essentiels.",
              legitimate: "Intérêt légitime : Pour assurer la sécurité de notre site web et pour communiquer avec des partenaires B2B."
            },
            categories: {
              title: "3. Catégories de données collectées",
              text: "Nous collectons et traitons les catégories de données suivantes :",
              identification: "Données d'identification : Nom, adresse, numéro de téléphone et e-mail.",
              professional: "Données professionnelles : Nom de l'entreprise, numéro de TVA et emplacement du projet (coordonnées GPS pour les sites de pistes).",
              technical: "Données techniques : Adresse IP, type de navigateur et durée de la visite (via cookies)."
            },
            retention: {
              title: "4. Périodes de conservation",
              text: "Les données ne sont pas conservées plus longtemps que nécessaire aux fins pour lesquelles elles ont été collectées :",
              accounting: "Données comptables/fiscales : Strictement 7 ans (exigence légale belge).",
              contractual: "Documents contractuels : 10 ans après la fin du contrat (pour couvrir la responsabilité décennale des travaux de construction en vertu des articles 1792 et 2270 du Code civil).",
              requests: "Demandes de contact : 1 an si aucun contrat n'est conclu."
            },
            sharing: {
              title: "5. Partage et transferts de données",
              text: "Les données peuvent être partagées avec :",
              subcontractors: "Sous-traitants : Terrassiers ou écologistes spécialisés, strictement sous un accord de traitement des données (DPA) signé.",
              authorities: "Autorités publiques : ONSS pour l'enregistrement obligatoire des présences sur les chantiers de construction.",
              it: "Prestataires informatiques : Services d'hébergement et de cloud situés au sein de l'EEE."
            },
            rights: {
              title: "6. Droits de la personne concernée",
              text: "En vertu de la législation belge et européenne, vous possédez les droits suivants, que nous honorerons dans les 30 jours suivant une demande :",
              access: "Droit d'accès : Pour savoir quelles données nous détenons.",
              rectification: "Droit de rectification : Pour corriger des données inexactes.",
              erasure: "Droit à l'effacement (\"Droit à l'oubli\") : Sous réserve des obligations légales de conservation.",
              restriction: "Droit à la limitation : Pour suspendre temporairement le traitement.",
              portability: "Droit à la portabilité des données : Pour recevoir vos données dans un format structuré et lisible par machine."
            },
            security: {
              title: "7. Mesures de sécurité",
              text: "Nous mettons en œuvre des mesures techniques et organisationnelles (cryptage, pare-feu, contrôles d'accès) pour protéger les données contre tout accès non autorisé, perte ou destruction. Les données des projets sur site sont limitées au personnel sur la base du \"besoin d'en connaître\"."
            },
            complaints: {
              title: "8. Plaintes",
              text: "Si vous estimez que vos données sont mal traitées, vous avez le droit de déposer une plainte auprès de l'Autorité de protection des données (APD) belge :",
              authority: "Autorité de protection des données"
            }
          },
          terms: {
            title: "Conditions Générales de Service : A2Trails",
            partnership: {
              title: "1. Notre Partenariat",
              text: "Ces Conditions Générales de Service (les \"Conditions\") définissent la relation professionnelle entre A2Trails (la \"Société\") et le Client. Nous construisons avec passion et précision ; ces conditions garantissent que la qualité et l'intégrité de notre travail sont préservées sur le long terme."
            },
            intellectualProperty: {
              title: "2. Propriété Intellectuelle et Intégrité de la Conception",
              text: "Nos conceptions de pistes sont le résultat d'une ingénierie spécialisée et d'une vision créative. En vertu du livre XI du Code de droit économique belge, ces conceptions sont des œuvres protégées par le droit d'auteur.",
              authorizedUse: "Utilisation autorisée : Le Client se voit accorder une licence exclusive pour utiliser et profiter de la piste à l'endroit convenu.",
              protection: "Protection de l'œuvre : Pour maintenir la sécurité et l'« ADN » de nos constructions, le Client accepte de ne pas reproduire, copier ou permettre à des tiers d'imiter nos caractéristiques techniques ou nos agencements ailleurs sans notre consentement écrit.",
              modifications: "Modifications : Parce que notre nom est attaché à la réputation du projet, tout changement structurel important apporté à la piste doit être discuté avec nous au préalable afin de garantir le respect des « droits moraux » et des normes de sécurité de la conception originale."
            },
            warranty: {
              title: "3. Garantie et Entretien",
              text: "Nous garantissons la qualité de nos constructions. Notre structure de garantie est la suivante :",
              limited: "Garantie limitée de 3 ans : La Société offre une garantie de trois ans contre les défauts de fabrication et les composants non structurels (par exemple, des problèmes de revêtement spécifiques ou des ajustements mineurs de drainage), à condition que la piste soit entretenue conformément à notre manuel d'entretien fourni.",
              structural: "Intégrité structurelle : Conformément aux articles 1792 et 2270 du Code civil belge, la responsabilité pour la stabilité fondamentale des travaux de terrassement et des structures importants reste de 10 ans selon la loi.",
              exclusions: "Exclusions : Cette garantie ne couvre pas les dommages causés par des catastrophes naturelles (force majeure), le manque d'entretien de routine ou les modifications « DIY » non autorisées par le Client."
            },
            ownership: {
              title: "4. Propriété et Paiement",
              retention: "Réserve de propriété : Conformément à la loi du 11 juillet 2013, tous les matériaux et l'œuvre finie restent la propriété légale de la Société jusqu'au règlement intégral de la facture finale.",
              payment: "Conditions de paiement : Nous apprécions les paiements en temps voulu. Les retards de paiement entraîneront des intérêts au taux légal pour les transactions commerciales, plus des frais de recouvrement standard comme le permet la loi belge."
            },
            confidentiality: {
              title: "5. Confidentialité",
              text: "Pendant la construction, nous pouvons partager des « secrets de construction de pistes » exclusifs ou des techniques de drainage spécialisées. Le Client accepte de traiter ces informations techniques comme confidentielles et ne partagera pas de plans ou de méthodologies de construction avec des entreprises concurrentes.",
            },
            dispute: {
              title: "6. Résolution des Litiges",
              text: "Nous préférons une poignée de main à une salle d'audience. En cas de problème, les deux parties acceptent de tenter une médiation formelle. Si une résolution ne peut être trouvée, les tribunaux du siège social de la Société en Belgique seront exclusivement compétents."
            }
          },
        },
      },
    },
  });

export default i18n;
