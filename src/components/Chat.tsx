import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Sparkles, User, Bot, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Welcome to Localens. I'm your AI Match assistant. Describe your dream trip, and I'll find the perfect local guide to show you the hidden gems most travellers never see."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      // Convert history to Gemini format
      const history = messages.map(m => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));

      const response = await chat.sendMessage({
        message: userMessage,
        // history // Note: sendMessage in this SDK version might handle history differently or we use chat.sendMessage
      });

      const assistantContent = response.text || "I'm sorry, I couldn't process that. Could you try rephrasing?";
      setMessages(prev => [...prev, { role: "assistant", content: assistantContent }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: "assistant", content: "I encountered an error while searching our guide database. Please try again in a moment." }]);
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
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
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
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-3 bg-brand-olive text-white rounded-full hover:bg-brand-olive/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[10px] text-center mt-3 text-brand-ink/40 uppercase tracking-widest font-medium">
          Ask about Japan, Lebanon, Morocco, Georgia, Peru, or Ethiopia
        </p>
      </div>
    </div>
  );
}
