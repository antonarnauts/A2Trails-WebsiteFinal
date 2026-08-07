import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 bg-brand-dark min-h-screen">
      <SEO 
        title={t('terms.title')}
        description="Terms of Service for A2Trails - Legal information regarding our services and partnership."
        canonical="https://a2trails.com/terms"
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
          >
            <h1 className="text-4xl font-bold text-white mb-8">{t('terms.title')}</h1>

            <div className="space-y-12 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('terms.partnership.title')}</h2>
                <p>{t('terms.partnership.text')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('terms.intellectualProperty.title')}</h2>
                <p className="mb-4">{t('terms.intellectualProperty.text')}</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><span className="text-white font-semibold">{t('terms.intellectualProperty.authorizedUse')}</span></li>
                  <li><span className="text-white font-semibold">{t('terms.intellectualProperty.protection')}</span></li>
                  <li><span className="text-white font-semibold">{t('terms.intellectualProperty.modifications')}</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('terms.warranty.title')}</h2>
                <p className="mb-4">{t('terms.warranty.text')}</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><span className="text-white font-semibold">{t('terms.warranty.limited')}</span></li>
                  <li><span className="text-white font-semibold">{t('terms.warranty.structural')}</span></li>
                  <li><span className="text-white font-semibold">{t('terms.warranty.exclusions')}</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('terms.ownership.title')}</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li><span className="text-white font-semibold">{t('terms.ownership.retention')}</span></li>
                  <li><span className="text-white font-semibold">{t('terms.ownership.payment')}</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('terms.confidentiality.title')}</h2>
                <p>{t('terms.confidentiality.text')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('terms.dispute.title')}</h2>
                <p>{t('terms.dispute.text')}</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
