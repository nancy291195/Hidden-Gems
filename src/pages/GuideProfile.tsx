import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, Star, MapPin, ShieldCheck, Calendar, 
  MessageSquare, Globe, Quote, Clock, Check, 
  Users, Mail, User, CreditCard 
} from "lucide-react";
import { GUIDES } from "../constants";

export default function GuideProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookingRef = useRef<HTMLDivElement>(null);
  const guide = GUIDES.find((g) => g.id === id);

  const [bookingData, setBookingData] = useState({
    date: "",
    people: "2",
    tour: "",
    name: "",
    email: "",
    message: ""
  });

  if (!guide) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Guide not found</h1>
          <button 
            onClick={() => navigate("/find-a-guide")}
            className="text-brand-gold font-bold uppercase tracking-widest text-sm flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" /> Back to search
          </button>
        </div>
      </div>
    );
  }

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className={`absolute inset-0 bg-linear-to-br ${guide.themeColor} opacity-10`} />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            to="/find-a-guide"
            className="flex items-center gap-2 text-brand-gold hover:text-brand-olive transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to guides
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{guide.flag}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-brand-olive" />
                    <span className="micro-label text-brand-olive">Verified Local Expert</span>
                  </div>
                  <p className="text-sm font-medium text-brand-ink/60">{guide.region}, {guide.country}</p>
                </div>
              </div>

              <h1 className="text-6xl md:text-7xl font-serif mb-6 leading-tight">
                {guide.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  <span className="text-xl font-bold">{guide.rating}</span>
                  <span className="text-brand-ink/40 ml-1">({guide.reviewsCount} reviews)</span>
                </div>
                <div className="w-[1px] h-6 bg-brand-olive/20" />
                <div className="text-brand-ink/60">
                  <span className="font-bold text-brand-ink">${guide.toursFrom}</span> / person
                </div>
              </div>

              <button 
                onClick={scrollToBooking}
                className="bg-brand-olive text-brand-cream px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-olive/90 transition-all shadow-xl"
              >
                Book this guide
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-3/4 rounded-[48px] overflow-hidden shadow-2xl"
            >
              <img 
                src={guide.image} 
                alt={guide.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-brand-gold" />
            <span className="micro-label text-brand-gold uppercase tracking-widest">Atmosphere</span>
          </div>
          <h2 className="text-4xl font-serif mb-12">Photos from {guide.name.split(' ')[0]}'s tours</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guide.photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-default"
              >
                <div className={`absolute inset-0 ${photo.gradient} transition-transform duration-700 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm font-serif italic leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    "{photo.caption}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-20">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-20">
            {/* Biography */}
            <section>
              <h2 className="text-3xl font-serif mb-8">About your guide</h2>
              <div className="prose prose-lg text-brand-ink/70 max-w-none mb-10">
                <p className="leading-relaxed">{guide.bio}</p>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-brand-olive/10">
                <div>
                  <p className="micro-label mb-2">Languages</p>
                  <p className="font-bold">{guide.languages.join(", ")}</p>
                </div>
                <div>
                  <p className="micro-label mb-2">Experience</p>
                  <p className="font-bold">{guide.experienceYears} Years</p>
                </div>
                <div>
                  <p className="micro-label mb-2">Expertise</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {guide.certifications.map((cert, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-brand-olive/5 rounded-md border border-brand-olive/10">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* The Promise */}
            <section>
              <div className="bg-brand-olive text-brand-cream p-12 rounded-[48px] relative overflow-hidden">
                <Quote className="absolute -top-4 -left-4 w-24 h-24 opacity-10 rotate-12" />
                <div className="relative z-10 text-center">
                  <p className="text-3xl font-serif italic mb-6 leading-relaxed">
                    "{guide.promise}"
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-8 h-[1px] bg-brand-gold" />
                    <span className="micro-label text-brand-gold">{guide.name.split(' ')[0]}'s Personal Guarantee</span>
                    <span className="w-8 h-[1px] bg-brand-gold" />
                  </div>
                </div>
              </div>
            </section>

            {/* Tour Packages */}
            <section>
              <h2 className="text-3xl font-serif mb-10">Curated Experiences</h2>
              <div className="space-y-6">
                {guide.tours.map((tour, i) => (
                  <div key={i} className="glass-panel p-8 rounded-[32px] hover:border-brand-gold transition-all group">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-serif font-bold">{tour.name}</h3>
                          <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-[10px] font-bold uppercase tracking-widest">
                            Most Popular
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-brand-ink/50 mb-6">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {tour.duration}
                          </div>
                          <div className="w-1 h-1 bg-brand-ink/20 rounded-full" />
                          <div>From ${tour.price} per person</div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {tour.included.map((item, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm text-brand-ink/70">
                              <Check className="w-4 h-4 text-brand-olive" /> {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <button 
                          onClick={() => {
                            setBookingData(prev => ({ ...prev, tour: tour.name }));
                            scrollToBooking();
                          }}
                          className="px-8 py-4 bg-brand-olive text-brand-cream rounded-full font-bold hover:bg-brand-olive/90 transition-all group-hover:scale-105"
                        >
                          Select this tour
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-serif">Traveller Stories</h2>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  <span className="font-bold">{guide.rating}</span>
                  <span className="text-brand-ink/40">({guide.reviewsCount} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-8">
                {guide.reviews.map((review, i) => (
                  <div key={i} className="p-8 bg-white rounded-[32px] border border-brand-olive/5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-xl">
                          {review.userFlag}
                        </div>
                        <div>
                          <p className="font-bold">{review.userName}</p>
                          <p className="text-xs text-brand-ink/40">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className={`w-3 h-3 ${j < review.rating ? 'fill-brand-gold text-brand-gold' : 'text-brand-ink/10'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-brand-ink/70 italic leading-relaxed">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Booking Form */}
          <div className="lg:col-span-1">
            <div ref={bookingRef} className="sticky top-28">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 rounded-[40px] border-brand-gold/30 shadow-2xl"
              >
                <h3 className="text-2xl font-serif mb-8">Secure Your Experience</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="micro-label">Select Tour</label>
                    <select 
                      value={bookingData.tour}
                      onChange={(e) => setBookingData({...bookingData, tour: e.target.value})}
                      className="w-full p-4 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm"
                    >
                      <option value="">Choose a package</option>
                      {guide.tours.map((t, i) => (
                        <option key={i} value={t.name}>{t.name} — ${t.price}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="micro-label">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink/30" />
                        <input 
                          type="date" 
                          className="w-full p-4 pl-12 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="micro-label">Travellers</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink/30" />
                        <select 
                          value={bookingData.people}
                          onChange={(e) => setBookingData({...bookingData, people: e.target.value})}
                          className="w-full p-4 pl-12 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm"
                        >
                          {[1,2,3,4,5,6,7,8].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-brand-olive/10">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink/30" />
                      <input 
                        type="text" 
                        placeholder="Full Name"
                        className="w-full p-4 pl-12 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink/30" />
                      <input 
                        type="email" 
                        placeholder="Email Address"
                        className="w-full p-4 pl-12 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm"
                      />
                    </div>
                    <textarea 
                      placeholder="Message to guide (optional)..."
                      className="w-full p-4 bg-brand-cream rounded-2xl border border-brand-olive/10 focus:border-brand-gold outline-hidden transition-all text-sm h-24 resize-none"
                    />
                  </div>

                  <div className="pt-6">
                    <button className="w-full py-5 bg-brand-gold text-brand-ink rounded-full font-bold hover:bg-brand-gold/90 transition-all shadow-lg flex items-center justify-center gap-3">
                      <CreditCard className="w-5 h-5" />
                      Confirm & Pay Securely
                    </button>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
                        <Check className="w-3 h-3 text-brand-olive" />
                        Free cancellation up to 48h
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
                        <Check className="w-3 h-3 text-brand-olive" />
                        Confirmed within 24h
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-ink/40">
                        <ShieldCheck className="w-3 h-3 text-brand-olive" />
                        Powered by Stripe
                      </div>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
