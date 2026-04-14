import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, Mail, MessageCircle } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQSection[] = [
  {
    title: "Booking & Payments",
    items: [
      {
        question: "How do I book a guide?",
        answer: "Browse guides by country or use our AI Match assistant to find your perfect guide. Once you've chosen a guide and tour package, fill in the booking form on their profile page with your travel date, group size, and contact details. You'll receive a confirmation within 24 hours."
      },
      {
        question: "What payment methods are accepted?",
        answer: "All payments are processed securely through Stripe. We accept all major credit and debit cards (Visa, Mastercard, Amex). You are only charged once the guide confirms your booking."
      },
      {
        question: "What is the cancellation policy?",
        answer: "You can cancel for free up to 48 hours before your tour date for a full refund. Cancellations within 48 hours are non-refundable. In case of force majeure or guide cancellation, you will always receive a full refund."
      },
      {
        question: "Is my payment secure?",
        answer: "Yes. All transactions are encrypted and handled by Stripe, one of the world's most trusted payment processors. Localens never stores your card details."
      }
    ]
  },
  {
    title: "Guides & Experiences",
    items: [
      {
        question: "How are guides verified?",
        answer: "Every guide goes through a personal interview with our team, a review of their local knowledge and social proof (Instagram, YouTube, community references), and a safety check. Only guides who genuinely know hidden, off-the-beaten-path places are approved."
      },
      {
        question: "What makes Localens different from Viator or GetYourGuide?",
        answer: "Those platforms list mainstream tourist experiences. Localens is exclusively focused on hidden gems — places that don't appear in guidebooks or Google's top results. Every guide on our platform makes a personal promise to show you somewhere that most travellers never see."
      },
      {
        question: "Can I communicate with my guide before booking?",
        answer: "Yes. After booking, your guide will contact you directly within 24 hours to confirm details and discuss any special requests. You can also send a message to your guide in the booking form."
      },
      {
        question: "What if the experience doesn't match the description?",
        answer: "We take this seriously. If your experience significantly differs from what was promised, contact us within 48 hours of your tour and we will investigate and offer a resolution, including partial or full refund where appropriate."
      }
    ]
  },
  {
    title: "For Guides",
    items: [
      {
        question: "How do I apply to become a guide?",
        answer: "Click \"Guide Application\" in the footer or the \"Become a Guide\" button on any page. Fill in your details, describe your signature hidden gem experience, and submit. We review all applications within 3–5 days."
      },
      {
        question: "How does payment work for guides?",
        answer: "Localens takes a 15% commission on each confirmed booking. You receive the remaining 85% directly. You set your own prices and availability. There are no listing fees."
      },
      {
        question: "Can I list tours in multiple countries?",
        answer: "Currently each guide is listed under one primary country. If you guide in multiple countries, contact us at guides@localens.com and we will discuss a multi-country profile."
      }
    ]
  },
  {
    title: "Technical",
    items: [
      {
        question: "Is Localens available as a mobile app?",
        answer: "Our web platform is fully mobile-optimised and works beautifully on any smartphone browser. A native iOS and Android app is in development for 2026."
      },
      {
        question: "I found a bug or something isn't working. What do I do?",
        answer: "Email us at support@localens.com with a description of the issue and the device/browser you're using. We aim to respond within 24 hours."
      }
    ]
  }
];

function AccordionItem({ item }: { item: FAQItem; key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-olive/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand-gold transition-colors group"
      >
        <span className="text-lg font-serif font-bold">{item.question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-ink/70 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HelpCentre() {
  const { t } = useSettings();
  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> {t("common.back_home")}
        </Link>
        <header className="mb-16">
          <h1 className="text-5xl font-serif mb-4">{t("help.title")}</h1>
          <p className="text-xl text-brand-ink/60">{t("help.subtitle")}</p>
        </header>

        <div className="space-y-16">
          {FAQ_DATA.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brand-gold" />
                {section.title}
              </h2>
              <div className="bg-white rounded-[32px] px-8 border border-brand-olive/5 shadow-sm">
                {section.items.map((item, i) => (
                  <AccordionItem key={i} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand-olive text-brand-cream rounded-[48px] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-serif mb-4">{t("help.still_questions")}</h3>
            <p className="text-brand-cream/70 mb-8">{t("help.email_us")}</p>
            <a 
              href="mailto:support@localens.com"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-ink px-8 py-4 rounded-full font-bold hover:bg-brand-gold/90 transition-all shadow-lg"
            >
              <Mail className="w-4 h-4" /> {t("help.email_support")}
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t("common.back_home")}
          </Link>
        </div>
      </div>
    </div>
  );
}
