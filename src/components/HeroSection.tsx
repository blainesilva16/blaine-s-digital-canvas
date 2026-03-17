import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const transition = { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-accent/[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(188,100%,47%,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(222,47%,11%,0.05)_0%,_transparent_50%)]" />

      {/* Subtle cloud grid SVG background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(188, 100%, 47%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating cyan accent orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(188, 100%, 47%, 0.06) 0%, transparent 70%)",
        }}
        animate={{ y: [0, -20, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 text-center relative z-10">
        <motion.p
          className="font-mono-data text-sm tracking-widest uppercase text-accent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
        >
          Cloud · Data · Matemática
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
        >
          Blaine Silva.
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.35 }}
        >
          Onde a precisão matemática encontra a escalabilidade da nuvem.
        </motion.p>

        <motion.p
          className="text-base text-muted-foreground max-w-xl mx-auto text-pretty mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.45 }}
        >
          Cientista da Computação · Matemática · AWS Cloud Practitioner · Python · Dados
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.7 }}
        >
          <a
            href="#perfil"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground ease-apple transition-colors duration-300"
          >
            Explorar
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
