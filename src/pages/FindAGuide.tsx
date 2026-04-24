import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ChevronRight, MapPin } from "lucide-react";
import { GUIDES, Guide } from "../constants";
import GuideCard from "../components/GuideCard";
import { useSettings } from "../contexts/SettingsContext";

export default function FindAGuide() {
  const { t } = useSettings();
  const location = useLocation();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    if (location.state?.country) {
      setSelectedCountry(location.state.country);
    }
  }, [location.state]);

  const countries = Array.from(new Set(GUIDES.map((g) => g.country))).map(
    (country) => {
      const countryGuides = GUIDES.filter((g) => g.country === country);
      return {
        name: country,
        flag: countryGuides[0]?.flag || "📍",
        guideImages: countryGuides.slice(0, 3).map(g => g.image),
        totalGuides: countryGuides.length
      };
    }
  );

  const filteredGuides = GUIDES.filter((g) => g.country === selectedCountry);

  return (
    <div className="min-h-screen bg-brand-cream pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> {t("common.back_home")}
        </Link>
        <AnimatePresence mode="wait">
          {!selectedCountry ? (
            <motion.div
              key="selector"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <h1 className="text-5xl font-serif mb-6">{t("find.title")}</h1>
                <p className="text-brand-ink/60 max-w-lg mx-auto">
                  {t("find.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries.map((country) => (
                  <button
                    key={country.name}
                    onClick={() => setSelectedCountry(country.name)}
                    className="group glass-panel p-6 rounded-[40px] text-left hover:bg-brand-olive hover:text-brand-cream transition-all duration-500 flex flex-col gap-6"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl group-hover:scale-110 transition-transform">{country.flag}</span>
                        <div>
                          <h3 className="text-xl font-serif font-bold group-hover:text-brand-gold transition-colors">{country.name}</h3>
                          <p className="text-[10px] opacity-60 uppercase tracking-widest font-bold">
                            {t("find.guides_count", { count: country.totalGuides })}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>

                    <div className="flex -space-x-4">
                      {country.guideImages.map((img, idx) => (
                        <div 
                          key={idx} 
                          className="w-12 h-12 rounded-2xl border-4 border-brand-cream group-hover:border-brand-olive/20 overflow-hidden transition-all shadow-md"
                          style={{ zIndex: 3 - idx }}
                        >
                          <img src={img} alt="Guide" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                      {country.totalGuides > 3 && (
                        <div className="w-12 h-12 rounded-2xl border-4 border-brand-cream group-hover:border-brand-olive/20 bg-brand-gold flex items-center justify-center text-[10px] font-bold text-brand-ink z-0 shadow-md">
                          +{country.totalGuides - 3}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="guides"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="flex items-center gap-2 text-brand-gold hover:text-brand-olive transition-colors mb-6 font-bold uppercase tracking-widest text-xs"
                  >
                    <ArrowLeft className="w-4 h-4" /> {t("find.another_country")}
                  </button>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">
                      {countries.find((c) => c.name === selectedCountry)?.flag}
                    </span>
                    <h1 className="text-6xl font-serif">
                      {t("featured.title.1")}<span className="serif-italic text-brand-gold">{selectedCountry}</span>
                    </h1>
                  </div>
                </div>
                <p className="text-brand-ink/50 text-sm max-w-xs">
                  {t("find.showing", { count: filteredGuides.length, country: selectedCountry })}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGuides.map((guide) => (
                  <Link key={guide.id} to={`/guide/${guide.id}`}>
                    <GuideCard guide={guide} />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
