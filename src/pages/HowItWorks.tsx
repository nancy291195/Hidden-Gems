import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, ArrowRight, Search, Sparkles, 
  MapPin, ShieldCheck, Calendar, CreditCard,
  Check
} from "lucide-react";
import { GUIDES, HIDDEN_GEMS } from "../constants";
import GuideCard from "../components/GuideCard";

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [aiInput, setAiInput] = useState("");
  const [gemIndex, setGemIndex] = useState(0);

  const steps = [
    {
      title: "Tell us where you're going",
      description: "Choose a country or describe your dream experience to our AI. Whether it's 'stargazing in a cedar forest' or 'secret medina foundries', we listen to the details.",
      icon: <Search className="w-8 h-8 text-brand-gold" />
    },
    {
      title: "We match you with a local",
      description: "Our AI and editorial team match you with a verified guide who knows places others don't. We prioritize deep local knowledge and storytelling ability.",
      icon: <Sparkles className="w-8 h-8 text-brand-gold" />
    },
    {
      title: "Explore the hidden gems",
      description: "Your guide takes you somewhere that doesn't exist on any tourist map. No hashtags, no crowds—just you and a story worth telling.",
      icon: <MapPin className="w-8 h-8 text-brand-gold" />
    },
    {
      title: "Book securely. Travel freely.",
      description: "Pay through Localens. Free cancellation up to 48h. Guide confirmed within 24h. We handle the logistics so you can focus on the moment.",
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

  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === currentStep ? 'w-12 bg-brand-gold' : i < currentStep ? 'w-6 bg-brand-olive' : 'w-6 bg-brand-olive/10'
                }`}
              />
            ))}
          </div>
          <span className="micro-label text-brand-ink/40 font-bold">
            Step {currentStep + 1} of {steps.length}
          </span>
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
                  <ArrowLeft className="w-4 h-4" /> Previous
                </button>
                {currentStep < steps.length - 1 ? (
                  <button 
                    onClick={nextStep}
                    className="flex items-center gap-2 px-8 py-3 bg-brand-olive text-brand-cream rounded-full font-bold text-sm hover:bg-brand-olive/90 transition-all shadow-lg"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link 
                    to="/find-a-guide"
                    className="flex items-center gap-2 px-8 py-3 bg-brand-gold text-brand-ink rounded-full font-bold text-sm hover:bg-brand-gold/90 transition-all shadow-lg"
                  >
                    Ready? Find your guide <ArrowRight className="w-4 h-4" />
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
                    <p className="micro-label mb-4">Try it live</p>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-ink/30" />
                      <input 
                        type="text"
                        value={aiInput}
                        onChange={(e) => setAiInput(e.target.value)}
                        placeholder="e.g. 'I want to see the Milky Way in Lebanon'"
                        className="w-full p-5 pl-12 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm"
                      />
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="p-4 bg-brand-olive/5 rounded-2xl border border-brand-olive/5 text-xs text-brand-ink/60 italic">
                        "I'm looking for a quiet mountain trail in Japan..."
                      </div>
                      <div className="p-4 bg-brand-olive/5 rounded-2xl border border-brand-olive/5 text-xs text-brand-ink/60 italic">
                        "Show me the secret artisans of Fès Medina."
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="glass-panel p-6 rounded-3xl shadow-xl border-brand-gold/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-brand-olive rounded-lg flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-brand-cream" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest">AI Matching...</span>
                      </div>
                      <p className="text-sm italic text-brand-ink/60">"Searching for experts in Lebanon..."</p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <GuideCard guide={GUIDES[0]} />
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
                        className="text-center p-12 glass-panel rounded-[48px] border-brand-gold/30 max-w-sm"
                      >
                        <span className="text-4xl mb-6 block">{HIDDEN_GEMS[gemIndex].flag}</span>
                        <p className="text-2xl font-serif italic leading-relaxed text-brand-ink">
                          "{HIDDEN_GEMS[gemIndex].description}"
                        </p>
                        <div className="mt-8 flex justify-center gap-1">
                          {HIDDEN_GEMS.map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-1.5 h-1.5 rounded-full transition-all ${i === gemIndex ? 'bg-brand-gold w-4' : 'bg-brand-olive/20'}`} 
                            />
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="glass-panel p-8 rounded-[40px] shadow-2xl border-brand-gold/20">
                    <div className="flex items-center gap-2 mb-8">
                      <ShieldCheck className="w-5 h-5 text-brand-olive" />
                      <span className="text-xs font-bold uppercase tracking-widest">Payment Preview</span>
                    </div>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-ink/60">The Akkar Expedition</span>
                        <span className="font-bold">$85.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-brand-ink/60">Service Fee</span>
                        <span className="font-bold">$0.00</span>
                      </div>
                      <div className="pt-4 border-t border-brand-olive/10 flex justify-between font-bold">
                        <span>Total</span>
                        <span>$85.00</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
                        <Check className="w-3 h-3 text-brand-olive" />
                        Free cancellation up to 48h
                      </div>
                      <div className="w-full py-4 bg-brand-gold text-brand-ink rounded-full font-bold text-center text-sm flex items-center justify-center gap-2">
                        <CreditCard className="w-4 h-4" /> Confirm & Pay
                      </div>
                    </div>
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
