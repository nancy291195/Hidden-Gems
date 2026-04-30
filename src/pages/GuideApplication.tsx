import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Compass, ShieldCheck, Star, Users, ArrowRight, ArrowLeft, CheckCircle, Upload, Globe, Phone, Mail, User } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";

export default function GuideApplication() {
  const { t } = useSettings();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> {t("common.back_home")}
        </Link>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-12 h-[1px] bg-brand-gold" />
              <span className="micro-label text-brand-gold uppercase tracking-widest">Join the Collective</span>
              <span className="w-12 h-[1px] bg-brand-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              Share the <span className="serif-italic text-brand-gold">soul</span> of your homeland
            </h1>
            <p className="text-lg text-brand-ink/60 max-w-2xl mx-auto leading-relaxed">
              We're looking for verified local experts who know the trails, stories, and places that don't appear in any guidebook.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-panel p-8 rounded-[32px]">
            <div className="w-12 h-12 bg-brand-olive/10 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-brand-olive" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4">Why guide with us?</h3>
            <ul className="space-y-4 text-sm text-brand-ink/70">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5" />
                Set your own rates and keep 90% of your earnings.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5" />
                Connect with travellers who value authenticity over tourism.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5" />
                Professional photography and profile storytelling support.
              </li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-[32px]">
            <div className="w-12 h-12 bg-brand-olive/10 rounded-2xl flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-brand-olive" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4">What we look for</h3>
            <ul className="space-y-4 text-sm text-brand-ink/70">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5" />
                Deep, undocumented knowledge of your region.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5" />
                A commitment to ethical and sustainable travel.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-1.5" />
                Excellent storytelling and communication skills.
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-[48px] border-brand-gold/20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold">1</div>
            <div>
              <h3 className="text-2xl font-serif font-bold">Personal Details</h3>
              <p className="text-xs text-brand-ink/40 uppercase tracking-widest mt-1">Start your journey here</p>
            </div>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="micro-label flex items-center gap-2"><User className="w-3 h-3" /> Full Name</label>
                <input required type="text" className="w-full p-4 bg-brand-cream/50 rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="micro-label flex items-center gap-2"><Mail className="w-3 h-3" /> Email Address</label>
                <input required type="email" className="w-full p-4 bg-brand-cream/50 rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="micro-label flex items-center gap-2"><Phone className="w-3 h-3" /> Phone Number</label>
                <input required type="tel" className="w-full p-4 bg-brand-cream/50 rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="micro-label flex items-center gap-2"><Globe className="w-3 h-3" /> Country & Region</label>
                <input required type="text" className="w-full p-4 bg-brand-cream/50 rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" placeholder="Lebanon, Mount Lebanon" />
              </div>
            </div>

            <hr className="border-brand-olive/5" />

            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-2xl font-serif font-bold">Expertise & Background</h3>
                <p className="text-xs text-brand-ink/40 uppercase tracking-widest mt-1">Tell us your story</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="micro-label">Languages Spoken</label>
                <input required type="text" placeholder="e.g. English, Arabic, French" className="w-full p-4 bg-brand-cream/50 rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="micro-label">Primary Speciality</label>
                <input required type="text" placeholder="e.g. Hiking, Culinary, History" className="w-full p-4 bg-brand-cream/50 rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="micro-label">Tell us about your most unique tour idea</label>
                <textarea required placeholder="Describe an experience only you can provide..." className="w-full p-4 bg-brand-cream/50 rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm h-32 resize-none" />
              </div>
              <div className="sm:col-span-2 space-y-2">
                <label className="micro-label">What is your guiding philosophy?</label>
                <textarea required placeholder="How do you ensure a sustainable and authentic experience?" className="w-full p-4 bg-brand-cream/50 rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm h-32 resize-none" />
              </div>
            </div>

            <hr className="border-brand-olive/5" />

            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-2xl font-serif font-bold">Verification</h3>
                <p className="text-xs text-brand-ink/40 uppercase tracking-widest mt-1">Help us trust you</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 border-2 border-dashed border-brand-olive/10 rounded-[32px] text-center hover:border-brand-gold/50 cursor-pointer transition-all group bg-brand-cream/20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-brand-olive" />
                </div>
                <p className="text-sm font-bold text-brand-ink">Upload your ID or Guide License</p>
                <p className="text-xs text-brand-ink/40 mt-1">PDF, JPG or PNG (max 5MB)</p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-brand-olive/5 rounded-2xl border border-brand-olive/10">
                <input type="checkbox" required className="mt-1 w-4 h-4 accent-brand-olive" id="terms" />
                <label htmlFor="terms" className="text-sm text-brand-ink/70 leading-relaxed">
                  I confirm that all information provided is accurate and I agree to Localens's <Link to="/terms-of-service" className="text-brand-gold font-bold hover:underline">Guide Terms of Service</Link> and <Link to="/safety-guidelines" className="text-brand-gold font-bold hover:underline">Safety Standards</Link>.
                </label>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-brand-olive text-brand-cream rounded-full font-bold hover:bg-brand-olive/90 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Submit Application 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSubmitted(false)}
              className="absolute inset-0 bg-brand-ink/20 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm glass-panel bg-white p-12 rounded-[48px] text-center shadow-2xl border-brand-gold/10"
            >
              <div className="w-20 h-20 bg-brand-olive text-brand-cream rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Application Received!</h2>
              <p className="text-brand-ink/60 mb-8 leading-relaxed">
                Thank you for applying to join the Localens collective. Our team will review your application and will be contacted soon!
              </p>
              <Link 
                to="/"
                className="block w-full py-4 bg-brand-olive text-brand-cream rounded-full font-bold hover:bg-brand-olive/90 transition-all shadow-lg"
              >
                Back to Home
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
