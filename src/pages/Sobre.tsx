import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Target, Mail, Linkedin, Github, Instagram, Youtube, Briefcase, BookOpen, Rocket, Heart, Laptop2, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const transition = { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const };

const timeline = [
  {
    year: "2019",
    icon: GraduationCap,
    title: "Formação no Ensino Médio com Técnico em Informática - IFRJ",
    description: "Conteúdos de lógica de programação, redes, hardware e desenvolvimento de software.",
  },
  {
    year: "2024",
    icon: GraduationCap,
    title: "Formação em Licenciatura em Matemática - UFF",
    description: "Conteúdos envolvendo raciocínio lógico, cálculo, álgebra, análise e estatística.",
  },
  {
    year: "2025",
    icon: Code2,
    title: "Conclusão de Cursos",
    description: "Certificação em Desenvolvimento Web e Python.",
  },
  {
    year: "2025",
    icon: Award,
    title: "AWS Cloud Practitioner",
    description: "Certificação em fundamentos de computação em nuvem da Amazon.",
  },
  {
    year: "2025",
    icon: Phone,
    title: "Projeto Real de Automação",
    description: "Implementação de um Sistema de Envio de Mensagens via WhatsApp."
  },
  {
    year: "2026",
    icon: Laptop2,
    title: "Ciência da Computação - UNESA",
    description: "Cursando — engenharia de software, algoritmos e estruturas de dados.",
  },  
  {
    year: "Atual",
    icon: Target,
    title: "Foco em Dados",
    description: "Pipelines, automação, análise, criação de dashboards e geração de insights e modelos preditivos com o ecossistema de dados.",
  },
  {
    year: "Futuro",
    icon: Rocket,
    title: "Objetivo Profissional",
    description: "Contribuir, aprender e evoluir até chegar a ser Cientista de Dados, com mais certificações e cursos profissionalizantes.",
  }
];

const infoCards = [
  {
    icon: Briefcase,
    title: "Experiência",
    description: "Pipelines de Dados (ETL) - Análise Exploratória - Dashboards - Machine Learning - Frontend - Backend - Computação em Nuvem - Controle de Versão.",
  },
  {
    icon: BookOpen,
    title: "Habilidades",
    description: "Python - Machine Learning - SQL - Docker - Apache Airflow - Metabase - AWS - GCP - API - JavaScript - Github - N8N.",
  },
  {
    icon: Rocket,
    title: "Objetivos",
    description: "Ser uma profissional de excelência em Ciência de Dados, realizando análises precisas através da Estatística, Matemática e Programação para resolver problemas de negócios, prever tendências futuras e auxiliar na tomada de decisão estratégica.",
  },
  {
    icon: Heart,
    title: "Interesses",
    description: "Meu cachorrinho - Praia - Amigos - Família - Viagens - Passeios - Piano - Séries (doramas) - Kpop - Receitas - Bullet Journal.",
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/blaine-silva-0ab04a178/" },
  { icon: Github, label: "GitHub", href: "https://github.com/blainesilva16" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/blainesilva16" },
  { icon: Youtube, label: "Youtube", href: "https://youtube.com/bscode16" },
];

const Sobre = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[60%_40%] w-full max-w-7xl items-center gap-12 px-6 lg:px-20 py-20">

        <section className="relative pt-32 pb-20 overflow-hidden lg:pt-0 lg:pb-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-accent/[0.06]" />
          <div className="max-w-2xl mx-auto px-6 relative z-10">
            <motion.p
              className="font-mono-data text-sm tracking-widest uppercase text-rose mb-4"
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
              {/* Uma profissional que conecta rigor matemático à engenharia de software moderna,
              construindo soluções inteligentes na interseção entre cloud e dados. */}
              Sou uma profissional graduada em Matemática, atualmente cursando Ciência da Computação
              e transicionando para a área de dados, combinando pensamento analítico com experiência prática em
              Engenharia e Ciência de Dados e Computação em Nuvem (AWS, Google Cloud Platform).
            </motion.p>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3 mb-4"
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
            
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.35 }}
            >
              Através de projetos práticos, desenvolvi pipelines de dados, construí dashboards, fiz o deploy de aplicações
              em ambientes de nuvem e construí soluções em Python e em JavaScript focadas em qualidade e performance.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.35 }}
            >
              Atualmente busco minha primeira oportunidade profissional para contribuir, aprender e 
              evoluir até chegar na senioridade em Ciência de Dados.
            </motion.p>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "circOut" }}
          className="flex justify-center"
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
      </div>
      {/* Info Cards */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            className="font-mono-data text-sm tracking-widest uppercase text-rose mb-10"
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
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${i % 2 === 0 ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-rose/10 group-hover:bg-rose/20'}`}>
                    <card.icon className={`w-5 h-5 ${i % 2 === 0 ? 'text-accent' : 'text-rose'}`} />
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
            className="font-mono-data text-sm tracking-widest uppercase text-rose mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Linha do Tempo
          </motion.p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-rose/40 to-accent/40" />

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
                  <div className={`relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-background border-2 flex items-center justify-center shadow-sm ${i % 2 === 0 ? 'border-accent/40' : 'border-rose/40'}`}>
                    <item.icon className={`w-5 h-5 ${i % 2 === 0 ? 'text-accent' : 'text-rose'}`} />
                  </div>

                  <div className="flex-1 p-5 rounded-xl bg-card border border-border/50 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 ease-apple transition-all duration-300">
                    <span className={`font-mono-data text-xs tracking-wider ${i % 2 === 0 ? 'text-accent' : 'text-rose'}`}>{item.year}</span>
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
            <Mail className="w-8 h-8 text-rose mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-primary mb-3">Vamos conversar?</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Entre em contato pelas minhas redes sociais.
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
