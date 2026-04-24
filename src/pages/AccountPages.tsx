import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, Heart, ArrowLeft, UserCheck, MapPin, Clock, Tag, Users } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useSettings } from "../contexts/SettingsContext";

export function MyBookings() {
  const { bookings } = useAuth();
  const { formatPrice, t } = useSettings();

  if (bookings.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-20 h-20 bg-brand-olive/5 rounded-full flex items-center justify-center mb-6"
        >
          <Calendar className="w-10 h-10 text-brand-olive/30" />
        </motion.div>
        <h1 className="text-3xl font-serif font-bold mb-4">{t("bookings.none_title") || "No bookings yet"}</h1>
        <p className="text-brand-ink/60 mb-8 max-w-md">
          {t("bookings.none_subtitle") || "Your upcoming adventures will appear here. Time to find your first local guide!"}
        </p>
        <Link to="/find-a-guide" className="bg-brand-olive text-brand-cream px-8 py-3 rounded-full font-bold hover:bg-brand-olive/90 transition-all">
          {t("bookings.explore") || "Explore Guides"}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="flex items-center gap-4 mb-12">
        <Link to="/" className="w-10 h-10 rounded-full bg-brand-olive/5 flex items-center justify-center text-brand-olive hover:bg-brand-olive hover:text-white transition-all">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-4xl font-serif font-bold">{t("bookings.title") || "My Bookings"}</h1>
      </div>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <motion.div 
            key={booking.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-6 rounded-[32px] flex flex-col md:flex-row gap-6 relative overflow-hidden"
          >
            <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
              <img src={booking.guideImage} alt={booking.guideName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Tag className="w-3 h-3 text-brand-gold" />
                    <span className="micro-label text-brand-gold uppercase tracking-widest">{booking.status}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold">{booking.tourName}</h3>
                  <p className="text-brand-ink/60 flex items-center gap-1">
                    <UserCheck className="w-4 h-4" /> {t("bookings.with", { name: booking.guideName })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="micro-label mb-1 uppercase tracking-tight">{t("common.total")}</p>
                  <p className="text-xl font-bold text-brand-olive">{formatPrice(booking.totalPrice)}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-brand-olive/5">
                <div className="flex items-center gap-2 text-sm text-brand-ink/60">
                  <Calendar className="w-4 h-4 text-brand-olive" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-ink/60">
                  <Clock className="w-4 h-4 text-brand-olive" />
                  <span>{t("bookings.morning_start") || "09:00 AM"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-ink/60">
                  <Users className="w-4 h-4 text-brand-olive" />
                  <span>{booking.people} {booking.people === 1 ? t("profile.person") : t("profile.people")}</span>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button className="px-6 py-2.5 bg-brand-olive text-brand-cream rounded-full text-xs font-bold hover:bg-brand-olive/90 transition-all uppercase tracking-widest">
                  {t("bookings.view_details") || "View Details"}
                </button>
                <button className="px-6 py-2.5 border border-brand-olive/10 text-brand-ink/40 rounded-full text-xs font-bold hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all uppercase tracking-widest">
                  {t("bookings.cancel") || "Cancel"}
                </button>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function SavedGuides() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-20 h-20 bg-brand-gold/5 rounded-full flex items-center justify-center mb-6"
      >
        <Heart className="w-10 h-10 text-brand-gold/30" />
      </motion.div>
      <h1 className="text-3xl font-serif font-bold mb-4">No saved guides yet</h1>
      <p className="text-brand-ink/60 mb-8 max-w-md">
        Save guides you love to easily find them later. Just click the heart icon on any guide profile.
      </p>
      <Link to="/find-a-guide" className="bg-brand-olive text-brand-cream px-8 py-3 rounded-full font-bold hover:bg-brand-olive/90 transition-all">
        Find Guides
      </Link>
    </div>
  );
}

export function GuideApplicationSuccess() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 max-w-lg">
        <p className="text-sm text-amber-800 font-medium">
          Complete your profile below to finish your guide application.
        </p>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-20 h-20 bg-brand-gold/5 rounded-full flex items-center justify-center mb-6"
      >
        <UserCheck className="w-10 h-10 text-brand-gold" />
      </motion.div>
      <h1 className="text-3xl font-serif font-bold mb-4">Guide Application</h1>
      <p className="text-brand-ink/60 mb-8 max-w-md">
        This is where the full guide application form would be. For now, your account has been created and our team will be in touch!
      </p>
      <Link to="/" className="inline-flex items-center gap-2 text-brand-olive font-bold hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
    </div>
  );
}
