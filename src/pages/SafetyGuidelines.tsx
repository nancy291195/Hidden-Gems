import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, UserCheck, Map, AlertTriangle, Heart, Info } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";

const SAFETY_SECTIONS = [
  {
    title: "Guide Verification",
    icon: <UserCheck className="w-6 h-6 text-brand-olive" />,
    content: [
      "Every guide on Localens passes a multi-step verification process:",
      "- Personal video interview with the Localens team",
      "- Review of local knowledge, storytelling ability, and guest safety awareness",
      "- Verification of identity and legal right to work in their country",
      "- Social proof review (local community references, online presence)",
      "- Ongoing rating monitoring — guides below 4.5 stars are suspended pending review"
    ]
  },
  {
    title: "During Your Experience",
    icon: <Map className="w-6 h-6 text-brand-olive" />,
    content: [
      "- Share your tour itinerary with someone you trust before departure",
      "- Keep your phone charged and carry the guide's contact number offline",
      "- For multi-day tours in remote areas, ensure your travel insurance covers wilderness and off-road activities",
      "- Trust your instincts — if something feels wrong, you have the right to end a tour at any point. Localens will always support you.",
      "- For tours in politically sensitive regions, check your government's official travel advisory before booking"
    ]
  },
  {
    title: "Child Safety",
    icon: <Heart className="w-6 h-6 text-brand-olive" />,
    content: [
      "- Guides are not permitted to operate tours for unaccompanied minors (under 18) without written parental consent",
      "- Any behaviour that puts a minor at risk is grounds for immediate removal from the platform"
    ]
  },
  {
    title: "Reporting an Incident",
    icon: <AlertTriangle className="w-6 h-6 text-brand-olive" />,
    content: [
      "If something goes wrong during or after a tour:",
      "1. Contact us immediately at safety@localens.com",
      "2. Include your booking reference, guide name, and a description of the incident",
      "3. We will respond within 4 hours for urgent safety matters",
      "4. For emergencies, always contact local emergency services first"
    ]
  },
  {
    title: "Travel Insurance",
    icon: <Info className="w-6 h-6 text-brand-olive" />,
    content: [
      "We strongly recommend purchasing travel insurance before booking any tour, especially for adventure, wilderness, or multi-day experiences. Localens does not provide travel insurance."
    ]
  },
  {
    title: "Our Commitment",
    icon: <ShieldCheck className="w-6 h-6 text-brand-olive" />,
    content: [
      "Localens is committed to responsible, ethical tourism. We believe travel should benefit local communities, preserve cultural heritage, and never exploit the places or people it encounters. Guides who violate these principles are permanently removed from the platform."
    ]
  }
];

export default function SafetyGuidelines() {
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
          <h1 className="text-5xl font-serif mb-4">Safety Guidelines</h1>
          <p className="text-xl text-brand-ink/60">Your safety is our highest priority. Here's how we keep every Localens experience safe.</p>
        </header>

        <div className="space-y-12">
          {SAFETY_SECTIONS.map((section, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-brand-olive/5 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-serif font-bold">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.content.map((line, i) => (
                  <p key={i} className="text-brand-ink/70 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-brand-ink/60 mb-8">Questions about safety? Contact us at <a href="mailto:safety@localens.com" className="text-brand-gold font-bold hover:underline">safety@localens.com</a></p>
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
