import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Sparkles, User, Bot, Loader2, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT, GUIDES } from "../constants";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing. Please set it in your environment variables.");
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  matchedGuideId?: string;
}

const SUGGESTED_PROMPTS = [
  "Hidden gems in Lebanon",
  "Off the beaten path in Japan",
  "Ancient ruins no one visits",
  "Most unique guide on the platform",
  "I want to sleep somewhere with no WiFi"
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Welcome to Localens. I'm your AI Match assistant. Describe your dream trip, and I'll find the perfect local guide to show you the hidden gems most travellers never see."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text?: string) => {
    const userMessage = text || input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    setError(null);

    try {
      const ai = getAI();
      
      // Gemini history must alternate User/Model and start with User.
      // We manually construct the contents array including the current message.
      const contents = [
        ...messages.slice(1).map(m => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }]
        })),
        { role: "user", parts: [{ text: userMessage }] }
      ];

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents,
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });
      
      let assistantContent = "";
      try {
        assistantContent = response.text || "";
      } catch (e) {
        console.error("Failed to get text from response:", e);
        assistantContent = "I'm sorry, I can't discuss that specific topic. Let's talk about your travel plans instead!";
      }

      if (!assistantContent) {
        throw new Error("Empty response from AI");
      }

      // Extract match tag
      const matchMatch = assistantContent.match(/\[MATCH:(\w+)\]/);
      const matchedGuideId = matchMatch ? matchMatch[1] : undefined;
      const cleanContent = assistantContent.replace(/\[MATCH:\w+\]/, "").trim();

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: cleanContent,
        matchedGuideId 
      }]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = error instanceof Error ? error.message : "I encountered an error while searching our guide database.";
      setError(errorMessage);
      let displayMessage = `I encountered an error: ${errorMessage}. Please try again in a moment.`;
      if (errorMessage.includes("API_KEY") || errorMessage.includes("API key")) {
        displayMessage = "The Gemini API key is missing or invalid. Please ensure it is correctly set in your environment variables.";
      } else if (errorMessage.includes("quota") || errorMessage.includes("429")) {
        displayMessage = "We've reached the AI's capacity for a moment. Please wait a few seconds and try again.";
      }
      setMessages(prev => [...prev, { role: "assistant", content: displayMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto glass-panel rounded-[32px] overflow-hidden">
      <div className="p-6 border-b border-brand-olive/10 flex items-center justify-between bg-brand-olive/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-olive flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-brand-cream" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold">AI Match Assistant</h3>
            <p className="micro-label">Powered by Localens AI</p>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
      >
        {error && (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-100" role="alert">
            <span className="font-medium">Error:</span> {error}
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "user" ? "bg-brand-gold" : "bg-brand-olive"
                }`}>
                  {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-brand-olive text-white rounded-tr-none" 
                    : "bg-brand-cream text-brand-ink border border-brand-olive/10 rounded-tl-none"
                }`}>
                  {msg.content}
                </div>
              </div>

              {msg.matchedGuideId && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-4 ml-11 w-full max-w-sm"
                >
                  {(() => {
                    const guide = GUIDES.find(g => g.id === msg.matchedGuideId);
                    if (!guide) return null;
                    return (
                      <div className="glass-panel p-4 rounded-3xl border-brand-gold/30 shadow-lg bg-white/50">
                        <div className="flex gap-4 mb-4">
                          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                            <img src={guide.image} alt={guide.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xl">{guide.flag}</span>
                              <h4 className="font-serif font-bold">{guide.name}</h4>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-brand-ink/60">
                              <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                              <span className="font-bold">{guide.rating}</span>
                              <span className="mx-1">•</span>
                              <span>{guide.speciality}</span>
                            </div>
                          </div>
                        </div>
                        <Link 
                          to={`/guide/${guide.id}`}
                          className="w-full py-3 bg-brand-olive text-brand-cream rounded-full text-xs font-bold hover:bg-brand-olive/90 transition-all flex items-center justify-center gap-2"
                        >
                          Book this guide <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-olive flex items-center justify-center">
                <Loader2 className="w-4 h-4 text-white animate-spin" />
              </div>
              <div className="p-4 rounded-2xl bg-brand-cream border border-brand-olive/10 rounded-tl-none">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-brand-olive/40 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-brand-olive/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-brand-olive/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-6 bg-white/50 border-t border-brand-olive/10">
        <div className="flex flex-wrap gap-2 mb-4">
          {SUGGESTED_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSend(prompt)}
              disabled={isLoading}
              className="px-3 py-1.5 bg-brand-cream border border-brand-olive/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-ink/60 hover:border-brand-gold hover:text-brand-ink transition-all disabled:opacity-50"
            >
              {prompt}
            </button>
          ))}
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Describe your dream trip..."
            className="w-full bg-white border border-brand-olive/20 rounded-full py-4 pl-6 pr-14 text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-olive/20 transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-3 bg-brand-olive text-white rounded-full hover:bg-brand-olive/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
