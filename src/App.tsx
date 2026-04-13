import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Globe, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Chat from "./components/Chat";
import GuideCard from "./components/GuideCard";
import { GUIDES } from "./constants";
import FindAGuide from "./pages/FindAGuide";
import GuideProfile from "./pages/GuideProfile";
import HiddenGems from "./pages/HiddenGems";
import HowItWorks from "./pages/HowItWorks";
import WorldMap from "./pages/WorldMap";
import GuideApplication from "./pages/GuideApplication";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-12 h-[1px] bg-brand-gold" />
              <span className="micro-label text-brand-gold">The New Way to Travel</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif leading-[1.1] mb-8">
              Travel like a <span className="serif-italic text-brand-gold">local</span>, not a tourist.
            </h1>
            <p className="text-lg text-brand-ink/70 leading-relaxed mb-10 max-w-lg">
              Connect with verified local guides who offer hidden gem experiences — places, trails, and moments that don't appear in any guidebook.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/find-a-guide" className="bg-brand-olive text-brand-cream px-8 py-4 rounded-full text-base font-medium hover:bg-brand-olive/90 transition-all shadow-lg flex items-center gap-2">
                Start Exploring <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-3 px-6 py-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user-${i}/100/100`}
                      className="w-10 h-10 rounded-full border-2 border-brand-cream object-cover"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-brand-ink/60">Joined by 12k+ travellers</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-gold/10 blur-3xl rounded-full" />
            <Chat />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center">
                <ShieldCheck className="text-brand-olive w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold">Verified Guides</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed">
                Every guide is personally interviewed and vetted for local knowledge, safety, and storytelling ability.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center">
                <Sparkles className="text-brand-olive w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold">Hidden Gems</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed">
                Access places that aren't on Instagram or in guidebooks. True off-the-beaten-path experiences.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center">
                <Globe className="text-brand-olive w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold">Ethical Travel</h3>
              <p className="text-sm text-brand-ink/60 leading-relaxed">
                Your money goes directly to local communities, supporting heritage preservation and sustainable tourism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[1px] bg-brand-gold" />
                <span className="micro-label text-brand-gold">Meet the Experts</span>
              </div>
              <h2 className="text-5xl font-serif leading-tight">
                Our Featured <span className="serif-italic text-brand-gold">Local Guides</span>
              </h2>
            </div>
            <Link to="/find-a-guide" className="text-sm font-bold uppercase tracking-widest text-brand-olive hover:text-brand-gold transition-colors flex items-center gap-2">
              View All Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GUIDES.slice(0, 3).map((guide) => (
              <Link key={guide.id} to={`/guide/${guide.id}`}>
                <GuideCard guide={guide} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-olive text-brand-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <Globe className="w-full h-full scale-150" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Ready for a story worth telling?</h2>
          <p className="text-xl text-brand-cream/70 mb-12 max-w-2xl mx-auto">
            Join thousands of travellers who have discovered the world through the eyes of those who call it home.
          </p>
          <Link to="/find-a-guide" className="inline-block bg-brand-gold text-brand-ink px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-gold/90 transition-all shadow-xl">
            Find Your Perfect Match
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 glass-panel border-b-0">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-olive rounded-xl flex items-center justify-center">
                <Compass className="text-brand-cream w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">Localens</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/find-a-guide" className="text-sm font-medium hover:text-brand-gold transition-colors">Find a Guide</Link>
              <Link to="/world-map" className="text-sm font-medium hover:text-brand-gold transition-colors">World Map</Link>
              <Link to="/hidden-gems" className="text-sm font-medium hover:text-brand-gold transition-colors">Hidden Gems</Link>
              <Link to="/how-it-works" className="text-sm font-medium hover:text-brand-gold transition-colors">How it Works</Link>
            </div>

            <button className="bg-brand-olive text-brand-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-olive/90 transition-all shadow-sm">
              Sign In
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-a-guide" element={<FindAGuide />} />
          <Route path="/guide/:id" element={<GuideProfile />} />
          <Route path="/hidden-gems" element={<HiddenGems />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/world-map" element={<WorldMap />} />
          <Route path="/guide-application" element={<GuideApplication />} />
        </Routes>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-brand-olive/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-olive rounded-lg flex items-center justify-center">
                  <Compass className="text-brand-cream w-5 h-5" />
                </div>
                <span className="text-xl font-serif font-bold">Localens</span>
              </Link>
              <p className="text-sm text-brand-ink/50 max-w-sm leading-relaxed">
                Connecting travellers with verified local guides who offer hidden gem experiences. Travel like a local, not a tourist.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-brand-ink/60">
                <li><Link to="/find-a-guide" className="hover:text-brand-gold transition-colors">Find a Guide</Link></li>
                <li><Link to="/world-map" className="hover:text-brand-gold transition-colors">World Map</Link></li>
                <li><Link to="/hidden-gems" className="hover:text-brand-gold transition-colors">Hidden Gems</Link></li>
                <li><Link to="/how-it-works" className="hover:text-brand-gold transition-colors">How it Works</Link></li>
                <li><Link to="/guide-application" className="hover:text-brand-gold transition-colors">Guide Application</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-brand-ink/60">
                <li><a href="#" className="hover:text-brand-gold transition-colors">Help Centre</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-olive/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-brand-ink/40">© 2026 Localens. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-brand-ink/40 hover:text-brand-gold transition-colors">Instagram</a>
              <a href="#" className="text-xs text-brand-ink/40 hover:text-brand-gold transition-colors">Twitter</a>
              <a href="#" className="text-xs text-brand-ink/40 hover:text-brand-gold transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
