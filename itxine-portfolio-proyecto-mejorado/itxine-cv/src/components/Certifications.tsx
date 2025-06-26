
import { motion, HTMLMotionProps } from 'framer-motion';

type SectionProps = HTMLMotionProps<"section">;

export const Certifications = () => (
  <motion.section
    {...{
      id: "certifications",
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8 },
      className: "max-w-4xl mx-auto px-4 py-16 text-center"
    } as SectionProps}
  >
    <h2 className="text-4xl font-bold text-blue-600 mb-6">Certificaciones</h2>
    <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
      <li><strong>IFCD0210</strong> - Desarrollo de aplicaciones con tecnologías web</li>
      <li><strong>IFCD0112</strong> - Desarrollo de aplicaciones con tecnologías de objetos</li>
      <li><strong>Técnico en Sistemas Microinformáticos y Redes</strong></li>
    </ul>
  </motion.section>
);
