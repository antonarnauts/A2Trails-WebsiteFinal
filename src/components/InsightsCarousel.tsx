import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Clock, ArrowRight } from "lucide-react";
import { insightsData } from "../data/insights";
import { getAssetPath } from "../lib/utils";
import { getLocalizedPath } from "../lib/i18nRouting";

export default function InsightsCarousel() {
  const { t, i18n } = useTranslation();

  return (
    <section 
      id="home-insights" 
      className="py-8 sm:py-10 bg-brand-dark/90 border-b border-white/5"
      aria-label={t('homeInsights.title')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {insightsData.map((article) => {
            const title = t(`insights.articles.${article.id}.title`);
            const excerpt = t(`insights.articles.${article.id}.excerpt`);

            return (
              <Link
                key={article.id}
                to={getLocalizedPath(`/insights/${article.slug || article.id}`, i18n.language)}
                className="group flex flex-col sm:flex-row items-stretch bg-brand-card/70 hover:bg-brand-card rounded-2xl border border-white/10 hover:border-brand-orange/40 transition-all duration-300 p-4 sm:p-5 gap-4 sm:gap-5 shadow-lg hover:shadow-brand-orange/5"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full sm:w-36 md:w-40 h-36 sm:h-auto rounded-xl overflow-hidden flex-shrink-0 bg-brand-dark">
                  <img
                    src={getAssetPath(article.image)}
                    alt={title}
                    className={`w-full h-full object-cover ${article.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    {/* Read time & date */}
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-brand-orange" />
                        {article.readTime} {t('insights.readTime')}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-orange transition-colors leading-snug line-clamp-2 mb-1.5">
                      {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {excerpt}
                    </p>
                  </div>

                  {/* Read Article Link */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-orange group-hover:text-brand-orange-hover mt-3 pt-2 border-t border-white/5">
                    <span>{t('homeInsights.readArticle')}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
