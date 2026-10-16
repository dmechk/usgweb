import { Language, SaccoContactInfo } from '../types';
import { SACCO_INFO, SACCO_IMAGES } from '../data/saccoData';
import { ShieldCheck, Target, HeartHandshake, Award, Landmark, CheckCircle2 } from 'lucide-react';
import { ImigongoRibbon } from './ImigongoPattern';

interface AboutUsProps {
  currentLang: Language;
  saccoInfo?: SaccoContactInfo;
}

export const AboutUs: React.FC<AboutUsProps> = ({ currentLang, saccoInfo = SACCO_INFO }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <Landmark className="w-4 h-4" />
            <span>Cooperative Identity &amp; Heritage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            {currentLang === 'en' ? 'About UBUMWE SACCO GAKENKE' : 'Abo Turibo muri Ubumwe SACCO Gakenke'}
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            {currentLang === 'en'
              ? 'A licensed Rwandan savings and credit cooperative serving over 18,600 members across the 19 sectors of Gakenke District.'
              : 'Koperative yemewe n\'amategeko y\'ubwizigame n\'inguzanyo ifasha abanyamuryango barenga 18,600 mu mirenge 19 ya Gakenke.'}
          </p>
        </div>

        {/* 2-Column Story and Assembly Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3 text-xs sm:text-sm text-emerald-950">
              <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Regulated &amp; Audited Cooperative Institution</span>
                <p className="text-emerald-800 text-xs mt-0.5 font-mono-numbers">
                  RCA Registration: {saccoInfo.rcaRegistration} · Licensed Financial Cooperative
                </p>
              </div>
            </div>

            <p>
              {currentLang === 'en'
                ? 'UBUMWE SACCO GAKENKE was founded on the fundamental principle of collective self-reliance ("Ubumwe"). Operating in Rwanda’s lush mountainous Northern Province, our cooperative bridges rural communities and smallholder farmers with formal banking, transparent microfinance, and modern mobile technology.'
                : 'UBUMWE SACCO GAKENKE yashinzwe ku mahame yo kwigira no gushyigikirana. Ikorera mu misozi myiza y\'Akarere ka Gakenke mu Ntara y\'Amajyaruguru, ifasha abahinzi n\'aborozi kugera kuri serivisi z\'imari zizewe, inguzanyo ziciriritse n\'ikoranabuhanga rya telefone.'}
            </p>

            <p>
              {currentLang === 'en'
                ? 'From coffee farmers in Rushashi and tea growers in Janja to marketplace merchants in Gakenke town and Nemba, we ensure members retain full economic dignity. Through our USSD platform (*541#), members can bank from anywhere without spending hours walking to branch offices.'
                : 'Kuva ku bahinzi b\'ikawa b\'i Rushashi n\'ibihingwa bya Janja kugeza ku bacuruzi b\'amaduka i Gakenke na Nemba, twimakaza iterambere ry\'umuryango. Binyuze kuri *541#, umunyamuryango abona serivisi zose atiriwe akora ingendo ndende.'}
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <HeartHandshake className="w-4 h-4 text-emerald-700 mb-1" />
                <span className="font-bold text-slate-900 block">Ubumwe (Unity)</span>
                <span className="text-slate-500 text-[11px]">100% Member-owned cooperative solidarity.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-700 mb-1" />
                <span className="font-bold text-slate-900 block">Ubunyangamugayo</span>
                <span className="text-slate-500 text-[11px]">Transparency &amp; strict RCA cooperative compliance.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <Target className="w-4 h-4 text-emerald-700 mb-1" />
                <span className="font-bold text-slate-900 block">Iterambere</span>
                <span className="text-slate-500 text-[11px]">Tangible socio-economic progress.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-xl bg-slate-900 aspect-[4/3]">
              <img
                src={SACCO_IMAGES.governance}
                alt="UBUMWE SACCO Gakenke General Assembly"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="mt-3 text-xs text-slate-500 text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Democratic Governance · Annual General Assembly (AGM) of Members</span>
            </div>
          </div>
        </div>
      </div>

      {/* Imigongo skeleton ribbon connecting to services */}
      <div className="mt-16">
        <ImigongoRibbon height={16} variant="light" bordered={true} />
      </div>
    </section>
  );
};
