import { useState, useMemo, ChangeEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Search, MapPin, Star, ArrowRight, X, ArrowLeft } from "lucide-react";
import { GUIDES, COMING_SOON_COUNTRIES, Guide } from "../constants";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useSettings } from "../contexts/SettingsContext";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Custom Gold Icon for Active Guides
const GoldIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #D4AF37; width: 24px; height: 24px; border-radius: 50%; border: 2px solid #1A1A1A; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(212,175,55,0.6); animation: pulse 2s infinite;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#1A1A1A" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

// Custom Gray Icon for Coming Soon
const SoonIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #1A1A1A20; width: 20px; height: 20px; border-radius: 50%; border: 2px solid #1A1A1A30; display: flex; align-items: center; justify-content: center;"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

function MapController({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    if (map) {
      map.flyTo(center, zoom, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  }, [center[0], center[1], zoom, map]);
  return null;
}

export default function WorldMap() {
  const { t } = useSettings();
  const [searchQuery, setSearchQuery] = useState("");
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 0]);
  const [mapZoom, setMapZoom] = useState(2);

  const allLocations = useMemo(() => {
    const guides = GUIDES.map(g => ({ type: 'guide' as const, data: g }));
    const soon = COMING_SOON_COUNTRIES.map(c => ({ type: 'soon' as const, data: c }));
    return [...guides, ...soon];
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 2) {
      const match = allLocations.find(loc => 
        (loc.type === 'guide' ? loc.data.country : loc.data.name)
          .toLowerCase()
          .includes(query.toLowerCase())
      );
      
      if (match) {
        setMapCenter([match.data.lat, match.data.lng]);
        setMapZoom(5);
      }
    } else if (query === "") {
      setMapCenter([20, 0]);
      setMapZoom(2);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> {t("common.back_home")}
        </Link>
        {/* Header & Search */}
        <div className="text-center mb-12 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-serif mb-6">{t("map.title.1")}<span className="serif-italic text-brand-gold">{t("map.title.highlight")}</span></h1>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-ink/30" />
              <input 
                type="text"
                placeholder={t("map.search_placeholder")}
                value={searchQuery}
                onChange={handleSearch}
                className="w-full p-5 pl-12 bg-white rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => { setSearchQuery(""); setMapCenter([20, 0]); setMapZoom(2); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-ink/30 hover:text-brand-ink"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[600px] bg-white rounded-[64px] border border-brand-olive/5 shadow-2xl overflow-hidden z-10">
          <MapContainer 
            center={mapCenter} 
            zoom={mapZoom} 
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
            zoomControl={false}
          >
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            />
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
            />
            
            <MapController center={mapCenter} zoom={mapZoom} />

            {allLocations.map((loc, i) => (
              <Marker 
                key={`${loc.type}-${i}`} 
                position={[loc.data.lat, loc.data.lng]}
                icon={loc.type === 'guide' ? GoldIcon : SoonIcon}
              >
                <Popup className="custom-popup">
                  <div className="p-2 min-w-[200px]">
                    {loc.type === 'guide' ? (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <img 
                            src={loc.data.image} 
                            alt={loc.data.name}
                            className="w-12 h-12 rounded-xl object-cover shadow-sm"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-lg">{loc.data.flag}</span>
                              <h4 className="font-serif font-bold text-sm m-0">{loc.data.name}</h4>
                            </div>
                            <div className="flex items-center gap-1 mt-0.5">
                              <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                              <span className="text-[10px] font-bold">{loc.data.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Link 
                          to={`/guide/${loc.data.id}`}
                          className="bg-brand-olive text-brand-cream text-[10px] font-bold uppercase tracking-widest py-2 rounded-lg text-center hover:bg-brand-gold hover:text-brand-ink transition-all flex items-center justify-center gap-2"
                        >
                          {t("common.view_profile")} <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ) : (
                      <div className="text-center py-1">
                        <div className="text-2xl mb-1">{loc.data.flag}</div>
                        <h4 className="font-serif font-bold text-sm mb-1">{loc.data.name}</h4>
                        <p className="text-[10px] text-brand-ink/50 mb-2">{t("map.coming_soon_desc")}</p>
                        <Link 
                          to="/guide-application"
                          className="text-[9px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-olive transition-colors underline underline-offset-4"
                        >
                          {t("common.apply_guide")}
                        </Link>
                      </div>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Custom Zoom Controls Overlay */}
          <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-2">
            <button 
              onClick={() => setMapZoom(prev => Math.min(prev + 1, 18))}
              className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-brand-ink hover:text-brand-gold transition-colors font-bold text-xl"
            >
              +
            </button>
            <button 
              onClick={() => setMapZoom(prev => Math.max(prev - 1, 2))}
              className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-brand-ink hover:text-brand-gold transition-colors font-bold text-xl"
            >
              -
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex justify-center gap-8 relative z-20">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-ink/40">
            <div className="w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
            {t("map.active_guide")}
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-ink/40">
            <div className="w-3 h-3 bg-brand-ink/10 rounded-full border border-brand-ink/20" />
            {t("map.coming_soon")}
          </div>
        </div>
      </div>

      <style>{`
        .leaflet-container {
          background: #FDFCF7 !important;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(253, 252, 247, 0.9);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          padding: 0;
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
        }
        .custom-popup .leaflet-popup-tip {
          background: rgba(253, 252, 247, 0.9);
        }
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212,175,55,0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(212,175,55,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(212,175,55,0); }
        }
      `}</style>
    </div>
  );
}
