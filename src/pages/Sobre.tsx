import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Target, Mail, Linkedin, Github, Instagram, Briefcase, BookOpen, Rocket, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const transition = { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const };

const timeline = [
  {
    year: "2019",
    icon: GraduationCap,
    title: "Formação em Matemática",
    description: "Base sólida em raciocínio lógico, álgebra e análise.",
  },
  {
    year: "2022",
    icon: Code2,
    title: "Ciência da Computação",
    description: "Cursando — engenharia de software, algoritmos e estruturas de dados.",
  },
  {
    year: "2023",
    icon: Award,
    title: "AWS Cloud Practitioner",
    description: "Certificação em fundamentos de computação em nuvem da Amazon.",
  },
  {
    year: "Atual",
    icon: Target,
    title: "Foco em Dados",
    description: "Pipelines, automação e análise com Python e ecossistema de dados.",
  },
];

const infoCards = [
  {
    icon: Briefcase,
    title: "Experiência",
    description: "Em breve — adicione aqui suas experiências profissionais.",
  },
  {
    icon: BookOpen,
    title: "Habilidades",
    description: "Em breve — adicione aqui suas principais habilidades técnicas.",
  },
  {
    icon: Rocket,
    title: "Objetivos",
    description: "Em breve — adicione aqui seus objetivos de carreira.",
  },
  {
    icon: Heart,
    title: "Interesses",
    description: "Em breve — adicione aqui seus interesses pessoais.",
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/blaine-silva-0ab04a178/" },
  { icon: Github, label: "GitHub", href: "https://github.com/blainesilva16" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/blainesilva16" },
];

const Sobre = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-accent/[0.06]" />
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
            className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.35 }}
          >
            Uma profissional que conecta rigor matemático à engenharia de software moderna,
            construindo soluções inteligentes na interseção entre cloud e dados.
          </motion.p>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.5 }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted/60 border border-border/50 text-muted-foreground hover:text-accent hover:border-accent/30 hover:bg-accent/5 ease-apple transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{s.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            className="font-mono-data text-sm tracking-widest uppercase text-accent mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Informações
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-5">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                className="group p-6 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 ease-apple transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...transition, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <card.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Linha do Tempo
          </motion.p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border/60" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="relative flex items-start gap-6 pl-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ ...transition, delay: i * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-background border-2 border-accent/40 flex items-center justify-center shadow-sm">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>

                  <div className="flex-1 p-5 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 ease-apple transition-all duration-300">
                    <span className="font-mono-data text-xs text-accent tracking-wider">{item.year}</span>
                    <h3 className="font-semibold text-primary mt-1 mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
            <h2 className="text-2xl font-semibold text-primary mb-3">Vamos conversar?</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Entre em contato pelas minhas redes sociais ou envie um e-mail.
            </p>
            <div className="flex items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent/10 text-accent hover:bg-accent/20 ease-apple transition-all duration-300 text-sm font-medium"
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Sobre;
