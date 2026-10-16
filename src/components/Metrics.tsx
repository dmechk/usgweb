import { Language, SaccoContactInfo } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { SACCO_INFO } from '../data/saccoData';
import { Users, PiggyBank, Landmark, Building2, ShieldCheck } from 'lucide-react';
import { ImigongoRibbon } from './ImigongoPattern';

interface MetricsProps {
  currentLang: Language;
  saccoInfo?: SaccoContactInfo;
}

export const Metrics: React.FC<MetricsProps> = ({ currentLang, saccoInfo = SACCO_INFO }) => {
  const t = TRANSLATIONS[currentLang];

  const metricsData = [
    {
      icon: Users,
      value: "18,640+",
      label: t.stats.membersTitle,
      detail: t.stats.membersSubtitle,
      color: "text-emerald-700",
      bgColor: "bg-emerald-50",
    },
    {
      icon: PiggyBank,
      value: "4.85B RWF",
      label: t.stats.savingsTitle,
      detail: t.stats.savingsSubtitle,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: Landmark,
      value: "3.62B RWF",
      label: t.stats.loansTitle,
      detail: t.stats.loansSubtitle,
      color: "text-amber-700",
      bgColor: "bg-amber-50",
    },
    {
      icon: Building2,
      value: `${saccoInfo.branchesCount} Branches`,
      label: t.stats.branchesTitle,
      detail: t.stats.branchesSubtitle,
      color: "text-slate-800",
      bgColor: "bg-slate-100",
    },
    {
      icon: ShieldCheck,
      value: `${new Date().getFullYear() - saccoInfo.yearFounded} Years`,
      label: "Operational Since",
      detail: `${saccoInfo.yearFounded}`,
      color: "text-purple-700",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metricsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/80 hover:border-emerald-500/50 transition-colors bg-white shadow-xs"
              >
                <div className={`p-3 rounded-lg ${item.bgColor} shrink-0`}>
                  <IconComponent className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-mono-numbers tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory reassurance footer strip with contact details */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span className="font-semibold text-slate-800">Cooperative Oversight:</span>
            <span>{saccoInfo.rcaRegistration}</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-emerald-800 font-medium">Licensed Financial Cooperative</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600 font-mono-numbers">
            <span>Help Desk: <strong className="text-slate-900">{saccoInfo.phone}</strong></span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>USSD: <strong className="text-emerald-700">{saccoInfo.ussdCode}</strong></span>
          </div>
        </div>
      </div>

      {/* Imigongo skeleton ribbon connecting to next section */}
      <ImigongoRibbon height={16} variant="light" bordered={true} />
    </section>
  );
};
