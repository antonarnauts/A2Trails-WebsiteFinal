import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 bg-brand-dark min-h-screen">
      <SEO 
        title={t('privacy.title')}
        description="Privacy Policy for A2Trails - Information on how we handle your personal data."
        canonical="https://a2trails.com/privacy"
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
          >
            <h1 className="text-4xl font-bold text-white mb-8">{t('privacy.title')}</h1>
            <p className="text-gray-400 mb-8 italic">{t('privacy.lastUpdated')}</p>

            <div className="space-y-12 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.controller.title')}</h2>
                <p className="mb-4">{t('privacy.controller.text')}</p>
                <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/5 space-y-2">
                  <p><span className="text-brand-orange font-bold">{t('privacy.controller.company')}:</span> A2Trails</p>
                  <p><span className="text-brand-orange font-bold">{t('privacy.controller.office')}:</span> Mariemontkaai 15, 1080 Brussel, Belgium</p>
                  <p><span className="text-brand-orange font-bold">{t('privacy.controller.cbe')}:</span> BE 1024.359.194</p>
                  <p><span className="text-brand-orange font-bold">{t('privacy.controller.email')}:</span> antonarnauts@a2trails.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.legalBasis.title')}</h2>
                <p className="mb-4">{t('privacy.legalBasis.text')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="text-white font-semibold">{t('privacy.legalBasis.contractual')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.legalBasis.legal')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.legalBasis.consent')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.legalBasis.legitimate')}</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.categories.title')}</h2>
                <p className="mb-4">{t('privacy.categories.text')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="text-white font-semibold">{t('privacy.categories.identification')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.categories.professional')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.categories.technical')}</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.retention.title')}</h2>
                <p className="mb-4">{t('privacy.retention.text')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="text-white font-semibold">{t('privacy.retention.accounting')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.retention.contractual')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.retention.requests')}</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.sharing.title')}</h2>
                <p className="mb-4">{t('privacy.sharing.text')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="text-white font-semibold">{t('privacy.sharing.subcontractors')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.sharing.authorities')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.sharing.it')}</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.rights.title')}</h2>
                <p className="mb-4">{t('privacy.rights.text')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="text-white font-semibold">{t('privacy.rights.access')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.rights.rectification')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.rights.erasure')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.rights.restriction')}</span></li>
                  <li><span className="text-white font-semibold">{t('privacy.rights.portability')}</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.security.title')}</h2>
                <p>{t('privacy.security.text')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.complaints.title')}</h2>
                <p className="mb-4">{t('privacy.complaints.text')}</p>
                <div className="bg-brand-dark/50 p-6 rounded-xl border border-white/5">
                  <p className="text-white font-bold">{t('privacy.complaints.authority')}</p>
                  <p>Drukpersstraat 35, 1000 Brussel</p>
                  <a 
                    href="https://www.gegevensbeschermingsautoriteit.be" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-orange hover:underline mt-2 inline-block"
                  >
                    www.gegevensbeschermingsautoriteit.be
                  </a>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
