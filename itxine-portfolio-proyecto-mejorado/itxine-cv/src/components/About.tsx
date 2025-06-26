

import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.section
      {...{
        id: "about",
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "max-w-3xl mx-auto px-4 py-16 text-center"
      }}
    >
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Sobre Mí</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Soy Itxine López Galdeano, desarrolladora full stack con formación en 42Urduliz.
        Poseo certificaciones IFCD0210 e IFCD0112, y conocimientos, en C, Java, JS, React, PHP, Shell y más.
        Me apasiona crear experiencias digitales que combinan funcionalidad, diseño y eficiencia.
      </p>
    </motion.section>
  );
};
