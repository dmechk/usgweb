import React, { useState, useId, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { SACCO_INFO } from '../data/saccoData';
import { Calculator, ArrowRight, Table, ChevronDown, ChevronUp, CheckCircle, Percent } from 'lucide-react';
import { ImigongoRibbon } from './ImigongoPattern';

interface LoanCalculatorProps {
  currentLang: Language;
  onApplyWithCalculation: (calculationDetails: {
    amount: number;
    tenureMonths: number;
    loanType: string;
    monthlyPayment: number;
  }) => void;
  initialAmount?: number;
  initialType?: string;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({
  currentLang,
  onApplyWithCalculation,
  initialAmount = 1500000,
  initialType = 'agri',
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [tenureMonths, setTenureMonths] = useState<number>(12);
  const [loanType, setLoanType] = useState<string>(initialType);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);
  const [interestRatePercentage, setInterestRatePercentage] = useState<number>(1.1);

  const amountInputId = useId();
  const tenureInputId = useId();
  const interestInputId = useId();

  const t = TRANSLATIONS[currentLang];

  const loanTypeConfigs: Record<string, { labelEn: string; labelRw: string; monthlyRate: number; maxMonths: number; maxAmount: number; graceNoteEn: string; graceNoteRw: string }> = {
    agri: {
      labelEn: "Ubuhinzi n'Ubworozi (Agri-Credit)",
      labelRw: "Ubuhinzi n'Ubworozi (Ibihingwa n'Amatungo)",
      monthlyRate: 0.011,
      maxMonths: 18,
      maxAmount: 10000000,
      graceNoteEn: "Grace period up to 4 months available for coffee & harvest cycles.",
      graceNoteRw: "Amezi 4 y'agahenge (grace period) ku buhinzi bw'ikawa n'isarura.",
    },
    business: {
      labelEn: "Ubucuruzi SME Micro-Loan",
      labelRw: "Ubucuruzi n'Amaduka (SME & Wholesale)",
      monthlyRate: 0.0125,
      maxMonths: 36,
      maxAmount: 15000000,
      graceNoteEn: "Flexible monthly installments for retail shops.",
      graceNoteRw: "Kwishyura buri kwezi bitagoranye ku bacuruzi.",
    },
    school: {
      labelEn: "School Fees & Emergency (Amashuri)",
      labelRw: "Amafaranga y'Ishuri n'Ubutabazi",
      monthlyRate: 0.010,
      maxMonths: 12,
      maxAmount: 2000000,
      graceNoteEn: "Fast 24-hour review for tuition deadlines.",
      graceNoteRw: "Kwakirwa no kwemezwa mu masaha 24 ku banyeshuri.",
    }
  };

  const currentConfig = loanTypeConfigs[loanType] || loanTypeConfigs.agri;

  useEffect(() => {
    setInterestRatePercentage(currentConfig.monthlyRate * 100);
  }, [loanType, currentConfig.monthlyRate]);

  const monthlyRate = interestRatePercentage / 100;

  const calculateInstallment = (principal: number, rate: number, n: number) => {
    if (rate === 0) return principal / n;
    const factor = Math.pow(1 + rate, n);
    return Math.round((principal * (rate * factor)) / (factor - 1));
  };

  const monthlyInstallment = calculateInstallment(amount, monthlyRate, tenureMonths);
  const totalRepayable = monthlyInstallment * tenureMonths;
  const totalInterest = totalRepayable - amount;
  const adminInsuranceFee = Math.round(amount * 0.015);

  const generateSchedule = () => {
    const schedule = [];
    let remainingPrincipal = amount;

    for (let m = 1; m <= tenureMonths; m++) {
      const interestForMonth = Math.round(remainingPrincipal * monthlyRate);
      const principalForMonth = Math.min(remainingPrincipal, monthlyInstallment - interestForMonth);
      remainingPrincipal = Math.max(0, remainingPrincipal - principalForMonth);

      schedule.push({
        month: m,
        monthlyPayment: monthlyInstallment,
        principalPayment: principalForMonth,
        interestPayment: interestForMonth,
        balance: remainingPrincipal,
      });
    }
    return schedule;
  };

  const scheduleData = showSchedule ? generateSchedule() : [];

  const handleApply = () => {
    onApplyWithCalculation({
      amount,
      tenureMonths,
      loanType: currentLang === 'en' ? currentConfig.labelEn : currentConfig.labelRw,
      monthlyPayment: monthlyInstallment,
    });
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <Calculator className="w-4 h-4" />
            <span>Transparent Cooperative Finance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {t.calculator.title}
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Loan Purpose Selector */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Loan Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {Object.entries(loanTypeConfigs).map(([key, config]) => {
                  const isSelected = loanType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setLoanType(key);
                        if (tenureMonths > config.maxMonths) {
                          setTenureMonths(config.maxMonths);
                        }
                        if (amount > config.maxAmount) {
                          setAmount(config.maxAmount);
                        }
                      }}
                      className={`text-left p-3 rounded-lg border text-sm font-medium transition-all ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {currentLang === 'en' ? config.labelEn : config.labelRw}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Amount Input & Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor={amountInputId} className="text-sm font-medium text-slate-700">
                  Loan Amount (RWF)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-28 p-1.5 bg-white border border-slate-300 rounded text-right text-sm font-mono-numbers text-slate-900"
                />
              </div>
            </div>

            {/* 3. Duration Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor={tenureInputId} className="text-sm font-medium text-slate-700">
                  Duration (Months)
                </label>
                <input
                  type="number"
                  value={tenureMonths}
                  onChange={(e) => setTenureMonths(Number(e.target.value))}
                  className="w-20 p-1.5 bg-white border border-slate-300 rounded text-right text-sm font-mono-numbers text-slate-900"
                />
              </div>
            </div>

            {/* 4. Interest Rate Input */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor={interestInputId} className="text-sm font-medium text-slate-700">
                  Interest Rate (%)
                </label>
                <input
                  id={interestInputId}
                  type="number"
                  step="0.1"
                  value={interestRatePercentage}
                  onChange={(e) => setInterestRatePercentage(Number(e.target.value))}
                  className="w-20 p-1.5 bg-white border border-slate-300 rounded text-right text-sm font-mono-numbers text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <div className="text-xs font-medium text-slate-500">
                {t.calculator.estMonthly}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-800 font-mono-numbers mt-1">
                {monthlyInstallment.toLocaleString()} <span className="text-sm font-semibold text-slate-600">RWF</span>
              </div>
              <div className="text-xs text-slate-400 mt-1 font-mono-numbers">
                Payable via USSD {SACCO_INFO.ussdCode} or Branch Teller
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-slate-600">
                <span>Principal:</span>
                <span className="font-semibold text-slate-900 font-mono-numbers">{amount.toLocaleString()} RWF</span>
              </div>

              <div className="flex justify-between items-center text-slate-600">
                <span className="flex items-center gap-1">
                  <Percent className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.calculator.totalInterest}:</span>
                </span>
                <span className="font-semibold text-slate-900 font-mono-numbers">{totalInterest.toLocaleString()} RWF</span>
              </div>

              <div className="flex justify-between items-center text-slate-600">
                <span>{t.calculator.adminFee}:</span>
                <span className="font-semibold text-slate-900 font-mono-numbers">{adminInsuranceFee.toLocaleString()} RWF</span>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-sm font-bold text-slate-900">
                <span>{t.calculator.totalRepayable}:</span>
                <span className="text-base text-emerald-900 font-mono-numbers">{totalRepayable.toLocaleString()} RWF</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={handleApply}
                className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
              >
                <span>{t.calculator.applyWithCalc}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setShowSchedule(!showSchedule)}
                className="w-full py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Table className="w-3.5 h-3.5 text-slate-500" />
                <span>{showSchedule ? t.calculator.hideSchedule : t.calculator.viewSchedule}</span>
                {showSchedule ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Amortization Schedule Table */}
        {showSchedule && (
          <div className="mt-8 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 bg-slate-100/70 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  Monthly Amortization Schedule
                </h3>
                <p className="text-xs text-slate-500 font-mono-numbers">
                  {amount.toLocaleString()} RWF @ {(monthlyRate * 100).toFixed(1)}%/mo over {tenureMonths} months
                </p>
              </div>
              <span className="text-xs text-slate-500 font-mono-numbers">
                In Rwandan Francs (RWF)
              </span>
            </div>

            <div className="overflow-x-auto max-h-96">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 sticky top-0">
                  <tr>
                    <th className="py-2.5 px-4">{t.calculator.monthCol}</th>
                    <th className="py-2.5 px-4 text-right">Payment</th>
                    <th className="py-2.5 px-4 text-right">{t.calculator.principalCol}</th>
                    <th className="py-2.5 px-4 text-right">{t.calculator.interestCol}</th>
                    <th className="py-2.5 px-4 text-right">{t.calculator.balanceCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono-numbers">
                  {scheduleData.map((row) => (
                    <tr key={row.month} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2 px-4 font-semibold text-slate-700">Month {row.month}</td>
                      <td className="py-2 px-4 text-right text-slate-800 font-medium">{row.monthlyPayment.toLocaleString()}</td>
                      <td className="py-2 px-4 text-right text-emerald-800">{row.principalPayment.toLocaleString()}</td>
                      <td className="py-2 px-4 text-right text-slate-500">{row.interestPayment.toLocaleString()}</td>
                      <td className="py-2 px-4 text-right font-semibold text-slate-800">{row.balance.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Imigongo skeleton ribbon connecting to portal */}
      <div className="mt-16">
        <ImigongoRibbon height={16} variant="light" bordered={true} />
      </div>
    </section>
  );
};
