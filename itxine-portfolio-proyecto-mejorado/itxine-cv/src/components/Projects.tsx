
import { motion, HTMLMotionProps } from 'framer-motion';

type ProjectsSectionProps = HTMLMotionProps<"section">;

export const Projects = () => (
  <motion.section
    {...{
      id: "projects",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      className: "max-w-5xl mx-auto px-4 py-16"
    } as ProjectsSectionProps}
  >
    <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Proyectos Destacados</h2>
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Manipulación del DOM</h3>
        <p className="text-gray-700 dark:text-gray-300">Proyecto interactivo usando JavaScript puro para modificar el DOM en tiempo real.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">AJAX Simulado</h3>
        <p className="text-gray-700 dark:text-gray-300">Simulación de peticiones asíncronas con JSON y JavaScript.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Componente React</h3>
        <p className="text-gray-700 dark:text-gray-300">Uso de React para generar interfaces reactivas modernas.</p>
      </div>
    </div>
  </motion.section>
);
