import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Eye, EyeOff, Mail, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn(email);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Sign in failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-brand-cream/30 flex items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px] glass-panel p-8 rounded-[32px] shadow-2xl relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-2">Welcome back, Explorer!</h2>
              <p className="text-brand-ink/60">Redirecting...</p>
            </motion.div>
          ) : (
            <motion.div key="form" exit={{ opacity: 0, scale: 0.95 }}>
              <div className="text-center mb-8">
                <Link to="/" className="inline-flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-brand-olive rounded-xl flex items-center justify-center">
                    <Compass className="text-brand-cream w-6 h-6" />
                  </div>
                  <span className="text-2xl font-serif font-bold tracking-tight">Localens</span>
                </Link>
                <h1 className="text-3xl font-serif font-bold mb-2">Welcome back</h1>
                <p className="text-sm text-brand-ink/60">Sign in to manage your bookings and saved guides</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/40 ml-1">Email address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink/30" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-white border border-brand-olive/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-ink/40">Password</label>
                    <button type="button" className="text-xs font-bold text-brand-gold hover:underline">Forgot your password?</button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-ink/30" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white border border-brand-olive/10 rounded-2xl py-3.5 pl-11 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold transition-all"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-ink/30 hover:text-brand-ink transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#FFB347] to-[#FF4E50] text-white py-4 rounded-2xl font-bold shadow-lg shadow-coral/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-brand-olive/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                  <span className="bg-brand-cream/80 px-4 text-brand-ink/30">or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-white border border-brand-olive/10 py-3 rounded-2xl hover:bg-brand-cream/50 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-2xl hover:bg-black/90 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.96.95-2.04 1.9-3.29 1.9-1.21 0-1.62-.75-3.04-.75-1.44 0-1.89.73-3.04.75-1.21.02-2.45-1.06-3.41-2.01-1.96-1.94-3.46-5.49-1.44-8.98 1-1.73 2.79-2.83 4.74-2.86 1.48-.03 2.89 1.01 3.79 1.01.91 0 2.62-1.24 4.39-1.06 1.74.07 3.05.71 3.75 1.73-1.44.87-2.41 2.37-2.38 4.14.03 2.16 1.78 3.2 1.81 3.23-.03.08-.28.96-.88 1.84zM12.03 7.25c-.02-2.23 1.84-4.13 4.08-4.15.02 2.23-1.84 4.13-4.08 4.15z"/>
                  </svg>
                  <span className="text-sm font-medium">Apple</span>
                </button>
              </div>

              <div className="mt-10 text-center">
                <p className="text-sm text-brand-ink/60">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-brand-gold font-bold hover:underline inline-flex items-center gap-1">
                    Sign up <ArrowRight className="w-3 h-3" />
                  </Link>
                </p>
              </div>

              <p className="mt-8 text-[10px] text-center text-brand-ink/30 leading-relaxed">
                By signing in, you agree to our{" "}
                <Link to="/terms-of-service" className="underline hover:text-brand-gold">Terms of Service</Link> and{" "}
                <Link to="/privacy-policy" className="underline hover:text-brand-gold">Privacy Policy</Link>.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
