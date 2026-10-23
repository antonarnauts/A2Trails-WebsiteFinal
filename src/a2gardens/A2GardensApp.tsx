/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { Layers, Calendar, Mail } from 'lucide-react';
import { LanguageProvider } from './context/LanguageContext';
import { getAssetPath } from '../lib/utils';
import SEO from '../components/SEO';

export default function A2GardensApp() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const logoUrl = getAssetPath('a2gardens/images/logoa2gardernspng.png');

  // Dynamic favicon update for A2Gardens
  useEffect(() => {
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    const defaultIcon = getAssetPath('images/logo.webp');
    const previousIcon = link ? link.href : defaultIcon;

    if (link) {
      link.type = 'image/png';
      link.href = logoUrl;
    } else {
      link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.href = logoUrl;
      document.head.appendChild(link);
    }

    return () => {
      if (link) {
        link.type = 'image/webp';
        link.href = previousIcon;
      }
    };
  }, [logoUrl]);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <SEO
        title="Brussels Garden Architecture & Terraces"
        siteName="A2Gardens"
        description="A2Gardens specializes in urban garden architecture, bespoke terraces, and sustainable outdoor living spaces in Brussels."
        favicon={logoUrl}
      />
      <div className="min-h-screen bg-[#090d0a] text-[#dce6df] flex flex-col font-sans selection:bg-[#10b981] selection:text-black">
        {/* Top Navigation */}
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />

        {/* Main Content View */}
        <main className={`flex-1 ${currentPage !== 'home' ? 'pt-20' : ''}`}>
          {currentPage === 'home' && (
            <HomePage onNavigate={navigateTo} />
          )}

          {currentPage === 'privacy' && (
            <PrivacyPolicyPage onNavigate={navigateTo} />
          )}

          {currentPage === 'terms' && (
            <TermsOfServicePage onNavigate={navigateTo} />
          )}
        </main>

        {/* Mobile Sticky Quick-Action Bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070b08]/95 backdrop-blur-md border-t border-[#172b1e] p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
          <button
            onClick={() => scrollToSection('services')}
            className="flex-1 py-2 rounded-lg bg-[#111e15] border border-[#1b3424] text-xs font-semibold text-[#8ca394] active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-[#10b981]" />
            <span>Services</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex-1 py-2 rounded-lg bg-[#10b981] text-[#061e12] text-xs font-semibold uppercase tracking-wider active:scale-95 flex items-center justify-center gap-1.5 shadow-md shadow-[#10b981]/25 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </button>

          <a
            href="mailto:antonarnauts@a2trails.com"
            aria-label="Direct Email to Anton Arnauts"
            className="p-2 rounded-lg bg-[#111e15] border border-[#1b3424] text-[#10b981] active:scale-95 flex items-center justify-center"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Footer */}
        <Footer onNavigate={navigateTo} />
      </div>
    </LanguageProvider>
  );
}
