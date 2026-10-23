import React, { useState, useEffect } from 'react';
import { Project, ContactFormData } from '../types';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Send, ArrowUpRight, Clock, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactPageProps {
  preselectedProject?: Project | null;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedProject }) => {
  const [formspreeState, handleFormspreeSubmit] = useForm('meaaqwrg');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: preselectedProject?.category || 'terrace',
    location: preselectedProject?.commune || 'Ixelles',
    area: preselectedProject?.surfaceArea || '',
    budget: '€15,000 - €30,000',
    timeline: 'Spring 2025',
    message: preselectedProject
      ? `Hello Anton, I am interested in a project similar to "${preselectedProject.title}" (${preselectedProject.surfaceArea}, ${preselectedProject.location}). I would like to schedule an on-site consultation.`
      : '',
  });

  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProject) {
      setFormData((prev) => ({
        ...prev,
        projectType: preselectedProject.category,
        location: preselectedProject.commune,
        area: preselectedProject.surfaceArea,
        message: `Hello Anton, I am interested in a project similar to "${preselectedProject.title}" (${preselectedProject.surfaceArea}, ${preselectedProject.location}). I would like to schedule an on-site consultation.`,
      }));
    }
  }, [preselectedProject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    // Basic validation
    if (!formData.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setFormError('Please enter a brief message describing your garden, terrace, or balcony.');
      return;
    }

    await handleFormspreeSubmit(e);
  };

  const directMailtoUrl = `mailto:antonarnauts@a2trails.com?subject=${encodeURIComponent(
    `[A2Gardens Inquiry] ${formData.name} - ${formData.projectType.toUpperCase()} in ${formData.location}`
  )}&body=${encodeURIComponent(
    `Hi Anton,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject: ${formData.projectType}\nLocation: ${formData.location}\nArea: ${formData.area}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}\n`
  )}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Title */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102418] border border-[#1d402b] text-[#34d399] text-xs font-mono uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Automated Project Inquiries</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Request an Architectural Consultation
        </h1>
        <p className="text-base text-[#9cb2a3] leading-relaxed">
          Tell us about your outdoor space in Brussels. Submissions are processed through our automated notification dispatch directly to architect <strong className="text-[#3ea637] font-medium">Anton Arnauts</strong> at <strong className="text-white">antonarnauts@a2trails.com</strong>.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: The Interactive Form */}
        <div className="lg:col-span-7 bg-[#0b100d] border border-[#1b3022] rounded-2xl p-6 sm:p-8 shadow-2xl">
          {formspreeState.succeeded ? (
            /* SUCCESS STATE WITH AUDIT RECEIPT */
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="p-6 rounded-xl bg-[#0d2116] border border-[#1b4b2e] space-y-3">
                <div className="flex items-center gap-3 text-[#3ea637]">
                  <CheckCircle className="w-8 h-8 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Project Inquiry Transmitted!
                    </h3>
                    <p className="text-xs text-[#95cbab]">
                      Thank you, {formData.name || 'valued client'}. Your inquiry has been delivered directly to Anton Arnauts via Formspree.
                    </p>
                  </div>
                </div>

                <div className="divide-y divide-[#183925] border-t border-[#183925] pt-3 mt-3 text-xs space-y-2">
                  <div className="flex justify-between items-center text-[#a1c4af] pt-2">
                    <span className="text-[#6d967e]">Notification Recipient:</span>
                    <span className="font-mono text-[#3ea637] font-semibold">antonarnauts@a2trails.com</span>
                  </div>
                  <div className="flex justify-between items-center text-[#a1c4af] pt-2">
                    <span className="text-[#6d967e]">Delivery Channel:</span>
                    <span className="font-mono text-white">Formspree (meaaqwrg)</span>
                  </div>
                  <div className="flex justify-between items-center text-[#a1c4af] pt-2">
                    <span className="text-[#6d967e]">Expected Review:</span>
                    <span className="text-white font-medium">Within 24 Hours</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0e1611] p-5 rounded-xl border border-[#1a2d21] space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#82998a]">
                  Next Steps in Your Brussels Project
                </h4>
                <ol className="text-xs text-[#9eb4a6] space-y-2 list-decimal list-inside leading-relaxed">
                  <li>Anton Arnauts will review your space dimensions, orientation, and Brussels commune requirements.</li>
                  <li>We will contact you via email or phone to arrange a 45-minute on-site micro-climate and solar survey.</li>
                  <li>Following the visit, you will receive our preliminary conceptual layout.</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={directMailtoUrl}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#122419] border border-[#1f4a30] text-[#3ea637] hover:text-white hover:bg-[#1a3826] transition-all text-xs font-semibold"
                >
                  <span>Open in Your Email App</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      projectType: 'terrace',
                      location: 'Ixelles',
                      area: '',
                      budget: '€15,000 - €30,000',
                      timeline: 'Spring 2025',
                      message: '',
                    });
                    window.location.reload();
                  }}
                  className="py-3 px-5 rounded-lg bg-[#1b2b21] hover:bg-[#253d2f] text-white transition-colors text-xs font-semibold cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* THE ACTIVE FORM */
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {preselectedProject && (
                <div className="p-3.5 rounded-lg bg-[#102418] border border-[#1e482e] flex items-center justify-between text-xs text-[#a9c9b4]">
                  <span>Prefilled from project: <strong>{preselectedProject.title}</strong></span>
                  <span className="text-[10px] font-mono uppercase bg-[#183a25] text-[#34d399] px-2 py-0.5 rounded">
                    {preselectedProject.categoryLabel}
                  </span>
                </div>
              )}

              {formError && (
                <div className="p-3.5 rounded-lg bg-red-950/50 border border-red-800/80 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Row 1: Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-medium text-[#c0d4c6]">
                    Your Name <span className="text-[#3ea637]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Marc & Sophie Vandamme"
                    className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-[#5d7767] focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-medium text-[#c0d4c6]">
                    Email Address <span className="text-[#3ea637]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sophie@example.be"
                    className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-[#5d7767] focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637]"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Project Type */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-medium text-[#c0d4c6]">
                    Phone Number <span className="text-[#647c6e]">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+32 470 00 00 00"
                    className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-[#5d7767] focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="projectType" className="block text-xs font-medium text-[#c0d4c6]">
                    Project Category <span className="text-[#3ea637]">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637]"
                  >
                    <option value="city_garden">Townhouse City Garden / Patio</option>
                    <option value="terrace">Ground-Floor Terrace / Courtyard</option>
                    <option value="balcony">Historic or Modern Balcony</option>
                    <option value="rooftop">Rooftop Gardens</option>
                    <option value="villa_garden">Villa Gardens</option>
                    <option value="other">Other Urban Outdoor Space</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Brussels Commune & Approximate Area */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="location" className="block text-xs font-medium text-[#c0d4c6]">
                    Brussels Commune <span className="text-[#3ea637]">*</span>
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637] cursor-pointer"
                  >
                    <option value="Anderlecht">Anderlecht</option>
                    <option value="Auderghem">Auderghem / Oudergem</option>
                    <option value="Berchem-Sainte-Agathe">Berchem-Sainte-Agathe / Sint-Agatha-Berchem</option>
                    <option value="Brussels City">Brussels City / Stad Brussel</option>
                    <option value="Etterbeek">Etterbeek</option>
                    <option value="Evere">Evere</option>
                    <option value="Forest">Forest / Vorst</option>
                    <option value="Ganshoren">Ganshoren</option>
                    <option value="Ixelles">Ixelles / Elsene</option>
                    <option value="Jette">Jette</option>
                    <option value="Koekelberg">Koekelberg</option>
                    <option value="Molenbeek-Saint-Jean">Molenbeek-Saint-Jean / Sint-Jans-Molenbeek</option>
                    <option value="Saint-Gilles">Saint-Gilles / Sint-Gillis</option>
                    <option value="Saint-Josse-ten-Noode">Saint-Josse-ten-Noode / Sint-Joost-ten-Node</option>
                    <option value="Schaerbeek">Schaerbeek / Schaarbeek</option>
                    <option value="Uccle">Uccle / Ukkel</option>
                    <option value="Watermael-Boitsfort">Watermael-Boitsfort / Watermaal-Bosvoorde</option>
                    <option value="Woluwe-Saint-Lambert">Woluwe-Saint-Lambert / Sint-Lambrechts-Woluwe</option>
                    <option value="Woluwe-Saint-Pierre">Woluwe-Saint-Pierre / Sint-Pieters-Woluwe</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="area" className="block text-xs font-medium text-[#c0d4c6]">
                    Approximate Area <span className="text-[#647c6e]">(m²)</span>
                  </label>
                  <input
                    id="area"
                    name="area"
                    type="text"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="e.g. 35 m², 120 m²"
                    className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-[#5d7767] focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637]"
                  />
                </div>
              </div>

              {/* Row 4: Budget & Timeline */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="budget" className="block text-xs font-medium text-[#c0d4c6]">
                    Estimated Investment Frame
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637]"
                  >
                    <option value="€5,000 - €15,000">€5,000 - €15,000 (Balcony / Refresh)</option>
                    <option value="€15,000 - €30,000">€15,000 - €30,000 (Full Terrace Architecture)</option>
                    <option value="€30,000 - €60,000">€30,000 - €60,000 (Complete City Garden / Bluestone)</option>
                    <option value="€60,000+">€60,000+ (Master Landscape / Penthouse Sky)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="timeline" className="block text-xs font-medium text-[#c0d4c6]">
                    Desired Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637]"
                  >
                    <option value="Immediate / Next 4 Weeks">Immediate / Next 4 Weeks</option>
                    <option value="Spring 2025">Spring 2025</option>
                    <option value="Summer 2025">Summer 2025</option>
                    <option value="Autumn 2025 / Flexible">Autumn 2025 / Flexible</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-medium text-[#c0d4c6]">
                  Your Vision or Requirements <span className="text-[#3ea637]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current outdoor space and wish list (paving, greenery, privacy, acoustic calm)..."
                  className="w-full bg-[#101913] border border-[#1b2d21] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-[#5d7767] focus:outline-none focus:border-[#3ea637] focus:ring-1 focus:ring-[#3ea637] leading-relaxed resize-none"
                />
              </div>

              {/* Automated email disclaimer */}
              <div className="flex items-center justify-between text-[11px] text-[#718a7a] pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3ea637]" />
                  <span>Automated notification to antonarnauts@a2trails.com</span>
                </span>
                <span>Response time: &lt; 24 hours</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formspreeState.submitting}
                id="contact-submit-btn"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#3ea637] hover:bg-[#34d399] text-[#061e12] font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#3ea637]/20 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {formspreeState.submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#061e12] border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting to Formspree & Anton Arnauts...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: Studio Details, Direct Contact & Verification */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Studio Card */}
          <div className="bg-[#0b100d] border border-[#1b2f21] rounded-2xl p-6 sm:p-7 space-y-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#3ea637]">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-1">
                A2Gardens Brussels Studio
              </h3>
              <p className="text-xs text-[#8ca394] mt-1">
                Principal Garden Architect: Anton Arnauts
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0f1712] border border-[#182a1f]">
                <Mail className="w-4 h-4 text-[#3ea637] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#7d9686] block text-[11px]">Email</span>
                  <a
                    href="mailto:antonarnauts@a2trails.com"
                    className="text-white hover:text-[#3ea637] font-mono font-medium transition-colors break-all"
                  >
                    antonarnauts@a2trails.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0f1712] border border-[#182a1f]">
                <MapPin className="w-4 h-4 text-[#3ea637] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#7d9686] block text-[11px]">Registered Office & Studio</span>
                  <p className="text-white font-medium">
                    Mariemontkaai 15, 1080 Brussel, Belgium
                  </p>
                  <span className="text-[11px] text-[#71897b] font-mono">VAT Number: BE1024.359.194</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0f1712] border border-[#182a1f]">
                <Clock className="w-4 h-4 text-[#3ea637] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#7d9686] block text-[11px]">Consultation Hours</span>
                  <p className="text-white font-medium">08:00 – 20:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Process Assurance */}
          <div className="bg-[#0b100d] border border-[#1b2f21] rounded-2xl p-6 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#3ea637]">
              Consultation Guarantee
            </h4>
            <ul className="text-xs text-[#95ab9d] space-y-2.5">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#3ea637] shrink-0 mt-0.5" />
                <span>On-site solar trajectory & micro-drainage evaluation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#3ea637] shrink-0 mt-0.5" />
                <span>Structural weight capacity verification for balconies & roofs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#3ea637] shrink-0 mt-0.5" />
                <span>Natural stone samples, timber textures, and botanical moodboards</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#3ea637] shrink-0 mt-0.5" />
                <span>Transparent itemized line-by-line architectural estimates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
