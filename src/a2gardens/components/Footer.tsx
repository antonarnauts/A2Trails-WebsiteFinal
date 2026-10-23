import React from 'react';
import { PageType } from '../types';
import { Mail, MapPin, Hash, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getAssetPath } from '../../lib/utils';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleLegalClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b08] py-20 border-t border-white/5 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Large Logo (3x size) */}
          <div className="flex items-start">
            <button
              onClick={scrollToTop}
              className="cursor-pointer focus:outline-none group"
              aria-label="A2"
            >
              <img
                src={getAssetPath('a2gardens/images/logo.jpg')}
                alt="A2"
                className="h-[180px] w-auto rounded-2xl object-contain bg-black border border-[#10b981]/30 p-2 shadow-2xl transition-all group-hover:scale-105"
              />
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">{t.footer.quickLinks}</h4>
            <ul className="space-y-3.5">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-[#10b981] text-sm transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-[#10b981] text-sm transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-[#10b981] text-sm transition-colors cursor-pointer"
                >
                  {t.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#10b981] text-sm transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-[#10b981] text-sm transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">{t.footer.services}</h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#10b981] transition-colors text-left cursor-pointer"
                >
                  {t.categories.cityGardens}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#10b981] transition-colors text-left cursor-pointer"
                >
                  {t.categories.balconies}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#10b981] transition-colors text-left cursor-pointer"
                >
                  {t.categories.rooftops}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#10b981] transition-colors text-left cursor-pointer"
                >
                  {t.categories.terraces}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Company Info (same as A2trails.com) */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#10b981] shrink-0" />
                <a
                  href="mailto:antonarnauts@a2trails.com"
                  className="hover:text-[#10b981] transition-colors font-mono text-xs sm:text-sm"
                >
                  antonarnauts@a2trails.com
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                <span className="leading-snug">Mariemontkaai 15, 1080 Brussel</span>
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2.5">
                <Hash className="h-4 w-4 text-[#10b981] shrink-0" />
                <span className="font-mono text-xs sm:text-sm">{t.footer.vat}: BE1024.359.194</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            © {new Date().getFullYear()} A2Trails. {t.footer.rights}
          </div>
          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => handleLegalClick('privacy')}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
            <button
              onClick={() => handleLegalClick('terms')}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-[#10b981] transition-colors flex items-center gap-1 cursor-pointer ml-2"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
