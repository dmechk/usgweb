export type Language = 'en' | 'rw' | 'fr';

export type ThemeColor = 'emerald' | 'ochre' | 'blue' | 'teal' | 'terracotta' | 'charcoal';

export interface ThemeOption {
  id: ThemeColor;
  nameEn: string;
  nameRw: string;
  primaryHex: string;
  accentHex: string;
  bgLightHex: string;
  badgeLabel: string;
}

export interface SaccoProduct {
  id: string;
  category: 'savings' | 'loans' | 'digital';
  titleEn: string;
  titleRw: string;
  taglineEn: string;
  taglineRw: string;
  interestRate: string;
  minAmount: number;
  maxAmount: number;
  duration: string;
  featuresEn: string[];
  featuresRw: string[];
  requirementsEn: string[];
  requirementsRw: string[];
  popular?: boolean;
}

export interface BranchOutpost {
  id: string;
  name: string;
  sector: string;
  locationDetailsEn: string;
  locationDetailsRw: string;
  managerName: string;
  managerPhone: string;
  operatingHours: string;
  cashService: boolean;
  momoAgent: boolean;
  subBranches?: { id: string; name: string; sector: string; managerName: string; phone: string }[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Announcement {
  id: string;
  titleEn: string;
  titleRw: string;
  date: string;
  category: 'agm' | 'dividend' | 'loan_window' | 'notice';
  summaryEn: string;
  summaryRw: string;
  contentEn: string;
  contentRw: string;
}

export interface LeaderMember {
  id: string;
  name: string;
  roleEn: string;
  roleRw: string;
  category: string;
  qualificationEn: string;
  qualificationRw: string;
  imageUrl: string;
  phone?: string;
}

export interface InstitutionMoment {
  id: string;
  titleEn: string;
  titleRw: string;
  date: string;
  category: 'agm_dividend' | 'award' | 'community' | 'branch_opening' | 'training';
  imageUrl: string;
  captionEn: string;
  captionRw: string;
}

export interface ApplicationRecord {
  id: string;
  appNumber: string;
  fullName: string;
  idNumber: string;
  phone: string;
  sector: string;
  accountType: string;
  occupation: string;
  initialAmount: number;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface MemberAccount {
  accountNumber: string;
  holderName: string;
  sector: string;
  accountType: string;
  balanceRwf: number;
  compulsorySavingsRwf: number;
  activeLoanBalanceRwf: number;
  sharesCount: number;
  joinedYear: number;
  phone: string;
  transactions: {
    id: string;
    date: string;
    type: 'deposit' | 'withdrawal' | 'loan_repayment' | 'dividend';
    amount: number;
    channel: 'MoMo' | 'Teller' | 'Agent' | 'Dividend';
    reference: string;
  }[];
}

export interface SaccoContactInfo {
  name: string;
  shortName: string;
  district: string;
  province: string;
  headquarters: string;
  phone: string;
  managerPhone: string;
  email: string;
  supportEmail: string;
  whatsapp: string;
  whatsappMessage: string;
  ussdCode: string;
  operatingHoursEn: string;
  operatingHoursRw: string;
  weekdayHours?: string;
  saturdayHours?: string;
  sundayHours?: string;
  rcaRegistration: string;
  regulatoryLicense?: string;
  bnrLicense?: string;
  activeMembers: number;
  totalSavingsRwf: number;
  totalLoansDisbursedRwf: number;
  annualDividendPercent: number;
  sectorsCovered: number;
  branchesCount: number;
  yearFounded: number;
}

export interface NavItemConfig {
  id: string;
  labelEn: string;
  labelRw: string;
  targetSection: string;
  visible: boolean;
  isPrimary?: boolean;
}

export interface SystemImagesConfig {
  heroBanking: string;
  farmersCoop: string;
  entrepreneur: string;
  governance: string;
  managerPortrait?: string;
  boardChairPortrait?: string;
  bartazalPortrait?: string;
  [key: string]: string | undefined;
}

