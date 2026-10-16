import React, { useState } from 'react';
import { Language, InstitutionMoment } from '../types';
import { SACCO_INFO } from '../data/saccoData';
import {
  Sparkles,
  Camera,
  Plus,
  Edit2,
  Trash2,
  Check,
  X,
  Calendar,
  Trophy,
  PiggyBank,
  Building2,
  Users,
  GraduationCap,
  Eye,
  Lock,
} from 'lucide-react';
import { ImigongoRibbon } from './ImigongoPattern';
import { ImageUploader } from './ImageUploader';

interface GalleryProps {
  currentLang: Language;
  moments: InstitutionMoment[];
  isAdmin: boolean;
  onAddMoment: (moment: Omit<InstitutionMoment, 'id'>) => void;
  onUpdateMoment: (id: string, updated: Partial<InstitutionMoment>) => void;
  onDeleteMoment: (id: string) => void;
  onOpenManagerLogin?: () => void;
}

const PRESET_MOMENT_IMAGES = [
  {
    label: 'Dividend Distribution Celebration',
    url: '/src/assets/images/moment_dividend_celebration_1791994900250.jpg',
  },
  {
    label: 'National Excellence Award Trophy',
    url: '/src/assets/images/moment_cooperative_award_1791994900000.jpg',
  },
  {
    label: 'Modern Banking Hall Launch',
    url: '/src/assets/images/hero_sacco_banking_1791989969362.jpg',
  },
  {
    label: 'Coffee Farmers Harvest Support',
    url: '/src/assets/images/farmers_cooperative_1791989969904.jpg',
  },
  {
    label: 'Governance Assembly Delegates',
    url: '/src/assets/images/community_governance_1791989970347.jpg',
  },
  {
    label: 'Retail & Women Entrepreneurs',
    url: '/src/assets/images/entrepreneur_business_1791989970089.jpg',
  },
];

export const Gallery: React.FC<GalleryProps> = ({
  currentLang,
  moments,
  isAdmin,
  onAddMoment,
  onUpdateMoment,
  onDeleteMoment,
  onOpenManagerLogin,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeMomentDetail, setActiveMomentDetail] = useState<InstitutionMoment | null>(null);

  // CRUD Modal State
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingMoment, setEditingMoment] = useState<InstitutionMoment | null>(null);

  // Form Fields
  const [titleEn, setTitleEn] = useState('');
  const [titleRw, setTitleRw] = useState('');
  const [eventDate, setEventDate] = useState('October 2026');
  const [category, setCategory] = useState<InstitutionMoment['category']>('award');
  const [imageUrl, setImageUrl] = useState('/src/assets/images/moment_cooperative_award_1791994900000.jpg');
  const [captionEn, setCaptionEn] = useState('');
  const [captionRw, setCaptionRw] = useState('');

  const filteredMoments = moments.filter((m) => {
    if (selectedCategory === 'all') return true;
    return m.category === selectedCategory;
  });

  const openCreateModal = () => {
    setEditingMoment(null);
    setTitleEn('');
    setTitleRw('');
    setEventDate('Current Milestone');
    setCategory('award');
    setImageUrl('/src/assets/images/moment_cooperative_award_1791994900000.jpg');
    setCaptionEn('');
    setCaptionRw('');
    setIsFormModalOpen(true);
  };

  const openEditModal = (moment: InstitutionMoment) => {
    setEditingMoment(moment);
    setTitleEn(moment.titleEn);
    setTitleRw(moment.titleRw);
    setEventDate(moment.date);
    setCategory(moment.category);
    setImageUrl(moment.imageUrl);
    setCaptionEn(moment.captionEn);
    setCaptionRw(moment.captionRw);
    setIsFormModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleEn || !imageUrl) return;

    if (editingMoment) {
      onUpdateMoment(editingMoment.id, {
        titleEn,
        titleRw: titleRw || titleEn,
        date: eventDate,
        category,
        imageUrl,
        captionEn,
        captionRw: captionRw || captionEn,
      });
    } else {
      onAddMoment({
        titleEn,
        titleRw: titleRw || titleEn,
        date: eventDate,
        category,
        imageUrl,
        captionEn,
        captionRw: captionRw || captionEn,
      });
    }
    setIsFormModalOpen(false);
  };

  const getCategoryBadge = (cat: InstitutionMoment['category']) => {
    switch (cat) {
      case 'award':
        return {
          icon: <Trophy className="w-3.5 h-3.5 text-amber-500" />,
          label: currentLang === 'en' ? 'Excellence Award' : 'Igihembo cy\'Indashyikirwa',
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
        };
      case 'agm_dividend':
        return {
          icon: <PiggyBank className="w-3.5 h-3.5 text-emerald-600" />,
          label: currentLang === 'en' ? 'Dividends & AGM' : 'Inyungu & Inama Rusange',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        };
      case 'branch_opening':
        return {
          icon: <Building2 className="w-3.5 h-3.5 text-blue-600" />,
          label: currentLang === 'en' ? 'Branch & Digital Launch' : 'Gufungura Amashami',
          bg: 'bg-blue-50 text-blue-800 border-blue-200',
        };
      case 'community':
        return {
          icon: <Users className="w-3.5 h-3.5 text-purple-600" />,
          label: currentLang === 'en' ? 'Farmer & Community Payout' : 'Abahinzi & Umuryango',
          bg: 'bg-purple-50 text-purple-800 border-purple-200',
        };
      case 'training':
        return {
          icon: <GraduationCap className="w-3.5 h-3.5 text-teal-600" />,
          label: currentLang === 'en' ? 'Training & Graduation' : 'Amahugurwa',
          bg: 'bg-teal-50 text-teal-800 border-teal-200',
        };
      default:
        return {
          icon: <Sparkles className="w-3.5 h-3.5 text-slate-600" />,
          label: currentLang === 'en' ? 'Cooperative Moment' : 'Ibihe Byiza',
          bg: 'bg-slate-50 text-slate-800 border-slate-200',
        };
    }
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
              <Camera className="w-4 h-4" />
              <span>Memorable Milestones &amp; History</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
              {currentLang === 'en'
                ? 'Gallery · UBUMWE SACCO GAKENKE'
                : 'Amafoto y\'Ikigo · UBUMWE SACCO GAKENKE'}
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-3xl">
              {currentLang === 'en'
                ? 'Celebrating the proudest achievements in our institution: national excellence trophies, historic dividend payouts, modern banking launches, and farmer empowerment led by Board Director Wellarse and Manager Mbitsemunda Phocas.'
                : 'Ibyishimo n\'intambwe ikomeye koperative yacu imaze gutera: ibikombe by\'indashyikirwa, iminsi mikuru yo kugabana inyungu, gufungura ibiro bigezweho no gushyigikira abahinzi n\'aborozi bo muri Gakenke.'}
            </p>
          </div>

          {/* Action Button: Post Best Moment (Manager CRUD) */}
          {isAdmin && (
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={openCreateModal}
                className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Post New Best Moment</span>
              </button>
            </div>
          )}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {moments.map((moment) => {
            const badge = getCategoryBadge(moment.category);
            return (
              <div
                key={moment.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative"
              >

                <div>
                  {/* Photo Container with Zoom Effect */}
                  <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-900 cursor-pointer" onClick={() => setActiveMomentDetail(moment)}>
                    <img
                      src={moment.imageUrl}
                      alt={moment.titleEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md bg-white/90 shadow-xs ${badge.bg}`}>
                        {badge.icon}
                        <span>{badge.label}</span>
                      </span>
                    </div>

                    {/* Date / Milestone pill */}
                    <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 text-[11px] text-white/90 font-medium">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span>{moment.date}</span>
                    </div>

                    {/* Quick view icon */}
                    <div className="absolute bottom-3 right-3 z-20 w-7 h-7 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5" />
                    </div>

                    {/* Admin Action Buttons on Photo */}
                    {isAdmin && (
                      <div
                        className="absolute top-3 right-3 flex items-center gap-1 bg-slate-900/85 backdrop-blur-md p-1 rounded-lg border border-slate-700 z-30"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          onClick={() => openEditModal(moment)}
                          className="p-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                          title="Edit this moment"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            onDeleteMoment(moment.id);
                          }}
                          className="p-1.5 text-slate-300 hover:text-red-400 transition-colors"
                          title="Delete moment"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Moment Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                      {currentLang === 'en' ? moment.titleEn : moment.titleRw}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {currentLang === 'en' ? moment.captionEn : moment.captionRw}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveMomentDetail(moment)}
                    className="w-full py-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{currentLang === 'en' ? 'View Photo & Full Story' : 'Reba Amafoto n\'Inkuru'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Full Moment Story Modal */}
      {activeMomentDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl border border-slate-200 my-8">
            {/* Top Imigongo ribbon */}
            <ImigongoRibbon height={8} variant="light" bordered={false} />

            <button
              type="button"
              onClick={() => setActiveMomentDetail(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
              aria-label="Close photo dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[380px] w-full overflow-hidden bg-slate-900 relative">
              <img
                src={activeMomentDetail.imageUrl}
                alt={activeMomentDetail.titleEn}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-4 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-300 border border-slate-700">
                {activeMomentDetail.date}
              </div>
            </div>

            {/* Story Content */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  UBUMWE SACCO GAKENKE · Institutional Milestone
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {currentLang === 'en' ? activeMomentDetail.titleEn : activeMomentDetail.titleRw}
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed">
                {currentLang === 'en' ? activeMomentDetail.captionEn : activeMomentDetail.captionRw}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 border-t border-slate-100">
                <span>Institution: {SACCO_INFO.name} ({SACCO_INFO.district})</span>
                <button
                  type="button"
                  onClick={() => setActiveMomentDetail(null)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg font-bold text-xs"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Post / Edit Best Moment Modal (Admin CRUD) */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200 my-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0">
              <ImigongoRibbon height={8} variant="light" bordered={false} />
            </div>

            <button
              type="button"
              onClick={() => setIsFormModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-extrabold text-slate-900 pt-2">
              {editingMoment ? 'Edit Best Moment' : 'Post New Best Moment'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Add photos and stories commemorating our greatest milestones at UBUMWE SACCO GAKENKE.
            </p>

            <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Title (English) *
                </label>
                <input
                  type="text"
                  required
                  value={titleEn}
                  onChange={(e) => setTitleEn(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="e.g. National Cooperative Summit Excellence Award"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Title (Kinyarwanda)
                </label>
                <input
                  type="text"
                  value={titleRw}
                  onChange={(e) => setTitleRw(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="e.g. Guhabwa igikombe cy'indashyikirwa"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="award">Award &amp; Trophy</option>
                    <option value="agm_dividend">AGM &amp; Dividends</option>
                    <option value="branch_opening">Modern Branch / Digital</option>
                    <option value="community">Community &amp; Agriculture</option>
                    <option value="training">Training &amp; Graduation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Event Date / Milestone
                  </label>
                  <input
                    type="text"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="e.g. October 2026 / Annual General Assembly"
                  />
                </div>
              </div>

              {/* Image Uploader with Presets and Device Upload */}
              <ImageUploader
                value={imageUrl}
                onChange={(newUrl) => setImageUrl(newUrl)}
                label="Photo (Upload from Device or URL)"
                aspectRatio="video"
                presets={PRESET_MOMENT_IMAGES}
                helpText="Upload a milestone photograph from your computer or choose a preset."
              />

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Narrative Story &amp; Achievement (English) *
                </label>
                <textarea
                  rows={3}
                  required
                  value={captionEn}
                  onChange={(e) => setCaptionEn(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Describe this milestone, participants like Board Director Wellarse or Manager Mbitsemunda Phocas, and community benefits..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Narrative Story (Kinyarwanda)
                </label>
                <textarea
                  rows={2}
                  value={captionRw}
                  onChange={(e) => setCaptionRw(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Sobanura iki gihe cyiza mu Kinyarwanda..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormModalOpen(false)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>{editingMoment ? 'Update Moment' : 'Post Moment'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
