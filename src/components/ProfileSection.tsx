import { motion } from "framer-motion";
import { Cloud, Code2, BarChart3, Sigma } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } },
};

const badges = [
  { label: "Python", icon: Code2 },
  { label: "AWS Cloud Practitioner", icon: Cloud, glow: true },
  { label: "Análise de Dados", icon: BarChart3 },
  { label: "Matemática", icon: Sigma },
];

const ProfileSection = () => {
  return (
    <section id="perfil" className="py-32 bg-muted/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Left column - 3/5 */}
          <motion.div className="md:col-span-3" variants={sectionVariants}>
            <p className="font-mono-data text-sm tracking-widest uppercase text-accent mb-4">
              Perfil
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-6">
              Da teoria à prática.
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-pretty">
              <p>
                Com formação em Matemática e atualmente cursando Ciência da Computação, 
                construo soluções que unem rigor analítico à engenharia de software moderna.
              </p>
              <p>
                Certificada AWS Cloud Practitioner, com foco em pipelines de dados, 
                automação e análise de alta precisão usando Python e o ecossistema de dados.
              </p>
              <p className="text-muted-foreground text-sm italic">
                — As informações detalhadas serão adicionadas em breve.
              </p>
            </div>
          </motion.div>

          {/* Right column - 2/5 */}
          <motion.div className="md:col-span-2" variants={sectionVariants}>
            <p className="font-mono-data text-sm tracking-widest uppercase text-accent mb-4">
              Stack Técnica
            </p>
            <div className="space-y-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg bg-background shadow-card ease-apple transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover ${
                    badge.glow ? "glow-cyan" : ""
                  }`}
                >
                  <badge.icon className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
