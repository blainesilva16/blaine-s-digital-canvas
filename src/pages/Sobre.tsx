import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Target, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const transition = { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const };

const timeline = [
  {
    icon: GraduationCap,
    title: "Formação em Matemática",
    description: "Base sólida em raciocínio lógico, álgebra e análise.",
  },
  {
    icon: Code2,
    title: "Ciência da Computação",
    description: "Cursando — engenharia de software, algoritmos e estruturas de dados.",
  },
  {
    icon: Award,
    title: "AWS Cloud Practitioner",
    description: "Certificação em fundamentos de computação em nuvem da Amazon.",
  },
  {
    icon: Target,
    title: "Foco em Dados",
    description: "Pipelines, automação e análise com Python e ecossistema de dados.",
  },
];

const Sobre = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.04]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.p
            className="font-mono-data text-sm tracking-widest uppercase text-accent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            Sobre mim
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl font-semibold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
          >
            Quem é Blaine Silva.
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.35 }}
          >
            Uma profissional que conecta rigor matemático à engenharia de software moderna,
            construindo soluções inteligentes na interseção entre cloud e dados.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            className="font-mono-data text-sm tracking-widest uppercase text-accent mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trajetória
          </motion.p>

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-5 p-6 rounded-xl bg-background shadow-card ease-apple transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...transition, delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for more info */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            className="p-12 rounded-2xl border border-border/50 bg-muted/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-primary mb-2">Mais informações em breve</h2>
            <p className="text-muted-foreground text-sm">
              Esta seção será atualizada com mais detalhes sobre experiência, habilidades e contato.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Sobre;
