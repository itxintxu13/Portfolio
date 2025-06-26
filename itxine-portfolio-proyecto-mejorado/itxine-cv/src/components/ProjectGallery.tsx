
import { motion, HTMLMotionProps } from "framer-motion";

type ProjectGalleryProps = HTMLMotionProps<"section">;
interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  code: string;
  demo: string;
}

type ProjectCardProps = HTMLMotionProps<"div"> & {
  project: Project;
  index: number;
};

const projects = [
  {
    title: "To-Do App",
    image: "./images/projects/todo-app.png",
    description: "Una app de tareas con React y gestión avanzada de estado.",
    technologies: ["React", "Tailwind", "LocalStorage"],
    code: "#",
    demo: "#"
  },
  {
    title: "Buscador de Películas",
    image: "./images/projects/peliculas.jpg",
    description: "App que busca películas en tiempo real usando una API externa.",
    technologies: ["JavaScript", "Fetch API", "HTML/CSS"],
    code: "#",
    demo: "#"
  },
  {
    title: "Calculadora Moderna",
    image: "./images/projects/calculator.jpg",
    description: "Calculadora responsiva con operaciones básicas y tema oscuro.",
    technologies: ["JavaScript", "CSS Grid", "Modo oscuro"],
    code: "#",
    demo: "#"
  }
];

const ProjectCard = ({ project, index, ...props }: ProjectCardProps) => (
  <motion.div
    {...{
      ...props,
      className: "bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { delay: index * 0.2 }
    } as HTMLMotionProps<"div">}
  >
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-4 space-y-2">
      <h3 className="font-bold text-lg text-purple-600">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-sm">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-0.5 rounded-full">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 pt-2">
        <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">Ver Código</a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 hover:underline">Ver Demo</a>
      </div>
    </div>
  </motion.div>
);

export const ProjectGallery = (props: ProjectGalleryProps) => (
  <motion.section
    {...{
      ...props,
      className: "max-w-6xl mx-auto px-4 py-16",
      id: "gallery"
    } as HTMLMotionProps<"section">}
  >
    <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Galería de Proyectos</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  </motion.section>
);
