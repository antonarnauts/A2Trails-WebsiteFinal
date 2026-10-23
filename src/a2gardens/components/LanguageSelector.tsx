import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface LanguageOption {
  code: 'en' | 'nl' | 'fr';
  short: string;
  name: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'nl', short: 'NL', name: 'Nederlands' },
  { code: 'fr', short: 'FR', name: 'Français' },
];

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    currentLanguage,
    setLanguage,
    isAutoDetected,
    resetToBrowserLanguage,
    detectedBrowserLanguage,
  } = useLanguage();

  const activeOption = LANGUAGES.find((l) => l.code === currentLanguage) || LANGUAGES[0];

  // Close on click outside or escape key (exact behavior from a2trails)
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (code: 'en' | 'nl' | 'fr') => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger button styled exactly as a2trails */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 hover:border-[#3ea637]/40 transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#3ea637]"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
        title={
          isAutoDetected
            ? `Language: ${activeOption.name} (Auto-detected from browser)`
            : `Language: ${activeOption.name} (User selected)`
        }
      >
        <Globe className="w-3.5 h-3.5 text-[#3ea637] flex-shrink-0" />
        <span className="tracking-wide font-mono text-xs">{activeOption.short}</span>
        <ChevronDown
          className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#3ea637]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu matching a2trails.com */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-28 rounded-xl bg-[#0f1712]/98 backdrop-blur-md border border-white/10 shadow-2xl p-1 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
          role="listbox"
          aria-label="Languages"
        >
          {LANGUAGES.map((lang) => {
            const isSelected = activeOption.code === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelectLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors text-left cursor-pointer ${
                  isSelected
                    ? 'bg-[#3ea637] text-[#061e12]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                role="option"
                aria-selected={isSelected}
              >
                <span>{lang.short}</span>
                {isSelected && <Check className="w-3.5 h-3.5 flex-shrink-0 text-[#061e12]" />}
              </button>
            );
          })}

          {/* Hybrid Auto indicator / reset if overridden */}
          <div className="pt-1 mt-1 border-t border-white/10 px-1">
            {isAutoDetected ? (
              <div className="px-1.5 py-1 text-[10px] text-[#3ea637] font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ea637] animate-pulse" />
                <span>Browser: {detectedBrowserLanguage.toUpperCase()}</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  resetToBrowserLanguage();
                  setIsOpen(false);
                }}
                className="w-full text-[10px] text-gray-400 hover:text-[#3ea637] font-mono py-1 px-1.5 rounded hover:bg-white/5 flex items-center justify-between transition-colors cursor-pointer"
                title={`Reset to browser language (${detectedBrowserLanguage.toUpperCase()})`}
              >
                <span>Auto ({detectedBrowserLanguage.toUpperCase()})</span>
                <Sparkles className="w-2.5 h-2.5" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
