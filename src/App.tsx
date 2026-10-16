/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Language,
  SaccoProduct,
  LeaderMember,
  Announcement,
  ApplicationRecord,
  InstitutionMoment,
  ThemeColor,
  SaccoContactInfo,
  NavItemConfig,
  SystemImagesConfig,
  BranchOutpost,
} from './types';
import {
  SACCO_INFO,
  INITIAL_NAV_ITEMS,
  INITIAL_SYSTEM_IMAGES,
  SACCO_PRODUCTS,
  INITIAL_LEADERS,
  ANNOUNCEMENTS,
  INITIAL_APPLICATIONS,
  INITIAL_MOMENTS,
  THEME_OPTIONS,
} from './data/saccoData';
import { BRANCHES_DATA } from './data/saccoData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { AboutUs } from './components/AboutUs';
import { ProductCatalog } from './components/ProductCatalog';

import { BoardAndManagers } from './components/BoardAndManagers';
import { Gallery } from './components/Gallery';
import { BranchLocator } from './components/BranchLocator';
import { GovernanceAndNews } from './components/GovernanceAndNews';
import { AccountApplicationModal } from './components/AccountApplicationModal';
import { ManagerLoginModal } from './components/ManagerLoginModal';
import { AdminConsoleModal } from './components/AdminConsoleModal';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { LoanCalculator } from './components/LoanCalculator';
import { Shield, Phone, ImageIcon, Compass, Settings, LogOut } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  // Theme Color State
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_theme_color') as ThemeColor;
      if (['emerald', 'ochre', 'blue', 'teal', 'terracotta', 'charcoal'].includes(saved)) {
        return saved;
      }
      return 'emerald';
    } catch {
      return 'emerald';
    }
  });

  // Modal Visibility States
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [isManagerLoginModalOpen, setIsManagerLoginModalOpen] = useState(false);
  const [isAdminConsoleOpen, setIsAdminConsoleOpen] = useState(false);
  const [adminConsoleInitialTab, setAdminConsoleInitialTab] = useState<
    'contact' | 'pictures' | 'navigation' | 'leaders' | 'moments' | 'products' | 'announcements' | 'applications' | 'theme' | 'guide'
  >('contact');

  // Authentication State (Manager: Mbitsemunda Phocas / Board: Wellarse, Bartazal)
  const [isManagerLoggedIn, setIsManagerLoggedIn] = useState<boolean>(() => {
    try {
      return localStorage.getItem('ubumwe_manager_session') === 'true';
    } catch {
      return false;
    }
  });
  const [managerName, setManagerName] = useState<string>(() => {
    try {
      const stored = localStorage.getItem('ubumwe_manager_name');
      if (stored && !stored.includes('Beata')) {
        return stored;
      }
      return 'Mbitsemunda Phocas (Manager)';
    } catch {
      return 'Mbitsemunda Phocas (Manager)';
    }
  });

  // Dynamic Contact & Organization Information
  const [saccoInfo, setSaccoInfo] = useState<SaccoContactInfo>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_sacco_info');
      return saved ? JSON.parse(saved) : SACCO_INFO;
    } catch {
      return SACCO_INFO;
    }
  });

  // Dynamic Navigation Items
  const [navItems, setNavItems] = useState<NavItemConfig[]>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_nav_items');
      return saved ? JSON.parse(saved) : INITIAL_NAV_ITEMS;
    } catch {
      return INITIAL_NAV_ITEMS;
    }
  });

  // Dynamic System Images (Hero, Leaders, Moments, Co-op Photos)
  const [systemImages, setSystemImages] = useState<SystemImagesConfig>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_system_images');
      return saved ? JSON.parse(saved) : INITIAL_SYSTEM_IMAGES;
    } catch {
      return INITIAL_SYSTEM_IMAGES;
    }
  });

  // Dynamic Leaders (Wellarse, Mbitsemunda Phocas, Bartazal)
  const [leaders, setLeaders] = useState<LeaderMember[]>(() => {
    try {
      const version = localStorage.getItem('ubumwe_leaders_version');
      const saved = localStorage.getItem('ubumwe_leaders');
      if (version === 'v5' && saved) {
        return JSON.parse(saved);
      }
      localStorage.setItem('ubumwe_leaders_version', 'v5');
      localStorage.setItem('ubumwe_leaders', JSON.stringify(INITIAL_LEADERS));
      return INITIAL_LEADERS;
    } catch {
      return INITIAL_LEADERS;
    }
  });

  const [products, setProducts] = useState<SaccoProduct[]>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_products');
      return saved ? JSON.parse(saved) : SACCO_PRODUCTS;
    } catch {
      return SACCO_PRODUCTS;
    }
  });

  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_announcements');
      return saved ? JSON.parse(saved) : ANNOUNCEMENTS;
    } catch {
      return ANNOUNCEMENTS;
    }
  });

  const [moments, setMoments] = useState<InstitutionMoment[]>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_moments');
      return saved ? JSON.parse(saved) : INITIAL_MOMENTS;
    } catch {
      return INITIAL_MOMENTS;
    }
  });

  const [applications, setApplications] = useState<ApplicationRecord[]>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_applications');
      return saved ? JSON.parse(saved) : INITIAL_APPLICATIONS;
    } catch {
      return INITIAL_APPLICATIONS;
    }
  });

  const [branches, setBranches] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_branches');
      return saved ? JSON.parse(saved) : BRANCHES_DATA;
    } catch {
      return BRANCHES_DATA;
    }
  });

  const [contactInquiries, setContactInquiries] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('ubumwe_contact_inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Pre-fill loan calculator detail state
  const [prefillLoan, setPrefillLoan] = useState<{
    amount: number;
    tenureMonths: number;
    loanType: string;
    monthlyPayment: number;
  } | null>(null);
  const [prefillProductType, setPrefillProductType] = useState<string>('');

  // Save states to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_sacco_info', JSON.stringify(saccoInfo));
    } catch (e) {
      console.warn('Unable to save sacco info', e);
    }
  }, [saccoInfo]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_nav_items', JSON.stringify(navItems));
    } catch (e) {
      console.warn('Unable to save nav items', e);
    }
  }, [navItems]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_system_images', JSON.stringify(systemImages));
    } catch (e) {
      console.warn('Unable to save system images', e);
    }
  }, [systemImages]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_leaders', JSON.stringify(leaders));
    } catch (e) {
      console.warn('Unable to save leaders to localStorage', e);
    }
  }, [leaders]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_products', JSON.stringify(products));
    } catch (e) {
      console.warn('Unable to save products to localStorage', e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_announcements', JSON.stringify(announcements));
    } catch (e) {
      console.warn('Unable to save announcements to localStorage', e);
    }
  }, [announcements]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_moments', JSON.stringify(moments));
    } catch (e) {
      console.warn('Unable to save moments to localStorage', e);
    }
  }, [moments]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_applications', JSON.stringify(applications));
    } catch (e) {
      console.warn('Unable to save applications to localStorage', e);
    }
  }, [applications]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_branches', JSON.stringify(branches));
    } catch {}
  }, [branches]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_contact_inquiries', JSON.stringify(contactInquiries));
    } catch {}
  }, [contactInquiries]);

  useEffect(() => {
    try {
      localStorage.setItem('ubumwe_theme_color', currentTheme);
      document.documentElement.setAttribute('data-theme', currentTheme);
      document.body.setAttribute('data-theme', currentTheme);
    } catch {}
  }, [currentTheme]);

  // Auth Handlers
  const handleManagerLoginSuccess = (user: { name: string; email: string; role: string }) => {
    setIsManagerLoggedIn(true);
    setManagerName(user.name);
    try {
      localStorage.setItem('ubumwe_manager_session', 'true');
      localStorage.setItem('ubumwe_manager_name', user.name);
    } catch {}
  };

  const handleManagerLogout = () => {
    setIsManagerLoggedIn(false);
    try {
      localStorage.removeItem('ubumwe_manager_session');
      localStorage.removeItem('ubumwe_manager_name');
    } catch {}
  };

  const handleOpenAdminConsole = (tab?: string) => {
    if (tab) {
      setAdminConsoleInitialTab(tab as any);
    }
    setIsAdminConsoleOpen(true);
  };

  // Contact Info Handlers
  const handleUpdateSaccoInfo = (updated: Partial<SaccoContactInfo>) => {
    setSaccoInfo((prev) => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem('ubumwe_sacco_info', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Navigation Items Handlers
  const handleAddNavItem = (newItem: Omit<NavItemConfig, 'id'>) => {
    const itemWithId: NavItemConfig = {
      ...newItem,
      id: `nav-${Date.now()}`,
    };
    setNavItems((prev) => [...prev, itemWithId]);
  };

  const handleUpdateNavItem = (id: string, updated: Partial<NavItemConfig>) => {
    setNavItems((prev) => prev.map((n) => (n.id === id ? { ...n, ...updated } : n)));
  };

  const handleDeleteNavItem = (id: string) => {
    setNavItems((prev) => prev.filter((n) => n.id !== id));
  };

  const handleReorderNavItems = (items: NavItemConfig[]) => {
    setNavItems(items);
  };

  const handleResetNavItems = () => {
    setNavItems(INITIAL_NAV_ITEMS);
  };

  // System Images Handlers
  const handleUpdateSystemImage = (key: string, url: string) => {
    setSystemImages((prev) => {
      const next = { ...prev, [key]: url };
      try {
        localStorage.setItem('ubumwe_system_images', JSON.stringify(next));
      } catch {}
      return next;
    });

    // Cross-sync portraits with leaders list
    if (key === 'managerPortrait') {
      setLeaders((prev) =>
        prev.map((l) =>
          l.name.toLowerCase().includes('mbitsemunda') || l.roleEn.toLowerCase().includes('manager')
            ? { ...l, imageUrl: url }
            : l
        )
      );
    } else if (key === 'boardChairPortrait') {
      setLeaders((prev) =>
        prev.map((l) => (l.name.toLowerCase().includes('wellarse') ? { ...l, imageUrl: url } : l))
      );
    } else if (key === 'bartazalPortrait') {
      setLeaders((prev) =>
        prev.map((l) => (l.name.toLowerCase().includes('bartazal') ? { ...l, imageUrl: url } : l))
      );
    }
  };

  // CRUD Handlers for Leaders
  const handleAddLeader = (newLeader: Omit<LeaderMember, 'id'>) => {
    const leaderWithId: LeaderMember = {
      ...newLeader,
      id: `lead-${Date.now()}`,
    };
    setLeaders((prev) => [leaderWithId, ...prev]);
  };

  const handleUpdateLeader = (id: string, updated: Partial<LeaderMember>) => {
    setLeaders((prev) => prev.map((l) => (l.id === id ? { ...l, ...updated } : l)));
  };

  const handleDeleteLeader = (id: string) => {
    setLeaders((prev) => prev.filter((l) => l.id !== id));
  };

  // CRUD Handlers for Products
  const handleAddProduct = (newProduct: Omit<SaccoProduct, 'id'>) => {
    const productWithId: SaccoProduct = {
      ...newProduct,
      id: `prod-${Date.now()}`,
    };
    setProducts((prev) => [productWithId, ...prev]);
  };

  const handleUpdateProduct = (id: string, updated: Partial<SaccoProduct>) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // CRUD Handlers for Announcements
  const handleAddAnnouncement = (newAnn: Omit<Announcement, 'id'>) => {
    const annWithId: Announcement = {
      ...newAnn,
      id: `ann-${Date.now()}`,
    };
    setAnnouncements((prev) => [annWithId, ...prev]);
  };

  const handleUpdateAnnouncement = (id: string, updated: Partial<Announcement>) => {
    setAnnouncements((prev) => prev.map((a) => (a.id === id ? { ...a, ...updated } : a)));
  };

  const handleDeleteAnnouncement = (id: string) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
  };

  // CRUD Handlers for Moments & Gallery
  const handleAddMoment = (newMoment: Omit<InstitutionMoment, 'id'>) => {
    const momentWithId: InstitutionMoment = {
      ...newMoment,
      id: `moment-${Date.now()}`,
    };
    setMoments((prev) => [momentWithId, ...prev]);
  };

  const handleUpdateMoment = (id: string, updated: Partial<InstitutionMoment>) => {
    setMoments((prev) => prev.map((m) => (m.id === id ? { ...m, ...updated } : m)));
  };

  const handleDeleteMoment = (id: string) => {
    setMoments((prev) => prev.filter((m) => m.id !== id));
  };

  // KYC Application Handlers
  const handleUpdateApplicationStatus = (id: string, status: 'approved' | 'rejected') => {
    setApplications((prev) => prev.map((app) => (app.id === id ? { ...app, status } : app)));
  };

  const handleDeleteApplication = (id: string) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  const handleAddBranch = (branch: Omit<BranchOutpost, 'id'>) => {
    const newB = { ...branch, id: `branch-${Date.now()}` };
    setBranches((prev) => [newB, ...prev]);
  };

  const handleUpdateBranch = (id: string, updated: Partial<BranchOutpost>) => {
    setBranches((prev) => prev.map((b) => (b.id === id ? { ...b, ...updated } : b)));
  };

  const handleDeleteBranch = (id: string) => {
    setBranches((prev) => prev.filter((b) => b.id !== id));
  };

  const handleAddSubBranch = (branchId: string, sub: { name: string; sector: string; managerName: string; phone: string }) => {
    setBranches((prev) =>
      prev.map((b) => {
        if (b.id === branchId) {
          const subList = b.subBranches || [];
          return { ...b, subBranches: [...subList, { ...sub, id: `sub-${Date.now()}` }] };
        }
        return b;
      })
    );
  };

  const handleDeleteSubBranch = (branchId: string, subId: string) => {
    setBranches((prev) =>
      prev.map((b) => {
        if (b.id === branchId) {
          return { ...b, subBranches: (b.subBranches || []).filter((s: { id: string }) => s.id !== subId) };
        }
        return b;
      })
    );
  };

  const handleDeleteContactInquiry = (id: string) => {
    setContactInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Calculator / Product Apply Interactions
  const handleApplyWithCalculation = (calc: {
    amount: number;
    tenureMonths: number;
    loanType: string;
    monthlyPayment: number;
  }) => {
    setPrefillLoan(calc);
    setIsMembershipModalOpen(true);
  };

  const handleSelectProductForLoan = (product: SaccoProduct) => {
    scrollToSection('calculator');
  };

  const handleSelectProductForAccount = (product: SaccoProduct) => {
    setPrefillProductType(product.category);
    setIsMembershipModalOpen(true);
  };

  const handleOpenMembershipModal = () => {
    setPrefillLoan(null);
    setPrefillProductType('');
    setIsMembershipModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Universal Top Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenMembershipModal={handleOpenMembershipModal}
        onNavigateToSection={scrollToSection}
        isManagerLoggedIn={isManagerLoggedIn}
        managerName={managerName}
        onOpenAdminConsole={handleOpenAdminConsole}
        onManagerLogout={handleManagerLogout}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        saccoInfo={saccoInfo}
        navItems={navItems}
        systemImages={systemImages}
      />

      {/* Main Content Area with all required sections */}
      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenMembershipModal={handleOpenMembershipModal}
          onScrollToCalculator={() => scrollToSection('calculator')}
          onOpenMomoModal={() => scrollToSection('portal')}
          onScrollToContact={() => scrollToSection('contact')}
          saccoInfo={saccoInfo}
          heroImage={systemImages.heroBanking}
          isAdmin={isManagerLoggedIn}
          onOpenAdminConsole={handleOpenAdminConsole}
        />

        {/* 4-Column Full-Width Metric Strip */}
        <Metrics currentLang={currentLang} />

        {/* 2. About Us Section (Cooperative History, Licensing, Mission) */}
        <AboutUs currentLang={currentLang} />

        {/* 3. Our Services Section (Savings, Agri Loans, SME Microfinance, USSD *541#) */}
        <ProductCatalog
          currentLang={currentLang}
          products={products}
          isAdmin={isManagerLoggedIn}
          onOpenAdminConsole={() => handleOpenAdminConsole('products')}
          onSelectProductForLoan={handleSelectProductForLoan}
          onSelectProductForAccount={handleSelectProductForAccount}
        />

        {/* Interactive Loan Repayment Calculator */}


        {/* 4. Board of Directors & Managers Section (Board Director: WELLARSE, Manager: MBITSEMUNDA PHOCAS, & Admin CRUD) */}
        <BoardAndManagers
          currentLang={currentLang}
          leaders={leaders}
          isAdmin={isManagerLoggedIn}
          onAddLeader={handleAddLeader}
          onUpdateLeader={handleUpdateLeader}
          onDeleteLeader={handleDeleteLeader}
        />

        {/* 5. Official Announcements & News for UBUMWE SACCO GAKENKE */}
        <GovernanceAndNews
          currentLang={currentLang}
          announcements={announcements}
          isAdmin={isManagerLoggedIn}
          onOpenAdminConsole={() => handleOpenAdminConsole('announcements')}
        />

        {/* 6. Place where we post Best Moments in our Institution & Gallery */}
        <Gallery
          currentLang={currentLang}
          moments={moments}
          isAdmin={isManagerLoggedIn}
          onAddMoment={handleAddMoment}
          onUpdateMoment={handleUpdateMoment}
          onDeleteMoment={handleDeleteMoment}
        />

        {/* 7. Gakenke District Branch & Outpost Directory */}
        <BranchLocator currentLang={currentLang} />

        {/* Interactive Loan Repayment Calculator */}
        <section id="calculator" className="bg-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <LoanCalculator currentLang={currentLang} onApplyWithCalculation={handleApplyWithCalculation} />
          </div>
        </section>

      </main>

      {/* Footer with Imigongo Framing, Credentials, Manager Sign In, & Theme Customizer */}
      <Footer
        currentLang={currentLang}
        onNavigateToSection={scrollToSection}
        onOpenMembershipModal={handleOpenMembershipModal}
        isManagerLoggedIn={isManagerLoggedIn}
        managerName={managerName}
        onOpenManagerLogin={() => setIsManagerLoginModalOpen(true)}
        onOpenAdminConsole={handleOpenAdminConsole}
        onManagerLogout={handleManagerLogout}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        saccoInfo={saccoInfo}
        navItems={navItems}
      />

      {/* Online Membership & Credit Application Modal */}
      <AccountApplicationModal
        isOpen={isMembershipModalOpen}
        onClose={() => {
          setIsMembershipModalOpen(false);
          setPrefillLoan(null);
        }}
        currentLang={currentLang}
        prefillLoan={prefillLoan}
        prefillProductType={prefillProductType}
      />

      {/* Manager Sign In Modal (Accessed Exclusively From Footer) */}
      <ManagerLoginModal
        isOpen={isManagerLoginModalOpen}
        onClose={() => setIsManagerLoginModalOpen(false)}
        onLoginSuccess={handleManagerLoginSuccess}
      />

      {/* Manager / Admin Console (Comprehensive CRUD Hub on Contacts, Pictures, Navs, Leaders, Moments, Products, KYC Applications, & Themes) */}
      <AdminConsoleModal
        isOpen={isAdminConsoleOpen}
        onClose={() => setIsAdminConsoleOpen(false)}
        currentLang={currentLang}
        initialTab={adminConsoleInitialTab}
        saccoInfo={saccoInfo}
        onUpdateSaccoInfo={handleUpdateSaccoInfo}
        navItems={navItems}
        onAddNavItem={handleAddNavItem}
        onUpdateNavItem={handleUpdateNavItem}
        onDeleteNavItem={handleDeleteNavItem}
        onReorderNavItems={handleReorderNavItems}
        onResetNavItems={handleResetNavItems}
        systemImages={systemImages}
        onUpdateSystemImage={handleUpdateSystemImage}
        products={products}
        announcements={announcements}
        applications={applications}
        moments={moments}
        leaders={leaders}
        currentTheme={currentTheme}
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
        onAddAnnouncement={handleAddAnnouncement}
        onUpdateAnnouncement={handleUpdateAnnouncement}
        onDeleteAnnouncement={handleDeleteAnnouncement}
        onAddMoment={handleAddMoment}
        onUpdateMoment={handleUpdateMoment}
        onDeleteMoment={handleDeleteMoment}
        onAddLeader={handleAddLeader}
        onUpdateLeader={handleUpdateLeader}
        onDeleteLeader={handleDeleteLeader}
        onUpdateApplicationStatus={handleUpdateApplicationStatus}
        onDeleteApplication={handleDeleteApplication}
        onThemeChange={setCurrentTheme}
        branches={branches}
        onAddBranch={handleAddBranch}
        onUpdateBranch={handleUpdateBranch}
        onDeleteBranch={handleDeleteBranch}
        onAddSubBranch={handleAddSubBranch}
        onDeleteSubBranch={handleDeleteSubBranch}
        contactInquiries={contactInquiries}
        onDeleteContactInquiry={handleDeleteContactInquiry}
      />

      {/* Persistent Floating WhatsApp Quick-Action Widget */}
      <FloatingWhatsApp currentLang={currentLang} saccoInfo={saccoInfo} />

      {/* Active Manager Floating Quick Bar (Provides Admin Immediate Actions Everywhere on Screen) */}
      {isManagerLoggedIn && (
        <aside
          aria-label="Admin quick action bar"
          className="fixed bottom-6 left-6 z-40 bg-slate-900/95 text-white backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-slate-700 flex items-center gap-1.5 animate-in fade-in slide-in-from-bottom-3"
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-emerald-400 border-r border-slate-700">
            <Shield className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Admin Mode</span>
          </div>

          <button
            type="button"
            onClick={() => handleOpenAdminConsole('contact')}
            className="px-2.5 py-1.5 bg-slate-800 hover:bg-emerald-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Edit Phone Numbers, Email, WhatsApp"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span className="hidden md:inline">Edit Contacts</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenAdminConsole('pictures')}
            className="px-2.5 py-1.5 bg-slate-800 hover:bg-emerald-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Upload or Change Pictures Anywhere in System"
          >
            <ImageIcon className="w-3 h-3 text-emerald-400" />
            <span className="hidden md:inline">Change Pictures</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenAdminConsole('navigation')}
            className="px-2.5 py-1.5 bg-slate-800 hover:bg-emerald-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Manage Navigation Links & Menu"
          >
            <Compass className="w-3 h-3 text-emerald-400" />
            <span className="hidden md:inline">Manage Navs</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenAdminConsole()}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            title="Open Complete Admin Operations Console"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Admin Console</span>
          </button>

          <button
            type="button"
            onClick={handleManagerLogout}
            className="p-1.5 text-slate-400 hover:text-red-400 rounded-lg transition-colors cursor-pointer ml-0.5"
            title="Exit Manager Mode"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}
    </div>
  );
}
