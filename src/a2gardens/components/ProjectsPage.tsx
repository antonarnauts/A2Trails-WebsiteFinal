import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory, PageType } from '../types';
import { BRUSSELS_PROJECTS } from '../data/projects';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Search, Filter, MapPin, ArrowRight, Eye, Sparkles, Layers, Compass, Check } from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onNavigateToContactWithProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onNavigateToContactWithProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCommune, setActiveCommune] = useState<string>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'terrace', label: 'Terraces & Patios' },
    { id: 'city_garden', label: 'City Gardens' },
    { id: 'balcony', label: 'Urban Balconies' },
    { id: 'rooftop', label: 'Rooftops' },
  ];

  const communes = ['all', 'Ixelles', 'Uccle', 'Saint-Gilles', 'Brussels Center', 'Woluwe-Saint-Pierre'];

  const filteredProjects = useMemo(() => {
    return BRUSSELS_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const matchesCommune =
        activeCommune === 'all' ||
        project.commune.toLowerCase().includes(activeCommune.toLowerCase());
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesCommune && matchesSearch;
    });
  }, [selectedCategory, activeCommune, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102418] border border-[#1d402b] text-[#34d399] text-xs font-mono uppercase">
          <span>Transformation Archive</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Brussels Outdoor Transformations
        </h1>
        <p className="text-base text-[#9cb2a3] leading-relaxed">
          Explore our completed garden architecture commissions across Brussels. Each project documents the original constraints, the before-and-after spatial resolution, and the bespoke material palette.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#0b100d] border border-[#1a2d21] rounded-2xl p-4 sm:p-6 space-y-5">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? BRUSSELS_PROJECTS.length
                  : BRUSSELS_PROJECTS.filter((p) => p.category === cat.id).length;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#3ea637] text-[#061e12] font-semibold shadow-sm'
                      : 'bg-[#121c16] text-[#93ab9c] hover:text-white border border-[#1b2b20]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-[#082a1a] text-[#34d399]' : 'bg-[#1a2b20] text-[#6b8274]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#688272] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stone, plants, commune..."
              className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg pl-9.5 pr-4 py-2 text-xs text-white placeholder-[#688272] focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8ca394] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Commune quick chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#15231a] text-xs text-[#849b8d]">
          <span className="text-[11px] font-mono uppercase text-[#5a7162] mr-1">
            Brussels Commune:
          </span>
          {communes.map((commune) => (
            <button
              key={commune}
              onClick={() => setActiveCommune(commune)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                activeCommune === commune
                  ? 'bg-[#13281c] text-[#3ea637] border border-[#1f4a30]'
                  : 'bg-transparent text-[#7e9686] hover:text-white'
              }`}
            >
              {commune === 'all' ? 'All Communes' : commune}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-[#0c120e] rounded-2xl border border-[#1a2d21] space-y-3">
          <p className="text-base text-[#9cb2a3]">No projects found matching your filter criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setActiveCommune('all');
            }}
            className="px-4 py-2 rounded-lg bg-[#3ea637] text-[#061e12] text-xs font-semibold uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0b100d] border border-[#1b3022] rounded-2xl overflow-hidden hover:border-[#3ea637]/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              {/* Interactive Before/After Comparison */}
              <div className="p-4 sm:p-5 pb-0">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeLabel={project.beforeLabel}
                  afterLabel={project.afterLabel}
                  beforeObjectPosition={project.beforeObjectPosition}
                  afterObjectPosition={project.afterObjectPosition}
                  aspectRatio="aspect-[16/10]"
                />
              </div>

              {/* Project Card Content */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#122419] text-[#3ea637] border border-[#1d432b]">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs text-[#8ca394] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#3ea637]" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#3ea637] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#9cb2a3] leading-relaxed mt-2">
                    {project.summary}
                  </p>

                  {/* Materials Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#16271c]">
                    {project.materials.slice(0, 3).map((mat, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#111c15] text-[#869f90] border border-[#192b20]"
                      >
                        {mat}
                      </span>
                    ))}
                    {project.materials.length > 3 && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-[#111c15] text-[#5e7768]">
                        +{project.materials.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#16271c] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#3ea637] transition-colors py-1"
                  >
                    <span>Inspect Architectural Blueprints & Botanicals</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigateToContactWithProject(project)}
                    className="p-2 rounded-lg bg-[#112317] hover:bg-[#3ea637] text-[#3ea637] hover:text-[#061e12] border border-[#1f402c] transition-all"
                    title="Inquire about similar transformation"
                    aria-label={`Inquire about ${project.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
