import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { HIDDEN_GEMS } from "../constants";
import { useSettings } from "../contexts/SettingsContext";

export default function HiddenGems() {
  const { t } = useSettings();
  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> {t("common.back_home")}
        </Link>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-12 h-[1px] bg-brand-gold" />
              <span className="micro-label text-brand-gold uppercase tracking-widest">{t("gems.badge")}</span>
              <span className="w-12 h-[1px] bg-brand-gold" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
              {t("gems.title.1")}<span className="serif-italic text-brand-gold">{t("gems.title.highlight")}</span>{t("gems.title.2")}
            </h1>
            <p className="text-lg text-brand-ink/60 max-w-2xl mx-auto leading-relaxed">
              {t("gems.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 mb-24">
          {HIDDEN_GEMS.map((gem, i) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative break-inside-avoid rounded-[32px] overflow-hidden group cursor-default"
            >
              {/* The Card */}
              {gem.url ? (
                <img 
                  src={gem.url} 
                  alt={gem.description}
                  className={`w-full ${i % 3 === 0 ? 'aspect-3/4' : i % 3 === 1 ? 'aspect-square' : 'aspect-4/5'} object-cover transition-transform duration-1000 group-hover:scale-110`}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className={`w-full ${i % 3 === 0 ? 'aspect-3/4' : i % 3 === 1 ? 'aspect-square' : 'aspect-4/5'} ${gem.gradient} transition-transform duration-1000 group-hover:scale-110`} />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Flag Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 glass-panel rounded-full flex items-center justify-center text-2xl shadow-lg">
                {gem.flag}
              </div>

              {/* Poetic Description (Hover) */}
              <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
                <p className="text-white text-xl font-serif italic leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  "{gem.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-panel p-12 rounded-[48px] max-w-3xl mx-auto border-brand-gold/20">
            <h3 className="text-2xl font-serif mb-8">{t("gems.mystery_title")}</h3>
            <p className="text-brand-ink/60 mb-10">
              {t("gems.mystery_desc")}
            </p>
            <Link 
              to="/find-a-guide" 
              className="inline-flex items-center gap-3 bg-brand-olive text-brand-cream px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-olive/90 transition-all shadow-xl group"
            >
              {t("gems.cta")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
