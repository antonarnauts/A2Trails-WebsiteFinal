import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  X, 
  Clock, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Share2, 
  BookOpen, 
  ArrowLeft, 
  Check 
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";
import { insightsData, InsightArticle } from "../data/insights";
import { getAssetPath } from "../lib/utils";

function jumpToReference(refNumber: string) {
  const el = document.getElementById(`ref-${refNumber}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('ring-2', 'ring-brand-orange', 'bg-orange-50', 'shadow-md');
    setTimeout(() => {
      el.classList.remove('ring-2', 'ring-brand-orange', 'bg-orange-50', 'shadow-md');
    }, 2500);
  }
}

function renderFormattedText(text: string) {
  // Regex to split by markdown links [label](url), URLs, bold **text**, and citations [1], [2], etc.
  const regex = /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s)]+)|(\*\*[^*]+\*\*)|(\[\d+\])/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.slice(lastIndex, match.index));
    }
    if (match[1] && match[2]) {
      // Link [text](url)
      const url = match[2];
      const isExternal = url.startsWith('http://') || url.startsWith('https://');
      if (isExternal) {
        elements.push(
          <a
            key={`link-${match.index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange hover:text-brand-orange-hover underline underline-offset-2 font-semibold transition-colors break-words"
          >
            {match[1]}
          </a>
        );
      } else {
        elements.push(
          <Link
            key={`link-${match.index}`}
            to={url}
            className="text-brand-orange hover:text-brand-orange-hover underline underline-offset-2 font-semibold transition-colors"
          >
            {match[1]}
          </Link>
        );
      }
    } else if (match[3]) {
      // Raw URL
      const url = match[3];
      elements.push(
        <a
          key={`url-${match.index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange hover:text-brand-orange-hover underline underline-offset-2 break-all text-xs font-mono transition-colors"
        >
          {url}
        </a>
      );
    } else if (match[4]) {
      // Bold **text**
      const boldText = match[4].slice(2, -2);
      elements.push(
        <strong key={`bold-${match.index}`} className="font-bold text-gray-950">
          {boldText}
        </strong>
      );
    } else if (match[5]) {
      // Citation [1], [2], etc.
      const refNum = match[5].replace(/[\[\]]/g, '');
      elements.push(
        <button
          key={`cite-${match.index}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            jumpToReference(refNum);
          }}
          className="inline-flex items-center text-xs font-bold text-brand-orange hover:text-brand-orange-hover hover:underline hover:scale-110 active:scale-95 px-0.5 align-super cursor-pointer transition-all duration-200"
          title={`Jump to Reference [${refNum}]`}
          aria-label={`Jump to Reference [${refNum}]`}
        >
          {match[5]}
        </button>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }
  return elements.length > 0 ? elements : text;
}

export default function Insights() {
  const { t } = useTranslation();
  const location = useLocation();
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const articleParam = params.get('article');
    if (articleParam) {
      const match = insightsData.find(a => a.id === articleParam || a.slug === articleParam);
      if (match) {
        setSelectedArticle(match);
      }
    }
  }, [location.search]);

  const handleShare = (articleId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#/insights?article=${articleId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-32 bg-brand-dark min-h-screen">
      <SEO 
        title={t('nav.insights')}
        description={t('insights.subtitle')}
        canonical="https://a2trails.com/insights"
      />

      {/* Hero Header */}
      <section className="py-20 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {t('insights.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t('insights.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-card/50 border border-white/5 rounded-3xl p-6 sm:p-8 md:p-12">
            
            {/* Articles Grid (2 Featured Articles) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {insightsData.map((article, idx) => {
                const title = t(`insights.articles.${article.id}.title`);
                const excerpt = t(`insights.articles.${article.id}.excerpt`);

                return (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    onClick={() => setSelectedArticle(article)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedArticle(article);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={title}
                    className="bg-brand-card rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-brand-orange/40 hover:shadow-xl hover:shadow-brand-orange/5 transition-all duration-300 group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-brand-orange/50"
                  >
                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden bg-brand-dark">
                      <img
                        src={getAssetPath(article.image)}
                        alt={title}
                        className="w-full h-full object-cover object-[center_50%] group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-brand-orange" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-brand-orange" />
                          {article.readTime} {t('insights.readTime')}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors leading-snug">
                        {title}
                      </h3>

                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                        {excerpt}
                      </p>

                      {/* Button */}
                      <div
                        className="w-full mt-auto bg-white/5 text-white py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all group-hover:bg-brand-orange"
                      >
                        <BookOpen className="h-4 w-4" />
                        {t('insights.readArticle')}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA Banner */}
            <div className="mt-16 bg-gradient-to-r from-brand-card via-brand-dark to-brand-card border border-white/10 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-white">
                  {t('insights.cta.title')}
                </h3>
              </div>
              <Link
                to="/contact"
                className="whitespace-nowrap bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-brand-orange/20"
              >
                {t('insights.cta.button')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Article Detail Modal / Reader */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-card border border-white/10 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-8 relative flex flex-col max-h-[90vh]"
            >
              {/* Header Image */}
              <div className="relative h-64 sm:h-72 w-full flex-shrink-0 bg-brand-dark">
                <img
                  src={getAssetPath(selectedArticle.image)}
                  alt={t(`insights.articles.${selectedArticle.id}.title`)}
                  className="w-full h-full object-cover object-[center_50%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-brand-dark/80 hover:bg-brand-orange text-white p-2.5 rounded-full backdrop-blur-md border border-white/10 transition-colors z-10"
                  aria-label="Close article"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Time badge */}
                <div className="absolute bottom-4 left-6 flex items-center gap-3 text-xs text-gray-300 bg-brand-dark/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-brand-orange" />
                    {selectedArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-brand-orange" />
                    {selectedArticle.readTime} {t('insights.readTime')}
                  </span>
                </div>
              </div>

              {/* Modal Body with White Reading Slate */}
              <div className="bg-white p-6 sm:p-10 md:p-12 overflow-y-auto space-y-7 text-gray-900">
                {t(`insights.articles.${selectedArticle.id}.meta`, { defaultValue: '' }) && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30">
                    <span className="text-xs text-brand-orange font-bold tracking-wide">
                      {t(`insights.articles.${selectedArticle.id}.meta`)}
                    </span>
                  </div>
                )}

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight font-display">
                  {t(`insights.articles.${selectedArticle.id}.title`)}
                </h2>

                <div className="bg-gray-50 border-l-4 border-brand-orange rounded-r-xl p-5 my-4 border border-gray-100">
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                    {t(`insights.articles.${selectedArticle.id}.excerpt`)}
                  </p>
                </div>

                {/* Article Body Paragraphs */}
                <div className="text-gray-800 text-base sm:text-[17px] leading-[1.8] space-y-6 pt-2 font-normal">
                  {t(`insights.articles.${selectedArticle.id}.content`)
                    .split('\n\n')
                    .map((paragraph, pIdx) => {
                      // Skip References paragraph here, as it is rendered below Key Takeaways
                      if (/^(References|Referenties|Références)/i.test(paragraph.trim())) {
                        return null;
                      }

                      // Numbered Section Headings (e.g., "1. Improves Project Quality...")
                      if (/^[1-9]\.\s/.test(paragraph)) {
                        const lines = paragraph.split('\n').map(l => l.trim()).filter(Boolean);
                        const heading = lines[0];
                        const bodyLines = lines.slice(1);
                        return (
                          <div key={pIdx} className="pt-4 space-y-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-950 tracking-tight font-display">
                              {heading}
                            </h3>
                            {bodyLines.length > 0 && (
                              <div className="space-y-2.5 pt-1">
                                {bodyLines.map((line, lIdx) => {
                                  if (/^[•\-\*]\s/.test(line)) {
                                    return (
                                      <div key={lIdx} className="flex items-start gap-3 text-gray-800 leading-[1.8] pl-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2.5 flex-shrink-0" />
                                        <span>{renderFormattedText(line.replace(/^[•\-\*]\s+/, ''))}</span>
                                      </div>
                                    );
                                  }
                                  return (
                                    <p key={lIdx} className="text-gray-800 leading-[1.8]">
                                      {renderFormattedText(line)}
                                    </p>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      }

                      // Handle regular paragraphs that may contain bullet points
                      const pLines = paragraph.split('\n').map(l => l.trim()).filter(Boolean);
                      if (pLines.some(l => /^[•\-\*]\s/.test(l))) {
                        return (
                          <div key={pIdx} className="space-y-2.5">
                            {pLines.map((line, lIdx) => {
                              if (/^[•\-\*]\s/.test(line)) {
                                return (
                                  <div key={lIdx} className="flex items-start gap-3 text-gray-800 leading-[1.8] pl-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2.5 flex-shrink-0" />
                                    <span>{renderFormattedText(line.replace(/^[•\-\*]\s+/, ''))}</span>
                                  </div>
                                );
                              }
                              return (
                                <p key={lIdx}>
                                  {renderFormattedText(line)}
                                </p>
                              );
                            })}
                          </div>
                        );
                      }

                      return (
                        <p key={pIdx}>
                          {renderFormattedText(paragraph)}
                        </p>
                      );
                    })}
                </div>

                {/* Key Takeaways */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-7 space-y-4 mt-8">
                  <h4 className="text-base sm:text-lg font-bold text-gray-950 flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange" />
                    {t('insights.keyTakeaways')}
                  </h4>
                  <ul className="space-y-3.5 pt-1">
                    {(t(`insights.articles.${selectedArticle.id}.takeaways`, { returnObjects: true }) as string[]).map((point, index) => (
                      <li key={index} className="text-sm sm:text-[15px] text-gray-700 leading-relaxed flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* References (Rendered under Key Takeaways if present) */}
                {(() => {
                  const content = t(`insights.articles.${selectedArticle.id}.content`);
                  const refParagraph = content.split('\n\n').find((p) => /^(References|Referenties|Références)/i.test(p.trim()));
                  if (!refParagraph) return null;

                  const lines = refParagraph.split('\n');
                  const refHeading = lines[0];
                  const refItems = lines.slice(1).filter((l) => l.trim().length > 0);

                  return (
                    <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                      <h4 className="text-base sm:text-lg font-bold text-gray-950 font-display flex items-center gap-2">
                        <span>{refHeading}</span>
                      </h4>
                      <div className="space-y-2.5">
                        {refItems.map((refLine, rIdx) => {
                          const matchNum = refLine.match(/^\[(\d+)\]/);
                          const refId = matchNum ? `ref-${matchNum[1]}` : `ref-${rIdx + 1}`;
                          return (
                            <div
                              key={rIdx}
                              id={refId}
                              className="text-xs sm:text-[13px] text-gray-600 leading-relaxed bg-gray-50/80 p-3.5 rounded-xl border border-gray-200/70 transition-all duration-300 scroll-mt-6"
                            >
                              {renderFormattedText(refLine)}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                {/* Modal Footer / Actions */}
                <div className="pt-6 border-t border-gray-200 flex items-center justify-end gap-3">
                  <button
                    onClick={() => handleShare(selectedArticle.id)}
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors border border-gray-300"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-600" /> : <Share2 className="h-4 w-4" />}
                    {copied ? "Copied!" : t('insights.share')}
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-brand-orange/20"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t('insights.backToInsights')}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
