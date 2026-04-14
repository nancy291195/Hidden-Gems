import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Globe, ShieldCheck, Sparkles, ArrowRight, Banknote, ChevronDown } from "lucide-react";
import Chat from "./components/Chat";
import GuideCard from "./components/GuideCard";
import { GUIDES } from "./constants";
import FindAGuide from "./pages/FindAGuide";
import GuideProfile from "./pages/GuideProfile";
import HiddenGems from "./pages/HiddenGems";
import HowItWorks from "./pages/HowItWorks";
import WorldMap from "./pages/WorldMap";
import GuideApplication from "./pages/GuideApplication";
import HelpCentre from "./pages/HelpCentre";
import SafetyGuidelines from "./pages/SafetyGuidelines";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { SettingsProvider, useSettings, Language, Currency } from "./contexts/SettingsContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  const { t } = useSettings();
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-[1px] bg-brand-gold" />
              <span className="micro-label text-brand-gold">{t("hero.badge")}</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif leading-[1.1] mb-8">
              {t("hero.title.1")}<span className="serif-italic text-brand-gold">{t("hero.title.highlight")}</span>{t("hero.title.2")}
            </h1>
            <p className="text-lg text-brand-ink/70 leading-relaxed mb-10 max-w-lg">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/find-a-guide" className="bg-brand-olive text-brand-cream px-8 py-4 rounded-full text-base font-medium hover:bg-brand-olive/90 transition-all shadow-lg flex items-center gap-2">
                {t("hero.cta")} <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-3 px-6 py-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user-${i}/100/100`}
                      className="w-10 h-10 rounded-full border-2 border-brand-cream object-cover"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-brand-ink/60">{t("hero.social")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-gold/10 blur-3xl rounded-full" />
            <Chat />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center">
                <ShieldCheck className="text-brand-olive w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold">{t("features.verified.title")}</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed">
                {t("features.verified.desc")}
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center">
                <Sparkles className="text-brand-olive w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold">{t("features.gems.title")}</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed">
                {t("features.gems.desc")}
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center">
                <Globe className="text-brand-olive w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold">{t("features.ethical.title")}</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed">
                {t("features.ethical.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[1px] bg-brand-gold" />
                <span className="micro-label text-brand-gold">{t("featured.badge")}</span>
              </div>
              <h2 className="text-5xl font-serif leading-tight">
                {t("featured.title.1")}<span className="serif-italic text-brand-gold">{t("featured.title.highlight")}</span>{t("featured.title.2")}
              </h2>
            </div>
            <Link to="/find-a-guide" className="text-sm font-bold uppercase tracking-widest text-brand-olive hover:text-brand-gold transition-colors flex items-center gap-2">
              {t("featured.cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GUIDES.slice(0, 3).map((guide) => (
              <Link key={guide.id} to={`/guide/${guide.id}`}>
                <GuideCard guide={guide} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-olive text-brand-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Globe className="w-full h-full scale-150" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-8">{t("cta.title")}</h2>
          <p className="text-xl text-brand-cream/70 mb-12 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <Link to="/find-a-guide" className="inline-block bg-brand-gold text-brand-ink px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-gold/90 transition-all shadow-xl">
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}

function Navbar() {
  const { language, setLanguage, currency, setCurrency, t } = useSettings();
  const [langOpen, setLangOpen] = useState(false);
  const [currOpen, setCurrOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const currRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) setLangOpen(false);
      if (currRef.current && !currRef.current.contains(event.target as Node)) setCurrOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
    { code: "NL", name: "Nederlands", flag: "🇳🇱" },
    { code: "JP", name: "日本語", flag: "🇯🇵" },
    { code: "ET", name: "አማርኛ", flag: "🇪🇹" },
    { code: "GE", name: "ქართული", flag: "🇬🇪" },
    { code: "PT", name: "Português", flag: "🇵🇹" },
    { code: "AR", name: "العربية", flag: "🇱🇧" },
    { code: "SQ", name: "Shqip", flag: "🇦🇱" },
    { code: "ID", name: "Bahasa Indonesia", flag: "🇮🇩" },
    { code: "SW", name: "Kiswahili", flag: "🇹🇿" },
  ];

  const currencies: { code: Currency; name: string; symbol: string }[] = [
    { code: "USD", name: "US Dollar", symbol: "$" },
    { code: "EUR", name: "Euro", symbol: "€" },
    { code: "GBP", name: "British Pound", symbol: "£" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
    { code: "GEL", name: "Georgian Lari", symbol: "₾" },
    { code: "ETB", name: "Ethiopian Birr", symbol: "Br" },
    { code: "COP", name: "Colombian Peso", symbol: "$" },
    { code: "ALL", name: "Albanian Lek", symbol: "L" },
    { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
    { code: "TZS", name: "Tanzanian Shilling", symbol: "Sh" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-olive rounded-xl flex items-center justify-center">
            <Compass className="text-brand-cream w-6 h-6" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">Localens</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/find-a-guide" className="text-sm font-medium hover:text-brand-gold transition-colors">{t("nav.find_guide")}</Link>
          <Link to="/world-map" className="text-sm font-medium hover:text-brand-gold transition-colors">{t("nav.world_map")}</Link>
          <Link to="/hidden-gems" className="text-sm font-medium hover:text-brand-gold transition-colors">{t("nav.hidden_gems")}</Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-brand-gold transition-colors">{t("nav.how_it_works")}</Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1">
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 hover:bg-brand-olive/5 rounded-full transition-colors text-brand-ink/60 hover:text-brand-gold flex items-center gap-1.5"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">{language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 glass-panel rounded-2xl p-2 shadow-2xl border-brand-gold/20"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${language === lang.code ? 'bg-brand-olive text-brand-cream' : 'hover:bg-brand-olive/5 text-brand-ink/70'}`}
                      >
                        <span>{lang.flag}</span>
                        <span className="flex-1 text-left">{lang.name}</span>
                        {language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Currency Dropdown */}
            <div className="relative" ref={currRef}>
              <button 
                onClick={() => setCurrOpen(!currOpen)}
                className="p-2 hover:bg-brand-olive/5 rounded-full transition-colors text-brand-ink/60 hover:text-brand-gold flex items-center gap-1.5"
              >
                <Banknote className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">{currency}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${currOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {currOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 glass-panel rounded-2xl p-2 shadow-2xl border-brand-gold/20"
                  >
                    {currencies.map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => { setCurrency(curr.code); setCurrOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${currency === curr.code ? 'bg-brand-olive text-brand-cream' : 'hover:bg-brand-olive/5 text-brand-ink/70'}`}
                      >
                        <span className="w-6 text-center font-bold">{curr.symbol}</span>
                        <span className="flex-1 text-left">{curr.name}</span>
                        {currency === curr.code && <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <button className="bg-brand-olive text-brand-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-olive/90 transition-all shadow-sm">
            {t("nav.sign_in")}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const { t } = useSettings();
  return (
    <footer className="py-16 px-6 border-t border-brand-olive/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-olive rounded-lg flex items-center justify-center">
              <Compass className="text-brand-cream w-5 h-5" />
            </div>
            <span className="text-xl font-serif font-bold">Localens</span>
          </Link>
          <p className="text-sm text-brand-ink/50 max-w-sm leading-relaxed">
            {t("footer.desc")}
          </p>
        </div>
        
        <div>
          <h4 className="font-serif font-bold mb-6">{t("footer.platform")}</h4>
          <ul className="space-y-4 text-sm text-brand-ink/60">
            <li><Link to="/find-a-guide" className="hover:text-brand-gold transition-colors">{t("nav.find_guide")}</Link></li>
            <li><Link to="/world-map" className="hover:text-brand-gold transition-colors">{t("nav.world_map")}</Link></li>
            <li><Link to="/hidden-gems" className="hover:text-brand-gold transition-colors">{t("nav.hidden_gems")}</Link></li>
            <li><Link to="/how-it-works" className="hover:text-brand-gold transition-colors">{t("nav.how_it_works")}</Link></li>
            <li><Link to="/guide-application" className="hover:text-brand-gold transition-colors">{t("footer.guide_app")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-bold mb-6">{t("footer.support")}</h4>
          <ul className="space-y-4 text-sm text-brand-ink/60">
            <li><Link to="/help-centre" className="hover:text-brand-gold transition-colors">{t("footer.help_centre")}</Link></li>
            <li><Link to="/safety-guidelines" className="hover:text-brand-gold transition-colors">{t("footer.safety")}</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-brand-gold transition-colors">{t("footer.terms")}</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-brand-gold transition-colors">{t("footer.privacy")}</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-olive/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-brand-ink/40">{t("footer.rights")}</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-brand-ink/40 hover:text-brand-gold transition-colors">Instagram</a>
          <a href="#" className="text-xs text-brand-ink/40 hover:text-brand-gold transition-colors">Twitter</a>
          <a href="#" className="text-xs text-brand-ink/40 hover:text-brand-gold transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-a-guide" element={<FindAGuide />} />
            <Route path="/guide/:id" element={<GuideProfile />} />
            <Route path="/hidden-gems" element={<HiddenGems />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/world-map" element={<WorldMap />} />
            <Route path="/guide-application" element={<GuideApplication />} />
            <Route path="/help-centre" element={<HelpCentre />} />
            <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </SettingsProvider>
  );
}
