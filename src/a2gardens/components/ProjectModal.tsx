import React, { useEffect, useState } from 'react';
import { Project, PageType } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { X, MapPin, Maximize2, Compass, Calendar, CheckCircle2, ArrowRight, Sprout, Layers, Quote } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProjectForContact?: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProjectForContact,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'before-after' | 'botanicals' | 'materials'>('before-after');
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl bg-[#0b100d] border border-[#1b3323] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-7 border-b border-[#16271c] bg-[#080d0a]/90 sticky top-0 z-20">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#13281c] text-[#3ea637] border border-[#1f4a30]">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-[#8ca394] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#3ea637]" />
                {project.location}
              </span>
            </div>
            <h2
              id="modal-project-title"
              className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight"
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-[#9cb2a3] hover:text-white hover:bg-[#152319] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#3ea637]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-[#16271c] bg-[#070b08] px-5 sm:px-7 gap-4 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('before-after')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'before-after'
                ? 'border-[#3ea637] text-[#3ea637]'
                : 'border-transparent text-[#859c8d] hover:text-white'
            }`}
          >
            Transformation Slider
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#3ea637] text-[#3ea637]'
                : 'border-transparent text-[#859c8d] hover:text-white'
            }`}
          >
            Architectural Solution
          </button>
          <button
            onClick={() => setActiveTab('botanicals')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'botanicals'
                ? 'border-[#3ea637] text-[#3ea637]'
                : 'border-transparent text-[#859c8d] hover:text-white'
            }`}
          >
            Botanical Palette ({project.plantPalette.length})
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'materials'
                ? 'border-[#3ea637] text-[#3ea637]'
                : 'border-transparent text-[#859c8d] hover:text-white'
            }`}
          >
            Materials & Craft
          </button>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-sm text-[#ccd9cf]">
          {/* TAB 1: Transformation Slider */}
          {activeTab === 'before-after' && (
            <div className="space-y-6">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                beforeLabel={project.beforeLabel}
                afterLabel={project.afterLabel}
                beforeObjectPosition={project.beforeObjectPosition}
                afterObjectPosition={project.afterObjectPosition}
                aspectRatio="aspect-[16/9]"
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#0e1611] p-4 rounded-xl border border-[#18291f]">
                <div>
                  <span className="text-[#7d9385] block mb-0.5">Commune</span>
                  <span className="font-semibold text-white">{project.commune}</span>
                </div>
                <div>
                  <span className="text-[#7d9385] block mb-0.5">Surface Area</span>
                  <span className="font-semibold text-white">{project.surfaceArea}</span>
                </div>
                <div>
                  <span className="text-[#7d9385] block mb-0.5">Sun Orientation</span>
                  <span className="font-semibold text-white">{project.orientation}</span>
                </div>
                <div>
                  <span className="text-[#7d9385] block mb-0.5">Completion</span>
                  <span className="font-semibold text-white">{project.year}</span>
                </div>
              </div>

              <p className="text-[#9cb2a3] leading-relaxed">
                {project.summary}
              </p>

              {/* Gallery thumbnails */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-[#82998a]">
                    Project Angles
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {project.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg overflow-hidden border border-[#1c2e22] aspect-[4/3] bg-[#0a0f0c]"
                      >
                        <img
                          src={img}
                          alt={`${project.title} detail angle ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Architectural Solution */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#121c16] p-5 rounded-xl border border-[#1f3827]">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <h3 className="text-sm uppercase tracking-wide">The Urban Challenge</h3>
                  </div>
                  <p className="text-sm text-[#b2c4b8] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="bg-[#0e2116] p-5 rounded-xl border border-[#1e4a2e]">
                  <div className="flex items-center gap-2 text-[#3ea637] font-semibold mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#3ea637]" />
                    <h3 className="text-sm uppercase tracking-wide">Architectural Response</h3>
                  </div>
                  <p className="text-sm text-[#c8d9ce] leading-relaxed">
                    {project.architecturalSolution}
                  </p>
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-wider text-[#82998a]">
                  Technical & Spatial Highlights
                </h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#0e1611] border border-[#1b2b20] flex items-start gap-2.5 text-xs text-[#b8ccbf]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3ea637] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              {project.testimonial && (
                <div className="p-5 rounded-xl bg-gradient-to-r from-[#0d1c13] to-[#0a120e] border border-[#1d3a28] relative">
                  <Quote className="w-8 h-8 text-[#3ea637]/20 absolute top-4 right-4" />
                  <p className="italic text-sm text-[#e2eee6] mb-3 relative z-10 leading-relaxed">
                    "{project.testimonial.quote}"
                  </p>
                  <p className="text-xs text-[#3ea637] font-medium">
                    — {project.testimonial.client}, {project.testimonial.neighborhood}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Botanicals */}
          {activeTab === 'botanicals' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#8ca394]">
                  Specially selected for Brussels urban micro-climates, shade tolerances, and container vitality.
                </p>
                <span className="text-xs font-mono text-[#3ea637] bg-[#12281a] px-2.5 py-1 rounded border border-[#1f422d]">
                  Four-Season Architectural Green
                </span>
              </div>

              <div className="divide-y divide-[#18291f] border border-[#18291f] rounded-xl overflow-hidden bg-[#0a100c]">
                {project.plantPalette.map((plant, idx) => (
                  <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#0f1712] transition-colors">
                    <div>
                      <div className="flex items-center gap-2">
                        <Sprout className="w-4 h-4 text-[#3ea637]" />
                        <h4 className="font-semibold text-white text-sm">{plant.name}</h4>
                      </div>
                      <p className="text-xs font-mono italic text-[#7e9988] mt-0.5">
                        {plant.botanicalName}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="px-2.5 py-1 rounded bg-[#132219] text-[#a1b8aa] border border-[#1d3526]">
                        {plant.sunlight}
                      </span>
                      <span className="text-[#34d399] font-medium">
                        {plant.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Materials */}
          {activeTab === 'materials' && (
            <div className="space-y-4">
              <p className="text-xs text-[#8ca394]">
                Rooted in authentic natural materials, tactile warmth, and the perfect harmony of rest and everyday functionality.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {project.materials.map((mat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0e1611] border border-[#1a2d21] flex items-start gap-3"
                  >
                    <Layers className="w-5 h-5 text-[#3ea637] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">{mat}</h4>
                      <p className="text-xs text-[#849a8c] mt-1">
                        Selected for enduring weather resistance, zero toxic plastics, and effortless maintenance across all four seasons.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-[#16271c] bg-[#070c09] flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0">
          <div className="text-xs text-[#8ca394] text-center sm:text-left">
            Have a <span className="text-white font-medium">{project.categoryLabel.toLowerCase()}</span> project in Brussels?
          </div>
          <button
            onClick={() => {
              if (onSelectProjectForContact) {
                onSelectProjectForContact(project);
              }
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#3ea637] text-[#061e12] font-semibold text-xs uppercase tracking-wider hover:bg-[#34d399] transition-all shadow-lg shadow-[#3ea637]/20 active:scale-95"
          >
            <span>Inquire About Similar Transformation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
