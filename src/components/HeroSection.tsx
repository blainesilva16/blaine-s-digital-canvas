import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const transition = { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-[hsla(330,80%,75%,0.07)] to-accent/[0.10]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(188,100%,77%,0.14)_0%,_transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(330,80%,85%,0.12)_0%,_transparent_80%)]" />

      {/* Grid SVG */}
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

      {/* Floating cyan orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, hsla(188, 100%, 47%, 0.06) 0%, transparent 70%)" }}
        animate={{ y: [0, -20, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating rose orb */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full"
        style={{ background: "radial-gradient(circle, hsla(330, 80%, 75%, 0.08) 0%, transparent 70%)" }}
        animate={{ y: [0, 15, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* L1: Background Name  - class items-center  was on the div*/}
      <div className="absolute inset-0 flex justify-center pointer-events-none select-none z-0">
        <motion.h1
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] lg:text-[15vw] font-black uppercase tracking-tighter text-foreground/[0.2] whitespace-nowrap antialiased"
        >
          Blaine Silva
        </motion.h1>
      </div>

      {/* Grid Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 w-full max-w-7xl items-center gap-12 px-6 lg:px-20 py-20">

        {/* Left Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-4 flex flex-col gap-6"
        >
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Cloud · Dados · Software
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight text-foreground text-rose">
            Precisão <br /> Digital <br /> & Dados.
          </h2>
          <p className="text-muted-foreground max-w-[30ch] text-base leading-relaxed">
            Onde a precisão dos dados encontra a escalabilidade da nuvem.
          </p>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
          className="lg:col-span-4 flex justify-center align-bottom"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", bounce: 0 }}
            className="relative w-full max-w-[300px] aspect-[3/4] bg-muted overflow-hidden rounded-2xl"
            style={{ boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15), 0 12px 24px -8px rgb(0 0 0 / 0.1)" }}
          >
            <img
              src="/my_image.png"
              alt="Blaine Silva"
              className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-700"
            />
          </motion.div>
        </motion.div>

        {/* Right Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-4 flex flex-col gap-8 lg:items-end lg:text-right"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Formação</span>
            <p className="text-base font-medium text-foreground">
              Futura Cientista de Dados · Matemática · AWS Cloud Practitioner
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Disponibilidade</span>
            <p className="text-base font-medium text-accent">Aberta a novos projetos</p>
          </div>
          <a
            href="#perfil"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium group hover:opacity-90 transition-opacity duration-300"
          >
            Explorar
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Modern gradient background — cyan + rose */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-[hsla(330,80%,75%,0.07)] to-accent/[0.10]" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(188,100%,77%,0.14)_0%,_transparent_80%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(330,80%,85%,0.12)_0%,_transparent_80%)]" />

//       {/* Subtle cloud grid SVG background */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
//         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
//               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(188, 100%, 47%)" strokeWidth="0.5" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       {/* Floating cyan accent orb */}
//       <motion.div
//         className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
//         style={{
//           background: "radial-gradient(circle, hsla(188, 100%, 47%, 0.06) 0%, transparent 70%)",
//         }}
//         animate={{ y: [0, -20, 0], scale: [1, 1.02, 1] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Floating rose accent orb */}
//       <motion.div
//         className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full"
//         style={{
//           background: "radial-gradient(circle, hsla(330, 80%, 75%, 0.08) 0%, transparent 70%)",
//         }}
//         animate={{ y: [0, 15, 0], scale: [1, 1.03, 1] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 text-center relative z-10">
//         <motion.p
//           className="font-mono-data text-sm tracking-widest uppercase text-accent mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ ...transition, delay: 0.1 }}
//         >
//           Cloud · Dados · Software
//         </motion.p>

//         <motion.h1
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-[1.1] mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ ...transition, delay: 0.2 }}
//         >
//           Blaine Silva.
//         </motion.h1>

//         <motion.p
//           className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ ...transition, delay: 0.35 }}
//         >
//           Onde a precisão dos dados encontra a escalabilidade da nuvem.
//         </motion.p>

//         <motion.p
//           className="text-base text-muted-foreground max-w-xl mx-auto text-pretty mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ ...transition, delay: 0.45 }}
//         >
//           Futura Cientista de Dados · Matemática · AWS Cloud Practitioner · Estudante de Ciência da Computação
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ ...transition, delay: 0.7 }}
//         >
//           <a
//             href="#perfil"
//             className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground ease-apple transition-colors duration-300"
//           >
//             Explorar
//             <ArrowDown className="w-4 h-4" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

export default HeroSection;
