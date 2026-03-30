import { motion } from "framer-motion";
import { ArrowUpRight, Youtube, Github } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] as const } },
};

const projects = [
  {
    title: "Pipeline de Dados para Previsão do Tempo",
    description: "Automação de ETL com Python para processamento de dados extraídos de uma API de previsão do tempo.",
    youtube: "https://youtube.com/bscode16",
    tags: ["Python", "ETL", "Airflow", "AWS EC2", "Docker", "SQL"],
    github: "https://github.com/blainesilva16/weather_data_pipeline"
  },
  // {
  //   title: "Análise Preditiva",
  //   description: "Modelo de machine learning para análise preditiva com alto índice de acurácia.",
  //   youtube: "https://youtube.com",
  //   tags: ["Python", "ML", "Data"],
  //   github: "https://github.com/blainesilva16/weather_data_pipeline"
  // },
  {
    title: "Dashboard de Dados do MovieLens",
    description: "Visualização interativa de métricas e KPIs de um dataset do MovieLens.",
    youtube: "https://youtube.com/bscode16",
    tags: ["BigQuery", "Docker", "Metabase", "AWS EC2", "SQL"],
    github: "https://github.com/blainesilva16/projeto_analytics_filmes_metabase"
  },
  {
    title: "Deploy Portfolio Python",
    description: "Aplicação em Flask reunindo projetos pessoais de Python com deploy em instância EC2.",
    youtube: "https://youtube.com/bscode16",
    tags: ["AWS EC2", "APIs", "Python", "Backend", "Frontend"],
    github: "https://github.com/blainesilva16/Python-Portfolio"
  },
  { 
    title: "Dashboard de Dados com Insights de Negócios",
    description: "Visualização de métricas de uma empresa fictícia para avaliar performance.",
    youtube: "https://youtube.com/bscode16",
    tags: ["AWS S3", "AWS Glue", "Amazon Athena", "Metabase", "SQL"],
    github: "https://github.com/blainesilva16/projeto_desafio_tecnico_lighthouse"
  },
  {
    title: "Pipeline de Dados entre dois bancos de dados", 
    description: "Automação de transferência de dados entre dois bancos de dados usando Python e SQL.",
    youtube: "https://youtube.com/bscode16",
    tags: ["Python", "ETL", "SQL", "PostgreSQL", "MySQL"],
    github: "https://github.com/blainesilva16/desafio-engenharia-dados-lighthouse0"
  },
  { 
    title: "Agente de IA para WhatsApp via N8N",
    description: "Integração do N8N com a API Oficial do WhatsApp para envio de mensagens geradas por IA.",
    youtube: "https://youtube.com/bscode16",
    tags: ["N8N", "Gemini", "WhatsApp Official API","Redis","Supabase"],
    github: "https://github.com/blainesilva16/agente_ia_n8n"
  },
  // { 
  //   title: "Implementação da plataforma N8N na nuvem",
  //   description: "N8N instalado com Docker em uma instância EC2 com endereço DNS pelo Route 53.",
  //   youtube: "https://youtube.com/bscode16",
  //   tags: ["AWS EC2", "N8N", "Docker", "AWS Route 53"],
  //   github: "https://github.com/blainesilva16/projeto_desafio_tecnico_lighthouse"
  // },
  { 
    title: "Sistema de Agregador de Vagas",
    description: "Aplicação desenvolvida em grupo que reúne vagas de emprego de diversas plataformas.",
    youtube: "https://youtube.com/bscode16",
    tags: ["Python", "MySQL"],
    github: "https://github.com/blainesilva16/agregador_vagas"
  },
  // { 
  //   title: "Automação de organização da pasta de Downloads",
  //   description: "Código executável que organiza os arquivos da pasta Downloads em pastas por categoria.",
  //   youtube: "https://youtube.com/bscode16",
  //   tags: ["Python", "Automação"],
  //   github: "https://github.com/blainesilva16/projeto_desafio_tecnico_lighthouse"
  // },
  {
    title: "Conversor de Texto para Áudio",
    description: "Aplicação que converte texto em áudio usando uma API do Google.",
    youtube: "https://youtube.com/bscode16",
    tags: ["Flask (Python)", "PyPDF", "Google Text-to-Speech"],
    github: "https://github.com/blainesilva16/text-to-speech-py"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={sectionVariants} className="mb-12">
            <p className="font-mono-data text-sm tracking-widest uppercase text-rose mb-4">
              Projetos
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
              Prova de execução.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={sectionVariants}
                className="group bg-muted rounded-2xl p-6 shadow-card ease-apple transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-pointer hover:glow-cyan"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight  className="w-4 h-4 text-muted-foreground group-hover:text-accent ease-apple transition-colors duration-200" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 text-pretty">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-background text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                      <Youtube className="font-mono-data text-xs text-rose font-medium" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="font-mono-data text-xs text-accent font-medium" />
                    </a>
                  </div>
                  {/* <span className="font-mono-data text-xs text-accent font-medium">
                    {project.youtube}
                  </span> */}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={sectionVariants}
            className="text-center text-sm text-muted-foreground mt-8 italic"
          >
            — Mais projetos em breve.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
