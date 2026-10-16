import React, { useState } from 'react';
import { Language, Announcement } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { ANNOUNCEMENTS, TESTIMONIALS, LEADERSHIP_TEAM, SACCO_IMAGES, SACCO_INFO } from '../data/saccoData';
import { ShieldCheck, Calendar, ArrowRight, UserCheck, X, Phone, Mail } from 'lucide-react';
import { ImigongoRibbon } from './ImigongoPattern';

interface GovernanceAndNewsProps {
  currentLang: Language;
  announcements?: Announcement[];
  isAdmin?: boolean;
  onOpenAdminConsole?: () => void;
}

export const GovernanceAndNews: React.FC<GovernanceAndNewsProps> = ({
  currentLang,
  announcements = ANNOUNCEMENTS,
  isAdmin = false,
  onOpenAdminConsole,
}) => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="announcements" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 lg:space-y-24">
        {/* Section 1: Member Stories & Social Proof */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
              UBUMWE SACCO GAKENKE · Community Impact
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight" style={{ textWrap: 'balance' }}>
              {t.governance.storiesTitle}
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Real accounts of agricultural transformation and retail expansion from Gakenke members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors relative"
              >
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-slate-700">
                    {item.metric}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    "{currentLang === 'en' ? item.quoteEn : item.quoteRw}"
                  </blockquote>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {currentLang === 'en' ? item.roleEn : item.roleRw}
                      </p>
                    </div>
                    <UserCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Official Announcements & News for UBUMWE SACCO GAKENKE */}
        <div id="news" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Governance Assembly Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-lg bg-slate-900 aspect-[4/3]">
              <img
                src={SACCO_IMAGES.governance}
                alt="Ubumwe SACCO Gakenke Annual General Meeting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="mt-3 text-xs text-slate-500 text-center">
              Cooperative Governance Assembly · 100% Democratic Member Representation
            </div>
          </div>

          {/* Right Column: Latest Notices & Announcements (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase">
                  Official Bulletins &amp; Press
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {currentLang === 'en' ? 'News · UBUMWE SACCO GAKENKE' : 'Amakuru · UBUMWE SACCO GAKENKE'}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Direct inquiries: <span className="font-semibold text-slate-900">{SACCO_INFO.phone}</span> · <span className="text-emerald-700 font-semibold">{SACCO_INFO.email}</span>
                </p>
              </div>

              {isAdmin && onOpenAdminConsole && (
                <button
                  type="button"
                  onClick={onOpenAdminConsole}
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold shrink-0"
                >
                  Manage Bulletins
                </button>
              )}
            </div>

            <div className="space-y-3">
              {announcements.map((ann) => (
                <div
                  key={ann.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-500/50 transition-all shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{ann.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[10px]">
                        {ann.category.replace('_', ' ')}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {currentLang === 'en' ? ann.titleEn : ann.titleRw}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {currentLang === 'en' ? ann.summaryEn : ann.summaryRw}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedAnnouncement(ann)}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{t.governance.learnMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Announcement Detail Modal */}
        {selectedAnnouncement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>OFFICIAL NOTICE · {selectedAnnouncement.date}</span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 pr-8">
                {currentLang === 'en' ? selectedAnnouncement.titleEn : selectedAnnouncement.titleRw}
              </h3>

              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentLang === 'en' ? selectedAnnouncement.contentEn : selectedAnnouncement.contentRw}
              </div>

              <div className="mt-4 p-3 bg-slate-100 rounded-xl text-xs flex flex-wrap items-center justify-between gap-2 text-slate-700">
                <span className="flex items-center gap-1 font-mono-numbers">
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{SACCO_INFO.phone}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{SACCO_INFO.email}</span>
                </span>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <span>By Order of the Board of Directors</span>
                <button
                  type="button"
                  onClick={() => setSelectedAnnouncement(null)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg font-bold text-xs"
                >
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Imigongo skeleton ribbon connecting to footer */}
      <div className="mt-16">
        <ImigongoRibbon height={18} variant="light" bordered={true} />
      </div>
    </section>
  );
};
