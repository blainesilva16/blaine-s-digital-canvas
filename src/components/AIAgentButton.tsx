import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

const AIAgentButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat panel placeholder */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute bottom-16 right-0 w-80 bg-background rounded-2xl shadow-float p-6 mb-2"
        >
          <p className="text-sm font-semibold text-foreground mb-2">Agente IA</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Em breve você poderá conversar com meu agente de IA para saber mais sobre meu trabalho e experiência.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono-data text-xs text-muted-foreground">Online</span>
          </div>
        </motion.div>
      )}

      {/* Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-float ease-apple transition-shadow duration-300 hover:shadow-card-hover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-5 h-5 text-accent" />
        {/* Ping indicator */}
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-accent">
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
        </span>
      </motion.button>
    </div>
  );
};

export default AIAgentButton;
