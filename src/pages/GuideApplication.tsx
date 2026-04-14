import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Compass, ShieldCheck, Star, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";

export default function GuideApplication() {
  const { t } = useSettings();
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

        <div className="glass-panel p-12 rounded-[48px] border-brand-gold/20 text-center">
          <h3 className="text-2xl font-serif mb-8">Ready to start?</h3>
          <form className="grid sm:grid-cols-2 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="micro-label">Full Name</label>
              <input type="text" className="w-full p-4 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" />
            </div>
            <div className="space-y-2">
              <label className="micro-label">Email Address</label>
              <input type="email" className="w-full p-4 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" />
            </div>
            <div className="space-y-2">
              <label className="micro-label">Country & Region</label>
              <input type="text" className="w-full p-4 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" />
            </div>
            <div className="space-y-2">
              <label className="micro-label">Your Speciality</label>
              <input type="text" placeholder="e.g. Hidden waterfalls, ancient caves" className="w-full p-4 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm" />
            </div>
            <div className="sm:col-span-2 space-y-2">
              <label className="micro-label">Tell us about your most unique tour idea</label>
              <textarea className="w-full p-4 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm h-32 resize-none" />
            </div>
            <div className="sm:col-span-2 pt-4">
              <button className="w-full py-5 bg-brand-olive text-brand-cream rounded-full font-bold hover:bg-brand-olive/90 transition-all shadow-lg flex items-center justify-center gap-3">
                Submit Application <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
