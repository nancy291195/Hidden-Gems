import { useState, useMemo, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Search, MapPin, Star, ArrowRight, X } from "lucide-react";
import { GUIDES, COMING_SOON_COUNTRIES, Guide } from "../constants";

export default function WorldMap() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPin, setSelectedPin] = useState<{ type: 'guide' | 'soon', data: any } | null>(null);

  const allLocations = useMemo(() => {
    const guides = GUIDES.map(g => ({ type: 'guide' as const, data: g }));
    const soon = COMING_SOON_COUNTRIES.map(c => ({ type: 'soon' as const, data: c }));
    return [...guides, ...soon];
  }, []);

  const filteredLocations = allLocations.filter(loc => 
    (loc.type === 'guide' ? loc.data.country : loc.data.name)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setSelectedPin(null);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        {/* Header & Search */}
        <div className="text-center mb-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-serif mb-6">Explore the <span className="serif-italic text-brand-gold">World</span></h1>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-ink/30" />
              <input 
                type="text"
                placeholder="Search a country..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full p-5 pl-12 bg-white rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-ink/30 hover:text-brand-ink"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Container */}
        <div className="relative flex-1 min-h-[600px] bg-white/50 rounded-[64px] border border-brand-olive/5 shadow-inner overflow-hidden">
          {/* Stylized SVG World Map Background */}
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-full opacity-20 pointer-events-none"
            fill="currentColor"
          >
            <path d="M150,150 Q200,100 250,150 T350,150 M400,100 Q450,50 500,100 T600,100 M700,150 Q750,100 800,150 T900,150 M100,300 Q150,250 200,300 T300,300 M400,350 Q450,300 500,350 T600,350 M700,400 Q750,350 800,400 T900,400" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Simple continents shapes */}
            <path d="M200,100 L300,80 L350,120 L320,200 L250,220 L180,180 Z" /> {/* North America */}
            <path d="M250,250 L320,240 L350,350 L300,450 L220,400 Z" /> {/* South America */}
            <path d="M450,80 L550,70 L600,120 L580,180 L480,160 Z" /> {/* Europe */}
            <path d="M460,200 L580,190 L620,350 L550,420 L450,380 Z" /> {/* Africa */}
            <path d="M600,80 L850,70 L920,250 L800,350 L620,300 Z" /> {/* Asia */}
            <path d="M750,380 L850,370 L880,450 L780,460 Z" /> {/* Australia */}
          </svg>

          {/* Pins */}
          {filteredLocations.map((loc, i) => (
            <motion.button
              key={`${loc.type}-${i}`}
              initial={{ scale: 0 }}
              animate={{ 
                scale: 1,
                x: `${loc.data.mapX}%`,
                y: `${loc.data.mapY}%`
              }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedPin(loc)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all z-10 ${
                loc.type === 'guide' 
                  ? 'bg-brand-gold text-brand-ink shadow-[0_0_20px_rgba(212,175,55,0.5)] animate-pulse' 
                  : 'bg-brand-ink/10 text-brand-ink/30'
              }`}
            >
              <MapPin className={`w-5 h-5 ${loc.type === 'guide' ? 'fill-brand-ink' : ''}`} />
            </motion.button>
          ))}

          {/* Popup Card */}
          <AnimatePresence>
            {selectedPin && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 w-full max-w-sm px-6"
              >
                <div className="glass-panel p-6 rounded-[32px] shadow-2xl border-brand-gold/30 relative">
                  <button 
                    onClick={() => setSelectedPin(null)}
                    className="absolute top-4 right-4 text-brand-ink/30 hover:text-brand-ink"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {selectedPin.type === 'guide' ? (
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={selectedPin.data.image} 
                          alt={selectedPin.data.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{selectedPin.data.flag}</span>
                          <h4 className="font-serif font-bold">{selectedPin.data.name}</h4>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                            <span className="font-bold">{selectedPin.data.rating}</span>
                          </div>
                          <Link 
                            to={`/guide/${selectedPin.data.id}`}
                            className="text-brand-gold font-bold uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
                          >
                            View Guide <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-2">
                      <div className="text-3xl mb-3">{selectedPin.data.flag}</div>
                      <h4 className="font-serif font-bold mb-2">{selectedPin.data.name}</h4>
                      <p className="text-xs text-brand-ink/50 mb-4">Guide coming soon to this region.</p>
                      <Link 
                        to="/guide-application"
                        className="text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-olive transition-colors underline underline-offset-4"
                      >
                        Apply to be a guide here →
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-ink/40">
            <div className="w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            Active Guide
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-ink/40">
            <div className="w-3 h-3 bg-brand-ink/10 rounded-full" />
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}
