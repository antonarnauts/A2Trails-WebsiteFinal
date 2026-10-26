import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageType } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { getAssetPath } from '../../lib/utils';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const isGardensSubdomain = typeof window !== 'undefined' && window.location.hostname.includes('a2gardens');

  const navItems = [
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e0b]/90 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logos in top-left corner */}
        <div className="flex-shrink-0 flex items-center gap-3 sm:gap-4">
          <button
            id="nav-logo-btn"
            onClick={() => scrollToSection('home')}
            className="flex items-center focus:outline-none cursor-pointer group py-1"
            aria-label="A2Gardens"
          >
            <img
              src={getAssetPath('a2gardens/images/logoa2gardernspng.png')}
              alt="A2Gardens - Architectural Landscape & Garden Engineering Brussels"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>
          {isGardensSubdomain ? (
            <a
              href="https://a2trails.com"
              className="flex items-center opacity-90 hover:opacity-100 transition-opacity"
              aria-label="A2Trails - Sustainable Mountain Bike Trail Building"
            >
              <img
                src={getAssetPath('images/logo.webp')}
                alt="A2Trails - Sustainable Mountain Bike Trail Building Logo"
                className="h-[29px] sm:h-[32px] w-auto object-contain"
              />
            </a>
          ) : (
            <Link
              to="/"
              className="flex items-center opacity-90 hover:opacity-100 transition-opacity"
              aria-label="A2Trails - Sustainable Mountain Bike Trail Building"
            >
              <img
                src={getAssetPath('images/logo.webp')}
                alt="A2Trails - Sustainable Mountain Bike Trail Building Logo"
                className="h-[29px] sm:h-[32px] w-auto object-contain"
              />
            </Link>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-12 lg:space-x-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-[#10b981] px-4 py-2 text-sm font-medium tracking-wide transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Right Side: Consultation Button & Language Selector */}
        <div className="hidden md:flex items-center space-x-4">

          <button
            id="nav-cta-btn"
            onClick={() => scrollToSection('contact')}
            className="bg-[#10b981] hover:bg-[#10b981]/90 text-[#061e12] px-5 py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#10b981]/20 active:scale-95 cursor-pointer"
          >
            <span>{t.nav.consultation}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Language Selector */}
          <LanguageSelector className="ml-2" />
        </div>

        {/* Mobile Right Bar: Language Selector + Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#10b981]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e0b]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-3 rounded-lg text-left text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 rounded-lg bg-[#10b981] text-[#061e12] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
