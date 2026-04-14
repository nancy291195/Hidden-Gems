import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-cream pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <header className="mb-16">
          <h1 className="text-5xl font-serif mb-4">Privacy Policy</h1>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">Last updated: January 2026</p>
        </header>

        <div className="bg-white p-12 rounded-[48px] border border-brand-olive/5 shadow-sm space-y-12">
          <section>
            <h2 className="text-xl font-serif font-bold mb-4">1. What We Collect</h2>
            <ul className="space-y-3 text-brand-ink/70 leading-relaxed list-disc pl-5">
              <li>Name and email address (when booking or signing up)</li>
              <li>Payment information (processed securely by Stripe — we never store card details)</li>
              <li>Travel preferences and booking history</li>
              <li>Device and browser information for analytics</li>
              <li>Messages sent to guides through our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">2. How We Use Your Data</h2>
            <ul className="space-y-3 text-brand-ink/70 leading-relaxed list-disc pl-5">
              <li>Process and confirm bookings</li>
              <li>Connect you with your guide</li>
              <li>Send booking confirmations and tour reminders</li>
              <li>Improve the Localens platform and user experience</li>
              <li>Send occasional updates about new guides or features (you can unsubscribe at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">3. What We Never Do</h2>
            <ul className="space-y-3 text-brand-ink/70 leading-relaxed list-disc pl-5">
              <li>We never sell your personal data to third parties</li>
              <li>We never share your data with advertisers</li>
              <li>We never use your data to train AI models without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">4. Data Sharing</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              We share limited data with:
            </p>
            <ul className="space-y-3 mt-3 text-brand-ink/70 leading-relaxed list-disc pl-5">
              <li>Your guide (name, contact, booking details — necessary to run your tour)</li>
              <li>Stripe (for payment processing)</li>
              <li>Analytics tools (anonymised, aggregated data only)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">5. Cookies</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              Localens uses essential cookies to keep you signed in and remember your preferences. We do not use tracking or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">6. Your Rights</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              You have the right to:
            </p>
            <ul className="space-y-3 mt-3 text-brand-ink/70 leading-relaxed list-disc pl-5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with your local data protection authority</li>
            </ul>
            <p className="mt-4 text-brand-ink/70">
              To exercise your rights, email: <a href="mailto:privacy@localens.com" className="text-brand-gold font-bold hover:underline">privacy@localens.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">7. Data Retention</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              We retain your data for as long as your account is active. If you delete your account, your personal data is removed within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold mb-4">8. Contact</h2>
            <p className="text-brand-ink/70 leading-relaxed">
              For privacy questions: <a href="mailto:privacy@localens.com" className="text-brand-gold font-bold hover:underline">privacy@localens.com</a>
            </p>
          </section>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-xs hover:text-brand-olive transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
