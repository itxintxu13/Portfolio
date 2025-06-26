
import { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type HeaderProps = HTMLMotionProps<"header">;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.header
      {...{
        initial: { y: -100 },
        animate: { y: 0 },
        transition: { duration: 0.6 },
        className: "fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur border-b border-gray-200 dark:border-gray-800 px-4 py-3 shadow-sm"
      } as HeaderProps}
    >
      <nav className="w-full flex flex-row items-center justify-between px-0 md:px-2">
        <div className="flex items-center flex-shrink-0 justify-start w-auto md:w-auto">
          <img src="./images/projects/logo.svg" alt="Logo Itxine.dev" className="h-20 w-20 object-contain" />
        </div>
        <div className="flex items-center gap-3 md:hidden">
          {/* Botón hamburguesa para móvil */}
          <button
            className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none ml-2"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-purple-600 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-purple-600 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-purple-600 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        {/* Menú de navegación */}
        <ul className={`flex-col md:flex-row flex md:flex gap-4 md:gap-8 text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 fixed md:static top-16 right-0 bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent shadow-lg md:shadow-none p-6 md:p-0 rounded-l-xl md:rounded-none transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'} md:flex justify-end items-end md:justify-end md:items-center w-full md:w-auto md:ml-0 whitespace-nowrap`}
            style={{ minWidth: menuOpen ? '180px' : undefined }}
            onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about" className="relative hover:text-purple-500 block py-2 md:py-0 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">Sobre mí</a></li>
          <li><a href="#skills" className="relative hover:text-purple-500 block py-2 md:py-0 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">Habilidades</a></li>
          <li><a href="#certifications" className="relative hover:text-purple-500 block py-2 md:py-0 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">Certificaciones</a></li>
          <li><a href="#projects" className="relative hover:text-purple-500 block py-2 md:py-0 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">Proyectos</a></li>
          <li><a href="#contact" className="relative hover:text-purple-500 block py-2 md:py-0 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full after:rounded-full">Contacto</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

// ...
