import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] as const } },
};

const projects = [
  {
    title: "Pipeline de Dados",
    description: "Automação de ETL com Python para processamento de dados extraídos de uma API de previsão do tempo.",
    youtube: "https://youtube.com",
    tags: ["Python", "ETL", "Airflow", "AWS EC2", "Docker"],
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
    youtube: "https://youtube.com",
    tags: ["BigQuery", "Docker", "Metabase", "AWS EC2"],
    github: "https://github.com/blainesilva16/projeto_analytics_filmes_metabase"
  },
  {
    title: "Deploy Portfolio Python",
    description: "Aplicação em Flask reunindo projetos pessoais de Python com deploy em instância EC2.",
    youtube: "https://youtube.com",
    tags: ["AWS EC2", "APIs", "Python", "Backend", "Frontend"],
    github: "https://github.com/blainesilva16/Python-Portfolio"
  },
  { 
    title: "Dashboard de Dados com Insights de Negócios",
    description: "Visualização de métricas de uma empresa fictícia para avaliar performance.",
    youtube: "https://youtube.com",
    tags: ["AWS S3", "AWS Glue", "Amazon Athena", "Amazon QuickSight"],
    github: "https://github.com/blainesilva16/projeto_desafio_tecnico_lighthouse"
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
            <p className="font-mono-data text-sm tracking-widest uppercase text-accent mb-4">
              Projetos
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
              Prova de execução.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={sectionVariants}
                className="group bg-muted rounded-2xl p-6 shadow-card ease-apple transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-pointer"
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
                  <span className="font-mono-data text-xs text-accent font-medium">
                    {project.youtube}
                  </span>
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
