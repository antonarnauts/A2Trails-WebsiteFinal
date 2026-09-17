import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Smartphone, Globe, Shield, RefreshCw, Trash2, CheckCircle } from "lucide-react";
import SEO from "../components/SEO";
import {
  getStoredDeviceInfo,
  getStoredRegionInfo,
  getStoredManualPreference,
  detectAndStoreDeviceInfo,
  fetchAndStoreRegionInfo,
  DeviceInfo,
  RegionInfo,
} from "../lib/geoLanguage";

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const [device, setDevice] = useState<DeviceInfo | null>(null);
  const [region, setRegion] = useState<RegionInfo | null>(null);
  const [manual, setManual] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [clearedNotice, setClearedNotice] = useState(false);

  useEffect(() => {
    loadLocalInfo();
  }, []);

  const loadLocalInfo = () => {
    setDevice(getStoredDeviceInfo());
    setRegion(getStoredRegionInfo());
    setManual(getStoredManualPreference());
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    detectAndStoreDeviceInfo();
    await fetchAndStoreRegionInfo();
    loadLocalInfo();
    setIsRefreshing(false);
  };

  const handleClear = () => {
    try {
      localStorage.removeItem('device');
      localStorage.removeItem('a2_device');
      localStorage.removeItem('region');
      localStorage.removeItem('a2_region');
      localStorage.removeItem('a2_manual_lang');
      localStorage.removeItem('a2_resolved_lang');
      setDevice(null);
      setRegion(null);
      setManual(null);
      setClearedNotice(true);
      setTimeout(() => setClearedNotice(false), 3000);
    } catch {
      // Ignore
    }
  };

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

              <section className="bg-brand-dark/40 border border-white/10 p-6 md:p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <Shield className="w-5 h-5 text-brand-orange" />
                      Client-Side Local Storage Preferences
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">
                      A2Trails stores your detected device language and approximate region directly on your device (in localStorage) to enable instant automatic language routing. No personal tracking cookies are used.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleRefresh}
                      disabled={isRefreshing}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 transition-colors cursor-pointer disabled:opacity-50"
                      title="Re-detect Device and Region"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 text-brand-orange ${isRefreshing ? 'animate-spin' : ''}`} />
                      Re-detect
                    </button>
                    <button
                      onClick={handleClear}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20 transition-colors cursor-pointer"
                      title="Clear stored device and region info"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Clear Local Data
                    </button>
                  </div>
                </div>

                {clearedNotice && (
                  <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    Locally stored device and region data has been cleared from your browser.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Stored Device */}
                  <div className="p-4 rounded-xl bg-brand-card border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-white font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Smartphone className="w-4 h-4 text-brand-orange" />
                        Stored Device Data (<code className="text-brand-orange text-[11px]">device</code>)
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400">
                        {device ? 'Active' : 'Not Stored'}
                      </span>
                    </div>
                    {device ? (
                      <div className="space-y-1 text-gray-300 font-mono text-[11px]">
                        <p><span className="text-gray-400 font-sans">Locale:</span> {device.locale}</p>
                        <p><span className="text-gray-400 font-sans">Primary Language:</span> {device.primaryLang.toUpperCase()}</p>
                        <p><span className="text-gray-400 font-sans">Device Type:</span> {device.isMobile ? 'Mobile / Tablet' : 'Desktop / Laptop'}</p>
                      </div>
                    ) : (
                      <p className="text-gray-400 italic">No device data stored yet.</p>
                    )}
                  </div>

                  {/* Stored Region */}
                  <div className="p-4 rounded-xl bg-brand-card border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-white font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-brand-orange" />
                        Stored Region Data (<code className="text-brand-orange text-[11px]">region</code>)
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400">
                        {region ? 'Active' : 'Pending / Not Stored'}
                      </span>
                    </div>
                    {region ? (
                      <div className="space-y-1 text-gray-300 font-mono text-[11px]">
                        <p><span className="text-gray-400 font-sans">Country Code:</span> {region.countryCode}</p>
                        {region.countryName && <p><span className="text-gray-400 font-sans">Country:</span> {region.countryName}</p>}
                        {region.city && <p><span className="text-gray-400 font-sans">City:</span> {region.city}</p>}
                      </div>
                    ) : (
                      <p className="text-gray-400 italic">IP Region lookup pending or not yet cached.</p>
                    )}
                  </div>
                </div>

                {manual && (
                  <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 flex items-center justify-between">
                    <span>Manual Language Preference Override: <strong className="text-brand-orange">{manual.toUpperCase()}</strong></span>
                    <span className="text-gray-400 text-[11px]">Selected via Dropdown</span>
                  </div>
                )}
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
