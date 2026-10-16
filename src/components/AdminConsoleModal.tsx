import React, { useState, useEffect } from 'react';
import {
  Language,
  SaccoProduct,
  Announcement,
  ApplicationRecord,
  InstitutionMoment,
  LeaderMember,
  ThemeColor,
  SaccoContactInfo,
  NavItemConfig,
  SystemImagesConfig,
  BranchOutpost,
} from '../types';
import { THEME_OPTIONS } from '../data/saccoData';
import { ImageUploader } from './ImageUploader';
import {
  X,
  Layers,
  Bell,
  UserCheck,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Camera,
  Calendar,
  Users,
  Palette,
  BookOpen,
  Check,
  Shield,
  Search,
  Sparkles,
  ArrowRight,
  Info,
  Phone,
  Mail,
  MessageSquare,
  Smartphone,
  MapPin,
  Clock,
  Compass,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  RotateCcw,
  Save,
  ImageIcon,
} from 'lucide-react';
import { ImigongoRibbon } from './ImigongoPattern';

interface AdminConsoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialTab?: 'contact' | 'pictures' | 'navigation' | 'leaders' | 'moments' | 'products' | 'announcements' | 'applications' | 'theme' | 'guide';
  saccoInfo: SaccoContactInfo;
  onUpdateSaccoInfo: (updated: Partial<SaccoContactInfo>) => void;
  navItems: NavItemConfig[];
  onAddNavItem: (item: Omit<NavItemConfig, 'id'>) => void;
  onUpdateNavItem: (id: string, updated: Partial<NavItemConfig>) => void;
  onDeleteNavItem: (id: string) => void;
  onReorderNavItems?: (items: NavItemConfig[]) => void;
  onResetNavItems: () => void;
  systemImages: SystemImagesConfig;
  onUpdateSystemImage: (key: string, url: string) => void;
  products: SaccoProduct[];
  announcements: Announcement[];
  applications: ApplicationRecord[];
  moments: InstitutionMoment[];
  leaders: LeaderMember[];
  currentTheme: ThemeColor;
  onAddProduct: (product: Omit<SaccoProduct, 'id'>) => void;
  onUpdateProduct: (id: string, updated: Partial<SaccoProduct>) => void;
  onDeleteProduct: (id: string) => void;
  onAddAnnouncement: (ann: Omit<Announcement, 'id'>) => void;
  onUpdateAnnouncement: (id: string, updated: Partial<Announcement>) => void;
  onDeleteAnnouncement: (id: string) => void;
  onUpdateApplicationStatus: (id: string, status: 'approved' | 'rejected') => void;
  onDeleteApplication: (id: string) => void;
  onAddMoment: (moment: Omit<InstitutionMoment, 'id'>) => void;
  onUpdateMoment: (id: string, updated: Partial<InstitutionMoment>) => void;
  onDeleteMoment: (id: string) => void;
  onAddLeader: (leader: Omit<LeaderMember, 'id'>) => void;
  onUpdateLeader: (id: string, updated: Partial<LeaderMember>) => void;
  onDeleteLeader: (id: string) => void;
  onThemeChange: (theme: ThemeColor) => void;
  branches: BranchOutpost[];
  onAddBranch: (branch: Omit<BranchOutpost, 'id'>) => void;
  onUpdateBranch: (id: string, updated: Partial<BranchOutpost>) => void;
  onDeleteBranch: (id: string) => void;
  onAddSubBranch: (branchId: string, sub: { name: string; sector: string; managerName: string; phone: string }) => void;
  onDeleteSubBranch: (branchId: string, subId: string) => void;
  contactInquiries: { id: string; name: string; phone: string; subject: string; message: string; createdAt: string }[];
  onDeleteContactInquiry: (id: string) => void;
}

export const AdminConsoleModal: React.FC<AdminConsoleModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialTab = 'contact',
  saccoInfo,
  onUpdateSaccoInfo,
  navItems,
  onAddNavItem,
  onUpdateNavItem,
  onDeleteNavItem,
  onReorderNavItems,
  onResetNavItems,
  systemImages,
  onUpdateSystemImage,
  products,
  announcements,
  applications,
  moments,
  leaders,
  currentTheme,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onAddAnnouncement,
  onUpdateAnnouncement,
  onDeleteAnnouncement,
  onUpdateApplicationStatus,
  onDeleteApplication,
  onAddMoment,
  onUpdateMoment,
  onDeleteMoment,
  onAddLeader,
  onUpdateLeader,
  onDeleteLeader,
  onThemeChange,
  branches,
  onAddBranch,
  onUpdateBranch,
  onDeleteBranch,
  onAddSubBranch,
  onDeleteSubBranch,
  contactInquiries,
  onDeleteContactInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<
    'contact' | 'pictures' | 'navigation' | 'leaders' | 'moments' | 'products' | 'announcements' | 'applications' | 'theme' | 'guide' | 'branches' | 'inquiries'
  >(initialTab);

  // ... (buttons JSX - need to add them here)


  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  // CONTACT & ORGANIZATION FORM STATE
  const [contactPhone, setContactPhone] = useState(saccoInfo.phone);
  const [contactManagerPhone, setContactManagerPhone] = useState(saccoInfo.managerPhone || saccoInfo.phone);
  const [contactEmail, setContactEmail] = useState(saccoInfo.email);
  const [contactSupportEmail, setContactSupportEmail] = useState(saccoInfo.supportEmail || saccoInfo.email);
  const [contactWhatsapp, setContactWhatsapp] = useState(saccoInfo.whatsapp || '250786422080');
  const [contactWhatsappMsg, setContactWhatsappMsg] = useState(saccoInfo.whatsappMessage || 'Hello UBUMWE SACCO GAKENKE');
  const [contactUssd, setContactUssd] = useState(saccoInfo.ussdCode || '*541#');
  const [contactHeadquarters, setContactHeadquarters] = useState(saccoInfo.headquarters);
  const [contactHoursEn, setContactHoursEn] = useState(saccoInfo.operatingHoursEn || 'Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:00 AM - 1:00 PM');
  const [contactHoursRw, setContactHoursRw] = useState(saccoInfo.operatingHoursRw || 'Kuwa Mbere - Kuwa Gatanu: Saa 8:00 - 17:00 | Kuwa Gatandatu: Saa 8:00 - 13:00');
  const [contactSavedSuccess, setContactSavedSuccess] = useState(false);

  // Sync state if saccoInfo updates externally
  useEffect(() => {
    setContactPhone(saccoInfo.phone);
    setContactManagerPhone(saccoInfo.managerPhone || saccoInfo.phone);
    setContactEmail(saccoInfo.email);
    setContactSupportEmail(saccoInfo.supportEmail || saccoInfo.email);
    setContactWhatsapp(saccoInfo.whatsapp || '250786422080');
    setContactWhatsappMsg(saccoInfo.whatsappMessage || 'Hello UBUMWE SACCO GAKENKE');
    setContactUssd(saccoInfo.ussdCode || '*541#');
    setContactHeadquarters(saccoInfo.headquarters);
    setContactHoursEn(saccoInfo.operatingHoursEn || 'Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:00 AM - 1:00 PM');
    setContactHoursRw(saccoInfo.operatingHoursRw || 'Kuwa Mbere - Kuwa Gatanu: Saa 8:00 - 17:00 | Kuwa Gatandatu: Saa 8:00 - 13:00');
  }, [saccoInfo]);

  const handleSaveContactInfo = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSaccoInfo({
      phone: contactPhone,
      managerPhone: contactManagerPhone,
      email: contactEmail,
      supportEmail: contactSupportEmail,
      whatsapp: contactWhatsapp.replace(/[^0-9]/g, ''),
      whatsappMessage: contactWhatsappMsg,
      ussdCode: contactUssd,
      headquarters: contactHeadquarters,
      operatingHoursEn: contactHoursEn,
      operatingHoursRw: contactHoursRw,
    });
    setContactSavedSuccess(true);
    setTimeout(() => setContactSavedSuccess(false), 3000);
  };

  // NAVIGATION FORM STATE
  const [isNavFormOpen, setIsNavFormOpen] = useState(false);
  const [editingNavId, setEditingNavId] = useState<string | null>(null);
  const [navLabelEn, setNavLabelEn] = useState('');
  const [navLabelRw, setNavLabelRw] = useState('');
  const [navTarget, setNavTarget] = useState('hero');
  const [navVisible, setNavVisible] = useState(true);

  const handleOpenAddNav = () => {
    setEditingNavId(null);
    setNavLabelEn('');
    setNavLabelRw('');
    setNavTarget('about');
    setNavVisible(true);
    setIsNavFormOpen(true);
  };

  const handleOpenEditNav = (item: NavItemConfig) => {
    setEditingNavId(item.id);
    setNavLabelEn(item.labelEn);
    setNavLabelRw(item.labelRw);
    setNavTarget(item.targetSection);
    setNavVisible(item.visible);
    setIsNavFormOpen(true);
  };

  const handleSaveNav = (e: React.FormEvent) => {
    e.preventDefault();
    if (!navLabelEn) return;

    if (editingNavId) {
      onUpdateNavItem(editingNavId, {
        labelEn: navLabelEn,
        labelRw: navLabelRw || navLabelEn,
        targetSection: navTarget,
        visible: navVisible,
      });
    } else {
      onAddNavItem({
        labelEn: navLabelEn,
        labelRw: navLabelRw || navLabelEn,
        targetSection: navTarget,
        visible: navVisible,
      });
    }
    setIsNavFormOpen(false);
  };

  const handleMoveNav = (index: number, direction: 'up' | 'down') => {
    if (!onReorderNavItems) return;
    const newItems = [...navItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    onReorderNavItems(newItems);
  };

  // Product form state
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [prodTitle, setProdTitle] = useState('');
  const [prodCategory, setProdCategory] = useState<'savings' | 'loans' | 'digital'>('loans');
  const [prodRate, setProdRate] = useState('1.1% per month');
  const [prodMin, setProdMin] = useState(100000);
  const [prodMax, setProdMax] = useState(10000000);
  const [prodDuration, setProdDuration] = useState('12 Months');
  const [prodTagline, setProdTagline] = useState('');

  // Announcement form state
  const [isAnnFormOpen, setIsAnnFormOpen] = useState(false);
  const [editingAnnId, setEditingAnnId] = useState<string | null>(null);
  const [annTitle, setAnnTitle] = useState('');
  const [annDate, setAnnDate] = useState('Current Season');
  const [annCategory, setAnnCategory] = useState<'agm' | 'dividend' | 'loan_window' | 'notice'>('notice');
  const [annSummary, setAnnSummary] = useState('');
  const [annContent, setAnnContent] = useState('');

  // Moments form state
  const [isMomentFormOpen, setIsMomentFormOpen] = useState(false);
  const [editingMomentId, setEditingMomentId] = useState<string | null>(null);
  const [momentTitle, setMomentTitle] = useState('');
  const [momentDate, setMomentDate] = useState('October 2026');
  const [momentCategory, setMomentCategory] = useState<InstitutionMoment['category']>('award');
  const [momentImg, setMomentImg] = useState('/src/assets/images/moment_cooperative_award_1791994900000.jpg');
  const [momentCaption, setMomentCaption] = useState('');

  // Leader / Manager form state
  const [isLeaderFormOpen, setIsLeaderFormOpen] = useState(false);
  const [editingLeaderId, setEditingLeaderId] = useState<string | null>(null);
  const [leaderName, setLeaderName] = useState('');
  const [leaderRoleEn, setLeaderRoleEn] = useState('');
  const [leaderRoleRw, setLeaderRoleRw] = useState('');
  const [leaderCategory, setLeaderCategory] = useState<string>('board');
  const [leaderQualEn, setLeaderQualEn] = useState('');
  const [leaderQualRw, setLeaderQualRw] = useState('');
  const [leaderImg, setLeaderImg] = useState('/src/assets/images/portrait_director_wellars_1791994899049.jpg');
  const [leaderPhone, setLeaderPhone] = useState('0786422080');
  const [leaderSearch, setLeaderSearch] = useState('');

  // Branch form state
  const [isBranchFormOpen, setIsBranchFormOpen] = useState(false);
  const [branchName, setBranchName] = useState('');
  const [branchSector, setBranchSector] = useState('');
  const [branchManager, setBranchManager] = useState('');
  const [branchPhone, setBranchPhone] = useState('');

  if (!isOpen) return null;

  // Product Handlers
  const handleOpenAddProduct = () => {
    setEditingProductId(null);
    setProdTitle('');
    setProdCategory('loans');
    setProdRate('1.2% per month');
    setProdMin(100000);
    setProdMax(5000000);
    setProdDuration('12 Months');
    setProdTagline('');
    setIsProductFormOpen(true);
  };

  const handleOpenEditProduct = (prod: SaccoProduct) => {
    setEditingProductId(prod.id);
    setProdTitle(prod.titleEn);
    setProdCategory(prod.category);
    setProdRate(prod.interestRate);
    setProdMin(prod.minAmount);
    setProdMax(prod.maxAmount);
    setProdDuration(prod.duration);
    setProdTagline(prod.taglineEn);
    setIsProductFormOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodTitle) return;

    if (editingProductId) {
      onUpdateProduct(editingProductId, {
        titleEn: prodTitle,
        titleRw: prodTitle,
        category: prodCategory,
        interestRate: prodRate,
        minAmount: Number(prodMin),
        maxAmount: Number(prodMax),
        duration: prodDuration,
        taglineEn: prodTagline,
        taglineRw: prodTagline,
      });
    } else {
      onAddProduct({
        titleEn: prodTitle,
        titleRw: prodTitle,
        category: prodCategory,
        interestRate: prodRate,
        minAmount: Number(prodMin),
        maxAmount: Number(prodMax),
        duration: prodDuration,
        taglineEn: prodTagline,
        taglineRw: prodTagline,
        featuresEn: ['Direct USSD *541# integration', 'Low transparent cooperative interest'],
        featuresRw: ['Gukoresha USSD *541#', 'Inyungu iciriritse ya koperative'],
        requirementsEn: ['Rwanda National ID (16 Digits)'],
        requirementsRw: ["Indangamuntu y'u Rwanda"],
      });
    }
    setIsProductFormOpen(false);
  };

  // Announcement Handlers
  const handleOpenAddAnnouncement = () => {
    setEditingAnnId(null);
    setAnnTitle('');
    setAnnDate('Current Season 2026');
    setAnnCategory('notice');
    setAnnSummary('');
    setAnnContent('');
    setIsAnnFormOpen(true);
  };

  const handleOpenEditAnnouncement = (ann: Announcement) => {
    setEditingAnnId(ann.id);
    setAnnTitle(ann.titleEn);
    setAnnDate(ann.date);
    setAnnCategory(ann.category);
    setAnnSummary(ann.summaryEn);
    setAnnContent(ann.contentEn);
    setIsAnnFormOpen(true);
  };

  const handleSaveAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!annTitle) return;

    if (editingAnnId) {
      onUpdateAnnouncement(editingAnnId, {
        titleEn: annTitle,
        titleRw: annTitle,
        date: annDate,
        category: annCategory,
        summaryEn: annSummary,
        summaryRw: annSummary,
        contentEn: annContent || annSummary,
        contentRw: annContent || annSummary,
      });
    } else {
      onAddAnnouncement({
        titleEn: annTitle,
        titleRw: annTitle,
        date: annDate,
        category: annCategory,
        summaryEn: annSummary,
        summaryRw: annSummary,
        contentEn: annContent || annSummary,
        contentRw: annContent || annSummary,
      });
    }
    setIsAnnFormOpen(false);
  };

  // Moment Handlers
  const handleOpenAddMoment = () => {
    setEditingMomentId(null);
    setMomentTitle('');
    setMomentDate('October 2026');
    setMomentCategory('award');
    setMomentImg('/src/assets/images/moment_cooperative_award_1791994900000.jpg');
    setMomentCaption('');
    setIsMomentFormOpen(true);
  };

  const handleOpenEditMoment = (moment: InstitutionMoment) => {
    setEditingMomentId(moment.id);
    setMomentTitle(moment.titleEn);
    setMomentDate(moment.date);
    setMomentCategory(moment.category);
    setMomentImg(moment.imageUrl);
    setMomentCaption(moment.captionEn);
    setIsMomentFormOpen(true);
  };

  const handleSaveMoment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!momentTitle) return;

    if (editingMomentId) {
      onUpdateMoment(editingMomentId, {
        titleEn: momentTitle,
        titleRw: momentTitle,
        date: momentDate,
        category: momentCategory,
        imageUrl: momentImg,
        captionEn: momentCaption,
        captionRw: momentCaption,
      });
    } else {
      onAddMoment({
        titleEn: momentTitle,
        titleRw: momentTitle,
        date: momentDate,
        category: momentCategory,
        imageUrl: momentImg,
        captionEn: momentCaption,
        captionRw: momentCaption,
      });
    }
    setIsMomentFormOpen(false);
  };

  // Leader Handlers
  const handleOpenAddLeader = () => {
    setEditingLeaderId(null);
    setLeaderName('');
    setLeaderRoleEn('Board Director');
    setLeaderRoleRw("Umuyobozi w'Inama y'Ubutegetsi");
    setLeaderCategory('board');
    setLeaderQualEn('Senior Financial Administrator');
    setLeaderQualRw("Impuguke mu by'Imari n'Amakoperative");
    setLeaderImg('/src/assets/images/portrait_director_wellars_1791994899049.jpg');
    setLeaderPhone(saccoInfo.phone);
    setIsLeaderFormOpen(true);
  };

  const handleOpenEditLeader = (leader: LeaderMember) => {
    setEditingLeaderId(leader.id);
    setLeaderName(leader.name);
    setLeaderRoleEn(leader.roleEn);
    setLeaderRoleRw(leader.roleRw);
    setLeaderCategory(leader.category);
    setLeaderQualEn(leader.qualificationEn);
    setLeaderQualRw(leader.qualificationRw);
    setLeaderImg(leader.imageUrl);
    setLeaderPhone(leader.phone || saccoInfo.phone);
    setIsLeaderFormOpen(true);
  };

  const handleSaveLeader = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leaderName) return;

    if (editingLeaderId) {
      onUpdateLeader(editingLeaderId, {
        name: leaderName,
        roleEn: leaderRoleEn,
        roleRw: leaderRoleRw || leaderRoleEn,
        category: leaderCategory,
        qualificationEn: leaderQualEn,
        qualificationRw: leaderQualRw || leaderQualEn,
        imageUrl: leaderImg,
        phone: leaderPhone,
      });
    } else {
      onAddLeader({
        name: leaderName,
        roleEn: leaderRoleEn,
        roleRw: leaderRoleRw || leaderRoleEn,
        category: leaderCategory,
        qualificationEn: leaderQualEn,
        qualificationRw: leaderQualRw || leaderQualEn,
        imageUrl: leaderImg,
        phone: leaderPhone,
      });
    }
    setIsLeaderFormOpen(false);
  };

  const filteredLeaders = leaders.filter((l) => {
    if (!leaderSearch) return true;
    const query = leaderSearch.toLowerCase();
    return (
      l.name.toLowerCase().includes(query) ||
      l.roleEn.toLowerCase().includes(query) ||
      l.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-5xl w-full p-5 sm:p-7 relative shadow-2xl border border-slate-200 my-6 overflow-hidden max-h-[94vh] flex flex-col">
        {/* Top Imigongo skeleton ribbon */}
        <div className="absolute top-0 left-0 right-0">
          <ImigongoRibbon height={8} variant="light" bordered={false} />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          aria-label="Close admin console"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pt-2 pb-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold">
              <span>{saccoInfo.name} · EXECUTIVE CRUD &amp; MEDIA HUB</span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono">
                Full Admin Rights
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
              Operations &amp; Content Management Center
            </h3>
          </div>

          {/* Console Navigation Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto max-w-full">
            {/* 1. Contact & Phone/Email/WhatsApp */}
            <button
              type="button"
              onClick={() => setActiveTab('contact')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'contact'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contacts &amp; Phone</span>
            </button>

            {/* 2. System Pictures & Media */}
            <button
              type="button"
              onClick={() => setActiveTab('pictures')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'pictures'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>System Pictures</span>
            </button>

            {/* 3. Navigation Links */}
            <button
              type="button"
              onClick={() => setActiveTab('navigation')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'navigation'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Navs Manager</span>
            </button>

            {/* 4. Leaders & Managers */}
            <button
              type="button"
              onClick={() => setActiveTab('leaders')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'leaders'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-emerald-700" />
              <span>Leaders ({leaders.length})</span>
            </button>

            {/* 5. Gallery */}
            <button
              type="button"
              onClick={() => setActiveTab('moments')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'moments'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>Moments ({moments.length})</span>
            </button>

            {/* 6. Products */}
            <button
              type="button"
              onClick={() => setActiveTab('products')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'products'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              <span>Products ({products.length})</span>
            </button>

            {/* 7. Bulletins */}
            <button
              type="button"
              onClick={() => setActiveTab('announcements')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'announcements'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bell className="w-3.5 h-3.5 text-emerald-700" />
              <span>Bulletins ({announcements.length})</span>
            </button>

            {/* 8. Applications */}
            <button
              type="button"
              onClick={() => setActiveTab('applications')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'applications'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Applications ({applications.length})</span>
            </button>

            {/* 9. Branches & Outposts */}
            <button
              type="button"
              onClick={() => setActiveTab('branches')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'branches'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Branches ({branches.length})</span>
            </button>

            {/* 10. Inquiries */}
            <button
              type="button"
              onClick={() => setActiveTab('inquiries')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'inquiries'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              <span>Inquiries ({contactInquiries.length})</span>
            </button>

            {/* 11. Theme Color */}
            <button
              type="button"
              onClick={() => setActiveTab('theme')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'theme'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Palette className="w-3.5 h-3.5 text-amber-500" />
              <span>Theme</span>
            </button>

            {/* 10. Guide */}
            <button
              type="button"
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                activeTab === 'guide'
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Guide</span>
            </button>
          </div>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6">

          {/* TAB: CONTACT & ORGANIZATION INFO */}
          {activeTab === 'contact' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-xs block">
                    Contact Channels &amp; Office Credentials
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Edit phone numbers, email, WhatsApp, operating hours, and USSD code. Changes update across the entire system.
                  </span>
                </div>
                {contactSavedSuccess && (
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Saved &amp; Updated Across Site!</span>
                  </div>
                )}
              </div>

              <form onSubmit={handleSaveContactInfo} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>Phone Numbers</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Main Helpline / Customer Desk Phone
                      </label>
                      <input
                        type="text"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="0786422080"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-mono-numbers focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        Displays in Top Utility Bar, Contact Section, Hero, and Footer.
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Manager (Mbitsemunda Phocas) Direct Line
                      </label>
                      <input
                        type="text"
                        value={contactManagerPhone}
                        onChange={(e) => setContactManagerPhone(e.target.value)}
                        placeholder="0786422080"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-mono-numbers focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                      <Mail className="w-4 h-4 text-emerald-600" />
                      <span>Email Addresses</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Official Cooperative Email
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="ubumwesaccogakenke@gmail.com"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        Used for default admin login, contact card, and mailto links.
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Support / Customer Desk Email
                      </label>
                      <input
                        type="email"
                        value={contactSupportEmail}
                        onChange={(e) => setContactSupportEmail(e.target.value)}
                        placeholder="ubumwesaccogakenke@gmail.com"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Integration */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Direct Channel</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Number (Digits with Country Code, e.g. 250786422080)
                      </label>
                      <input
                        type="text"
                        required
                        value={contactWhatsapp}
                        onChange={(e) => setContactWhatsapp(e.target.value)}
                        placeholder="250786422080"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-mono-numbers focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                      <span className="text-[10px] text-slate-400 mt-0.5 block">
                        Direct link: https://wa.me/{contactWhatsapp.replace(/[^0-9]/g, '')}
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Default WhatsApp Greeting Message
                      </label>
                      <input
                        type="text"
                        value={contactWhatsappMsg}
                        onChange={(e) => setContactWhatsappMsg(e.target.value)}
                        placeholder="Hello UBUMWE SACCO GAKENKE, I would like to inquire about cooperative services."
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* USSD & Office Details */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                      <Smartphone className="w-4 h-4 text-emerald-600" />
                      <span>USSD &amp; Head Office</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Official USSD Banking Code
                      </label>
                      <input
                        type="text"
                        required
                        value={contactUssd}
                        onChange={(e) => setContactUssd(e.target.value)}
                        placeholder="*541#"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-mono-numbers font-bold text-amber-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Headquarters Physical Location
                      </label>
                      <input
                        type="text"
                        required
                        value={contactHeadquarters}
                        onChange={(e) => setContactHeadquarters(e.target.value)}
                        placeholder="Gakenke Commercial Center, Sector Gakenke, Northern Province"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Operating Hours (EN) */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      Operating Hours (English)
                    </label>
                    <input
                      type="text"
                      value={contactHoursEn}
                      onChange={(e) => setContactHoursEn(e.target.value)}
                      placeholder="Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:00 AM - 1:00 PM"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  {/* Operating Hours (RW) */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                    <label className="block text-xs font-semibold text-slate-700">
                      Operating Hours (Kinyarwanda)
                    </label>
                    <input
                      type="text"
                      value={contactHoursRw}
                      onChange={(e) => setContactHoursRw(e.target.value)}
                      placeholder="Kuwa Mbere - Kuwa Gatanu: Saa 8:00 - 17:00 | Kuwa Gatandatu: Saa 8:00 - 13:00"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Contact Information Across Whole System</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB: SYSTEM PICTURES & MEDIA MANAGER */}
          {activeTab === 'pictures' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-xs block">
                    All System Pictures &amp; Media Manager
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Upload or replace ANY image in the system directly from your computer or by URL.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 0. Institution Logo */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">0. Institution Logo (Header Branding)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Brand Logo</span>
                  </div>
                  <ImageUploader
                    value={systemImages.saccoLogo || ''}
                    onChange={(url) => onUpdateSystemImage('saccoLogo', url)}
                    label="SACCO Institution Logo"
                    aspectRatio="square"
                    presets={[]}
                    helpText="Appears in the header navigation bar as the official cooperative logo."
                  />
                </div>

                {/* 1. Main Hero Banking Hall */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">1. Hero Section Banking Photo</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Hero Banner</span>
                  </div>
                  <ImageUploader
                    value={systemImages.heroBanking}
                    onChange={(url) => onUpdateSystemImage('heroBanking', url)}
                    label="Hero Banking Hall Image"
                    aspectRatio="video"
                    presets={[
                      { label: 'Banking Hall', url: '/src/assets/images/hero_sacco_banking_1791989969362.jpg' },
                      { label: 'Farmers Support', url: '/src/assets/images/farmers_cooperative_1791989969904.jpg' },
                      { label: 'Entrepreneurs', url: '/src/assets/images/entrepreneur_business_1791989970089.jpg' },
                    ]}
                    helpText="Appears prominently in the main hero display with dark scrim overlay."
                  />
                </div>

                {/* 2. Manager Mbitsemunda Phocas Portrait */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">2. Manager (Mbitsemunda Phocas) Photo</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">Executive Manager</span>
                  </div>
                  <ImageUploader
                    value={systemImages.managerPortrait || '/src/assets/images/portrait_manager_phocas_1791994898549.jpg'}
                    onChange={(url) => {
                      onUpdateSystemImage('managerPortrait', url);
                      // Also update Mbitsemunda in leaders list if exists
                      const mgr = leaders.find((l) => l.name.toLowerCase().includes('mbitsemunda') || l.roleEn.toLowerCase().includes('manager'));
                      if (mgr) onUpdateLeader(mgr.id, { imageUrl: url });
                    }}
                    label="Manager Portrait"
                    aspectRatio="square"
                    presets={[
                      { label: 'Phocas Default', url: '/src/assets/images/portrait_manager_phocas_1791994898549.jpg' },
                    ]}
                    helpText="Official executive portrait used in Leadership section and Admin modal."
                  />
                </div>

                {/* 3. Board Director Wellarse Portrait */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">3. Board Director (Wellarse) Photo</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">Board Director</span>
                  </div>
                  <ImageUploader
                    value={systemImages.boardChairPortrait || '/src/assets/images/portrait_director_wellars_1791994899049.jpg'}
                    onChange={(url) => {
                      onUpdateSystemImage('boardChairPortrait', url);
                      const dir = leaders.find((l) => l.name.toLowerCase().includes('wellarse'));
                      if (dir) onUpdateLeader(dir.id, { imageUrl: url });
                    }}
                    label="Wellarse Portrait"
                    aspectRatio="square"
                    presets={[
                      { label: 'Wellarse Default', url: '/src/assets/images/portrait_director_wellars_1791994899049.jpg' },
                    ]}
                    helpText="Official portrait for Wellarse (Board Director)."
                  />
                </div>

                {/* 4. Board Director Bartazal Portrait */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">4. Board Director (Bartazal) Photo</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold">Board Member</span>
                  </div>
                  <ImageUploader
                    value={systemImages.bartazalPortrait || '/src/assets/images/portrait_bartazal_1792051299586.jpg'}
                    onChange={(url) => {
                      onUpdateSystemImage('bartazalPortrait', url);
                      const bar = leaders.find((l) => l.name.toLowerCase().includes('bartazal'));
                      if (bar) onUpdateLeader(bar.id, { imageUrl: url });
                    }}
                    label="Bartazal Portrait"
                    aspectRatio="square"
                    presets={[
                      { label: 'Bartazal Default', url: '/src/assets/images/portrait_bartazal_1792051299586.jpg' },
                    ]}
                    helpText="Official portrait for Bartazal (Board Director & Trustee)."
                  />
                </div>

                {/* 5. Farmers Cooperative Photo */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">5. Farmers Cooperative Photo</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">Agriculture</span>
                  </div>
                  <ImageUploader
                    value={systemImages.farmersCoop}
                    onChange={(url) => onUpdateSystemImage('farmersCoop', url)}
                    label="Farmers Image"
                    aspectRatio="video"
                    presets={[
                      { label: 'Farmers Support', url: '/src/assets/images/farmers_cooperative_1791989969904.jpg' },
                    ]}
                    helpText="Used in agricultural credit highlights and stories."
                  />
                </div>

                {/* 6. Retail & Entrepreneur Photo */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">6. Entrepreneurs &amp; Business Photo</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-semibold">Commerce</span>
                  </div>
                  <ImageUploader
                    value={systemImages.entrepreneur}
                    onChange={(url) => onUpdateSystemImage('entrepreneur', url)}
                    label="Entrepreneur Image"
                    aspectRatio="video"
                    presets={[
                      { label: 'Retail Shop', url: '/src/assets/images/entrepreneur_business_1791989970089.jpg' },
                    ]}
                    helpText="Used in business and SME loan promotions."
                  />
                </div>

                {/* 7. Community Governance Photo */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 md:col-span-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-800">7. Community Governance Assembly Photo</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-semibold">AGM Assembly</span>
                  </div>
                  <ImageUploader
                    value={systemImages.governance}
                    onChange={(url) => onUpdateSystemImage('governance', url)}
                    label="Governance Image"
                    aspectRatio="wide"
                    presets={[
                      { label: 'AGM Assembly', url: '/src/assets/images/community_governance_1791989970347.jpg' },
                    ]}
                    helpText="Used in cooperative governance and member resolution sections."
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: NAVIGATION LINKS MANAGER */}
          {activeTab === 'navigation' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-xs block">
                    Navigation Menu Items Manager
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Add, edit titles (EN &amp; Kinyarwanda), toggle visibility, reorder, or delete navigation links.
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onResetNavItems}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Reset to default SACCO links"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Default</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenAddNav}
                    className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Nav Link</span>
                  </button>
                </div>
              </div>

              {/* Add/Edit Nav Form */}
              {isNavFormOpen && (
                <form
                  onSubmit={handleSaveNav}
                  className="p-5 bg-slate-50 border border-emerald-200 rounded-2xl space-y-4 animate-in fade-in"
                >
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                      {editingNavId ? 'Edit Navigation Item' : 'Add New Navigation Item'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsNavFormOpen(false)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Title (English)</label>
                      <input
                        type="text"
                        required
                        value={navLabelEn}
                        onChange={(e) => setNavLabelEn(e.target.value)}
                        placeholder="e.g. Contact Us or Our Projects"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Title (Kinyarwanda)</label>
                      <input
                        type="text"
                        value={navLabelRw}
                        onChange={(e) => setNavLabelRw(e.target.value)}
                        placeholder="e.g. Twandikire cyangwa Imishinga"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Target Section</label>
                      <select
                        value={navTarget}
                        onChange={(e) => setNavTarget(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono text-xs"
                      >
                        <option value="hero">hero (Home / Top)</option>
                        <option value="about">about (About Us)</option>
                        <option value="products">products (Our Services / Loans)</option>
                        <option value="leadership">leadership (Board &amp; Managers)</option>
                        <option value="announcements">announcements (Bulletins &amp; News)</option>
                        <option value="gallery">gallery (Photos)</option>
                        <option value="branches">branches (Branches &amp; Outposts)</option>
                        <option value="calculator">calculator (Loan Calculator)</option>
                        <option value="portal">portal (Member Portal)</option>
                        <option value="contact">contact (Contact Us - WhatsApp / Phone / Email)</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 pt-5">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                        <input
                          type="checkbox"
                          checked={navVisible}
                          onChange={(e) => setNavVisible(e.target.checked)}
                          className="w-4 h-4 text-emerald-600 rounded"
                        />
                        <span>Visible in Header Navigation</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setIsNavFormOpen(false)}
                      className="px-4 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>{editingNavId ? 'Update Nav Item' : 'Create Nav Item'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Nav Items Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3 w-12 text-center">Order</th>
                      <th className="py-2.5 px-3">English Label</th>
                      <th className="py-2.5 px-3">Kinyarwanda Label</th>
                      <th className="py-2.5 px-3">Target Section</th>
                      <th className="py-2.5 px-3 text-center">Status</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {navItems.map((item, index) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleMoveNav(index, 'up')}
                              disabled={index === 0}
                              className="p-1 text-slate-400 hover:text-slate-800 disabled:opacity-20 cursor-pointer"
                              title="Move Up"
                            >
                              <ArrowUp className="w-3 h-3" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMoveNav(index, 'down')}
                              disabled={index === navItems.length - 1}
                              className="p-1 text-slate-400 hover:text-slate-800 disabled:opacity-20 cursor-pointer"
                              title="Move Down"
                            >
                              <ArrowDown className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                        <td className="py-2.5 px-3 font-bold text-slate-800">{item.labelEn}</td>
                        <td className="py-2.5 px-3 text-slate-600">{item.labelRw}</td>
                        <td className="py-2.5 px-3 font-mono text-[11px] text-emerald-800">#{item.targetSection}</td>
                        <td className="py-2.5 px-3 text-center">
                          <button
                            type="button"
                            onClick={() => onUpdateNavItem(item.id, { visible: !item.visible })}
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 mx-auto cursor-pointer ${
                              item.visible ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-400'
                            }`}
                            title="Toggle Visibility"
                          >
                            {item.visible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                            <span>{item.visible ? 'Visible' : 'Hidden'}</span>
                          </button>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              type="button"
                              onClick={() => handleOpenEditNav(item)}
                              className="p-1 text-slate-500 hover:text-emerald-700 rounded transition-colors"
                              title="Edit Item"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                onDeleteNavItem(item.id);
                              }}
                              className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                              title="Delete Item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: LEADERS & MANAGERS */}
          {activeTab === 'leaders' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-xs block">
                    Board of Directors &amp; Executive Management Team
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Manage Wellarse (Board Director), Mbitsemunda Phocas (Manager), Bartazal, and staff.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search leader..."
                      value={leaderSearch}
                      onChange={(e) => setLeaderSearch(e.target.value)}
                      className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  </div>
                  <button
                    type="button"
                    onClick={handleOpenAddLeader}
                    className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Leader</span>
                  </button>
                </div>
              </div>

              {/* Add/Edit Leader Modal Form */}
              {isLeaderFormOpen && (
                <form
                  onSubmit={handleSaveLeader}
                  className="p-5 bg-slate-50 border border-emerald-200 rounded-2xl space-y-4 animate-in fade-in"
                >
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                      {editingLeaderId ? 'Edit Leader / Director' : 'Add New Board Director or Manager'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsLeaderFormOpen(false)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={leaderName}
                        onChange={(e) => setLeaderName(e.target.value)}
                        placeholder="e.g. Wellarse or Mbitsemunda Phocas or Bartazal"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Leadership Category</label>
                      <select
                        value={leaderCategory}
                        onChange={(e) => setLeaderCategory(e.target.value as any)}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      >
                        <option value="board">Board of Directors (Inama y'Ubutegetsi)</option>
                        <option value="manager">Executive Management Team (Abayobozi b'Imirimo)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Official Role (English)</label>
                      <input
                        type="text"
                        required
                        value={leaderRoleEn}
                        onChange={(e) => setLeaderRoleEn(e.target.value)}
                        placeholder="e.g. Board Director or Manager"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Official Role (Kinyarwanda)</label>
                      <input
                        type="text"
                        value={leaderRoleRw}
                        onChange={(e) => setLeaderRoleRw(e.target.value)}
                        placeholder="e.g. Umuyobozi w'Inama y'Ubutegetsi"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Qualification / Background (EN)</label>
                      <input
                        type="text"
                        value={leaderQualEn}
                        onChange={(e) => setLeaderQualEn(e.target.value)}
                        placeholder="e.g. Senior Cooperative Governance & Finance"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Direct Phone</label>
                      <input
                        type="text"
                        value={leaderPhone}
                        onChange={(e) => setLeaderPhone(e.target.value)}
                        placeholder="0786422080"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono-numbers"
                      />
                    </div>
                  </div>

                  {/* Leader Picture Uploader */}
                  <ImageUploader
                    value={leaderImg}
                    onChange={(newUrl) => setLeaderImg(newUrl)}
                    label="Leader Portrait Picture (Upload from Device or URL)"
                    aspectRatio="square"
                    presets={[
                      { label: 'Wellarse (Board Director)', url: '/src/assets/images/portrait_director_wellars_1791994899049.jpg' },
                      { label: 'Mbitsemunda Phocas (Manager)', url: '/src/assets/images/portrait_manager_phocas_1791994898549.jpg' },
                      { label: 'Bartazal (Board Director)', url: '/src/assets/images/portrait_bartazal_1792051299586.jpg' },
                    ]}
                    helpText="Upload a crisp portrait photo of the leader or director."
                  />

                  <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setIsLeaderFormOpen(false)}
                      className="px-4 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{editingLeaderId ? 'Save Changes' : 'Create Leader'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Leaders Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredLeaders.map((leader) => (
                  <div
                    key={leader.id}
                    className="p-3.5 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 relative group hover:border-emerald-300 transition-all shadow-xs"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <img src={leader.imageUrl} alt={leader.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 pr-12">
                      <h4 className="font-bold text-slate-900 text-xs truncate">{leader.name}</h4>
                      <p className="text-[11px] text-emerald-800 font-semibold truncate">{leader.roleEn}</p>
                      <span className="text-[10px] text-slate-400 capitalize">{leader.category}</span>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleOpenEditLeader(leader)}
                        className="p-1 text-slate-400 hover:text-emerald-700 rounded transition-colors"
                        title="Edit profile & photo"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onDeleteLeader(leader.id);
                        }}
                        className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                        title="Delete profile"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: BEST MOMENTS & GALLERY */}
          {activeTab === 'moments' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-xs block">
                    Institutional Gallery
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Add achievements, AGM milestones, award ceremonies, and upload high-res photography.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleOpenAddMoment}
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Post Moment</span>
                </button>
              </div>

              {/* Add/Edit Moment Modal Form */}
              {isMomentFormOpen && (
                <form
                  onSubmit={handleSaveMoment}
                  className="p-5 bg-slate-50 border border-emerald-200 rounded-2xl space-y-4 animate-in fade-in"
                >
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                      {editingMomentId ? 'Edit Milestone Moment' : 'Create New Best Moment'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsMomentFormOpen(false)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Moment Title</label>
                      <input
                        type="text"
                        required
                        value={momentTitle}
                        onChange={(e) => setMomentTitle(e.target.value)}
                        placeholder="e.g. 2026 Dividend Distribution"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Category</label>
                      <select
                        value={momentCategory}
                        onChange={(e) => setMomentCategory(e.target.value as any)}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      >
                        <option value="award">National Award &amp; Trophy</option>
                        <option value="agm_dividend">AGM &amp; Dividend Celebration</option>
                        <option value="community">Community Outreach &amp; Farmers</option>
                        <option value="branch_opening">Branch Opening &amp; Modern Hall</option>
                        <option value="training">Member Financial Literacy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Date / Period</label>
                      <input
                        type="text"
                        required
                        value={momentDate}
                        onChange={(e) => setMomentDate(e.target.value)}
                        placeholder="October 2026"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-mono-numbers"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Caption / Summary</label>
                      <input
                        type="text"
                        required
                        value={momentCaption}
                        onChange={(e) => setMomentCaption(e.target.value)}
                        placeholder="Description of the event..."
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Moment Picture Uploader */}
                  <ImageUploader
                    value={momentImg}
                    onChange={(url) => setMomentImg(url)}
                    label="Moment Photograph (Upload from Device or URL)"
                    aspectRatio="video"
                    presets={[
                      { label: 'Award Trophy', url: '/src/assets/images/moment_cooperative_award_1791994900000.jpg' },
                      { label: 'Dividend Celebration', url: '/src/assets/images/moment_dividend_celebration_1791994900250.jpg' },
                      { label: 'Banking Hall', url: '/src/assets/images/hero_sacco_banking_1791989969362.jpg' },
                      { label: 'Farmers Harvest', url: '/src/assets/images/farmers_cooperative_1791989969904.jpg' },
                    ]}
                    helpText="Upload an authentic milestone photograph."
                  />

                  <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setIsMomentFormOpen(false)}
                      className="px-4 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{editingMomentId ? 'Save Milestone' : 'Publish Moment'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Moments List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {moments.map((m) => (
                  <div
                    key={m.id}
                    className="p-3 bg-white border border-slate-200 rounded-2xl space-y-2 relative group hover:border-emerald-300 transition-all shadow-xs"
                  >
                    <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img src={m.imageUrl} alt={m.titleEn} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs truncate">{m.titleEn}</h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2">{m.captionEn}</p>
                      <span className="text-[10px] text-slate-400 font-mono-numbers mt-1 block">{m.date}</span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-xs p-1 rounded-lg border border-slate-200 shadow-xs">
                      <button
                        type="button"
                        onClick={() => handleOpenEditMoment(m)}
                        className="p-1 text-slate-600 hover:text-emerald-700 rounded transition-colors"
                        title="Edit Moment & Photo"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onDeleteMoment(m.id);
                        }}
                        className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                        title="Delete Moment"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: PRODUCTS */}
          {activeTab === 'products' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-slate-700 uppercase tracking-wider block">
                    Savings &amp; Loan Product Catalog
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Terms here automatically configure the public Loan Calculator and Service Catalog.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleOpenAddProduct}
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Product</span>
                </button>
              </div>

              {/* Add/Edit Product Modal Form */}
              {isProductFormOpen && (
                <form
                  onSubmit={handleSaveProduct}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 animate-in fade-in"
                >
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      {editingProductId ? 'Edit Product' : 'Add New Cooperative Product'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsProductFormOpen(false)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">Title</label>
                      <input
                        type="text"
                        required
                        value={prodTitle}
                        onChange={(e) => setProdTitle(e.target.value)}
                        placeholder="e.g. Tea & Fertilizer Seasonal Credit"
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Category</label>
                      <select
                        value={prodCategory}
                        onChange={(e) => setProdCategory(e.target.value as any)}
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg"
                      >
                        <option value="loans">Loan Product</option>
                        <option value="savings">Savings Account</option>
                        <option value="digital">Digital Facility</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Interest / Dividend</label>
                      <input
                        type="text"
                        required
                        value={prodRate}
                        onChange={(e) => setProdRate(e.target.value)}
                        placeholder="1.2% per month"
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Min Amount (RWF)</label>
                      <input
                        type="number"
                        required
                        value={prodMin}
                        onChange={(e) => setProdMin(Number(e.target.value))}
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono-numbers"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Max Amount (RWF)</label>
                      <input
                        type="number"
                        required
                        value={prodMax}
                        onChange={(e) => setProdMax(Number(e.target.value))}
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono-numbers"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Tenure / Duration</label>
                      <input
                        type="text"
                        required
                        value={prodDuration}
                        onChange={(e) => setProdDuration(e.target.value)}
                        placeholder="12 Months"
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">Tagline</label>
                      <input
                        type="text"
                        value={prodTagline}
                        onChange={(e) => setProdTagline(e.target.value)}
                        placeholder="Fast disbursement against harvest cycles"
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setIsProductFormOpen(false)}
                      className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{editingProductId ? 'Update Product' : 'Create Product'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Products Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Title</th>
                      <th className="py-2.5 px-3">Type</th>
                      <th className="py-2.5 px-3">Interest / Return</th>
                      <th className="py-2.5 px-3">Borrowing Range</th>
                      <th className="py-2.5 px-3">Duration</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono-numbers">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-slate-900 font-sans">{p.titleEn}</td>
                        <td className="py-2.5 px-3 capitalize font-sans">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              p.category === 'savings'
                                ? 'bg-blue-100 text-blue-800'
                                : p.category === 'loans'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}
                          >
                            {p.category}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-emerald-800 font-bold">{p.interestRate}</td>
                        <td className="py-2.5 px-3 text-slate-600">
                          {p.minAmount.toLocaleString()} - {p.maxAmount.toLocaleString()} RWF
                        </td>
                        <td className="py-2.5 px-3 text-slate-600 font-sans">{p.duration}</td>
                        <td className="py-2.5 px-3 text-right">
                          <div className="flex items-center justify-end gap-1 font-sans">
                            <button
                              type="button"
                              onClick={() => handleOpenEditProduct(p)}
                              className="p-1 text-slate-500 hover:text-emerald-700 rounded transition-colors"
                              title="Edit product"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                onDeleteProduct(p.id);
                              }}
                              className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                              title="Delete product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: ANNOUNCEMENTS */}
          {activeTab === 'announcements' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-slate-700 uppercase tracking-wider block">
                    Statutory Bulletins &amp; News
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Publish AGM notices, dividend payouts, and regulatory disclosures.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleOpenAddAnnouncement}
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Publish Notice</span>
                </button>
              </div>

              {/* Add/Edit Announcement Form */}
              {isAnnFormOpen && (
                <form
                  onSubmit={handleSaveAnnouncement}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 animate-in fade-in"
                >
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      {editingAnnId ? 'Edit Announcement' : 'Publish New Notice'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsAnnFormOpen(false)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">Headline</label>
                      <input
                        type="text"
                        required
                        value={annTitle}
                        onChange={(e) => setAnnTitle(e.target.value)}
                        placeholder="e.g. 2026 Annual General Meeting Resolutions"
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Category</label>
                      <select
                        value={annCategory}
                        onChange={(e) => setAnnCategory(e.target.value as any)}
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg"
                      >
                        <option value="notice">General Notice</option>
                        <option value="agm">AGM Announcement</option>
                        <option value="dividend">Dividend Declaration</option>
                        <option value="loan_window">Loan Window Announcement</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Date</label>
                      <input
                        type="text"
                        required
                        value={annDate}
                        onChange={(e) => setAnnDate(e.target.value)}
                        placeholder="Current Season 2026"
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg font-mono-numbers"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">Summary (Short Preview)</label>
                      <input
                        type="text"
                        required
                        value={annSummary}
                        onChange={(e) => setAnnSummary(e.target.value)}
                        placeholder="Members are notified that the AGM convened..."
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block font-bold text-slate-700 mb-1">Full Notice Content</label>
                      <textarea
                        rows={3}
                        value={annContent}
                        onChange={(e) => setAnnContent(e.target.value)}
                        placeholder="Complete details of the announcement..."
                        className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setIsAnnFormOpen(false)}
                      className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{editingAnnId ? 'Update Notice' : 'Publish Notice'}</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Announcements List */}
              <div className="space-y-2">
                {announcements.map((a) => (
                  <div
                    key={a.id}
                    className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-3 hover:border-slate-300 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          {a.category.replace('_', ' ')}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono-numbers">{a.date}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-xs mt-1 truncate">{a.titleEn}</h4>
                      <p className="text-[11px] text-slate-500 truncate">{a.summaryEn}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleOpenEditAnnouncement(a)}
                        className="p-1 text-slate-500 hover:text-emerald-700 rounded transition-colors"
                        title="Edit bulletin"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onDeleteAnnouncement(a.id);
                        }}
                        className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                        title="Delete bulletin"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: APPLICATIONS */}
          {activeTab === 'applications' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-slate-700 uppercase tracking-wider block">
                    Incoming Member Onboarding &amp; Loan Requests
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Review digital applications submitted by citizens in Gakenke District.
                  </span>
                </div>
                <span className="text-slate-500 text-xs font-mono font-bold">
                  Total: {applications.length} Record{applications.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Ref Code</th>
                      <th className="py-2.5 px-3">Citizen Name</th>
                      <th className="py-2.5 px-3">National ID</th>
                      <th className="py-2.5 px-3">Phone</th>
                      <th className="py-2.5 px-3">Sector</th>
                      <th className="py-2.5 px-3">Target Account / Loan</th>
                      <th className="py-2.5 px-3">Initial / Requested</th>
                      <th className="py-2.5 px-3">Status</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono-numbers">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-3 font-bold text-slate-800 font-mono">{app.appNumber}</td>
                        <td className="py-2.5 px-3 font-semibold text-slate-900">{app.fullName}</td>
                        <td className="py-2.5 px-3 text-slate-600">{app.idNumber}</td>
                        <td className="py-2.5 px-3 text-slate-600">{app.phone}</td>
                        <td className="py-2.5 px-3 text-slate-600 capitalize">{app.sector}</td>
                        <td className="py-2.5 px-3 text-slate-700 capitalize">{app.accountType.replace('_', ' ')}</td>
                        <td className="py-2.5 px-3 font-bold text-slate-900">
                          {app.initialAmount.toLocaleString()} RWF
                        </td>
                        <td className="py-2.5 px-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              app.status === 'approved'
                                ? 'bg-emerald-100 text-emerald-800'
                                : app.status === 'rejected'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {app.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <div className="flex items-center justify-end gap-1 font-sans">
                            {app.status !== 'approved' && (
                              <button
                                type="button"
                                onClick={() => onUpdateApplicationStatus(app.id, 'approved')}
                                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-bold transition-colors cursor-pointer"
                              >
                                Approve
                              </button>
                            )}
                            {app.status !== 'rejected' && (
                              <button
                                type="button"
                                onClick={() => onUpdateApplicationStatus(app.id, 'rejected')}
                                className="px-2 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded text-[11px] font-bold transition-colors cursor-pointer"
                              >
                                Reject
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => {
                                onDeleteApplication(app.id);
                              }}
                              className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                              title="Delete record"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: BRANCHES & OUTPOSTS */}
          {activeTab === 'branches' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-slate-700 uppercase tracking-wider block">Branches &amp; Outposts Manager</span>
                  <span className="text-[11px] text-slate-400">Manage SACCO branches, sub-branches, and their managers.</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsBranchFormOpen(true)}
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Branch</span>
                </button>
              </div>

              {isBranchFormOpen && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onAddBranch({ name: branchName, sector: branchSector, managerName: branchManager, managerPhone: branchPhone, locationDetailsEn: '', locationDetailsRw: '', operatingHours: '', cashService: true, momoAgent: true, coordinates: { lat: 0, lng: 0 } });
                    setIsBranchFormOpen(false);
                    setBranchName('');
                  }}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3"
                >
                  <input type="text" placeholder="Branch Name" value={branchName} onChange={(e) => setBranchName(e.target.value)} className="w-full px-2 py-1 text-xs border rounded" />
                  <input type="text" placeholder="Sector" value={branchSector} onChange={(e) => setBranchSector(e.target.value)} className="w-full px-2 py-1 text-xs border rounded" />
                  <div className="flex gap-2">
                    <button type="submit" className="px-3 py-1 bg-emerald-700 text-white text-xs font-bold rounded">Save Branch</button>
                    <button type="button" onClick={() => setIsBranchFormOpen(false)} className="px-3 py-1 bg-slate-200 text-slate-800 text-xs font-bold rounded">Cancel</button>
                  </div>
                </form>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {branches.map((b) => (
                  <div key={b.id} className="p-3 border border-slate-200 rounded-xl bg-white space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900">{b.name}</span>
                      <button onClick={() => onDeleteBranch(b.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                    <p className="text-[11px] text-slate-500">{b.sector} | Manager: {b.managerName}</p>
                    <div className="space-y-1">
                      {b.subBranches && b.subBranches.map((s: any) => (
                        <div key={s.id} className="text-[10px] bg-slate-50 p-1 rounded flex justify-between">
                          <span>Sub: {s.name} ({s.sector})</span>
                          <button onClick={() => onDeleteSubBranch(b.id, s.id)} className="text-red-500"><Trash2 className="w-3 h-3" /></button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const subName = prompt('Sub-branch name:');
                          if (subName) onAddSubBranch(b.id, { name: subName, sector: '', managerName: '', phone: '' });
                        }}
                        className="text-[10px] text-emerald-700 font-bold"
                      >
                        + Add Sub-branch
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: INQUIRIES */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-slate-700 uppercase tracking-wider block">Contact Inquiries (Inbox)</span>
                  <span className="text-[11px] text-slate-400">View and manage messages from members.</span>
                </div>
              </div>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Name</th>
                      <th className="py-2.5 px-3">Phone</th>
                      <th className="py-2.5 px-3">Subject</th>
                      <th className="py-2.5 px-3">Message</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {contactInquiries.map((inq) => (
                      <tr key={inq.id}>
                        <td className="py-2.5 px-3 font-mono">{inq.createdAt}</td>
                        <td className="py-2.5 px-3 font-bold">{inq.name}</td>
                        <td className="py-2.5 px-3">{inq.phone}</td>
                        <td className="py-2.5 px-3">{inq.subject}</td>
                        <td className="py-2.5 px-3">{inq.message}</td>
                        <td className="py-2.5 px-3 text-right">
                          <button onClick={() => onDeleteContactInquiry(inq.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-3.5 h-3.5" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: THEME COLOR */}
          {activeTab === 'theme' && (
            <div className="space-y-4 animate-in fade-in">
              <div>
                <span className="font-bold text-slate-800 uppercase tracking-wider text-xs block">
                  System Theme Color Customization
                </span>
                <span className="text-[11px] text-slate-500">
                  Select a theme palette. This dynamically transforms header, buttons, ribbons, and badges across the entire system.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {THEME_OPTIONS.map((theme) => {
                  const isSelected = currentTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => onThemeChange(theme.id)}
                      className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                        isSelected
                          ? 'border-emerald-600 bg-white ring-2 ring-emerald-500 shadow-md'
                          : 'border-slate-200 bg-white hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-5 h-5 rounded-full border border-slate-300 shadow-xs"
                            style={{ backgroundColor: theme.primaryHex }}
                          />
                          <span className="font-bold text-xs text-slate-900">{theme.nameEn}</span>
                        </div>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="h-2 rounded flex-1" style={{ backgroundColor: theme.primaryHex }} />
                        <div className="h-2 rounded w-8" style={{ backgroundColor: theme.accentHex }} />
                        <div className="h-2 rounded w-6" style={{ backgroundColor: theme.bgLightHex, border: '1px solid #e2e8f0' }} />
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-slate-500">
                        <span>{theme.nameRw}</span>
                        <span className="font-mono">{theme.primaryHex}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB: GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-4 animate-in fade-in">
              <div>
                <span className="font-bold text-slate-800 uppercase tracking-wider text-xs block">
                  Admin CRUD &amp; Customization Quick Reference Guide
                </span>
                <span className="text-[11px] text-slate-500">
                  Complete manual of how to manage pictures, contacts, navigation links, and cooperative data.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Guide 1: Edit Contacts */}
                <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-2 text-xs shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-emerald-700" />
                      <span>1. Edit Phone, Email &amp; WhatsApp</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab('contact')}
                      className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-0.5 text-[11px]"
                    >
                      <span>Jump</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside text-[11px] leading-relaxed">
                    <li>Go to the <strong>Contacts &amp; Phone</strong> tab.</li>
                    <li>Update phone number (e.g. 0786422080), manager direct line, email, or WhatsApp number.</li>
                    <li>Click <strong>Save Contact Information</strong> to update all links, chat buttons, and headers immediately.</li>
                  </ul>
                </div>

                {/* Guide 2: Upload Pictures */}
                <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-2 text-xs shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-emerald-700" />
                      <span>2. Upload or Change Pictures Anywhere</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab('pictures')}
                      className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-0.5 text-[11px]"
                    >
                      <span>Jump</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside text-[11px] leading-relaxed">
                    <li>Go to <strong>System Pictures</strong> or <strong>Leaders</strong> or <strong>Moments</strong>.</li>
                    <li>Click <strong>Upload from Device</strong> to select any photo file from your phone or PC.</li>
                    <li>Alternatively, enter an image URL or click one of the quick presets.</li>
                  </ul>
                </div>

                {/* Guide 3: Manage Navigation */}
                <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-2 text-xs shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-emerald-700" />
                      <span>3. Manage What is Inside Navs</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab('navigation')}
                      className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-0.5 text-[11px]"
                    >
                      <span>Jump</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside text-[11px] leading-relaxed">
                    <li>Go to the <strong>Navs Manager</strong> tab.</li>
                    <li>Toggle visibility (show/hide), click the pencil to edit title in English/Kinyarwanda, or delete unnecessary links.</li>
                    <li>Click <strong>+ Add Nav Link</strong> to add custom menu links pointing to any section.</li>
                  </ul>
                </div>

                {/* Guide 4: Edit & Delete Leaders & Moments */}
                <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-2 text-xs shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-700" />
                      <span>4. Edit or Delete Leaders &amp; Moments</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab('leaders')}
                      className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-0.5 text-[11px]"
                    >
                      <span>Jump</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside text-[11px] leading-relaxed">
                    <li>Click the pencil icon on any item card to edit names, roles, or upload a new photo.</li>
                    <li>Click the red trash can icon to delete any leader, milestone moment, or product.</li>
                    <li>All edits persist permanently in localStorage.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-700" />
            <span>
              Executive Session: <strong>{saccoInfo.email}</strong> · Tel: {saccoInfo.phone} · USSD: {saccoInfo.ussdCode}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs transition-colors cursor-pointer"
          >
            Close Console
          </button>
        </div>
      </div>
    </div>
  );
};
