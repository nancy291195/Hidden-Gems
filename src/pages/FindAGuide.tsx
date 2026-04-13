import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ChevronRight, MapPin } from "lucide-react";
import { GUIDES, Guide } from "../constants";
import GuideCard from "../components/GuideCard";

export default function FindAGuide() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countries = Array.from(new Set(GUIDES.map((g) => g.country))).map(
    (country) => ({
      name: country,
      flag: GUIDES.find((g) => g.country === country)?.flag || "📍",
    })
  );

  const filteredGuides = GUIDES.filter((g) => g.country === selectedCountry);

  return (
    <div className="min-h-screen bg-brand-cream pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
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
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="w-12 h-[1px] bg-brand-gold" />
                  <span className="micro-label text-brand-gold">Step 1</span>
                  <span className="w-12 h-[1px] bg-brand-gold" />
                </div>
                <h1 className="text-5xl font-serif mb-6">Where are you headed?</h1>
                <p className="text-brand-ink/60 max-w-lg mx-auto">
                  Select a country to discover local experts who know the hidden trails and secret stories of their homeland.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries.map((country) => (
                  <button
                    key={country.name}
                    onClick={() => setSelectedCountry(country.name)}
                    className="group glass-panel p-8 rounded-[32px] text-left hover:bg-brand-olive hover:text-brand-cream transition-all duration-500 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <h3 className="text-xl font-serif font-bold">{country.name}</h3>
                        <p className="text-xs opacity-60 uppercase tracking-widest font-medium">
                          {GUIDES.filter(g => g.country === country.name).length} Guides
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                    <ArrowLeft className="w-4 h-4" /> Choose another country
                  </button>
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">
                      {countries.find((c) => c.name === selectedCountry)?.flag}
                    </span>
                    <h1 className="text-6xl font-serif">
                      Guides in <span className="serif-italic text-brand-gold">{selectedCountry}</span>
                    </h1>
                  </div>
                </div>
                <p className="text-brand-ink/50 text-sm max-w-xs">
                  Showing {filteredGuides.length} verified local experts in {selectedCountry}.
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
