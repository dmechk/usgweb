import React from 'react';
import { Language, SaccoContactInfo } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { SACCO_INFO, SACCO_IMAGES } from '../data/saccoData';
import {
  ArrowRight,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Phone,
  MessageSquare,
  Mail,
  Camera,
} from 'lucide-react';
import { ImigongoRibbon } from './ImigongoPattern';

interface HeroProps {
  currentLang: Language;
  onOpenMembershipModal: () => void;
  onScrollToCalculator: () => void;
  onOpenMomoModal: () => void;
  onScrollToContact: () => void;
  saccoInfo?: SaccoContactInfo;
  heroImage?: string;
  isAdmin?: boolean;
  onOpenAdminConsole?: (tab?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenMembershipModal,
  onScrollToCalculator,
  onOpenMomoModal,
  onScrollToContact,
  saccoInfo = SACCO_INFO,
  heroImage = SACCO_IMAGES.heroBanking,
  isAdmin = false,
  onOpenAdminConsole,
}) => {
  const t = TRANSLATIONS[currentLang];

  const cleanWhatsapp = saccoInfo.whatsapp.replace(/[^0-9]/g, '') || '250786422080';
  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
    saccoInfo.whatsappMessage ||
      (currentLang === 'en'
        ? 'Hello UBUMWE SACCO GAKENKE, I would like to inquire about cooperative services.'
        : 'Muraho UBUMWE SACCO GAKENKE, nifuzaga kubaza amakuru kuri serivisi zanyu.')
  )}`;

  return (
    <section id="hero" className="relative bg-slate-900 text-white overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition and Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Regulatory trust indicator */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-emerald-400">
              <span className="text-amber-300 font-semibold">{saccoInfo.district} Cooperative</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
              <span>{t.hero.headlinePrefix} </span>
              <span className="text-emerald-400 underline decoration-emerald-500/50 decoration-wavy decoration-1 underline-offset-8">
                {t.hero.headlineFocus}
              </span>
              <span> {t.hero.headlineSuffix}</span>
            </h1>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subheading}
            </p>

            {/* Key Value Proposition Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>9.8% Annual Share Dividend</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant Mobile Banking ({saccoInfo.ussdCode})</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Agricultural &amp; Business Credit</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Primary Contact Us Button (WhatsApp & Phone) */}
              <button
                type="button"
                onClick={onScrollToContact}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500 active:scale-98 transition-all shadow-lg shadow-emerald-900/30 flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                <span>{currentLang === 'en' ? 'Contact Us (WhatsApp & Call)' : 'Tuvugishe (WhatsApp & Telefone)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onScrollToCalculator}
                className="px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.ctaCalculator}</span>
              </button>

              <button
                type="button"
                onClick={onOpenMomoModal}
                className="px-4 py-3.5 text-xs sm:text-sm font-medium text-amber-300 hover:text-amber-200 flex items-center gap-1.5 transition-colors font-mono-numbers cursor-pointer"
              >
                <Smartphone className="w-4 h-4 shrink-0" />
                <span>USSD {saccoInfo.ussdCode}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Banking Hall Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 aspect-[4/3] lg:aspect-auto lg:h-[440px] group">
              <img
                src={heroImage}
                alt="Ubumwe SACCO Gakenke Banking Hall"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Scrim gradient overlay for high contrast text support */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Admin Change Picture Floating Button */}
              {isAdmin && onOpenAdminConsole && (
                <button
                  type="button"
                  onClick={() => onOpenAdminConsole('pictures')}
                  className="absolute top-3 right-3 px-3 py-1.5 bg-slate-950/80 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg transition-all cursor-pointer z-20"
                  title="Change Hero Banking Photo as Admin"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Change Picture</span>
                </button>
              )}

              {/* Bottom Card Overlay inside image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white z-10">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-1 border-b border-slate-800 mb-2">
                  <span>{saccoInfo.district} Main Office</span>
                  <span className="text-amber-300 font-mono-numbers font-bold">USSD: {saccoInfo.ussdCode}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">{saccoInfo.name}</p>
                    <p className="text-xs text-slate-300 font-mono-numbers">Tel: {saccoInfo.phone}</p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Imigongo Skeleton Trim */}
      <ImigongoRibbon height={16} variant="light" bordered={false} />
    </section>
  );
};
