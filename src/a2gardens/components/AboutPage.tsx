import React from 'react';
import { PageType } from '../types';
import { Compass, Leaf, Shield, Award, MapPin, Mail, ArrowRight, Check, Trees, Droplets, Layers } from 'lucide-react';
import { getAssetPath } from '../../lib/utils';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102418] border border-[#1d402b] text-[#34d399] text-xs font-mono uppercase">
          <span>About A2Gardens</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          A Sanctuary Balancing Rest & Functionality
        </h1>
        <p className="text-base sm:text-lg text-[#9cb2a3] leading-relaxed">
          In a busy city life, your small piece of nature that you can call your own should be the perfect balance between rest and functionality.
        </p>
      </div>

      {/* Philosophy & The Brussels Urban Context */}
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-sm text-[#a2b8aa] leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
            Designed for Modern City Living
          </h2>
          <p>
            Urban life is vibrant and fast-paced, but it demands an authentic counterweight. When you step outside onto your terrace, garden, or balcony, the atmosphere should instantly shift: visual noise gives way to gentle foliage, clean lines, and deep physical calm.
          </p>
          <p>
            Yet true calm cannot exist if an outdoor space is difficult to maintain or awkward to use. A space that requires endless upkeep or lacks practical comfort quickly becomes an added chore. We design your private piece of nature with equal reverence for quiet relaxation and everyday utility: comfortable ergonomics, sheltered dining, hidden storage, and self-regulating micro-irrigation.
          </p>
          <p>
            <strong className="text-white font-semibold">A2Gardens</strong> was established by <strong className="text-[#3ea637] font-semibold">Anton Arnauts</strong> to create this exact equilibrium. We bring together architectural spatial discipline, durable natural materials, and resilient botanical palettes to sculpt spaces that decompress your mind while effortlessly serving daily life.
          </p>

          <div className="pt-4 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0c120e] border border-[#1b2f21]">
              <div className="flex items-center gap-2 text-[#3ea637] font-semibold mb-1">
                <Trees className="w-4 h-4" />
                <span>Rest & Sensory Calm</span>
              </div>
              <p className="text-xs text-[#8ca394]">
                Acoustic timber buffering, soft rustling ornamental grasses, and soothing natural stone that invite you to slow down.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0c120e] border border-[#1b2f21]">
              <div className="flex items-center gap-2 text-[#3ea637] font-semibold mb-1">
                <Droplets className="w-4 h-4" />
                <span>Effortless Functionality</span>
              </div>
              <p className="text-xs text-[#8ca394]">
                Automated root-level watering, durable non-slip surfaces, and low-maintenance planting adapted to modern routines.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Card / Founder Profile Box */}
        <div className="lg:col-span-5 bg-[#0b100d] border border-[#1c3324] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
          <div className="flex items-center gap-4 border-b border-[#182a1f] pb-6">
            <img
              src={getAssetPath('a2gardens/images/logoa2gardernspng.png')}
              alt="A2Gardens"
              className="w-16 h-16 rounded-2xl object-contain bg-black border border-[#3ea637]/40 p-1 shadow-lg"
            />
            <div>
              <h3 className="text-lg font-bold font-display text-white">Anton Arnauts</h3>
              <p className="text-xs text-[#3ea637] font-medium">Founder & Principal Garden Architect</p>
              <p className="text-[11px] text-[#789182] font-mono mt-0.5">A2Gardens & A2Trails</p>
            </div>
          </div>

          <div className="space-y-3 text-xs text-[#95ab9d] leading-relaxed">
            <p className="italic text-[#c2d4c8]">
              "In a busy city life, your outdoor space shouldn't demand constant work—it should restore your energy while making every morning coffee and evening dinner feel effortless."
            </p>
            <p>
              Anton crafts each outdoor project as a tailored architectural living room. Every material, shadow line, and evergreen planting is calibrated to deliver both immediate peace of mind and long-term ease of living.
            </p>
          </div>

          <div className="pt-2 border-t border-[#182a1f] space-y-2 text-xs">
            <div className="flex items-center justify-between text-[#8aa192]">
              <span>Direct Studio Email</span>
              <a
                href="mailto:antonarnauts@a2trails.com"
                className="text-[#3ea637] hover:underline font-mono"
              >
                antonarnauts@a2trails.com
              </a>
            </div>
            <div className="flex items-center justify-between text-[#8aa192]">
              <span>Focus</span>
              <span className="text-white">Urban Terraces, Gardens & Balconies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Materials & Craftsmanship Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#3ea637]">
            Honest Materials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Natural Enduring Materials & Timeless Restraint
          </h2>
          <p className="text-sm text-[#8da495]">
            We select materials that age with organic grace across four seasons, requiring minimal upkeep and zero synthetic plastics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0c120e] p-6 rounded-xl border border-[#192b1e] space-y-3">
            <span className="text-xs font-mono text-[#3ea637]">01 / STONE</span>
            <h3 className="text-base font-bold text-white">Architectural Bluestone</h3>
            <p className="text-xs text-[#8ca394] leading-relaxed">
              Honed or flamed natural bluestone paving. Highly tactile, naturally slip-resistant, and developing a deep charcoal patina that stays cool underfoot.
            </p>
          </div>

          <div className="bg-[#0c120e] p-6 rounded-xl border border-[#192b1e] space-y-3">
            <span className="text-xs font-mono text-[#3ea637]">02 / TIMBER</span>
            <h3 className="text-base font-bold text-white">Thermo-Treated Ash & Larch</h3>
            <p className="text-xs text-[#8ca394] leading-relaxed">
              Chemical-free thermal modification gives European hardwoods 25+ year stability with splinter-free barefoot comfort and zero rot.
            </p>
          </div>

          <div className="bg-[#0c120e] p-6 rounded-xl border border-[#192b1e] space-y-3">
            <span className="text-xs font-mono text-[#3ea637]">03 / JOINERY</span>
            <h3 className="text-base font-bold text-white">Bespoke Powder-Coated Steel</h3>
            <p className="text-xs text-[#8ca394] leading-relaxed">
              Precision CNC-formed planter modules, privacy louvers, and benches in matte charcoal (RAL 9005) that maximize floor space and visual lightness.
            </p>
          </div>

          <div className="bg-[#0c120e] p-6 rounded-xl border border-[#192b1e] space-y-3">
            <span className="text-xs font-mono text-[#3ea637]">04 / ENGINEERING</span>
            <h3 className="text-base font-bold text-white">Ultralight Substrates</h3>
            <p className="text-xs text-[#8ca394] leading-relaxed">
              Engineered mineral substrates using expanded clay and pumice, reducing soil weight by up to 50% for high-rise rooftop safety and moisture retention.
            </p>
          </div>
        </div>
      </div>

      {/* Service Area Grid */}
      <div className="bg-[#0b100d] border border-[#1b2f21] rounded-2xl p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold font-display text-white">
              Primary Brussels Service Communes
            </h3>
            <p className="text-xs text-[#8ca394] mt-1">
              We provide prompt on-site surveys and continuous project supervision across:
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3ea637] text-[#061e12] font-semibold text-xs uppercase tracking-wider hover:bg-[#34d399] transition-all self-start sm:self-auto"
          >
            <span>Book Brussels Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
          {[
            { name: 'Ixelles / Elsene', note: 'Flagey, Châtelain, Tenbosch' },
            { name: 'Uccle / Ukkel', note: 'Observatoire, Churchill, Fort Jaco' },
            { name: 'Saint-Gilles / Sint-Gillis', note: 'Maison de Maître courtyards' },
            { name: 'Brussels City Center', note: 'Sablon, Dansaert, Marolles' },
            { name: 'Woluwe-Saint-Pierre', note: 'Montgomery, Parvis, Stockel' },
            { name: 'Woluwe-Saint-Lambert', note: 'Tomberg, Georges Henri' },
            { name: 'Etterbeek', note: 'European Quarter, La Chasse' },
            { name: 'Forest & Watermael', note: 'Altitude 100, Coin du Balai' },
          ].map((area, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-[#101712] border border-[#16271c]">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <MapPin className="w-3 h-3 text-[#3ea637]" />
                <span>{area.name}</span>
              </div>
              <p className="text-[11px] text-[#7b9283] mt-0.5">{area.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
