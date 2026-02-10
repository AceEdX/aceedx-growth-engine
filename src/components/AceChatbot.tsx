import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import aceMascot from "@/assets/ace-mascot.jpeg";

interface Message {
  role: "user" | "bot";
  content: string;
}

const FAQ: { q: string[]; a: string }[] = [
  {
    q: ["what is aceedx", "about aceedx", "tell me about aceedx"],
    a: "AceEdX is an AI-powered EdTech platform that helps school leaders streamline operations, empowers teachers with smart tools, and connects parents with real-time student progress. Visit www.aceedx.com to learn more!",
  },
  {
    q: ["contact", "phone", "number", "call"],
    a: "You can reach AceEdX at 📞 9373387800. We'd love to hear from you!",
  },
  {
    q: ["whatsapp", "community", "group"],
    a: "Join our WhatsApp community for updates and discussions: https://chat.whatsapp.com/DRFnvBygAX60wLmuvXRrfa?mode=gi_c",
  },
  {
    q: ["admission", "school admission", "how to apply"],
    a: "Check our blog articles on school admissions! We have detailed guides on choosing the right school, questions to ask before admission, and tips for the admissions process. Browse our 'Admissions' category.",
  },
  {
    q: ["curriculum", "cbse", "icse", "ib", "board"],
    a: "We have a comprehensive comparison of CBSE vs ICSE vs IB vs State Boards. Check our blog post 'School Curriculum Compared' for a detailed breakdown of each curriculum's strengths!",
  },
  {
    q: ["teacher", "lesson plan", "teaching"],
    a: "AceEdX equips teachers with AI-powered tools for lesson planning, assessments, and classroom efficiency. Our AI tools can reduce lesson planning time from 60 minutes to under 10 minutes!",
  },
  {
    q: ["parent", "parents", "engagement"],
    a: "AceEdX connects parents with real-time student progress, attendance tracking, automated communication, and seamless parent-teacher interaction. Stay involved in your child's education!",
  },
  {
    q: ["ai", "artificial intelligence", "technology"],
    a: "AceEdX uses AI for automated attendance, smart scheduling, predictive analytics, personalized learning paths, and intelligent lesson planning. Read our blog on 'How AI Is Transforming School Administration' for more!",
  },
  {
    q: ["pricing", "cost", "price", "free"],
    a: "For pricing details, please visit www.aceedx.com or call us at 9373387800. We offer plans tailored to schools of all sizes!",
  },
  {
    q: ["hello", "hi", "hey", "good morning", "good evening"],
    a: "Hello! 🐘 I'm Ace, your friendly education assistant! How can I help you today? Ask me about AceEdX, school admissions, curricula, or anything education-related!",
  },
];

function findAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const faq of FAQ) {
    if (faq.q.some((keyword) => lower.includes(keyword))) {
      return faq.a;
    }
  }
  return "Great question! I'd recommend checking out our blog articles for detailed information, or you can reach us directly at 📞 9373387800. You can also join our WhatsApp community for instant support!";
}

const AceChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hi! 🐘 I'm Ace, your AceEdX assistant! Ask me about schools, admissions, curricula, or anything education-related!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const botMsg: Message = { role: "bot", content: findAnswer(input.trim()) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-110 overflow-hidden border-2 border-accent"
          aria-label="Open chat with Ace"
        >
          <img src={aceMascot} alt="Ace Mascot" className="h-full w-full object-cover" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[480px] w-[360px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary px-4 py-3">
            <img src={aceMascot} alt="Ace" className="h-10 w-10 rounded-full border-2 border-accent object-cover" />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-primary-foreground">Ask Ace</h3>
              <p className="text-xs text-primary-foreground/70">Your AceEdX Assistant</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border px-3 py-2.5">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                onClick={handleSend}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AceChatbot;
