import React, { useState } from 'react';
import { PageType, ContactFormData } from '../types';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Compass, 
  Layers, 
  Sun, 
  Trees, 
  Building2, 
  MapPin, 
  CheckCircle, 
  AlertCircle,
  Send,
  Mail,
  Calendar,
  Sparkles,
  Clock,
  Hash
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { getLocalizedProjects } from '../data/projects';
import { getAssetPath } from '../../lib/utils';
import { useForm } from '@formspree/react';

interface HomePageProps {
  onNavigate?: (page: PageType) => void;
}

const BRUSSELS_COMMUNES = [
  { value: 'Anderlecht', en: 'Anderlecht', nl: 'Anderlecht', fr: 'Anderlecht' },
  { value: 'Auderghem', en: 'Auderghem / Oudergem', nl: 'Oudergem', fr: 'Auderghem' },
  { value: 'Berchem-Sainte-Agathe', en: 'Berchem-Sainte-Agathe / Sint-Agatha-Berchem', nl: 'Sint-Agatha-Berchem', fr: 'Berchem-Sainte-Agathe' },
  { value: 'Brussels City', en: 'Brussels City / Stad Brussel', nl: 'Stad Brussel', fr: 'Ville de Bruxelles' },
  { value: 'Etterbeek', en: 'Etterbeek', nl: 'Etterbeek', fr: 'Etterbeek' },
  { value: 'Evere', en: 'Evere', nl: 'Evere', fr: 'Evere' },
  { value: 'Forest', en: 'Forest / Vorst', nl: 'Vorst', fr: 'Forest' },
  { value: 'Ganshoren', en: 'Ganshoren', nl: 'Ganshoren', fr: 'Ganshoren' },
  { value: 'Ixelles', en: 'Ixelles / Elsene', nl: 'Elsene', fr: 'Ixelles' },
  { value: 'Jette', en: 'Jette', nl: 'Jette', fr: 'Jette' },
  { value: 'Koekelberg', en: 'Koekelberg', nl: 'Koekelberg', fr: 'Koekelberg' },
  { value: 'Molenbeek-Saint-Jean', en: 'Molenbeek-Saint-Jean / Sint-Jans-Molenbeek', nl: 'Sint-Jans-Molenbeek', fr: 'Molenbeek-Saint-Jean' },
  { value: 'Saint-Gilles', en: 'Saint-Gilles / Sint-Gillis', nl: 'Sint-Gillis', fr: 'Saint-Gilles' },
  { value: 'Saint-Josse-ten-Noode', en: 'Saint-Josse-ten-Noode / Sint-Joost-ten-Node', nl: 'Sint-Joost-ten-Node', fr: 'Saint-Josse-ten-Noode' },
  { value: 'Schaerbeek', en: 'Schaerbeek / Schaarbeek', nl: 'Schaarbeek', fr: 'Schaerbeek' },
  { value: 'Uccle', en: 'Uccle / Ukkel', nl: 'Ukkel', fr: 'Uccle' },
  { value: 'Watermael-Boitsfort', en: 'Watermael-Boitsfort / Watermaal-Bosvoorde', nl: 'Watermaal-Bosvoorde', fr: 'Watermael-Boitsfort' },
  { value: 'Woluwe-Saint-Lambert', en: 'Woluwe-Saint-Lambert / Sint-Lambrechts-Woluwe', nl: 'Sint-Lambrechts-Woluwe', fr: 'Woluwe-Saint-Lambert' },
  { value: 'Woluwe-Saint-Pierre', en: 'Woluwe-Saint-Pierre / Sint-Pieters-Woluwe', nl: 'Sint-Pieters-Woluwe', fr: 'Woluwe-Saint-Pierre' },
];

export const HomePage: React.FC<HomePageProps> = () => {
  const { currentLanguage, t } = useLanguage();
  const [formspreeState, handleFormspreeSubmit] = useForm('meaaqwrg');
  const localizedProjects = getLocalizedProjects(currentLanguage);

  // Contact form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'city_garden',
    location: 'Ixelles',
    area: '',
    budget: '€15,000 - €30,000',
    timeline: 'Flexible',
    message: '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.name.trim()) {
      setFormError(t.contactSection.errorName);
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError(t.contactSection.errorEmail);
      return;
    }
    if (!formData.message.trim()) {
      setFormError(t.contactSection.errorMessage);
      return;
    }

    await handleFormspreeSubmit(e);
  };

  const directMailtoUrl = `mailto:antonarnauts@a2trails.com?subject=${encodeURIComponent(
    `[A2Gardens] ${formData.name} - ${formData.projectType.toUpperCase()} (${formData.location})`
  )}&body=${encodeURIComponent(
    `Anton,\n\nNaam / Name: ${formData.name}\nE-mail: ${formData.email}\nTel: ${formData.phone}\nType: ${formData.projectType}\nGemeente / Commune: ${formData.location}\nOppervlakte / Area: ${formData.area}\n\nBericht / Details:\n${formData.message}\n`
  )}`;

  // 4 Solutions Tailored to You
  const outdoorSolutions = [
    {
      id: 'city-gardens',
      icon: <Sun className="h-10 w-10 text-[#10b981]" />,
      title: t.sectors.s1Title,
      tagline: t.sectors.s1Tagline,
      desc: t.sectors.s1Desc,
    },
    {
      id: 'balconies',
      icon: <Compass className="h-10 w-10 text-[#10b981]" />,
      title: t.sectors.s2Title,
      tagline: t.sectors.s2Tagline,
      desc: t.sectors.s2Desc,
    },
    {
      id: 'rooftop-gardens',
      icon: <Building2 className="h-10 w-10 text-[#10b981]" />,
      title: t.sectors.s3Title,
      tagline: t.sectors.s3Tagline,
      desc: t.sectors.s3Desc,
    },
    {
      id: 'driveways-stone-terraces',
      icon: <Layers className="h-10 w-10 text-[#10b981]" />,
      title: t.sectors.s4Title,
      tagline: t.sectors.s4Tagline,
      desc: t.sectors.s4Desc,
    },
  ];

  // 4 Methodology Steps
  const methodologySteps = [
    {
      title: t.methodology.m1Title,
      description: t.methodology.m1Desc,
      icon: <Calendar className="h-10 w-10 text-[#10b981]" />,
    },
    {
      title: t.methodology.m2Title,
      description: t.methodology.m2Desc,
      icon: <Compass className="h-10 w-10 text-[#10b981]" />,
    },
    {
      title: t.methodology.m3Title,
      description: t.methodology.m3Desc,
      icon: <Layers className="h-10 w-10 text-[#10b981]" />,
    },
    {
      title: t.methodology.m4Title,
      description: t.methodology.m4Desc,
      icon: <Trees className="h-10 w-10 text-[#10b981]" />,
    },
  ];

  return (
    <div className="bg-[#0a0e0b] text-[#dce6df]">
      {/* =========================================================================
          SECTION 1: HERO
         ========================================================================= */}
      <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-44 md:pb-32 min-h-[580px] sm:min-h-[660px]">
        {/* Full-bleed photography background */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#070b08]">
          <img
            src={getAssetPath('a2gardens/images/hero-architectural-garden.jpg')}
            alt={t.hero.badge}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 brightness-95"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#0a0e0b] backdrop-brightness-95" />
        </div>

        {/* Centered Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight font-display whitespace-pre-line">
            {t.hero.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Action buttons with increased top spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-30 pt-10 sm:pt-12 md:pt-14">
            <button
              id="hero-primary-cta"
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto bg-[#10b981] hover:bg-[#10b981]/90 text-[#061e12] px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all group shadow-lg shadow-[#10b981]/25 active:scale-95 cursor-pointer"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={() => scrollTo('services')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-7 py-3.5 rounded-lg font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all border border-white/10 active:scale-95 cursor-pointer"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SERVICES & OUTDOOR SPACES (ID="SERVICES")
         ========================================================================= */}
      <section id="services" className="py-20 sm:py-24 bg-[#0a0e0c]/60 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {outdoorSolutions.map((solution) => (
              <div
                key={solution.id}
                onClick={() => scrollTo('contact')}
                className="bg-[#0f1712] rounded-2xl border border-white/5 p-8 sm:p-10 flex flex-col justify-start hover:border-[#10b981]/40 hover:bg-[#131f18] transition-all group cursor-pointer"
              >
                <div className="mb-6 group-hover:scale-105 transition-transform">
                  {solution.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white font-display">
                  {solution.title}
                </h3>
                <p className="text-[#10b981] font-semibold mb-3 leading-snug text-xs sm:text-sm">
                  {solution.tagline}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR ARCHITECTURAL JOURNEY (ID="METHODOLOGY")
         ========================================================================= */}
      <section id="methodology" className="py-20 sm:py-24 bg-[#080c09] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white font-display">
              {t.methodology.title}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              {t.methodology.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0f1712] rounded-2xl border border-white/5 hover:border-[#10b981]/30 transition-all group overflow-hidden flex flex-col justify-between p-8 sm:p-10 h-full"
              >
                <div>
                  <div className="mb-6 group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white font-display">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-xs sm:text-sm">
                    {step.description}
                  </p>
                </div>

                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center text-[#10b981] font-bold group-hover:underline gap-2 mt-auto text-xs uppercase tracking-wider cursor-pointer"
                >
                  <span>{t.methodology.learnMore}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: BEFORE & AFTER PROJECTS (ID="PROJECTS")
         ========================================================================= */}
      <section id="projects" className="py-20 sm:py-28 bg-[#0a0e0b] relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102418] border border-[#1d402b] text-[#34d399] text-xs font-mono uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.spotlight.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
              {t.spotlight.title}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              {t.spotlight.subtitle}
            </p>
          </div>

          {/* 4 Projects Grid with Interactive Sliders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {localizedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#0c140f] rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-[#10b981]/30 transition-all shadow-xl"
              >
                {/* The Interactive Slider with Before always on Left */}
                <div className="p-4 sm:p-6 pb-2">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    beforeLabel={t.spotlight.beforeLabel}
                    afterLabel={t.spotlight.afterLabel}
                    beforeAlt={`${t.spotlight.beforeLabel}: ${project.title} – ${project.location} (A2Gardens)`}
                    afterAlt={`${t.spotlight.afterLabel}: ${project.title} – ${project.location} (A2Gardens)`}
                    aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
                    beforeObjectPosition={project.beforeObjectPosition}
                    afterObjectPosition={project.afterObjectPosition}
                  />
                </div>

                {/* Project Description & Details */}
                <div className="p-6 sm:p-8 pt-4 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Materials & Features Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.materials.map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ABOUT ANTON ARNAUTS (ID="ABOUT")
         ========================================================================= */}
      <section id="about" className="py-20 sm:py-28 bg-[#080c09] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b100d] border border-white/5 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Founder Avatar & Details */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <img
                  src={getAssetPath('a2gardens/images/logoa2gardernspng.png')}
                  alt="Anton Arnauts - A2Gardens"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-contain bg-black border border-[#10b981]/40 p-1.5 shadow-xl"
                />
                <div>
                  <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                    Anton Arnauts
                  </h3>
                  <p className="text-sm text-[#10b981] font-medium mt-1">
                    {t.aboutSection.role}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono mt-1">
                    <span className="text-[#789182]">A2Gardens</span>
                    <span className="text-gray-600">&bull;</span>
                    <a
                      href="https://a2trails.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white hover:underline transition-colors"
                    >
                      A2trails.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="md:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102418] border border-[#1d402b] text-[#34d399] text-xs font-mono uppercase">
                  <span>{t.aboutSection.tag}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-snug">
                  {t.aboutSection.title}
                </h2>

                <p className="text-sm sm:text-base text-[#a2b8aa] leading-relaxed">
                  {t.aboutSection.intro}
                </p>

                <div className="space-y-2 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                    {t.aboutSection.missionTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#a2b8aa] leading-relaxed">
                    {t.aboutSection.missionP1}
                  </p>
                  <p className="text-sm sm:text-base text-[#a2b8aa] leading-relaxed">
                    {t.aboutSection.missionP2}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight">
                    {t.aboutSection.dreamTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#a2b8aa] leading-relaxed">
                    {t.aboutSection.dreamP1}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#10b981] text-black font-semibold text-sm hover:bg-[#059669] transition-all cursor-pointer group shadow-lg hover:shadow-[#10b981]/20 active:scale-95"
                  >
                    <span>{t.aboutSection.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CTA BANNER
         ========================================================================= */}
      <section id="cta-banner" className="py-12 sm:py-14 bg-[#10b981] relative overflow-hidden">
        {/* Subtle dot relief texture */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#061e12] font-display tracking-tight">
            {t.ctaBanner.title}
          </h2>

          <button
            onClick={() => scrollTo('contact')}
            className="bg-[#061e12] hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2.5 transition-all group shrink-0 shadow-xl shadow-black/20 active:scale-95 cursor-pointer"
          >
            <span>{t.ctaBanner.button}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-[#10b981]" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CONSULTATION & CONTACT (ID="CONTACT")
         ========================================================================= */}
      <section id="contact" className="py-20 sm:py-24 bg-[#070b08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102418] border border-[#1d402b] text-[#34d399] text-xs font-mono uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.contactSection.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
              {t.contactSection.title}
            </h2>
            <p className="text-base text-[#9cb2a3] leading-relaxed">
              {t.contactSection.subtitlePrefix}
              <strong className="text-[#10b981] font-medium">Anton Arnauts</strong>
              {t.contactSection.subtitleMid}
              <strong className="text-white">antonarnauts@a2trails.com</strong>.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* LEFT COLUMN: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#0b100d] border border-[#1b3022] rounded-2xl p-6 sm:p-8 shadow-2xl">
              {formspreeState.succeeded ? (
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-6 rounded-xl bg-[#0d2116] border border-[#1b4b2e] space-y-3">
                    <div className="flex items-center gap-3 text-[#10b981]">
                      <CheckCircle className="w-8 h-8 shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-white font-display">
                          {t.contactSection.successTitle}
                        </h3>
                        <p className="text-xs text-[#95cbab]">
                          {t.contactSection.successSubPrefix}
                          {formData.name || t.contactSection.successSubDefaultClient}
                          {t.contactSection.successSubSuffix}
                        </p>
                      </div>
                    </div>

                    <div className="divide-y divide-[#183925] border-t border-[#183925] pt-3 mt-3 text-xs space-y-2">
                      <div className="flex justify-between items-center text-[#a1c4af] pt-2">
                        <span className="text-[#6d967e]">{t.contactSection.recipientLabel}</span>
                        <span className="font-mono text-[#10b981] font-semibold">antonarnauts@a2trails.com</span>
                      </div>
                      <div className="flex justify-between items-center text-[#a1c4af] pt-2">
                        <span className="text-[#6d967e]">{t.contactSection.channelLabel}</span>
                        <span className="font-mono text-white">Formspree (meaaqwrg)</span>
                      </div>
                      <div className="flex justify-between items-center text-[#a1c4af] pt-2">
                        <span className="text-[#6d967e]">{t.contactSection.reviewLabel}</span>
                        <span className="text-white font-medium">{t.contactSection.reviewTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#0e1611] p-5 rounded-xl border border-[#1a2d21] space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#82998a]">
                      {t.contactSection.nextStepsTitle}
                    </h4>
                    <ol className="text-xs text-[#9eb4a6] space-y-2 list-decimal list-inside leading-relaxed">
                      <li>{t.contactSection.step1}</li>
                      <li>{t.contactSection.step2}</li>
                      <li>{t.contactSection.step3}</li>
                    </ol>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={directMailtoUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#122419] border border-[#1f4a30] text-[#10b981] hover:text-white hover:bg-[#1a3826] transition-all text-xs font-semibold"
                    >
                      <span>{t.contactSection.openEmailApp}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => {
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          projectType: 'terrace',
                          location: 'Ixelles',
                          area: '',
                          budget: '€15,000 - €30,000',
                          timeline: 'Flexible',
                          message: '',
                        });
                        window.location.reload();
                      }}
                      className="py-3 px-5 rounded-lg bg-[#1b2b21] hover:bg-[#253d2f] text-white transition-colors text-xs font-semibold cursor-pointer"
                    >
                      {t.contactSection.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                  {formError && (
                    <div className="p-3.5 rounded-lg bg-red-950/50 border border-red-800/80 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-[#c4d7cc] mb-1.5">
                        {t.contactSection.nameLabel}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder={t.contactSection.namePlaceholder}
                        className="w-full bg-[#111913] border border-[#1d3525] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-[#c4d7cc] mb-1.5">
                        {t.contactSection.emailLabel}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder={t.contactSection.emailPlaceholder}
                        className="w-full bg-[#111913] border border-[#1d3525] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-[#c4d7cc] mb-1.5">
                        {t.contactSection.phoneLabel}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder={t.contactSection.phonePlaceholder}
                        className="w-full bg-[#111913] border border-[#1d3525] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-space" className="block text-xs font-medium text-[#c4d7cc] mb-1.5">
                        {t.contactSection.spaceTypeLabel}
                      </label>
                      <select
                        id="contact-space"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleFormChange}
                        className="w-full bg-[#111913] border border-[#1d3525] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-colors cursor-pointer"
                      >
                        <option value="city_garden">{t.contactSection.spaceTypes.city_garden}</option>
                        <option value="balcony">{t.contactSection.spaceTypes.balcony}</option>
                        <option value="rooftop">{t.contactSection.spaceTypes.rooftop}</option>
                        <option value="terrace">{t.contactSection.spaceTypes.terrace}</option>
                        <option value="villa_garden">{t.contactSection.spaceTypes.villa_garden}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-location" className="block text-xs font-medium text-[#c4d7cc] mb-1.5">
                        {t.contactSection.communeLabel}
                      </label>
                      <select
                        id="contact-location"
                        name="location"
                        value={formData.location}
                        onChange={handleFormChange}
                        className="w-full bg-[#111913] border border-[#1d3525] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] rounded-lg px-3.5 py-2.5 text-sm text-white outline-none transition-colors cursor-pointer"
                      >
                        {BRUSSELS_COMMUNES.map((commune) => (
                          <option key={commune.value} value={commune.value}>
                            {commune[currentLanguage] || commune.en}
                          </option>
                        ))}
                        <option value="Other">{t.contactSection.otherCommune}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-area" className="block text-xs font-medium text-[#c4d7cc] mb-1.5">
                        {t.contactSection.areaLabel}
                      </label>
                      <input
                        id="contact-area"
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleFormChange}
                        placeholder={t.contactSection.areaPlaceholder}
                        className="w-full bg-[#111913] border border-[#1d3525] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-[#c4d7cc] mb-1.5">
                      {t.contactSection.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder={t.contactSection.messagePlaceholder}
                      className="w-full bg-[#111913] border border-[#1d3525] focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] rounded-lg p-3 text-sm text-white placeholder-gray-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formspreeState.submitting}
                      className="w-full py-4 px-6 rounded-xl bg-[#10b981] hover:bg-[#10b981]/90 text-[#061e12] font-bold text-sm tracking-wide uppercase transition-all shadow-lg shadow-[#10b981]/25 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60 cursor-pointer"
                    >
                      {formspreeState.submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#061e12] border-t-transparent rounded-full animate-spin" />
                          <span>{t.contactSection.submitting}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.contactSection.submitButton}</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-[#789382] mt-2 font-mono">
                      {t.contactSection.directNote}
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Direct Studio Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0f1712] rounded-2xl border border-white/5 p-8 space-y-6">
                <h3 className="text-xl font-bold text-white font-display">
                  {t.contactSection.detailsTitle}
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-gray-400 block mb-0.5">{t.contactSection.emailTitle}</span>
                      <a
                        href="mailto:antonarnauts@a2trails.com"
                        className="text-white hover:text-[#10b981] font-mono text-sm transition-colors"
                      >
                        antonarnauts@a2trails.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-gray-400 block mb-0.5">{t.contactSection.officeTitle}</span>
                      <span className="text-white leading-relaxed">
                        {t.contactSection.officeAddress}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Hash className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-gray-400 block mb-0.5">{t.contactSection.vatTitle}</span>
                      <span className="text-white font-mono">
                        BE1024.359.194
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="bg-[#0f1712] rounded-2xl border border-white/5 p-8 space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <Clock className="w-4 h-4 text-[#10b981]" />
                  <span>{t.contactSection.hoursTitle}</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center text-gray-300">
                    <span className="text-gray-400">{t.contactSection.hoursLabel}</span>
                    <span className="font-mono text-white font-semibold">08:00 – 20:00</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 text-xs text-gray-400 leading-relaxed">
                  {t.contactSection.auditsNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
