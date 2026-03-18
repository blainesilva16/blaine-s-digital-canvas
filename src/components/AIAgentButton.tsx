import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "@/components/ui/scroll-area";

const API_URL = "https://exdkuiv26k.execute-api.us-east-1.amazonaws.com/chat";

const WELCOME_MESSAGE =
  "Olá! Eu sou a assistente virtual da Blaine Silva e posso responder suas principais dúvidas sobre ela."

const QUICK_ACTIONS = [
  "Principais projetos desenvolvidos",
  "Formação acadêmica",
  "Hard skills e Soft skills",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIAgentButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim(), history: updatedMessages }),
      });

      // {
      //   "body": "{\"message\": \"Tell me about Blaine's projects\"}",
      //   "httpMethod": "POST",
      //   "headers": {
      //     "Content-Type": "application/json"
      //   },
      //   "isBase64Encoded": false
      // }

      if (!res.ok) throw new Error("Erro na requisição");

      const data = await res.json();
      let payload: any = data;

      if (data.body && typeof data.body === "string") {
        try {
          payload = JSON.parse(data.body);
        } catch {
          payload = { ...data, body: data.body };
        }
      } else if (data.body && typeof data.body === "object") {
        payload = data.body;
      }

      const assistantContent =
        payload.reply || payload.response || payload.message ||
        "Desculpe, não consegui processar sua solicitação.";

      setMessages((prev) => [...prev, { role: "assistant", content: assistantContent }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Desculpe, ocorreu um erro. Tente novamente." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute bottom-16 right-0 w-[360px] bg-card rounded-2xl shadow-float mb-2 border border-border overflow-hidden flex flex-col"
            style={{ maxHeight: "min(520px, 70vh)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-rose" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">Agente IA</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono-data text-[10px] text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 min-h-0 overflow-y-auto">
              <div className="px-4 py-4 space-y-3">
                {/* Welcome */}
                <div className="flex gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-rose/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-3 h-3 text-rose" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-foreground leading-relaxed">{WELCOME_MESSAGE}</p>
                  </div>
                </div>

                {/* Quick actions */}
                {messages.length === 0 && (
                  <div className="flex flex-col gap-2 pl-8">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action}
                        onClick={() => sendMessage(action)}
                        disabled={isLoading}
                        className="text-left text-xs px-3 py-2 rounded-xl border border-rose/30 text-rose hover:bg-rose/10 hover:border-rose/60 transition-all duration-200 disabled:opacity-50"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                )}

                {/* Conversation */}
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : ""}`}>
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 rounded-full bg-rose/20 flex items-center justify-center shrink-0 mt-0.5">
                        <MessageSquare className="w-3 h-3 text-rose" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[85%] ${
                        msg.role === "user"
                          ? "bg-accent text-accent-foreground rounded-tr-md"
                          : "bg-secondary text-foreground rounded-tl-md"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <div className="text-sm leading-relaxed prose prose-sm dark:prose-invert max-w-none [&_p]:m-0">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Loading */}
                {isLoading && (
                  <div className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare className="w-3 h-3 text-accent" />
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tl-md px-4 py-3">
                      <Loader2 className="w-4 h-4 text-muted-foreground animate-spin" />
                    </div>
                  </div>
                )}
                <div ref={bottomRef} aria-hidden="true" className="h-0" />
              </div>
            </ScrollArea>

            {/* Input */}
            <form onSubmit={handleSubmit} className="px-3 py-3 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua pergunta..."
                disabled={isLoading}
                className="flex-1 bg-secondary rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-accent/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-40"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-float ease-apple transition-shadow duration-300 hover:shadow-card-hover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-5 h-5 text-accent" />
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-accent">
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
        </span>
      </motion.button>
    </div>
  );
};

export default AIAgentButton;
