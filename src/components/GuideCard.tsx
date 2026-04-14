import { motion } from "motion/react";
import { Star, MapPin, Quote } from "lucide-react";
import { Guide } from "../constants";
import { useSettings } from "../contexts/SettingsContext";

interface GuideCardProps {
  guide: Guide;
}

export default function GuideCard({ guide }: GuideCardProps) {
  const { formatPrice, t } = useSettings();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-[32px] bg-white shadow-sm transition-all hover:shadow-xl"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={guide.image}
          alt={guide.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-ink/80 via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-0 p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{guide.flag}</span>
          <span className="micro-label text-white/80">{guide.country}</span>
        </div>
        <h3 className="text-2xl font-medium mb-1">{guide.name}</h3>
        <p className="text-sm text-white/70 line-clamp-1 mb-4">
          {t(`${guide.id}.speciality`) !== `${guide.id}.speciality` ? t(`${guide.id}.speciality`) : guide.speciality}
        </p>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
            <span className="text-sm font-medium">{guide.rating}</span>
          </div>
          <div className="text-sm text-white/60">
            {t("common.from")} {formatPrice(guide.toursFrom)}
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4">
        <div className="glass-panel rounded-full px-3 py-1 flex items-center gap-2">
          <MapPin className="w-3 h-3 text-brand-olive" />
          <span className="text-[10px] font-bold text-brand-olive uppercase tracking-wider">{t("common.verified")}</span>
        </div>
      </div>
    </motion.div>
  );
}
