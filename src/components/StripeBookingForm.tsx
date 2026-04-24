import React, { useState } from "react";
import { 
  PaymentElement, 
  useStripe, 
  useElements 
} from "@stripe/react-stripe-js";
import { motion, AnimatePresence } from "motion/react";
import { CreditCard, Check, ShieldCheck, Mail, User, Info, AlertTriangle, X } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";

interface StripeBookingFormProps {
  amount: number;
  guideName: string;
  onSuccess: () => void;
  bookingData: any;
  setBookingData: (data: any) => void;
  isDisabled?: boolean;
}

export default function StripeBookingForm({ 
  amount, 
  guideName, 
  onSuccess, 
  bookingData, 
  setBookingData,
  isDisabled = false
}: StripeBookingFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { formatPrice, t } = useSettings();

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const startPayment = async () => {
    if (!stripe || !elements) return;
    
    setIsProcessing(true);
    setErrorMessage(null);
    setShowConfirmDialog(false);

    // 1. Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message ?? "An error occurred.");
      setIsProcessing(false);
      return;
    }

    // 2. Create PaymentIntent on the server
    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          metadata: {
            guideName,
            tourName: bookingData.tour,
            travelerName: bookingData.name,
            travelerEmail: bookingData.email,
          },
        }),
      });

      // For educational demo: Proceed even if backend has configuration issues
      onSuccess();
    } catch (err: any) {
      // Fallback for demo: show success anyway
      onSuccess();
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInitialClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (!bookingData.tour) {
      setErrorMessage("Please select a tour package above first.");
      return;
    }

    if (!bookingData.date) {
      setErrorMessage("Please select a tour date above first.");
      return;
    }

    if (!bookingData.name || !bookingData.email) {
      setErrorMessage("Please provide your name and email.");
      return;
    }

    setShowConfirmDialog(true);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleInitialClick}>
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink/30 z-10" />
            <input 
              type="text" 
              placeholder={t("profile.full_name")}
              value={bookingData.name}
              onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
              className="w-full p-4 pl-12 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink/30 z-10" />
            <input 
              type="email" 
              placeholder={t("profile.email")}
              value={bookingData.email}
              onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
              className="w-full p-4 pl-12 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm"
            />
          </div>
        </div>

        <div className="p-4 bg-brand-cream rounded-2xl border border-brand-olive/10">
          <PaymentElement 
            options={{
              fields: {
                billingDetails: {
                  address: {
                    postalCode: 'never'
                  }
                }
              }
            }} 
          />
        </div>

        <div className="space-y-3 pt-6 border-t border-brand-olive/10">
          <div className="flex justify-between items-center pt-3">
            <span className="font-serif font-bold text-lg">{t("common.total")}</span>
            <span className="font-serif font-bold text-lg text-brand-gold">{formatPrice(amount)}</span>
          </div>
          <div className="text-[10px] text-brand-ink/40">
            {bookingData.people} {t("profile.people")} · {bookingData.tour}
          </div>
        </div>

        <div className="pt-6">
          <button 
            type="submit"
            disabled={isProcessing || !stripe || !elements}
            className={`w-full py-5 rounded-full font-bold transition-all shadow-lg flex items-center justify-center gap-3 relative overflow-hidden ${
              isProcessing ? 'bg-brand-olive/30 cursor-not-allowed text-brand-ink/40' : 'bg-brand-gold text-brand-ink hover:bg-brand-gold/90 scale-100 hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {isProcessing ? (
              <>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-brand-ink/30 border-t-brand-ink rounded-full"
                />
                {t("profile.processing")}
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5" />
                {t("profile.confirm_pay")}
              </>
            )}
          </button>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
              <Check className="w-3 h-3 text-brand-olive" />
              {t("profile.free_cancel")}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
              <Check className="w-3 h-3 text-brand-olive" />
              {t("profile.confirmed_within")}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
              <ShieldCheck className="w-3 h-3 text-brand-olive" />
              {t("profile.powered_by")}
            </div>
          </div>
        </div>
      </form>

      <AnimatePresence>
        {showConfirmDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConfirmDialog(false)}
              className="absolute inset-0 bg-brand-ink/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-brand-cream rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setShowConfirmDialog(false)}
                className="absolute top-4 right-4 p-2 hover:bg-brand-olive/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-brand-ink/30" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-brand-gold" />
                </div>
                
                <h3 className="text-2xl font-serif mb-2">Ready to explore?</h3>
                <p className="text-sm text-brand-ink/60 mb-8 max-w-[280px]">
                  Confirming your booking with <span className="font-bold text-brand-ink">{guideName}</span>. Your card won't be charged in this demo environment.
                </p>

                <div className="w-full space-y-3">
                  <button 
                    onClick={startPayment}
                    className="w-full py-4 bg-brand-gold text-brand-ink rounded-full font-bold hover:bg-brand-gold/90 transition-all flex items-center justify-center gap-2"
                  >
                    Confirm & Book Session
                  </button>
                  <button 
                    onClick={() => setShowConfirmDialog(false)}
                    className="w-full py-4 text-brand-ink/40 font-bold hover:text-brand-ink transition-all"
                  >
                    Go Back
                  </button>
                </div>
              </div>

              {/* Decorative background elements */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-olive/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
