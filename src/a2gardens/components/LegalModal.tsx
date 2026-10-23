import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useLanguage, LanguageCode } from '../context/LanguageContext';
import { LEGAL_CONTENT, LegalSection } from '../data/legal';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  const validLang: LanguageCode = (['en', 'nl', 'fr'].includes(currentLanguage) ? currentLanguage : 'en') as LanguageCode;
  const doc = LEGAL_CONTENT[validLang][type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0b100d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#070b08]/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3ea637]/15 border border-[#3ea637]/30 flex items-center justify-center text-[#3ea637]">
              {type === 'privacy' ? (
                <ShieldCheck className="w-5 h-5" />
              ) : (
                <FileText className="w-5 h-5" />
              )}
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white tracking-tight">
                {doc.title}
              </h2>
              <p className="text-xs text-gray-400 font-mono">
                {doc.lastUpdated} • Mariemontkaai 15, 1080 Brussel (BE1024.359.194)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed text-gray-300">
          {/* Official Entity Badge */}
          <div className="p-4 rounded-xl bg-[#121c15] border border-[#3ea637]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-semibold text-white block">Official Company Registration</span>
              <span className="text-gray-400 font-mono">A2Trails / A2Gardens • BTW/TVA: BE1024.359.194</span>
            </div>
            <div className="text-gray-400 font-mono">
              Mariemontkaai 15, 1080 Brussel • antonarnauts@a2trails.com
            </div>
          </div>

          {/* Document Sections */}
          {doc.sections.map((section: LegalSection, idx: number) => (
            <div key={idx} className="space-y-3 pb-4 border-b border-white/5 last:border-b-0">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span className="text-[#3ea637]">{section.title}</span>
              </h3>
              {section.text && (
                <p className="text-gray-300 leading-relaxed">{section.text}</p>
              )}
              {section.subsections && (
                <div className="grid grid-cols-1 gap-2.5 pt-1 pl-1">
                  {section.subsections.map((sub, sIdx: number) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-lg bg-[#0e1611] border border-white/5 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3ea637] shrink-0 mt-0.5" />
                      <div>
                        {sub.label && (
                          <span className="font-semibold text-white mr-1.5 font-sans">
                            {sub.label}:
                          </span>
                        )}
                        <span className="text-gray-300">{sub.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#070b08] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Close</span>
          </button>
          <a
            href="mailto:antonarnauts@a2trails.com"
            className="px-5 py-2.5 rounded-xl bg-[#3ea637] hover:bg-[#35912f] text-black text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            Contact Legal Officer
          </a>
        </div>
      </div>
    </div>
  );
};
