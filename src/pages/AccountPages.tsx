import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, Heart, ArrowLeft, UserCheck } from "lucide-react";

export function MyBookings() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-20 h-20 bg-brand-olive/5 rounded-full flex items-center justify-center mb-6"
      >
        <Calendar className="w-10 h-10 text-brand-olive/30" />
      </motion.div>
      <h1 className="text-3xl font-serif font-bold mb-4">No bookings yet</h1>
      <p className="text-brand-ink/60 mb-8 max-w-md">
        Your upcoming adventures will appear here. Time to find your first local guide!
      </p>
      <Link to="/find-a-guide" className="bg-brand-olive text-brand-cream px-8 py-3 rounded-full font-bold hover:bg-brand-olive/90 transition-all">
        Explore Guides
      </Link>
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
