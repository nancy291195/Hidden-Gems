import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, ArrowRight, Search, Sparkles, 
  MapPin, ShieldCheck, Calendar, CreditCard,
  Check
} from "lucide-react";
import { GUIDES, HIDDEN_GEMS } from "../constants";
import GuideCard from "../components/GuideCard";
import Chat from "../components/Chat";
import { useSettings } from "../contexts/SettingsContext";

export default function HowItWorks() {
  const { t } = useSettings();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [aiInput, setAiInput] = useState("");
  const [gemIndex, setGemIndex] = useState(0);

  const steps = [
    {
      title: t("how.step.1.title"),
      description: t("how.step.1.desc"),
      icon: <Search className="w-8 h-8 text-brand-gold" />
    },
    {
      title: t("how.step.2.title"),
      description: t("how.step.2.desc"),
      icon: <Sparkles className="w-8 h-8 text-brand-gold" />
    },
    {
      title: t("how.step.3.title"),
      description: t("how.step.3.desc"),
      icon: <MapPin className="w-8 h-8 text-brand-gold" />
    },
    {
      title: t("how.step.4.title"),
      description: t("how.step.4.desc"),
      icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />
    }
  ];

  useEffect(() => {
    if (currentStep === 2) {
      const interval = setInterval(() => {
        setGemIndex((prev) => (prev + 1) % HIDDEN_GEMS.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const [matchedGuide, setMatchedGuide] = useState(GUIDES[0]);

  const handleSearch = () => {
    if (!aiInput.trim()) return;

    const input = aiInput.toLowerCase().trim();
    
    // Common keywords, cities, and regions mapped to countries
    const keywordMap: Record<string, string> = {
      "lebanon": "Lebanon",
      "akkar": "Lebanon",
      "morocco": "Morocco",
      "morrocco": "Morocco",
      "fes": "Morocco",
      "fès": "Morocco",
      "medina": "Morocco",
      "atlas": "Morocco",
      "japan": "Japan",
      "tohoku": "Japan",
      "onsen": "Japan",
      "ethiopia": "Ethiopia",
      "ethipia": "Ethiopia",
      "tigray": "Ethiopia",
      "peru": "Peru",
      "incan": "Peru",
      "andes": "Peru",
      "georgia": "Georgia",
      "gerogia": "Georgia",
      "svaneti": "Georgia",
      "tusheti": "Georgia"
    };

    let country: string | undefined;

    // Check keyword map first
    for (const [key, value] of Object.entries(keywordMap)) {
      if (input.includes(key)) {
        country = value;
        break;
      }
    }

    // Fallback to database check
    if (!country) {
      country = GUIDES.find(g => 
        input.includes(g.country.toLowerCase()) || 
        g.country.toLowerCase().includes(input)
      )?.country;
    }

    if (country) {
      // If we're on the first step and it's a direct match, redirect
      if (currentStep === 0) {
        navigate("/find-a-guide", { state: { country } });
        return;
      }
      // Otherwise update the demo guide
      const guide = GUIDES.find(g => g.country === country);
      if (guide) setMatchedGuide(guide);
    }

    nextStep();
  };

  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> {t("common.back_home")}
        </Link>
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentStep(i)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  i === currentStep ? 'w-12 bg-brand-gold' : i < currentStep ? 'w-6 bg-brand-olive' : 'w-6 bg-brand-olive/10'
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm mb-8">
                {steps[currentStep].icon}
              </div>
              <h1 className="text-5xl font-serif mb-6 leading-tight">
                {steps[currentStep].title}
              </h1>
              <p className="text-lg text-brand-ink/60 leading-relaxed mb-12">
                {steps[currentStep].description}
              </p>

              <div className="flex gap-4">
                <button 
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                    currentStep === 0 ? 'opacity-0 pointer-events-none' : 'bg-white text-brand-ink border border-brand-olive/10 hover:border-brand-gold'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" /> {t("how.previous")}
                </button>
                {currentStep < steps.length - 1 ? (
                  <button 
                    onClick={nextStep}
                    className="flex items-center gap-2 px-8 py-3 bg-brand-olive text-brand-cream rounded-full font-bold text-sm hover:bg-brand-olive/90 transition-all shadow-lg"
                  >
                    {t("how.next")} <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link 
                    to="/find-a-guide"
                    className="flex items-center gap-2 px-8 py-3 bg-brand-gold text-brand-ink rounded-full font-bold text-sm hover:bg-brand-gold/90 transition-all shadow-lg"
                  >
                    {t("how.ready")} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Element Column */}
          <div className="relative">
            <div className="absolute -inset-10 bg-brand-gold/5 blur-3xl rounded-full" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="relative z-10"
              >
                {currentStep === 0 && (
                  <div className="glass-panel p-8 rounded-[40px] shadow-2xl">
                    <p className="micro-label mb-4">{t("how.try_live")}</p>
                    <div className="relative flex gap-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-ink/30" />
                        <input 
                          type="text"
                          value={aiInput}
                          onChange={(e) => setAiInput(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                          placeholder={t("how.search_placeholder")}
                          className="w-full p-5 pl-12 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm"
                        />
                      </div>
                      <button 
                        onClick={handleSearch}
                        disabled={!aiInput.trim()}
                        className="bg-brand-olive text-brand-cream px-6 rounded-2xl font-bold text-xs hover:bg-brand-olive/90 transition-all disabled:opacity-50"
                      >
                        {t("how.search")}
                      </button>
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {[
                          "I'm looking for a quiet mountain trail in Japan...",
                          "Show me the secret artisans of Fès Medina.",
                          "I want to explore the rock churches of Ethiopia.",
                          "Find me a guide for undocumented Incan sites in Peru.",
                          "Show me the medieval towers of Georgia."
                        ].map((suggestion, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setAiInput(suggestion)}
                            className="text-left p-3 bg-brand-olive/5 rounded-xl border border-brand-olive/5 text-[10px] text-brand-ink/60 italic hover:border-brand-gold/30 hover:bg-brand-olive/10 transition-all"
                          >
                            "{suggestion}"
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="w-full max-w-lg mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="shadow-2xl rounded-[32px] overflow-hidden bg-white"
                    >
                      <Chat />
                    </motion.div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="h-[400px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={gemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full max-w-sm"
                      >
                        <Link 
                          to={`/guide/${GUIDES.find(g => g.country === HIDDEN_GEMS[gemIndex].country)?.id || 'bashir'}`}
                          className="block text-center p-12 glass-panel rounded-[48px] border-brand-gold/30 hover:border-brand-gold transition-all group"
                        >
                          <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">
                            {HIDDEN_GEMS[gemIndex].flag}
                          </span>
                          <p className="text-2xl font-serif italic leading-relaxed text-brand-ink mb-4">
                            "{HIDDEN_GEMS[gemIndex].description}"
                          </p>
                          <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
                            Meet the guide <ArrowRight className="w-3 h-3" />
                          </div>
                        </Link>
                        <div className="mt-8 flex justify-center gap-1">
                          {HIDDEN_GEMS.map((_, i) => (
                            <button 
                              key={i} 
                              onClick={() => setGemIndex(i)}
                              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${i === gemIndex ? 'bg-brand-gold w-4' : 'bg-brand-olive/20'}`} 
                              aria-label={`View gem ${i + 1}`}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="flex items-center justify-center h-[400px]">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <ShieldCheck className="w-12 h-12 text-brand-ink" />
                      </div>
                      <h3 className="text-3xl font-serif mb-4">{t("how.all_set")}</h3>
                      <p className="text-brand-ink/60 max-w-xs mx-auto">
                        {t("how.all_set_desc")}
                      </p>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
