import {
  SaccoProduct,
  BranchOutpost,
  Announcement,
  MemberAccount,
  LeaderMember,
  ApplicationRecord,
  InstitutionMoment,
  ThemeOption,
  SaccoContactInfo,
  NavItemConfig,
  SystemImagesConfig,
} from '../types';

export const SACCO_INFO: SaccoContactInfo = {
  name: "UBUMWE SACCO GAKENKE",
  shortName: "UBUMWE SACCO GAKENKE",
  district: "Gakenke District",
  province: "Northern Province, Rwanda",
  headquarters: "Gakenke Commercial Center, Sector Gakenke, Northern Province",
  phone: "0786422080",
  managerPhone: "0786422080",
  email: "ubumwesaccogakenke@gmail.com",
  supportEmail: "ubumwesaccogakenke@gmail.com",
  whatsapp: "250786422080",
  whatsappMessage: "Hello UBUMWE SACCO GAKENKE, I would like to inquire about cooperative services.",
  ussdCode: "*541#",
  operatingHoursEn: "Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:00 AM - 1:00 PM",
  operatingHoursRw: "Kuwa Mbere - Kuwa Gatanu: Saa 8:00 - 17:00 | Kuwa Gatandatu: Saa 8:00 - 13:00",
  weekdayHours: "Mon - Fri: 8:00 AM - 5:00 PM",
  saturdayHours: "Sat: 8:00 AM - 1:00 PM",
  sundayHours: "Closed (USSD & Digital banking active 24/7)",
  rcaRegistration: "RCA / COOP / 042 / 2011",
  regulatoryLicense: "RCA Microfinance Certified License No. RCA-MF-2012-088",
  bnrLicense: "RCA Microfinance Certified License No. RCA-MF-2012-088",
  activeMembers: 18640,
  totalSavingsRwf: 4850000000,
  totalLoansDisbursedRwf: 3620000000,
  annualDividendPercent: 9.8,
  sectorsCovered: 13,
  branchesCount: 6,
  yearFounded: 2011,
};

export const INITIAL_NAV_ITEMS: NavItemConfig[] = [
  { id: 'nav-home', labelEn: 'Home', labelRw: 'Ahabanza', targetSection: 'hero', visible: true },
  { id: 'nav-about', labelEn: 'About Us', labelRw: 'Abo Turibo', targetSection: 'about', visible: true },
  { id: 'nav-products', labelEn: 'Our Services', labelRw: 'Serivisi Zacu', targetSection: 'products', visible: true },
  { id: 'nav-leadership', labelEn: 'Board & Staff', labelRw: 'Abayobozi n\'Abakozi', targetSection: 'leadership', visible: true },
  { id: 'nav-announcements', labelEn: 'News', labelRw: 'Amakuru', targetSection: 'announcements', visible: true },
  { id: 'nav-gallery', labelEn: 'Gallery', labelRw: 'Amafoto', targetSection: 'gallery', visible: true, isPrimary: true },
  { id: 'nav-branches', labelEn: 'Branches & Outposts', labelRw: 'Amashami', targetSection: 'branches', visible: true },
  { id: 'nav-contact', labelEn: 'Contact Us', labelRw: 'Twandikire', targetSection: 'contact', visible: true, isPrimary: true },
];

export const INITIAL_SYSTEM_IMAGES: SystemImagesConfig = {
  saccoLogo: "/src/assets/images/ubumwe_sacco_logo_1792063211447.jpg",
  heroBanking: "/src/assets/images/mbitsemunda_phocas_desk.jpg",
  farmersCoop: "/src/assets/images/farmers_cooperative_1791989969904.jpg",
  entrepreneur: "/src/assets/images/entrepreneur_business_1791989970089.jpg",
  governance: "/src/assets/images/community_governance_1791989970347.jpg",
  managerPortrait: "/src/assets/images/mbitsemunda_phocas_desk.jpg",
  boardChairPortrait: "/src/assets/images/portrait_director_wellars_1791994899049.jpg",
  bartazalPortrait: "/src/assets/images/bartazal_speaking.jpg",
};

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'emerald',
    nameEn: 'Ubumwe Emerald (Classic)',
    nameRw: 'Icyatsi cy\'Ubumwe',
    primaryHex: '#047857',
    accentHex: '#10b981',
    bgLightHex: '#ecfdf5',
    badgeLabel: 'Default SACCO Green',
  },
  {
    id: 'ochre',
    nameEn: 'Imigongo Ochre & Gold',
    nameRw: 'Zahabu n\'Irangi rya Kera',
    primaryHex: '#b45309',
    accentHex: '#f59e0b',
    bgLightHex: '#fffbeb',
    badgeLabel: 'Warm Heritage Amber',
  },
  {
    id: 'blue',
    nameEn: 'Akagera Royal Blue',
    nameRw: 'Ubururu bw\'Akagera',
    primaryHex: '#1d4ed8',
    accentHex: '#3b82f6',
    bgLightHex: '#eff6ff',
    badgeLabel: 'Lake & Trust Blue',
  },
  {
    id: 'teal',
    nameEn: 'Virunga Forest Teal',
    nameRw: 'Icyatsi cy\'Ibirunga',
    primaryHex: '#0f766e',
    accentHex: '#14b8a6',
    bgLightHex: '#f0fdfa',
    badgeLabel: 'Tea Slopes Teal',
  },
  {
    id: 'terracotta',
    nameEn: 'Gakenke Terracotta',
    nameRw: 'Umutuku w\'Ubutaka bw\'Imisozi',
    primaryHex: '#c2410c',
    accentHex: '#ea580c',
    bgLightHex: '#fff7ed',
    badgeLabel: 'Rich Volcanic Soil',
  },
  {
    id: 'charcoal',
    nameEn: 'Basalt Charcoal & Silver',
    nameRw: 'Ibuye ry\'Urutare',
    primaryHex: '#334155',
    accentHex: '#64748b',
    bgLightHex: '#f8fafc',
    badgeLabel: 'Executive Rock Slate',
  },
];

export const SACCO_IMAGES = {
  heroBanking: "/src/assets/images/mbitsemunda_phocas_desk.jpg",
  farmersCoop: "/src/assets/images/farmers_cooperative_1791989969904.jpg",
  entrepreneur: "/src/assets/images/entrepreneur_business_1791989970089.jpg",
  governance: "/src/assets/images/community_governance_1791989970347.jpg",
};

export const SACCO_PRODUCTS: SaccoProduct[] = [
  {
    id: "compulsory_savings",
    category: "savings",
    titleEn: "Compulsory Member Savings (Uruhare)",
    titleRw: "Ubwizigame bw'Uruhare rw'Umunyamuryango",
    taglineEn: "Core cooperative equity generating annual dividends and qualifying members for low-interest loans.",
    taglineRw: "Ubwizigame bw'ifatizo butuma uhabwa inyungu ku migabane kandi bukakwemerera kwaka inguzanyo.",
    interestRate: "9.8% Annual Dividend",
    minAmount: 5000,
    maxAmount: 10000000,
    duration: "Continuous",
    popular: true,
    featuresEn: [
      "Multiplier of up to 4x your accumulated savings for credit",
      "Earns annual profit dividends declared at the AGM",
      "Instant USSD deposits via *541# on your phone",
      "RCA regulated cooperative equity & secure shares"
    ],
    featuresRw: [
      "Bikwemerera kwaka inguzanyo yikubye inshuro 4 z'ubwizigame bwawe",
      "Bihabwa inyungu y'umwaka ku migabane",
      "Kubitsa mu buryo bworoshye ukoresheje USSD *541#",
      "Bifite umutekano wizejwe n'amabwiriza y'amategeko ya koperative na RCA"
    ],
    requirementsEn: [
      "Rwanda National ID (16 Digits)",
      "Initial minimum member share purchase of 10,000 RWF"
    ],
    requirementsRw: [
      "Indangamuntu y'u Rwanda",
      "Kugura umugabane w'ifatizo utari munsi ya 10,000 RWF"
    ]
  },
  {
    id: "term_deposit",
    category: "savings",
    titleEn: "Fixed Term Deposit Account",
    titleRw: "Konti yo Kuzigama Igihe Kirekire",
    taglineEn: "Guaranteed high-yield returns for cooperatives, farmer associations, and individuals.",
    taglineRw: "Inyungu yisumbuye yizewe ku makoperative, amakoperative y'abahinzi n'abantu ku giti cyabo.",
    interestRate: "8.5% - 10.5% per annum",
    minAmount: 100000,
    maxAmount: 50000000,
    duration: "3 to 24 Months",
    featuresEn: [
      "Locked competitive interest rate for fixed tenures",
      "Official Certificate of Term Deposit issued",
      "Usable as collateral for instant member credit"
    ],
    featuresRw: [
      "Inyungu yizewe mu gihe cyose wazigamye",
      "Icyemezo cy'umutungo kizigamye (Certificate)",
      "Bikoreshwa nk'ingwate mu kwaka inguzanyo yihuse"
    ],
    requirementsEn: [
      "Active Ubumwe SACCO Membership",
      "Minimum deposit of 100,000 RWF"
    ],
    requirementsRw: [
      "Kuba uri umunyamuryango wa Ubumwe SACCO",
      "Ubwizigame butari munsi ya 100,000 RWF"
    ]
  },
  {
    id: "agricultural_loan",
    category: "loans",
    titleEn: "Ubuhinzi n'Ubworozi (Agri-Credit)",
    titleRw: "Inguzanyo y'Ubuhinzi n'Ubworozi",
    taglineEn: "Harvest-aligned financing for coffee, tea, maize, Irish potato, and livestock farmers in Gakenke.",
    taglineRw: "Yagenewe abahinzi b'ikawa, icyayi, ibigori, ibirayi n'aborozi bo muri Gakenke.",
    interestRate: "1.1% per month (13.2% p.a.)",
    minAmount: 100000,
    maxAmount: 10000000,
    duration: "4 to 18 Months",
    popular: true,
    featuresEn: [
      "Repayment synchronized with coffee harvest and crop seasons",
      "Up to 4 months grace period before first principal installment",
      "Fertilizer, seed inputs, and equipment coverage"
    ],
    featuresRw: [
      "Kwishyura guhura n'igihe cy'isarura ry'ikawa n'ibindi bihingwa",
      "Amezi agera kuri 4 y'amahirwe utarishyura igishoro",
      "Kugura ifumbire, imbuto n'ibikoresho by'ubuhinzi"
    ],
    requirementsEn: [
      "Active membership with regular savings",
      "Farmland ownership or cooperative certificate"
    ],
    requirementsRw: [
      "Kuba uri umunyamuryango uzigama",
      "Icyemezo cy'ubutaka cyangwa koperative y'ubuhinzi"
    ]
  },
  {
    id: "business_sme_loan",
    category: "loans",
    titleEn: "Ubucuruzi SME Micro-Loan",
    titleRw: "Inguzanyo y'Ubucuruzi n'Amaduka",
    taglineEn: "Working capital for trading shops, transport operators, and artisans in Gakenke markets.",
    taglineRw: "Kongera igishoro cy'amaduka, abafite amagaraje n'abacuruzi mu masoko ya Gakenke.",
    interestRate: "1.25% per month (15% p.a.)",
    minAmount: 200000,
    maxAmount: 15000000,
    duration: "6 to 36 Months",
    popular: true,
    featuresEn: [
      "Working capital injections for stock replenishment",
      "Flexible monthly or bi-weekly installment schedules",
      "Committee review turnaround within 48 to 72 hours"
    ],
    featuresRw: [
      "Kongera igishoro cyo kurangura ibicuruzwa",
      "Kwishyura buri kwezi cyangwa buri byumweru bibiri",
      "Igisubizo mu masaha 48 kugeza kuri 72"
    ],
    requirementsEn: [
      "TIN or trading license (where applicable)",
      "Two acceptable member guarantors"
    ],
    requirementsRw: [
      "Nimero ya TIN cyangwa uruhushya rwo gucuruza",
      "Abishingizi babiri b'abanyamuryango"
    ]
  },
  {
    id: "school_fees_emergency",
    category: "loans",
    titleEn: "School Fees & Emergency Loan (Amashuri)",
    titleRw: "Inguzanyo y'Amafaranga y'Ishuri",
    taglineEn: "Fast 24-hour turnaround to cover tuition deadlines or emergency family needs.",
    taglineRw: "Inguzanyo yihuse mu masaha 24 yo kurihira abana amashuri cyangwa gukemura ibibazo byihutirwa.",
    interestRate: "1.0% per month (12% p.a.)",
    minAmount: 50000,
    maxAmount: 1500000,
    duration: "3 to 12 Months",
    featuresEn: [
      "Direct disbursement to school account or member MoMo",
      "Minimal paperwork for members in good standing",
      "Emergency review within 24 hours"
    ],
    featuresRw: [
      "Kwishyura ako kanya kuri konti y'ishuri cyangwa MoMo",
      "Inyandiko nkeya ku banyamuryango bazigama neza",
      "Kwakirwa no kwemezwa mu masaha 24"
    ],
    requirementsEn: [
      "School admission letter or invoice",
      "Active savings coverage"
    ],
    requirementsRw: [
      "Inyandiko y'ishuri cyangwa fagitire",
      "Ubwizigame busanzwe kuri konti"
    ]
  },
  {
    id: "momo_digital_banking",
    category: "digital",
    titleEn: "USSD Banking (*541#)",
    titleRw: "Gukoresha Telefone (*541#)",
    taglineEn: "Bank 24/7 directly on your handset via *541# across MTN and Airtel networks.",
    taglineRw: "Serivisi za banki amasaha 24/7 kuri telefone yawe ukoresheje *541# kuri MTN na Airtel.",
    interestRate: "0% Commission for Deposits",
    minAmount: 500,
    maxAmount: 2000000,
    duration: "Instant (Real-time)",
    featuresEn: [
      "Dial *541# to check real-time account balances",
      "Deposit directly from Mobile Money to your SACCO savings",
      "Transfer funds or withdraw instantly",
      "Instant SMS transaction alerts"
    ],
    featuresRw: [
      "Kanda *541# urebe amafaranga asigaye kuri konti yawe",
      "Kubitsa uva kuri MoMo werekeza kuri konti yawe ya SACCO",
      "Kubikuza cyangwa kohereza amafaranga ako kanya",
      "Ubutumwa bugufi (SMS) bwihuse bugaragaza ibyakozwe"
    ],
    requirementsEn: [
      "Active telephone number registered in member profile",
      "Secret USSD PIN for authorization"
    ],
    requirementsRw: [
      "Nimero ya telefone yanditse muri dosiye yawe",
      "Umubare w'ibanga wa USSD"
    ]
  }
];

export const BRANCHES_DATA: BranchOutpost[] = [
  {
    id: "hq_gakenke_town",
    name: "Gakenke Central Main Branch",
    sector: "Gakenke",
    locationDetailsEn: "Gakenke Commercial Center, Next to District Head Office",
    locationDetailsRw: "Mu mujyi rwagati wa Gakenke, iruhande rw'Ibiro by'Akarere",
    managerName: "Emmanuel Nsabimana",
    managerPhone: "0786422080",
    operatingHours: "Mon-Fri: 7:30 AM - 5:30 PM | Sat: 8:00 AM - 2:00 PM",
    cashService: true,
    momoAgent: true,
    coordinates: { lat: -1.7042, lng: 29.7891 }
  },
  {
    id: "nemba_outpost",
    name: "Nemba Branch & Service Centre",
    sector: "Nemba",
    locationDetailsEn: "Nemba Market Center, Near Nemba District Hospital",
    locationDetailsRw: "Ku isoko rya Nemba, hafi y'Ibitaro bya Nemba",
    managerName: "Clarisse Mukamurenzi",
    managerPhone: "0786422080",
    operatingHours: "Mon-Fri: 8:00 AM - 5:00 PM | Sat: 8:00 AM - 1:00 PM",
    cashService: true,
    momoAgent: true,
    coordinates: { lat: -1.6821, lng: 29.7614 }
  },
  {
    id: "rushashi_outpost",
    name: "Rushashi Agri-Service Point",
    sector: "Rushashi",
    locationDetailsEn: "Rushashi Center, opposite Coffee Farmers Station",
    locationDetailsRw: "Rushashi rwagati, biteganye n'uruganda rw'Ikawa",
    managerName: "Jean Damascene Habimana",
    managerPhone: "0786422080",
    operatingHours: "Mon-Fri: 8:00 AM - 4:30 PM | Sat: Market Hours",
    cashService: true,
    momoAgent: true,
    coordinates: { lat: -1.7852, lng: 29.8310 }
  },
  {
    id: "janja_outpost",
    name: "Janja Trading Center Outpost",
    sector: "Janja",
    locationDetailsEn: "Janja Commercial Center, near GS Janja",
    locationDetailsRw: "Mu gasantere ka Janja, iruhande rwa GS Janja",
    managerName: "Alice Ingabire",
    managerPhone: "0786422080",
    operatingHours: "Mon-Fri: 8:00 AM - 4:30 PM",
    cashService: true,
    momoAgent: true,
    coordinates: { lat: -1.6510, lng: 29.8140 }
  },
  {
    id: "kivuruga_outpost",
    name: "Kivuruga Branch",
    sector: "Kivuruga",
    locationDetailsEn: "Kivuruga Trading Center, Main Highway",
    locationDetailsRw: "Ku gasantere k'ubucuruzi ka Kivuruga",
    managerName: "Patrice Munyaneza",
    managerPhone: "0786422080",
    operatingHours: "Mon-Fri: 8:00 AM - 5:00 PM | Sat: 8:00 AM - 1:00 PM",
    cashService: true,
    momoAgent: true,
    coordinates: { lat: -1.6215, lng: 29.7420 }
  },
  {
    id: "busengo_outpost",
    name: "Busengo Service Point",
    sector: "Busengo",
    locationDetailsEn: "Busengo Market Road, Sector Office",
    locationDetailsRw: "Mu muhanda w'isoko rya Busengo",
    managerName: "Solange Uwase",
    managerPhone: "0786422080",
    operatingHours: "Mon-Fri: 8:00 AM - 4:30 PM",
    cashService: true,
    momoAgent: true,
    coordinates: { lat: -1.5930, lng: 29.8012 }
  }
];

export const DEMO_ACCOUNTS: Record<string, MemberAccount> = {
  "UB-84920": {
    accountNumber: "UB-84920",
    holderName: "Abahuje Coffee Farmers Cooperative",
    sector: "Rushashi",
    accountType: "Cooperative Commercial & Savings",
    balanceRwf: 4850000,
    compulsorySavingsRwf: 1200000,
    activeLoanBalanceRwf: 1500000,
    sharesCount: 120,
    joinedYear: 2014,
    phone: "0786422080",
    transactions: [
      { id: "TX-9901", date: "2026-10-10", type: "deposit", amount: 650000, channel: "MoMo", reference: "USSD-541-9021" },
      { id: "TX-9844", date: "2026-09-28", type: "loan_repayment", amount: 185000, channel: "Teller", reference: "TEL-GKN-4402" },
      { id: "TX-9720", date: "2026-09-15", type: "deposit", amount: 1200000, channel: "MoMo", reference: "USSD-541-8114" },
      { id: "TX-9502", date: "2026-08-30", type: "dividend", amount: 117600, channel: "Dividend", reference: "DIV-AGM-2025" },
    ]
  },
  "UB-12044": {
    accountNumber: "UB-12044",
    holderName: "Mukamana Marie Chantal",
    sector: "Gakenke",
    accountType: "Individual SME Trader Account",
    balanceRwf: 840500,
    compulsorySavingsRwf: 350000,
    activeLoanBalanceRwf: 450000,
    sharesCount: 35,
    joinedYear: 2018,
    phone: "0786422080",
    transactions: [
      { id: "TX-9912", date: "2026-10-12", type: "deposit", amount: 45000, channel: "MoMo", reference: "USSD-541-1219" },
      { id: "TX-9860", date: "2026-10-01", type: "loan_repayment", amount: 65000, channel: "MoMo", reference: "USSD-541-8711" },
      { id: "TX-9781", date: "2026-09-20", type: "withdrawal", amount: 120000, channel: "Agent", reference: "AGT-NEM-3021" },
      { id: "TX-9610", date: "2026-08-30", type: "dividend", amount: 34300, channel: "Dividend", reference: "DIV-AGM-2025" },
    ]
  },
  "UB-33910": {
    accountNumber: "UB-33910",
    holderName: "Twizerane Women Solidarity Group",
    sector: "Nemba",
    accountType: "Solidarity Group (Itsinda)",
    balanceRwf: 1620000,
    compulsorySavingsRwf: 600000,
    activeLoanBalanceRwf: 0,
    sharesCount: 60,
    joinedYear: 2020,
    phone: "0786422080",
    transactions: [
      { id: "TX-9934", date: "2026-10-11", type: "deposit", amount: 150000, channel: "MoMo", reference: "USSD-541-6621" },
      { id: "TX-9812", date: "2026-09-25", type: "deposit", amount: 150000, channel: "Teller", reference: "TEL-NMB-1190" },
      { id: "TX-9654", date: "2026-08-30", type: "dividend", amount: 58800, channel: "Dividend", reference: "DIV-AGM-2025" },
    ]
  }
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "agm-2026",
    category: "agm",
    date: "Current Notice",
    titleEn: "15th Annual General Meeting & Dividend Allocation",
    titleRw: "Inama Rusange ya 15 no Kugabana Inyungu ku Migabane",
    summaryEn: "All active members are invited to review audited financial statements and ratify the 9.8% dividend distribution.",
    summaryRw: "Abanyamuryango bose b'imena baratumirwa kwemeza raporo y'imari n'inyungu ku migabane ya 9.8%.",
    contentEn: "The Board of Directors of Ubumwe SACCO Gakenke informs all esteemed members that the 15th AGM will take place at the Gakenke Youth Cultural Hall. Agenda: 1. Audited financials 2. Ratification of 9.8% annual dividend 3. 2027 Agricultural credit facility. Call 0786422080 or email ubumwesaccogakenke@gmail.com for inquiries.",
    contentRw: "Inama y'Ubutegetsi ya Ubumwe SACCO Gakenke iramenyesha abanyamuryango ko inama rusange izabera mu cyumba cy'urubyiruko rwa Gakenke. Ingingo: 1. Kwemeza raporo y'imari 2. Kwemeza inyungu ya 9.8% 3. Gahunda y'inguzanyo z'ubuhinzi. Baza kuri 0786422080 cyangwa ubumwesaccogakenke@gmail.com."
  },
  {
    id: "season-a-loan-window",
    category: "loan_window",
    date: "Season Facility",
    titleEn: "Agricultural Season Loan Applications Now Open",
    titleRw: "Kwakira Ubusabe bw'Inguzanyo z'Ubuhinzi n'Ihinga",
    summaryEn: "Fast-track loans for coffee washing stations, maize, potato, and livestock farmers across all 19 sectors of Gakenke.",
    summaryRw: "Inguzanyo zihuse z'abahinzi b'ikawa, ibigori, ibirayi n'aborozi bo mu mirenge 19 ya Gakenke.",
    contentEn: "Farmers in Gakenke can submit applications with up to 4 months grace period before principal payment. Apply directly at your nearest outpost in Gakenke, Nemba, Rushashi, Janja, Kivuruga, or Busengo. Support: 0786422080.",
    contentRw: "Abahinzi bo muri Gakenke bemerewe gutanga ubusabe bw'inguzanyo y'ubuhinzi ifite amezi 4 y'agahenge. Gana ishami rikwegereye muri Gakenke, Nemba, Rushashi, Janja, Kivuruga cyangwa Busengo. Telefone: 0786422080."
  },
  {
    id: "momo-integration-upgrade",
    category: "notice",
    date: "24/7 Digital",
    titleEn: "Official USSD Banking Shortcode: *541#",
    titleRw: "Serivisi ya USSD ku Mirongo Yose: *541#",
    summaryEn: "Deposit, withdraw, check balances, and repay loans directly by dialing *541# on MTN and Airtel.",
    summaryRw: "Kubitsa, kubikuza, kureba amafaranga no kwishyura inguzanyo ukoresheje *541# kuri MTN na Airtel.",
    contentEn: "Access your Ubumwe SACCO Gakenke account anytime, anywhere in Rwanda. Dial *541# to check live balances, deposit harvest proceeds from Mobile Money, or transfer money with zero bank commission.",
    contentRw: "Gera kuri konti yawe ya Ubumwe SACCO Gakenke aho uri hose mu Rwanda. Kanda *541# urebe amafaranga asigaye, ubike amafaranga y'umusaruro uva kuri MoMo cyangwa wishyure inguzanyo."
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Jean Pierre Nshimiyimana",
    roleEn: "Coffee Cooperative Chairperson, Rushashi",
    roleRw: "Umuyobozi wa Koperative y'Ikawa, Rushashi",
    image: "/src/assets/images/farmers_cooperative_1791989969904.jpg",
    quoteEn: "Through Ubumwe SACCO's agricultural facility, our cooperative paid 420 smallholder coffee farmers on time. The harvest grace period matched our export cycles.",
    quoteRw: "Kubera inguzanyo y'ubuhinzi ya Ubumwe SACCO, koperative yacu yishyuye abahinzi b'ikawa 420 ku gihe. Igihe cyo kwishyura cyahujwe n'igihe cy'isarura ryacu.",
    metric: "+35% Farmer Harvest Return"
  },
  {
    id: "test-2",
    name: "Marie Claire Mukamana",
    roleEn: "Wholesale & Hardware Store Owner, Gakenke Center",
    roleRw: "Umucuruzi w'Amaduka, Gakenke Rwagati",
    image: "/src/assets/images/entrepreneur_business_1791989970089.jpg",
    quoteEn: "I started with a voluntary savings account in 2018. Today I operate two stores in Gakenke town. USSD *541# allows me to reconcile sales every evening without leaving my shop.",
    quoteRw: "Natangiriye ku bwizigame bwa SACCO muri 2018. Uyu munsi mfite amaduka abiri mu mujyi wa Gakenke. Gukoresha *541# bituma ngereranya ibicuruzwa ntavuye mu iduka.",
    metric: "4.8x Business Turnover in 5 Years"
  }
];

export const INITIAL_LEADERS: LeaderMember[] = [
  {
    id: "lead-1",
    name: "Wellarse",
    roleEn: "Board Director",
    roleRw: "Umuyobozi w'Inama y'Ubutegetsi (Board Director)",
    category: "board",
    qualificationEn: "Senior Board Director & Cooperative Governance Specialist",
    qualificationRw: "Impuguke mu miyoborere n'ubuyobozi bw'Inama y'Ubutegetsi ya Koperative",
    imageUrl: "/src/assets/images/portrait_director_wellars_1791994899049.jpg",
    phone: "0786422080",
  },
  {
    id: "lead-2",
    name: "Mbitsemunda Phocas",
    roleEn: "Manager",
    roleRw: "Umuyobozi Mukuru (Manager)",
    category: "manager",
    qualificationEn: "Executive Bank Manager & Certified Microfinance Specialist",
    qualificationRw: "Umuyobozi w'imirimo y'imari n'icungamutungo ry'ibigo by'imari iciriritse",
    imageUrl: "/src/assets/images/mbitsemunda_phocas_desk.jpg",
    phone: "0786422080",
  },
  {
    id: "lead-3",
    name: "Bartazal",
    roleEn: "Board Director & Governance Trustee",
    roleRw: "Umuyobozi mu Nama y'Ubutegetsi (Board Director)",
    category: "board",
    qualificationEn: "Cooperative Governance Specialist & Senior Board Trustee",
    qualificationRw: "Inararibonye mu miyoborere ya koperative n'iterambere ry'abaturage",
    imageUrl: "/src/assets/images/bartazal_speaking.jpg",
    phone: "0786422080",
  },
  {
    id: "lead-4",
    name: "Innocent Ndayisaba",
    roleEn: "Chief Credit & Operations Officer",
    roleRw: "Umuyobozi w'Inguzanyo n'Imirimo",
    category: "manager",
    qualificationEn: "Senior Credit Analyst & Agricultural Risk Assessor",
    qualificationRw: "Impuguke mu isesengura ry'inguzanyo n'ingaruka ku buhinzi",
    imageUrl: "/src/assets/images/portrait_credit_director_1791991947701.jpg",
    phone: "0786422080",
  },
  {
    id: "lead-5",
    name: "Gisele Uwambaye",
    roleEn: "Chairperson, Supervisory Committee",
    roleRw: "Perezida wa Komite y'Ubugenzuzi",
    category: "board",
    qualificationEn: "Certified Public Accountant (CPA-R) & Senior Auditor",
    qualificationRw: "Umunyamuryango w'inzobere mu buciruzi bw'imari (CPA-R) n'ubugenzuzi",
    imageUrl: "/src/assets/images/portrait_supervisory_chair_1791991947113.jpg",
    phone: "0786422080",
  }
];

export const INITIAL_MOMENTS: InstitutionMoment[] = [
  {
    id: "moment-1",
    titleEn: "Annual Dividend Distribution Celebration",
    titleRw: "Umunsi Mukuru wo Guhemba Abanyamuryango no Kugabana Inyungu",
    date: "Annual General Assembly Milestone",
    category: "agm_dividend",
    imageUrl: "/src/assets/images/moment_dividend_celebration_1791994900250.jpg",
    captionEn: "Historic celebration in Gakenke as over 450 Million RWF in annual dividends were disbursed to proud cooperative coffee farmers and local entrepreneurs.",
    captionRw: "Ibyishimo bisesekaye muri Gakenke ubwo abanyamuryango b'abahinzi b'ikawa n'abacuruzi bahabwaga inyungu ku migabane yabo isaga Miliyoni 450 RWF.",
  },
  {
    id: "moment-2",
    titleEn: "National Cooperative Excellence Award Trophy",
    titleRw: "Guhabwa Igikombe cy'Indashyikirwa mu Makoperative y'Imari",
    date: "National Cooperative Summit",
    category: "award",
    imageUrl: "/src/assets/images/moment_cooperative_award_1791994900000.jpg",
    captionEn: "Board Directors Wellarse and Bartazal alongside Manager Mbitsemunda Phocas receiving the prestigious institutional excellence award for exemplary financial management and zero non-performing loan discipline.",
    captionRw: "Abayobozi mu Nama y'Ubutegetsi Wellarse na Bartazal hamwe n'Umuyobozi Mukuru Mbitsemunda Phocas bashyikirizwa igikombe cy'indashyikirwa mu micungire y'imari n'inguzanyo z'iterambere.",
  },
  {
    id: "moment-3",
    titleEn: "Modern Banking Hall & USSD *541# Service Launch",
    titleRw: "Gufungura Ibiro Bigezweho bya Banki na Serivisi ya *541#",
    date: "Central Branch Modernization",
    category: "branch_opening",
    imageUrl: "/src/assets/images/hero_sacco_banking_1791989969362.jpg",
    captionEn: "Commissioning of our state-of-the-art cooperative banking hall in Gakenke commercial center, equipped with modern teller stations and direct USSD *541# link.",
    captionRw: "Gufungura ibiro by'icyitegererezo rwagati mu Mujyi wa Gakenke bifite ibyuma bigezweho by'abakarani n'ikoranabuhanga rya USSD *541#.",
  },
  {
    id: "moment-4",
    titleEn: "Rushashi & Janja Coffee Farmers Agricultural Payout",
    titleRw: "Gushyigikira Abahinzi b'Ikawa ba Rushashi na Janja mu Isarura",
    date: "Harvest Season Payout",
    category: "community",
    imageUrl: "/src/assets/images/farmers_cooperative_1791989969904.jpg",
    captionEn: "Direct seasonal liquidity injection to coffee washing stations across Gakenke, empowering over 420 smallholder farmer households with fair harvest prices.",
    captionRw: "Guhereza igishoro inganda z'ikawa zo muri Gakenke kugira ngo zishyurire abahinzi bato 420 ku gihe kandi ku giciro gishimishije.",
  },
  {
    id: "moment-5",
    titleEn: "Annual Cooperative Delegates Assembly in Gakenke",
    titleRw: "Inama y'Intumwa z'Abanyamuryango ba Koperative",
    date: "Democratic Governance Assembly",
    category: "agm_dividend",
    imageUrl: "/src/assets/images/community_governance_1791989970347.jpg",
    captionEn: "Elected cooperative delegates from all 19 sectors assembling under Board Director Wellarse and Manager Mbitsemunda Phocas to approve the audited financial accounts and dividend payout.",
    captionRw: "Intumwa z'abanyamuryango zaturutse mu mirenge 19 ziteraniye hamwe ziyobowe na Board Director Wellarse na Manager Mbitsemunda Phocas zemeza raporo y'imari.",
  },
  {
    id: "moment-6",
    titleEn: "Gakenke Women & Youth Entrepreneurship Graduation",
    titleRw: "Gusoza Amahugurwa y'Ubucuruzi ku Bagore n'Urubyiruko",
    date: "Financial Empowerment Initiative",
    category: "training",
    imageUrl: "/src/assets/images/entrepreneur_business_1791989970089.jpg",
    captionEn: "Empowering 120 retail entrepreneurs in Gakenke with seed capital, financial literacy, and mobile merchant wallets via *541#.",
    captionRw: "Gufasha abacuruzi bato 120 bo muri Gakenke kubona igishoro, amasomo y'imari no gukoresha serivisi ya *541# mu bucuruzi bwabo.",
  }
];

export const INITIAL_APPLICATIONS: ApplicationRecord[] = [
  {
    id: "appl-1",
    appNumber: "UB-APPL-2026-891",
    fullName: "Jean Claude Habimana",
    idNumber: "1198480019283412",
    phone: "0788412890",
    sector: "Rushashi",
    accountType: "Ubuhinzi n'Ubworozi (Agri-Credit)",
    occupation: "Coffee Farmer & Agronomist",
    initialAmount: 800000,
    date: "2026-10-12",
    status: "pending",
  },
  {
    id: "appl-2",
    appNumber: "UB-APPL-2026-724",
    fullName: "Esperance Nyirahabimana",
    idNumber: "1199070028475819",
    phone: "0783120440",
    sector: "Nemba",
    accountType: "Ubucuruzi SME Micro-Loan",
    occupation: "General Merchandise Retailer",
    initialAmount: 1500000,
    date: "2026-10-13",
    status: "pending",
  }
];

export const LEADERSHIP_TEAM = INITIAL_LEADERS;

