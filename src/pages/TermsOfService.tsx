import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSettings } from "../contexts/SettingsContext";

export default function TermsOfService() {
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
          <h1 className="text-5xl font-serif mb-4">Terms of Service</h1>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">Last updated: January 2026</p>
        </header>

        <div className="bg-white p-12 rounded-[48px] border border-brand-olive/5 shadow-sm space-y-12">
          <section>
            <h2 className="text-xl font-serif font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              By using Localens, you agree to these Terms of Service. If you do not agree, please do not use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">2. The Localens Platform</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              Localens is a marketplace that connects travellers with independent local guides. Localens does not directly provide tour guide services. The guides are independent contractors, not employees of Localens.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">3. Bookings and Payments</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              All bookings are subject to guide confirmation. Payment is collected at the time of booking and held until the guide confirms. If a guide does not confirm within 24 hours, a full refund is issued automatically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">4. Cancellation Policy</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              <strong>Travellers:</strong> Free cancellation up to 48 hours before the tour. No refund for cancellations within 48 hours.<br />
              <strong>Guides:</strong> If a guide cancels, the traveller receives a full refund and Localens will assist in finding an alternative.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">5. User Responsibilities</h2>
            <ul className="space-y-3 text-brand-ink/70 leading-relaxed list-disc pl-5">
              <li>Provide accurate information when booking</li>
              <li>Treat guides and their communities with respect</li>
              <li>Not use Localens to arrange activities that are illegal in the destination country</li>
              <li>Not circumvent the platform by booking guides directly after discovering them on Localens</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">6. Guide Responsibilities</h2>
            <ul className="space-y-3 text-brand-ink/70 leading-relaxed list-disc pl-5">
              <li>Provide the experiences described in their profile</li>
              <li>Maintain their rating and respond to bookings within 24 hours</li>
              <li>Conduct tours safely and in compliance with local laws</li>
              <li>Not misrepresent themselves or their knowledge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              All content on Localens (text, design, branding) is owned by Localens unless otherwise stated. Guide-submitted content (photos, bios, tour descriptions) remains the property of the guide but is licensed to Localens for display on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              Localens is not liable for personal injury, loss, or damage that occurs during a tour. Travellers participate in all experiences at their own risk and are responsible for obtaining appropriate travel insurance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">9. Changes to Terms</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              We may update these terms at any time. Continued use of Localens after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">10. Contact</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              For legal matters: <a href="mailto:legal@localens.com" className="text-brand-gold font-bold hover:underline">legal@localens.com</a>
            </p>
          </section>
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
