import { motion, AnimatePresence } from "motion/react";
import { Mountain, Waves, Target, ArrowRight, Menu, X, ClipboardList, DraftingCompass, HardHat, ChevronDown, Linkedin, Instagram, Mail, Phone, FileText, Zap, Bike, ShieldCheck, Wrench, Settings, Landmark, Tent, Ruler, Globe, Check, Play, Pause, RotateCcw } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import SEO from "./components/SEO";
import InsightsCarousel from "./components/InsightsCarousel";
import { getAssetPath } from './lib/utils';
import { getLanguageFromPath, getLocalizedPath, stripLanguagePrefix, isSupportedLanguage, SupportedLanguage } from './lib/i18nRouting';
import {
  detectAndStoreDeviceInfo,
  fetchAndStoreRegionInfo,
  getStoredRegionInfo,
  getStoredManualPreference,
  setManualLanguagePreference,
  resolveSmartHybridLanguage,
} from './lib/geoLanguage';
import { trackShieldedPageView, isLikelyBot } from "./lib/botProtection";

// Pages
import Consultancy from "./pages/Consultancy";
import Design from "./pages/Design";
import Construction from "./pages/Construction";
import Maintenance from "./pages/Maintenance";
import Projects from "./pages/Projects";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    trackShieldedPageView(pathname + (hash || ''));
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const timer = setTimeout(() => {
          scrollToElement();
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash]);

  return null;
};

const LanguageRouteSync = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    // 1. Detect and store device info locally (-device)
    const deviceInfo = detectAndStoreDeviceInfo();

    // 2. Fetch and store region info from IP locally (-region)
    fetchAndStoreRegionInfo().then((regionInfo) => {
      // If user is currently on an un-prefixed route and has no manual preference,
      // verify if the freshly retrieved region updates the hybrid language resolution
      const currentLangPrefix = getLanguageFromPath(pathname);
      const manualPref = getStoredManualPreference();
      if (!currentLangPrefix && !manualPref && !isLikelyBot()) {
        const hybrid = resolveSmartHybridLanguage(deviceInfo, regionInfo);
        const currentClean = stripLanguagePrefix(pathname);
        const targetPath = getLocalizedPath(currentClean, hybrid.language) + (search || '') + (window.location.hash || '');
        navigate(targetPath, { replace: true });
        if (i18n.language !== hybrid.language) {
          i18n.changeLanguage(hybrid.language);
        }
      }
    });

    const langFromPath = getLanguageFromPath(pathname);
    const searchParams = new URLSearchParams(search);
    const langFromQuery = searchParams.get('lang');

    if (langFromPath) {
      // Path already has a language code (e.g. /nl/projects, /fr, /en)
      if (i18n.language !== langFromPath) {
        i18n.changeLanguage(langFromPath);
      }
    } else if (isSupportedLanguage(langFromQuery)) {
      // Explicit query parameter ?lang=...
      const currentClean = stripLanguagePrefix(pathname);
      setManualLanguagePreference(langFromQuery);
      const targetPath = getLocalizedPath(currentClean, langFromQuery) + (window.location.hash || '');
      navigate(targetPath, { replace: true });
      if (i18n.language !== langFromQuery) {
        i18n.changeLanguage(langFromQuery);
      }
    } else {
      // Un-prefixed route (e.g., '/' or '/projects' or '/services/construction')
      // Immediately resolve via Smart Hybrid (manual preference -> cached region + device)
      if (!isLikelyBot()) {
        const cachedRegion = getStoredRegionInfo();
        const hybrid = resolveSmartHybridLanguage(deviceInfo, cachedRegion);
        const currentClean = stripLanguagePrefix(pathname);
        const targetPath = getLocalizedPath(currentClean, hybrid.language) + (search || '') + (window.location.hash || '');
        navigate(targetPath, { replace: true });
        if (i18n.language !== hybrid.language) {
          i18n.changeLanguage(hybrid.language);
        }
      }
    }
  }, [pathname, search, i18n, navigate]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const currentCleanPath = stripLanguagePrefix(location.pathname);

  const constructionProducts = [
    { title: t('services.construction.pumptracks.title'), href: "/services/construction#pumptracks" },
    { title: t('services.construction.skillTracks.title'), href: "/services/construction#skill-tracks" },
    { title: t('services.construction.mtbTrails.title'), href: "/services/construction#mtb-trails" },
    { title: t('services.construction.jumpTracks.title'), href: "/services/construction#jump-tracks" },
    { title: t('services.construction.bmxTracks.title'), href: "/services/construction#bmx-tracks" },
    { title: t('services.construction.eMotoTracks.title'), href: "/services/construction#e-moto-tracks" },
  ];

  const services = [
    { title: t('nav.consultancy'), href: "/services/consultancy" },
    { title: t('nav.design'), href: "/services/design" },
    { title: t('nav.construction'), href: "/services/construction" },
    { title: t('nav.maintenance'), href: "/services/maintenance" },
  ];

  const changeLanguage = (lng: string) => {
    if (isSupportedLanguage(lng)) {
      setManualLanguagePreference(lng);
    }
    i18n.changeLanguage(lng);
    const newPath = getLocalizedPath(currentCleanPath, lng) + location.search + location.hash;
    navigate(newPath);
  };

  const LanguageDropdown = ({ className = "" }: { className?: string }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
      { code: 'en', short: 'EN' },
      { code: 'nl', short: 'NL' },
      { code: 'fr', short: 'FR' },
    ];

    const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsDropdownOpen(false);
        }
      };

      if (isDropdownOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [isDropdownOpen]);

    const selectLanguage = (code: string) => {
      changeLanguage(code);
      setIsDropdownOpen(false);
    };

    return (
      <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
        <button
          type="button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 hover:border-brand-orange/40 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-orange"
          aria-expanded={isDropdownOpen}
          aria-haspopup="listbox"
          aria-label="Select language"
        >
          <Globe className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
          <span className="tracking-wide">{currentLang.short}</span>
          <ChevronDown
            className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180 text-brand-orange' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute right-0 mt-2 w-24 rounded-xl bg-brand-card/95 backdrop-blur-md border border-white/10 shadow-2xl p-1 z-50 overflow-hidden"
              role="listbox"
              aria-label="Languages"
            >
              {languages.map((lang) => {
                const isSelected = i18n.language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => selectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors text-left cursor-pointer ${
                      isSelected
                        ? 'bg-brand-orange text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span>{lang.short}</span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 flex-shrink-0 text-white" />
                    )}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to={getLocalizedPath('/', i18n.language)} className="flex items-center">
              <img 
                src={getAssetPath('images/logo.webp')} 
                alt="A2Trails - Sustainable Mountain Bike Trail Building Logo" 
                className="h-[60px] w-auto" 
              />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-center space-x-8">
              <Link to={getLocalizedPath('/', i18n.language)} className={`${currentCleanPath === '/' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>{t('nav.home')}</Link>
              
              {/* Products Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <Link
                  to={getLocalizedPath('/services/construction', i18n.language)}
                  className={`flex items-center gap-1 ${currentCleanPath === '/services/construction' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}
                >
                  {t('nav.products')} <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </Link>
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-0 w-64 bg-brand-card border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2 z-50"
                    >
                      {constructionProducts.map((product) => (
                        <Link
                          key={product.href}
                          to={getLocalizedPath(product.href, i18n.language)}
                          onClick={() => setIsProductsOpen(false)}
                          className="block px-6 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-brand-orange transition-all"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 ${currentCleanPath.startsWith('/services') && currentCleanPath !== '/services/construction' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>
                  {t('nav.services')} <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-0 w-64 bg-brand-card border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2 z-50"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={getLocalizedPath(service.href, i18n.language)}
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-6 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-brand-orange transition-all"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to={getLocalizedPath('/projects', i18n.language)} className={`${currentCleanPath === '/projects' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>{t('nav.projects')}</Link>
              <Link to={getLocalizedPath('/insights', i18n.language)} className={`${currentCleanPath === '/insights' || currentCleanPath.startsWith('/insights/') ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>{t('nav.insights')}</Link>
              <Link to={getLocalizedPath('/about', i18n.language)} className={`${currentCleanPath === '/about' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>{t('nav.about')}</Link>
              <Link to={getLocalizedPath('/contact', i18n.language)} className={`${currentCleanPath === '/contact' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}>{t('nav.contact')}</Link>
            </div>
            <LanguageDropdown className="ml-4" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageDropdown />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-brand-dark border-b border-white/5 overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="px-3 pt-2 pb-4 space-y-1">
              <Link to={getLocalizedPath('/', i18n.language)} onClick={() => setIsOpen(false)} className={`${currentCleanPath === '/' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} block px-3 py-2 text-base font-medium`}>{t('nav.home')}</Link>
              
              {/* Mobile Products */}
              <div className="px-3 pt-3 pb-1 text-gray-500 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                <span>{t('nav.products')}</span>
                <Link to={getLocalizedPath('/services/construction', i18n.language)} onClick={() => setIsOpen(false)} className="text-brand-orange text-xs normal-case hover:underline">
                  {t('nav.construction')} →
                </Link>
              </div>
              {constructionProducts.map((product) => (
                <Link
                  key={product.href}
                  to={getLocalizedPath(product.href, i18n.language)}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block px-6 py-2 text-sm font-medium"
                >
                  {product.title}
                </Link>
              ))}

              {/* Mobile Services */}
              <div className="px-3 pt-4 pb-1 text-gray-500 text-xs font-bold uppercase tracking-wider">{t('nav.services')}</div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={getLocalizedPath(service.href, i18n.language)}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block px-6 py-2 text-sm font-medium"
                >
                  {service.title}
                </Link>
              ))}

              <div className="pt-2 border-t border-white/5">
                <Link to={getLocalizedPath('/projects', i18n.language)} onClick={() => setIsOpen(false)} className={`${currentCleanPath === '/projects' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} block px-3 py-2 text-base font-medium`}>{t('nav.projects')}</Link>
                <Link to={getLocalizedPath('/insights', i18n.language)} onClick={() => setIsOpen(false)} className={`${currentCleanPath === '/insights' || currentCleanPath.startsWith('/insights/') ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} block px-3 py-2 text-base font-medium`}>{t('nav.insights')}</Link>
                <Link to={getLocalizedPath('/about', i18n.language)} onClick={() => setIsOpen(false)} className={`${currentCleanPath === '/about' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} block px-3 py-2 text-base font-medium`}>{t('nav.about')}</Link>
                <Link to={getLocalizedPath('/contact', i18n.language)} onClick={() => setIsOpen(false)} className={`${currentCleanPath === '/contact' ? 'text-brand-orange' : 'text-gray-300 hover:text-white'} block px-3 py-2 text-base font-medium`}>{t('nav.contact')}</Link>
              </div>

              <div className="pt-3 pb-1 px-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-brand-orange" />
                  Language
                </span>
                <LanguageDropdown />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isEnded, setIsEnded] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isEnded) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsEnded(false);
        setIsPlaying(true);
      } else if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-30 md:pb-12 min-h-[440px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[540px]">
      {/* Hero Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <video
          key="bannervideo-v2"
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={() => {
            setIsEnded(true);
            setIsPlaying(false);
          }}
          poster={getAssetPath('images/fallbackbanner.png')}
          className="w-full h-full object-cover object-[center_45%]"
        >
          <source src={`${getAssetPath('videos/bannervideo.mp4')}?v=2`} type="video/mp4" />
          {/* Fallback image */}
          <img
            src={getAssetPath('images/fallbackbanner.png')}
            alt="A2 Trails mountain bike trail construction"
            className="w-full h-full object-cover object-[center_45%]"
            loading="eager"
          />
        </video>
        {/* Dark overlay ensuring high contrast readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/70 backdrop-brightness-95"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight tracking-tight"
        >
          <Trans i18nKey="hero.title" components={{ br: <br /> }} />
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 mb-5 max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 relative z-30"
        >
          <Link to={getLocalizedPath('/contact', i18n.language)} className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded-lg font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all group">
            {t('hero.cta2')}
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to={getLocalizedPath('/projects', i18n.language)} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all">
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>

      {/* Discreet Video Ambient Control (always without sound, replayable) */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          className="p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer"
          aria-label={isEnded ? "Replay video" : isPlaying ? "Pause video" : "Play video"}
          title={isEnded ? "Replay video" : isPlaying ? "Pause video" : "Play video"}
        >
          {isEnded ? (
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          ) : isPlaying ? (
            <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          ) : (
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          )}
        </button>
      </div>
    </section>
  );
};

const ConstructionProducts = () => {
  const { t, i18n } = useTranslation();
  const products = [
    { title: t('services.construction.pumptracks.title'), href: "/services/construction#pumptracks", icon: <Waves className="h-6 w-6" /> },
    { title: t('services.construction.skillTracks.title'), href: "/services/construction#skill-tracks", icon: <ClipboardList className="h-6 w-6" /> },
    { title: t('services.construction.mtbTrails.title'), href: "/services/construction#mtb-trails", icon: <Mountain className="h-6 w-6" /> },
    { title: t('services.construction.jumpTracks.title'), href: "/services/construction#jump-tracks", icon: <Target className="h-6 w-6" /> },
    { title: t('services.construction.bmxTracks.title'), href: "/services/construction#bmx-tracks", icon: <Bike className="h-6 w-6" /> },
    { title: t('services.construction.eMotoTracks.title'), href: "/services/construction#e-moto-tracks", icon: <Zap className="h-6 w-6" /> },
  ];

  return (
    <section className="bg-brand-dark/50 py-8 sm:py-10 border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={getLocalizedPath(product.href, i18n.language)}
                className="flex flex-col items-center justify-center p-4 sm:p-5 bg-brand-card rounded-xl border border-white/5 hover:border-brand-orange/50 hover:bg-brand-orange/5 transition-all group text-center h-full"
              >
                <div className="mb-2.5 text-brand-orange group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <span className="text-sm sm:text-base font-bold text-gray-300 group-hover:text-white transition-colors">
                  {product.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AudienceGateway = () => {
  const { t } = useTranslation();
  const sectors = [
    {
      id: "municipalities",
      icon: <Landmark className="h-10 w-10 text-brand-orange" />,
      title: t('sectors.municipalities.title'),
      tagline: t('sectors.municipalities.tagline'),
      desc: t('sectors.municipalities.desc'),
    },
    {
      id: "contractors",
      icon: <HardHat className="h-10 w-10 text-brand-orange" />,
      title: t('sectors.contractors.title'),
      tagline: t('sectors.contractors.tagline'),
      desc: t('sectors.contractors.desc'),
    },
    {
      id: "holidayParks",
      icon: <Tent className="h-10 w-10 text-brand-orange" />,
      title: t('sectors.holidayParks.title'),
      tagline: t('sectors.holidayParks.tagline'),
      desc: t('sectors.holidayParks.desc'),
    },
    {
      id: "architects",
      icon: <Ruler className="h-10 w-10 text-brand-orange" />,
      title: t('sectors.architects.title'),
      tagline: t('sectors.architects.tagline'),
      desc: t('sectors.architects.desc'),
    },
  ];

  return (
    <section id="sectors" className="py-24 bg-brand-dark/40 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            {t('sectors.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            {t('sectors.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-card rounded-2xl border border-white/5 p-10 flex flex-col justify-start"
            >
              <div className="mb-6">{sector.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{sector.title}</h3>
              <p className="text-brand-orange font-semibold mb-3 leading-snug">
                {sector.tagline}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {sector.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const { t, i18n } = useTranslation();
  const services = [
    {
      title: t('nav.consultancy'),
      description: t('expertise.consultancy.desc'),
      icon: <ClipboardList className="h-10 w-10 text-brand-orange" />,
      href: "/services/consultancy"
    },
    {
      title: t('nav.design'),
      description: t('expertise.design.desc'),
      icon: <DraftingCompass className="h-10 w-10 text-brand-orange" />,
      href: "/services/design"
    },
    {
      title: t('nav.construction'),
      description: t('expertise.construction.desc'),
      icon: <HardHat className="h-10 w-10 text-brand-orange" />,
      href: "/services/construction"
    },
    {
      title: t('nav.maintenance'),
      description: t('expertise.maintenance.desc'),
      icon: <ShieldCheck className="h-10 w-10 text-brand-orange" />,
      href: "/services/maintenance"
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t('expertise.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            {t('expertise.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-card rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all group overflow-hidden flex flex-col"
            >
              <Link to={getLocalizedPath(service.href, i18n.language)} className="flex flex-col justify-between p-10 h-full">
                <div>
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="inline-flex items-center text-brand-orange font-bold group-hover:underline gap-2 mt-auto">
                  {t('expertise.learnMore')}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-brand-orange">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {t('cta.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-lg mb-10"
        >
          {t('cta.subtitle')}
        </motion.p>
        <Link 
          to={getLocalizedPath('/contact', i18n.language)}
          className="bg-white text-brand-orange hover:bg-gray-100 px-10 py-5 rounded-lg font-bold text-lg flex items-center justify-center gap-2 mx-auto transition-all group inline-flex"
        >
          {t('cta.button')}
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-brand-dark py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img 
                src={getAssetPath('images/logo.webp')} 
                alt="A2Trails - Mountain Bike Infrastructure Experts" 
                className="h-[60px] w-auto" 
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4">
              <li><Link to={getLocalizedPath('/#services', i18n.language)} className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.services')}</Link></li>
              <li><Link to={getLocalizedPath('/projects', i18n.language)} className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to={getLocalizedPath('/insights', i18n.language)} className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.insights')}</Link></li>
              <li><Link to={getLocalizedPath('/about', i18n.language)} className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.about')}</Link></li>
              <li><Link to={getLocalizedPath('/contact', i18n.language)} className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-4">
              <li><Link to={getLocalizedPath('/services/consultancy', i18n.language)} className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.consultancy')}</Link></li>
              <li><Link to={getLocalizedPath('/services/design', i18n.language)} className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.design')}</Link></li>
              <li><Link to={getLocalizedPath('/services/construction', i18n.language)} className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.construction')}</Link></li>
              <li><Link to={getLocalizedPath('/services/maintenance', i18n.language)} className="text-gray-400 hover:text-brand-orange text-sm transition-colors">{t('nav.maintenance')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                antonarnauts@a2trails.com
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand-orange" />
                {t('footer.vat')}: BE1024.359.194
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.followUs')}</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/a2trails/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/a2.trails?igsh=MXIybXRuMzlwaXV4cA==" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} A2Trails. {t('footer.rights')}
          </div>
          <div className="flex gap-8 text-gray-500 text-sm">
            <Link to={getLocalizedPath('/privacy', i18n.language)} className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to={getLocalizedPath('/terms', i18n.language)} className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => (
  <>
    <SEO 
      title="Home" 
      description="Professional construction of riding infrastructure - helping municipalities, developers, and holiday parks create vibrant, active outdoor spaces."
    />
    <Hero />
    <ConstructionProducts />
    <InsightsCarousel />
    <AudienceGateway />
    <Expertise />
    <CTA />
  </>
);

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <LanguageRouteSync />
      <div className="min-h-screen bg-brand-dark">
        <Navbar />
        <main>
          <Routes>
            {/* Language-prefixed routes (e.g. /nl/..., /fr/..., /en/...) */}
            <Route path="/:lang" element={<HomePage />} />
            <Route path="/:lang/services/consultancy" element={<Consultancy />} />
            <Route path="/:lang/services/design" element={<Design />} />
            <Route path="/:lang/services/construction" element={<Construction />} />
            <Route path="/:lang/services/maintenance" element={<Maintenance />} />
            <Route path="/:lang/projects" element={<Projects />} />
            <Route path="/:lang/insights" element={<Insights />} />
            <Route path="/:lang/insights/:articleId" element={<Insights />} />
            <Route path="/:lang/about" element={<About />} />
            <Route path="/:lang/contact" element={<Contact />} />
            <Route path="/:lang/privacy" element={<PrivacyPolicy />} />
            <Route path="/:lang/terms" element={<TermsOfService />} />

            {/* Standard fallback routes without prefix */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services/consultancy" element={<Consultancy />} />
            <Route path="/services/design" element={<Design />} />
            <Route path="/services/construction" element={<Construction />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:articleId" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
